# NAIS Dubai — Official School Website

**North American International School, Dubai**  
A premier American curriculum school serving KG–Grade 12 students.

---

## 🌐 Project Overview

Full multi-page static website for NAIS Dubai featuring an animated intro, hero carousel, API-integrated contact forms, interactive campus tour, testimonials slider, gallery lightbox, phase 4 academic results with Chart.js visualisations, and comprehensive legal pages.

**Live URL:** Deploy via the Publish tab.

---

## ✅ Completed Features

### Core Pages (13 pages)

| Page | File | Description |
|------|------|-------------|
| Homepage | `index.html` | Full hero, all sections, mobile CTA, intro overlay |
| About | `about.html` | Leadership, mission, CARE values, accreditation |
| Academics | `academics.html` | KG–Grade 12 programs, AP courses, filmstrip |
| Admissions | `admissions.html` | Application form, fees, FAQs, process steps |
| American Curriculum | `curriculum.html` | Grading, assessments, learning pathways |
| Project-Based Learning | `pbl.html` | PBL philosophy, projects, outcomes |
| Parent FAQ | `parent-faq.html` | Searchable FAQ with category tabs |
| Photo Gallery | `gallery.html` | Hero carousel, category filter, lightbox |
| Phase 4 Results | `phase4-results.html` | MAP, PSAT, AP, SAT, IELTS data with Chart.js |
| Privacy Policy | `privacy-policy.html` | Full privacy policy (KHDA / UAE compliant) |
| Terms of Use | `terms-of-use.html` | Website terms and conditions |
| Safeguarding | `safeguarding.html` | Child safeguarding policy (DSL contact included) |
| Sitemap | `sitemap.html` | Visual sitemap with all page links |

### Interactive Features
- ✅ **Animated intro overlay** — canvas slideshow with school photos, runs once per session (sessionStorage)
- ✅ **Hero slideshow** — 6s auto-advance, dot navigation, parallax on desktop
- ✅ **Hero counters** — animated number counting on scroll reveal (900+, 60+, 45+, 20+)
- ✅ **Full stats counters** — IntersectionObserver triggered, 2.2s ease-out animation
- ✅ **Testimonials slider** — auto-rotate 5.5s, prev/next, dot nav, touch-swipe support
- ✅ **360° Campus Tour tabs** — Main Entrance, KG Playground, Sports Field
- ✅ **Contact form** — validation + Table API submission (`contact_submissions`)
- ✅ **Hero mini form** — lead capture with Table API submission
- ✅ **Admissions form** — field validation + Table API submission
- ✅ **FAQ accordion** — smooth open/close on all FAQ pages
- ✅ **Video lightbox** — play button opens overlay; `vl-close-btn`, backdrop click, and Escape key all close it properly (inline `onclick` removed)
- ✅ **Mobile sticky CTA bar** — Call / WhatsApp / Apply / Book Tour (hidden ≥1200px, slides up via IntersectionObserver)
- ✅ **Back-to-top button** — appears after 400px scroll
- ✅ **Floating Apply + WhatsApp buttons** — persistent on desktop, repositioned above mobile CTA
- ✅ **Scroll-reveal animations** — IntersectionObserver fade-up on all sections
- ✅ **Stagger children animation** — grid children animate in sequence with 80ms delay
- ✅ **Gallery lightbox** — keyboard nav, swipe, touch support
- ✅ **Gallery category filter** — fade/slide animation
- ✅ **Announcement band** — auto-hides after 300px scroll
- ✅ **Quick-links active section** — highlights current section in quick-links bar
- ✅ **Active nav page highlight** — marks current page in nav overlay
- ✅ **Quick-access card ripple** — click ripple effect
- ✅ **Nav accordion (mobile)** — primary and sub-item toggle, single-open
- ✅ **Navigation search** — redirects to `index.html?search=term`
- ✅ **Image lazy-load fade-in** — smooth opacity transition on image load
- ✅ **Image fallback system** — broken images replaced with local school photos
- ✅ **Filmstrip scroll** — infinite CSS animation in academics & gallery pages
- ✅ **Sticky header shrink** — `.scrolled` / `.header-scrolled` class on scroll
- ✅ **Chart.js results page** — MAP, PSAT (bar), AP (bar), IELTS (radar), 3-year trend charts
- ✅ **Leader photo lightbox zoom** — zoom-in/out toolbar (+/−/Reset), scroll-wheel zoom, click-to-zoom toggle, zoom range 100%–300% in 7 steps, cursor feedback, resets on leader change
- ✅ **Leader lightbox keyboard shortcuts** — `+` zoom in, `-` zoom out, `0` reset, `←/→` navigate, `Esc` close; on-screen hint strip fades after 3 s
- ✅ **Leader bio expand/collapse toggle** — `+` / `−` pill button below each quote; smooth max-height + opacity animation; icon rotates 45° when open; label toggles "Read Bio" ↔ "Hide Bio"; fully accessible (`aria-expanded`, `aria-hidden`, `aria-controls`); all 9 leader cards wired
- ✅ **Phase 4 Results nav item** — added to all 8 production page nav menus with full sub-menu (MAP Growth, 3-Year MAP Attainment ★, MAP Progress ★, PSAT, AP, SAT, IELTS)

### Design & UX
- ✅ **Responsive** — mobile-first, tested down to 320px
- ✅ **Google Fonts** — Playfair Display, Inter, Montserrat
- ✅ **FontAwesome 6.4** — icons throughout
- ✅ **CSS custom properties** — full design token system (`--red`, `--navy`, `--white`, etc.)
- ✅ **Print / reduced motion** — `@media (prefers-reduced-motion: reduce)` applied
- ✅ **Accessibility** — focus-visible outlines, aria-labels, aria-expanded, aria-current, semantic HTML
- ✅ **60-section enhancements.css** — comprehensive animation, hover, and UX pack (v6)
- ✅ **Legal pages** — full Privacy Policy, Terms of Use, Safeguarding, Sitemap

### Social Media Links (all pages)
All social links replaced from `href="#"` to real URLs:
- Facebook: `https://www.facebook.com/NAISDubai`
- Instagram: `https://www.instagram.com/naisdubai`
- Twitter: `https://twitter.com/NAISDubai`
- LinkedIn: `https://www.linkedin.com/company/naisdubai`
- YouTube: `https://www.youtube.com/@NAISDubai`

### Footer Legal Links (all pages)
All footer legal links now point to real pages:
- `privacy-policy.html` / `terms-of-use.html` / `safeguarding.html` / `sitemap.html`

---

## 📁 File Structure

```
index.html                   — Homepage
about.html                   — About NAIS
academics.html               — Academic Programs
admissions.html              — Admissions
curriculum.html              — American Curriculum
pbl.html                     — Project-Based Learning
parent-faq.html              — Parent FAQ
gallery.html                 — Photo Gallery
phase4-results.html          — Phase 4 Academic Results (Chart.js)
privacy-policy.html          — Privacy Policy
terms-of-use.html            — Terms of Use
safeguarding.html            — Safeguarding Policy
sitemap.html                 — Visual Sitemap
intro.html                   — Standalone intro preview

css/
  style.css                  — Main stylesheet (vars, layout, all sections)
  nav.css                    — Navigation overlay styles
  pages.css                  — Inner-page specific styles
  mobile.css                 — Mobile-first responsive overrides
  premium.css                — Premium design elements
  enhancements.css           — UX/UI enhancement pack v6 (60 sections)

js/
  nav.js                     — Navigation: open/close, mobile accordion,
                               search redirect, active nav highlight
  main.js                    — All interactive features: hero slideshow,
                               counters, scroll-reveal, testimonials,
                               video lightbox, forms (API), FAQ accordion,
                               tour tabs, mobile CTA, parallax, gallery,
                               announcement band, active sections, ripple
  img-fallback.js            — Broken image replacement with local photos

images/
  nais-logo.png              — School logo
  school-01.jpg …            — Staff portraits (01–09)
  school-10.jpg …            — Scene/gallery photos (10–25)
  campus-main.jpg            — Main Entrance tour photo
  campus-playground.jpg      — KG Playground tour photo
  campus-sports.jpg          — Sports Field tour photo
  executive-director.jpg     — Executive Director portrait

temp/
  nav-block.html             — Working template (not a live page)
```

---

## 🔗 Key Entry Points & Anchors

| URL | Description |
|-----|-------------|
| `index.html` | Homepage |
| `index.html#hero` | Hero section |
| `index.html#why-choose` | Why Choose NAIS |
| `index.html#programs` | Academic programs grid |
| `index.html#campus-tour` | 360° Campus Tour tabs |
| `index.html#stats` | Stats section (animated counters) |
| `index.html#testimonials` | Parent testimonials |
| `index.html#gallery` | Life at NAIS gallery |
| `index.html#contact` | Contact form |
| `admissions.html#apply` | Application form |
| `admissions.html#fees` | Tuition & fees section |
| `admissions.html#process` | Admissions process |
| `admissions.html#documents` | Required documents |
| `academics.html#kindergarten` | KG program |
| `academics.html#elementary` | Elementary program |
| `academics.html#middle` | Middle School |
| `academics.html#high` | High School |
| `academics.html#inclusion` | Inclusion program |
| `academics.html#ap` | AP Courses |
| `about.html#mission` | Mission & Vision |
| `about.html#leadership` | School Leadership |
| `about.html#care` | CARE Values |
| `about.html#campus` | Our Campus |
| `about.html#accreditation` | Accreditations |
| `phase4-results.html#map` | MAP Growth results |
| `phase4-results.html#map-three-year` | 3-Year MAP Attainment data |
| `phase4-results.html#map-progress` | MAP Progress analysis |
| `phase4-results.html#psat` | PSAT results |
| `phase4-results.html#ap` | AP results |
| `phase4-results.html#sat` | SAT results |
| `phase4-results.html#ielts` | IELTS results |
| `privacy-policy.html` | Privacy Policy |
| `terms-of-use.html` | Terms of Use |
| `safeguarding.html` | Safeguarding Policy |
| `sitemap.html` | Sitemap |

---

## 🗃️ Data Model

### Table: `contact_submissions`

| Field | Type | Description |
|-------|------|-------------|
| `id` | text | UUID (auto-generated) |
| `parent_name` | text | Parent / Guardian full name |
| `student_name` | text | Student's name |
| `email` | text | Email address |
| `phone` | text | Phone / WhatsApp number |
| `grade` | text | Grade applying for |
| `message` | text | Optional message or questions |
| `source` | text | Form origin: `contact-form` / `hero-mini-form` / `admissions-form` |
| `status` | text | Lead status (default: new) |
| `created_at` | datetime | Auto-set on creation |

**API Endpoint:** `POST tables/contact_submissions`  
**View Submissions:** `GET tables/contact_submissions`

---

## 🏫 School Information

| Detail | Value |
|--------|-------|
| Name | North American International School |
| Location | Al Mizhar 1, Mirdif, Dubai, UAE |
| Phone | +971 4 263 5456 |
| WhatsApp | https://wa.me/97142635456 |
| Admissions Email | admissions@naischool.ae |
| Careers Email | careers@naischool.ae |
| Parent Portal | https://edunation.me |
| Facebook | https://www.facebook.com/NAISDubai |
| Instagram | https://www.instagram.com/naisdubai |
| Twitter | https://twitter.com/NAISDubai |
| LinkedIn | https://www.linkedin.com/company/naisdubai |
| YouTube | https://www.youtube.com/@NAISDubai |
| Founded | 2005 |
| Grades | KG1 – Grade 12 |
| KHDA Rating | Good |
| Accreditation | Cognia |

---

## 🛠️ CSS Architecture

| File | Purpose | Approx. Size |
|------|---------|------|
| `style.css` | Core design system, CSS variables, all section layouts | ~128 KB |
| `nav.css` | Navigation overlay, topbar, rail, mobile nav | ~17 KB |
| `pages.css` | Inner-page headers, section-specific overrides | ~34 KB |
| `mobile.css` | Breakpoint overrides (≤1199px, ≤768px, ≤480px) | ~21 KB |
| `premium.css` | Decorative/premium elements | ~49 KB |
| `enhancements.css` | UX/UI enhancement pack v6 (60 sections) | ~55 KB |

**Loading order:** `style.css` → `pages.css` (inner pages only) → `nav.css` → `mobile.css` → `enhancements.css`

---

## 🔧 JavaScript Architecture

| File | Purpose |
|------|---------|
| `nav.js` | Navigation open/close, mobile accordion, search redirect, active nav highlight |
| `main.js` | Hero slideshow, counters, scroll-reveal, testimonials, video lightbox (proper close wiring), contact/admissions/hero forms (API), FAQ accordion, tour tabs, mobile CTA observer, parallax, gallery mosaic, announcement band, active section highlight, ripple, stagger, back-to-top, anchor scroll, image lazy-load, keyboard dropdown nav |
| `img-fallback.js` | Replaces broken `<img>` and CSS `background-image` sources with local school photos |

**Script loading order** (all pages): `nav.js` → `img-fallback.js` → `main.js`

---

## ⚠️ Known Limitations / Pending Items

| Item | Note |
|------|------|
| **Video lightbox content** | Shows "School Film Coming Soon" placeholder — no actual video file yet |
| **Campus Tour** | Uses real campus photos; no 360° iframe embed yet (photos as substitute) |
| **Google Maps** | Embeds approximate location; update with exact embed code when available |
| **Search results page** | `index.html?search=term` redirects correctly but no results UI exists |
| **Email notifications** | Form submissions stored in Table API; no webhook/email forwarding set up |
| **Leader lightbox zoom pan** | Zoomed image is scrollable within the photo pane but not draggable/pannable |

---

## 🚀 Recommended Next Steps

1. **Add actual school video** to the video lightbox (replace "Coming Soon" with real `<iframe>`)
2. **School calendar integration** — ICS file download or live calendar embed
3. **Set up email forwarding** for `contact_submissions` (webhook → admissions email)
4. **Add Google Analytics 4** for visitor tracking and conversion measurement
5. **Add a News/Blog section** with individual article pages
6. **Add real 360° virtual tour** (Matterport or Google Maps Street View iframes)
7. **Add `sitemap.xml`** (machine-readable) for SEO search indexing
8. **Add Open Graph meta tags** to all pages for social sharing previews
9. **Explore WhatsApp Business API** integration for instant auto-reply on form submit
10. **Add cookie consent banner** for GDPR/UAE compliance

---

*Last updated: April 2026 — All 13 pages QA-verified (zero console errors). Leader bio +/− toggle added (9 cards), leader lightbox zoom system, Phase 4 Results nav on all 8 pages. All social media links, footer legal links, and placeholder `href="#"` resolved across all production pages.*
