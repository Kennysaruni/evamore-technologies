import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ_ITEMS, SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
    default: "Websites for Toronto Contractors and Clinics | Evamore Technologies",
    template: "%s | Evamore Technologies",
  },
  description:
    "Fast, local-SEO websites and quote follow-up for Toronto-area contractors and clinics. Get a free mockup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "ProfessionalService"],
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.oneLiner,
      email: SITE_CONFIG.email,
      telephone: SITE_CONFIG.phone,
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Greater Toronto Area, Ontario, Canada",
      },
      founder: {
        "@type": "Person",
        name: SITE_CONFIG.founder,
      },
      knowsAbout: [
        "Web Design for Contractors",
        "Clinic Website Development",
        "Local SEO Greater Toronto Area",
        "Automated Quote Follow-Up Systems",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
      </body>
    </html>
  );
}
