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

### Bugs Fixed (Latest)
- ✅ **Removed intro overlay from inner pages** (about/academics/admissions) — it blocked content for 7.5s making pages appear blank
- ✅ **Removed dangerous `section, div { max-width: 100vw }` rule** from mobile.css that was squishing the layout to ~50% width on mobile
- ✅ **footer logo**: All pages now use `nais-logo.png` (was broken `.svg` reference)
- ✅ **DSIB section**: Visible in about.html with scroll animations; JS safety timer ensures it becomes visible after 1s
- ✅ **Topbar hide fix**: nav.css + mobile.css both set `display:none !important` on `.topbar` at ≤1199px; desktop shows via `@media (min-width:1200px)` in inline `<style>`

---

## 📁 File Structure

```
index.html          — Homepage (with intro overlay)
about.html          — About NAIS page  
academics.html      — Academics page
admissions.html     — Admissions & Fees page

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

---

## 🔧 Recommended Next Steps
1. Replace Unsplash images with real school photography
2. Add form submission logic (contact form, lead form)
3. Add school calendar data
4. Create additional pages: Contact, School Calendar, LMS redirect
5. Optimize images for performance (WebP format)
6. Add meta OG tags for social sharing

