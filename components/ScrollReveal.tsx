"use client";

import React, { useEffect, useRef, useState } from "react";

export type RevealVariant = "left" | "right" | "zoom" | "fade";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

/**
 * Choreographed Scroll-Reveal Engine (Strictly zero bottom-up translateY slides).
 * Uses IntersectionObserver + hardware-accelerated horizontal glides, optical depth zoom,
 * and lens de-blur transitions.
 */
export function ScrollReveal({
  children,
  variant = "zoom",
  delay = 0,
  duration = 780,
  className = "",
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const rect = node.getBoundingClientRect();
    const alreadyInViewport = rect.top < window.innerHeight + 40;
    if (alreadyInViewport) {
      return;
    }

    const frameId = requestAnimationFrame(() => {
      setVisible(false);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -36px 0px",
      }
    );

    observer.observe(node);
    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [threshold]);

  let hiddenTransform = "scale(0.94)";
  if (variant === "left") {
    hiddenTransform = "translate3d(-32px, 0, 0) scale(0.98)";
  } else if (variant === "right") {
    hiddenTransform = "translate3d(32px, 0, 0) scale(0.98)";
  } else if (variant === "fade") {
    hiddenTransform = "scale(0.985)";
  }

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0, 0, 0) scale(1)" : hiddenTransform,
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delay}ms`,
    willChange: visible ? "auto" : "opacity, transform",
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`${visible ? "om-in-view" : "om-pre-view"} ${className}`}
    >
      {children}
    </div>
  );
}
