import { site } from "./site";

export const SITE_URL = "https://zeisnet.co.ke";

/** Approximate coordinates of ECB Centre, Moi Avenue, Mombasa — verify before launch. */
export const GEO = { latitude: -4.0630, longitude: 39.6705 };

export const absoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();

/**
 * Canonical + hreflang for a page. The Kenya and Rwanda sites share their
 * routes, so each page names its counterpart and Google shows zeisnet.co.ke
 * to searchers in Kenya and zeisnet.com to searchers in Rwanda. Google only
 * honours the pair once the Rwanda site carries the matching tags.
 */
export const pageAlternates = (path: string) => ({
  canonical: path,
  languages: {
    "en-KE": absoluteUrl(path),
    "en-RW": new URL(path, site.rwandaUrl).toString(),
  },
});

/**
 * Verified profiles that represent the same business entity. `sameAs` links
 * help Google connect the website to the Google Business Profile and social
 * accounts — strengthening the knowledge panel and local ranking signals.
 * The Rwanda-only X and Instagram accounts are left out so Google doesn't
 * merge this branch with the Kigali one — add Kenya accounts here.
 */
export const SAME_AS = [
  "https://www.linkedin.com/in/mack-otieno-82680769",
  "https://www.facebook.com/zeisnet",
];

/* ------------------------------------------------------------------ */
/*  Site-wide structured data                                          */
/* ------------------------------------------------------------------ */

/**
 * LocalBusiness + ProfessionalService — the core of local SEO.
 * Powers the Google Business/knowledge panel, "IT support near me"
 * queries and the Mombasa map pack.
 */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#business`,
  name: site.name,
  legalName: site.legalName,
  alternateName: ["Zeisnet Kenya", "Zeisnet Computing"],
  description:
    "IT services and technology solutions company in Mombasa, Kenya — IT consulting, cloud services, cybersecurity, networking, software development, computer repair and digital skills training for businesses across Kenya, East Africa and beyond.",
  url: SITE_URL,
  logo: absoluteUrl("/icon"),
  image: absoluteUrl("/opengraph-image"),
  telephone: "+254722536771",
  email: site.email,
  priceRange: "KES 1,000 – 5,000 / month",
  currenciesAccepted: "KES",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ECB Centre, 2nd Floor, Moi Avenue, Tangana",
    addressLocality: "Mombasa",
    addressRegion: "Mombasa County",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },
  hasMap: site.mapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:30",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Mombasa" },
    { "@type": "Country", name: "Kenya" },
    { "@type": "Place", name: "East Africa" },
    { "@type": "Place", name: "Africa" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+254722536771",
    email: site.email,
    areaServed: ["KE", "UG", "TZ", "RW", "BI", "CD"],
    availableLanguage: ["English", "Swahili"],
  },
  sameAs: SAME_AS,
  // No aggregateRating/review here: the homepage testimonials are Google
  // reviews of the Kigali office, and review markup must describe this
  // business. Restore them (as on the Rwanda site) once the Kenya Google
  // Business Profile has reviews and those are shown on the homepage.
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: SITE_URL,
  logo: absoluteUrl("/icon"),
  sameAs: SAME_AS,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+254722536771",
    email: site.email,
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: site.name,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

/* ------------------------------------------------------------------ */
/*  Per-page helpers                                                   */
/* ------------------------------------------------------------------ */

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function servicesJsonLd(
  services: { title: string; description: string; id: string; href?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Zeisnet IT Services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        serviceType: s.title,
        description: s.description,
        // Practices with a dedicated landing page point there, so the page and
        // the structured data agree on one canonical URL per service.
        url: absoluteUrl(s.href ?? `/services#${s.id}`),
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "Mombasa" },
          { "@type": "Country", name: "Kenya" },
          { "@type": "Place", name: "East Africa" },
        ],
      },
    })),
  };
}

/**
 * Software development landing page — a single `Service` whose offer catalog
 * lists the capability pillars. Gives Google one strong entity for
 * "software development company Mombasa/Kenya" rather than a loose ItemList.
 */
export function softwareServiceJsonLd(capabilities: { title: string; description: string; id: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/software-development/#service`,
    name: "Custom Software Development",
    serviceType: "Software Development",
    description:
      "Custom software development in Mombasa, Kenya — web applications and business systems, mobile apps, API integrations and workflow automation, and MVP product engineering for organisations across Kenya, East Africa and beyond.",
    url: absoluteUrl("/software-development"),
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: [
      { "@type": "City", name: "Mombasa" },
      { "@type": "Country", name: "Kenya" },
      { "@type": "Place", name: "East Africa" },
      { "@type": "Place", name: "Africa" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact"),
      servicePhone: "+254722536771",
      serviceLocation: { "@id": `${SITE_URL}/#business` },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Capabilities",
      itemListElement: capabilities.map((capability, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: capability.title,
          serviceType: capability.title,
          description: capability.description,
          url: absoluteUrl(`/software-development#${capability.id}`),
          provider: { "@id": `${SITE_URL}/#business` },
        },
      })),
    },
  };
}

export function coursesJsonLd(categories: { title: string; blurb: string; courses: string[] }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Zeisnet Capacity Building Programs",
    itemListElement: categories.flatMap((cat) =>
      cat.courses.map((course) => ({
        "@type": "Course",
        name: course,
        description: `${cat.title} training in Mombasa, Kenya — ${cat.blurb}`,
        provider: { "@id": `${SITE_URL}/#business` },
        url: absoluteUrl("/capacity-building"),
        offers: {
          "@type": "Offer",
          category: "Paid",
          availability: "https://schema.org/InStock",
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["Onsite", "Online"],
          location: { "@type": "Place", name: "Mombasa, Kenya" },
        },
      })),
    ),
  };
}

export function packagesJsonLd(plans: { name: string; price: string; audience: string; features: string[] }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Zeisnet Monthly IT Support Packages",
    url: absoluteUrl("/packages"),
    itemListElement: plans.map((plan) => ({
      "@type": "Offer",
      name: `${plan.name} Plan`,
      description: `Monthly IT support package for ${plan.audience.toLowerCase()} — ${plan.features.join(", ")}.`,
      price: plan.price.replace(",", ""),
      priceCurrency: "KES",
      url: absoluteUrl("/packages"),
      availability: "https://schema.org/InStock",
      offeredBy: { "@id": `${SITE_URL}/#business` },
      eligibleRegion: { "@type": "Country", name: "Kenya" },
    })),
  };
}
