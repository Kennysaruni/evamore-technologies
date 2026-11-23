import type { Metadata } from "next";
import Link from "next/link";
import { PRICING_TIERS, SITE_CONFIG } from "@/lib/site-data";
import {
  OmotiveEyebrow,
  InvertedFillet,
  AnimatedUnderline,
} from "@/components/HomeInteractive";
import { CircledArrow } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Website Design & Quote Follow-Up Pricing in CAD",
  description:
    "Transparent CAD pricing for GTA contractors and clinics: $1,500 CAD Starter sites, $2,500 CAD Growth systems with automated quote follow-up, and $150 CAD/month Care plans.",
  alternates: {
    canonical: "https://www.evamoretechnologies.com/pricing",
  },
};

const PAYMENT_STEPS = [
  {
    step: "01",
    title: "$0 Free Mockup First",
    body: "We design and send your custom homepage mockup within 3 business days before you pay a cent.",
    badge: "$0 Upfront",
    photo:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=560&q=75",
  },
  {
    step: "02",
    title: "50% To Begin Build",
    body: "Once you approve the mockup direction, 50% starts development of your pages, local SEO, and quote forms.",
    badge: "50% Deposit",
    photo:
      "https://images.unsplash.com/photo-1519389950473-47ba027781c?auto=format&fit=crop&w=560&q=75",
  },
  {
    step: "03",
    title: "50% Before Launch",
    body: "The remaining 50% is paid only when you approve the finished site. You own 100% of the code and domain.",
    badge: "100% Owned",
    photo:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=560&q=75",
  },
];

const PRICING_FAQ_ITEMS = [
  {
    question: "What is the difference between the $1,500 CAD Starter Site and the $2,500 CAD Growth System?",
    answer:
      "The $1,500 CAD Starter Site gives you a fast, 5-page custom Next.js website (Home, Services, About, Contact, and 1 GTA Service-Area page) with done-for-you copy, Local SEO setup, and quote request forms. The $2,500 CAD Growth System includes everything in Starter plus our automated quote follow-up pipeline—instant phone/email alerts when a lead arrives, automatic Day 2 and Day 5 follow-up messages for unanswered estimates, and a single lead-status tracker.",
  },
  {
    question: "Is the free 3-day website mockup really $0 with no obligation?",
    answer:
      "Yes. We build a tailored homepage mockup for your contracting business or clinic first so you can see the exact visual quality and layout before paying a deposit. If you decide not to move forward, you owe nothing.",
  },
  {
    question: "Are there any hidden monthly fees or mandatory agency retainers?",
    answer:
      "No. Starter ($1,500 CAD) and Growth ($2,500 CAD) are one-time build investments. Upon final payment, you own 100% of the code, copy, and domain. Our $150 CAD/month Care Plan is completely optional for business owners who want managed hosting, daily backups, same-week page edits, and monthly ROI reporting.",
  },
  {
    question: "What if my business needs more than 5 pages or covers multiple GTA cities?",
    answer:
      "Additional dedicated service pages or city/neighbourhood landing pages (for example, separate pages for Mississauga, Etobicoke, North York, Scarborough, or Vaughan) can be added at a clear flat rate quoted upfront during your free mockup review.",
  },
  {
    question: "What payment methods do you accept from Canadian businesses?",
    answer:
      "All pricing is quoted and invoiced in Canadian Dollars (CAD). We accept major credit cards, wire transfers, and standard cross-border business payments, split 50% upon mockup approval and 50% upon final staging approval before launch.",
  },
  {
    question: "Can I cancel the $150 CAD/month Care Plan anytime?",
    answer:
      "Yes. The Care Plan is billed month-to-month with zero long-term contracts. You can cancel at any time with a quick email, and because you own your website code and domain, your site always remains yours.",
  },
];

export default function PricingPage() {
  const pricingStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Evamore Technologies Website & Quote Follow-Up Packages",
      provider: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: "https://www.evamoretechnologies.com",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Starter Site Package",
          price: "1500",
          priceCurrency: "CAD",
          description:
            "5-page mobile-ready Next.js website with Local SEO, tap-to-call, quote form, and 100% client ownership.",
        },
        {
          "@type": "Offer",
          name: "Growth System Package",
          price: "2500",
          priceCurrency: "CAD",
          description:
            "Everything in Starter plus instant SMS/email lead alerts, automated Day 2 & Day 5 quote follow-up sequence, and lead status dashboard.",
        },
        {
          "@type": "Offer",
          name: "Managed Care Plan",
          price: "150",
          priceCurrency: "CAD",
          description:
            "Optional monthly managed hosting, SSL, daily backups, same-week content updates, and one-line monthly ROI report.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: PRICING_FAQ_ITEMS.map((item) => ({
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
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      {/* 1. HERO + 3 OMOTIVE PRICING CARDS */}
      <section className="relative mx-auto max-w-[1180px] px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-16 -z-10 h-96 w-96 rounded-full bg-[#FFE4DE]/55 blur-3xl dark:bg-[#FF6B00]/10"
        />

        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <ScrollReveal variant="left">
            <OmotiveEyebrow
              first="Transparent"
              second="CAD Pricing"
              icon="briefcase"
            />
            <h1 className="om-h1 mt-6 text-[44px] text-[var(--text-primary)] sm:text-[54px] lg:text-[60px]">
              Simple Pricing, <br />
              <span className="relative inline-block">
                No Surprises.
                <AnimatedUnderline />
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={120}>
            <p className="max-w-[360px] text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">
              Flat-rate Canadian Dollar pricing for Toronto and GTA service
              businesses. Your free custom mockup comes first so you see the
              plan before paying a cent.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-3 items-stretch">
          {PRICING_TIERS.map((tier, idx) => {
            const isHighlighted = tier.highlighted;
            return (
              <ScrollReveal
                key={tier.name}
                variant="zoom"
                delay={idx * 120}
                className={`group relative flex flex-col justify-between rounded-[28px] p-7 sm:p-8 transition-transform duration-300 hover:scale-[1.015] ${
                  isHighlighted
                    ? "bg-[#121214] text-white shadow-2xl"
                    : "om-floating-card"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`rounded-full px-4 py-1 text-xs font-medium ${
                        isHighlighted
                          ? "bg-[#00B64F] text-white"
                          : "bg-[var(--bg-soft-btn)] text-[#FF6B00]"
                      }`}
                    >
                      {tier.badge}
                    </span>
                    <span
                      className={`text-xs ${
                        isHighlighted
                          ? "text-zinc-400"
                          : "text-[var(--text-muted)]"
                      }`}
                    >
                      {tier.currency}
                    </span>
                  </div>

                  <h2
                    className={`mt-6 text-2xl font-medium ${
                      isHighlighted ? "text-white" : "text-[var(--text-primary)]"
                    }`}
                  >
                    {tier.name}
                  </h2>

                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-xs text-[#FF6B00]">from</span>
                    <span
                      className={`text-4xl font-medium tracking-tight ${
                        isHighlighted
                          ? "text-white"
                          : "text-[var(--text-primary)]"
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`text-xs ${
                        isHighlighted
                          ? "text-zinc-400"
                          : "text-[var(--text-secondary)]"
                      }`}
                    >
                      {tier.currency} {tier.period}
                    </span>
                  </div>

                  <p
                    className={`mt-3 text-[12.5px] leading-[1.6] ${
                      isHighlighted
                        ? "text-zinc-400"
                        : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {tier.description}
                  </p>

                  <ul
                    className={`mt-6 space-y-3 border-t pt-6 ${
                      isHighlighted
                        ? "border-white/10"
                        : "border-[var(--divider-line)]"
                    }`}
                  >
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className={`flex items-start gap-2.5 text-xs sm:text-[13px] ${
                          isHighlighted
                            ? "text-zinc-200"
                            : "text-[var(--text-secondary)]"
                        }`}
                      >
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#00B64F]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className={`w-full ${
                      isHighlighted ? "om-btn-primary" : "om-btn-soft"
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <CircledArrow className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 2. HOW PAYMENT WORKS */}
      <section className="bg-[var(--bg-peach)] py-20 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <ScrollReveal variant="left">
              <OmotiveEyebrow
                first="50 / 50"
                second="Payment Schedule"
                icon="key"
              />
              <h2 className="om-h2 mt-5 text-[36px] text-[var(--text-primary)] sm:text-[44px]">
                How Payment Works.
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="right" delay={120}>
              <p className="max-w-[350px] text-[13px] leading-[1.6] text-[var(--text-secondary)]">
                Zero risk upfront: review your free mockup first, then split
                the project 50% to begin and 50% only after you approve the
                finished build.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {PAYMENT_STEPS.map((item, idx) => (
              <ScrollReveal
                key={item.step}
                variant="zoom"
                delay={idx * 120}
                className="group space-y-4"
              >
                <div className="relative h-[220px] w-full">
                  <div className="h-full w-full overflow-hidden rounded-[24px]">
                    <img
                      src={item.photo}
                      alt={item.title}
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
                    <span className="inline-block rounded-full border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-3.5 py-1 text-[11px] font-medium text-[var(--text-primary)]">
                      {item.step} · {item.badge}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-medium text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-[var(--text-secondary)]">
                  {item.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DEDICATED PRICING FAQ SECTION */}
      <section className="mx-auto max-w-[1180px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          <ScrollReveal variant="left" className="lg:col-span-5 space-y-5">
            <OmotiveEyebrow
              first="Pricing"
              second="Questions & Terms"
              icon="users"
            />
            <h2 className="om-h2 text-[34px] text-[var(--text-primary)] sm:text-[42px]">
              Questions About Cost, Ownership &amp; Billing.
            </h2>
            <p className="text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">
              Straightforward answers on how our one-time CAD packages, 50/50
              milestone schedule, and optional monthly Care Plan work.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="om-btn-primary">
                <span>Request your free mockup</span>
                <CircledArrow className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-7 space-y-4">
            {PRICING_FAQ_ITEMS.map((faq, idx) => (
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
