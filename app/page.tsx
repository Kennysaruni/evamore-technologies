import React from "react";
import Link from "next/link";
import {
  SITE_CONFIG,
  TESTIMONIALS,
  ARTICLES,
} from "@/lib/site-data";
import {
  HeroWalkthroughTrigger,
  ServicesAccordionSection,
  ProcessShowcaseSection,
  ClientQuestionsAndFaqSection,
  InvertedFillet,
  GreenHandshakeIcon,
  AnimatedUnderline,
} from "@/components/HomeInteractive";
import { CircledArrow } from "@/components/Navbar";

const ARTICLE_IMAGES = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=85",
];

const AVATAR_URLS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
];

function EyebrowCircleIcon({ type }: { type: string }) {
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
 * Exact Omotive Eyebrow:
 * 36px Soft Blush Circle Icon on left + First Phrase + Green Handshake SVG + Second Phrase
 */
function OmotiveEyebrow({
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

function IndustryLogoMark({ index }: { index: number }) {
  const icons = [
    <svg key="0" className="h-6 w-6 text-[#FF6B00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M3 14c2.5-4 5.5-4 8 0s5.5 4 8 0" strokeLinecap="round" />
    </svg>,
    <svg key="1" className="h-5 w-5 text-[#00B64F]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 7.07 17.07l-2.83-2.83A6 6 0 1 1 18 12h4A10 10 0 0 0 12 2z" />
    </svg>,
    <svg key="2" className="h-5 w-5 text-[#FF6B00]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 5h16l-8 11L4 5zm2 14h12v2H6v-2z" />
    </svg>,
    <svg key="3" className="h-5 w-5 text-[#00B64F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M4 17l6-6 4 4 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="4" className="h-5 w-5 text-[#FF6B00]" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="5" />
    </svg>,
    <svg key="5" className="h-5 w-5 text-[#00B64F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" strokeLinejoin="round" />
    </svg>,
  ];
  return icons[index % icons.length];
}

export default function HomePage() {
  const carouselCategories = [
    ...SITE_CONFIG.industries,
    ...SITE_CONFIG.industries,
  ];

  return (
    <div className="overflow-hidden">
      {/* =====================================================================
          1. HERO SECTION (1:1 Replica of Close-Up #4)
         ===================================================================== */}
      <section className="relative mx-auto max-w-[1180px] px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        {/* Subtle Warm Ambient Glow at Top-Left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 -top-16 -z-10 h-96 w-96 rounded-full bg-[#FFE4DE]/55 blur-3xl dark:bg-[#FF6B00]/10"
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <OmotiveEyebrow
              first="On demand"
              second="quote follow-up"
              icon="monitor"
            />

            <h1 className="om-h1 mt-6 text-[44px] text-[var(--text-primary)] sm:text-[56px] lg:text-[62px]">
              More Customers <br />
              <span className="relative inline-block">
                Find You.
                <AnimatedUnderline className="-bottom-2 left-1 w-[92%]" />
              </span>{" "}
              More <br />
              Of Them Book.
            </h1>

            {/* Two Pill Buttons with Circled Right-Arrow */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link href="/contact" className="om-btn-primary">
                <span>Get a free mockup</span>
                <CircledArrow className="h-4 w-4" />
              </Link>

              <Link href="/services" className="om-btn-soft">
                <span>Learn More</span>
                <CircledArrow className="h-4 w-4" />
              </Link>
            </div>

            {/* Minimal 2-Line Subtext Below Buttons */}
            <p className="mt-7 max-w-[290px] text-[12.5px] leading-[1.55] text-[var(--text-secondary)]">
              We build fast websites for Toronto-area contractors and clinics,
              then answer every quote.
            </p>
          </div>

          {/* Right Column: Exact 4-Piece Inverted-Corner Cutout Collage */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto h-[410px] w-full max-w-[475px] sm:h-[430px]">
              {/* Hand-drawn Curved Arrow SVG at Top Center pointing to the Portrait */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute left-[52%] top-2 z-20 h-14 w-16 text-[#F2CFC6] dark:text-[#FF6B00]/40"
                viewBox="0 0 70 60"
                fill="none"
              >
                <path
                  d="M44 48C56 32 45 11 10 12M10 12L18 6M10 12L17 19"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* PIECE 1: Top-Left Matte Black "99%" Card with Seamless Top-Right Cutout */}
              <div className="group absolute left-0 top-6 z-20 w-[162px] rounded-[26px] bg-[#141416] p-5 text-white shadow-xl transition-transform duration-300 hover:scale-[1.02] sm:w-[172px]">
                {/* Top-Right Inverted-Corner Cutout Notch holding the 56x56 Rounded Square Photo */}
                <div className="absolute -right-[1px] -top-[1px] z-10 rounded-bl-[20px] bg-[var(--bg-canvas)] pb-2 pl-2">
                  <InvertedFillet
                    position="top-right"
                    size={16}
                    className="absolute -left-[15px] top-0"
                  />
                  <InvertedFillet
                    position="top-right"
                    size={16}
                    className="absolute -bottom-[15px] right-0"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80"
                    alt="Quote response specialist"
                    className="h-14 w-14 rounded-[16px] object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <p className="mt-3 text-[34px] font-normal leading-none tracking-tight text-white">
                  99<span className="text-lg">%</span>
                </p>
                <p className="mt-2 max-w-[125px] text-[10.5px] leading-[1.35] text-zinc-400">
                  Same-day alert when a quote request arrives.
                </p>

                {/* 5 Vertical Dark Track Capsules with Animated Orange Equalizer Bars */}
                <div className="mt-4 flex h-14 items-end justify-between gap-2">
                  <div className="relative h-full w-3.5 rounded-full bg-[#242429]">
                    <div className="om-bar-1 absolute bottom-0 h-8 w-full rounded-full bg-gradient-to-t from-[#FF5500] to-[#FF944D]" />
                  </div>
                  <div className="relative h-full w-3.5 rounded-full bg-[#242429]">
                    <div className="om-bar-2 absolute bottom-0 h-6 w-full rounded-full bg-gradient-to-t from-[#FF5500] to-[#FF944D]" />
                  </div>
                  <div className="relative h-full w-3.5 rounded-full bg-[#242429]">
                    <div className="om-bar-3 absolute bottom-0 h-10 w-full rounded-full bg-gradient-to-t from-[#FF5500] to-[#FF944D]" />
                  </div>
                  <div className="relative h-full w-3.5 rounded-full bg-[#242429]">
                    <div className="om-bar-4 absolute bottom-0 h-8 w-full rounded-full bg-gradient-to-t from-[#FF5500] to-[#FF944D]" />
                  </div>
                  <div className="relative h-full w-3.5 rounded-full bg-[#242429]">
                    <div className="om-bar-5 absolute bottom-0 h-6 w-full rounded-full bg-gradient-to-t from-[#FF5500] to-[#FF944D]" />
                  </div>
                </div>
              </div>

              {/* PIECE 2: Main Portrait Photo on Right with Seamless Bottom-Right Cutout */}
              <div className="group absolute right-0 top-14 z-10 h-[285px] w-[250px] sm:h-[305px] sm:w-[275px]">
                {/* Inner overflow-hidden photo wrapper */}
                <div className="h-full w-full overflow-hidden rounded-[28px]">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85"
                    alt="Smiling business owner in studio"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Seamless Bottom-Right Inverted-Corner Cutout Notch holding the Play Button */}
                <div className="absolute -bottom-[1px] -right-[1px] z-20 rounded-tl-[26px] bg-[var(--bg-canvas)] pl-3.5 pt-3 pr-1.5 pb-1">
                  <InvertedFillet
                    position="bottom-right"
                    size={20}
                    className="absolute bottom-0 -left-[19px]"
                  />
                  <InvertedFillet
                    position="bottom-right"
                    size={20}
                    className="absolute -top-[19px] right-0"
                  />
                  <HeroWalkthroughTrigger />
                </div>
              </div>

              {/* PIECE 3: Bottom-Center White Card ("01 / Built for Mobile") with Smooth Concentric Ripple on Hover */}
              <div className="om-floating-card om-mobile-card group absolute bottom-2 left-[84px] z-30 h-[172px] w-[172px] overflow-hidden rounded-[28px] p-5 transition-transform duration-300 hover:scale-[1.03] sm:left-[104px] sm:h-[180px] sm:w-[180px]">
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-medium text-[var(--text-muted)]">
                      01
                    </span>
                    {/* Solid Emerald Green Circle Icon + 3 Concentric Ripple Rings Centered Directly On It */}
                    <div className="relative flex h-12 w-12 items-center justify-center">
                      <span
                        aria-hidden="true"
                        className="om-ripple-circle om-ripple-circle-1 h-16 w-16"
                      />
                      <span
                        aria-hidden="true"
                        className="om-ripple-circle om-ripple-circle-2 h-24 w-24"
                      />
                      <span
                        aria-hidden="true"
                        className="om-ripple-circle om-ripple-circle-3 h-32 w-32"
                      />
                      <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#00B64F] text-white shadow-md shadow-[#00B64F]/30 transition-transform duration-300 group-hover:scale-110">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          <polyline points="9 12 11 14 15 10" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <p className="text-[19px] font-medium leading-[1.18] tracking-tight text-[var(--text-primary)]">
                    Built for <br />
                    Mobile
                  </p>
                </div>
              </div>

              {/* 4 Delicate Radiating Blush Burst Lines outside Bottom-Left of White Card */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-[64px] z-20 h-9 w-9 text-[#F2C6BC] dark:text-[#FF6B00]/40 sm:left-[84px]"
                viewBox="0 0 36 36"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="16" y1="6" x2="6" y2="6" />
                <line x1="17" y1="12" x2="6" y2="16" />
                <line x1="20" y1="16" x2="13" y2="26" />
                <line x1="26" y1="18" x2="24" y2="30" />
              </svg>
            </div>
          </div>
        </div>

        {/* =====================================================================
            2. CATEGORIES CAROUSEL STRIP (Left-to-Right Smooth Marquee with Fade on Both Ends)
           ===================================================================== */}
        <div className="om-marquee-mask relative mt-16 w-full overflow-hidden py-4">
          <div className="om-marquee-track flex flex-row flex-nowrap items-center whitespace-nowrap gap-14 pr-14 w-max">
            {carouselCategories.map((ind, idx) => (
              <div
                key={`${ind.name}-${idx}`}
                className="group inline-flex shrink-0 items-center gap-2.5 text-lg font-bold tracking-tight text-[var(--text-primary)] opacity-80 transition-all duration-200 hover:opacity-100 hover:text-[#FF6B00] sm:text-xl cursor-default"
              >
                <span className="transition-transform duration-200 group-hover:scale-110">
                  <IndustryLogoMark index={idx} />
                </span>
                <span>{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. ABOUT SECTION (1:1 Omotive "Powerful Agency For Corporate Business.")
         ===================================================================== */}
      <section className="bg-[var(--bg-peach)] py-20 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: 4-Piece Photo + Solid Green Card Cutout Collage */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto h-[370px] w-full max-w-[450px] sm:h-[395px]">
                {/* 1. Left Tall Vertical Photo */}
                <div className="group absolute bottom-0 left-0 top-0 w-[56%] overflow-hidden rounded-[26px]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=85"
                    alt="Developers planning a local business website"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* 2. Top-Right Square Portrait Photo */}
                <div className="group absolute right-0 top-12 h-[125px] w-[132px] overflow-hidden rounded-[24px] sm:h-[135px] sm:w-[142px]">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
                    alt="Specialist reviewing local search rankings"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* 3. Center Solid Emerald Green Stat Card with Peach Cutout Ring ("5+ Days") */}
                <div className="absolute left-[34%] top-12 z-20 rounded-[26px] bg-[var(--bg-peach)] p-2">
                  <div className="flex h-[125px] w-[132px] flex-col justify-center rounded-[20px] bg-[#00B64F] p-5 text-white shadow-lg shadow-[#00B64F]/25 transition-transform duration-300 hover:scale-105 sm:h-[135px] sm:w-[140px]">
                    <p className="text-3xl font-medium tracking-tight text-white sm:text-[34px]">
                      5+
                    </p>
                    <p className="mt-1 text-xs font-normal text-white/90">
                      Days Build
                    </p>
                  </div>
                </div>

                {/* 4. Bottom-Right Wide White Card with Peach Cutout Ring ("Toronto Hours") */}
                <div className="absolute bottom-5 right-2 z-20 rounded-[26px] bg-[var(--bg-peach)] p-2 sm:right-4">
                  <div className="om-floating-card flex items-center gap-3.5 rounded-[20px] px-5 py-4 transition-transform duration-300 hover:scale-[1.03]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFE4DE] text-[#FF6B00]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[15px] font-medium leading-tight text-[var(--text-primary)]">
                        Toronto Hours <br />
                        Remote Team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Minimal Copy + Orange Pill Button */}
            <div className="lg:col-span-6 lg:pl-6">
              <OmotiveEyebrow
                first="Built for"
                second="local Google search"
                icon="briefcase"
              />

              <h2 className="om-h2 mt-5 text-[36px] text-[var(--text-primary)] sm:text-[44px]">
                Built For Businesses <br />
                That Win Jobs From <br />
                Google.
              </h2>

              <p className="mt-5 max-w-[390px] text-[13px] leading-[1.6] text-[var(--text-secondary)]">
                When someone searches &ldquo;roofer in Etobicoke&rdquo; or
                &ldquo;emergency plumber near me&rdquo;, we make sure your site
                loads fast and puts the quote form first.
              </p>

              <div className="mt-8">
                <Link href="/about" className="om-btn-primary">
                  <span>Read More</span>
                  <CircledArrow className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. RECENT WORK (1:1 Omotive "Take A Look At Our Recent Work")
         ===================================================================== */}
      <section className="bg-[#121214] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
            {/* Left Column: Heading + Tall Project Photo Card */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <OmotiveEyebrow
                  first="Evamore"
                  second="approach"
                  icon="briefcase"
                  dark
                />
                <h2 className="om-h2 mt-5 text-[36px] text-white sm:text-[44px]">
                  Take A Look At <br />
                  Our Recent Work
                </h2>
              </div>

              {/* Left Project Card: Glamour Home Care */}
              <div className="group rounded-[26px] border border-white/5 bg-[#1B1B1F] p-3 transition-colors duration-300 hover:border-[#FF6B00]/45">
                <div className="relative h-[260px]">
                  <div className="h-full w-full overflow-hidden rounded-[20px]">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=85"
                      alt="Glamour Home Care website"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  {/* Seamless Bottom-Right Cutout Pill */}
                  <div className="absolute -bottom-[1px] -right-[1px] z-10 rounded-tl-[18px] bg-[#1B1B1F] pl-3 pt-2 pb-0.5 pr-0.5">
                    <InvertedFillet
                      fillClass="text-[#1B1B1F]"
                      position="bottom-right"
                      size={16}
                      className="absolute bottom-0 -left-[15px]"
                    />
                    <InvertedFillet
                      fillClass="text-[#1B1B1F]"
                      position="bottom-right"
                      size={16}
                      className="absolute -top-[15px] right-0"
                    />
                    <span className="inline-block rounded-full border border-white/20 bg-[#151518] px-3.5 py-1 text-[11px] font-medium text-zinc-200">
                      glamourhomecare.org
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 px-3 pb-3 pt-5">
                  <div>
                    <p className="text-[11px] text-zinc-400">
                      Home Care · Directed by Shavonnah
                    </p>
                    <h3 className="mt-1 text-lg font-medium text-white">
                      Glamour Home Care Portal
                    </h3>
                  </div>
                  <Link
                    href="/work#glamour-home-care"
                    className="om-btn-primary !px-5 !py-2.5 !text-xs shrink-0"
                  >
                    <span>View project</span>
                    <CircledArrow className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Wide Project Card + NeuroSense Card */}
            <div className="lg:col-span-7 space-y-6">
              {/* Top Wide Card: The Wealth Code Collective */}
              <div className="group overflow-hidden rounded-[26px] border border-white/5 bg-[#1B1B1F] p-3 transition-colors duration-300 hover:border-[#FF6B00]/45">
                <div className="relative h-[275px] overflow-hidden rounded-[20px]">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85"
                    alt="The Wealth Code Collective"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between gap-4 px-3 pb-3 pt-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-[11px] text-zinc-400">
                      Advisory Collective · Headed by Lavie Pittmann
                    </p>
                    <h3 className="mt-1 text-lg font-medium text-white sm:text-xl">
                      The Wealth Code Collective Creating High-Trust Client Flows
                    </h3>
                  </div>
                  <Link
                    href="/work#wealth-code-collective"
                    className="om-btn-primary !px-5 !py-2.5 !text-xs shrink-0"
                  >
                    <span>View project</span>
                    <CircledArrow className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Second Right Card: NeuroSense Africa */}
              <div className="group flex flex-col justify-between gap-4 rounded-[26px] border border-white/5 bg-[#1B1B1F] p-6 transition-colors duration-300 hover:border-[#FF6B00]/45 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-24 shrink-0 overflow-hidden rounded-[18px]">
                    <img
                      src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=300&q=80"
                      alt="NeuroSense Africa"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#00B64F]">
                      neurosenseafrica.com · Clinical Platform
                    </p>
                    <h3 className="mt-1 text-lg font-medium text-white">
                      NeuroSense Africa — Clinical Web Platform
                    </h3>
                  </div>
                </div>
                <Link
                  href="/work#neurosense-africa"
                  className="om-btn-primary !px-5 !py-2.5 !text-xs shrink-0"
                >
                  <span>View project</span>
                  <CircledArrow className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. SERVICES ACCORDION (1:1 Replica of Close-Up #1)
         ===================================================================== */}
      <section className="mx-auto max-w-[1180px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <OmotiveEyebrow
              first="Business"
              second="Approach"
              icon="briefcase"
            />

            <h2 className="om-h2 mt-5 text-[36px] text-[var(--text-primary)] sm:text-[44px]">
              How We Take Your <br />
              Business To The <br />
              Next Level
            </h2>

            <p className="mt-5 max-w-[360px] text-[13px] leading-[1.6] text-[var(--text-secondary)]">
              Four things, one goal: fewer lost customers for Toronto-area
              contractors and clinics.
            </p>

            <div className="mt-9">
              <Link href="/services" className="om-btn-primary">
                <span>View All Services</span>
                <CircledArrow className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4-Row Accordion with Unclipped Laptop Cutout Image */}
          <div className="lg:col-span-7 lg:pl-8">
            <ServicesAccordionSection />
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. PROCESS CAROUSEL (1:1 Replica of Close-Up #2)
         ===================================================================== */}
      <section className="bg-[var(--bg-peach)] py-20 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          {/* Top 2-Column Header */}
          <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <OmotiveEyebrow first="Simple" second="process" icon="key" />
              <h2 className="om-h2 mt-5 text-[36px] text-[var(--text-primary)] sm:text-[44px]">
                Understand The <br />
                Business Process.
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pl-8">
              <p className="max-w-[330px] text-[12.5px] leading-[1.58] text-[var(--text-secondary)]">
                We show you what&apos;s costing you customers, build a mockup
                first, and set up automated quote follow-up.
              </p>
              <div className="mt-5">
                <Link href="/work" className="om-btn-primary">
                  <span>More Projects</span>
                  <CircledArrow className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Photo Carousel with Seamless Circular Arrow Cutouts & Bottom-Right Text Cutout */}
        <div className="px-2 sm:px-4">
          <ProcessShowcaseSection />
        </div>
      </section>

      {/* =====================================================================
          7. TESTIMONIALS (1:1 Replica of Close-Up #3)
             Matte Black Section + 3 Top Unclipped Cutout Cards + 3 Outlined Quote Cards
         ===================================================================== */}
      <section className="bg-[#121214] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          {/* Centered Header */}
          <div className="mx-auto max-w-2xl text-center">
            <OmotiveEyebrow
              first="Valuable"
              second="Feedback"
              icon="users"
              dark
              centered
            />
            <h2 className="om-h2 mt-5 text-[36px] text-white sm:text-[44px]">
              Trusted By The World&apos;s Fastest <br />
              Growing Companies
            </h2>
          </div>

          {/* Top Row: 3 Dark Company Cards with Unclipped Bottom-Right Cutouts */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Card 1: The Wealth Code Collective */}
            <div className="group relative h-[140px] rounded-[24px] bg-[#1B1B1F] p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <svg className="h-6 w-6 text-[#FFE4DE]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3c-2.5 3.5-2.5 7.5 0 11 2.5-3.5 2.5-7.5 0-11zM5 10c1 4 4 6.5 7 7-3-1-5-3.5-7-7zm14 0c-2 3.5-4 6-7 7 3-.5 6-3 7-7z" />
                  </svg>
                  <span className="text-xl font-semibold tracking-tight text-[#FFE4DE]">
                    Wealth Code
                  </span>
                </div>
                <p className="text-xs leading-snug text-zinc-300">
                  Client <br />
                  advisory
                </p>
              </div>

              {/* Seamless Bottom-Right Inverted-Corner Cutout Notch (Unclipped Pill) */}
              <div className="absolute -bottom-[1px] -right-[1px] z-10 rounded-tl-[20px] bg-[#121214] pl-3 pt-2.5 pb-0.5 pr-0.5">
                <InvertedFillet
                  fillClass="text-[#121214]"
                  position="bottom-right"
                  size={18}
                  className="absolute bottom-0 -left-[17px]"
                />
                <InvertedFillet
                  fillClass="text-[#121214]"
                  position="bottom-right"
                  size={18}
                  className="absolute -top-[17px] right-0"
                />
                <span className="inline-block rounded-full border border-white/25 bg-[#151518] px-4 py-1.5 text-[11px] font-medium text-zinc-200 transition-colors group-hover:border-[#FF6B00]">
                  Lavie Pittmann
                </span>
              </div>
            </div>

            {/* Card 2: Glamour Home Care */}
            <div className="group relative h-[140px] rounded-[24px] bg-[#1B1B1F] p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <svg className="h-6 w-6 text-[#FFE4DE]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 10h3v10H4V10zm6-6h4v16h-4V4zm6 8h4v8h-4v-8z" />
                  </svg>
                  <span className="text-xl font-semibold tracking-tight text-[#FFE4DE]">
                    Glamour Care
                  </span>
                </div>
                <p className="text-xs leading-snug text-zinc-300">
                  Home care <br />
                  services
                </p>
              </div>

              {/* Seamless Bottom-Right Inverted-Corner Cutout Notch */}
              <div className="absolute -bottom-[1px] -right-[1px] z-10 rounded-tl-[20px] bg-[#121214] pl-3 pt-2.5 pb-0.5 pr-0.5">
                <InvertedFillet
                  fillClass="text-[#121214]"
                  position="bottom-right"
                  size={18}
                  className="absolute bottom-0 -left-[17px]"
                />
                <InvertedFillet
                  fillClass="text-[#121214]"
                  position="bottom-right"
                  size={18}
                  className="absolute -top-[17px] right-0"
                />
                <span className="inline-block rounded-full border border-white/25 bg-[#151518] px-4 py-1.5 text-[11px] font-medium text-zinc-200 transition-colors group-hover:border-[#FF6B00]">
                  glamourhomecare.org
                </span>
              </div>
            </div>

            {/* Card 3: NeuroSense Africa */}
            <div className="group relative h-[140px] rounded-[24px] bg-[#1B1B1F] p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <svg className="h-6 w-6 text-[#FFE4DE]" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="6" r="2.5" />
                    <circle cx="6" cy="17" r="2.5" />
                    <circle cx="18" cy="17" r="2.5" />
                    <path d="M12 8.5v4.5M12 13l-4.5 2.5M12 13l4.5 2.5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <span className="text-xl font-semibold tracking-tight text-[#FFE4DE]">
                    NeuroSense
                  </span>
                </div>
                <p className="text-xs leading-snug text-zinc-300">
                  Clinical <br />
                  platform
                </p>
              </div>

              {/* Seamless Bottom-Right Inverted-Corner Cutout Notch */}
              <div className="absolute -bottom-[1px] -right-[1px] z-10 rounded-tl-[20px] bg-[#121214] pl-3 pt-2.5 pb-0.5 pr-0.5">
                <InvertedFillet
                  fillClass="text-[#121214]"
                  position="bottom-right"
                  size={18}
                  className="absolute bottom-0 -left-[17px]"
                />
                <InvertedFillet
                  fillClass="text-[#121214]"
                  position="bottom-right"
                  size={18}
                  className="absolute -top-[17px] right-0"
                />
                <span className="inline-block rounded-full border border-white/25 bg-[#151518] px-4 py-1.5 text-[11px] font-medium text-zinc-200 transition-colors group-hover:border-[#FF6B00]">
                  neurosenseafrica.com
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Outlined Dark Quote Cards */}
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={item.leader}
                className="flex flex-col justify-between rounded-[24px] border border-white/15 bg-[#151518] p-7 transition-colors duration-200 hover:border-[#FF6B00]/50"
              >
                <p className="text-[13.5px] leading-[1.6] text-zinc-300">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-8 flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={AVATAR_URLS[idx % AVATAR_URLS.length]}
                      alt={item.leader}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <span className="text-[13.5px] font-medium text-white">
                      {item.leader}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FFE4DE]">
                    <span className="h-2 w-2 rounded-full bg-[#00B64F]" />
                    <span>
                      {idx === 0
                        ? "Wealth Code"
                        : idx === 1
                        ? "Glamour Care"
                        : "NeuroSense"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. ARTICLES (1:1 Omotive "Interesting Articles")
         ===================================================================== */}
      <section className="mx-auto max-w-[1180px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <OmotiveEyebrow
              first="Helpful"
              second="Local Reads"
              icon="monitor"
            />
            <h2 className="om-h2 mt-5 text-[36px] text-[var(--text-primary)] sm:text-[44px]">
              Interesting Articles
            </h2>
          </div>

          <Link href="/blog" className="om-btn-soft">
            <span>View All Articles</span>
            <CircledArrow className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {ARTICLES.map((post, idx) => (
            <Link
              key={post.slug}
              href={`/blog#${post.slug}`}
              className="group block space-y-4"
            >
              <div className="relative h-[220px] w-full overflow-hidden rounded-[24px]">
                <img
                  src={ARTICLE_IMAGES[idx % ARTICLE_IMAGES.length]}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex items-center gap-2.5 text-xs">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Kenny"
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span className="text-[var(--text-secondary)]">Kenny</span>
                <span className="rounded-full bg-[var(--bg-soft-btn)] px-3 py-0.5 text-[11px] font-medium text-[#FF6B00]">
                  {post.category}
                </span>
              </div>

              <h3 className="text-lg font-medium leading-snug text-[var(--text-primary)] group-hover:text-[#FF6B00] transition-colors">
                {post.title}
              </h3>

              <p className="text-[12.5px] leading-relaxed text-[var(--text-secondary)] line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================================
          9. CLIENT QUESTIONS & FAQ SECTION
         ===================================================================== */}
      <section className="mx-auto max-w-[1180px] px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-xl">
          <OmotiveEyebrow
            first="Client"
            second="Questions"
            icon="users"
          />
          <h2 className="om-h2 mt-4 text-[32px] text-[var(--text-primary)] sm:text-[40px]">
            Questions Business Owners Ask
          </h2>
        </div>

        <ClientQuestionsAndFaqSection />
      </section>
    </div>
  );
}
