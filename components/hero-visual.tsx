import Image from "next/image";
import { Cloud, ShieldCheck, Network, Code2, Lightbulb, Wrench } from "lucide-react";

/**
 * Dark "motherboard" hero visual. The Zeisnet mark is seated as the central
 * PROCESSOR chip in a socket; copper traces route out (PCB / Manhattan style)
 * to six capability "chips", with cyan data pulses flowing along them. Pure
 * CSS/SVG — no raster art.
 *
 * `MotherboardBackdrop` is the full-bleed dark PCB texture behind the whole
 * hero band; `HeroVisual` is the focused CPU cluster for the right column.
 */

const capabilities = [
  { icon: Code2, title: "Software Dev", note: "Web & business apps", color: "text-sky-300" },
  { icon: Lightbulb, title: "IT Consulting", note: "Roadmaps & audits", color: "text-amber-300" },
  { icon: Cloud, title: "Cloud & M365", note: "Deployed & managed", color: "text-cyan-300" },
  { icon: Network, title: "Networks", note: "99.9% uptime", color: "text-violet-300" },
  { icon: Wrench, title: "Repairs & Support", note: "Repair & upgrade", color: "text-rose-300" },
  { icon: ShieldCheck, title: "Security", note: "24/7 protected", color: "text-emerald-300" },
];

// Six chip anchor points around the CPU, clockwise from top.
const coords = [
  { x: 50, y: 12 },
  { x: 83, y: 31 },
  { x: 83, y: 69 },
  { x: 50, y: 88 },
  { x: 17, y: 69 },
  { x: 17, y: 31 },
];

// PCB-routed copper traces from the CPU edge to each chip (Manhattan bends).
const TRACES =
  "M50 38 V20 " +
  "M62 44 H74 V31 H80 " +
  "M62 56 H74 V69 H80 " +
  "M50 62 V80 " +
  "M38 56 H26 V69 H20 " +
  "M38 44 H26 V31 H20";

// Solder pads / vias sit where traces meet each chip.
const vias = [
  { x: 50, y: 20 },
  { x: 80, y: 31 },
  { x: 80, y: 69 },
  { x: 50, y: 80 },
  { x: 20, y: 69 },
  { x: 20, y: 31 },
];

/* ------------------------------------------------------------------ */
/*  Full-bleed dark PCB backdrop                                        */
/* ------------------------------------------------------------------ */

export function MotherboardBackdrop() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Board substrate: navy → indigo, echoing the reference render */}
      <div className="absolute inset-0 bg-[linear-gradient(150deg,#0a0f2e_0%,#0a1226_46%,#0b1122_100%)]" />

      {/* Etched circuit pattern tiled across the whole board */}
      <svg className="absolute inset-0 h-full w-full text-brand-400" fill="none" aria-hidden>
        <defs>
          <pattern id="pcb-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path
              d="M0 28 H56 M28 0 V56 M0 14 H14 V0 M42 56 V42 H56 M14 42 H0 M56 14 H42 V0"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeOpacity="0.13"
            />
            <circle cx="28" cy="28" r="1.6" fill="currentColor" fillOpacity="0.22" />
            <circle cx="14" cy="14" r="1.1" fill="#22d3ee" fillOpacity="0.22" />
            <circle cx="42" cy="42" r="1.1" fill="#22d3ee" fillOpacity="0.18" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pcb-grid)" />
      </svg>

      {/* Colour glows: violet top-left, cyan bottom-right, brand centre */}
      <div className="absolute -left-40 -top-24 h-[34rem] w-[34rem] rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-brand-600/15 blur-3xl" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CPU cluster centrepiece                                             */
/* ------------------------------------------------------------------ */

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem] select-none" aria-hidden>
      {/* Traces + pulses + socket, drawn in one 100×100 board space */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none">
        {/* CPU socket frame */}
        <rect
          x="34"
          y="34"
          width="32"
          height="32"
          rx="4"
          stroke="#22d3ee"
          strokeWidth="0.5"
          strokeOpacity="0.35"
          fill="#22d3ee"
          fillOpacity="0.04"
        />
        {/* pin-1 orientation marker */}
        <circle cx="37.5" cy="37.5" r="0.9" fill="#22d3ee" fillOpacity="0.7" />

        {/* Base copper traces */}
        <path d={TRACES} stroke="#3b6ef6" strokeWidth="0.9" strokeOpacity="0.45" strokeLinecap="round" strokeLinejoin="round" />
        {/* Flowing data pulses along the same routes */}
        <path
          d={TRACES}
          stroke="#67e8f9"
          strokeWidth="1.1"
          strokeOpacity="0.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2 7"
          className="animate-dash"
          style={{ filter: "drop-shadow(0 0 1.5px #22d3ee)" }}
        />

        {/* Solder pads where each trace lands */}
        {vias.map((v) => (
          <g key={`${v.x}-${v.y}`}>
            <circle cx={v.x} cy={v.y} r="1.9" fill="#0b1122" stroke="#22d3ee" strokeWidth="0.5" strokeOpacity="0.7" />
            <circle cx={v.x} cy={v.y} r="0.7" fill="#67e8f9" />
          </g>
        ))}
      </svg>

      {/* Capability chips at each trace endpoint */}
      {capabilities.map((cap, i) => (
        <div
          key={cap.title}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${coords[i].x}%`, top: `${coords[i].y}%` }}
        >
          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0c1530]/85 px-3 py-2.5 shadow-lg shadow-black/40 backdrop-blur-sm">
            <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-night-800 ring-1 ring-white/10 ${cap.color}`}>
              <cap.icon className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="whitespace-nowrap text-xs font-semibold text-white">{cap.title}</p>
              <p className="whitespace-nowrap text-[0.65rem] text-slate-400">{cap.note}</p>
            </div>
          </div>
        </div>
      ))}

      {/* The processor: Zeisnet mark as the CPU die, seated in the socket.
          `data-orbit-core` is the target the HeroIntro logo flies onto. */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid place-items-center">
          <div className="absolute -inset-5 -z-10 animate-pulse-ring rounded-[2rem] bg-cyan-400/25" />
          <div className="absolute -inset-3 -z-10 rounded-[1.75rem] bg-cyan-400/20 blur-xl" />
          <div
            data-orbit-core
            className="relative grid h-24 w-24 place-items-center rounded-3xl bg-white shadow-2xl shadow-cyan-500/30 ring-1 ring-slate-100 sm:h-28 sm:w-28"
          >
            <Image
              src="/zeisnet-mark.png"
              alt="Zeisnet logo"
              width={80}
              height={80}
              priority
              className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
