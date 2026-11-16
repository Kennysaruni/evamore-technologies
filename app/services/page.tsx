import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/site-data";
import {
  OmotiveEyebrow,
  InvertedFillet,
  ServicesAccordionSection,
  ProcessShowcaseSection,
  ClientQuestionsAndFaqSection,
  AnimatedUnderline,
} from "@/components/HomeInteractive";
import { CircledArrow } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Web Design and Local SEO for Home Services",
  description:
    "Websites, local SEO and quote follow-up for roofers, HVAC, plumbers and clinics in the GTA.",
};

const SERVICE_DEEP_DIVE_PHOTOS = [
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85",
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* =====================================================================
          1. BRIGHT OMOTIVE SERVICES HERO (Clean Light Canvas + 4 Visual Cutout Pillar Cards)
         ===================================================================== */}
      <section className="relative mx-auto max-w-[1180px] px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-16 -z-10 h-96 w-96 rounded-full bg-[#FFE4DE]/60 blur-3xl dark:bg-[#FF6B00]/10"
        />

        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <ScrollReveal variant="left" className="lg:col-span-7">
            <OmotiveEyebrow
              first="Four Core Systems"
              second="Fewer Lost Customers"
              icon="briefcase"
            />

            <h1 className="om-h1 mt-6 text-[40px] text-[var(--text-primary)] sm:text-[52px] lg:text-[58px]">
              Websites That Get{" "}
              <span className="relative inline-block">
                Quote Requests,
                <AnimatedUnderline />
              </span>{" "}
              <br />
              And A System That Answers.
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={120} className="lg:col-span-5 lg:pl-6">
            <p className="text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">
              Most local businesses don&apos;t need a bigger website. They need
              customers to find them, trust them and reach them quickly.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <Link href="/contact" className="om-btn-primary">
                <span>Get a free mockup</span>
                <CircledArrow className="h-4 w-4" />
              </Link>
              <Link href="/pricing" className="om-btn-soft">
                <span>See CAD Pricing</span>
                <CircledArrow className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* 4 Visual Photo-Cutout Service Pillar Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, idx) => (
            <ScrollReveal
              key={service.id}
              variant="zoom"
              delay={idx * 100}
            >
              <a
                href={`#${service.id}`}
                className="group block rounded-[26px] bg-[var(--bg-peach)] p-4 transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-[155px] w-full">
                  <div className="h-full w-full overflow-hidden rounded-[20px]">
                    <img
                      src={SERVICE_DEEP_DIVE_PHOTOS[idx]}
                      alt={service.shortTitle}
                      className="om-lens-img h-full w-full object-cover"
                    />
                  </div>

                  <div className="absolute -bottom-[1px] -right-[1px] z-10 rounded-tl-[16px] bg-[var(--bg-peach)] pl-2.5 pt-2 pb-0.5 pr-0.5">
                    <InvertedFillet
                      fillClass="text-[var(--bg-peach)]"
                      position="bottom-right"
                      size={14}
                      className="absolute bottom-0 -left-[13px]"
                    />
                    <InvertedFillet
                      fillClass="text-[var(--bg-peach)]"
                      position="bottom-right"
                      size={14}
                      className="absolute -top-[13px] right-0"
                    />
                    <span className="inline-block rounded-full border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-3 py-0.5 text-[10.5px] font-medium text-[var(--text-primary)]">
                      {service.metricValue}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between px-1 pb-1">
                  <div>
                    <span className="text-[11px] font-medium text-[#00B64F]">
                      0{idx + 1} · Pillar
                    </span>
                    <h2 className="mt-0.5 text-lg font-medium text-[var(--text-primary)] group-hover:text-[#FF6B00] transition-colors">
                      {service.title}
                    </h2>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors group-hover:bg-[#FF6B00] group-hover:text-white">
                    ↓
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* =====================================================================
          2. INTERACTIVE SERVICES ACCORDION (Warm Peach Section)
         ===================================================================== */}
      <section className="bg-[var(--bg-peach)] py-20 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            <ScrollReveal variant="left" className="lg:col-span-5">
              <OmotiveEyebrow
                first="Business"
                second="Approach"
                icon="briefcase"
              />
              <h2 className="om-h2 mt-5 text-[36px] text-[var(--text-primary)] sm:text-[44px]">
                How We Help You <br />
                Win More Jobs <br />
                From Google
              </h2>
              <p className="mt-4 max-w-[350px] text-[13px] leading-[1.6] text-[var(--text-secondary)]">
                Four things, one goal: fewer lost customers for Toronto-area
                contractors and clinics.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="om-btn-primary">
                  <span>Get a free mockup</span>
                  <CircledArrow className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="right" delay={140} className="lg:col-span-7 lg:pl-8">
              <ServicesAccordionSection />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. 4 ALTERNATING SERVICE DEEP-DIVE CARDS
         ===================================================================== */}
      <section className="mx-auto max-w-[1180px] px-4 py-20 space-y-12 sm:px-6 sm:py-24 lg:px-8">
        {SERVICES.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <ScrollReveal
              key={service.id}
              variant={isEven ? "left" : "right"}
              className={`group rounded-[30px] p-6 sm:p-10 ${
                isEven ? "om-floating-card" : "bg-[var(--bg-peach)]"
              }`}
            >
              <div id={service.id} className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative h-[260px] sm:h-[300px] w-full">
                    <div className="h-full w-full overflow-hidden rounded-[24px]">
                      <img
                        src={SERVICE_DEEP_DIVE_PHOTOS[idx]}
                        alt={service.shortTitle}
                        className="om-lens-img h-full w-full object-cover"
                      />
                    </div>

                    <div
                      className={`absolute -bottom-[1px] -right-[1px] z-10 rounded-tl-[20px] pl-3.5 pt-2.5 pb-0.5 pr-0.5 ${
                        isEven
                          ? "bg-[var(--glass-surface)]"
                          : "bg-[var(--bg-peach)]"
                      }`}
                    >
                      <InvertedFillet
                        fillClass={
                          isEven
                            ? "text-[var(--bg-canvas)]"
                            : "text-[var(--bg-peach)]"
                        }
                        position="bottom-right"
                        size={18}
                        className="absolute bottom-0 -left-[17px]"
                      />
                      <InvertedFillet
                        fillClass={
                          isEven
                            ? "text-[var(--bg-canvas)]"
                            : "text-[var(--bg-peach)]"
                        }
                        position="bottom-right"
                        size={18}
                        className="absolute -top-[17px] right-0"
                      />
                      <span className="inline-block rounded-full border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-4 py-1.5 text-xs font-medium text-[var(--text-primary)]">
                        {service.metricValue}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isEven ? "lg:order-2 lg:pl-4" : "lg:order-1 lg:pr-4"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-full bg-[#00B64F] px-3.5 py-1 text-xs font-medium text-white">
                      0{idx + 1} · {service.title}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">
                      {service.metricLabel}
                    </span>
                  </div>

                  <h2 className="om-h2 text-2xl text-[var(--text-primary)] sm:text-3xl">
                    {service.shortTitle}
                  </h2>

                  <p className="text-[13.5px] leading-[1.6] text-[var(--text-secondary)]">
                    {service.summary}
                  </p>

                  <ul className="space-y-2.5 border-t border-[var(--divider-line)] pt-4">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[var(--text-secondary)]"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#FF6B00]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <Link href="/contact" className="om-btn-primary">
                      <span>Get a free mockup</span>
                      <CircledArrow className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>

      {/* =====================================================================
          4. PROCESS CAROUSEL
         ===================================================================== */}
      <section id="process" className="bg-[var(--bg-peach)] py-20 sm:py-24">
        <ScrollReveal variant="left" className="mx-auto max-w-[1180px] px-4 pb-10 sm:px-6 lg:px-8">
          <OmotiveEyebrow first="Simple" second="process" icon="key" />
          <h2 className="om-h2 mt-5 text-[36px] text-[var(--text-primary)] sm:text-[44px]">
            Understand The Business Process.
          </h2>
        </ScrollReveal>
        <div className="px-2 sm:px-4">
          <ProcessShowcaseSection />
        </div>
      </section>

      {/* =====================================================================
          5. CLIENT QUESTIONS & FAQ
         ===================================================================== */}
      <section className="mx-auto max-w-[1180px] px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal variant="left" className="mb-8 max-w-xl">
          <OmotiveEyebrow first="Client" second="Questions" icon="users" />
          <h2 className="om-h2 mt-4 text-[32px] text-[var(--text-primary)] sm:text-[40px]">
            Questions Business Owners Ask
          </h2>
        </ScrollReveal>
        <ClientQuestionsAndFaqSection />
      </section>
    </div>
  );
}
