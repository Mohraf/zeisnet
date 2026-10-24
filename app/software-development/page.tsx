import type { Metadata } from "next";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  LayoutDashboard,
  Smartphone,
  Workflow,
  Rocket,
  BarChart3,
  Users,
  Boxes,
  CalendarCheck,
  ClipboardCheck,
  FileSpreadsheet,
  GitBranch,
  BookOpen,
  ShieldCheck,
  Bug,
  Layers,
  Server,
  KeyRound,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/page-hero";
import { HowItWorks } from "@/components/how-it-works";
import { CtaSection } from "@/components/cta-section";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, softwareServiceJsonLd, faqJsonLd, pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Software Development in Mombasa, Kenya — Custom Web, Mobile & Business Apps",
  description:
    "Custom software development in Mombasa, Kenya. Web applications and business systems, mobile apps, API integrations and automation, and MVP product engineering — built, launched and maintained by Zeisnet's in-house team for clients in Kenya, East Africa and worldwide.",
  alternates: pageAlternates("/software-development/"),
  openGraph: {
    title: "Custom Software Development in Mombasa, Kenya | Zeisnet Kenya",
    description:
      "Web applications, business systems, mobile apps, integrations and MVP builds — designed, built and maintained by Zeisnet engineers in Kenya.",
    url: "/software-development/",
  },
};

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Capability = {
  id: string;
  icon: typeof LayoutDashboard;
  title: string;
  description: string;
  points: string[];
  span: string;
  accent: string;
};

const capabilities: Capability[] = [
  {
    id: "web-apps",
    icon: LayoutDashboard,
    title: "Web Apps & Business Systems",
    description:
      "The systems your operation actually runs on, built around your process instead of forcing your process into someone else's product. Dashboards, portals, records and reporting — accessible from any browser, on any device.",
    points: [
      "Operations & management dashboards",
      "Client, member and staff portals",
      "Inventory, records & reporting systems",
      "Role-based access and audit trails",
    ],
    span: "lg:col-span-4",
    accent: "bg-brand-500",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Android and iOS apps built for real conditions: modest devices and connections that come and go.",
    points: ["Android & iOS from one codebase", "Offline-first data capture", "Store submission & releases"],
    span: "lg:col-span-2",
    accent: "bg-teal-500",
  },
  {
    id: "integrations",
    icon: Workflow,
    title: "Integrations & Automation",
    description:
      "We connect the tools you already pay for and automate the manual steps between them.",
    points: ["API & third-party integrations", "Microsoft 365 & business tools", "Scheduled reports & data pipelines"],
    span: "lg:col-span-2",
    accent: "bg-purple-500",
  },
  {
    id: "product-engineering",
    icon: Rocket,
    title: "Product & MVP Engineering",
    description:
      "For a new digital product or service: a focused build that puts a working version in front of real users early, then improves it with what you learn — rather than spending a year guessing.",
    points: [
      "Discovery & scoping workshops",
      "Clickable prototypes before code",
      "MVP build and launch",
      "Iteration on real-world feedback",
    ],
    span: "lg:col-span-4",
    accent: "bg-orange-500",
  },
];

const examples = [
  {
    icon: BarChart3,
    title: "Operations dashboards",
    description: "One screen for the numbers leadership keeps asking for, pulled from the systems that already hold them.",
  },
  {
    icon: Users,
    title: "Client & member portals",
    description: "Self-service accounts, applications, documents and status tracking. Fewer emails, less phone traffic.",
  },
  {
    icon: Boxes,
    title: "Inventory & stock systems",
    description: "Stock levels, movements and reorder points tracked in one place instead of across a dozen spreadsheets.",
  },
  {
    icon: CalendarCheck,
    title: "Booking & scheduling",
    description: "Appointments, resources and staff rosters in one calendar, with reminders that go out on their own.",
  },
  {
    icon: ClipboardCheck,
    title: "Field data collection",
    description: "Mobile forms that keep working offline and sync the moment the connection returns.",
  },
  {
    icon: FileSpreadsheet,
    title: "Reporting automation",
    description: "The monthly report that takes someone three days, produced correctly in seconds.",
  },
];

const process = [
  {
    iconName: "consult",
    step: "01",
    title: "Discover",
    description:
      "We start with your process, not our tooling. A short discovery to understand the work, the people doing it and what better actually means for you.",
    points: ["Free first consultation", "Written scope"],
  },
  {
    iconName: "design",
    step: "02",
    title: "Design",
    description:
      "Wireframes and a clickable prototype you can try before a line of production code exists, so changes cost minutes instead of weeks.",
    points: ["Clickable prototype", "Sign-off before build"],
  },
  {
    iconName: "build",
    step: "03",
    title: "Build",
    description:
      "Short, visible cycles. You see working software regularly and can steer it, instead of waiting months for one big reveal.",
    points: ["Regular demos", "Code you own"],
  },
  {
    iconName: "launch",
    step: "04",
    title: "Launch",
    description:
      "Deployment, data migration and training for the people who will use it daily — with our own engineers handling hosting, backups and security.",
    points: ["Data migration", "Team training"],
  },
  {
    iconName: "iterate",
    step: "05",
    title: "Support & iterate",
    description:
      "Software is never finished at launch. We fix, improve and extend it as your business changes, so it keeps earning its keep.",
    points: ["Fixes & updates", "Ongoing improvements"],
  },
];

const practices = [
  {
    icon: GitBranch,
    title: "Version control & review",
    description: "Every change tracked in Git and reviewed before it ships. Nothing goes live because one person said it looked fine.",
  },
  {
    icon: Bug,
    title: "Tested before release",
    description: "Changes are exercised against real scenarios in a staging environment before they ever touch your live data.",
  },
  {
    icon: ShieldCheck,
    title: "Security from the start",
    description: "Authentication, role-based permissions and encrypted data by default, reviewed by the same team that hardens client networks.",
  },
  {
    icon: Layers,
    title: "Built to be maintained",
    description: "Clear structure and current frameworks, with none of the clever tricks only the original developer can read.",
  },
  {
    icon: BookOpen,
    title: "Documented handover",
    description: "You receive the repository, the credentials and documentation written for whoever maintains it next — including someone who isn't us.",
  },
  {
    icon: Server,
    title: "Hosted & monitored",
    description: "Deployed on infrastructure we manage and watch, with backups, uptime checks and a real person to call.",
  },
];

const differentiators = [
  {
    icon: Server,
    title: "We run the infrastructure too",
    description:
      "Your application, its hosting, its network and its backups from one accountable team. No finger-pointing between a developer and whoever does your IT.",
  },
  {
    icon: KeyRound,
    title: "You own what we build",
    description:
      "The code, the repository, the accounts and the intellectual property are yours from day one. No lock-in and no hostage situations.",
  },
  {
    icon: MapPin,
    title: "A local team you can sit with",
    description:
      "Engineers based in Kenya who can work in the same room and the same timezone as you, and support clients remotely worldwide.",
  },
  {
    icon: GraduationCap,
    title: "We train the people who use it",
    description:
      "Our capacity-building trainers make sure your team can actually use what we deliver. Adoption is part of the project, not an afterthought.",
  },
];

const faqs = [
  {
    question: "Do you build custom software in Mombasa, Kenya?",
    answer:
      "Yes. Software development is a core Zeisnet practice, delivered by our in-house team at ECB Centre on Moi Avenue, Mombasa. We build web applications, business systems, mobile apps and integrations for organisations across Mombasa and Kenya, and work remotely with clients in East Africa and further afield.",
  },
  {
    question: "How much does custom software cost in Kenya?",
    answer:
      "Every project is different, so we quote after scoping rather than from a price list. The first consultation is free, you get a fixed written quote before any billable work starts, and larger systems can be delivered in phases so you can start small and expand once the first phase is proving its value.",
  },
  {
    question: "How long does a software project take?",
    answer:
      "It depends entirely on scope. A focused internal tool or a first MVP is usually a matter of weeks; a larger system replacing several existing processes is phased over months. You receive a realistic timeline together with the written scope after discovery, and you see working software throughout rather than only at the end.",
  },
  {
    question: "Do we own the source code?",
    answer:
      "Yes. The source code, repository, hosting accounts and intellectual property belong to you, and we hand over documentation written so that any competent developer — not only Zeisnet — can maintain the system. We would rather earn your ongoing support work than lock you into it.",
  },
  {
    question: "Can you take over software another developer built?",
    answer:
      "Often, yes. We start with a review of the existing code, data and hosting, then tell you honestly whether it is best maintained, refactored or rebuilt. Plenty of our work begins as a rescue of a system whose original developer has moved on.",
  },
  {
    question: "Do you build mobile apps as well as web applications?",
    answer:
      "Yes. We build Android and iOS apps from a shared codebase, with offline-first data capture for teams working where connectivity is unreliable, and we handle app store submission and release management for you.",
  },
  {
    question: "Can new software integrate with the systems we already use?",
    answer:
      "That is usually the point. We integrate with Microsoft 365, accounting and business tools, and third-party services over their APIs, and we automate the manual copying between systems that quietly consumes your team's week.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Software Development", path: "/software-development" },
        ])}
      />
      <JsonLd
        data={softwareServiceJsonLd(
          capabilities.map(({ id, title, description }) => ({ id, title, description })),
        )}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <PageHero
        eyebrow="Software development"
        title={
          <>
            Software built around <span className="text-gradient">the way you actually work</span>
          </>
        }
        description="We design, build and maintain custom web applications, mobile apps and integrations for organisations in Kenya and beyond. Software is now at the centre of what Zeisnet does — delivered by the same engineers who secure and support the infrastructure it runs on."
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="/contact" size="lg">
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Button>
          <Button href="#capabilities" variant="secondary" size="lg">
            See what we build
          </Button>
        </div>
      </PageHero>

      {/* ========================= CAPABILITIES =========================== */}
      <section id="capabilities" className="scroll-mt-20 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Four ways we put software to work"
            description="From the internal system that runs your day to the product you take to market — scoped, built and supported end to end."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-6">
            {capabilities.map((capability, i) => (
              <article
                id={capability.id}
                key={capability.id}
                className={`group relative flex scroll-mt-24 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10 ${capability.span}`}
                data-reveal
                style={delay((i % 3) * 90)}
              >
                <div
                  className={`absolute -right-12 -top-12 h-40 w-40 rounded-full ${capability.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
                  aria-hidden
                />
                <span
                  className={`relative grid h-13 w-13 place-items-center rounded-2xl ${capability.accent} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <capability.icon className="h-6 w-6 text-white" aria-hidden />
                </span>
                <h2 className="relative mt-6 font-display text-2xl font-bold text-night-900">{capability.title}</h2>
                <p className="relative mt-3 max-w-2xl leading-relaxed text-slate-600">{capability.description}</p>
                <ul className="relative mt-6 flex flex-1 flex-col gap-2.5">
                  {capability.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-500" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-8">
                  <Button
                    href="/contact"
                    variant="ghost"
                    size="sm"
                    className="-ml-3 text-brand-600 hover:bg-brand-50 hover:text-brand-700"
                  >
                    Discuss your project
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== EXAMPLES / USE CASES ====================== */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute left-1/3 top-[-30%] h-96 w-96 rounded-full bg-brand-200/30 blur-3xl" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Typical projects"
            title="The kind of thing businesses ask us to build"
            description="Most projects start with a spreadsheet that outgrew itself, or a process held together by someone's memory. These are the shapes they usually take."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map((example, i) => (
              <div
                key={example.title}
                className="soft-card group rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                data-reveal
                style={delay((i % 3) * 90)}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <example.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-night-900">{example.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{example.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-slate-500" data-reveal>
            Something else in mind?{" "}
            <a href="/contact" className="font-semibold text-brand-600 underline-offset-4 hover:underline">
              Describe it to us and we&apos;ll tell you what it takes →
            </a>
          </p>
        </div>
      </section>

      {/* ==================== DELIVERY PROCESS (sticky) =================== */}
      <HowItWorks
        eyebrow="How we build"
        title="Five steps from idea to software in daily use"
        description="No black box. You see the scope, the prototype and the working software at every stage, and you can change direction while it is still cheap to do so."
        steps={process.map((phase) => ({
          n: phase.step,
          icon: phase.iconName,
          title: phase.title,
          description: phase.description,
          points: phase.points,
        }))}
      />

      {/* ====================== ENGINEERING PRACTICES ===================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="Built properly, so it lasts longer than the project"
            description="Custom software is only a saving if it can still be changed in three years. These are the habits that make that possible."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practices.map((practice, i) => (
              <div
                key={practice.title}
                className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
                data-reveal
                style={delay((i % 3) * 90)}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 shadow-md shadow-brand-600/20">
                  <practice.icon className="h-5 w-5 text-white" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-night-900">{practice.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{practice.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== WHY ZEISNET =========================== */}
      <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
        <div className="absolute right-[-15%] top-[-20%] h-[30rem] w-[30rem] rounded-full bg-cyan-200/30 blur-3xl" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Zeisnet"
              title={
                <>
                  A software partner that <span className="text-gradient">stays after launch</span>
                </>
              }
              description="Plenty of teams can write you an application. Fewer will host it, secure it, train your staff on it and still answer the phone two years later. That is the part we have been doing all along."
            />
            <div className="mt-10 flex flex-col gap-4 sm:flex-row" data-reveal>
              <Button href="/contact">
                Talk to an engineer
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Button>
              <Button href="/capacity-building" variant="secondary">
                Training for your team
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </Button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {differentiators.map((item, i) => (
              <div
                key={item.title}
                className="soft-card group rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                data-reveal
                style={delay(i * 100)}
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

      {/* ============================== FAQ =============================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Questions"
            title="Software development in Kenya — FAQs"
            description="What organisations ask us most before starting a build."
          />
          <div className="mt-12" data-reveal>
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <CtaSection
        title="Have a process that should be software?"
        description="Tell us what the work looks like today and where it breaks down. We'll come back with a scope, a timeline and a fixed quote — the first conversation is free."
      />
    </>
  );
}
