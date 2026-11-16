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
  const [visible, setVisible] = useState<boolean>(() => {
    return typeof window !== "undefined" && typeof IntersectionObserver === "undefined";
  });

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -36px 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  let hiddenTransform = "scale(0.92)";
  if (variant === "left") {
    hiddenTransform = "translate3d(-42px, 0, 0) scale(0.975)";
  } else if (variant === "right") {
    hiddenTransform = "translate3d(42px, 0, 0) scale(0.975)";
  } else if (variant === "fade") {
    hiddenTransform = "scale(0.985)";
  }

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0, 0, 0) scale(1)" : hiddenTransform,
    filter: visible ? "blur(0px)" : "blur(7px)",
    transitionProperty: "opacity, transform, filter",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform, filter",
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
