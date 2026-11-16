"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  SERVICES,
  PROCESS_STEPS,
  CLIENT_QUESTIONS,
  FAQ_ITEMS,
} from "@/lib/site-data";
import { CircledArrow } from "./Navbar";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Seamless concave SVG corner fillet for inverted border-radius cutouts.
 */
export function InvertedFillet({
  fillClass = "text-[var(--bg-canvas)]",
  position = "bottom-right",
  size = 20,
  className = "",
}: {
  fillClass?: string;
  position?: "bottom-right" | "top-left" | "top-right" | "bottom-left";
  size?: number;
  className?: string;
}) {
  let d = "M 20 0 L 21.5 0 L 21.5 21.5 L 0 21.5 L 0 20 A 20 20 0 0 0 20 0 Z";
  if (position === "top-right") {
    d = "M 0 -1.5 L 21.5 -1.5 L 21.5 20 L 20 20 A 20 20 0 0 0 0 0 Z";
  } else if (position === "bottom-left") {
    d = "M -1.5 0 L 0 0 A 20 20 0 0 1 20 20 L 20 21.5 L -1.5 21.5 Z";
  } else if (position === "top-left") {
    d = "M -1.5 -1.5 L 20 -1.5 L 20 0 A 20 20 0 0 1 0 20 L -1.5 20 Z";
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      style={{ overflow: "visible" }}
      className={`pointer-events-none select-none ${fillClass} ${className}`}
    >
      <path d={d} fill="currentColor" />
    </svg>
  );
}

/**
 * Emerald Green Handshake SVG Icon (Zero emojis anywhere)
 */
export function GreenHandshakeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={`inline-block text-[#00B64F] ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 17a1 1 0 0 1 1 1" />
      <path d="M14 14l-2.5 2.5a1.5 1.5 0 0 1-2.12 0l-.88-.88a1.5 1.5 0 0 1 0-2.12L11 11" />
      <path d="M3 7l4-3 5 4 4-4 5 3v6l-5 5-4-1-5-3-4-2V7z" />
    </svg>
  );
}

export function EyebrowCircleIcon({ type }: { type: string }) {
  if (type === "briefcase") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    );
  }
  if (type === "key") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="8" cy="15" r="4" />
        <path d="M10.85 12.15L19 4M18 5l2 2M15 8l2 2" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "users") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 19c0-3.3 3.1-6 7-6s7 2.7 7 6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Hand-drawn curved underline SVG that draws itself from left to right when scrolled into view.
 */
export function AnimatedUnderline({
  className = "-bottom-2 left-0 w-full",
}: {
  className?: string;
}) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute text-[#FAD2C8] dark:text-[#FF6B00]/55 ${className}`}
      viewBox="0 0 220 12"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        pathLength={1}
        d="M3 9.5C58 2.5 154 2.5 217 8.5"
        stroke="currentColor"
        strokeWidth="3.8"
        strokeLinecap="round"
        className={inView ? "om-draw-underline" : "om-underline-idle"}
      />
    </svg>
  );
}

/**
 * Reusable Omotive Eyebrow
 */
export function OmotiveEyebrow({
  first,
  second,
  icon = "monitor",
  dark = false,
  centered = false,
}: {
  first: string;
  second: string;
  icon?: string;
  dark?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFE4DE] text-[#121214]">
        <EyebrowCircleIcon type={icon} />
      </span>
      <span
        className={`inline-flex items-center gap-1.5 text-[13px] font-normal ${
          dark ? "text-zinc-300" : "text-[var(--text-secondary)]"
        }`}
      >
        <span>{first}</span>
        <GreenHandshakeIcon className="h-4 w-4" />
        <span>{second}</span>
      </span>
    </div>
  );
}

const SERVICE_PREVIEWS: Record<
  string,
  { url: string; alt: string; badge: string }
> = {
  websites: {
    url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=85",
    alt: "Open laptop on a minimalist studio pedestal displaying a clean responsive website",
    badge: "Responsive",
  },
  "local-seo": {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=85",
    alt: "Laptop displaying local Google search and map visibility",
    badge: "Local Rank",
  },
  "quote-followup": {
    url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=85",
    alt: "Smartphone showing instant quote alert notification",
    badge: "Same-Day",
  },
  "care-plan": {
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=85",
    alt: "Clean monthly report view on laptop",
    badge: "Managed",
  },
};

const PROCESS_PHOTOS = [
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=85",
    alt: "Developer auditing a local contractor website at desk",
  },
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=85",
    alt: "Team discussing the website mockup around a warm wooden table with laptops",
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85",
    alt: "Modern sunlit studio window overlooking the city",
  },
];

/**
 * Portals the modal directly to document.body at z-[9999] so it is never trapped
 * inside the Hero portrait's z-10 stacking context below the 99% and Built for Mobile cards.
 */
export function HeroWalkthroughTrigger() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const modalContent = open ? (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md ev-fade"
      role="dialog"
      aria-modal="true"
      aria-label="How Evamore Works"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] border border-white/15 bg-[#141416] p-6 text-white shadow-2xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="text-xs font-medium text-[#FF6B00]">
              3-Step System Walkthrough
            </p>
            <h3 className="om-h2 mt-1 text-xl text-white sm:text-2xl">
              How we turn local searches into booked jobs
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="shrink-0 rounded-full border border-white/15 bg-white/5 p-2 text-zinc-300 hover:border-[#FF6B00] hover:text-white cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-[#FF6B00]/50"
            >
              <span className="text-xs font-semibold text-[#00B64F]">
                Step {item.step}
              </span>
              <h4 className="mt-2 text-base font-medium text-white">
                {item.title}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
          <p className="text-xs text-zinc-400">
            Approve your free mockup before we write a line of final code.
          </p>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="om-btn-primary"
          >
            <span>Get a free mockup</span>
            <CircledArrow className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-2.5 text-[12.5px] font-medium text-[var(--text-primary)] cursor-pointer"
      >
        <span className="om-play-pulse flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/35 transition-transform duration-200 group-hover:scale-110">
          <svg className="h-3.5 w-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="group-hover:text-[#FF6B00] transition-colors">
          How it works
        </span>
      </button>

      {mounted && modalContent ? createPortal(modalContent, document.body) : null}
    </>
  );
}

/**
 * 1:1 Match to Close-Up #1:
 * Services Accordion with Unclipped Bottom-Right Cutout Pill
 */
export function ServicesAccordionSection() {
  const orderedServices = [
    SERVICES[1], // Row 1: Local SEO
    SERVICES[0], // Row 2: Websites (Expanded by default!)
    SERVICES[2], // Row 3: Quote Follow-Up
    SERVICES[3], // Row 4: Care Plan
  ];
  const [activeId, setActiveId] = useState<string>("websites");

  return (
    <div>
      {orderedServices.map((service) => {
        const isOpen = service.id === activeId;
        const preview = SERVICE_PREVIEWS[service.id] || SERVICE_PREVIEWS.websites;

        return (
          <div
            key={service.id}
            className={`border-b transition-colors duration-200 ${
              isOpen ? "border-[#FF6B00] py-6" : "border-[var(--divider-line)] py-5"
            } first:pt-0`}
          >
            {!isOpen ? (
              <button
                type="button"
                onClick={() => setActiveId(service.id)}
                className="flex w-full items-center justify-between text-left cursor-pointer group"
                aria-expanded={false}
              >
                <span className="text-2xl sm:text-[26px] font-medium tracking-tight text-[var(--text-primary)] transition-all duration-200 group-hover:translate-x-1.5 group-hover:text-[#FF6B00]">
                  {service.title}
                </span>
                <svg
                  className="h-5 w-5 text-[var(--text-primary)] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#FF6B00]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ) : (
              <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-12 items-start ev-fade">
                <div className="sm:col-span-5">
                  <button
                    type="button"
                    onClick={() => setActiveId(service.id)}
                    className="text-left text-2xl sm:text-[26px] font-medium tracking-tight text-[#FF6B00] cursor-pointer"
                    aria-expanded={true}
                  >
                    {service.title}
                  </button>
                  <p className="mt-4 max-w-[205px] text-[12.5px] leading-[1.58] text-[var(--text-secondary)]">
                    {service.summary}
                  </p>
                </div>

                <div className="sm:col-span-7 flex items-start justify-between gap-3">
                  <div className="group relative h-[150px] w-[230px] sm:w-[240px]">
                    <div className="h-full w-full overflow-hidden rounded-[22px] bg-[#ECEAE6]">
                      <img
                        src={preview.url}
                        alt={preview.alt}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="absolute -bottom-[1px] -right-[1px] z-10 rounded-tl-[18px] bg-[var(--bg-canvas)] pl-3 pt-2 pb-0.5 pr-0.5">
                      <InvertedFillet
                        position="bottom-right"
                        size={16}
                        className="absolute bottom-0 -left-[15px]"
                      />
                      <InvertedFillet
                        position="bottom-right"
                        size={16}
                        className="absolute -top-[15px] right-0"
                      />
                      <span className="inline-block rounded-full border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-4 py-1 text-[11px] font-medium text-[var(--text-primary)] shadow-2xs transition-colors group-hover:border-[#FF6B00]">
                        {preview.badge}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveId(service.id)}
                    aria-label="Expanded service"
                    className="mt-1 text-[#FF6B00] cursor-pointer"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/**
 * 1:1 Match to Close-Up #2 with Smooth Morphing Carousel Transition
 */
export function ProcessShowcaseSection() {
  const [centerIndex, setCenterIndex] = useState<number>(1);

  const leftIndex = (centerIndex + PROCESS_STEPS.length - 1) % PROCESS_STEPS.length;
  const rightIndex = (centerIndex + 1) % PROCESS_STEPS.length;

  const prevStep = () => setCenterIndex(leftIndex);
  const nextStep = () => setCenterIndex(rightIndex);

  const centerStep = PROCESS_STEPS[centerIndex];

  return (
    <ScrollReveal variant="zoom" duration={850} className="relative mx-auto max-w-[1240px]">
      {/* Desktop Smooth Morphing 3-Slot Stage */}
      <div className="hidden md:block relative h-[370px] w-full">
        {PROCESS_STEPS.map((step, index) => {
          const isCenter = index === centerIndex;
          const isLeft = index === leftIndex;
          const photo = PROCESS_PHOTOS[index];

          let posStyle: React.CSSProperties = {
            left: "81%",
            width: "19%",
            height: "285px",
            zIndex: 10,
          };

          if (isCenter) {
            posStyle = {
              left: "20%",
              width: "60%",
              height: "370px",
              zIndex: 20,
            };
          } else if (isLeft) {
            posStyle = {
              left: "0%",
              width: "19%",
              height: "285px",
              zIndex: 10,
            };
          }

          return (
            <div
              key={step.step}
              onClick={() => {
                if (isLeft) prevStep();
                else if (!isCenter) nextStep();
              }}
              style={{
                ...posStyle,
                transition:
                  "left 680ms cubic-bezier(0.22, 1, 0.36, 1), width 680ms cubic-bezier(0.22, 1, 0.36, 1), height 680ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              className={`group absolute bottom-0 ${
                isCenter ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[28px]">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isCenter
                      ? "bg-gradient-to-t from-black/80 via-black/15 to-transparent"
                      : "bg-black/20 group-hover:bg-black/5"
                  }`}
                />

                <div
                  className={`absolute bottom-5 left-6 z-10 max-w-[44%] transition-opacity duration-500 ${
                    isCenter ? "opacity-100 delay-150" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-lg sm:text-[21px] font-medium tracking-tight text-white">
                    {step.caption}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div
          style={{ left: "50%", width: "30.2%" }}
          className="absolute -bottom-[2px] z-30 rounded-tl-[24px] bg-[var(--bg-peach)] pl-5 pt-3.5 pb-1.5 pr-3"
        >
          <InvertedFillet
            fillClass="text-[var(--bg-peach)]"
            position="bottom-right"
            size={22}
            className="absolute bottom-0 -left-[21px]"
          />
          <InvertedFillet
            fillClass="text-[var(--bg-peach)]"
            position="bottom-right"
            size={22}
            className="absolute -top-[21px] right-0"
          />
          <p
            key={centerStep.step}
            className="text-[11.5px] sm:text-[12.5px] leading-[1.48] text-[var(--text-secondary)] ev-fade"
          >
            {centerStep.title} {centerStep.description}
          </p>
        </div>

        <button
          type="button"
          onClick={prevStep}
          aria-label="Previous process step"
          style={{ left: "20%" }}
          className="absolute top-[48%] -translate-x-1/2 -translate-y-1/2 z-30 flex h-13 w-13 items-center justify-center rounded-full bg-[var(--bg-peach)] p-1.5 cursor-pointer"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#121214] shadow-sm transition-transform duration-200 hover:scale-110">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>

        <button
          type="button"
          onClick={nextStep}
          aria-label="Next process step"
          style={{ left: "80%" }}
          className="absolute top-[48%] -translate-x-1/2 -translate-y-1/2 z-30 flex h-13 w-13 items-center justify-center rounded-full bg-[var(--bg-peach)] p-1.5 cursor-pointer"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/40 transition-transform duration-200 hover:scale-110">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative h-[335px] w-full">
        <div className="relative h-full w-full overflow-hidden rounded-[28px]">
          <img
            key={centerIndex}
            src={PROCESS_PHOTOS[centerIndex].url}
            alt={PROCESS_PHOTOS[centerIndex].alt}
            className="h-full w-full object-cover ev-fade"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
          <div className="absolute bottom-5 left-5 z-10 max-w-[44%]">
            <p className="text-base font-medium tracking-tight text-white">
              {centerStep.caption}
            </p>
          </div>
        </div>

        <div className="absolute -bottom-[2px] -right-[2px] z-20 w-[53%] rounded-tl-[24px] bg-[var(--bg-peach)] pl-4 pt-3 pb-1.5 pr-2">
          <InvertedFillet
            fillClass="text-[var(--bg-peach)]"
            position="bottom-right"
            size={20}
            className="absolute bottom-0 -left-[19px]"
          />
          <InvertedFillet
            fillClass="text-[var(--bg-peach)]"
            position="bottom-right"
            size={20}
            className="absolute -top-[19px] right-0"
          />
          <p className="text-[11px] leading-[1.45] text-[var(--text-secondary)]">
            {centerStep.title} {centerStep.description}
          </p>
        </div>

        <button
          type="button"
          onClick={prevStep}
          aria-label="Previous process step"
          className="absolute -left-3 top-[46%] -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-peach)] p-1.5"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#121214] shadow-sm">
            ‹
          </span>
        </button>
        <button
          type="button"
          onClick={nextStep}
          aria-label="Next process step"
          className="absolute -right-3 top-[46%] -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-peach)] p-1.5"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF6B00] text-white shadow-md">
            ›
          </span>
        </button>
      </div>
    </ScrollReveal>
  );
}

export function ClientQuestionsAndFaqSection() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {CLIENT_QUESTIONS.slice(0, 3).map((item, idx) => (
          <ScrollReveal
            key={item.question}
            variant="zoom"
            delay={idx * 110}
            className="om-floating-card flex flex-col justify-between rounded-[24px] p-6"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#00B64F]">
                <GreenHandshakeIcon className="h-4 w-4" />
                <span>{item.proofTag}</span>
              </div>
              <h3 className="mt-3 text-base font-medium leading-snug text-[var(--text-primary)]">
                &ldquo;{item.question}&rdquo;
              </h3>
            </div>

            <div className="mt-4 border-t border-[var(--divider-line)] pt-3.5">
              <p className="text-xs font-medium text-[#FF6B00]">
                {item.solutionTitle}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                {item.solutionBody}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal variant="zoom" delay={140} className="om-floating-card rounded-[26px] p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="om-h2 text-2xl text-[var(--text-primary)]">
              Common Questions
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
              Plain answers on timeline, pricing, and site ownership.
            </p>
            <Link href="/contact" className="om-btn-primary mt-5">
              <span>Get a free mockup</span>
              <CircledArrow className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-8 divide-y divide-[var(--divider-line)]">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="py-3.5 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-medium text-[var(--text-primary)] group-hover:text-[#FF6B00] transition-colors">
                      {faq.question}
                    </span>
                    <span className="text-lg font-medium text-[#FF6B00]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)] ev-fade">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
