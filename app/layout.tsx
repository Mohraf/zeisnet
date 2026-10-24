import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RevealObserver } from "@/components/reveal";
import { SiteMotion } from "@/components/site-motion";
import { WhatsappButton } from "@/components/whatsapp-button";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL, GEO, pageAlternates, localBusinessJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
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
  applicationName: "Zeisnet Kenya",
  title: {
    default: "Zeisnet Kenya — Software Development & IT Services · Kenya & Worldwide",
    template: "%s | Zeisnet Kenya",
  },
  description:
    "Zeisnet Kenya is an IT services and software development company in Mombasa — IT consulting, cloud services, cybersecurity, networking, software development, computer repair and digital skills training for businesses across Kenya, East Africa and the world.",
  keywords: [
    // Software development — the practice we lead with
    "software development Mombasa",
    "software development company Kenya",
    "custom software Kenya",
    "web application development Mombasa",
    "mobile app development Kenya",
    // Mombasa & Kenya
    "IT services Mombasa",
    "IT company Mombasa",
    "IT support Kenya",
    "computer repair Mombasa",
    "laptop repair Mombasa",
    "cybersecurity Kenya",
    "cloud services Kenya",
    "Microsoft 365 Kenya",
    "network installation Mombasa",
    "IT training Mombasa",
    "capacity building Kenya",
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
  alternates: pageAlternates("/"),
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
    siteName: "Zeisnet Kenya",
    locale: "en_KE",
    title: "Zeisnet Kenya — Software Development & IT Services · Kenya & Worldwide",
    description:
      "Software development, IT consulting, cloud, cybersecurity, networking, repairs and digital skills training for organisations in Kenya, across Africa and beyond.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeisnet Kenya — Software Development & IT Services · Kenya & Worldwide",
    description:
      "Software development, IT consulting, cloud, cybersecurity, networking, repairs and digital skills training for organisations in Kenya, across Africa and beyond.",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  other: {
    // Geo-targeting meta tags for local search
    "geo.region": "KE-28",
    "geo.placename": "Mombasa",
    "geo.position": `${GEO.latitude};${GEO.longitude}`,
    ICBM: `${GEO.latitude}, ${GEO.longitude}`,
  },
  // To verify the site in Google Search Console (needed to submit the sitemap
  // and monitor Mombasa/Kenya rankings): register the property at
  // https://search.google.com/search-console, copy the HTML-tag token, paste
  // it below and uncomment. Same for Bing Webmaster Tools if desired.
  // verification: { google: "PASTE_SEARCH_CONSOLE_TOKEN_HERE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-KE" className={`${inter.variable} ${spaceGrotesk.variable}`}>
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
