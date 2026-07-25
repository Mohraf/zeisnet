# Zeisnet Design System

Premium, modern IT-services design language for the Zeisnet website.
Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

---

## 1. Brand personality

| Attribute | Expression |
| --- | --- |
| Innovative | Electric blue→cyan gradients, orbiting network hero visual, glassmorphism |
| Trustworthy | Deep navy surfaces, generous whitespace, honest plain-language copy |
| Expert | Precise typography, structured bento layouts, blueprint grid textures |
| Future-focused | Micro-interactions, scroll reveals, dark/light section rhythm |

## 2. Color palette

Defined as Tailwind v4 `@theme` tokens in [app/globals.css](app/globals.css).

### Night (surfaces — dark sections, footer, featured cards)
| Token | Hex | Use |
| --- | --- | --- |
| `night-950` | `#050a16` | Primary dark background |
| `night-900` | `#0a1122` | Secondary dark background (testimonials) |
| `night-800` | `#0f1a33` | Elevated dark surfaces |
| `night-700` | `#16244a` | Dark borders/dividers |

### Brand (electric blue — primary actions & identity)
`brand-50 … brand-950`, core stops:
| Token | Hex | Use |
| --- | --- | --- |
| `brand-500` | `#3b6ef6` | Gradient start, icons |
| `brand-600` | `#2554eb` | Primary buttons, links, active states |
| `brand-700` | `#1d41d8` | Hover/active text on light |

### Accent (cyan — energy & highlights)
| Token | Hex | Use |
| --- | --- | --- |
| `accent-300` | `#67e8f9` | Text accents on dark |
| `accent-400` | `#22d3ee` | Gradient end, glows, dots |
| `accent-500` | `#06b6d4` | Checkmarks, icon accents on light |

### Neutrals & semantic
- Body text: `slate-600` (light bg) / `slate-400` (dark bg)
- Headings: `night-900` (light bg) / `white` (dark bg)
- Success: `emerald-500`; canvas: `white` / `slate-50`

### Signature gradients
- **CTA / identity:** `from-brand-600 to-accent-500` (135°)
- **Headline text:** `.text-gradient` (dark bg) / `.text-gradient-dark` (light bg)
- **Capacity band:** `from-brand-700 via-brand-600 to-accent-600`

Contrast: all body/heading combinations meet WCAG AA (slate-400 on night-950 ≈ 7.4:1; brand-600 on white ≈ 5.4:1).

## 3. Typography

Loaded via `next/font` in [app/layout.tsx](app/layout.tsx) — self-hosted, zero layout shift.

| Role | Font | Token | Usage |
| --- | --- | --- | --- |
| Display / headings | **Space Grotesk** | `font-display` | h1–h3, stats, wordmark, plan names |
| Body / UI | **Inter** | `font-sans` | Paragraphs, forms, navigation |

Scale (fluid via responsive variants):
- Hero h1: `text-4xl → text-[3.6rem]`, `leading-[1.05–1.08]`, bold, tracking-tight, `text-balance`
- Section h2: `text-3xl → text-[2.75rem]`
- Card h3: `text-lg–2xl` bold
- Body: `text-base–lg`, `leading-relaxed`
- Eyebrow: `text-xs`, semibold, `uppercase`, `tracking-[0.18em]`

## 4. Buttons ([components/ui/button.tsx](components/ui/button.tsx))

Pill-shaped (`rounded-full`), semibold, `active:scale-[0.98]`, visible focus ring.

| Variant | Look | Where |
| --- | --- | --- |
| `primary` | Brand gradient, blue glow shadow, brightens on hover | Main CTAs |
| `secondary` | White fill, dark text | CTAs on gradient/dark bands |
| `ghost` | Transparent, tint on hover | Tertiary / in-card actions |
| `outline-dark` | 1px white/25 border + blur | Secondary CTAs on dark |

Sizes: `sm` (px-4 py-2) · `md` (px-6 py-3) · `lg` (px-8 py-4). Icons slide (`translate-x`) on hover.

## 5. Cards

Shared DNA: `rounded-3xl`, generous `p-7/p-8`, `transition-all duration-300`, hover lift `-translate-y-1` + colored shadow `shadow-brand-600/10`.

| Component | Recipe |
| --- | --- |
| Light card | `border-slate-200 bg-white shadow-sm` + hover glow blob |
| Glass card (dark) | `.glass` = `border-white/10 bg-white/[0.06] backdrop-blur-xl` |
| Featured/pricing | `bg-night-950` + `ring-2 ring-brand-500` + floating badge |
| Bento tiles | 6-col grid, spans 2/3/4/6 (services page) |

## 6. Navigation ([components/navbar.tsx](components/navbar.tsx))

- Fixed; transparent over dark heroes → frosted white (`bg-white/85 backdrop-blur-xl` + border) after 12px scroll.
- Active link: gradient underline + `aria-current="page"`.
- Mobile: animated height-transition panel, closes on route change.
- Persistent "Get a free consultation" CTA.

## 7. Footer ([components/footer.tsx](components/footer.tsx))

`night-950` with blueprint grid + brand glow; 4 columns (brand+socials / company / services / contact); accent-cyan hover states.

## 8. Motion

All motion respects `prefers-reduced-motion` (disabled globally in CSS).

| Pattern | Implementation |
| --- | --- |
| Scroll reveal | `data-reveal` + IntersectionObserver ([components/reveal.tsx](components/reveal.tsx)); 24px rise + fade, staggered via `--reveal-delay` |
| Hover micro-interactions | Card lift, icon scale-110, arrow slide, gradient glow fade-in |
| Ambient | `animate-float` (glass chips), `animate-orbit` (hero nodes), `animate-pulse-ring` (hero core), `animate-marquee` (logo bar, pauses on hover), `animate-dash` (connection lines) |

Timing: 300ms UI transitions, 700ms reveals, `cubic-bezier(0.22,1,0.36,1)`.

## 9. Section rhythm & backgrounds

Alternating dark/light bands for visual contrast:
`dark hero → white trust bar → slate-50 → night-950 → white → gradient band → slate-50 → night-900 → night-950 CTA → footer`.

Textures: oversized `blur-3xl` gradient orbs provide depth on dark sections (the blueprint grid overlays were removed). The home hero fills the viewport (`lg:min-h-[100svh]`) and centres its content on desktop.

## 10. Reusable components

| Component | File | Purpose |
| --- | --- | --- |
| `Button` | `components/ui/button.tsx` | Polymorphic link/button, 4 variants × 3 sizes |
| `Badge` | `components/ui/badge.tsx` | Eyebrow chip, light/dark tones |
| `SectionHeading` | `components/ui/section-heading.tsx` | Eyebrow + title + description, center/left |
| `PageHero` | `components/page-hero.tsx` | Dark inner-page hero band |
| `CtaSection` | `components/cta-section.tsx` | Final conversion band, customizable copy |
| `Faq` | `components/faq.tsx` | Accessible accordion (grid-rows animation) |
| `ContactForm` | `components/contact-form.tsx` | Validated form with sending/sent states |
| `LogoMarquee` | `components/logo-marquee.tsx` | Infinite client wordmark scroll |
| `HeroVisual` | `components/hero-visual.tsx` | Animated orbit/network illustration |
| `Logo` | `components/logo.tsx` | Z-mark + wordmark, light/dark tones |
| `RevealObserver` | `components/reveal.tsx` | Global scroll-reveal driver |

## 11. Accessibility & performance

- Skip-to-content link; semantic landmarks (`header/nav/main/footer`); `aria-expanded`, `aria-current`, labelled icon links; decorative elements `aria-hidden`.
- AA contrast throughout; visible `focus-visible` rings on all interactive elements.
- No image payloads — visuals are CSS/SVG; fonts self-hosted via `next/font`; all pages statically rendered; only 4 small client components.
- SEO: per-page metadata + OpenGraph, single `h1` per page, descriptive titles.
