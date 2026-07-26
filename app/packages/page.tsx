import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ArrowRight, Check, Minus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, packagesJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "IT Support Packages & Pricing in Rwanda — From 10,000 RWF/Month",
  description:
    "Affordable monthly IT support packages in Kigali, Rwanda: Ingenzi (10,000 RWF), Inyamibwa (20,000 RWF), Ingabo (30,000 RWF) and Indakangwa (50,000 RWF). Priority support, on-site visits, no lock-in contracts.",
  alternates: { canonical: "/packages/" },
  openGraph: {
    title: "IT Support Packages & Pricing in Rwanda | Zeisnet",
    description:
      "Four monthly IT support plans from 10,000 RWF — remote support, on-site visits, monitoring and Microsoft 365 administration. Month to month, no lock-in.",
    url: "/packages/",
  },
};

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

const plans = [
  {
    name: "Ingenzi",
    meaning: "The Champion",
    price: "10,000",
    audience: "Individuals & home offices",
    featured: false,
    features: [
      "1 covered device",
      "Remote support (business hours)",
      "Quarterly performance tune-up",
      "Email & WhatsApp support",
      "5% off repairs & upgrades",
    ],
  },
  {
    name: "Inyamibwa",
    meaning: "The Graceful",
    price: "20,000",
    audience: "Small teams getting started",
    featured: false,
    features: [
      "Up to 3 covered devices",
      "Priority remote support",
      "Monthly device health check",
      "Antivirus & update monitoring",
      "10% off repairs & upgrades",
    ],
  },
  {
    name: "Ingabo",
    meaning: "The Shield",
    price: "30,000",
    audience: "Growing SMEs",
    featured: true,
    features: [
      "Up to 8 covered devices",
      "Same-day on-site support (Kigali)",
      "Network & backup monitoring",
      "Microsoft 365 admin support",
      "15% off repairs & training",
    ],
  },
  {
    name: "Indakangwa",
    meaning: "The Fearless",
    price: "50,000",
    audience: "Organisations that can't stop",
    featured: false,
    features: [
      "Up to 20 covered devices",
      "24/7 emergency support line",
      "Dedicated account engineer",
      "Full security monitoring suite",
      "Quarterly IT strategy review",
    ],
  },
];

const comparison: { feature: string; values: (boolean | string)[] }[] = [
  { feature: "Covered devices", values: ["1", "3", "8", "20"] },
  { feature: "Remote support", values: ["Business hours", "Priority", "Priority", "24/7"] },
  { feature: "On-site visits (Kigali)", values: [false, "On request", "Same-day", "Same-day"] },
  { feature: "Device health checks", values: ["Quarterly", "Monthly", "Monthly", "Weekly"] },
  { feature: "Antivirus & update monitoring", values: [false, true, true, true] },
  { feature: "Network & backup monitoring", values: [false, false, true, true] },
  { feature: "Microsoft 365 admin support", values: [false, false, true, true] },
  { feature: "Dedicated account engineer", values: [false, false, false, true] },
  { feature: "Quarterly strategy review", values: [false, false, false, true] },
  { feature: "Discount on repairs & training", values: ["5%", "10%", "15%", "20%"] },
];

const faqs = [
  {
    question: "Can I change my package later?",
    answer:
      "Yes — upgrade or downgrade at any month-end with no penalty. Most clients start with Inyamibwa or Ingabo and adjust once they see their real usage.",
  },
  {
    question: "What counts as a covered device?",
    answer:
      "Any laptop, desktop or projector registered under your plan. Servers and network equipment are covered from the Ingabo plan upward.",
  },
  {
    question: "Is there a contract or minimum term?",
    answer:
      "Packages run month to month. We earn your renewal with our service, not with lock-in clauses.",
  },
  {
    question: "What if I need something outside my package?",
    answer:
      "You simply pay the standard rate minus your package discount. We'll always quote before doing any billable work.",
  },
  {
    question: "Do you support organisations outside Kigali?",
    answer:
      "Remote support works anywhere in Rwanda. On-site visits outside Kigali are arranged case by case with transparent travel costs.",
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-emerald-500" aria-label="Included" />;
  if (value === false) return <Minus className="mx-auto h-5 w-5 text-slate-300" aria-label="Not included" />;
  return <span className="text-sm font-medium text-slate-700">{value}</span>;
}

export default function PackagesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Packages", path: "/packages" },
        ])}
      />
      <JsonLd data={packagesJsonLd(plans)} />
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHero
        eyebrow="Our packages"
        title={
          <>
            Predictable IT support, <span className="text-gradient">priced for Rwanda</span>
          </>
        }
        description="Four monthly plans named after the qualities they bring to your business. Champion, graceful, shield, fearless. No hidden fees, no long contracts, cancel any month."
      />

      {/* ========================== PRICING CARDS ========================= */}
      <section className="bg-slate-50 pb-12 pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                  plan.featured
                    ? "bg-night-950 text-white shadow-2xl shadow-night-950/40 ring-2 ring-brand-500 xl:-mt-4 xl:mb-[-1rem]"
                    : "border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-brand-600/10"
                }`}
                data-reveal
                style={delay(i * 90)}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    Recommended
                  </span>
                )}

                <h2 className={`font-display text-2xl font-bold ${plan.featured ? "text-white" : "text-night-900"}`}>
                  {plan.name}
                </h2>
                <p className={`mt-0.5 text-sm italic ${plan.featured ? "text-accent-300" : "text-brand-600"}`}>
                  “{plan.meaning}”
                </p>
                <p className={`mt-3 text-sm ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>{plan.audience}</p>

                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className={`font-display text-4xl font-bold ${plan.featured ? "text-white" : "text-night-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>RWF / month</span>
                </p>

                <ul className={`mt-7 flex-1 space-y-3 border-t pt-7 ${plan.featured ? "border-white/10" : "border-slate-100"}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-accent-400" : "text-emerald-500"}`}
                        aria-hidden
                      />
                      <span className={plan.featured ? "text-slate-300" : "text-slate-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="/contact"
                    variant={plan.featured ? "primary" : "ghost"}
                    className={plan.featured ? "w-full" : "w-full border border-slate-200"}
                  >
                    Choose {plan.name}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-slate-500" data-reveal>
            All prices in Rwandan Francs (RWF), billed monthly. Need more than 20 devices?{" "}
            <a href="/contact" className="font-semibold text-brand-600 underline-offset-4 hover:underline">
              Ask about enterprise plans →
            </a>
          </p>
        </div>
      </section>

      {/* ======================== COMPARISON TABLE ======================== */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Compare plans"
            title="Every plan, side by side"
            description="A transparent look at exactly what each package includes so you can decide in minutes."
          />

          <div className="mt-14 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm" data-reveal>
            <table className="w-full min-w-[44rem] border-collapse text-left">
              <caption className="sr-only">Package feature comparison</caption>
              <thead>
                <tr className="border-b border-slate-200">
                  <th scope="col" className="px-6 py-5 text-sm font-semibold text-slate-500">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.name} scope="col" className="px-4 py-5 text-center">
                      <span
                        className={`font-display text-base font-bold ${
                          plan.featured ? "text-brand-600" : "text-night-900"
                        }`}
                      >
                        {plan.name}
                      </span>
                      <span className="block text-xs font-normal text-slate-500">{plan.price} RWF/mo</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-slate-50/60" : "bg-white"}>
                    <th scope="row" className="px-6 py-4 text-sm font-medium text-slate-700">
                      {row.feature}
                    </th>
                    {row.values.map((value, j) => (
                      <td
                        key={j}
                        className={`px-4 py-4 text-center ${plans[j].featured ? "bg-brand-50/50" : ""}`}
                      >
                        <CellValue value={value} />
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="px-6 py-5" />
                  {plans.map((plan) => (
                    <td key={plan.name} className={`px-4 py-5 text-center ${plan.featured ? "bg-brand-50/50" : ""}`}>
                      <Button href="/contact" size="sm" variant={plan.featured ? "primary" : "ghost"} className={plan.featured ? "" : "border border-slate-200"}>
                        Choose
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================== FAQ =============================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Questions"
            title="Package FAQs"
            description="The details people usually ask about before choosing a plan."
          />
          <div className="mt-12" data-reveal>
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <CtaSection
        title="Still deciding? Let's pick together."
        description="Tell us how many devices you run and what keeps you up at night — we'll recommend the right plan in one short call. No pressure, no obligation."
      />
    </>
  );
}
