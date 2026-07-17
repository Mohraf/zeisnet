import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  ShieldCheck,
  Network,
  Code2,
  Lightbulb,
  Wrench,
  GraduationCap,
  Award,
  Clock3,
  HeartHandshake,
  Gauge,
  CheckCircle2,
  Quote,
  Star,
  MonitorSmartphone,
  HardDriveDownload,
  Laptop,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FramedTag } from "@/components/ui/framed-tag";
import { SectionHeading } from "@/components/ui/section-heading";
import { HeroVisual } from "@/components/hero-visual";
import { LogoMarquee } from "@/components/logo-marquee";
import { CtaSection } from "@/components/cta-section";
import { site } from "@/lib/site";
import { reviews as testimonials } from "@/lib/reviews";

export const metadata: Metadata = {
  title: {
    absolute: "Zeisnet — IT Services Company in Kigali, Rwanda | Cloud, Cybersecurity & Support",
  },
  description:
    "Trusted IT services company in Kigali, Rwanda. Zeisnet delivers IT consulting, cloud services, cybersecurity, networking, computer repair and digital skills training for businesses across Rwanda, East Africa and beyond. Free consultation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Zeisnet — IT Services Company in Kigali, Rwanda",
    description:
      "IT consulting, cloud, cybersecurity, networking, repairs and training for businesses in Rwanda and across Africa. Free consultation.",
    url: "/",
  },
};

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "10+", label: "Years combined expertise" },
  { value: "500+", label: "Devices repaired & upgraded" },
  { value: "99.9%", label: "Managed network uptime" },
  { value: "24/7", label: "Remote support available" },
];

const services = [
  {
    icon: Lightbulb,
    title: "IT Consulting",
    description: "Practical technology roadmaps aligned to your business goals — not jargon.",
    href: "/services#consulting",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Microsoft 365 licensing, migration and managed cloud infrastructure.",
    href: "/services#cloud",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Network hardening, ransomware protection and secure data wiping.",
    href: "/services#cybersecurity",
  },
  {
    icon: Network,
    title: "Networking Solutions",
    description: "Design, deployment and security of fast, reliable business networks.",
    href: "/services#networking",
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom web and business applications built for how you actually work.",
    href: "/services#software",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    description: "Repairs, upgrades, data recovery and on-demand remote assistance.",
    href: "/services#support",
  },
];

const whyPoints = [
  {
    icon: Award,
    title: "Certified expertise",
    description: "Certified engineers with deep experience across Microsoft, cloud and network technologies.",
  },
  {
    icon: Clock3,
    title: "Fast turnaround",
    description: "Clear timelines and honest communication — most repairs and fixes are done within days, not weeks.",
  },
  {
    icon: HeartHandshake,
    title: "Partner mindset",
    description: "We work as an extension of your team, from a single laptop fix to a full digital transformation.",
  },
  {
    icon: Gauge,
    title: "Fair, transparent pricing",
    description: "Packages designed for the Rwandan market, with no surprises and satisfaction guaranteed.",
  },
];

const solutions = [
  {
    icon: MonitorSmartphone,
    title: "Modern workplace",
    description:
      "Microsoft 365 setup and administration end to end — users, devices, Exchange, SharePoint and Teams — so your team works from anywhere, securely.",
    points: ["M365 licensing & onboarding", "Azure AD & device management", "Email & collaboration setup"],
  },
  {
    icon: ShieldCheck,
    title: "Secure infrastructure",
    description:
      "Locked-down networks with segregated public and private zones, intrusion detection and prevention, and a tested ransomware response plan.",
    points: ["Firewall & port hardening", "Intrusion detection & prevention", "Ransomware protection & recovery"],
  },
  {
    icon: HardDriveDownload,
    title: "Data lifecycle",
    description:
      "From recovering lost or corrupted files to certified data wiping at end-of-life, your information is protected at every stage.",
    points: ["Data recovery services", "Backup strategy & automation", "Certified secure data wiping"],
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative overflow-hidden bg-night-950">
        <div className="bg-grid-dark absolute inset-0" aria-hidden />
        <div className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-600/25 blur-3xl" aria-hidden />
        <div className="absolute -right-24 top-10 h-[24rem] w-[24rem] rounded-full bg-accent-500/15 blur-3xl" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-36 sm:px-8 lg:grid-cols-2 lg:pb-32 lg:pt-44">
          <div className="flex flex-col items-start gap-7">
            <div data-reveal>
              <FramedTag>The Best IT Services Company in Kigali, Rwanda</FramedTag>
            </div>
            <h1
              className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance text-white sm:text-5xl lg:text-[3.6rem]"
              data-reveal
              style={delay(80)}
            >
              Your technology partner for a <span className="text-gradient">smarter, more secure</span> business
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-400" data-reveal style={delay(160)}>
              From cloud and cybersecurity to repairs and digital skills training, Zeisnet keeps
              organisations across Rwanda running, protected and ready for what&apos;s next.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row" data-reveal style={delay(240)}>
              <Button href="/contact" size="lg">
                Get a free consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Button>
              <Button href="/services" variant="outline-dark" size="lg">
                Explore our services
              </Button>
            </div>

            {/* Stats strip */}
            <dl className="mt-6 grid w-full grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4" data-reveal style={delay(320)}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold text-white sm:text-3xl">{stat.value}</dd>
                  <dd className="mt-1 text-xs leading-snug text-slate-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div data-reveal style={delay(200)}>
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ============================ TRUST BAR =========================== */}
      <LogoMarquee />

      {/* ========================= SERVICES OVERVIEW ====================== */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Everything your business needs, <span className="text-gradient-dark">under one roof</span>
              </>
            }
            description="Six core practices, one accountable partner. No finger-pointing between vendors — just technology that works together."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10"
                data-reveal
                style={delay((i % 3) * 100)}
              >
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-200 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <span className="relative grid h-13 w-13 place-items-center rounded-2xl bg-brand-600 shadow-lg shadow-brand-600/25 transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-6 w-6 text-white" aria-hidden />
                </span>
                <h3 className="relative mt-6 font-display text-xl font-bold text-night-900">{service.title}</h3>
                <p className="relative mt-3 leading-relaxed text-slate-600">{service.description}</p>
                <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== WHY ZEISNET =========================== */}
      <section className="relative overflow-hidden bg-night-950 py-24 lg:py-32">
        <div className="bg-grid-dark absolute inset-0" aria-hidden />
        <div className="absolute right-[-15%] top-[-20%] h-[30rem] w-[30rem] rounded-full bg-brand-600/20 blur-3xl" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading
              tone="dark"
              align="left"
              eyebrow="Why choose Zeisnet"
              title={
                <>
                  Technology decisions you can <span className="text-gradient">actually trust</span>
                </>
              }
              description="We've built our reputation on straight answers, honest pricing and work that holds up. That's why businesses across Kigali keep coming back."
            />
            <div className="mt-10" data-reveal>
              <Button href="/contact" variant="outline-dark">
                Talk to an engineer
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {whyPoints.map((point, i) => (
              <div
                key={point.title}
                className="glass group rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:bg-white/[0.09]"
                data-reveal
                style={delay(i * 100)}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/20 text-accent-300">
                  <point.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{point.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== SOLUTIONS SHOWCASE ======================== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Technology solutions"
            title="Built end to end, managed with care"
            description="Three solution pillars that cover the full life of your technology — from first setup to daily protection to safe retirement."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {solutions.map((solution, i) => (
              <div
                key={solution.title}
                className="group flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10"
                data-reveal
                style={delay(i * 120)}
              >
                <span className="grid h-13 w-13 place-items-center rounded-2xl border border-brand-100 bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <solution.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-night-900">{solution.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate-600">{solution.description}</p>
                <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-6">
                  {solution.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-500" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CAPACITY BUILDING BAND ====================== */}
      <section className="relative overflow-hidden bg-brand-700 py-20 lg:py-24">
        <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden />
        <div className="absolute -bottom-24 right-[8%] hidden lg:block" aria-hidden>
          <Laptop className="h-72 w-72 rotate-[-8deg] text-white/10" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.4fr_auto]">
          <div className="max-w-2xl" data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              <GraduationCap className="h-4 w-4" aria-hidden />
              Capacity building
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
              Great technology needs great people. We train both.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-blue-100">
              30+ hands-on training modules — from Microsoft Office mastery to networking, hardware
              and creative tools — designed to lift your whole team&apos;s digital confidence.
            </p>
          </div>
          <div data-reveal style={delay(150)}>
            <Button href="/capacity-building" variant="secondary" size="lg">
              Explore training programs
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Button>
          </div>
        </div>
      </section>

      {/* ======================== PACKAGES PREVIEW ======================== */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Support packages"
            title="Predictable IT costs, four simple plans"
            description="Monthly support packages named after what they are: your champions, your guardians, your unshakeables."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Ingenzi", price: "10,000", note: "For individuals & home offices" },
              { name: "Inyamibwa", price: "20,000", note: "For small teams getting started" },
              { name: "Ingabo", price: "30,000", note: "Most popular for growing SMEs", featured: true },
              { name: "Indakangwa", price: "50,000", note: "For organisations that can't stop" },
            ].map((plan, i) => (
              <Link
                key={plan.name}
                href="/packages"
                className={`group relative flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                  plan.featured
                    ? "bg-night-950 text-white shadow-xl shadow-night-950/30"
                    : "border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-brand-600/10"
                }`}
                data-reveal
                style={delay(i * 90)}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-brand-500 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}
                <h3 className={`font-display text-lg font-bold ${plan.featured ? "text-white" : "text-night-900"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-xs ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>{plan.note}</p>
                <p className="mt-5">
                  <span className={`font-display text-3xl font-bold ${plan.featured ? "text-white" : "text-night-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`ml-1 text-sm ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>RWF/mo</span>
                </p>
                <span
                  className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
                    plan.featured ? "text-accent-300" : "text-brand-600"
                  }`}
                >
                  View details
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== TESTIMONIALS ========================== */}
      <section className="relative overflow-hidden bg-night-900 py-24 lg:py-32">
        <div className="bg-grid-dark absolute inset-0" aria-hidden />
        <div className="absolute left-[-10%] top-[30%] h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            tone="dark"
            eyebrow="Success stories"
            title="What our clients say"
            description="Real, 5-star reviews from the people and businesses we've helped — straight from our Google profile."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="glass flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40"
                data-reveal
                style={delay(i * 120)}
              >
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-accent-400" aria-hidden />
                  <div className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-5 flex-1 leading-relaxed text-slate-300">“{t.quote}”</blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-white/10 pt-6">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-full bg-brand-600 font-display text-sm font-bold text-white"
                    aria-hidden
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 flex justify-center" data-reveal>
            <Button href={site.googleReviewsUrl} newTab variant="outline-dark" size="lg">
              View more reviews on Google
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </Button>
          </div>
        </div>
      </section>

      {/* ============================ FINAL CTA =========================== */}
      <CtaSection />
    </>
  );
}
