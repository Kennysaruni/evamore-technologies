import type { Metadata } from "next";
import Link from "next/link";
import { CLIENT_PROJECTS, TESTIMONIALS } from "@/lib/site-data";
import {
  OmotiveEyebrow,
  InvertedFillet,
  AnimatedUnderline,
} from "@/components/HomeInteractive";
import { CircledArrow } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Recent Website Builds and Case Studies",
  description:
    "Explore websites and conversion systems built by Evamore Technologies for care providers, clinics, and service businesses.",
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

const AVATAR_URLS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
];

export default function WorkPage() {
  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative mx-auto max-w-[1180px] px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-16 -z-10 h-96 w-96 rounded-full bg-[#FFE4DE]/55 blur-3xl dark:bg-[#FF6B00]/10"
        />

        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
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
          </div>

          <div className="max-w-[340px]">
            <p className="text-[13px] leading-[1.6] text-[var(--text-secondary)]">
              Every build focuses on fast mobile load times, plain service
              pages, and frictionless inquiry capture.
            </p>
            <div className="mt-5">
              <Link href="/contact" className="om-btn-primary">
                <span>Get a free mockup</span>
                <CircledArrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CASE STUDIES SHOWCASE (Warm Peach Section with Cutout Photo Cards) */}
      <section className="bg-[var(--bg-peach)] py-20 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 space-y-12 sm:px-6 lg:px-8">
          {CLIENT_PROJECTS.map((project, idx) => {
            const photoUrl =
              PROJECT_PHOTOS[project.slug] ||
              PROJECT_PHOTOS["glamour-home-care"];
            const isEven = idx % 2 === 0;

            return (
              <article
                key={project.slug}
                id={project.slug}
                className="om-floating-card group rounded-[30px] p-6 sm:p-10"
              >
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                  {/* Photo Column with Bottom-Right Inverted-Corner Cutout */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative h-[280px] sm:h-[325px] w-full">
                      <div className="h-full w-full overflow-hidden rounded-[24px]">
                        <img
                          src={photoUrl}
                          alt={`${project.name} desktop and mobile website showcase`}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </div>

                      {/* Seamless Bottom-Right Cutout Pill */}
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
                  </div>

                  {/* Case Study Details Column */}
                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isEven ? "lg:order-2 lg:pl-4" : "lg:order-1 lg:pr-4"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
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

                    <p className="text-[13px] leading-[1.6] text-[var(--text-secondary)]">
                      <strong className="font-medium text-[var(--text-primary)]">
                        The problem:{" "}
                      </strong>
                      {project.problem}
                    </p>

                    <ul className="space-y-2 border-t border-[var(--divider-line)] pt-4">
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

                    <div className="pt-2">
                      <Link href="/contact" className="om-btn-primary">
                        <span>Request a similar build</span>
                        <CircledArrow className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. TESTIMONIALS DARK SECTION (Exact 1:1 Omotive Cutout Cards) */}
      <section className="bg-[#121214] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <OmotiveEyebrow
              first="Valuable"
              second="Feedback"
              icon="users"
              dark
              centered
            />
            <h2 className="om-h2 mt-5 text-[36px] text-white sm:text-[44px]">
              Trusted By Fast-Growing <br />
              Businesses &amp; Clinics
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={item.company}
                className="group relative h-[140px] rounded-[24px] bg-[#1B1B1F] p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xl font-semibold tracking-tight text-[#FFE4DE]">
                    {idx === 0
                      ? "Wealth Code"
                      : idx === 1
                      ? "Glamour Care"
                      : "NeuroSense"}
                  </span>
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
              </div>
            ))}
          </div>

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
    </div>
  );
}
