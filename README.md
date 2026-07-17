# Zeisnet Website

Premium redesign of [zeisnet.com](https://zeisnet.com) — IT services & technology solutions, Kigali, Rwanda.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · lucide-react

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → out/ (upload to cPanel public_html)
```

Hosting: the site is a fully static export — see [DEPLOYMENT.md](DEPLOYMENT.md) for cPanel instructions.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, trust bar, services, why-us, solutions, capacity band, packages preview, testimonials, CTA |
| `/services` | Services — bento grid of 7 practices, specialist strip, 4-step process |
| `/capacity-building` | Training — 4 tracks / 30+ modules, learning timeline, trainers, benefits |
| `/packages` | Pricing — 4 plans (Ingenzi → Indakangwa), comparison table, FAQs |
| `/contact` | Contact — channel cards, form, map, socials, FAQs |

See [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) for the full design language (colors, type, components, motion).

## Notes

- Testimonials, client wordmarks and package feature tiers are **placeholder content** — replace with real client data before launch.
- The contact form simulates submission — wire it to an API route / CRM in `components/contact-form.tsx`.
