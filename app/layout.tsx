import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG } from "@/lib/site-data";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.evamoretechnologies.com"),
  title: {
    default: "Websites for Toronto Contractors and Clinics | Evamore Technologies",
    template: "%s | Evamore Technologies",
  },
  description:
    "Fast, local-SEO websites and quote follow-up for Toronto-area contractors and clinics. Get a free mockup.",
  openGraph: {
    type: "website",
    url: "https://www.evamoretechnologies.com",
    siteName: "Evamore Technologies",
    title: "Evamore Technologies — Websites for Toronto Contractors and Clinics",
    description:
      "Fast, local-SEO websites and quote follow-up for Toronto-area contractors and clinics. Get a free mockup.",
    images: [
      {
        url: "/evamore-logo-banner.png",
        width: 1200,
        height: 630,
        alt: "Evamore Technologies",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.evamoretechnologies.com/#website",
      name: "Evamore Technologies",
      alternateName: [
        "Evamore",
        "Evamore Tech",
        "evamoretechnologies.com",
        "www.evamoretechnologies.com",
      ],
      url: "https://www.evamoretechnologies.com",
      description: SITE_CONFIG.oneLiner,
      publisher: {
        "@id": "https://www.evamoretechnologies.com/#organization",
      },
      hasPart: [
        {
          "@type": "WebPage",
          name: "About Evamore Technologies — Founder & Process",
          url: "https://www.evamoretechnologies.com/about",
        },
        {
          "@type": "WebPage",
          name: "Services — Websites, Local SEO & Automated Quote Follow-Up",
          url: "https://www.evamoretechnologies.com/services",
        },
        {
          "@type": "WebPage",
          name: "Recent Work & Client Case Studies",
          url: "https://www.evamoretechnologies.com/work",
        },
        {
          "@type": "WebPage",
          name: "Website Design & Quote Follow-Up Pricing in CAD",
          url: "https://www.evamoretechnologies.com/pricing",
        },
        {
          "@type": "WebPage",
          name: "Local Business Guides & Blog",
          url: "https://www.evamoretechnologies.com/blog",
        },
        {
          "@type": "WebPage",
          name: "Contact & Free 3-Day Website Mockup Request",
          url: "https://www.evamoretechnologies.com/contact",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.evamoretechnologies.com/#organization",
      name: SITE_CONFIG.name,
      legalName: "Evamore Technologies",
      disambiguatingDescription:
        "Evamore Technologies (spelled E-V-A-M-O-R-E, domain evamoretechnologies.com) is a custom Next.js web design, local SEO, and automated quote follow-up software studio founded by Kenny, serving home-service contractors and healthcare clinics in Toronto and the Greater Toronto Area (GTA), Canada. Distinct from Evermore Technologies.",
      url: "https://www.evamoretechnologies.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.evamoretechnologies.com/evamore-logo-mark.png",
        width: 1024,
        height: 1024,
      },
      image: "https://www.evamoretechnologies.com/evamore-logo-banner.png",
      description: SITE_CONFIG.oneLiner,
      email: SITE_CONFIG.email,
      telephone: SITE_CONFIG.phone,
      priceRange: "$1,500 - $2,500 CAD",
      currenciesAccepted: "CAD",
      areaServed: [
        {
          "@type": "City",
          name: "Toronto",
        },
        {
          "@type": "AdministrativeArea",
          name: "Greater Toronto Area, Ontario, Canada",
        },
      ],
      founder: {
        "@type": "Person",
        "@id": "https://www.evamoretechnologies.com/about#kenny",
        name: SITE_CONFIG.founder,
        jobTitle: "Founder & Lead Full-Stack Developer",
        image:
          "https://www.evamoretechnologies.com/evamore-founder-portrait.webp",
        url: "https://www.evamoretechnologies.com/about",
      },
      knowsAbout: [
        "Web Design for Contractors",
        "Clinic Website Development",
        "Local SEO Greater Toronto Area",
        "Automated Quote Follow-Up Systems",
        "Next.js & React Web Engineering",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Evamore Technologies Site Navigation",
      itemListElement: [
        {
          "@type": "SiteNavigationElement",
          position: 1,
          name: "Home",
          url: "https://www.evamoretechnologies.com/",
        },
        {
          "@type": "SiteNavigationElement",
          position: 2,
          name: "About",
          url: "https://www.evamoretechnologies.com/about",
        },
        {
          "@type": "SiteNavigationElement",
          position: 3,
          name: "Services",
          url: "https://www.evamoretechnologies.com/services",
        },
        {
          "@type": "SiteNavigationElement",
          position: 4,
          name: "Work & Case Studies",
          url: "https://www.evamoretechnologies.com/work",
        },
        {
          "@type": "SiteNavigationElement",
          position: 5,
          name: "Pricing (CAD)",
          url: "https://www.evamoretechnologies.com/pricing",
        },
        {
          "@type": "SiteNavigationElement",
          position: 6,
          name: "Blog & Local Guides",
          url: "https://www.evamoretechnologies.com/blog",
        },
        {
          "@type": "SiteNavigationElement",
          position: 7,
          name: "Contact & Free Mockup",
          url: "https://www.evamoretechnologies.com/contact",
        },
      ],
    },
  ];

  return (
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
