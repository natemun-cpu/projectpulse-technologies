# ProjectPulse Technologies — AI Coding Agent Guide

## Project Overview
**ProjectPulse Technologies** is a Next.js 14 marketing & blog site for a software consulting/hosting services business. The site showcases custom software, automation, hosting tiers, and blog insights—deployed on Vercel.

**Key Audience**: Business decision-makers seeking software/hosting solutions.  
**Business Model**: Consultation bookings (via email CTA) + managed hosting tiers ($79–$399/mo).

---

## Architecture & Key Patterns

### Tech Stack
- **Framework**: Next.js 14 (App Router, Server Components by default)
- **Styling**: Tailwind CSS 3.4 + custom CSS globals for dark theme & animations
- **Animations**: Framer Motion 11.2.12
- **Deployment**: Vercel (domain: projectpulse.systems)

### Project Structure
```
app/                    # Next.js App Router routes (RSC by default)
├── layout.jsx          # Root layout: sticky header, footer, dark theme
├── page.jsx            # Homepage hero + CTA
├── blog/
│   ├── page.jsx        # Blog index (fetches posts from @/lib/posts-local)
│   └── [slug]/page.jsx # Dynamic blog post (generateStaticParams for SSG)
├── about/page.jsx      # Founder bio
├── contact/page.jsx    # Contact info
└── hosting/page.jsx    # Pricing tiers (inline data structure)

components/
└── blog/BlogCard.jsx   # Reusable blog post card with hover effects

lib/                    # (Planned for utility files—currently only posts-local.js imported but not in git)
```

### Critical Design Decisions

1. **Dark Theme + Gradient Hero**
   - Global CSS: `#0A0F1F` background, white text, gradient (`violet → pink → cyan`)
   - Applied to hero sections and accents; reflected in `.gradient-hero` and `.card-sheen` classes
   - Tailwind: `text-cyan-200/80`, `text-cyan-100/90` for hierarchy

2. **Blog as Static Content**
   - Posts sourced from `@/lib/posts-local` (a JS object or MDX metadata array)
   - `generateStaticParams()` in `[slug]/page.jsx` pre-renders all blog posts at build time
   - Each post has: `slug`, `title`, `excerpt`, `date`, `thumbnail`, `tags`, `component` (JSX)
   - **No database**: Static generation for speed & simplicity

3. **Server-Side Rendering by Default**
   - All pages are `async` components using `export default`
   - No `'use client'` directives → all components are RSC unless explicitly needed
   - Metadata exported at top of layout.jsx for SEO

4. **Pricing Tiers as Inline Data**
   - `hosting/page.jsx` defines pricing tiers directly in the component
   - No CMS/API: data is co-located with UI for rapid iteration

---

## Developer Workflow & Commands

### Setup & Development
```bash
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:3000)
npm run build           # Build for production (static + optimized)
npm start               # Run production build locally
```

### Deployment
1. **Git Push** to main branch on GitHub
2. **Vercel Auto-Deploy**: Repository linked to Vercel; pushes automatically deploy
3. **DNS**: Managed via Vercel DNS + Squarespace A records
4. **SSL**: Auto-provisioned by Vercel

### SSG & Caching
- Blog posts are pre-rendered at build time via `generateStaticParams()`
- No runtime data fetching from posts → instant page loads
- To add a blog post: update `lib/posts-local` export and rebuild

---

## Component & Styling Conventions

### Tailwind + Custom CSS
- **Responsive**: `sm:`, `md:`, `lg:` breakpoints used (e.g., `sm:grid-cols-2 lg:grid-cols-3`)
- **Opacity Hierarchy**: `text-cyan-200/80` (secondary), `text-cyan-100/90` (body)
- **Cards**: Always use `.card-sheen` for shadow/border consistency
- **Buttons**: White CTA = `bg-white text-violet-700 font-semibold`, secondary = `border border-white/20`

### BlogCard Component Pattern
- Each post card has:
  - Image with hover opacity transition
  - Title, date (formatted locale string), excerpt
  - Up to 3 tags (truncated)
  - Hover overlay gradient (violet + cyan blend)
- Import: `import BlogCard from "@/components/blog/BlogCard"`

### Layout Conventions
- Max width container: `max-w-6xl mx-auto px-6` (outer spacing)
- Section padding: `py-20` (vertical), `py-24` (hero sections)
- Typography centering: `text-center` for headers

---

## CTA & Business Logic

### Call-to-Action Destinations
- **Primary CTA**: Email button → `href="mailto:natemun@gmail.com"`
- **Blog CTA**: Links to `/blog` articles
- All "Book a Consultation" buttons → email link
- Footer: Email + "Office: Philadelphia, PA"

### Contact Information
- Email: `natemun@gmail.com`
- Title: Founder & CEO
- Business: ProjectPulse Technologies

---

## When Adding Features

1. **New Blog Post**: Add to `lib/posts-local` export with all post fields (slug, title, excerpt, date, thumbnail, tags, component)
2. **New Page**: Create `app/path/page.jsx` as async RSC; add to navigation in `app/layout.jsx`
3. **New Component**: Place in `components/` folder; follow BlogCard pattern for cards/reusable UI
4. **Styling New Features**: Use Tailwind first; if custom CSS needed, add to `app/globals.css` (avoid inline styles)
5. **Images**: Place in `public/` (referenced as `/path/to/image.png`)

---

## Build & Deployment Troubleshooting

- **Missing posts-local**: Ensure `lib/posts-local.js` exports an array with structure: `{ slug, title, excerpt, date, thumbnail, tags, component }`
- **Dynamic routes not working**: Check `generateStaticParams()` returns all slug values
- **Styles not applying**: Verify Tailwind content glob in `tailwind.config.js` includes file
- **Vercel deployment fails**: Check Node version (must support ES modules); ensure `npm run build` succeeds locally

---

## Quick Reference: Key Files

| File | Purpose |
|------|---------|
| `app/layout.jsx` | Global header, footer, metadata, dark theme |
| `app/page.jsx` | Homepage hero + main CTA |
| `app/blog/page.jsx` | Blog listing (imports posts) |
| `app/blog/[slug]/page.jsx` | Individual blog post + SSG config |
| `components/blog/BlogCard.jsx` | Reusable post card UI |
| `tailwind.config.js` | Tailwind content paths + plugins |
| `app/globals.css` | Dark theme, gradients, shadows |
| `next.config.js` | React Strict Mode, App Router enabled |
