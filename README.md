# NAIS Dubai – School Website

## Project Overview
A fully responsive static website for North American International School (NAIS) Dubai, featuring a cinematic intro overlay on the homepage, full-screen navigation, and comprehensive school information pages.

---

## ✅ Completed Features

### Pages
| Page | URL | Status |
|------|-----|--------|
| Home | `index.html` | ✅ Complete |
| About | `about.html` | ✅ Complete |
| Academics | `academics.html` | ✅ Complete |
| Admissions | `admissions.html` | ✅ Complete |
| Phase 4 Results | `phase4-results.html` | ✅ Complete |
| Project-Based Learning | `pbl.html` | ✅ Complete |
| Curriculum | `curriculum.html` | ✅ Complete |
| Parent FAQ | `parent-faq.html` | ✅ Complete |

### Layout & Navigation
- **Intro Overlay**: Cinematic "WE BELIEVE" animation on **homepage only** (index.html) — inner pages load directly without overlay
- **Topbar**: 62px bar with logo, contact info, utility links, social icons (desktop ≥1200px only)
- **Nav Rail**: 48px vertical strip on desktop (right side) → transforms to full-width 58px top bar on mobile (≤1199px)
- **Full-Screen Nav Overlay**: Two-panel mega menu (left visual panel + right navigation grid)
- **Quick Links Bar**: Secondary navigation bar with key links
- **Logo**: `nais-logo.png` used consistently in topbar, nav-rail, nav-overlay, and footer across all pages

### Key Sections
- Hero slider (3 slides with Ken Burns effect + overlay)
- Why Choose NAIS (6 feature cards)
- DSIB Inspection Results 2023–24 (on About page)
- Leadership team cards
- Programs grid (KG → Grade 12)
- CARE Values section
- Stats counters, News & Events
- Admissions CTA + Campus Tour
- Testimonials slider, School Calendar
- Contact form with Google Map

---

## 📊 phase4-results.html — Data Sections

### MAP Growth (Grade 9 Winter Baseline 2025–26)
- Algebra 1 MAP: at/above norm, above norm, top quartile
- Life Science MAP: 57% at/above, baseline year

### Three-Year MAP Attainment (`#map-three-year`)
Tabbed section covering **Science · Mathematics · Reading · Language** (2022–23 → 2024–25).  
Each tab shows:
- "At or Above National Norm" phase cards with 3-year progress bars
- "Above National Norm" sub-cards
- DSIB/KHDA rating callout banner (SEF self-evaluation + KHDA external inspection)
- Chart.js trend line + comparison bar chart
- Rating summary table (SEF row + KHDA row)

#### Verified Data (corrected April 2026):

| Subject | Phase | 2022–23 | 2024–25 | +pp | SEF 24–25 | KHDA 24–25 |
|---------|-------|---------|---------|-----|-----------|------------|
| Science | Ph 2  | 49%     | 84%     | +35 | Good      | Good (1pt from VG) |
| Science | Ph 3  | 48%     | 58%     | +10 | Acceptable| Weak |
| Science | Ph 4  | 62%     | 71%     | +9  | Good      | Weak (4pts from Good) |
| Math    | Ph 2  | 42%     | 75%     | +33 | Good      | Good |
| Math    | Ph 3  | 27%     | 45%     | +18 | Acceptable| Weak |
| Math    | Ph 4  | 55%     | 61%     | +6  | Good      | Weak |
| Reading | Ph 2  | 45%     | 69%     | +24 | Good      | Weak |
| Reading | Ph 3  | 41%     | 47%     | +6  | Acceptable| Weak |
| Reading | Ph 4  | 60%     | 67%     | +7  | Good      | Weak |
| Language| Ph 2  | 48%     | 62%     | +14 | Good      | Weak |
| Language| Ph 3  | 52%     | 58%     | +6  | Acceptable| Weak |
| Language| Ph 4  | 62%     | 73%     | +11 | Good      | Good ✓ |

#### Above National Norm (verified):
| Subject | Phase | 2022–23 | 2024–25 | +pp |
|---------|-------|---------|---------|-----|
| Science | Ph 2  | 34%     | 60%     | +26 |
| Science | Ph 3  | 28%     | 36%     | +8  |
| Science | Ph 4  | 37%     | 54%     | +17 |
| Math    | Ph 2  | 24%     | 57%     | +33 |
| Math    | Ph 3  | 12%     | 21%     | +9  |
| Math    | Ph 4  | 38%     | 39%     | +1  |
| Reading | Ph 2  | 29%     | 43%     | +14 |
| Reading | Ph 3  | 17%     | 19%     | +2  |
| Reading | Ph 4  | 33%     | 42%     | +9  |
| Language| Ph 2  | 29%     | 42%     | +14 |
| Language| Ph 3  | 28%     | 36%     | +8  |
| Language| Ph 4  | 39%     | 54%     | +15 |

### MAP Progress (`#map-progress`) — Spring 2024–25
Tabbed section (Science · Mathematics · Reading · Language) on dark navy background.  
Shows Expected Progress % and Better Than Expected % per phase with SEF progress ratings.

#### Progress Ratings:

| Subject  | Phase 2       | Phase 3    | Phase 4       |
|----------|---------------|------------|---------------|
| Science  | Outstanding (96%/95%) | Good (73%/69%) | Very Good (76%/74%) |
| Math     | Outstanding (94%/94%) | Very Good (74%/71%) | Outstanding (84%/77%) |
| Reading  | Outstanding (94%/90%) | Very Good (75%/73%) | Very Good (75%/74%) |
| Language | Outstanding (93%/89%) | Outstanding (80%/76%) | Outstanding (83%/76%) |

**Summary**: 7 phase-subject combos Outstanding · 4 Very Good · 96% highest expected progress · 100% at Good or above

### PSAT Results (`#psat`)
- Grade 10: EBRW 480 (+18), Math 430 (+12), benchmarks met: 52% / 38%
- Grade 11: EBRW 510, Math 455, benchmarks met: 61% / 44%

### AP Courses (`#ap`)
- 9 subjects tracked · Pass rate (3+) range 58–82% · Top scorer: Calc AB 82%

### SAT Results (`#sat`)
- Mean composite score tracked · College readiness data

### IELTS (`#ielts`)
- Average band 6.4 · 78% achieved band 6.0+ · 42% achieved 7.0+

---

## 📄 pbl.html — Project-Based Learning Page

Six-section page linked under Academics in nav (gold star highlight):
1. **Hero** – breadcrumb, title, subtitle
2. **What is PBL?** – two-column intro with image + tagline banner
3. **Four Pillars** – Investigate / Collaborate / Apply / Create (hover cards)
4. **Quote Banner** – motivational quote on dark gradient
5. **Key Skills** – Problem-Solving, Communication, Creativity, Teamwork
6. **How PBL Works** – 6-step process grid (Ask → Research → Collaborate → Create → Reflect → Present)

Navigation link added to all 7 site pages (gold `#F5A623` color, `★` icon).

---

## 📁 File Structure

```
index.html          — Homepage (with intro overlay)
about.html          — About NAIS page
academics.html      — Academics page
admissions.html     — Admissions & Fees page
phase4-results.html — Phase 4 Assessment Results (MAP, PSAT, AP, SAT, IELTS)
pbl.html            — Project-Based Learning page
curriculum.html     — American Curriculum page
parent-faq.html     — Parent FAQ page

css/
  style.css         — Main styles (v6)
  pages.css         — Inner page styles (v6)
  nav.css           — Navigation (v6)
  mobile.css        — Mobile responsive fixes (v3)

js/
  nav.js            — Navigation JS (overlay, mobile toggle, animations)

images/
  nais-logo.png     — School logo (PNG, ~98KB) — used everywhere
```

---

## 🎨 CSS Variables (key values)

```css
--navy:         #1F2F6E   /* primary navy blue */
--navy-deeper:  #0B1230   /* topbar background */
--red:          #E11B22   /* accent red */
--white:        #FFFFFF
--container-max: 1340px
--section-pad:  80px
```

---

## 📐 Layout Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| ≥1500px | hero-floating-cta (Request Info) visible |
| ≥1200px | Desktop: topbar visible, nav-rail = 48px right strip, body padding-right: 48px |
| ≤1199px | Mobile/tablet: topbar hidden, nav-rail = 58px top bar, body padding-top: 58px |
| ≤768px | Simplified hero, single-column grids, stacked footer |

---

## 🚀 Deployment
To publish the website, use the **Publish tab** in the editor. The Publish tab handles deployment automatically and provides a live URL.

---

## ⚠️ Known Issues
- `images/nais-logo.png` must be present (currently 98KB file exists)
- 3D Tour iframe (Matterport) returns 404 in preview — works on live domain
- Hero floating CTA (Request Information) requires viewport ≥1500px to display
- "Above National Norm" sub-cards not yet added for Math, Reading, Language panels (only Science has them); data is available in README table above

---

## 🔧 Recommended Next Steps
1. Add "Above National Norm" sub-cards for Math, Reading, and Language panels (data in table above)
2. Replace Unsplash images with real school photography
3. Add the full "Long Version" PBL text content to pbl.html when provided
4. Add form submission logic (contact form, lead form)
5. Add school calendar data
6. Create additional pages: Contact, School Calendar, LMS redirect
7. Optimize images for performance (WebP format)
8. Add meta OG tags for social sharing
