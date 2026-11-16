import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-data";
import { ContactForm } from "@/components/ContactForm";
import {
  OmotiveEyebrow,
  InvertedFillet,
  AnimatedUnderline,
} from "@/components/HomeInteractive";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Get a Free Website Mockup",
  description:
    "Tell us what's not working and get a free mockup plan within one business day.",
};

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative mx-auto max-w-[1180px] px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-16 -z-10 h-96 w-96 rounded-full bg-[#FFE4DE]/55 blur-3xl dark:bg-[#FF6B00]/10"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Heading + Studio Cutout Photo Card + Direct Details */}
          <ScrollReveal variant="left" className="lg:col-span-5 space-y-6">
            <OmotiveEyebrow
              first="Free Mockup"
              second="1-Day Reply"
              icon="monitor"
            />

            <h1 className="om-h1 text-[42px] text-[var(--text-primary)] sm:text-[52px]">
              Tell Us What&apos;s{" "}
              <span className="relative inline-block">
                Not Working.
                <AnimatedUnderline />
              </span>
            </h1>

            <p className="max-w-[380px] text-[13px] leading-[1.6] text-[var(--text-secondary)]">
              Send a few details and we&apos;ll reply within one business day
              with a free mockup plan.
            </p>

            {/* Studio Photo Card with Bottom-Right Inverted-Corner Cutout */}
            <div className="group relative h-[225px] w-full">
              <div className="h-full w-full overflow-hidden rounded-[26px]">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=85"
                  alt="Planning your free website mockup"
                  className="om-lens-img h-full w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-[1px] -right-[1px] z-10 rounded-tl-[20px] bg-[var(--bg-canvas)] pl-3.5 pt-2.5 pb-0.5 pr-0.5">
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
                <span className="inline-block rounded-full border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-4 py-1 text-xs font-medium text-[var(--text-primary)]">
                  Mon–Fri · Toronto Time
                </span>
              </div>
            </div>

            {/* Direct Contact Details Card */}
            <div className="rounded-[24px] bg-[#121214] p-6 text-white space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Email</span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-medium text-[#FFE4DE] hover:text-[#FF6B00] transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Phone</span>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="font-medium text-white hover:text-[#FF6B00] transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Hours</span>
                <span className="font-medium text-[#00B64F]">
                  Mon–Fri, EST (Toronto)
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Form inside Soft Peach Container */}
          <ScrollReveal variant="right" delay={140} className="lg:col-span-7 rounded-[34px] bg-[var(--bg-peach)] p-4 sm:p-7">
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
