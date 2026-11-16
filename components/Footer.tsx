import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { SITE_CONFIG } from "@/lib/site-data";
import { CircledArrow } from "./Navbar";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1180px] px-4 pb-8 pt-8 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[30px] bg-[#121214] px-6 py-12 text-white sm:px-12 sm:py-16">
        {/* Top Eyebrow + Large Display Headline */}
        <div className="border-b border-white/10 pb-10">
          <p className="text-xs font-normal text-zinc-400 sm:text-sm">
            Got a project? Need an Unfair Advantage?
          </p>
          <h2 className="om-h1 mt-2.5 text-3xl text-white sm:text-5xl lg:text-[54px]">
            Losing Quotes? Let&apos;s Fix That.
          </h2>
        </div>

        {/* Middle Two-Column Area matching Omotive Footer */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <p className="text-sm font-medium text-white">
                Request your free website mockup
              </p>
              <p className="mt-1.5 max-w-md text-xs leading-relaxed text-zinc-400">
                Tell us about your business and we&apos;ll send a free mockup
                within 3 business days.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="om-btn-primary">
                  <span>Get a free mockup</span>
                  <CircledArrow className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-medium text-zinc-200 transition-colors hover:border-[#FF6B00] hover:text-white"
                >
                  <span>Pricing from $1,500 CAD</span>
                </Link>
              </div>
            </div>

            <div className="pt-2">
              <Logo className="h-11 w-auto sm:h-12" forceDarkText uid="footer" />
              <p className="mt-2.5 max-w-sm text-xs text-zinc-400">
                {SITE_CONFIG.footerOneLiner}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-medium text-white">Pages</p>
              <ul className="mt-3.5 space-y-2.5 text-xs text-zinc-400">
                <li>
                  <Link href="/" className="hover:text-[#FF6B00] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#FF6B00] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#FF6B00] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-[#FF6B00] transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-[#FF6B00] transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium text-white">Resources</p>
              <ul className="mt-3.5 space-y-2.5 text-xs text-zinc-400">
                <li>
                  <Link href="/blog" className="hover:text-[#FF6B00] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#FF6B00] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#FF6B00] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#FF6B00] transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-medium text-white">Toronto Hours</p>
              <div className="mt-3.5 space-y-2 text-xs text-zinc-400">
                <p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-zinc-200 hover:text-[#FF6B00] transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-zinc-200 hover:text-[#FF6B00] transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </p>
                <p className="text-[11px] leading-relaxed text-zinc-500">
                  Mon–Fri · EST (Toronto)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-zinc-500 sm:flex-row sm:items-center">
          <p>{SITE_CONFIG.copyright}</p>
          <p>Plain language · Fast sites · Honest numbers</p>
        </div>
      </div>

      {/* Bottom ambient glow strip like Omotive */}
      <div className="mx-auto h-2.5 w-3/4 rounded-b-full bg-gradient-to-r from-transparent via-[#FF6B00]/45 to-transparent blur-sm" />
    </footer>
  );
}
