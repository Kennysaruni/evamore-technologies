"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/lib/site-data";
import { CircledArrow } from "./Navbar";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[28px] bg-[#121214] p-8 text-white sm:p-10 ev-fade">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00B64F] text-white">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className="om-h2 mt-5 text-2xl text-white sm:text-3xl">
          Thanks, {name || "there"}. We&apos;ll reply within one business day.
        </h2>
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-300">
          We&apos;ve logged your request for{" "}
          <span className="font-medium text-white">
            {business || "your business"}
          </span>{" "}
          and will send your free mockup plan by the next business day. If
          it&apos;s urgent, email{" "}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="font-medium text-[#FF6B00] underline"
          >
            {SITE_CONFIG.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="om-btn-primary mt-7 cursor-pointer"
        >
          <span>Send another message</span>
          <CircledArrow className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="om-floating-card rounded-[30px] p-6 sm:p-9 space-y-5"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-[var(--text-secondary)]"
          >
            Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="mt-2 w-full rounded-2xl border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-4 py-3.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[#FF6B00] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="business"
            className="block text-xs font-medium text-[var(--text-secondary)]"
          >
            Business name *
          </label>
          <input
            id="business"
            type="text"
            required
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder="e.g. Apex Roofing or West End Dental"
            className="mt-2 w-full rounded-2xl border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-4 py-3.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[#FF6B00] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-[var(--text-secondary)]"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.ca"
            className="mt-2 w-full rounded-2xl border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-4 py-3.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[#FF6B00] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-medium text-[var(--text-secondary)]"
          >
            Phone (optional)
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(416) 555-0199"
            className="mt-2 w-full rounded-2xl border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-4 py-3.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[#FF6B00] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="website"
            className="block text-xs font-medium text-[var(--text-secondary)]"
          >
            Website (optional)
          </label>
          <input
            id="website"
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="https://yoursite.ca"
            className="mt-2 w-full rounded-2xl border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-4 py-3.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[#FF6B00] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="fix"
          className="block text-xs font-medium text-[var(--text-secondary)]"
        >
          What would you like to fix? *
        </label>
        <textarea
          id="fix"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your services, service area, or what's costing you quote requests..."
          className="mt-2 w-full rounded-2xl border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-4 py-3.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[#FF6B00] focus:outline-none"
        />
      </div>

      <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
        <p className="text-xs text-[var(--text-muted)]">
          Free custom mockup within 3 business days · Zero obligation.
        </p>
        <button type="submit" className="om-btn-primary cursor-pointer">
          <span>Send</span>
          <CircledArrow className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
