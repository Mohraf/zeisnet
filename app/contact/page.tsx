import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { LinkedinIcon, XIcon, FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Faq } from "@/components/faq";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, faqJsonLd, pageAlternates, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Zeisnet — IT Support in Mombasa, Kenya | Free Consultation",
  description:
    "Contact Zeisnet IT services in Mombasa: call (+254) 722 536 771, WhatsApp, email support@zeisnet.co.ke, or visit ECB Centre, 2nd Floor, Moi Avenue. Free consultations for businesses in Kenya and across Africa — response within one business day.",
  alternates: pageAlternates("/contact/"),
  openGraph: {
    title: "Contact Zeisnet — IT Support in Mombasa, Kenya",
    description:
      "Call, WhatsApp or visit us at ECB Centre, Moi Avenue, Mombasa. Free consultations, response within one business day.",
    url: "/contact/",
  },
};

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

const channels = [
  {
    icon: Phone,
    title: "Call us",
    detail: site.phone,
    sub: "Mon–Fri 9:00–18:00 · Sat 9:30–17:00",
    href: site.phoneHref,
  },
  {
    icon: Mail,
    title: "Email us",
    detail: site.email,
    sub: "Replies within one business day",
    href: site.emailHref,
  },
  {
    icon: MapPin,
    title: "Visit us",
    detail: "ECB Centre, 2nd Floor",
    sub: `Moi Avenue – Tangana, ${site.city}`,
    href: site.mapsUrl,
  },
  {
    icon: Clock,
    title: "Emergency support",
    detail: "24/7 on The Fearless plan",
    sub: "Priority line for package holders",
    href: "/packages",
  },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mack-otieno-82680769", Icon: LinkedinIcon },
  { label: "X (Twitter)", href: "https://x.com/zeisnetrw", Icon: XIcon },
  { label: "Facebook", href: "https://www.facebook.com/zeisnet", Icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/zeisnetrwanda", Icon: InstagramIcon },
];

const workingHours: { days: string; hours: string; note?: string }[] = [
  { days: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
  { days: "Saturday", hours: "9:30 AM – 5:00 PM" },
  { days: "Sunday", hours: "Closed" },
];

const faqs = [
  {
    question: "How quickly will you respond?",
    answer:
      "Form and email enquiries get a reply within one business day. Phone calls during business hours are answered immediately — and package clients get priority response times.",
  },
  {
    question: "Is the first consultation really free?",
    answer:
      "Yes. We'll discuss your situation, give an honest assessment and a clear quote — with zero obligation to proceed.",
  },
  {
    question: "Do you offer on-site visits?",
    answer:
      "Yes, throughout Mombasa — by appointment. Call or message us to book a time, and we'll come to you; The Shield and The Fearless package clients get same-day appointments. Visits outside Mombasa are arranged with transparent travel costs.",
  },
  {
    question: "Can I just walk in with my laptop?",
    answer:
      "Absolutely. We're on the 2nd floor of ECB Centre on Moi Avenue, Mombasa, Monday to Saturday. Walk-ins are welcome for repairs, upgrades and diagnostics. Software issues are resolved while you wait; machines with power issues require a minimum of 24 hours.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Zeisnet",
          url: `${SITE_URL}/contact`,
          about: { "@id": `${SITE_URL}/#business` },
        }}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Let&apos;s talk about <span className="text-gradient">your technology</span>
          </>
        }
        description="Whether it's a broken laptop, a security worry or a full transformation project, reach out. A real engineer reads every message, and the first consultation is always free."
      />

      {/* ====================== CHANNELS + FORM =========================== */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Contact channel cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel, i) => (
              <a
                key={channel.title}
                href={channel.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10"
                data-reveal
                style={delay(i * 80)}
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 shadow-lg shadow-brand-600/25 transition-transform duration-300 group-hover:scale-110">
                  <channel.icon className="h-5.5 w-5.5 text-white" aria-hidden />
                </span>
                <h2 className="mt-5 font-display text-base font-bold text-night-900">{channel.title}</h2>
                <p className="mt-1.5 text-sm font-semibold text-brand-600">{channel.detail}</p>
                <p className="mt-0.5 text-xs text-slate-500">{channel.sub}</p>
              </a>
            ))}
          </div>

          {/* Form + sidebar */}
          <div className="mt-16 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10" data-reveal>
              <h2 className="font-display text-2xl font-bold text-night-900">Send us a message</h2>
              <p className="mt-2 text-slate-600">Tell us what you need, we&apos;ll reply within one business day.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* Map */}
              <div
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                data-reveal
                style={delay(100)}
              >
                <iframe
                  title="Zeisnet office location — ECB Centre, Moi Avenue, Mombasa"
                  src="https://www.google.com/maps?q=ECB+Centre,+Moi+Avenue,+Tangana,+Mombasa,+Kenya&output=embed"
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <p className="text-sm font-semibold text-night-900">ECB Centre, 2nd Floor</p>
                    <p className="text-xs text-slate-500">Moi Avenue – Tangana, {site.city}</p>
                  </div>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    Directions
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </div>
              </div>

              {/* Working hours */}
              <div
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                data-reveal
                style={delay(140)}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600">
                    <Clock className="h-5 w-5 text-white" aria-hidden />
                  </span>
                  <h3 className="font-display text-lg font-bold text-night-900">Working hours</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {workingHours.map((row) => (
                    <li
                      key={row.days}
                      className="border-b border-slate-100 pb-3 text-sm last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-slate-600">{row.days}</span>
                        <span
                          className={`whitespace-nowrap font-semibold ${
                            row.hours === "Closed" ? "text-slate-400" : "text-night-900"
                          }`}
                        >
                          {row.hours}
                        </span>
                      </div>
                      {row.note && <p className="mt-1 text-xs text-slate-400">{row.note}</p>}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials */}
              <div
                className="rounded-3xl bg-night-950 p-8 text-white"
                data-reveal
                style={delay(180)}
              >
                <h3 className="font-display text-lg font-bold">Follow along</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Tech tips, security alerts and training announcements for Kenyan businesses.
                </p>
                <ul className="mt-6 flex gap-3">
                  {socials.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-slate-300 transition-all duration-300 hover:border-accent-400/60 hover:bg-accent-400/10 hover:text-accent-300"
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== FAQ =============================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Before you ask"
            title="Frequently asked questions"
            description="Quick answers to the things people usually want to know first."
          />
          <div className="mt-12" data-reveal>
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
