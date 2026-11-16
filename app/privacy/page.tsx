import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-data";
import { OmotiveEyebrow, AnimatedUnderline } from "@/components/HomeInteractive";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Evamore Technologies collects, uses, and protects your contact information.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[960px] px-4 py-14 sm:px-6 lg:px-8">
      <OmotiveEyebrow first="Plain" second="Privacy Policy" icon="key" />
      <h1 className="om-h1 mt-5 text-[40px] text-[var(--text-primary)] sm:text-[50px]">
        Privacy{" "}
        <span className="relative inline-block">
          Policy.
          <AnimatedUnderline />
        </span>
      </h1>

      <div className="mt-8 rounded-[28px] bg-[var(--bg-peach)] p-7 sm:p-10 space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg font-medium text-[var(--text-primary)]">
            1. What our contact form collects
          </h2>
          <p className="text-[13px] leading-[1.6] text-[var(--text-secondary)]">
            When you request a free mockup or contact us, we collect only the
            information you provide: your name, business name, website URL,
            email address, phone number, and project notes.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium text-[var(--text-primary)]">
            2. How long we keep it &amp; how we use it
          </h2>
          <p className="text-[13px] leading-[1.6] text-[var(--text-secondary)]">
            We use your information strictly to prepare your website mockup,
            reply to your inquiry, and deliver project services. For inquiries
            that do not proceed to a project, contact records are retained for
            up to 12 months and never sold or shared with third-party marketers.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium text-[var(--text-primary)]">
            3. How to opt out or delete your data
          </h2>
          <p className="text-[13px] leading-[1.6] text-[var(--text-secondary)]">
            You may request immediate deletion of your contact details or opt
            out of any follow-up at any time by replying &ldquo;unsubscribe&rdquo;
            or emailing{" "}
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
