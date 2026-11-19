import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES, SITE_CONFIG } from "@/lib/site-data";
import {
  OmotiveEyebrow,
  InvertedFillet,
  AnimatedUnderline,
} from "@/components/HomeInteractive";
import { CircledArrow } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Helpful Reads for Local Business Owners",
  description:
    "Practical guides on website conversion, quote follow-up speed, and local SEO for GTA contractors and clinics.",
  alternates: {
    canonical: "https://www.evamoretechnologies.com/blog",
  },
};

const ARTICLE_IMAGES = [
  "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=85",
];

export default function BlogPage() {
  const blogStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": "https://www.evamoretechnologies.com/blog#blog",
      name: "Evamore Technologies — Practical Local Business & Contractor Web Guides",
      url: "https://www.evamoretechnologies.com/blog",
      publisher: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: "https://www.evamoretechnologies.com",
      },
      blogPost: ARTICLES.map((post, idx) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `https://www.evamoretechnologies.com/blog#${post.slug}`,
        description: post.excerpt,
        image: ARTICLE_IMAGES[idx % ARTICLE_IMAGES.length],
        author: {
          "@type": "Person",
          name: SITE_CONFIG.founder,
          url: "https://www.evamoretechnologies.com/about",
        },
        publisher: {
          "@type": "Organization",
          name: SITE_CONFIG.name,
          url: "https://www.evamoretechnologies.com",
        },
        articleSection: post.category,
        articleBody: post.sections
          .map((s) => `${s.heading}: ${s.body}`)
          .join(" "),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.evamoretechnologies.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog & Local Guides",
          item: "https://www.evamoretechnologies.com/blog",
        },
      ],
    },
  ];

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogStructuredData),
        }}
      />
      {/* 1. HERO + 3 OMOTIVE ARTICLE CARDS */}
      <section className="relative mx-auto max-w-[1180px] px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-16 -z-10 h-96 w-96 rounded-full bg-[#FFE4DE]/55 blur-3xl dark:bg-[#FF6B00]/10"
        />

        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <ScrollReveal variant="left">
            <OmotiveEyebrow
              first="Practical"
              second="Local Guides"
              icon="monitor"
            />
            <h1 className="om-h1 mt-6 text-[44px] text-[var(--text-primary)] sm:text-[54px] lg:text-[60px]">
              Interesting{" "}
              <span className="relative inline-block">
                Articles.
                <AnimatedUnderline />
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={120}>
            <p className="max-w-[340px] text-[13px] leading-[1.6] text-[var(--text-secondary)]">
              Short, practical breakdowns on why local websites lose calls and how
              to turn quote requests into booked jobs.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Article Summary Cards with Cutout Read-Time Pills */}
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {ARTICLES.map((post, idx) => (
            <ScrollReveal key={post.slug} variant="zoom" delay={idx * 120}>
              <a
                href={`#${post.slug}`}
                className="group block space-y-4"
              >
                <div className="relative h-[225px] w-full">
                  <div className="h-full w-full overflow-hidden rounded-[24px]">
                    <img
                      src={ARTICLE_IMAGES[idx % ARTICLE_IMAGES.length]}
                      alt={post.title}
                      className="om-lens-img h-full w-full object-cover"
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
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-xs">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Kenny"
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <span className="text-[var(--text-secondary)]">Kenny</span>
                  <span className="rounded-full bg-[var(--bg-soft-btn)] px-3 py-0.5 text-[11px] font-medium text-[#FF6B00]">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-lg font-medium leading-snug text-[var(--text-primary)] group-hover:text-[#FF6B00] transition-colors">
                  {post.title}
                </h2>

                <p className="text-[12.5px] leading-relaxed text-[var(--text-secondary)]">
                  {post.excerpt}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 2. FULL GUIDE BREAKDOWNS */}
      <section className="bg-[var(--bg-peach)] py-20 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-4 space-y-12 sm:px-6 lg:px-8">
          {ARTICLES.map((article, idx) => (
            <ScrollReveal
              key={article.slug}
              variant={idx % 2 === 0 ? "left" : "right"}
            >
              <article
                id={article.slug}
                className="om-floating-card group rounded-[30px] p-6 sm:p-10"
              >
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
                  <div className="lg:col-span-5 space-y-6">
                    <div className="relative h-[240px] w-full">
                      <div className="h-full w-full overflow-hidden rounded-[24px]">
                        <img
                          src={ARTICLE_IMAGES[idx % ARTICLE_IMAGES.length]}
                          alt={article.title}
                          className="om-lens-img h-full w-full object-cover"
                        />
                      </div>

                      <div className="absolute -bottom-[1px] -right-[1px] z-10 rounded-tl-[18px] bg-[var(--glass-surface)] pl-3 pt-2 pb-0.5 pr-0.5">
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
                        <span className="inline-block rounded-full border border-[var(--divider-line)] bg-[var(--bg-canvas)] px-4 py-1 text-[11px] font-medium text-[var(--text-primary)]">
                          Guide 0{idx + 1}
                        </span>
                      </div>
                    </div>

                    <div className="rounded-[22px] bg-[var(--bg-peach)] p-5">
                      <p className="text-xs font-semibold text-[#00B64F]">
                        30-Second Takeaways
                      </p>
                      <ul className="mt-3 space-y-2">
                        {article.keyTakeaways.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-xs leading-relaxed text-[var(--text-primary)]"
                          >
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#00B64F]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="rounded-full bg-[var(--bg-soft-btn)] px-3.5 py-1 text-xs font-medium text-[#FF6B00]">
                        {article.category}
                      </span>
                      <h2 className="om-h2 mt-4 text-2xl text-[var(--text-primary)] sm:text-3xl">
                        {article.title}
                      </h2>
                    </div>

                    <div className="divide-y divide-[var(--divider-line)]">
                      {article.sections.map((sec) => (
                        <div key={sec.heading} className="py-4 first:pt-0">
                          <h3 className="text-base font-medium text-[var(--text-primary)]">
                            {sec.heading}
                          </h3>
                          <p className="mt-1.5 text-[13px] leading-[1.6] text-[var(--text-secondary)]">
                            {sec.body}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link href="/contact" className="om-btn-primary">
                        <span>Get a free mockup for your site</span>
                        <CircledArrow className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
