import { ShieldCheck, Cloud, Network, Code2, TrendingUp, CheckCircle2, Rocket } from "lucide-react";

/**
 * Light "IT console" dashboard mockup for the home hero.
 * Pure CSS/SVG — no image payloads — styled to feel like a real product
 * screenshot: a monitoring panel with an uptime chart, live status rows and
 * a couple of gently floating notification chips.
 */

const statusRows = [
  { icon: Code2, label: "Custom software", value: "Deployed", tint: "text-violet-600 bg-violet-50" },
  { icon: ShieldCheck, label: "Security", value: "Protected", tint: "text-emerald-600 bg-emerald-50" },
  { icon: Cloud, label: "Microsoft 365", value: "Synced", tint: "text-brand-600 bg-brand-50" },
  { icon: Network, label: "Network", value: "Online", tint: "text-accent-600 bg-cyan-50" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[32rem] select-none" aria-hidden>
      {/* Soft ambient glow behind the card */}
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-brand-100/60 via-white to-cyan-100/50 blur-2xl" />

      {/* Main dashboard card */}
      <div className="soft-card overflow-hidden rounded-3xl">
        {/* Window header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="ml-2 text-xs font-semibold text-slate-400">Zeisnet Console</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[0.65rem] font-semibold text-emerald-600">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            All systems operational
          </span>
        </div>

        {/* Metric + chart */}
        <div className="px-5 pt-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500">Network uptime</p>
              <p className="mt-1 font-display text-3xl font-bold text-night-900">99.9%</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
              <TrendingUp className="h-3.5 w-3.5" />
              +2.4%
            </span>
          </div>

          <svg viewBox="0 0 300 96" className="mt-3 h-24 w-full" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2554eb" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#2554eb" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* area */}
            <path
              d="M0 74 C24 66 40 52 64 54 C92 56 104 34 132 36 C160 38 172 22 200 26 C228 30 244 14 268 18 L300 14 L300 96 L0 96 Z"
              fill="url(#heroArea)"
            />
            {/* line */}
            <path
              d="M0 74 C24 66 40 52 64 54 C92 56 104 34 132 36 C160 38 172 22 200 26 C228 30 244 14 268 18 L300 14"
              stroke="#2554eb"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* end node */}
            <circle cx="300" cy="14" r="4" fill="#2554eb" />
            <circle cx="300" cy="14" r="8" fill="#2554eb" opacity="0.15" />
          </svg>
        </div>

        {/* Status rows */}
        <div className="mt-2 divide-y divide-slate-100 px-5 pb-5">
          {statusRows.map((row) => (
            <div key={row.label} className="flex items-center justify-between py-3">
              <span className="flex items-center gap-3">
                <span className={`grid h-9 w-9 place-items-center rounded-xl ${row.tint}`}>
                  <row.icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm font-semibold text-night-900">{row.label}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating chip — top right */}
      <div className="soft-card animate-float absolute -right-4 top-10 flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 sm:-right-8">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">
          <ShieldCheck className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[0.7rem] font-bold leading-none text-night-900">1,204</p>
          <p className="mt-0.5 text-[0.6rem] font-medium text-slate-500">Threats blocked</p>
        </div>
      </div>

      {/* Floating toast — bottom left */}
      <div className="soft-card animate-float-slow absolute -left-4 bottom-8 flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 [animation-delay:1.2s] sm:-left-10">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-violet-500 text-white">
          <Rocket className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[0.7rem] font-bold leading-none text-night-900">Deployment live</p>
          <p className="mt-0.5 text-[0.6rem] font-medium text-slate-500">Build passed · just now</p>
        </div>
      </div>
    </div>
  );
}
