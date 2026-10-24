import type { Metadata } from "next";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  Cloud,
  ShieldCheck,
  Network,
  Code2,
  Lightbulb,
  Wrench,
  Rocket,
  CheckCircle2,
  HardDriveDownload,
  Eraser,
  LockKeyhole,
  MonitorSmartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/page-hero";
import { HowItWorks } from "@/components/how-it-works";
import { CtaSection } from "@/components/cta-section";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, servicesJsonLd, faqJsonLd, pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "IT Services in Mombasa, Kenya — Consulting, Cloud, Cybersecurity & Support",
  description:
    "Full-service IT in Mombasa: consulting, networking, cloud & Microsoft 365, software development, cybersecurity, digital transformation and computer repair. Serving businesses across Kenya, East Africa and worldwide via remote support.",
  alternates: pageAlternates("/services/"),
  openGraph: {
    title: "IT Services in Mombasa, Kenya | Zeisnet Kenya",
    description:
      "Consulting, networking, cloud, software, cybersecurity, digital transformation and technical support. One accountable IT partner.",
    url: "/services/",
  },
};

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

type Service = {
  id: string;
  icon: typeof Cloud;
  title: string;
  description: string;
  benefits: string[];
  span: string;
  accent: string;
  /** Practices with their own landing page link there instead of straight to contact. */
  href?: string;
  cta?: string;
};

const services: Service[] = [
  {
    id: "consulting",
    icon: Lightbulb,
    title: "IT Consulting",
    description:
      "Independent, practical advice on where technology can save you money, reduce risk and unlock growth. We audit what you have, listen to where you're going, and build a roadmap that fits your budget.",
    benefits: ["Technology audits & roadmaps", "Vendor-neutral recommendations", "Budget-aligned planning"],
    span: "lg:col-span-3",
    accent: "bg-orange-500",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Full Microsoft 365 licensing and administration. From purchasing licenses to configuring users, devices and admin centers like Azure AD, Exchange, SharePoint and Teams. Plus managed cloud infrastructure that scales with you.",
    benefits: ["M365 licensing & administration", "Cloud migration & management", "Work-from-anywhere setup"],
    span: "lg:col-span-3",
    accent: "bg-brand-500",
  },
  {
    id: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "We lock down open ports, segregate public and private networks, and switch on intrusion detection and prevention. If ransomware strikes, we guide you through decryption, recovery and future-proofing.",
    benefits: [
      "Network hardening & firewalls",
      "Intrusion detection & prevention",
      "Ransomware response & protection",
      "Certified secure data wiping",
    ],
    span: "lg:col-span-4",
    accent: "bg-teal-500",
  },
  {
    id: "networking",
    icon: Network,
    title: "Networking Solutions",
    description:
      "Fast, reliable business networks. Designed, cabled, configured and monitored for maximum uptime.",
    benefits: ["Network design & deployment", "Wi-Fi optimisation", "Ongoing monitoring"],
    span: "lg:col-span-2",
    accent: "bg-purple-500",
  },
  {
    id: "software",
    icon: Code2,
    title: "Software Development",
    description:
      "Custom web applications, mobile apps and integrations built around your real workflows, not the other way round.",
    benefits: ["Web apps & business systems", "Mobile apps", "Integrations & automation", "Ongoing maintenance"],
    span: "lg:col-span-2",
    accent: "bg-blue-500",
    href: "/software-development",
    cta: "Explore software development",
  },
  {
    id: "transformation",
    icon: Rocket,
    title: "Digital Transformation",
    description:
      "Move from paper and spreadsheets to connected digital systems, step by step. We modernise your tools, migrate your data and train your people, so change actually sticks.",
    benefits: ["Legacy system modernisation", "Data migration", "Change management & training"],
    span: "lg:col-span-4",
    accent: "bg-pink-500",
  },
  {
    id: "support",
    icon: Wrench,
    title: "Technical Support",
    description:
      "Computer and projector repair for all brands, performance upgrades across hardware and software, and instant online remote support. An engineer connects to your machine and fixes the issue while you watch.",
    benefits: [
      "Computer & projector repair",
      "Performance upgrades",
      "Data recovery",
      "24/7 online remote support",
    ],
    span: "lg:col-span-6",
    accent: "bg-brand-500",
  },
];

const specialties = [
  {
    icon: HardDriveDownload,
    title: "Data Recovery",
    description: "Lost or corrupted files rescued from hard drives, SSDs and other storage devices.",
  },
  {
    icon: Eraser,
    title: "Data Wiping",
    description: "Complete, certified destruction of electronic data before devices are sold or retired.",
  },
  {
    icon: LockKeyhole,
    title: "Ransomware Response",
    description: "Calm, guided decryption and recovery when the worst happens. Then protection so it never repeats.",
  },
  {
    icon: MonitorSmartphone,
    title: "Remote Support",
    description: "An engineer connects to your computer over the internet and solves your issue in real time.",
  },
];

const faqs = [
  {
    question: "Do you offer computer repair in Mombasa?",
    answer:
      "Yes. We repair laptops, desktops and projectors of all brands at our workshop in ECB Centre on Moi Avenue, Mombasa, and offer on-site and at-home repair across the city. Most repairs are diagnosed the same day, and walk-ins are welcome Monday to Saturday.",
  },
  {
    question: "Which IT services does Zeisnet provide in Kenya?",
    answer:
      "Zeisnet delivers the full range of IT services across Mombasa and Kenya: IT consulting, cloud and Microsoft 365, cybersecurity, networking, software development, digital transformation, and technical support including data recovery, data wiping and ransomware response. Remote support is available anywhere in Kenya and beyond.",
  },
  {
    question: "How much do IT services cost in Mombasa?",
    answer:
      "One-off repairs and projects are quoted up front with no hidden costs, and the first consultation is always free. For ongoing support, our monthly packages start at KSh 1,000 — priced specifically for the Kenyan market. We'll always give a clear, fixed quote before any billable work begins.",
  },
  {
    question: "Do you provide Microsoft 365 and cloud setup for businesses in Kenya?",
    answer:
      "Yes. We handle Microsoft 365 licensing and administration end to end — users, devices, Exchange, SharePoint, Teams and Azure AD — plus cloud migration and managed infrastructure, so your team can work securely from anywhere in Kenya or abroad.",
  },
  {
    question: "Can you help after a ransomware attack or data loss?",
    answer:
      "Yes. Our cybersecurity team guides you through decryption, recovery and hardening after ransomware, and our data recovery specialists rescue lost or corrupted files from hard drives, SSDs and other storage. Contact us as soon as possible for the best chance of full recovery.",
  },
  {
    question: "Do you serve businesses outside Mombasa?",
    answer:
      "Remote support reaches anywhere in Kenya and across East Africa. On-site visits outside Mombasa are arranged case by case with transparent travel costs, so organisations anywhere in the country can work with us.",
  },
];

const process = [
  {
    iconName: "consult",
    step: "01",
    title: "Discover",
    description: "We listen first. Understanding your goals, systems and pain points before proposing anything.",
  },
  {
    iconName: "plan",
    step: "02",
    title: "Plan",
    description: "You get a clear scope, timeline and fixed quote. No jargon, no hidden costs.",
  },
  {
    iconName: "deploy",
    step: "03",
    title: "Deliver",
    description: "Certified engineers implement with minimal disruption to your day-to-day operations.",
  },
  {
    iconName: "support",
    step: "04",
    title: "Support",
    description: "We stay with you. Monitoring, maintaining and improving long after go-live.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd
        data={servicesJsonLd(services.map(({ title, description, id, href }) => ({ title, description, id, href })))}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHero
        eyebrow="Our services"
        title={
          <>
            One partner for <span className="text-gradient">every layer</span> of your technology
          </>
        }
        description="Seven practices, delivered by certified engineers in Kenya. Whether you need a single repair or a complete digital transformation, we bring the same care and clarity to every job."
      >
        <Button href="/contact" size="lg">
          Request a service
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        </Button>
      </PageHero>

      {/* ========================= SERVICES BENTO ========================= */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-6">
            {services.map((service, i) => (
              <article
                id={service.id}
                key={service.id}
                className={`group relative flex scroll-mt-24 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10 ${service.span}`}
                data-reveal
                style={delay((i % 3) * 90)}
              >
                <div
                  className={`absolute -right-12 -top-12 h-40 w-40 rounded-full ${service.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
                  aria-hidden
                />
                <div className="relative flex flex-wrap items-start justify-between gap-4">
                  <span
                    className={`grid h-13 w-13 place-items-center rounded-2xl ${service.accent} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <service.icon className="h-6 w-6 text-white" aria-hidden />
                  </span>
                </div>
                <h2 className="relative mt-6 font-display text-2xl font-bold text-night-900">{service.title}</h2>
                <p className="relative mt-3 max-w-2xl leading-relaxed text-slate-600">{service.description}</p>
                <ul className="relative mt-6 flex flex-1 flex-col gap-2.5">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-500" aria-hidden />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-8">
                  <Button
                    href={service.href ?? "/contact"}
                    variant="ghost"
                    size="sm"
                    className="-ml-3 text-brand-600 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {service.cta ?? "Get started"}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SPECIALIST RESCUE STRIP ==================== */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute left-1/3 top-[-30%] h-96 w-96 rounded-full bg-brand-200/30 blur-3xl" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Specialist services"
            title="When something goes wrong, we make it right"
            description="Emergency and end-of-life services handled with speed, discretion and certified processes."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((item, i) => (
              <div
                key={item.title}
                className="soft-card group rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                data-reveal
                style={delay(i * 90)}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <item.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-night-900">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== PROCESS (sticky) ========================= */}
      <HowItWorks
        eyebrow="How we work"
        title="A simple process, from first call to long-term care"
        description="Every engagement follows the same four steps so you always know exactly where things stand."
        steps={process.map((phase) => ({
          n: phase.step,
          icon: phase.iconName,
          title: phase.title,
          description: phase.description,
        }))}
      />

      {/* ============================== FAQ =============================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Questions"
            title="IT services in Mombasa & Kenya — FAQs"
            description="The things businesses across Kenya ask us most before getting started."
          />
          <div className="mt-12" data-reveal>
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <CtaSection
        title="Not sure which service you need?"
        description="Describe the problem — we'll tell you honestly what it takes to fix it, and what it costs. The first consultation is always free."
      />
    </>
  );
}
