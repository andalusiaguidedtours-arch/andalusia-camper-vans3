# Andalusia Camper Vans — Website

A complete, production-ready Next.js 14 website for a premium campervan rental company in southern Spain.

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript**
- **Tailwind CSS** with custom Andalusian colour palette
- **Google Fonts** — Cormorant Garamond (display) + Jost (body)
- Fully responsive, mobile-first

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Homepage with hero, features, fleet, road trips, FAQ preview, CTA |
| `/campers` | Full fleet listing with specs and pricing |
| `/road-trips` | Four curated Andalusia itineraries |
| `/seville` | SEO-optimised: campervan rental Seville |
| `/malaga` | SEO-optimised: campervan rental Málaga |
| `/andalusia` | SEO-optimised: campervan rental Andalusia |
| `/faq` | Full FAQ accordion |
| `/contact` | Booking request form |

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# → Open http://localhost:3000

# 3. Build for production
npm run build

# 4. Preview production build
npm start
```

## Deploy to Vercel

**Option A — CLI:**
```bash
npm i -g vercel
vercel
```

**Option B — GitHub:**
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. No environment variables required
5. Click **Deploy**

Vercel will auto-detect Next.js and configure everything correctly.

## Customisation Checklist

### Photography (replace placeholders)
- `src/app/page.tsx` — Hero background (campervan at golden hour)
- `src/app/seville/page.tsx` — Seville cityscape
- `src/app/malaga/page.tsx` — Málaga harbour
- `src/app/andalusia/page.tsx` — Andalusian landscape
- `src/app/road-trips/page.tsx` — One image per route (4 total)
- `src/components/CamperCard.tsx` — One photo per van (3 total)

**Recommended sources:** Unsplash (free), or commission a photographer in Seville/Málaga.

### Business Details (update throughout)
- Email: `hello@andalusiacampervans.com`
- Phone: `+34 600 000 000`
- Pickup hours, addresses
- Pricing per van

### Form Submission
The contact form at `/contact` currently logs to console. To make it functional:

**Option A — Formspree** (easiest, free tier available):
```tsx
// In src/app/contact/page.tsx — replace handleSubmit with:
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

**Option B — Next.js API Route + Resend/SendGrid:**
Create `src/app/api/contact/route.ts` and POST to it.

### SEO
- Update `openGraph.images` in `src/app/layout.tsx` with a real OG image
- Add `sitemap.xml` via `src/app/sitemap.ts` (Next.js built-in)
- Connect Google Search Console after deploying

## Colour Palette

| Name | Hex | Usage |
|------|-----|-------|
| `terra-600` | `#c94023` | CTAs, accents |
| `charcoal` | `#2c2a26` | Dark sections, text |
| `cream` | `#faf7f2` | Page background |
| `sand-*` | `#f9edd8 → #6a3a1b` | Cards, borders |
| `olive-*` | `#eaecdb → #353c23` | Secondary accents |

## Shared Data

All content (campervans, road trips, FAQs) lives in `src/lib/data.ts`. Edit this file to update content across all pages without touching individual page files.

---

Built for Andalusia Camper Vans © 2025
