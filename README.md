# NAIS Dubai — Official School Website

**North American International School, Dubai**  
A premier American curriculum school serving KG–Grade 12 students.

---

## 🌐 Project Overview

Full multi-page static website for NAIS Dubai featuring an animated intro, hero carousel, API-integrated contact forms, interactive campus tour, testimonials slider, gallery lightbox, phase 4 academic results with Chart.js visualisations, and comprehensive legal pages.

**Live URL:** Deploy via the Publish tab.

---

## ✅ Completed Features

### Core Pages (12 pages — `gallery.html` removed)

| Page | File | Description |
|------|------|-------------|
| Homepage | `index.html` | Full hero, all sections, mobile CTA, intro overlay |
| About | `about.html` | Leadership (Chairman→CEO→Principal→grid), mission, CARE values, accreditation |
| Academics | `academics.html` | KG–Grade 12 programs, AP courses, filmstrip |
| Admissions | `admissions.html` | Application form, fees, **Transport & Bus Routes**, FAQs, process steps |
| American Curriculum | `curriculum.html` | Grading, assessments, learning pathways |
| Project-Based Learning | `pbl.html` | PBL philosophy, projects, outcomes |
| Parent FAQ | `parent-faq.html` | Searchable FAQ with category tabs |
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
about.html                   — About NAIS (Chairman→CEO→Principal→grid leadership)
academics.html               — Academic Programs
admissions.html              — Admissions + Transport & Bus Routes section
curriculum.html              — American Curriculum
pbl.html                     — Project-Based Learning
parent-faq.html              — Parent FAQ
[gallery.html DELETED]       — Photo Gallery removed; all 12-file references scrubbed
phase4-results.html          — Phase 4 Academic Results (Chart.js)
privacy-policy.html          — Privacy Policy
terms-of-use.html            — Terms of Use
safeguarding.html            — Safeguarding Policy
sitemap.html                 — Visual Sitemap (gallery entry removed)
intro.html                   — Standalone intro preview

css/
  style.css                  — Main stylesheet (vars, layout, all sections)
  nav.css                    — Navigation overlay styles
  pages.css                  — Inner-page specific styles
  mobile.css                 — Mobile-first responsive overrides
  premium.css                — Premium design elements
  enhancements.css           — UX/UI enhancement pack v6 (60 sections)
  rtl.css                    — Arabic RTL stylesheet (85 sections); Cairo+Tajawal fonts,
                               direction overrides, flex-reverse, icon flips

js/
  nav.js                     — Navigation: open/close, mobile accordion,
                               search redirect, active nav highlight
  main.js                    — All interactive features: hero slideshow,
                               counters, scroll-reveal, testimonials,
                               video lightbox, forms (API), FAQ accordion,
                               tour tabs, mobile CTA, parallax, gallery,
                               announcement band, active sections, ripple
  img-fallback.js            — Broken image replacement with local photos
  i18n.js                    — Bilingual EN/AR engine: 200+ key dictionary,
                               applyTranslations(), applyDir(), switchLang(),
                               NAIS_i18n public API, localStorage persistence

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
| `pages.css` | Inner-page headers, leadership card responsive rules (v6) | ~35 KB |
| `mobile.css` | Full mobile-first breakpoint overrides — v5 rewrite (v6 tag) | ~60 KB |
| `premium.css` | Decorative/premium elements | ~49 KB |
| `enhancements.css` | UX/UI enhancement pack (64 sections, v2 tag) | ~64 KB |

**Loading order:** `style.css` → `pages.css` (inner pages only) → `nav.css` → `mobile.css` → `enhancements.css`

### Mobile Responsive Breakpoints

| Breakpoint | Trigger | Key changes |
|-----------|---------|-------------|
| `≤ 1199px` | Tablet / mobile entry | Nav rail → fixed top bar (58 px), remove desktop rail padding, hide topbar |
| `≤ 1024px` | Tablet landscape | Leadership equal grid → 2 col, photo 280 px; leader-card--featured 2-col |
| `≤ 900px` | Tablet portrait | Recruit grid → 1 col; admissions process → 2 col; DSIB grid → 1 col |
| `≤ 768px` | Large phone | Leadership grid → 1 col; hero full-svh; page-hero 360 px; mission image 260 px |
| `≤ 640px` | Phone landscape | — (handled by 600 px block) |
| `≤ 600px` | Phone landscape | **Leadership equal grid → single column, max-width 400 px centered, photo 240 px** |
| `≤ 480px` | Phone portrait | Hero stats hidden; hero font reduced; video promo adjustments |
| `≤ 375px` | Small phone | **Leader photo → 220 px**; section-pad 44 px; small font tweaks |
| `≤ 320px` | Tiny phone | Minimal padding, container edge-to-edge |

---

## 🔧 JavaScript Architecture

| File | Purpose |
|------|---------|
| `nav.js` | Navigation open/close, mobile accordion, search redirect, active nav highlight |
| `main.js` | Hero slideshow, counters, scroll-reveal, testimonials, video lightbox (proper close wiring), contact/admissions/hero forms (API), FAQ accordion, tour tabs, mobile CTA observer, parallax, gallery mosaic, announcement band, active section highlight, ripple, stagger, back-to-top, anchor scroll, image lazy-load, keyboard dropdown nav |
| `img-fallback.js` | Replaces broken `<img>` and CSS `background-image` sources with local school photos |

**Script loading order** (all pages): `nav.js` → `img-fallback.js` → `main.js`

---

## 🌐 Bilingual System (EN / AR) — RTL Support

### Architecture
| File | Role |
|------|------|
| `js/i18n.js` | Full bilingual engine: dictionary, `t(key)` lookup, `applyTranslations()`, `applyDir()`, `switchLang()`, `NAIS_i18n` public API |
| `css/rtl.css` | RTL stylesheet (85 sections) — Arabic fonts (Cairo + Tajawal), `dir: rtl`, flex-reverse, icon flips, component-level overrides |

### Language Switching
- **Storage:** `localStorage('nais_lang')` — persists across pages
- **Trigger:** Any `.lang-switcher[data-lang]` button — topbar (EN / عر), floating pill (mobile), nav overlay
- **Body class:** `lang-ar` added for RTL CSS scoping; `lang-en` for LTR
- **HTML dir:** `<html dir="rtl" lang="ar">` set automatically on Arabic selection
- **Page title:** `data-page-title="page.title.home"` on `<body>` translates `document.title`

### Translation Coverage — All 13 Pages (100% data-i18n ✅)
All translatable strings use `data-i18n`, `data-i18n-html`, `data-i18n-placeholder`, or `data-i18n-aria` attributes:

| Section | Keys covered |
|---------|-------------|
| Intro overlay | `btn.skip` |
| Topbar | `topbar.address`, `topbar.portal`, `topbar.elearning`, `topbar.careers` |
| Navigation | All primary links, sub-links, tagline, promo card, search, careers, apply |
| Quick-links bar | `nav.apply-now`, `nav.sub.fees`, `nav.sub.how-apply`, `nav.academics`, `nav.sub.gallery`, `quick.calendar`, `nav.sub.contact`, `quick.lms` |
| Hero | badge, title1/2, subtitle, all 3 buttons, 360° CTA, tagline, 4 stats, scroll indicator |
| Hero mini-form | all 4 placeholders, grade options, submit, respond note |
| Announcement band | `ann.latest`, `ann.ticker`, `ann.viewall` |
| Why NAIS | section label/h2/intro, 6 cards h3+p, 4 achievement badges |
| Quick access | 5 card labels |
| Welcome | label, h2, lead, p2, 3 pillar cards, KHDA badge, principal quote, 2 action buttons |
| Academics | section label/h2/intro, 4 program cards (h3+p+3 features), 4 grade tags, highlights banner (4 items), explore btn |
| CARE Values | label, h2, intro, 4 value cards |
| Student Life | label, h2, arts showcase, 3 life cards |
| Gallery | label, h2, text, 3 stats, CTA buttons, 5 mosaic badges, 7 accent labels |
| USP Pillars | subtitle, h2, intro, 6 pillars (tag+title+text) — Pillar 02 tag confirmed red (#E11B22) |
| Recruitment | sec label/h2/intro, banner badge/h3/p/register, 3 leader cards, meet-principal card, 3 open house dates, ambassador card |
| 360° Tour | label, h2, intro, 3 tabs, 3 pane headings/descriptions, all feature lists, source badges, photo captions, bottom CTA |
| Stats | 6 stat labels |
| Testimonials | label, h2, 4 testimonial blocks (quote+name+role) |
| Video Promo | label, h2, p, apply, tour |
| Photo Parallax | 3 panels (tag+title+desc) |
| News | label, h2, all-news link, 3 news cards (tag+h3+p+readmore) |
| Calendar | label, h2, full-calendar link, 6 events (tag+h4+p) |
| University Destinations | label, sub |
| CTA Strip | h3, p, 3 buttons |
| Admissions CTA | label, h2, p, 4 steps (h4+p), 2 buttons |
| Accreditations | sec label/h2, 5 items |
| Contact | sec label/h2/p, 4 detail items, WhatsApp btn, form (h3, labels, placeholders, grade options, submit, thanks) |
| Tour banner | h3, p, btn |
| Enrollment notice | strong, p, link |
| Footer | desc, social links, 3 column headings, 7 quick links, 6 academic links, 4 contact details, apply+WhatsApp btns, copyright, 4 legal links |
| Mobile CTA bar | call, whatsapp, apply, tour |
| Video lightbox | film h3, film p, 2 action buttons, close aria-label |
| Floating pill | EN/AR aria-labels |
| Floating Apply btn | label, aria-label |
| Back-to-top | aria-label |
| WhatsApp float | aria-label |

### RTL CSS — 85 Sections Covered
`css/rtl.css` provides complete right-to-left overrides for every component including:
- Arabic font import (Cairo + Tajawal via Google Fonts)
- Base typography, direction, icon neutrality, arrow/chevron flips
- Topbar, nav rail, nav overlay, nav panels, subnavs, bottom bar, search form
- Hero: content, badge, actions, stats, 360° button, tagline, floating form, scroll indicator
- Section headers: left-aligned in RTL, centered headers kept centred
- Why cards, USP pillars, academics grid, program cards, grade tags, highlights
- CARE values, student life, gallery (mosaic badge RTL, label line flip, filmstrip)
- Gallery accent strip, mosaic badge RTL positioning
- Recruitment section: leaders grid, leader cards, schedule, open house, ambassador
- 360° tour: tabs, panes, features, source badges, captions, bottom CTA
- Stats section, testimonials, video promo, photo parallax panels
- News & events, calendar, university strip, CTA strip
- Admissions CTA steps, accreditations, contact section, contact form
- Tour banner, enrollment notice, Google Maps (dir:ltr preserved)
- Footer: grid, columns, headings, links, social, bottom bar, legal links
- Mobile CTA bar, video lightbox, floating pill, apply float, back-to-top, WhatsApp float
- Announcement band (ticker dir:rtl), responsive overrides (≤768px, ≤600px)
- Smooth language-switch opacity transition

---

### i18n Coverage Per Page

| Page | Status | Notes |
|------|--------|-------|
| `index.html` | ✅ 100% | All 40+ sections fully tagged |
| `about.html` | ✅ 100% | Topbar, nav, hero, all content, footer |
| `academics.html` | ✅ 100% | Programs, AP, inclusion, filmstrip, footer |
| `admissions.html` | ✅ 100% | Form, fees, process, documents, footer |
| `curriculum.html` | ✅ 100% | Grading, assessments, pathways, FAQ, footer |
| `pbl.html` | ✅ 100% | Philosophy, pillars, process, CTA, footer |
| `parent-faq.html` | ✅ 100% | Search bar, categories, accordion, footer |
| `gallery.html` | ✅ 100% | Hero, filter bar, all section headers, captions, panoramic badge, CTA, footer |
| `phase4-results.html` | ✅ 100% | KPIs, MAP, PSAT, AP, SAT, IELTS sections, footer |
| `privacy-policy.html` | ✅ 100% | Hero, back link, footer (copyright + all 4 links) |
| `terms-of-use.html` | ✅ 100% | Hero, back link, footer (copyright + all 4 links) |
| `safeguarding.html` | ✅ 100% | Hero, back link, footer (copyright + all 4 links) |
| `sitemap.html` | ✅ 100% | Hero, all 9 section `<h2>` tags, footer; `data-page-title` on body |

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
5. **Add real 360° virtual tour** (Matterport or Google Maps Street View iframes)
6. **Add `sitemap.xml`** (machine-readable) for SEO search indexing
7. **Add Open Graph meta tags** to all pages for social sharing previews
8. **Explore WhatsApp Business API** integration for instant auto-reply on form submit
9. **Add cookie consent banner** for GDPR/UAE compliance

---

*Last updated: May 3 2026 — Bilingual EN/AR system fully implemented across all 13 pages. `js/i18n.js` dictionary covers 400+ translation keys. `css/rtl.css` provides 85 RTL override sections. All `data-i18n` attributes applied to every translatable string on every page including gallery.html (panoramic badge, section headers, all captions), sitemap.html (all 9 section h2s, body data-page-title), and legal pages (privacy-policy.html, terms-of-use.html, safeguarding.html — footer copyright + all 4 footer links). Zero console errors verified.*

*Mobile pass (April 30 2026) — Full mobile rewrite completed across **mobile.css v6**, **pages.css v6**, **enhancements.css v2**:*
- *Leader-card photo heights: ≤600 px → 240 px | ≤375 px → 220 px (pages.css + mobile.css + enhancements.css, all three layers)*
- *`.leadership-grid-equal` single-column at ≤600 px, max-width 400 px, auto margins*
- *`#0a1030` dark navy background on all `.leader-card-photo` containers (no white flash)*
- *`object-fit: cover; object-position: center top` enforced at every breakpoint to prevent face cropping*
- *Hover scale 1.05 / 0.5 s transition preserved on mobile*
- *`gallery.html` nav overhauled: `.nav-hamburger` replaced with standard `.nav-rail` + `.nav-rail-inner` + `#nav-mobile-toggle` + `.nav-rail-lines` (matches every other page)*
- *`enhancements.css` sections 61–64 added: leader-card photo mobile guards, `.nav-hamburger` fallback styling, padding conflict resolution, section-pad reduction*
- *`body padding-bottom` unified to 68 px at ≤1199 px across all sheets*
- *CSS version cache-busting: `mobile.css?v=6`, `enhancements.css?v=2` on all 13 pages*
- *Zero console errors verified on index.html, about.html, gallery.html*
