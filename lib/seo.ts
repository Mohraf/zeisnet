import { site } from "./site";
import { reviews, aggregateRatingValue, reviewCount } from "./reviews";

export const SITE_URL = "https://zeisnet.com";

/** Approximate coordinates of Tropical Plaza, KN 82 Street, Kigali — verify before launch. */
export const GEO = { latitude: -1.9496, longitude: 30.0603 };

export const absoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();

/**
 * Verified profiles that represent the same business entity. `sameAs` links
 * help Google connect the website to the Google Business Profile and social
 * accounts — strengthening the knowledge panel and local ranking signals.
 */
export const SAME_AS = [
  "https://www.linkedin.com/in/mack-otieno-82680769",
  "https://x.com/zeisnetrw",
  "https://www.facebook.com/zeisnet",
  "https://www.instagram.com/zeisnetrwanda",
];

/* ------------------------------------------------------------------ */
/*  Site-wide structured data                                          */
/* ------------------------------------------------------------------ */

/**
 * LocalBusiness + ProfessionalService — the core of local SEO.
 * Powers the Google Business/knowledge panel, "IT support near me"
 * queries and the Kigali map pack.
 */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#business`,
  name: site.name,
  legalName: site.legalName,
  alternateName: "Zeisnet Computing",
  description:
    "IT services and technology solutions company in Kigali, Rwanda — IT consulting, cloud services, cybersecurity, networking, software development, computer repair and digital skills training for businesses across Rwanda, East Africa and beyond.",
  url: SITE_URL,
  logo: absoluteUrl("/icon"),
  image: absoluteUrl("/opengraph-image"),
  telephone: "+250787186250",
  email: site.email,
  priceRange: "RWF 10,000 – 50,000 / month",
  currenciesAccepted: "RWF",
  address: {
    "@type": "PostalAddress",
    streetAddress: "KN 82 Street, Tropical Plaza Building, 4th Floor",
    addressLocality: "Kigali",
    addressRegion: "Kigali City",
    addressCountry: "RW",
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
    { "@type": "City", name: "Kigali" },
    { "@type": "Country", name: "Rwanda" },
    { "@type": "Place", name: "East Africa" },
    { "@type": "Place", name: "Africa" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+250787186250",
    email: site.email,
    areaServed: ["RW", "KE", "UG", "TZ", "BI", "CD"],
    availableLanguage: ["English"],
  },
  sameAs: SAME_AS,
  // Star ratings in search results. Derived from the genuine 5-star Google
  // reviews shown on the homepage (see lib/reviews.ts) — must stay in sync
  // with what visitors actually see, per Google's review-snippet policy.
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: aggregateRatingValue,
    reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: r.quote,
  })),
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
    telephone: "+250787186250",
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

export function servicesJsonLd(services: { title: string; description: string; id: string }[]) {
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
        url: absoluteUrl(`/services#${s.id}`),
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "Kigali" },
          { "@type": "Country", name: "Rwanda" },
          { "@type": "Place", name: "East Africa" },
        ],
      },
    })),
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
        description: `${cat.title} training in Kigali, Rwanda — ${cat.blurb}`,
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
          location: { "@type": "Place", name: "Kigali, Rwanda" },
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
      priceCurrency: "RWF",
      url: absoluteUrl("/packages"),
      availability: "https://schema.org/InStock",
      offeredBy: { "@id": `${SITE_URL}/#business` },
      eligibleRegion: { "@type": "Country", name: "Rwanda" },
    })),
  };
}
