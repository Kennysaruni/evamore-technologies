import type { Metadata } from "next";
import Link from "next/link";
import {
  OmotiveEyebrow,
  InvertedFillet,
  AnimatedUnderline,
} from "@/components/HomeInteractive";
import { CircledArrow } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Evamore Technologies | Mission, Process & Founder Credentials",
  description:
    "Meet Kenny, founder and full-stack developer at Evamore Technologies. Learn about our mission, engineering credentials, and 4-phase delivery process for Toronto and GTA contractors and clinics.",
  alternates: {
    canonical: "https://www.evamoretechnologies.com/about",
  },
};

const VALUES = [
  {
    step: "01",
    title: "Plain language",
    body: "No agency buzzwords or 30-page decks. We tell you exactly what is costing your business phone calls and quote requests, and how we will fix it in plain English.",
    photo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=85",
    badge: "Clear Copy",
  },
  {
    step: "02",
    title: "Fast sites",
    body: "Engineered with React 19 and Next.js App Router instead of bloated templates so pages open immediately on cellular connections when local customers search for help.",
    photo:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=85",
    badge: "Next.js Speed",
  },
  {
    step: "03",
    title: "Honest numbers",
    body: "We measure success in leads in, quotes sent, and jobs booked—never vanity impressions or incomprehensible marketing charts.",
    photo:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=85",
    badge: "1-Line Report",
  },
];

const DELIVERY_PROCESS_PHASES = [
  {
    phase: "Phase 01",
    timeline: "Day 1",
    title: "Conversion & Local Search Audit",
    description:
      "Before proposing a redesign, we inspect your existing website or local Google presence from a mobile customer's perspective. We check cellular load speed, tap-to-call visibility, service-area keyword gaps across the Greater Toronto Area, and where quote requests currently get delayed or lost.",
    deliverable: "Plain-language breakdown of what is costing you leads",
  },
  {
    phase: "Phase 02",
    timeline: "Within 3 Business Days",
    title: "Free Custom Homepage Mockup ($0 Upfront)",
    description:
      "You should never have to pay thousands of dollars upfront and hope you like what an agency builds. Within 3 business days, Kenny designs and shares a tailored homepage mockup built around your real services, brand identity, and target cities. You review the layout and request adjustments before committing.",
    deliverable: "Interactive homepage design direction before any deposit",
  },
  {
    phase: "Phase 03",
    timeline: "5–10 Business Days",
    title: "Full-Stack Next.js Build & Follow-Up Automation",
    description:
      "Once you approve the mockup and pay the 50% starting deposit, we write the production code in React and Next.js, craft done-for-you service pages, implement LocalBusiness and FAQPage JSON-LD schema, and wire your quote forms into our PostgreSQL lead database with instant phone alerts and Day 2 / Day 5 automatic follow-ups.",
    deliverable: "Staging website + live automated quote follow-up pipeline",
  },
  {
    phase: "Phase 04",
    timeline: "Launch & Ongoing",
    title: "Live Launch, 100% Ownership Handover & Care Plan",
    description:
      "After you test and approve the staging build, the final 50% balance is settled and we launch on your custom domain with SSL and Google Search Console indexing. You own 100% of the code, copy, and domain. If you want ongoing hosting, same-week edits, and a one-line monthly ROI report, you can add our optional $150 CAD/month Care Plan.",
    deliverable: "100% client-owned live platform + optional monthly Care Plan",
  },
];

export default function AboutPage() {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Evamore Technologies",
    url: "https://www.evamoretechnologies.com/about",
    mainEntity: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: "https://www.evamoretechnologies.com",
      description: SITE_CONFIG.oneLiner,
      founder: {
        "@type": "Person",
        name: "Kenny",
        jobTitle: "Founder & Full-Stack Lead Developer",
        knowsAbout: [
          "Next.js App Router",
          "React & TypeScript",
          "PostgreSQL & Prisma ORM",
          "Technical Local SEO",
          "Automated Lead Capture & Quote Follow-Up Systems",
        ],
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutStructuredData),
        }}
      />

      {/* =====================================================================
          1. DISTINCT ABOUT HERO: Warm Peach Banner + Wide 3-Column Bento Stage
         ===================================================================== */}
      <section className="bg-[var(--bg-peach)] pb-20 pt-10 sm:pt-14">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <ScrollReveal variant="left" className="lg:col-span-7">
              <OmotiveEyebrow
                first="Who We Are"
                second="Direct Web Studio"
                icon="users"
              />
              <h1 className="om-h1 mt-5 text-[42px] text-[var(--text-primary)] sm:text-[54px] lg:text-[60px]">
                One Developer Answers <br />
                For{" "}
                <span className="relative inline-block">
                  Every Project.
                  <AnimatedUnderline />
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="right" delay={120} className="lg:col-span-5 lg:pl-6">
              <p className="text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">
                Evamore Technologies is a specialized web engineering studio led
                by Kenny, a full-stack software developer. We work remotely from
                Kenya with home-service contractors and clinics across Toronto
                and the Greater Toronto Area on standard EST business hours.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="om-btn-primary">
                  <span>Talk to us</span>
                  <CircledArrow className="h-4 w-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-6 py-3.5 text-sm font-medium text-[var(--text-primary)] transition-transform duration-200 hover:scale-[1.02]"
                >
                  <span>View Case Studies</span>
                  <CircledArrow className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Wide Asymmetric 3-Card Bento Photo Stage with Cutout Notches */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
            <ScrollReveal variant="left" delay={140} className="group relative h-[310px] sm:h-[350px] lg:col-span-7">
              <div className="h-full w-full overflow-hidden rounded-[28px]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1100&q=85"
                  alt="Remote collaboration with Canadian business owners"
                  className="om-lens-img h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-[28px]" />
                <div className="absolute bottom-5 left-6 z-10 max-w-[48%]">
                  <p className="text-lg sm:text-xl font-medium text-white">
                    Built with React &amp; Next.js
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-[2px] -right-[2px] z-20 w-[48%] rounded-tl-[24px] bg-[var(--bg-peach)] pl-5 pt-3.5 pb-1.5 pr-2">
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
                <p className="text-[12px] leading-[1.48] text-[var(--text-secondary)]">
                  If something breaks, you reach the exact person who built your site.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="right" delay={240} className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col justify-between rounded-[26px] bg-[#00B64F] p-6 text-white shadow-lg shadow-[#00B64F]/25 transition-transform duration-300 hover:scale-[1.02]">
                  <span className="text-xs font-medium text-white/85">
                    Turnaround
                  </span>
                  <div className="mt-4">
                    <p className="text-3xl font-medium tracking-tight text-white">
                      5–10
                    </p>
                    <p className="mt-1 text-xs text-white/90">
                      Business Days Build
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-[26px] bg-[#141416] p-6 text-white transition-transform duration-300 hover:scale-[1.02]">
                  <span className="text-xs font-medium text-[#FF6B00]">
                    Schedule
                  </span>
                  <div className="mt-4">
                    <p className="text-3xl font-medium tracking-tight text-white">
                      EST
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">
                      Mon–Fri Toronto Hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative h-[180px] w-full">
                <div className="h-full w-full overflow-hidden rounded-[26px]">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85"
                    alt="Kenny's full-stack development desk"
                    className="om-lens-img h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-[1px] -right-[1px] z-10 rounded-tl-[18px] bg-[var(--bg-peach)] pl-3 pt-2 pb-0.5 pr-0.5">
                  <InvertedFillet
                    fillClass="text-[var(--bg-peach)]"
                    position="bottom-right"
                    size={16}
                    className="absolute bottom-0 -left-[15px]"
                  />
                  <InvertedFillet
                    fillClass="text-[var(--bg-peach)]"
                    position="bottom-right"
                    size={16}
                    className="absolute -top-[15px] right-0"
                  />
                  <span className="inline-block rounded-full border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-4 py-1 text-[11px] font-medium text-[var(--text-primary)]">
                    Next.js · React Studio
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. MEET OUR DEVELOPER & FOUNDER (Kenny's Office Portrait + Credentials)
         ===================================================================== */}
      <section className="mx-auto max-w-[1180px] px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8">
        <div className="om-floating-card rounded-[32px] p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            {/* Left Column: Founder Portrait with Inverted-Corner Cutout + Technical Credentials */}
            <ScrollReveal variant="left" className="lg:col-span-5 space-y-6">
              <div className="group relative mx-auto aspect-square w-full max-w-[400px]">
                <div className="h-full w-full overflow-hidden rounded-[28px] bg-[#141416]">
                  <img
                    src="/Evamore Technologies Office Portrait.png"
                    alt="Kenny, Developer and Founder of Evamore Technologies"
                    className="om-lens-img h-full w-full object-cover object-top"
                  />
                </div>

                {/* Top-Left Emerald Green Trust Badge */}
                <div className="absolute left-4 top-4 z-10 rounded-full bg-[#00B64F] px-3.5 py-1.5 text-[11px] font-medium text-white shadow-md shadow-[#00B64F]/30">
                  Direct 1-on-1 Support
                </div>

                {/* Seamless Bottom-Right Cutout Pill */}
                <div className="absolute -bottom-[1px] -right-[1px] z-10 rounded-tl-[20px] bg-[var(--glass-surface)] pl-3.5 pt-2.5 pb-0.5 pr-0.5">
                  <InvertedFillet
                    fillClass="text-[var(--bg-canvas)]"
                    position="bottom-right"
                    size={18}
                    className="absolute bottom-0 -left-[17px]"
                  />
                  <InvertedFillet
                    fillClass="text-[var(--bg-canvas)]"
                    position="bottom-right"
                    size={18}
                    className="absolute -top-[17px] right-0"
                  />
                  <span className="inline-block rounded-full border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-4 py-1.5 text-xs font-medium text-[var(--text-primary)]">
                    Kenny · Founder &amp; Developer
                  </span>
                </div>
              </div>

              {/* Technical Credentials & Stack Box */}
              <div className="rounded-[24px] bg-[var(--bg-peach)] p-5 border border-[var(--divider-line)]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                  Founder Engineering Credentials
                </p>
                <ul className="mt-3 space-y-2 text-xs leading-[1.55] text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00B64F]" />
                    <span>
                      <strong className="font-medium text-[var(--text-primary)]">
                        Full-Stack Web Engineering:
                      </strong>{" "}
                      React 19, Next.js App Router, TypeScript, Tailwind CSS,
                      Node.js, and PostgreSQL / Prisma ORM.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00B64F]" />
                    <span>
                      <strong className="font-medium text-[var(--text-primary)]">
                        Search &amp; Conversion Architecture:
                      </strong>{" "}
                      Core Web Vitals optimization, Schema.org JSON-LD markup,
                      and automated quote follow-up workflows.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00B64F]" />
                    <span>
                      <strong className="font-medium text-[var(--text-primary)]">
                        Cross-Border Delivery:
                      </strong>{" "}
                      Proven production launches across home care, healthcare,
                      and financial advisory clients on EST business hours.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Right Column: Buyer-Focused Founder Story & Direct Booking CTA */}
            <ScrollReveal variant="right" delay={120} className="lg:col-span-7 space-y-5">
              <OmotiveEyebrow
                first="Meet Our"
                second="Developer & Founder"
                icon="users"
              />

              <h2 className="om-h2 text-[32px] text-[var(--text-primary)] sm:text-[42px]">
                I Personally Build &amp;{" "}
                <span className="relative inline-block">
                  Look After
                  <AnimatedUnderline />
                </span>{" "}
                Every Project.
              </h2>

              <p className="text-[13.5px] leading-[1.68] text-[var(--text-secondary)]">
                When you hire a large marketing agency, your project is often
                sold by a senior salesperson and quietly handed off to a
                rotating queue of junior account managers or outsourced template
                installers. At Evamore Technologies, there is zero hand-off. I
                personally audit your current site, design your free 3-day
                mockup, write the production code, and configure your automated
                quote follow-up system from start to finish.
              </p>

              <p className="text-[13.5px] leading-[1.68] text-[var(--text-secondary)]">
                Over the past several years, I&apos;ve partnered with
                service-driven organizations across multiple industries—from
                home-care directors like{" "}
                <strong className="font-medium text-[var(--text-primary)]">
                  Shavonnah at Glamour Home Care (glamourhomecare.org)
                </strong>{" "}
                and financial advisory leaders like{" "}
                <strong className="font-medium text-[var(--text-primary)]">
                  Lavie Pittmann at The Wealth Code Collective
                </strong>{" "}
                to specialized clinical platforms like{" "}
                <strong className="font-medium text-[var(--text-primary)]">
                  NeuroSense Africa (neurosenseafrica.com)
                </strong>
                . Every one of those builds solved the same core business
                problem: making sure busy customers on mobile phones understand
                your value immediately and can request help without friction.
              </p>

              <p className="text-[13.5px] leading-[1.68] text-[var(--text-secondary)]">
                Although I work remotely from Kenya, my studio operates on
                standard{" "}
                <strong className="font-medium text-[var(--text-primary)]">
                  Monday–Friday Toronto business hours (EST)
                </strong>
                . That means you get senior custom Next.js engineering and
                same-day direct communication at transparent flat-rate CAD
                pricing—without paying for downtown agency overhead.
              </p>

              <div className="grid grid-cols-1 gap-3 border-t border-[var(--divider-line)] pt-5 sm:grid-cols-3">
                <div className="rounded-2xl bg-[var(--bg-peach)] px-4 py-3">
                  <p className="text-xs font-semibold text-[#FF6B00]">
                    Mockup First
                  </p>
                  <p className="mt-0.5 text-[11.5px] text-[var(--text-secondary)]">
                    Approve the design before final build
                  </p>
                </div>
                <div className="rounded-2xl bg-[var(--bg-peach)] px-4 py-3">
                  <p className="text-xs font-semibold text-[#00B64F]">
                    Toronto Hours
                  </p>
                  <p className="mt-0.5 text-[11.5px] text-[var(--text-secondary)]">
                    Mon–Fri EST calls &amp; same-day replies
                  </p>
                </div>
                <div className="rounded-2xl bg-[var(--bg-peach)] px-4 py-3">
                  <p className="text-xs font-semibold text-[var(--text-primary)]">
                    100% Yours
                  </p>
                  <p className="mt-0.5 text-[11.5px] text-[var(--text-secondary)]">
                    Full ownership of code &amp; domain
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href={SITE_CONFIG.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="om-btn-primary"
                >
                  <span>Book a Call with Kenny</span>
                  <CircledArrow className="h-4 w-4" />
                </a>
                <Link href="/contact" className="om-btn-soft">
                  <span>Get a free mockup</span>
                  <CircledArrow className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. OUR MISSION & THREE RULES WE BUILD BY
         ===================================================================== */}
      <section className="mx-auto max-w-[1180px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <ScrollReveal variant="left" className="lg:col-span-6">
            <OmotiveEyebrow
              first="Our Mission"
              second="& Core Values"
              icon="briefcase"
            />
            <h2 className="om-h2 mt-5 text-[36px] text-[var(--text-primary)] sm:text-[44px]">
              Why Evamore Exists &amp; <br />
              Three Rules We Build By.
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="right" delay={120} className="lg:col-span-6">
            <p className="text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">
              Our mission is simple: help skilled local contractors and clinics
              in the Greater Toronto Area stop losing high-value jobs to
              competitors who merely have faster websites or quicker quote
              follow-up. You shouldn&apos;t need to become a marketer to keep
              your crew or clinic schedule full.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {VALUES.map((val, idx) => (
            <ScrollReveal
              key={val.title}
              variant="zoom"
              delay={idx * 120}
              className="group space-y-4"
            >
              <div className="relative h-[225px] w-full">
                <div className="h-full w-full overflow-hidden rounded-[24px]">
                  <img
                    src={val.photo}
                    alt={val.title}
                    className="om-lens-img h-full w-full object-cover"
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
                  <span className="inline-block rounded-full border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-3.5 py-1 text-[11px] font-medium text-[var(--text-primary)]">
                    {val.step} · {val.badge}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-medium text-[var(--text-primary)] group-hover:text-[#FF6B00] transition-colors">
                {val.title}
              </h3>
              <p className="text-[13px] leading-[1.62] text-[var(--text-secondary)]">
                {val.body}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* =====================================================================
          4. HOW WE WORK (Matte Black Section with Cutout Cards)
         ===================================================================== */}
      <section className="bg-[#121214] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="zoom" className="mx-auto max-w-2xl text-center">
            <OmotiveEyebrow
              first="Direct"
              second="Accountability"
              icon="key"
              dark
              centered
            />
            <h2 className="om-h2 mt-5 text-[36px] text-white sm:text-[44px]">
              How We Work With <br />
              Canadian Owners
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: "One Person Answers",
                category: "No Account Managers",
                pill: "Direct Access",
                body: "You speak directly with Kenny—the developer writing your code, structuring your service pages, and setting up your lead alerts.",
              },
              {
                title: "Mockup Comes First",
                category: "Zero Upfront Risk",
                pill: "3 Business Days",
                body: "You review and approve a custom homepage mockup for your business before we write final production code or ask for a deposit.",
              },
              {
                title: "Toronto Timezone",
                category: "Mon–Fri Support",
                pill: "EST Hours",
                body: "All calls, project reviews, and same-day support happen on standard Greater Toronto Area business hours (9 AM – 5 PM EST).",
              },
            ].map((card, idx) => (
              <ScrollReveal
                key={card.title}
                variant="zoom"
                delay={idx * 120}
                className="space-y-4"
              >
                <div className="group relative h-[135px] rounded-[24px] bg-[#1B1B1F] p-6">
                  <div className="flex items-start justify-between">
                    <span className="text-lg font-semibold text-[#FFE4DE]">
                      {card.title}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {card.category}
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
                      {card.pill}
                    </span>
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/15 bg-[#151518] p-6">
                  <p className="text-[13px] leading-[1.6] text-zinc-300">
                    {card.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. OUR 4-PHASE ENGINEERING & DELIVERY PROCESS (Unique In-Depth Breakdown)
         ===================================================================== */}
      <section className="bg-[var(--bg-peach)] py-20 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <ScrollReveal variant="left" className="lg:col-span-7">
              <OmotiveEyebrow
                first="Step-By-Step"
                second="Engineering Process"
                icon="key"
              />
              <h2 className="om-h2 mt-5 text-[36px] text-[var(--text-primary)] sm:text-[44px]">
                From Free Mockup To <br />
                Live Lead Capture.
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="right" delay={120} className="lg:col-span-5">
              <p className="text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">
                Here is the exact four-phase workflow we follow on every project
                so you always know what is happening, what it costs, and when
                your site goes live.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {DELIVERY_PROCESS_PHASES.map((item, idx) => (
              <ScrollReveal
                key={item.phase}
                variant={idx % 2 === 0 ? "left" : "right"}
                delay={idx * 90}
                className="om-floating-card flex flex-col justify-between rounded-[28px] p-7 sm:p-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-[#00B64F] px-3.5 py-1 text-xs font-medium text-white">
                      {item.phase}
                    </span>
                    <span className="text-xs font-medium text-[#FF6B00]">
                      {item.timeline}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium text-[var(--text-primary)] sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[var(--divider-line)] pt-4 flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-[var(--text-primary)]">
                    Milestone Output:
                  </span>
                  <span className="text-xs text-[var(--text-secondary)]">
                    {item.deliverable}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="zoom" delay={200} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="om-btn-primary">
              <span>Start Phase 1: Request Your Free Mockup</span>
              <CircledArrow className="h-4 w-4" />
            </Link>
            <Link href="/services" className="om-btn-soft">
              <span>Explore Our Services</span>
              <CircledArrow className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
