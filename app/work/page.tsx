import type { Metadata } from "next";
import Link from "next/link";
import { CLIENT_PROJECTS, TESTIMONIALS } from "@/lib/site-data";
import {
  OmotiveEyebrow,
  InvertedFillet,
  AnimatedUnderline,
} from "@/components/HomeInteractive";
import { CircledArrow } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Recent Website Builds & Case Studies | Client Portfolio",
  description:
    "Explore concrete website case studies, technical architecture, and conversion outcomes built by Evamore Technologies for Glamour Home Care, The Wealth Code Collective, NeuroSense Africa, and service businesses.",
  alternates: {
    canonical: "https://www.evamoretechnologies.com/work",
  },
};

const PROJECT_PHOTOS: Record<string, string> = {
  "glamour-home-care":
    "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=85",
  "wealth-code-collective":
    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1000&q=85",
  "neurosense-africa":
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",
  "moonika-fashion-house":
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85",
};

const CASE_STUDY_DEEP_DIVES: Record<
  string,
  {
    problemNarrative: string;
    solutionNarrative: string;
    techStack: string[];
    outcomeNarrative: string;
  }
> = {
  "glamour-home-care": {
    problemNarrative:
      "Families searching for in-home patient care and senior support are often browsing on mobile phones under high stress. Glamour Home Care needed a digital presence at glamourhomecare.org that immediately established caregiver trust, clearly separated specialized home-care programs, and eliminated multi-step form friction when families wanted to request an assessment.",
    solutionNarrative:
      "Working directly with Shavonnah after delivering an initial homepage mockup, we architected a warm, accessible, mobile-first care portal. We organized every care offering into scannable service sections, placed one-tap phone and consultation request actions above the fold on mobile screens, and implemented structured health-service metadata for local search discovery.",
    techStack: [
      "Next.js App Router",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Mobile Tap-to-Call UX",
      "LocalBusiness & Care Schema",
    ],
    outcomeNarrative:
      "Launched live at glamourhomecare.org with sub-second mobile page transitions, clear program descriptions that answer family questions upfront, and a streamlined consultation request pathway that routes inquiries directly to the care team.",
  },
  "wealth-code-collective": {
    problemNarrative:
      "Financial advisory and consulting collectives rely heavily on immediate authority and clarity. Prospective clients visiting The Wealth Code Collective needed to understand Lavie Pittmann's advisory programs within seconds—without getting lost in dense walls of jargon or generic corporate templates.",
    solutionNarrative:
      "We engineered a high-trust editorial layout featuring clean typography, structured program tiers, and a guided client onboarding funnel. Every page was designed to walk visitors from initial value proposition to proof and direct consultation booking, backed by automated inquiry capture and confirmation.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Conversion Funnel Architecture",
      "Automated Lead Intake",
    ],
    outcomeNarrative:
      "Delivered an authoritative digital flagship for Lavie Pittmann that communicates the collective's value proposition in seconds and converts visitors into qualified advisory consultations without friction.",
  },
  "neurosense-africa": {
    problemNarrative:
      "Communicating specialized neurological health programs and clinical technology requires both clinical credibility and plain-language accessibility. NeuroSense Africa needed a fast, resilient web platform at neurosenseafrica.com that patients, clinicians, and institutional partners could navigate reliably—even on variable mobile network connections.",
    solutionNarrative:
      "We built a lightweight, high-contrast clinical platform engineered around Core Web Vitals and clean information hierarchy. Specialist neurological initiatives, research pathways, and partner/patient contact routes were separated into intuitive pathways with optimized SVG assets and zero unnecessary client-side script bloat.",
    techStack: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Core Web Vitals Optimization",
      "Technical SEO & JSON-LD",
      "Accessible Clinical UI",
    ],
    outcomeNarrative:
      "Live at neurosenseafrica.com with fast load performance across desktop and mobile devices, enabling patients, medical partners, and stakeholders to connect with the NeuroSense team seamlessly.",
  },
  "moonika-fashion-house": {
    problemNarrative:
      "Visual-heavy retail and custom fitting businesses often suffer from 6+ second mobile load times because high-resolution lookbook photography blocks page rendering. Mobile visitors needed to browse custom pieces smoothly and request a fitting or custom quote in two taps.",
    solutionNarrative:
      "We created a speed-focused showcase architecture using responsive image sizing, lazy-loaded visual galleries, and a persistent booking trigger. Visitors can move from browsing custom collections to submitting a fitting inquiry with their preferred dates in under 30 seconds.",
    techStack: [
      "Next.js App Router",
      "React 19",
      "Responsive Image Pipeline",
      "Tailwind CSS",
      "Direct Booking & Quote Flow",
    ],
    outcomeNarrative:
      "Demonstrates how visual-first local businesses can display rich project or product photography while maintaining sub-second navigation and frictionless inquiry capture.",
  },
};

export default function WorkPage() {
  const workStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Evamore Technologies Client Case Studies & Website Portfolio",
    itemListElement: CLIENT_PROJECTS.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: `${project.oneLineResult} ${CASE_STUDY_DEEP_DIVES[project.slug]?.outcomeNarrative ?? ""}`,
      },
    })),
  };

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workStructuredData),
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative mx-auto max-w-[1180px] px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-16 -z-10 h-96 w-96 rounded-full bg-[#FFE4DE]/55 blur-3xl dark:bg-[#FF6B00]/10"
        />

        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <ScrollReveal variant="left">
            <OmotiveEyebrow
              first="Selected"
              second="Case Studies"
              icon="briefcase"
            />
            <h1 className="om-h1 mt-6 text-[44px] text-[var(--text-primary)] sm:text-[54px] lg:text-[60px]">
              Take A Look At{" "}
              <span className="relative inline-block">
                Our Work.
                <AnimatedUnderline />
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={120} className="max-w-[390px]">
            <p className="text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">
              Every project below was custom-engineered from a free 3-day
              mockup into a fast production platform focused on mobile load
              speed, plain-language clarity, and direct inquiry capture.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="om-btn-primary">
                <span>Get a free mockup</span>
                <CircledArrow className="h-4 w-4" />
              </Link>
              <Link href="/services" className="om-btn-soft">
                <span>Explore Services</span>
                <CircledArrow className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. CASE STUDIES SHOWCASE (Problem, Solution, Tech Stack, Outcome) */}
      <section className="bg-[var(--bg-peach)] py-20 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 space-y-12 sm:px-6 lg:px-8">
          {CLIENT_PROJECTS.map((project, idx) => {
            const photoUrl =
              PROJECT_PHOTOS[project.slug] ||
              PROJECT_PHOTOS["glamour-home-care"];
            const isEven = idx % 2 === 0;
            const deepDive = CASE_STUDY_DEEP_DIVES[project.slug];

            return (
              <ScrollReveal
                key={project.slug}
                variant={isEven ? "left" : "right"}
              >
                <article
                  id={project.slug}
                  className="om-floating-card group rounded-[30px] p-6 sm:p-10"
                >
                  <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
                    {/* Visual & Tech Stack Column */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      } space-y-5`}
                    >
                      <div className="relative h-[265px] sm:h-[310px] w-full">
                        <div className="h-full w-full overflow-hidden rounded-[24px]">
                          <img
                            src={photoUrl}
                            alt={`${project.name} desktop and mobile website showcase`}
                            className="om-lens-img h-full w-full object-cover"
                          />
                        </div>

                        <div className="absolute -bottom-[1px] -right-[1px] z-10 rounded-tl-[20px] bg-[var(--glass-surface)] pl-3.5 pt-2.5 pb-0.5 pr-0.5">
                          <InvertedFillet
                            position="bottom-right"
                            size={18}
                            className="absolute bottom-0 -left-[17px]"
                          />
                          <InvertedFillet
                            position="bottom-right"
                            size={18}
                            className="absolute -top-[17px] right-0"
                          />
                          <span className="inline-block rounded-full border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-4 py-1.5 text-xs font-medium text-[var(--text-primary)]">
                            {project.domain}
                          </span>
                        </div>
                      </div>

                      {/* Tech Stack & Architecture Box */}
                      {deepDive && (
                        <div className="rounded-[22px] bg-[var(--bg-peach)] p-5 border border-[var(--divider-line)]">
                          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                            Tech Stack &amp; Architecture
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {deepDive.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-3 py-1 text-[11.5px] font-medium text-[var(--text-primary)]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Concrete Outcome Box */}
                      {deepDive && (
                        <div className="rounded-[22px] bg-[#121214] p-5 text-white">
                          <p className="text-xs font-semibold text-[#00B64F]">
                            Concrete Project Outcome
                          </p>
                          <p className="mt-1.5 text-[12.5px] leading-[1.6] text-zinc-300">
                            {deepDive.outcomeNarrative}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Problem, Solution & Deliverables Column */}
                    <div
                      className={`lg:col-span-7 space-y-5 ${
                        isEven ? "lg:order-2 lg:pl-4" : "lg:order-1 lg:pr-4"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2.5">
                        {project.logoUrl && (
                          <img
                            src={project.logoUrl}
                            alt={`${project.name} logo`}
                            className={`h-8 w-8 shrink-0 ${
                              project.slug === "wealth-code-collective"
                                ? "rounded-full object-cover border border-[var(--divider-line)]"
                                : "rounded-lg bg-white p-1 object-contain border border-[var(--divider-line)]"
                            }`}
                          />
                        )}
                        <span className="rounded-full bg-[#00B64F] px-3.5 py-1 text-xs font-medium text-white">
                          {project.resultMetric}
                        </span>
                        <span className="text-xs text-[var(--text-muted)]">
                          {project.businessType}
                        </span>
                      </div>

                      <h2 className="om-h2 text-2xl text-[var(--text-primary)] sm:text-3xl">
                        {project.name}
                      </h2>

                      <div className="space-y-3.5 text-[13.5px] leading-[1.68] text-[var(--text-secondary)]">
                        <p>
                          <strong className="font-medium text-[var(--text-primary)]">
                            The problem:{" "}
                          </strong>
                          {deepDive ? deepDive.problemNarrative : project.problem}
                        </p>
                        {deepDive && (
                          <p>
                            <strong className="font-medium text-[var(--text-primary)]">
                              Our solution:{" "}
                            </strong>
                            {deepDive.solutionNarrative}
                          </p>
                        )}
                      </div>

                      <div className="border-t border-[var(--divider-line)] pt-4">
                        <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                          Key Deliverables Executed
                        </p>
                        <ul className="space-y-2">
                          {project.whatWeDid.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[var(--text-secondary)]"
                            >
                              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#FF6B00]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Link href="/contact" className="om-btn-primary">
                          <span>Request a similar build</span>
                          <CircledArrow className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 3. ENGINEERING & PERFORMANCE STANDARDS ACROSS EVERY BUILD */}
      <section className="mx-auto max-w-[1180px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <ScrollReveal variant="left" className="lg:col-span-7">
            <OmotiveEyebrow
              first="Production"
              second="Engineering Standards"
              icon="monitor"
            />
            <h2 className="om-h2 mt-5 text-[34px] text-[var(--text-primary)] sm:text-[44px]">
              What Every Evamore <br />
              Build Shares Under The Hood.
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="right" delay={120} className="lg:col-span-5">
            <p className="text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">
              Whether we are building for a home-care provider, an advisory
              collective, or a GTA contractor, every project ships on the same
              modern engineering foundation.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              badge: "01 · Speed & Core Web Vitals",
              title: "Next.js App Router Architecture",
              body: "Instead of heavy drag-and-drop themes loaded with third-party plugin bloat, we compile clean React and Next.js pages that open in under a second on cellular connections.",
            },
            {
              badge: "02 · Mobile Conversion UX",
              title: "Above-the-Fold Action Pathways",
              body: "Over 70% of local service traffic arrives on smartphones. Every build places tap-to-call buttons, clear service coverage, and short quote forms where mobile thumbs can reach them immediately.",
            },
            {
              badge: "03 · Search & AI Readability",
              title: "Semantic HTML & JSON-LD Schema",
              body: "We ship clean canonical URLs, dedicated service headings, and structured Organization, Service, and FAQPage data so Google and AI search engines index your business accurately.",
            },
          ].map((standard, idx) => (
            <ScrollReveal
              key={standard.title}
              variant="zoom"
              delay={idx * 110}
              className="rounded-[26px] bg-[var(--bg-peach)] p-7 space-y-3"
            >
              <span className="inline-block rounded-full bg-[var(--bg-canvas)] border border-[var(--divider-line)] px-3.5 py-1 text-[11px] font-medium text-[#00B64F]">
                {standard.badge}
              </span>
              <h3 className="text-xl font-medium text-[var(--text-primary)]">
                {standard.title}
              </h3>
              <p className="text-[13px] leading-[1.65] text-[var(--text-secondary)]">
                {standard.body}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 4. TESTIMONIALS DARK SECTION */}
      <section className="bg-[#121214] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="zoom" className="mx-auto max-w-2xl text-center">
            <OmotiveEyebrow
              first="Recent"
              second="Work"
              icon="users"
              dark
              centered
            />
            <h2 className="om-h2 mt-5 text-[36px] text-white sm:text-[44px]">
              Real Results From <br />
              Our Recent Work
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((item, idx) => (
              <ScrollReveal
                key={item.company}
                variant="zoom"
                delay={idx * 110}
                className="group relative h-[140px] rounded-[24px] bg-[#1B1B1F] p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {item.logoUrl && (
                      <img
                        src={item.logoUrl}
                        alt={item.company}
                        className={`h-9 w-9 shrink-0 ${
                          idx === 0
                            ? "rounded-full object-cover border border-white/20"
                            : "rounded-lg bg-white/95 p-1 object-contain"
                        }`}
                      />
                    )}
                    <span className="text-xl font-semibold tracking-tight text-[#FFE4DE]">
                      {idx === 0
                        ? "Wealth Code"
                        : idx === 1
                        ? "Glamour Care"
                        : "NeuroSense"}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-400">
                    {item.highlightMetric}
                  </span>
                </div>

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
                    {idx === 0 ? "Lavie Pittmann" : item.domain}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((item, idx) => (
              <ScrollReveal
                key={item.leader}
                variant="zoom"
                delay={idx * 120 + 80}
                className="flex flex-col justify-between rounded-[24px] border border-white/15 bg-[#151518] p-7 transition-colors duration-200 hover:border-[#FF6B00]/50"
              >
                <p className="text-[13.5px] leading-[1.6] text-zinc-300">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-8 flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatarUrl}
                      alt={item.leader}
                      className={`h-9 w-9 rounded-full ${
                        idx > 0 ? "bg-white/95 p-1 object-contain" : "object-cover"
                      }`}
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
