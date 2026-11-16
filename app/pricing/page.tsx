import type { Metadata } from "next";
import Link from "next/link";
import { PRICING_TIERS } from "@/lib/site-data";
import {
  OmotiveEyebrow,
  InvertedFillet,
  ClientQuestionsAndFaqSection,
  AnimatedUnderline,
} from "@/components/HomeInteractive";
import { CircledArrow } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Website Pricing for Local Businesses",
  description:
    "Starter, Growth and Care plans for GTA home-service businesses. Clear prices in CAD.",
};

const PAYMENT_STEPS = [
  {
    step: "01",
    title: "$0 Free Mockup First",
    body: "We design and send your custom homepage mockup within 3 business days before you pay a cent.",
    badge: "$0 Upfront",
    photo:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=85",
  },
  {
    step: "02",
    title: "50% To Begin Build",
    body: "Once you approve the mockup direction, 50% starts development of your pages and quote forms.",
    badge: "50% Deposit",
    photo:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=85",
  },
  {
    step: "03",
    title: "50% Before Launch",
    body: "The remaining 50% is paid only when you approve the finished site. You own 100% of the code and domain.",
    badge: "100% Owned",
    photo:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=85",
  },
];

export default function PricingPage() {
  return (
    <div className="overflow-hidden">
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
            <p className="max-w-[340px] text-[13px] leading-[1.6] text-[var(--text-secondary)]">
              Prices depend on pages and features. Your free mockup comes first so
              you see the plan before paying a cent.
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
                className={`group relative flex flex-col justify-between rounded-[28px] p-7 sm:p-8 transition-transform duration-300 hover:scale-[1.015] ${isHighlighted
                  ? "bg-[#121214] text-white shadow-2xl"
                  : "om-floating-card"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`rounded-full px-4 py-1 text-xs font-medium ${isHighlighted
                        ? "bg-[#00B64F] text-white"
                        : "bg-[var(--bg-soft-btn)] text-[#FF6B00]"
                        }`}
                    >
                      {tier.badge}
                    </span>
                    <span
                      className={`text-xs ${isHighlighted ? "text-zinc-400" : "text-[var(--text-muted)]"
                        }`}
                    >
                      {tier.currency}
                    </span>
                  </div>

                  <h2
                    className={`mt-6 text-2xl font-medium ${isHighlighted ? "text-white" : "text-[var(--text-primary)]"
                      }`}
                  >
                    {tier.name}
                  </h2>

                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-xs text-[#FF6B00]">from</span>
                    <span
                      className={`text-4xl font-medium tracking-tight ${isHighlighted ? "text-white" : "text-[var(--text-primary)]"
                        }`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`text-xs ${isHighlighted ? "text-zinc-400" : "text-[var(--text-secondary)]"
                        }`}
                    >
                      {tier.currency} {tier.period}
                    </span>
                  </div>

                  <p
                    className={`mt-3 text-[12.5px] leading-[1.6] ${isHighlighted ? "text-zinc-400" : "text-[var(--text-secondary)]"
                      }`}
                  >
                    {tier.description}
                  </p>

                  <ul
                    className={`mt-6 space-y-3 border-t pt-6 ${isHighlighted ? "border-white/10" : "border-[var(--divider-line)]"
                      }`}
                  >
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className={`flex items-start gap-2.5 text-xs sm:text-[13px] ${isHighlighted ? "text-zinc-200" : "text-[var(--text-secondary)]"
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
                    className={`w-full ${isHighlighted ? "om-btn-primary" : "om-btn-soft"
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
              <OmotiveEyebrow first="50 / 50" second="Payment Schedule" icon="key" />
              <h2 className="om-h2 mt-5 text-[36px] text-[var(--text-primary)] sm:text-[44px]">
                How Payment Works.
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="right" delay={120}>
              <p className="max-w-[330px] text-[12.5px] leading-[1.6] text-[var(--text-secondary)]">
                50% to start, 50% before launch. Accepted via Interac e-Transfer,
                credit card, or wire transfer.
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
                <p className="text-[12.5px] leading-[1.6] text-[var(--text-secondary)]">
                  {item.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="mx-auto max-w-[1180px] px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal variant="left" className="mb-8 max-w-xl">
          <OmotiveEyebrow first="Pricing" second="Questions" icon="users" />
          <h2 className="om-h2 mt-4 text-[32px] text-[var(--text-primary)] sm:text-[40px]">
            Questions Business Owners Ask
          </h2>
        </ScrollReveal>
        <ClientQuestionsAndFaqSection />
      </section>
    </div>
  );
}
