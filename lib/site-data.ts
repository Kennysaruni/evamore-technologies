export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  summary: string;
  deliverables: string[];
  metricLabel: string;
  metricValue: string;
  previewType: "website" | "seo" | "followup" | "care";
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  caption: string;
  tag: string;
  highlights: string[];
}

export interface ClientProject {
  slug: string;
  name: string;
  leader?: string;
  domain?: string;
  logoUrl?: string;
  businessType: string;
  oneLineResult: string;
  problem: string;
  whatWeDid: string[];
  resultMetric: string;
  resultDetail: string;
  tags: string[];
  accentTone: string;
}

export interface TestimonialItem {
  company: string;
  domain: string;
  leader: string;
  role: string;
  category: string;
  quote: string;
  highlightMetric: string;
  avatarUrl: string;
  logoUrl?: string;
}

export interface ClientQuestionItem {
  question: string;
  clientConcern: string;
  solutionTitle: string;
  solutionBody: string;
  proofTag: string;
}

export interface ArticleItem {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  keyTakeaways: string[];
  sections: { heading: string; body: string }[];
}

export const SITE_CONFIG = {
  name: "Evamore Technologies",
  founder: "Kenny",
  oneLiner:
    "Evamore Technologies builds fast, search-friendly websites for home-service businesses and clinics in the Greater Toronto Area, and sets up the follow-up that turns quote requests into booked jobs.",
  footerOneLiner:
    "Websites and quote follow-up for home-service businesses and clinics in the Greater Toronto Area.",
  email: "kenny@evamoretechnologies.com",
  phone: "+254 703 546 026",
  bookingUrl: "https://calendar.app.google/EJ7qkMBJ6T8XGxJB6",
  hours: "Mon–Fri, 9:00 AM – 5:00 PM EST (Toronto Time)",
  copyright:
    "© 2026 Evamore Technologies. Working remotely from Kenya with clients in Canada.",
  industries: [
    { name: "Roofing", icon: "roof" },
    { name: "HVAC", icon: "hvac" },
    { name: "Plumbing", icon: "plumbing" },
    { name: "Renovation", icon: "renovation" },
    { name: "Dental Clinics", icon: "dental" },
    { name: "Electrical", icon: "electrical" },
    { name: "Landscaping", icon: "landscaping" },
    { name: "Chiropractic", icon: "chiro" },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: "websites",
    title: "Websites",
    shortTitle: "Fast, Mobile-Ready Websites",
    summary:
      "Fast, mobile-ready sites with a quote form and tap-to-call button. Clear pages for each service you offer.",
    deliverables: [
      "5 core pages: Home, Services, About, Contact & 1 Service-Area page",
      "Sticky tap-to-call & 30-second quote request form above the fold",
      "Sub-second load times on mobile networks",
    ],
    metricLabel: "Typical Build Window",
    metricValue: "5–10 Business Days",
    previewType: "website",
  },
  {
    id: "local-seo",
    title: "Local SEO",
    shortTitle: "Local Search & Map Pack Setup",
    summary:
      "Page titles, service-area pages and Google Business Profile setup so you show up for the searches that matter.",
    deliverables: [
      "City & neighbourhood headings written for how GTA customers search",
      "Complete Google Business Profile setup & category optimization",
      "LocalBusiness, Service & FAQPage structured schema markup",
    ],
    metricLabel: "Target Searches",
    metricValue: "High-Intent GTA Queries",
    previewType: "seo",
  },
  {
    id: "quote-followup",
    title: "Quote follow-up",
    shortTitle: "Automated Quote Follow-Up System",
    summary:
      "Every request is logged, you get an instant alert, and unanswered quotes get an automatic reminder after 2 and 5 days.",
    deliverables: [
      "Instant SMS/email alert the second a customer submits a form",
      "Automatic polite follow-up at Day 2 and Day 5 for quiet leads",
      "Single clean dashboard showing every lead and quote status",
    ],
    metricLabel: "Lead Alert Speed",
    metricValue: "Same-Day Instant",
    previewType: "followup",
  },
  {
    id: "care-plan",
    title: "Care plan",
    shortTitle: "Managed Hosting & One-Line Reporting",
    summary:
      "Hosting, updates and a one-line monthly report: leads in, quotes sent, jobs booked.",
    deliverables: [
      "Managed cloud hosting, daily backups & security updates",
      "Same-day text/page edits when your services or prices change",
      "Plain one-line monthly report: Leads in · Quotes sent · Jobs booked",
    ],
    metricLabel: "Monthly Investment",
    metricValue: "$150 CAD / mo",
    previewType: "care",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "We look at your site.",
    description:
      "We show you exactly what's costing you customers, in plain language.",
    caption: "Step 1 · Auditing speed, mobile call placement, and lost-lead gaps",
    tag: "Plain-Language Audit",
    highlights: [
      "Mobile load-time & tap-to-call check",
      "Local Google search visibility review",
      "Quote form friction breakdown",
    ],
  },
  {
    step: "02",
    title: "We build a better one.",
    description:
      "You approve a mockup before we write a line of final code.",
    caption: "Step 2 · Planning your site with the owner",
    tag: "Free Mockup First",
    highlights: [
      "Custom mockup delivered within 3 business days",
      "Clear service pages written for your trade or clinic",
      "50% to start, 50% only when ready to launch",
    ],
  },
  {
    step: "03",
    title: "We follow up for you.",
    description:
      "Requests are logged, alerts go to your phone, and quotes don't go quiet.",
    caption: "Step 3 · Instant phone alerts + automated Day 2 & Day 5 reminders",
    tag: "Zero Lost Quotes",
    highlights: [
      "Instant notification the moment a lead arrives",
      "Automatic Day 2 & Day 5 quote follow-up sequence",
      "One-line monthly tracking: leads, quotes, bookings",
    ],
  },
];

export const CLIENT_PROJECTS: ClientProject[] = [
  {
    slug: "glamour-home-care",
    name: "Glamour Home Care",
    leader: "Shavonnah",
    domain: "glamourhomecare.org",
    logoUrl: "https://www.glamourhomecare.org/Website-Icon.png",
    businessType: "Home Care & Patient Support Services",
    oneLineResult:
      "Clear care-service pages and streamlined family inquiry flow built for mobile trust.",
    problem:
      "Families searching for trustworthy home care on mobile needed immediate clarity on care services and a frictionless way to request a consultation.",
    whatWeDid: [
      "Structured dedicated service pages for in-home care programs with clear mobile navigation",
      "Placed direct consultation request triggers and phone actions where families look first",
      "Optimized page load speed and local search metadata for care inquiries",
    ],
    resultMetric: "Mobile-First Care Portal",
    resultDetail: "Launched at glamourhomecare.org for Shavonnah's care team",
    tags: ["Care Services", "Mobile-Ready", "Lead Capture"],
    accentTone: "orange",
  },
  {
    slug: "wealth-code-collective",
    name: "The Wealth Code Collective",
    leader: "Lavie Pittmann",
    domain: "The Wealth Code Collective",
    logoUrl: "https://thewealthcodecollective.com/images/lavie_portrait.jpg",
    businessType: "Financial Advisory & Consulting Collective",
    oneLineResult:
      "High-trust digital presence and structured client onboarding funnel for Lavie Pittmann.",
    problem:
      "Prospective clients needed a fast, authoritative platform that communicated value immediately without overwhelming walls of text.",
    whatWeDid: [
      "Built a structured, conversion-focused layout with clear program pathways",
      "Implemented direct inquiry capture and automated response confirmation",
      "Engineered clean typography and fast mobile performance across devices",
    ],
    resultMetric: "Streamlined Client Funnel",
    resultDetail: "Built with Lavie Pittmann to convert visitors into consultations",
    tags: ["Consulting Platform", "Conversion Flow", "Fast Build"],
    accentTone: "amber",
  },
  {
    slug: "neurosense-africa",
    name: "NeuroSense Africa",
    domain: "neurosenseafrica.com",
    logoUrl: "https://www.neurosenseafrica.com/assets/Neurosciencelogo-BWzIUrUQ.svg",
    businessType: "Neuro-Health & Clinical Technology Platform",
    oneLineResult:
      "Clinical-grade clarity, fast load performance, and accessible patient/partner inquiry pathways.",
    problem:
      "Communicating specialized clinical and neurological health work required plain-language structure and instant credibility on both desktop and mobile.",
    whatWeDid: [
      "Designed a clean, high-contrast interface focused on clinical trust and clarity",
      "Structured specialist programs and contact pathways for fast navigation",
      "Optimized Core Web Vitals for reliable loading across mobile connections",
    ],
    resultMetric: "Clinical Web Platform",
    resultDetail: "Live at neurosenseafrica.com with fast mobile response",
    tags: ["Clinical & Health", "Search-Friendly", "React / Next.js"],
    accentTone: "orange",
  },
  {
    slug: "moonika-fashion-house",
    name: "Moonika Fashion House",
    domain: "Studio Showcase Build",
    businessType: "Custom Retail & Booking Showcase",
    oneLineResult:
      "Fast visual catalog and direct booking request experience built with Next.js.",
    problem:
      "Mobile visitors needed to browse custom pieces quickly without heavy image lag and request fittings in two taps.",
    whatWeDid: [
      "Engineered responsive image optimization for instant mobile browsing",
      "Added direct fitting/quote inquiry forms tied to instant notifications",
      "Simplified navigation so customers reach booking actions in seconds",
    ],
    resultMetric: "Sub-Second Page Loads",
    resultDetail: "Showcases Evamore's React & Next.js speed architecture",
    tags: ["Next.js Architecture", "Mobile Speed", "Direct Booking"],
    accentTone: "zinc",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    company: "The Wealth Code Collective",
    domain: "Headed by Lavie Pittmann",
    leader: "Lavie Pittmann",
    role: "Founder, The Wealth Code Collective",
    category: "Consulting & Client Acquisition",
    quote:
      "Evamore took our vision and turned it into a fast, clean website that explains what we do in seconds. Clients can reach out without friction, and the process was straightforward from mockup to launch.",
    highlightMetric: "Clear Value & Fast Launch",
    avatarUrl: "https://thewealthcodecollective.com/images/lavie_portrait.jpg",
    logoUrl: "https://thewealthcodecollective.com/images/lavie_portrait.jpg",
  },
  {
    company: "Glamour Home Care",
    domain: "glamourhomecare.org",
    leader: "Shavonnah",
    role: "Director, Glamour Home Care",
    category: "Home Care & Health Services",
    quote:
      "Families looking for home care need to trust us right away from their phones. Kenny made the entire process plain, delivered our mockup first, and built a site at glamourhomecare.org that makes inquiries simple.",
    highlightMetric: "Built for Mobile Families",
    avatarUrl: "https://www.glamourhomecare.org/Website-Icon.png",
    logoUrl: "https://www.glamourhomecare.org/Website-Icon.png",
  },
  {
    company: "NeuroSense Africa",
    domain: "neurosenseafrica.com",
    leader: "NeuroSense Africa Team",
    role: "Clinical & Operations Lead, NeuroSense Africa",
    category: "Health & Clinical Platform",
    quote:
      "We needed a site that looked credible, loaded quickly on every device, and made it easy for partners and patients to connect with us. Evamore delivered exactly what was promised with zero buzzwords.",
    highlightMetric: "Fast Clinical Credibility",
    avatarUrl: "https://www.neurosenseafrica.com/assets/Neurosciencelogo-BWzIUrUQ.svg",
    logoUrl: "https://www.neurosenseafrica.com/assets/Neurosciencelogo-BWzIUrUQ.svg",
  },
];

export const CLIENT_QUESTIONS: ClientQuestionItem[] = [
  {
    question: "What happens when a quote request comes in while I'm on a job site or with a patient?",
    clientConcern:
      "78% of local customers book the first business that replies. Waiting until 7 PM costs you the job.",
    solutionTitle: "Instant Phone Alert + Day 2 & 5 Auto-Follow-Up",
    solutionBody:
      "The second a customer submits your form, your phone gets an alert. If a quote goes unanswered, our system sends a polite follow-up automatically after 2 and 5 days.",
    proofTag: "Zero Lost Leads",
  },
  {
    question: "Will I have to write pages of website text myself?",
    clientConcern:
      "Contractors and clinic owners don't have evenings free to write 10 pages of marketing copy.",
    solutionTitle: "We Write Plain-Language Service Pages For You",
    solutionBody:
      "Tell us what services you offer and which cities you cover. We write clear, search-friendly pages for every service—no homework for you.",
    proofTag: "Done-For-You Copy",
  },
  {
    question: "Do I own the website, or am I locked into an agency contract?",
    clientConcern:
      "Many agencies hold your domain and website hostage if you ever cancel their monthly plan.",
    solutionTitle: "100% Ownership of Code, Content & Domain",
    solutionBody:
      "Once paid, the site is yours completely. Our $150 CAD/month Care Plan is optional for hosting, updates, and lead reports—never a lock-in trap.",
    proofTag: "100% Client Owned",
  },
  {
    question: "How do I know if the website is actually paying for itself?",
    clientConcern:
      "20-page SEO PDFs full of 'impressions' and 'bounce rates' don't pay your crew.",
    solutionTitle: "One-Line Monthly Report",
    solutionBody:
      "We track what matters and send a one-line monthly summary: Leads in · Quotes sent · Jobs booked.",
    proofTag: "Honest Numbers",
  },
  {
    question: "What if I don't like the design after paying a deposit?",
    clientConcern:
      "Paying thousands upfront without seeing what your business will look like feels risky.",
    solutionTitle: "Free Custom Mockup Before We Write Final Code",
    solutionBody:
      "We send a free custom mockup within 3 business days first. Once we start, it's 50% to begin and 50% only after you approve the finished site.",
    proofTag: "Free Mockup First",
  },
  {
    question: "You work remotely—who answers if something breaks during my workday?",
    clientConcern:
      "Getting passed between account managers or waiting across timezones slows your business down.",
    solutionTitle: "One Developer Answers on Toronto Hours",
    solutionBody:
      "Kenny builds your site and answers directly on Mon–Fri Toronto time. You always reach the exact person who built your system.",
    proofTag: "Toronto Hours (EST)",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What do you do?",
    answer:
      "We build fast, search-friendly websites for home-service businesses and clinics, and set up automated follow-up systems that answer quote requests faster.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Contractors, roofers, HVAC and plumbing companies, renovators, and dental or physiotherapy clinics in Toronto and the Greater Toronto Area.",
  },
  {
    question: "Where are you based?",
    answer:
      "We work remotely from Kenya with clients in Canada, and we schedule all calls and support in Toronto time (EST).",
  },
  {
    question: "How long does it take?",
    answer:
      "A Starter site usually takes 5–10 business days after you approve your free mockup.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Starter sites begin at $1,500 CAD, Growth packages (with automated quote follow-up) begin at $2,500 CAD, and optional Care Plans are $150 CAD/month.",
  },
  {
    question: "Do I own the site?",
    answer:
      "Yes. Upon final payment, you own 100% of your website code, content, and domain name with zero lock-in.",
  },
  {
    question: "What if I want to see how it looks before committing?",
    answer:
      "Every project starts with a free custom mockup delivered within 3 business days so you can evaluate the layout and direction before paying a cent.",
  },
];

export const ARTICLES: ArticleItem[] = [
  {
    slug: "5-reasons-customers-leave-your-website-before-calling",
    title: "5 reasons customers leave your website before calling",
    category: "Conversion & Mobile UX",
    readTime: "3 min read",
    excerpt:
      "When a homeowner has a leaking roof or a patient needs a physio booking, small mobile roadblocks make them hit the back button.",
    keyTakeaways: [
      "Phone numbers that aren't tap-to-call on mobile lose emergency leads immediately.",
      "Slow 5+ second load times on cellular connections cause over half of visitors to bounce.",
      "Hiding your service areas makes GTA customers wonder if you cover their neighbourhood.",
    ],
    sections: [
      {
        heading: "1. Your phone number is trapped inside an image or footer",
        body: "Over 70% of local service searches happen on a phone. If a homeowner in Etobicoke has to pinch-and-zoom or copy-paste your number, they will tap the back button and call the next contractor on Google.",
      },
      {
        heading: "2. The site takes more than 3 seconds to load on cellular data",
        body: "Bloated page builders load dozens of unused scripts. We build with React and Next.js so your pages open almost instantly, even on weak job-site or commuter connections.",
      },
      {
        heading: "3. Unclear service areas and generic stock headlines",
        body: "Customers want to know two things in three seconds: what you fix and whether you serve their city. Plain headings like 'Roofing & Leak Repair in Mississauga & Etobicoke' beat vague slogans every time.",
      },
      {
        heading: "4. A 12-field contact form that feels like tax paperwork",
        body: "Keep quote forms to the essentials: Name, Phone/Email, Service Needed, and Postal Code. The easier it is to send, the more requests you capture.",
      },
      {
        heading: "5. No confirmation that anyone received their request",
        body: "When someone submits a quote request at 8 PM and gets silence, they keep calling competitors. An instant confirmation and same-day alert stops them from shopping around.",
      },
    ],
  },
  {
    slug: "how-fast-should-you-reply-to-a-quote-request",
    title: "How fast should you reply to a quote request?",
    category: "Quote Follow-Up Systems",
    readTime: "3 min read",
    excerpt:
      "Replying within 5 minutes vs. 5 hours changes your close rate dramatically—and what happens on Day 2 and Day 5 matters just as much.",
    keyTakeaways: [
      "Replying within the first hour makes you 7x more likely to qualify the lead.",
      "Nearly half of sent estimates go quiet simply because the homeowner got busy.",
      "Automated Day 2 and Day 5 check-ins recover jobs without awkward sales calls.",
    ],
    sections: [
      {
        heading: "The 15-Minute Window for Home Services & Clinics",
        body: "When a homeowner requests an HVAC quote or a patient requests an assessment, they usually open 2 or 3 tabs. An instant alert to your phone lets you respond while they still have their calendar open.",
      },
      {
        heading: "Why Sent Quotes Go Quiet (And How Day 2 & Day 5 Reminders Fix It)",
        body: "Most customers don't ignore your quote because they hated your price—they just got distracted by work or family. A polite automatic reminder at Day 2 ('Just checking if you had any questions about the estimate') and Day 5 brings your quote back to the top of their inbox.",
      },
      {
        heading: "One View for Every Open Quote",
        body: "Instead of digging through text messages and sticky notes, our quote follow-up view logs every request, its status, and which reminders have fired.",
      },
    ],
  },
  {
    slug: "what-a-local-roofing-website-needs-to-rank-in-your-city",
    title: "What a local roofing website needs to rank in your city",
    category: "Local SEO & Google Maps",
    readTime: "4 min read",
    excerpt:
      "You don't need 50 blog posts to rank in the GTA. You need clean service pages, matching Google Business Profile signals, and fast mobile performance.",
    keyTakeaways: [
      "One dedicated page per core service beats cramming everything onto a single bullet list.",
      "Your business name, address, and phone number must match identically across your site and Google profile.",
      "Structured FAQ and LocalBusiness schema help Google and AI search engines understand your coverage area.",
    ],
    sections: [
      {
        heading: "Separate Pages for Separate Searches",
        body: "Someone searching 'flat roof repair North York' has a different need than someone searching 'eavestrough replacement'. Dedicated service pages let Google match the exact page to the customer's search.",
      },
      {
        heading: "Connecting Your Website to Your Google Business Profile",
        body: "Your Google Business Profile drives the majority of local map calls. Linking it to a fast website with matching service categories and city headings strengthens both your map pack and organic ranking.",
      },
      {
        heading: "Structured Data for Search & AI Readability",
        body: "Every Evamore site includes LocalBusiness, Service, and FAQPage schema out of the box so search engines immediately index your services, pricing clarity, and GTA service areas.",
      },
    ],
  },
];

export const PRICING_TIERS = [
  {
    name: "Starter Site",
    price: "$1,500",
    currency: "CAD",
    period: "one-time",
    badge: "5-Day Typical Build",
    description:
      "For contractors and clinics that need a fast, trustworthy site that ranks locally and captures calls.",
    features: [
      "5 mobile-ready pages (Home, Services, About, Contact + 1 Service-Area page)",
      "High-converting quote request form & sticky tap-to-call button",
      "Local SEO page titles, headings & Google Business Profile setup",
      "Organization, LocalBusiness & FAQPage schema markup",
      "100% ownership of code, content, and domain at launch",
    ],
    cta: "Get a free Starter mockup",
    highlighted: false,
  },
  {
    name: "Growth System",
    price: "$2,500",
    currency: "CAD",
    period: "one-time",
    badge: "Most Popular · Website + Follow-Up",
    description:
      "Everything in Starter plus automated quote follow-up and instant phone alerts so no lead goes cold.",
    features: [
      "Everything included in the Starter 5-page website package",
      "Instant SMS & email lead alerts the moment a quote arrives",
      "Automated Day 2 & Day 5 quote follow-up reminder sequence",
      "Simple lead & quote status tracker in one clean view",
      "Expanded service-area & conversion tracking setup",
    ],
    cta: "Get a free Growth mockup",
    highlighted: true,
  },
  {
    name: "Care Plan",
    price: "$150",
    currency: "CAD",
    period: "/ month",
    badge: "Optional · Cancel Anytime",
    description:
      "Worry-free hosting, fast updates, and a plain one-line monthly report showing your return.",
    features: [
      "High-speed managed hosting, SSL & automated daily backups",
      "Same-week text, photo, or pricing updates whenever you need",
      "Uptime monitoring & quote-form delivery checks",
      "One-line monthly report: Leads in · Quotes sent · Jobs booked",
      "Direct support from Kenny on Toronto business hours",
    ],
    cta: "Add Care Plan to project",
    highlighted: false,
  },
];
