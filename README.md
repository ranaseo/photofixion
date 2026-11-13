# Photo Fixion website (Next.js 16, App Router)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure
- `app/page.tsx` home page; `app/services/[slug]/page.tsx` one static page per service; `app/contact/page.tsx`
- `lib/site.ts` brand facts, `lib/services.ts` service content, `lib/faqs.ts` FAQ content (edit copy here)
- `components/` Header, Footer, Logo, BeforeAfter slider, Faq, JsonLd

## SEO / AEO / AIO built in
- SEO: per-page title, description, canonical, Open Graph, `sitemap.xml`, `robots.txt`, web manifest, static HTML for every page, one H1 per page, internal links between services
- AEO: question-style headings with the direct answer first, FAQ sections (FAQPage schema), HowTo schema, turnaround table
- AIO: Organization / WebSite / ProfessionalService / Service / BreadcrumbList JSON-LD, AI crawlers allowed in `robots.txt`, `/llms.txt` and `/llms-full.txt` (generated from `lib/` data)

## Before launch
1. Add social profile URLs in `lib/site.ts`.
2. Add real prices where the turnaround table says `[ADD YOUR PRICES]`.
3. Replace the illustrated bag in `components/BeforeAfter.tsx` with real before/after photos (`next/image`).
4. Connect the contact form (`app/contact/page.tsx`) to a form handler: it has no backend yet.
5. Add 301 redirects from old URLs in `next.config.mjs` so existing rankings carry over.
6. Add an Open Graph share image (`app/opengraph-image.png`, 1200x630).
