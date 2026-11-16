import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-data";
import { OmotiveEyebrow, AnimatedUnderline } from "@/components/HomeInteractive";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Payment schedule, site ownership, revisions, and project terms for Evamore Technologies.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-[960px] px-4 py-14 sm:px-6 lg:px-8">
      <OmotiveEyebrow first="Plain" second="Project Terms" icon="briefcase" />
      <h1 className="om-h1 mt-5 text-[40px] text-[var(--text-primary)] sm:text-[50px]">
        Terms of{" "}
        <span className="relative inline-block">
          Service.
          <AnimatedUnderline />
        </span>
      </h1>

      <div className="mt-8 rounded-[28px] bg-[var(--bg-peach)] p-7 sm:p-10 space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg font-medium text-[var(--text-primary)]">
            1. Payment schedule
          </h2>
          <p className="text-[13px] leading-[1.6] text-[var(--text-secondary)]">
            Every project begins with a free initial mockup. Once you approve
            the direction to begin development, payment is split 50% to start
            and 50% upon completion prior to live domain launch.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium text-[var(--text-primary)]">
            2. Ownership of the finished site
          </h2>
          <p className="text-[13px] leading-[1.6] text-[var(--text-secondary)]">
            Upon receipt of final payment, you own 100% of the finished website
            code, custom written copy, and domain configuration with zero
            lock-in.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium text-[var(--text-primary)]">
            3. Revisions &amp; Care Plan cancellation
          </h2>
          <p className="text-[13px] leading-[1.6] text-[var(--text-secondary)]">
            Two full rounds of revisions are included during the mockup and
            staging phases. Optional monthly Care Plans ($150 CAD/month) are
            billed month-to-month and may be cancelled at any time by emailing{" "}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="font-medium text-[#FF6B00] underline"
            >
              {SITE_CONFIG.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
