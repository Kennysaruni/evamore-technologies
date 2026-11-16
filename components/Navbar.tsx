"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { useTheme } from "./ThemeProvider";
import { SITE_CONFIG } from "@/lib/site-data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function CircledArrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="10" cy="10" r="8.25" />
      <path d="M7.5 10h5M10.5 7.5L13 10l-2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollProgress(pct);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full ev-glass-nav">
      {/* Live Scroll-Progress Ribbon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[2.5px] w-full overflow-hidden bg-transparent"
      >
        <div
          style={{ width: `${scrollProgress}%` }}
          className="h-full bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-[#00B64F] transition-[width] duration-75 ease-out"
        />
      </div>

      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Left: Restored Original Evamore Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus:outline-none"
          aria-label="Evamore Technologies Home"
        >
          <Logo className="h-11 w-auto sm:h-12" uid="header" />
        </Link>

        {/* Center: Exact Omotive Nav Bar (Active Pill with Dot + Clean Links) */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return isActive ? (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full bg-[#FF6B00] px-5 py-2 text-[13.5px] font-medium text-white shadow-md shadow-[#FF6B00]/30"
              >
                <span>{link.label}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13.5px] font-normal text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Theme Toggle + Omotive Soft Peach Consultation Pill */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-soft-btn)] text-[var(--text-primary)] transition-colors hover:bg-[#FF6B00]/20 cursor-pointer"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg
                className="h-4 w-4 text-[#FF6B00]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg
                className="h-4 w-4 text-[#121214]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a
            href={SITE_CONFIG.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2.5 rounded-full bg-[var(--bg-soft-btn)] px-5 py-2.5 text-[13.5px] font-medium text-[var(--text-primary)] transition-colors hover:bg-[#FF6B00] hover:text-white"
          >
            <span>Book a Call</span>
            <CircledArrow className="h-4 w-4" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-soft-btn)] lg:hidden"
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--glass-border)] bg-[var(--bg-canvas)] px-4 py-4 ev-fade">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#FF6B00] text-white"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="om-btn-primary mt-2 w-full"
            >
              <span>Book a Call</span>
              <CircledArrow className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
