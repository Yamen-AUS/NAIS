# NAIS Dubai – School Website

## Project Overview
A fully responsive static website for North American International School (NAIS) Dubai, featuring a cinematic intro overlay, full-screen navigation, and comprehensive school information pages.

---

## ✅ Completed Features

### Pages
| Page | URL | Status |
|------|-----|--------|
| Home | `index.html` | ✅ Complete |
| About | `about.html` | ✅ Complete |
| Academics | `academics.html` | ✅ Complete |
| Admissions | `admissions.html` | ✅ Complete |

### Layout & Navigation
- **Intro Overlay**: Cinematic "WE BELIEVE" animation on every page with SKIP button and auto-dismiss (7.5s)
- **Topbar**: Fixed-height 52px bar with logo (left, 140×52 contained box), contact info, utility links, social icons
- **Nav Rail**: 48px vertical strip on desktop (right side) → transforms to full-width 58px top bar on mobile (≤1199px)
- **Full-Screen Nav Overlay**: Two-panel mega menu (left visual panel + right navigation grid)
- **Quick Links Bar**: Secondary navigation bar with key links below topbar
- **Logo**: In topbar (`<a href="index.html" class="topbar-logo">`) — always links back to homepage; also in nav-rail-inner (mobile) and nav-overlay (left panel)

### Home Page Sections
- Hero slider (3 slides with Ken Burns effect + overlay)
- Why Choose NAIS (6 feature cards)
- Welcome / About section
- Programs grid (KG → Grade 12)
- CARE Values section
- Stats counters
- News & Events
- Admissions CTA
- Accreditation logos
- Testimonials slider
- School Calendar
- Quick Access dashboard
- Map section
- Contact form

### Design Fixes Applied
- ✅ Added missing `<link rel="stylesheet">` for css/style.css, css/pages.css, css/nav.css to all pages
- ✅ Fixed `<style>` tag corrupted/missing in all pages (CSS was leaking as plain HTML text)
- ✅ Logo strictly contained in 140×52px box with `overflow:hidden` — never bleeds outside topbar
- ✅ hero-floating-cta (Request Information) hidden by default, shown only on screens ≥1500px
- ✅ Intro overlay (WE BELIEVE) present on all 4 pages
- ✅ Removed duplicate `stagger-children` CSS causing invisible sections
- ✅ Safety timers ensure all animated sections become visible

---

## 📁 File Structure

```
index.html          — Homepage
about.html          — About NAIS page  
academics.html      — Academics page
admissions.html     — Admissions & Fees page

css/
  style.css         — Main styles (global, hero, sections)
  pages.css         — Inner page styles (page-hero, adm-*, etc.)
  nav.css           — Navigation (topbar, nav-rail, overlay)

js/
  nav.js            — Navigation JS (overlay, mobile toggle, animations)

images/
  nais-logo.png     — School logo (PNG, ~98KB)
  nais-logo.svg     — School logo (SVG)
  nais-logo-footer.svg — Footer variant
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
| ≥1200px | Desktop: topbar visible, nav-rail = 48px right strip |
| ≤1199px | Mobile/tablet: topbar hidden, nav-rail = 58px top bar |
| ≤768px | topbar hidden, simplified hero, single-column grids |

---

## 🚀 Deployment
To publish the website, use the **Publish tab** in the editor. The Publish tab handles deployment automatically and provides a live URL.

---

## ⚠️ Known Issues
- `images/nais-logo.png` must be present (currently 98KB file exists)
- Some external CDN resources (Google Fonts, FontAwesome) may 404 in restricted environments — this does not affect layout
- Hero floating CTA (Request Information) requires viewport ≥1500px to display

---

## 🔧 Recommended Next Steps
1. Replace Unsplash images with real school photography
2. Add form submission logic (contact form, lead form)
3. Add school calendar data
4. Create additional pages: Contact, School Calendar, LMS redirect
5. Optimize images for performance (WebP format)
6. Add meta OG tags for social sharing
