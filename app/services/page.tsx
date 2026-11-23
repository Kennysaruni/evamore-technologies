import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, SITE_CONFIG } from "@/lib/site-data";
import {
  OmotiveEyebrow,
  InvertedFillet,
  ServicesAccordionSection,
  AnimatedUnderline,
} from "@/components/HomeInteractive";
import { CircledArrow } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Web Design, Local SEO & Lead Capture Systems for GTA Contractors & Clinics",
  description:
    "High-converting Next.js websites, local SEO and Core Web Vitals speed fixes, and automated quote follow-up systems for Toronto-area roofers, HVAC, plumbers, and clinics.",
  alternates: {
    canonical: "https://www.evamoretechnologies.com/services",
  },
};

const SERVICE_DEEP_DIVE_PHOTOS = [
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=640&q=75",
  "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=640&q=75",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=640&q=75",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=640&q=75",
];

const SERVICE_LONG_PROSE: Record<
  string,
  {
    problemSolved: string;
    howWeBuildIt: string;
    businessOutcome: string;
  }
> = {
  websites: {
    problemSolved:
      "Most contractor and clinic websites in the Greater Toronto Area are built on slow, bloated page-builder templates that take 4 to 7 seconds to load on cellular data. When a homeowner in Etobicoke has an urgent roof leak or a patient in Mississauga is looking for a physiotherapy assessment on their phone, they don't read long company manifestos—they scan for your service area, trust signals, and a tap-to-call or quote request action within three seconds.",
    howWeBuildIt:
      "We engineer every website from scratch using React 19 and Next.js App Router rather than heavy WordPress themes. Every service you offer gets its own dedicated, plain-language page with a sticky mobile call bar, an above-the-fold 30-second quote request form, and clear proof of your work. Before we write a single line of production code, we deliver a custom homepage mockup within 3 business days so you can review the exact layout first.",
    businessOutcome:
      "Your pages render in under one second on mobile networks, visitors immediately understand what you fix and which GTA neighbourhoods you cover, and significantly more mobile searchers turn into submitted quote requests and phone calls.",
  },
  "local-seo": {
    problemSolved:
      "A great-looking website doesn't generate revenue if local customers only find you when they type your exact company name. Many trades and clinics cram all of their offerings onto a single generic 'Services' bullet list, leaving Google with no clear signal to rank them when someone searches 'emergency furnace repair North York' or 'family dental clinic Scarborough'.",
    howWeBuildIt:
      "We structure your site's information architecture around real high-intent Greater Toronto Area search queries. That includes dedicated service-area headings, clean canonical URL structures, Core Web Vitals speed optimization (LCP, INP, and CLS), and complete JSON-LD structured data (LocalBusiness, Service, and FAQPage schema). We also align your website metadata directly with your Google Business Profile categories and service areas.",
    businessOutcome:
      "Search engines and AI answer engines can crawl, index, and rank your individual service pages accurately—helping you capture both Google Map Pack calls and organic local searches without paying for every click.",
  },
  "quote-followup": {
    problemSolved:
      "Winning the click is only half the battle. In home services and private healthcare, 78% of customers book with the first business that responds to their inquiry. When you are up on a roof, under a sink, or with a patient, form submissions sitting silently in an email inbox until 7:00 PM mean lost jobs—and estimates that don't get followed up after 48 hours quietly go cold.",
    howWeBuildIt:
      "We wire your website quote forms directly into a dedicated PostgreSQL lead database and automated notification pipeline. The moment a homeowner or patient submits an inquiry, you receive an instant phone alert with their details and service need. If an estimate is sent and the lead hasn't replied, our system automatically sends a polite, plain-language check-in on Day 2 and Day 5.",
    businessOutcome:
      "Zero leads slip through the cracks during busy workdays, you reach prospects while they still have their calendar open, and you recover quiet estimates automatically without spending your evenings chasing emails.",
  },
  "care-plan": {
    problemSolved:
      "Many traditional agencies either lock you into an expensive retainer where you don't even own your domain, or hand you a fragile website and disappear the day it launches. Business owners shouldn't have to wrestle with SSL certificates, broken form deliveries, or 25-page SEO PDFs full of vanity impressions.",
    howWeBuildIt:
      "Even though you own 100% of your code, content, and domain upon final payment, our optional $150 CAD/month Care Plan gives you hands-off technical management. We handle edge cloud hosting, daily backups, security updates, uptime and form-delivery checks, and same-week text or pricing edits whenever your seasonal offers change.",
    businessOutcome:
      "Your website stays fast and secure year-round, you have direct access to Kenny on Monday–Friday Toronto business hours, and you receive a single, honest one-line monthly report: Leads in · Quotes sent · Jobs booked.",
  },
};

const SERVICES_FAQ_ITEMS = [
  {
    question: "What is included in a standard high-converting website build?",
    answer:
      "Every Starter ($1,500 CAD) and Growth ($2,500 CAD) build includes 5 custom-engineered pages (Home, Services, About, Contact, and 1 dedicated GTA Service-Area page), done-for-you plain-language copywriting, mobile-first tap-to-call and quote capture forms, technical Local SEO and JSON-LD schema markup, and a free custom mockup before you commit.",
  },
  {
    question: "How does your automated quote follow-up and lead capture system work?",
    answer:
      "When a visitor submits a quote form on your website, their request is stored in a secure database and triggers an immediate alert to your phone and email. If a sent quote hasn't been answered, the system sends a polite, non-pushy follow-up message on Day 2 and Day 5 to ask if the customer has any questions—helping you close estimates that would otherwise go cold.",
  },
  {
    question: "Can you fix the page speed and local SEO on our existing domain?",
    answer:
      "Yes. If you already have an established domain name (such as a .ca or .com), we keep your domain authority intact while replacing slow, outdated templates with a sub-second Next.js architecture, clean 301 redirects, proper canonical tags, and dedicated service pages optimized for Toronto and GTA searches.",
  },
  {
    question: "Do I have to write the service descriptions and city pages myself?",
    answer:
      "No. Most contractors and clinic directors don't have spare evenings to write marketing copy. After a short 15-minute intake call or email summary of the services you perform and the neighbourhoods you serve, we write all service pages and FAQ sections in clear, helpful language.",
  },
  {
    question: "How does the free 3-day website mockup process work?",
    answer:
      "Before you sign a contract or pay a deposit, we audit your current online presence and design a custom mockup of your new homepage within 3 business days. If you love the direction, payment is split 50% to begin development and 50% only after you review and approve the finished site.",
  },
  {
    question: "Do I own 100% of the website code and domain after launch?",
    answer:
      "Yes. Upon final payment, you own 100% of the repository, custom copy, design assets, and domain configuration. Our $150 CAD/month Care Plan is completely optional and billed month-to-month with zero lock-in.",
  },
];

export default function ServicesPage() {
  const servicesStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Web Design, Local SEO & Automated Quote Follow-Up Systems",
      provider: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: "https://www.evamoretechnologies.com",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Greater Toronto Area, Ontario, Canada",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Evamore Technologies Web & Conversion Services",
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.shortTitle,
            description: `${service.summary} ${SERVICE_LONG_PROSE[service.id]?.howWeBuildIt ?? ""}`,
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: SERVICES_FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
        }}
      />

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
              Most local businesses don&apos;t need a bigger website—they need
              high-intent GTA customers to find them on Google, trust them on
              mobile within seconds, and get a fast reply when they request a
              quote.
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
                      width={260}
                      height={155}
                      decoding="async"
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
              <p className="mt-4 max-w-[370px] text-[13px] leading-[1.6] text-[var(--text-secondary)]">
                Four integrated systems engineered for roofers, HVAC technicians,
                plumbers, renovators, and healthcare clinics across Toronto and
                the GTA.
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
          3. 4 ALTERNATING SERVICE DEEP-DIVE CARDS (With Detailed Multi-Paragraph Breakdown)
         ===================================================================== */}
      <section className="mx-auto max-w-[1180px] px-4 py-20 space-y-12 sm:px-6 sm:py-24 lg:px-8">
        <ScrollReveal variant="left" className="max-w-2xl">
          <OmotiveEyebrow
            first="In-Depth"
            second="Service Specifications"
            icon="monitor"
          />
          <h2 className="om-h2 mt-4 text-[34px] text-[var(--text-primary)] sm:text-[44px]">
            What We Build &amp; Why It Converts.
          </h2>
          <p className="mt-3 text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">
            Every engagement addresses the full customer journey—from the moment
            a homeowner searches on Google to the automated follow-up that turns
            your estimate into a booked job.
          </p>
        </ScrollReveal>

        {SERVICES.map((service, idx) => {
          const isEven = idx % 2 === 0;
          const prose = SERVICE_LONG_PROSE[service.id];
          return (
            <ScrollReveal
              key={service.id}
              variant={isEven ? "left" : "right"}
              className={`group rounded-[30px] p-6 sm:p-10 ${
                isEven ? "om-floating-card" : "bg-[var(--bg-peach)]"
              }`}
            >
              <div id={service.id} className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  } space-y-5`}
                >
                  <div className="relative h-[260px] sm:h-[310px] w-full">
                    <div className="h-full w-full overflow-hidden rounded-[24px]">
                      <img
                        src={SERVICE_DEEP_DIVE_PHOTOS[idx]}
                        alt={service.shortTitle}
                        width={460}
                        height={310}
                        loading="lazy"
                        decoding="async"
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

                  {/* Business Outcome Summary Box */}
                  {prose && (
                    <div
                      className={`rounded-[22px] p-5 border border-[var(--divider-line)] ${
                        isEven ? "bg-[var(--bg-peach)]" : "bg-[var(--bg-canvas)]"
                      }`}
                    >
                      <p className="text-xs font-semibold text-[#00B64F]">
                        Measurable Business Outcome
                      </p>
                      <p className="mt-1.5 text-[12.5px] leading-[1.6] text-[var(--text-secondary)]">
                        {prose.businessOutcome}
                      </p>
                    </div>
                  )}
                </div>

                <div
                  className={`lg:col-span-7 space-y-5 ${
                    isEven ? "lg:order-2 lg:pl-4" : "lg:order-1 lg:pr-4"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full bg-[#00B64F] px-3.5 py-1 text-xs font-medium text-white">
                      0{idx + 1} · {service.title}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">
                      {service.metricLabel}: {service.metricValue}
                    </span>
                  </div>

                  <h3 className="om-h2 text-2xl text-[var(--text-primary)] sm:text-3xl">
                    {service.shortTitle}
                  </h3>

                  {prose ? (
                    <div className="space-y-3.5 text-[13.5px] leading-[1.68] text-[var(--text-secondary)]">
                      <p>
                        <strong className="font-medium text-[var(--text-primary)]">
                          The challenge:{" "}
                        </strong>
                        {prose.problemSolved}
                      </p>
                      <p>
                        <strong className="font-medium text-[var(--text-primary)]">
                          How we engineer it:{" "}
                        </strong>
                        {prose.howWeBuildIt}
                      </p>
                    </div>
                  ) : (
                    <p className="text-[13.5px] leading-[1.6] text-[var(--text-secondary)]">
                      {service.summary}
                    </p>
                  )}

                  <div className="border-t border-[var(--divider-line)] pt-4">
                    <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                      Core Deliverables Included
                    </p>
                    <ul className="space-y-2.5">
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
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link href="/contact" className="om-btn-primary">
                      <span>Get a free mockup</span>
                      <CircledArrow className="h-4 w-4" />
                    </Link>
                    <Link href="/work" className="om-btn-soft">
                      <span>See live examples</span>
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
          4. INDUSTRIES & TRADES WE SERVE IN TORONTO & THE GTA
         ===================================================================== */}
      <section className="bg-[#121214] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <ScrollReveal variant="left" className="lg:col-span-7">
              <OmotiveEyebrow
                first="Built For"
                second="GTA Service Businesses"
                icon="key"
                dark
              />
              <h2 className="om-h2 mt-5 text-[34px] text-white sm:text-[44px]">
                Tailored For High-Trust <br />
                Local Trades &amp; Clinics.
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="right" delay={120} className="lg:col-span-5">
              <p className="text-[13.5px] leading-[1.65] text-zinc-300">
                Whether you run a three-truck plumbing crew in Mississauga or a
                growing health clinic in North York, our systems are tailored to
                how your customers search, compare, and book.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Home-Service Contractors",
                tag: "Roofing · HVAC · Plumbing · Electrical",
                body: "Emergency and replacement searches happen almost entirely on mobile phones. We highlight your service areas across Toronto, Etobicoke, Mississauga, Brampton, Markham, and Scarborough, put tap-to-call actions on every screen, and automate estimate follow-ups.",
              },
              {
                title: "Renovation & Exterior Specialists",
                tag: "Remodeling · Landscaping · Interlock",
                body: "High-ticket residential projects require visual proof and fast trust. We optimize high-resolution project galleries for sub-second loading with Next.js and capture project scope, neighbourhood, and timeline cleanly in a 30-second quote request.",
              },
              {
                title: "Healthcare, Dental & Care Clinics",
                tag: "Home Care · Dental · Physio · Clinical",
                body: "Patients and families looking for care need plain-language clarity on treatments, accessibility, and insurance or consultation steps. We build high-contrast, accessible pages that turn anxious visitors into booked assessments.",
              },
            ].map((sector, idx) => (
              <ScrollReveal
                key={sector.title}
                variant="zoom"
                delay={idx * 120}
                className="flex flex-col justify-between rounded-[26px] border border-white/15 bg-[#1B1B1F] p-7 transition-colors hover:border-[#FF6B00]/50"
              >
                <div className="space-y-4">
                  <span className="inline-block rounded-full bg-[#121214] border border-white/15 px-3.5 py-1 text-[11px] font-medium text-[#00B64F]">
                    {sector.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-[#FFE4DE]">
                    {sector.title}
                  </h3>
                  <p className="text-[13px] leading-[1.65] text-zinc-300">
                    {sector.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. DEDICATED SERVICES FAQ SECTION
         ===================================================================== */}
      <section id="faq" className="mx-auto max-w-[1180px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          <ScrollReveal variant="left" className="lg:col-span-5 space-y-5">
            <OmotiveEyebrow
              first="Service"
              second="Frequently Asked Questions"
              icon="users"
            />
            <h2 className="om-h2 text-[34px] text-[var(--text-primary)] sm:text-[42px]">
              Common Questions About Our Services.
            </h2>
            <p className="text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">
              Clear answers on how our website builds, local SEO architecture,
              automated quote follow-up, and 50/50 payment schedule work.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="om-btn-primary">
                <span>Ask Kenny a question</span>
                <CircledArrow className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-7 space-y-4">
            {SERVICES_FAQ_ITEMS.map((faq, idx) => (
              <ScrollReveal
                key={faq.question}
                variant="right"
                delay={idx * 70}
                className="rounded-[24px] bg-[var(--bg-peach)] p-6 sm:p-7"
              >
                <h3 className="text-base sm:text-lg font-medium text-[var(--text-primary)]">
                  {faq.question}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">
                  {faq.answer}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
