import type { Metadata } from "next";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  FileSpreadsheet,
  Palette,
  Network,
  Cpu,
  TrendingUp,
  Users,
  Shield,
  Timer,
  Sparkles,
  GraduationCap,
  MonitorCheck,
  PenTool,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/page-hero";
import { HowItWorks } from "@/components/how-it-works";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, coursesJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "IT Training & Capacity Building in Kigali, Rwanda — Digital Skills for Teams",
  description:
    "Hands-on IT training in Kigali: 30+ modules covering Microsoft Office, Excel, Adobe Creative Suite, networking and hardware. On-site or online capacity building for organisations in Rwanda, East Africa and across Africa.",
  alternates: { canonical: "/capacity-building/" },
  openGraph: {
    title: "IT Training & Capacity Building in Kigali, Rwanda | Zeisnet",
    description:
      "30+ hands-on digital skills modules — Microsoft Office, Adobe, networking, hardware. Delivered on-site in Kigali or live online across Africa.",
    url: "/capacity-building/",
  },
};

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

const categories = [
  {
    icon: FileSpreadsheet,
    title: "Office productivity",
    blurb: "Master the tools your team uses every single day.",
    courses: [
      "Microsoft Word — beginner to advanced",
      "Microsoft Excel — introduction & formulas",
      "Microsoft PowerPoint — impactful presentations",
      "Accessibility features & best practices",
    ],
  },
  {
    icon: Palette,
    title: "Creative & design",
    blurb: "Produce professional visuals and publications in-house.",
    courses: [
      "Adobe Illustrator fundamentals",
      "Adobe Photoshop essentials",
      "Adobe InDesign for print & digital",
      "Design principles for non-designers",
    ],
  },
  {
    icon: Network,
    title: "Networking & internet",
    blurb: "Understand and manage the networks your business runs on.",
    courses: [
      "Networking fundamentals & protocols",
      "Internet technologies & ICT application areas",
      "Firewall configuration",
      "Network troubleshooting basics",
    ],
  },
  {
    icon: Cpu,
    title: "Hardware & systems",
    blurb: "Hands-on skills for the machines behind the work.",
    courses: [
      "Computer hardware assembly",
      "Windows 10 & Windows fundamentals",
      "Mac OS X introduction",
      "Solid-state drives & storage",
    ],
  },
];

const timeline = [
  {
    iconName: "assess",
    step: "01",
    title: "Skills assessment",
    description: "We map your team's current skill levels and identify the gaps that matter most to your goals.",
  },
  {
    iconName: "curriculum",
    step: "02",
    title: "Custom curriculum",
    description: "Modules are combined into a program tailored to your roles, industry and schedule.",
  },
  {
    iconName: "train",
    step: "03",
    title: "Hands-on training",
    description: "Practical, exercise-driven sessions — at your office, our lab, or live online.",
  },
  {
    iconName: "certify",
    step: "04",
    title: "Certify & follow up",
    description: "Participants earn completion certificates, and we check in after 30 days to reinforce learning.",
  },
];

const trainers = [
  {
    icon: MonitorCheck,
    title: "Microsoft technologies",
    description:
      "Certified trainers who administer M365, Azure AD and Windows environments daily — teaching from real projects, not slides.",
  },
  {
    icon: Server,
    title: "Networking & infrastructure",
    description:
      "Engineers who design and secure business networks across Kigali bring live scenarios into every session.",
  },
  {
    icon: PenTool,
    title: "Creative tools",
    description:
      "Practising designers who use the Adobe suite professionally show you the workflows that actually ship work.",
  },
];

const benefits = [
  { icon: TrendingUp, title: "Measurable productivity", description: "Teams complete everyday tasks faster and with fewer errors." },
  { icon: Users, title: "Team confidence", description: "Staff stop fearing technology and start using it to solve problems." },
  { icon: Shield, title: "Fewer security incidents", description: "Digitally literate teams spot phishing and risky behaviour early." },
  { icon: Timer, title: "Less downtime", description: "Basic troubleshooting skills in-house mean small issues stay small." },
  { icon: Sparkles, title: "Better work product", description: "Polished documents, presentations and visuals — made internally." },
  { icon: GraduationCap, title: "Career growth", description: "Certificates and skills your people carry through their careers." },
];

export default function CapacityBuildingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Capacity Building", path: "/capacity-building" },
        ])}
      />
      <JsonLd data={coursesJsonLd(categories)} />
      <PageHero
        eyebrow="Capacity building"
        title={
          <>
            Empowering people through <span className="text-gradient">technology skills</span>
          </>
        }
        description="Capacity building is how organisations survive and thrive in a fast-changing world. Our 30+ hands-on training modules strengthen the skills, instincts and confidence of your most important asset — your people."
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="/contact" size="lg">
            Register your team
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Button>
          <Button href="#programs" variant="secondary" size="lg">
            Browse programs
          </Button>
        </div>
      </PageHero>

      {/* ======================= TRAINING CATEGORIES ====================== */}
      <section id="programs" className="scroll-mt-20 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Training programs"
            title="Four tracks, thirty-plus modules"
            description="Mix and match modules across tracks to build the exact program your team needs — from complete beginners to power users."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {categories.map((cat, i) => (
              <article
                key={cat.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10"
                data-reveal
                style={delay((i % 2) * 100)}
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-13 w-13 place-items-center rounded-2xl bg-brand-600 shadow-lg shadow-brand-600/25 transition-transform duration-300 group-hover:scale-110">
                    <cat.icon className="h-6 w-6 text-white" aria-hidden />
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-bold text-night-900">{cat.title}</h2>
                    <p className="text-sm text-slate-500">{cat.blurb}</p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-2.5 border-t border-slate-100 pt-6">
                  {cat.courses.map((course) => (
                    <li key={course} className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-50">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden />
                      {course}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== LEARNING TIMELINE (sticky) ================== */}
      <HowItWorks
        eyebrow="How learning works"
        title="From skills gap to certificate in four steps"
        description="Every program is structured, measurable and built around your team's real work."
        background="bg-white"
        steps={timeline.map((phase) => ({
          n: phase.step,
          icon: phase.iconName,
          title: phase.title,
          description: phase.description,
        }))}
      />

      {/* ============================ TRAINERS ============================ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Your trainers"
            title="Taught by practitioners, not presenters"
            description="Every Zeisnet trainer works in the field they teach. You learn the way the work is really done."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {trainers.map((trainer, i) => (
              <div
                key={trainer.title}
                className="soft-card group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
                data-reveal
                style={delay(i * 110)}
              >
                <span className="grid h-13 w-13 place-items-center rounded-2xl border border-brand-100 bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <trainer.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-night-900">{trainer.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{trainer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ BENEFITS ============================ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Why invest in training"
            title="The returns show up everywhere"
            description="Organisations that train their teams see the difference in productivity, security and morale."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
                data-reveal
                style={delay((i % 3) * 90)}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 shadow-md shadow-brand-600/20">
                  <benefit.icon className="h-5 w-5 text-white" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-night-900">{benefit.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to level up your team?"
        description="Tell us your team size and goals — we'll design a training program and quote within two business days."
      />
    </>
  );
}
