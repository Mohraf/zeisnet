import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RevealObserver } from "@/components/reveal";
import { SiteMotion } from "@/components/site-motion";
import { WhatsappButton } from "@/components/whatsapp-button";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL, GEO, localBusinessJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Zeisnet",
  title: {
    default: "Zeisnet — Software Development & IT Services · Kigali & Worldwide",
    template: "%s | Zeisnet",
  },
  description:
    "Zeisnet is a leading IT services company in Kigali, Rwanda — IT consulting, cloud services, cybersecurity, networking, software development, computer repair and digital skills training for businesses across Rwanda, East Africa and the world.",
  keywords: [
    // Kigali & Rwanda first
    "IT services Kigali",
    "IT company Kigali",
    "IT support Rwanda",
    "computer repair Kigali",
    "cybersecurity Rwanda",
    "cloud services Rwanda",
    "Microsoft 365 Rwanda",
    "network installation Kigali",
    "IT training Kigali",
    "capacity building Rwanda",
    // East Africa & Africa
    "IT services East Africa",
    "managed IT services Africa",
    "digital transformation Africa",
    // Global
    "IT consulting",
    "technology solutions",
    "remote IT support",
  ],
  authors: [{ name: "Zeisnet", url: SITE_URL }],
  creator: "Zeisnet",
  publisher: "Zeisnet Computing Ltd",
  category: "Information Technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Zeisnet",
    locale: "en_US",
    title: "Zeisnet — Software Development & IT Services · Kigali & Worldwide",
    description:
      "Software development, IT consulting, cloud, cybersecurity, networking, repairs and digital skills training for organisations in Rwanda, across Africa and beyond.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeisnet — Software Development & IT Services · Kigali & Worldwide",
    description:
      "Software development, IT consulting, cloud, cybersecurity, networking, repairs and digital skills training for organisations in Rwanda, across Africa and beyond.",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  other: {
    // Geo-targeting meta tags for local search
    "geo.region": "RW-01",
    "geo.placename": "Kigali",
    "geo.position": `${GEO.latitude};${GEO.longitude}`,
    ICBM: `${GEO.latitude}, ${GEO.longitude}`,
  },
  // To verify the site in Google Search Console (needed to submit the sitemap
  // and monitor Kigali/Rwanda rankings): register the property at
  // https://search.google.com/search-console, copy the HTML-tag token, paste
  // it below and uncomment. Same for Bing Webmaster Tools if desired.
  // verification: { google: "PASTE_SEARCH_CONSOLE_TOKEN_HERE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsappButton />
        <RevealObserver />
        <SiteMotion />
        <JsonLd data={localBusinessJsonLd} />
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </body>
    </html>
  );
}
