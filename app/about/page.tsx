import type { Metadata } from "next";
import Link from "next/link";
import {
  OmotiveEyebrow,
  InvertedFillet,
  ProcessShowcaseSection,
  AnimatedUnderline,
} from "@/components/HomeInteractive";
import { CircledArrow } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About Evamore Technologies",
  description:
    "A small web studio building sites for Toronto-area contractors and clinics.",
};

const VALUES = [
  {
    step: "01",
    title: "Plain language",
    body: "No agency buzzwords or 30-page decks. We tell you what's costing you customers and how we'll fix it.",
    photo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=85",
    badge: "Clear Copy",
  },
  {
    step: "02",
    title: "Fast sites",
    body: "Built with React and Next.js so pages open immediately on mobile phones when customers search for help.",
    photo:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=85",
    badge: "Next.js Speed",
  },
  {
    step: "03",
    title: "Honest numbers",
    body: "We measure results in leads in, quotes sent, and jobs booked—never vanity impressions.",
    photo:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=85",
    badge: "1-Line Report",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* =====================================================================
          1. DISTINCT ABOUT HERO: Warm Peach Banner + Wide 3-Column Bento Stage
         ===================================================================== */}
      <section className="bg-[var(--bg-peach)] pb-20 pt-10 sm:pt-14">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          {/* Top Header Row: Title Left, Story + Pill Button Right */}
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
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
            </div>

            <div className="lg:col-span-5 lg:pl-6">
              <p className="text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">
                Evamore Technologies is a small web studio led by Kenny, a
                full-stack developer. We work remotely from Kenya with business
                owners in Canada on standard Toronto business hours.
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
            </div>
          </div>

          {/* Wide Asymmetric 3-Card Bento Photo Stage with Cutout Notches */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
            {/* Left Wide Studio Photo (7 cols) with Bottom-Right Peach Cutout */}
            <div className="group relative h-[310px] sm:h-[350px] lg:col-span-7">
              <div className="h-full w-full overflow-hidden rounded-[28px]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1100&q=85"
                  alt="Remote collaboration with Canadian business owners"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-[28px]" />
                <div className="absolute bottom-5 left-6 z-10 max-w-[48%]">
                  <p className="text-lg sm:text-xl font-medium text-white">
                    Built with React &amp; Next.js
                  </p>
                </div>
              </div>

              {/* Seamless Bottom-Right Peach Cutout Notch */}
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
            </div>

            {/* Right Column (5 cols): Top Solid Green Stat Card + Bottom Workstation Cutout Photo */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {/* Top Row: Solid Emerald Green Card + Dark Card */}
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

              {/* Bottom Workstation Photo with Bottom-Right Cutout Pill */}
              <div className="group relative h-[180px] w-full">
                <div className="h-full w-full overflow-hidden rounded-[26px]">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85"
                    alt="Kenny's full-stack development desk"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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
                    Kenny · Founder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. THREE RULES WE BUILD BY (White Canvas + Distinct Unsplash Photos)
         ===================================================================== */}
      <section className="mx-auto max-w-[1180px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <OmotiveEyebrow first="Core" second="Values" icon="briefcase" />
            <h2 className="om-h2 mt-5 text-[36px] text-[var(--text-primary)] sm:text-[44px]">
              Three Rules We <br />
              Build By.
            </h2>
          </div>
          <p className="max-w-[330px] text-[12.5px] leading-[1.6] text-[var(--text-secondary)]">
            You see a mockup before you pay the second half. We measure results
            in leads and booked jobs, not buzzwords.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {VALUES.map((val) => (
            <div key={val.title} className="group space-y-4">
              <div className="relative h-[225px] w-full">
                <div className="h-full w-full overflow-hidden rounded-[24px]">
                  <img
                    src={val.photo}
                    alt={val.title}
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
                  <span className="inline-block rounded-full border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-3.5 py-1 text-[11px] font-medium text-[var(--text-primary)]">
                    {val.step} · {val.badge}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-medium text-[var(--text-primary)] group-hover:text-[#FF6B00] transition-colors">
                {val.title}
              </h3>
              <p className="text-[12.5px] leading-[1.6] text-[var(--text-secondary)]">
                {val.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          3. HOW WE WORK (Matte Black Section with Cutout Cards)
         ===================================================================== */}
      <section className="bg-[#121214] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
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
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: "One Person Answers",
                category: "No Account Managers",
                pill: "Direct Access",
                body: "You speak directly with Kenny—the developer writing your code and setting up your lead alerts.",
              },
              {
                title: "Mockup Comes First",
                category: "Zero Upfront Risk",
                pill: "3 Business Days",
                body: "You review and approve a custom homepage mockup for your business before we write final code.",
              },
              {
                title: "Toronto Timezone",
                category: "Mon–Fri Support",
                pill: "EST Hours",
                body: "All calls, updates, and same-day support happen on standard Greater Toronto Area business hours.",
              },
            ].map((card) => (
              <div key={card.title} className="space-y-4">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. PROCESS CAROUSEL
         ===================================================================== */}
      <section className="bg-[var(--bg-peach)] py-20 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 pb-10 sm:px-6 lg:px-8">
          <OmotiveEyebrow first="Simple" second="process" icon="key" />
          <h2 className="om-h2 mt-5 text-[36px] text-[var(--text-primary)] sm:text-[44px]">
            Understand The Business Process.
          </h2>
        </div>
        <div className="px-2 sm:px-4">
          <ProcessShowcaseSection />
        </div>
      </section>
    </div>
  );
}
