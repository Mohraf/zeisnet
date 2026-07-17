import Image from "next/image";
import { Cloud, ShieldCheck, Network, Code2, Lightbulb, Wrench } from "lucide-react";

/**
 * Floating capability cards — one per core service, arranged around the orbit.
 * Icon colour classes are kept as full literal strings so Tailwind emits them.
 */
const capabilities = [
  {
    icon: Lightbulb,
    title: "IT Consulting",
    note: "Roadmaps & audits",
    iconBg: "bg-brand-500/20",
    iconText: "text-brand-300",
    pos: "left-[-4%] top-[8%]",
    anim: "animate-float",
    delay: "",
  },
  {
    icon: Cloud,
    title: "Cloud & M365",
    note: "Deployed & managed",
    iconBg: "bg-accent-500/20",
    iconText: "text-accent-300",
    pos: "right-[-4%] top-[6%]",
    anim: "animate-float-slow",
    delay: "[animation-delay:1.2s]",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    note: "24/7 protected",
    iconBg: "bg-emerald-500/20",
    iconText: "text-emerald-300",
    pos: "left-[-9%] top-[43%]",
    anim: "animate-float-slow",
    delay: "[animation-delay:0.6s]",
  },
  {
    icon: Network,
    title: "Networks",
    note: "99.9% uptime",
    iconBg: "bg-violet-500/20",
    iconText: "text-violet-300",
    pos: "right-[-9%] top-[41%]",
    anim: "animate-float",
    delay: "[animation-delay:1.8s]",
  },
  {
    icon: Code2,
    title: "Software Dev",
    note: "Web & business apps",
    iconBg: "bg-sky-500/20",
    iconText: "text-sky-300",
    pos: "left-[0%] bottom-[10%]",
    anim: "animate-float",
    delay: "[animation-delay:2.4s]",
  },
  {
    icon: Wrench,
    title: "Repairs & Support",
    note: "Repair & upgrade",
    iconBg: "bg-rose-500/20",
    iconText: "text-rose-300",
    pos: "right-[2%] bottom-[8%]",
    anim: "animate-float-slow",
    delay: "[animation-delay:3s]",
  },
];

/**
 * Abstract "connected infrastructure" visual for the home hero:
 * an orbiting node system with floating glass capability cards.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem] select-none" aria-hidden>
      {/* Concentric orbit rings */}
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-[12%] rounded-full border border-white/10" />
      <div className="absolute inset-[26%] rounded-full border border-dashed border-white/15" />

      {/* Pulsing core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 animate-pulse-ring rounded-3xl bg-brand-500/40" />
        <div className="relative grid h-28 w-28 place-items-center rounded-3xl bg-white shadow-2xl shadow-brand-600/50 ring-1 ring-white/60">
          <Image
            src="/zeisnet-mark.png"
            alt="Zeisnet logo"
            width={80}
            height={80}
            priority
            className="h-16 w-16 object-contain"
          />
        </div>
      </div>

      {/* Orbiting satellite nodes */}
      <div className="absolute inset-[12%] animate-orbit">
        <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-400 shadow-lg shadow-accent-400/50" />
        <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-400 shadow-lg shadow-brand-400/50" />
        <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70" />
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none">
        <path
          d="M50 50 L16 16 M50 50 L84 14 M50 50 L12 48 M50 50 L88 46 M50 50 L18 82 M50 50 L82 84"
          stroke="#3b6ef6"
          strokeWidth="0.35"
          strokeDasharray="3 3"
          className="animate-dash"
        />
      </svg>

      {/* Floating glass capability cards — one per core service */}
      {capabilities.map((cap) => (
        <div
          key={cap.title}
          className={`glass absolute flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl shadow-black/30 ${cap.pos} ${cap.anim} ${cap.delay}`}
        >
          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${cap.iconBg}`}>
            <cap.icon className={`h-4.5 w-4.5 ${cap.iconText}`} />
          </span>
          <div>
            <p className="whitespace-nowrap text-xs font-semibold text-white">{cap.title}</p>
            <p className="whitespace-nowrap text-[0.65rem] text-slate-400">{cap.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
