# NAIS Dubai — North American International School Website

## Project Overview
A fully responsive, multi-page static website for North American International School (NAIS) Dubai — a premier American curriculum school for KG–Grade 12. Features a cinematic intro overlay, rich photo gallery, parallax photo sections, and modern design with Dubai's school brand colours (Navy #1F2F6E, Red #E11B22).

---

## ✅ Completed Features

### Pages
| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero slideshow, welcome, academics, gallery mosaic, parallax photo strip, news, testimonials, contact |
| About | `about.html` | Mission/vision, leadership, CARE values, campus photos, photo accordion strip |
| Academics | `academics.html` | KG–12 programmes, AP courses, inclusion, STEM |
| Admissions | `admissions.html` | Application process, fees, testimonials, campus tour |
| Photo Gallery | `gallery.html` | Full-featured gallery: hero slideshow, filter tabs, featured mosaic, filmstrip scroller, panoramic banner, masonry grid, lightbox |
| Curriculum | `curriculum.html` | American curriculum overview, grading, assessments, learning pathways |
| Parent FAQ | `parent-faq.html` | 24 questions across 7 categories |
| PBL | `pbl.html` | Project-Based Learning programme details |
| Phase 4 Results | `phase4-results.html` | DSIB/KHDA Phase 4 assessment results with charts |
| Intro | `intro.html` | Cinematic canvas intro overlay with Ken Burns effect |

### Photo & Visual Features
- ✅ **All images** are real NAIS Dubai photos stored locally in `images/` — zero external CDN dependency
- ✅ **Portrait rule enforced**: school-01→09 (staff portraits) used **only** in bio/leadership sections — NEVER in galleries, heroes, or backgrounds
- ✅ **Scene photos** (school-10→25) used in all gallery, hero, background, and decorative contexts
- ✅ **Hero slideshow** on Home, Gallery, and all page-hero banners with full-screen photo backgrounds
- ✅ **Photo Gallery page** (`gallery.html`) with:
  - Ken Burns hero slideshow (4 slides: school-17, 18, 22, 15)
  - Sticky category filter bar (All / Campus / Learning / Sports / Arts / Events / Community)
  - Featured 2-up mosaic (school-17 Sports, school-19 Learning, school-22 Science)
  - 7-panel colour-filter expanding strip (school-16, 21, 23, 24, 25, 18, 20)
  - Animated filmstrip auto-scroller (seamless loop, 14 images)
  - Panoramic banner (school-15 Graduation)
  - 3-column Learning & Arts grid (school-23, 22, 25)
  - 6-item masonry grid with scroll reveal
  - Events 4-col grid
  - Full lightbox viewer (14 entries, keyboard + touch navigation)
- ✅ **Home Gallery Section** (`#gallery` in index.html):
  - 5-item mosaic (school-17, 22, 21, 19, 23)
  - 7-panel colour-filter accordion strip (school-16, 18, 24, 25, 19, 20, 09)
- ✅ **Parallax Photo Strip** (`#photo-parallax` in index.html):
  - 3-panel (school-18 Sports, school-22 STEM, school-25 Community)
  - 8-tile duotone mosaic (school-16, 17, 21, 22, 23, 24, 25, 19)
- ✅ **About page** campus photo section: big mosaic + 6-tile accordion strip
- ✅ **Background images** on all page heroes — real NAIS scene photos, full-width
- ✅ **Gallery link** in nav overlay on every page (highlighted red)
- ✅ **Gallery link** in footer Quick Links on every page
- ✅ **Intro canvas** (`intro.html`) uses scene photos (school-17, 22, 19, 15)

### Image Distribution by Page
| Page | Hero Background | Gallery/Mosaic/Strip |
|------|----------------|---------------------|
| `index.html` | school-01,05,09 (hero slides) | school-17,22,21,19,23 (mosaic); school-16,18,24,25,20 (strip) |
| `about.html` | school-18 | school-17,19,22 (split); school-16,21,23,24,25 (duo row) |
| `academics.html` | school-22 | school-17,22,15 (gallery); school-16,17 (filmstrip) |
| `admissions.html` | school-19 | school-22,23 (why images); school-21,24,25 (testimonials) |
| `gallery.html` | school-17,18,22,15 | All 14 gallery items use school-16 to school-25 + 11,12,14,15 |
| `pbl.html` | school-16 | school-19,22 (program images); school-17,23,22,18 (strip) |
| `curriculum.html` | school-19 (bg watermark) | school-22,23,17,18 (strip) |
| `parent-faq.html` | school-25 (bg watermark) | school-19,24,22,21 (strip) |
| `phase4-results.html` | school-17 (bg watermark) | school-20,22,19,16 (strip) |
| `intro.html` | — | school-17,22,19,15 (canvas) |

---

## 🗂 File Structure

```
index.html              ← Home page (hero, gallery, parallax, news)
about.html              ← About NAIS
academics.html          ← Academics KG–12
admissions.html         ← Admissions
gallery.html            ← Full photo gallery
curriculum.html         ← American Curriculum
parent-faq.html         ← Parent FAQ
pbl.html                ← Project-Based Learning
phase4-results.html     ← DSIB Phase 4 Results
intro.html              ← Cinematic intro canvas overlay
favicon.ico
css/
  style.css             ← Main brand styles + design tokens
  nav.css               ← Navigation overlay styles
  pages.css             ← Page-specific styles (page-hero, sections)
  mobile.css            ← Responsive breakpoints
js/
  nav.js                ← Navigation overlay logic
  img-fallback.js       ← Image fallback system (v5, scene photos only)
images/
  nais-logo.png         ← Main logo (PNG)
  nais-logo.svg         ← Main logo (SVG)
  nais-logo-footer.svg  ← Footer logo

  ── LEADERSHIP / BIO PORTRAITS (bio sections ONLY) ──
  principal.jpg         ← Principal full photo
  executive-director.jpg← Executive Director photo
  group-ceo.jpg         ← Group CEO photo
  school-01.jpg         ← Justin McCauley – Principal portrait
  school-02.jpg         ← Crystal Goodwin – VP High School portrait
  school-03.jpg         ← Jonathan D'Avignon – VP Middle School portrait
  school-04.jpg         ← Jennifer McCauley – VP Elementary portrait
  school-05.jpg         ← Natasha Sorak – Head of Lower Elementary portrait
  school-06.jpg         ← Noha Shaaban – Head of Inclusive Education portrait
  school-07.jpg         ← Maha El-Tantawy – Dean of Students portrait
  school-08.jpg         ← Open Morning event photo
  school-09.jpg         ← Classroom learning scene

  ── SCENE PHOTOS (galleries, heroes, backgrounds) ──
  school-10.jpg         ← Young girl writing in classroom
  school-11.jpg         ← Children in library story session
  school-12.jpg         ← Science lab experiment (high school)
  school-13.jpg         ← Children outdoor hands-on activity
  school-14.jpg         ← Children creative activity
  school-15.jpg         ← Graduation ceremony NAIS Class of 2025
  school-16.jpg         ← Children cooperative activity on sports turf (Community)
  school-17.jpg         ← Tug-of-war competition, primary school (Sports)
  school-18.jpg         ← Tug-of-war with balloons, festive sports day (Events)
  school-19.jpg         ← Teacher guiding student one-on-one (Learning)
  school-20.jpg         ← Child carrying NAIS flag at sports parade (Events)
  school-21.jpg         ← Child with UAE flag face paint (Events/National Day)
  school-22.jpg         ← Students conducting science experiment – Soil A (STEM)
  school-23.jpg         ← Young children science activity – early years (Learning)
  school-24.jpg         ← Girl in traditional dress with UAE flag (Community)
  school-25.jpg         ← Children in Gulf traditional dress, national day (Community)
```

---

## 🎨 Design Tokens

| Token | Value |
|-------|-------|
| Navy | `#1F2F6E` |
| Red (Accent) | `#E11B22` |
| White | `#FFFFFF` |
| Off-white | `#F8F7F5` |
| Serif Font | Playfair Display |
| Sans-serif | Inter |
| Display Font | Montserrat |
| Section Padding | 100px |
| Container Max Width | 1340px |

---

## 📷 Photo Usage Rules
1. **school-01 to school-09** = Staff/Leadership portraits → **ONLY in bio cards, leadership sections, and quote sections**. Never as page heroes, gallery items, backgrounds, or decorative strips.
2. **school-10 to school-25** = Real school scene photos → Used freely in all visual contexts: gallery, hero backgrounds, parallax strips, mosaic sections, filmstrips, news cards, etc.
3. **principal.jpg, executive-director.jpg, group-ceo.jpg** = Senior leadership portraits → Only in their dedicated leadership/bio cards.

---

## 🔗 Key Entry Points

| URL | Description |
|-----|-------------|
| `/index.html` | Home – main entry point |
| `/gallery.html` | Photo Gallery |
| `/about.html` | About NAIS |
| `/academics.html` | Academic Programmes |
| `/admissions.html#apply` | Application Form |
| `/admissions.html#fees` | Tuition & Fees |
| `/phase4-results.html` | DSIB Phase 4 Results |
| `/curriculum.html` | American Curriculum |
| `/parent-faq.html` | Parent FAQ |
| `/pbl.html` | Project-Based Learning |
| `/intro.html` | Cinematic intro overlay |

---

## 🚀 Deployment
Go to the **Publish tab** to deploy this project and get a live URL.

---

## 📋 Recommended Next Steps
1. **Connect contact form** — integrate Formspree or Netlify Forms for the enquiry/application form
2. **Add Google Analytics** — insert GA4 tracking code in `<head>` of all pages
3. **SEO meta tags** — add Open Graph and Twitter Card tags for social sharing
4. **School video** — embed a real YouTube school film in the video promo section on index.html
5. **News section** — replace placeholder news cards with real NAIS announcements
6. **LMS Login** — connect the LMS Login link in the nav to the actual school LMS portal
