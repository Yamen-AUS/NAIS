# NAIS Dubai — Official School Website + CMS Admin Panel

**North American International School, Dubai**  
A premier American curriculum school serving KG–Grade 12 students.

---

## 🌐 Project Overview

Full multi-page static website for NAIS Dubai featuring an animated intro, hero carousel, API-integrated contact forms, interactive campus tour, testimonials slider, gallery lightbox, phase 4 academic results with Chart.js visualisations, comprehensive legal pages, and a **complete 14-page CMS Admin Panel** for content management.

**Live URL:** Deploy via the Publish tab.

---

## 🔐 CMS Admin Panel

### Entry Point
```
admin/login.html
```

### Demo Credentials (Session Version: 2.1)

| Email | Password | Role | Permissions |
|-------|----------|------|-------------|
| `admin@naisdubai.ae` | `Admin@2025!` | Super Admin | Full access — all features |
| `s.mitchell@naisdubai.ae` | `Principal@2025!` | Admin (Principal) | Content, Staff, Ann., Events, Media |
| `j.thornton@naisdubai.ae` | `VPAcademic@2025!` | Editor (VP Academic) | Announcements, Results, Documents |
| `l.hassan@naisdubai.ae` | `Admissions@2025!` | Editor (Head of Admissions) | Admissions pipeline, Events, Ann. |
| `t.mansour@naisdubai.ae` | `ITManager@2025!` | Editor (IT Manager) | Media Library, SEO settings |
| `o.alrashidi@naisdubai.ae` | `HODSports@2025!` | Viewer (HOD PE) | View only — no write access |

> **Session security**: Sessions are stamped with `_v: '2.1'`. Stale sessions from older versions are auto-cleared on page load. Login page validates both email + version before auto-redirecting.

### Admin Pages

| Page | File | Description |
|------|------|-------------|
| Login | `admin/login.html` | NAIS-branded login, demo credentials panel, localStorage auth |
| Dashboard | `admin/index.html` | 6-stat grid, activity feed, quick actions, pages list, recent ann/events |
| Content Manager | `admin/content.html` | Page tree (12 pages), section CRUD with EN+AR bilingual fields, 6 content types |
| Media Manager | `admin/media.html` | Grid/list view, paste-URL detection, multi-select bulk delete, detail modal |
| Staff Profiles | `admin/staff.html` | Grid/list, 3-tab CRUD modal (Basic/Bio/Display), dept badges, photo preview |
| Announcements | `admin/announcements.html` | Pin/priority/bulk actions, full CRUD, bilingual EN+AR |
| Events | `admin/events.html` | Standalone events CRUD — dates, times, location, audience, featured flag |
| User Management | `admin/users.html` | User cards, role editor, 24-row × 6-role permissions matrix |
| Site Settings | `admin/settings.html` | 7 sections: General, Language & Translation, Emergency Alerts, Social Media, Analytics, Backup & Restore, Danger Zone |
| Admissions | `admin/admissions.html` | Applications pipeline — New→Reviewing→Interview→Accepted/Waitlisted/Declined, parent contact, notes |
| Results | `admin/results.html` | Exam results publications — IGCSE/A-Level/Internal/Mock, pass-rate bar, PDF links |
| Gallery | `admin/gallery.html` | Photo library with grid/list toggle, album grouping, featured flag, thumbnail preview |
| Documents | `admin/documents.html` | Downloadable files — handbook/form/policy/calendar, download counter, restricted toggle |
| SEO Manager | `admin/seo.html` | Per-page meta, OG/social preview, live SERP preview, SEO score ring, redirects table |

### Admin File Structure

```
admin/
  login.html           — Login form (no auth guard — entry point)
  index.html           — Dashboard
  content.html         — Content manager (page sections)
  media.html           — Media library
  staff.html           — Staff profile CRUD
  announcements.html   — Announcements manager
  events.html          — Events manager (standalone)
  admissions.html      — Admissions applications pipeline
  results.html         — Academic results publications
  gallery.html         — Photo gallery manager
  documents.html       — Downloadable documents manager
  seo.html             — SEO manager (per-page meta + redirects)
  users.html           — User management + permissions matrix
  settings.html        — 7-section settings panel (see below)

  css/
    admin.css          — Full design system (Nav/sidebar/topbar/panels/forms/badges/
                         modals/toasts — all class names match HTML exactly)

  js/
    core.js            — Shared module: Auth, API, Toast, Modal, Sidebar,
                         logActivity, confirmDelete, timeAgo, formatDate,
                         badgeHtml, initDraggable, copyToClipboard, emptyRow
```

### Settings Page — 7 Sections Detail

| # | Section | Key Features |
|---|---------|-------------|
| 1 | 🏫 **General** | School identity EN/AR, KHDA code, tagline EN/AR, description, logo URL (live preview), favicon, contact details (3 phones, 2 emails, address EN/AR, office hours, Maps URL), site behaviour toggles (Maintenance, RTL, Cookies, Cache), default language radio, **Bump Cache Version** button (auto-increments v=12→v=13) |
| 2 | 🌐 **Language & Translation** | Arabic/Urdu/French tab switcher, live progress bar (94% / 61% / 38%), filter chips (All · Missing Only · Navigation · Home · Admissions · Leadership), live search, translation table with RTL-aware inputs and Done/Missing badges, **Auto-fill Missing** button, Export/Import lang.js buttons, Arabic RTL preview panel with **Regen RTL CSS** button |
| 3 | 🚨 **Emergency Alerts** | Live preview updates as you type (Info/Warning/Urgent styling), Active/Inactive toggle, Show Until datetime picker, EN+AR title and message fields, optional link label+URL, Alert History table with 3 past alerts and **Restore** buttons |
| 4 | 📲 **Social Media** | 6 platform rows (Facebook/Instagram/X/YouTube/LinkedIn/WhatsApp) with branded icon tiles, URL input, live **Live/Not Set** status chips; Open Graph section (OG title/desc/image, Twitter card type); live OG share preview card |
| 5 | 📊 **Analytics & Tracking** | GA4 (● Connected), Google Search Console (● Connected), Meta Pixel (✗), Hotjar (✗) — each with Connect/Disconnect buttons and ID inputs; dark monospace `<head>` and `<body>` custom script injection editors |
| 6 | 💾 **Backup & Restore** | Auto-backup scheduler (frequency/time/retention + on/off toggle); 4 existing backups with Restore/Download/Delete; **Create Backup Now** adds a live entry with today's date; Import backup button |
| 7 | ☠️ **Danger Zone** | 4 destructive actions (Clear Cache, Reset Translations, Revoke Sessions, Full CMS Reset); each opens confirmation modal with **"I understand" checkbox** that must be ticked before confirm button enables |

### Admin CSS Class Reference (admin.css)

Key class names used across all pages:

| Element | Class(es) |
|---------|-----------|
| Sidebar container | `.admin-sidebar` `#adminSidebar` |
| Sidebar logo row | `.sidebar-header` → `.sidebar-logo` → `.sidebar-logo-mark`, `.sidebar-logo-text`, `.sidebar-school`, `.sidebar-cms` |
| Sidebar user block | `.sidebar-user` → `.sidebar-user-avatar`, `.sidebar-user-info`, `.sidebar-user-name`, `.sidebar-user-badge` |
| Sidebar nav | `.sidebar-nav` → `.nav-section-label`, `.nav-item`, `.nav-item.active`, `.nav-badge`, `.nav-arrow` |
| Sidebar footer | `.sidebar-footer` → `.sidebar-signout-btn` |
| Sidebar sign-out | `.sidebar-signout-btn` `#sidebarSignOut` |
| Mobile close btn | `.sidebar-close` `#sidebarClose` |
| Mobile overlay | `.sidebar-overlay` `#sidebarOverlay` (toggled with class `.active`) |
| Topbar | `.admin-topbar` → `.topbar-left`, `.topbar-right` |
| Topbar hamburger | `.topbar-menu-btn` `#sidebarToggle` |
| Breadcrumb | `.topbar-breadcrumb` → `.bc-home`, `.bc-sep`, `.bc-current` |
| User area | `.topbar-user` `#topbarUser` → `.topbar-avatar`, `.topbar-user-info`, `.topbar-user-name`, `.topbar-user-role` |
| User dropdown | `.user-dropdown` `#userDropdown` (toggled with `.open`) |
| Main area | `.admin-main` → `.admin-content` |
| Page header | `.page-header` → `.page-title`, `.page-subtitle`, `.page-header-actions` |
| Panels | `.panel` → `.panel-header`, `.panel-title`, `.panel-body`, `.panel-body.p0`, `.panel-footer` |
| Stat cards | `.stats-grid` → `.stat-card.stat-{navy\|green\|gold\|red\|purple\|teal}` → `.stat-icon`, `.stat-body`, `.stat-value`, `.stat-label`, `.stat-trend` |
| Buttons | `.btn .btn-{primary\|red\|outline\|ghost\|green}` `.btn-{sm\|lg\|icon}` |
| Form fields | `.form-group`, `.form-row`, `.form-label`, `.form-input`, `.form-select`, `.form-textarea`, `.form-hint`, `.form-required` |
| Table | `.table-wrap` → `.data-table` → `.table-actions` |
| Badges | `.badge .badge-{published\|active\|draft\|pending\|scheduled\|archived\|expired\|completed\|upcoming\|ongoing\|cancelled\|red\|navy\|gold\|green\|teal\|purple}` |
| Modals | `.modal-backdrop` (`.open`) → `.modal` (`.modal-lg`) → `.modal-header`, `.modal-title`, `.modal-close`, `.modal-body`, `.modal-footer` |
| Toasts | `.toast-container` → `.toast` (`.error` / `.warning` / `.info`) |

### Admin JavaScript API (core.js)

```javascript
// Authentication
Auth.guard()              // Redirect to login.html if not logged in
Auth.login(email, pw)     // Sets localStorage 'nais_cms_user'
Auth.logout()             // Clears session, redirects to login.html
Auth.getUser()            // Returns current user object or null
Auth.can(action, page)    // Permission check by role

// Table API (all call '../tables/{table}')
API.get(table, params)    // GET with optional search/sort/limit params
API.getOne(table, id)     // GET single record by ID
API.post(table, data)     // POST — create new record
API.put(table, id, data)  // PUT — full record replace
API.patch(table, id, data)// PATCH — partial update
API.delete(table, id)     // DELETE record

// UI Helpers
Toast.success(title, msg) // Bottom-right toast notification
Toast.error(title, msg)
Toast.warning(title, msg)
Toast.info(title, msg)
Modal.open(id)            // Add .open to #id.modal-backdrop
Modal.close(id)           // Remove .open
Modal.closeAll()          // Close all open modals
Sidebar.toggle()          // Mobile sidebar open/close
confirmDelete(label, fn)  // Confirm modal before delete callback
logActivity(action, type, label) // POST to cms_activity_log
badgeHtml(status)         // Returns <span class="badge badge-{status}">
timeAgo(dateStr)          // "2h ago", "3d ago" etc.
formatDate(dateStr, opts) // "12 May 2026" (en-GB)
copyToClipboard(text)     // Async clipboard write with Toast
emptyRow(colspan, msg)    // Empty-state <tr> HTML string
```

### Session Storage

Key: `nais_cms_user` (localStorage)

```json
{
  "email": "admin@naisdubai.ae",
  "name": "System Administrator",
  "role": "super_admin",
  "avatar": "SA",
  "department": "Executive",
  "loginAt": "2026-05-11T10:00:00.000Z",
  "remember": false,
  "_v": "2.1"
}
```

### Role Hierarchy

```
super_admin  →  Full access to everything
principal    →  Content, Staff, Announcements, Events, Media
marketing    →  Content, Media, Announcements, Events
admissions   →  Admissions content, Announcements, Events
academic     →  Academic/Curriculum/Results content, Staff, Media
readonly     →  Read-only — no create/edit/delete
```

### CMS Database Tables (Table API) — v2.2 Seeded

All 14 tables have schemas matching the HTML page JavaScript exactly, and are seeded with realistic NAIS Dubai demo data.

| Table | Rows | Key Fields (actual schema) |
|-------|------|---------------------------|
| `cms_announcements` | 7 | `title`, `title_ar`, `body_en`, `body_ar`, `category`, `priority`, `pinned`, `status`, `publish_date`, `expiry_date`, `audience`, `tags`, `created_by` |
| `cms_events` | 7 | `title`, `title_ar`, `description_en`, `description_ar`, `event_date`, `end_date`, `start_time`, `end_time`, `location`, `location_ar`, `category`, `capacity`, `rsvp_url`, `featured`, `status`, `created_by` |
| `cms_staff` | 8 | `name_en`, `name_ar`, `title_en`, `title_ar`, `department`, `bio_en`, `bio_ar`, `email`, `nationality`, `years_experience`, `photo_url`, `linkedin_url`, `display_order`, `show_about`, `show_home`, `show_careers`, `featured`, `tag` |
| `cms_admissions` | 8 | `student_name`, `dob`, `nationality`, `applying_grade`, `parent_name`, `parent_email`, `parent_phone`, `whatsapp`, `status`, `stage`, `notes`, `submitted_at`, `assigned_to` |
| `cms_results` | 5 | `title`, `exam_type`, `academic_year`, `grade_level`, `publish_date`, `status`, `document_url`, `summary`, `pass_rate`, `created_by` |
| `cms_gallery` | 8 | `title`, `image_url`, `thumb_url`, `category`, `album`, `caption`, `date_taken`, `status`, `featured`, `sort_order`, `tags` |
| `cms_documents` | 7 | `title`, `doc_type`, `file_url`, `file_size`, `file_format`, `audience`, `status`, `upload_date`, `academic_year`, `uploaded_by`, `download_count` |
| `cms_seo` | 10 | `page_slug`, `page_name`, `meta_title`, `meta_description`, `focus_keyword`, `og_image`, `canonical_url`, `no_index`, `schema_type`, `seo_score`, `last_updated` |
| `cms_media` | 8 | `file_name`, `file_url`, `thumb_url`, `file_type`, `mime_type`, `file_size`, `file_size_label`, `alt_text`, `folder`, `upload_date`, `uploaded_by`, `usage_count` |
| `cms_users` | 6 | `name`, `email`, `password`, `role`, `status`, `job_title`, `avatar`, `notes`, `last_login` |
| `cms_activity_log` | 12 | `user_name`, `role`, `action`, `target_label`, `module`, `details` |
| `cms_pages` | — | `page_key`, `section_key`, `title_en`, `title_ar`, `content_en`, `content_ar`, `content_type`, `order`, `status` |
| `cms_settings` | 20 | `setting_key`, `setting_value`, `group`, `label`, `type`, `updated_by` |

> **Dashboard field mapping**: Activity log uses `user_name`, `action`, `target_label` (read by `index.html`). Events table uses `event_date`, `location`, `status`. Announcements table uses `title`, `category`, `status`, `publish_date`.

---

## ✅ Completed Features

### Core Pages (12 live pages)

| Page | File | Description |
|------|------|-------------|
| Homepage | `index.html` | Full hero, all sections, mobile CTA, intro overlay |
| About | `about.html` | Leadership (Chairman→CEO→Principal→grid), mission, CARE values, accreditation |
| Academics | `academics.html` | KG–Grade 12 programs, AP courses, filmstrip |
| Admissions | `admissions.html` | Application form, fees, Transport & Bus Routes, FAQs, process steps |
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
- ✅ **Video lightbox** — play button opens overlay; close button, backdrop click, and Escape key all close correctly
- ✅ **Mobile sticky CTA bar** — Call / WhatsApp / Apply / Book Tour (hidden ≥1200px, slides up via IntersectionObserver)
- ✅ **Back-to-top button** — appears after 400px scroll
- ✅ **Floating Apply + WhatsApp buttons** — persistent on desktop, repositioned above mobile CTA
- ✅ **Scroll-reveal animations** — IntersectionObserver fade-up on all sections
- ✅ **Stagger children animation** — grid children animate in sequence with 80ms delay
- ✅ **Gallery lightbox** — keyboard nav, swipe, touch support
- ✅ **Gallery category filter** — fade/slide animation
- ✅ **Announcement band** — auto-hides after 300px scroll
- ✅ **Leader photo lightbox zoom** — zoom-in/out toolbar (+/−/Reset), scroll-wheel zoom, click-to-zoom toggle, zoom range 100%–300%
- ✅ **Leader bio expand/collapse toggle** — smooth max-height animation, aria-expanded, aria-controls
- ✅ **Phase 4 Results nav** — added to all 8 production page nav menus with full sub-menu
- ✅ **Active nav page highlight** — marks current page in nav overlay
- ✅ **Chart.js results page** — MAP, PSAT (bar), AP (bar), IELTS (radar), 3-year trend charts

### CMS Admin Panel ✅ (Phase 3 + Phase 4 Sidebar Expansion — Complete)
- ✅ **14 admin HTML pages** — login, dashboard, content, media, staff, announcements, events, admissions, results, gallery, documents, users, SEO, settings
- ✅ **admin/css/admin.css** — Full design system + all shared utility classes (see below)
- ✅ **admin/js/core.js** — `SESSION_VERSION = '2.1'`; role-based DEMO_USERS; `getUser()` auto-clears stale sessions; `sidebarSignOut` wired for all pages
- ✅ **14 CMS table schemas** — all defined and seeded with demo data
- ✅ **Sidebar redesigned** — all 14 pages: 🏫 emoji logo, user profile block (avatar + name + role badge), full nav (13 items across Main/School/System sections), Sign Out button pinned to bottom
- ✅ **Sidebar CSS fixed** — `box-sizing: border-box` on all children, fixed 20px icon column with `margin-right: 10px`, nav label `flex: 1` with overflow ellipsis, sidebar width 270px
- ✅ **Stat cards fixed** — `.stat-trend` moved inside `.stat-body`; `.stat-card` uses `align-items: center`; `.stat-body` uses `flex-direction: column`
- ✅ **Login auto-redirect fixed** — `checkExistingSession()` validates email against DEMO_USERS AND `_v === SESSION_VERSION` before redirecting; stale sessions auto-cleared
- ✅ **Credentials synced** — `core.js` DEMO_USERS matches `login.html` exactly; no personal names; role-based display names only
- ✅ **Cache-busting** — `?v=2.1` on all `admin.css` and `core.js` references across all 13 admin pages
- ✅ **Missing CSS classes added** — `.card`, `.card-header`, `.card-title`, `.card-body`, `.table-responsive`, `.search-box`, `.search-icon`, `.search-input`, `.table-action-btn`, `.toggle-switch`, `.toggle-slider`, `.form-grid`, `.required`, `.btn-danger`, `.text-center` — all now defined globally in `admin.css` (see "Shared Utility Classes" section below)
- ✅ **Activity log reseeded** — `cms_activity_log` cleared of old personal names; reseeded with 12 realistic entries
- ✅ **Static host compatibility (v2.2)** — `core.js` now detects GitHub Pages / any static host via `IS_STATIC_HOST` flag. On static hosts, all `API.*` calls are intercepted and served from a built-in `STATIC_DB` in-memory store containing all 11 tables of realistic NAIS Dubai demo data. Writes (POST/PUT/PATCH/DELETE) work in-session via an in-memory write layer. Full live Table API is used on Genspark preview as normal.
- ✅ **Demo mode banner (v2.2)** — On static hosts, a fixed bottom banner appears: "Static Demo Mode — data is built-in and read-only; changes reset on refresh." with a dismiss button and a link to Genspark for full live data.
- ✅ **Cache-bust bumped to v2.2** — All 13 admin pages updated: `admin.css?v=2.2` and `core.js?v=2.2`
- ✅ **cms_settings seeded (v2.2)** — 20 rows added: 10 contact/maps rows, 2 general, 4 social, 2 SEO, 2 features. Also added to `STATIC_DB` in `core.js` so GitHub Pages can serve them too.
- ✅ **CMS → Website live sync (v2.3)** — Any change saved in CMS Settings → Contact Details is now reflected on the public website automatically. Implementation:
  - `js/site-config.js` (new) — loads `cms_settings` via Table API on Genspark preview, or uses built-in `STATIC_SETTINGS` on static hosts. Exposes `window.NAIS_CONFIG`, then injects live values into every DOM element with `data-config="KEY"` or `data-config-href="KEY"` attributes.
  - `admin/settings.html` — `saveSettings()` rewritten to actually PATCH/POST each field to `cms_settings` via `API.patch/post`. New `loadSettings()` function pre-populates all form fields from the API on page load. `FIELD_MAP` maps each input `id` to its `setting_key`.
  - `js/i18n.js` — listens for `nais:config-loaded` event dispatched by `site-config.js`; patches `T['topbar.address']`, `T['contact.addr.span']`, `T['contact.hours.val']`, `T['contact.hours.span']`, `T['footer.addr']`, `T['footer.hours']` with live CMS values, then re-runs `applyTranslations()`.
  - `js/nav.js` — hardcoded phone in error alert replaced with `window.NAIS_CONFIG?.contact_phone || '+971 4 263 5456'`.
  - **All 12 public HTML pages** — every phone/email/address/hours element tagged with `data-config` and/or `data-config-href`. `<script src="js/site-config.js"></script>` added before `</body>` on all 12 pages.
- ✅ **Role-based auth** — 6-level hierarchy enforced via `Auth.can()`, session in localStorage
- ✅ **Bilingual content** — all forms have EN + AR fields with `dir="rtl"` Arabic inputs
- ✅ **Permissions matrix** — 24 feature rows × 6 roles rendered in users.html
- ✅ **Paste-URL detection** — media.html auto-opens modal with URL pre-filled on paste
- ✅ **0 console errors** — all 14 admin pages verified via Playwright

### Shared Utility CSS Classes (admin.css — added v2.1)

These classes were missing and causing Events, Admissions, Results, Gallery, Documents, and SEO pages to render broken. Now globally defined:

| Class(es) | Purpose |
|-----------|---------|
| `.card`, `.card-header`, `.card-title`, `.card-body` | White panel container with header and optional body padding |
| `.table-responsive` | Horizontal scroll wrapper for tables on small screens |
| `.search-box`, `.search-icon`, `.search-input` | Search field with left-aligned icon, focus ring, 220px default width |
| `.table-action-btn` (+ `.danger` modifier) | 30×30px icon button in table rows; navy hover, red hover for danger |
| `.toggle-switch`, `.toggle-slider` | CSS-only checkbox toggle; 40×22px; navy when checked |
| `.form-grid` | CSS grid container for form field layouts |
| `.required` | Red asterisk (`*`) for required field labels |
| `.btn-danger` | Destructive action button (red fill, white text, hover darkens) |
| `.text-center`, `.text-right`, `.text-left` | Text alignment utilities |

### Design & UX
- ✅ **Responsive** — mobile-first, tested down to 320px
- ✅ **Google Fonts** — Playfair Display, Inter, Montserrat
- ✅ **FontAwesome 6.4** — icons throughout
- ✅ **CSS custom properties** — full design token system (`--red`, `--navy`, `--white`, etc.)
- ✅ **Print / reduced motion** — `@media (prefers-reduced-motion: reduce)` applied
- ✅ **Accessibility** — focus-visible outlines, aria-labels, aria-expanded, aria-current, semantic HTML, autocomplete attributes
- ✅ **60-section enhancements.css** — comprehensive animation, hover, and UX pack (v6)
- ✅ **Legal pages** — full Privacy Policy, Terms of Use, Safeguarding, Sitemap

### Social Media Links (all pages)
- Facebook: `https://www.facebook.com/NAISDubai`
- Instagram: `https://www.instagram.com/naisdubai`
- Twitter: `https://twitter.com/NAISDubai`
- LinkedIn: `https://www.linkedin.com/company/naisdubai`
- YouTube: `https://www.youtube.com/@NAISDubai`

---

## 📁 File Structure

```
index.html                   — Homepage
about.html                   — About NAIS
academics.html               — Academic Programs
admissions.html              — Admissions + Transport & Bus Routes
curriculum.html              — American Curriculum
pbl.html                     — Project-Based Learning
parent-faq.html              — Parent FAQ
phase4-results.html          — Phase 4 Academic Results (Chart.js)
privacy-policy.html          — Privacy Policy
terms-of-use.html            — Terms of Use
safeguarding.html            — Safeguarding Policy
sitemap.html                 — Visual Sitemap
intro.html                   — Standalone intro preview

admin/                       — CMS Admin Panel
  login.html                 — Login (entry point)
  index.html                 — Dashboard
  content.html               — Content manager
  media.html                 — Media library
  staff.html                 — Staff profiles
  announcements.html         — Announcements
  events.html                — Events manager
  admissions.html            — Admissions applications
  results.html               — Results publications
  gallery.html               — Photo gallery
  documents.html             — Document library
  seo.html                   — SEO manager
  users.html                 — User management
  settings.html              — Site settings
  css/admin.css              — Admin design system
  js/core.js                 — Shared admin JS module

css/
  style.css                  — Main stylesheet
  nav.css                    — Navigation overlay styles
  pages.css                  — Inner-page specific styles
  mobile.css                 — Mobile-first responsive overrides
  premium.css                — Premium design elements
  enhancements.css           — UX/UI enhancement pack v6 (60+ sections)
  rtl.css                    — Arabic RTL stylesheet (85 sections)

js/
  nav.js                     — Navigation: open/close, mobile accordion, search
  main.js                    — All interactive features (hero, forms, gallery, etc.)
  img-fallback.js            — Broken image replacement
  i18n.js                    — Bilingual EN/AR engine (400+ translation keys)

images/
  nais-logo.png              — School logo
  school-01.jpg … school-25.jpg — Staff & scene photos
  campus-main.jpg            — Main Entrance tour photo
  campus-playground.jpg      — KG Playground tour photo
  campus-sports.jpg          — Sports Field tour photo
  executive-director.jpg     — Executive Director portrait
```

---

## 🔗 Key Entry Points

| URL | Description |
|-----|-------------|
| `index.html` | Homepage |
| `admin/login.html` | **CMS Admin Panel** |
| `admissions.html#apply` | Application form |
| `admissions.html#fees` | Tuition & fees |
| `phase4-results.html` | Academic results |
| `about.html#leadership` | School leadership |
| `about.html#accreditation` | Accreditations |

### Admin Panel Entry Points

| URL | Description |
|-----|-------------|
| `admin/login.html` | Login page |
| `admin/index.html` | Dashboard (requires auth) |
| `admin/content.html?page={key}` | Open content manager on specific page |
| `admin/events.html` | Events manager |
| `admin/admissions.html` | Admissions pipeline |
| `admin/results.html` | Results publications |
| `admin/gallery.html` | Photo gallery manager |
| `admin/documents.html` | Document library |
| `admin/seo.html` | SEO manager |
| `admin/staff.html?new=1` | Open with new staff modal |

---

## 🗃️ Data Models

### Public Site Tables

#### `contact_submissions`
| Field | Type | Description |
|-------|------|-------------|
| `id` | text | UUID (auto) |
| `parent_name` | text | Parent / Guardian name |
| `student_name` | text | Student's name |
| `email` | text | Email address |
| `phone` | text | Phone / WhatsApp |
| `grade` | text | Grade applying for |
| `message` | text | Optional message |
| `source` | text | `contact-form` / `hero-mini-form` / `admissions-form` |
| `status` | text | Lead status (default: `new`) |

### CMS Admin Tables

#### `cms_users`
| Field | Type | Description |
|-------|------|-------------|
| `name` | text | Display name |
| `email` | text | Login email |
| `role` | text | `super_admin` / `principal` / `marketing` / `admissions` / `academic` / `readonly` |
| `status` | text | `active` / `inactive` |
| `avatar` | text | 2-letter initials |
| `job_title` | text | Job title |
| `department` | text | Department name |

#### `cms_pages`
| Field | Type | Description |
|-------|------|-------------|
| `page_key` | text | e.g. `home`, `about`, `admissions` |
| `section_key` | text | e.g. `hero`, `mission`, `values` |
| `title_en` | text | English section title |
| `title_ar` | text | Arabic section title |
| `content_en` | rich_text | English content body |
| `content_ar` | rich_text | Arabic content body |
| `content_type` | text | `text` / `html` / `list` / `faq` / `stats` / `team` |
| `order` | number | Display order within page |
| `status` | text | `published` / `draft` / `archived` |

#### `cms_announcements`
| Field | Type | Description |
|-------|------|-------------|
| `title_en` / `title_ar` | text | Bilingual title |
| `body_en` / `body_ar` | rich_text | Bilingual content body |
| `category` | text | `general` / `academic` / `events` / `admissions` / `emergency` |
| `priority` | text | `normal` / `high` / `urgent` |
| `status` | text | `published` / `draft` / `scheduled` / `archived` |
| `pinned` | bool | Pin to top of list |
| `publish_date` / `expiry_date` | datetime | Visibility window |
| `audience` | text | `all` / `parents` / `students` / `staff` |

#### `cms_events`
| Field | Type | Description |
|-------|------|-------------|
| `title_en` / `title_ar` | text | Bilingual title |
| `description_en` / `description_ar` | rich_text | Bilingual description |
| `event_date` / `end_date` | datetime | Event dates |
| `start_time` / `end_time` | text | Time strings |
| `location_en` / `location_ar` | text | Bilingual venue |
| `status` | text | `upcoming` / `ongoing` / `completed` / `cancelled` |
| `capacity` | number | Max attendees |
| `featured` | bool | Featured on homepage |

#### `cms_staff`
| Field | Type | Description |
|-------|------|-------------|
| `name_en` / `name_ar` | text | Bilingual name |
| `title_en` / `title_ar` | text | Bilingual job title |
| `department` | text | Department |
| `photo_url` | text | Profile photo URL |
| `bio_en` / `bio_ar` | rich_text | Bilingual biography |
| `qualifications` | text | Degrees / certifications |
| `nationality` | text | Nationality |
| `years_experience` | number | Years of experience |
| `order` | number | Display order |
| `status` | text | `active` / `inactive` |
| `featured` | bool | Feature on homepage |
| `show_on_pages` | array | Pages to display on (`home`, `about`, `careers`) |
| `linkedin_url` | text | LinkedIn profile |

#### `cms_media`
| Field | Type | Description |
|-------|------|-------------|
| `url` | text | Full media URL |
| `title` | text | Display title |
| `type` | text | `image` / `video` / `document` |
| `alt_text` | text | Accessibility description |
| `page` | text | Associated page |
| `file_size` | text | Human-readable size |
| `width` / `height` | number | Dimensions |
| `status` | text | `active` / `archived` |

#### `cms_settings`
| Field | Type | Description |
|-------|------|-------------|
| `setting_key` | text | Unique key (e.g. `site_name_en`, `primary_color`) |
| `setting_value` | text | Value |
| `category` | text | `general` / `seo` / `social` / `contact` / `admissions` / `design` |
| `label` | text | Human-readable label |
| `updated_by` | text | Last editor name |

#### `cms_activity_log`
| Field | Type | Description |
|-------|------|-------------|
| `user_name` | text | Editor's display name |
| `user_role` | text | Editor's role |
| `action` | text | e.g. `created`, `updated`, `deleted`, `published` |
| `target_type` | text | e.g. `announcement`, `staff`, `setting` |
| `target_label` | text | Human-readable target description |
| `timestamp` | datetime | ISO 8601 timestamp |
| `ip_note` | text | Location note (e.g. `Dubai, UAE`) |

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
| Founded | 2005 |
| Grades | KG1 – Grade 12 |
| KHDA Rating | Good |
| Accreditation | Cognia |

---

## 🛠️ CSS Architecture

### Public Site

| File | Purpose | Approx. Size |
|------|---------|------|
| `style.css` | Core design system, CSS variables, all section layouts | ~128 KB |
| `nav.css` | Navigation overlay, topbar, rail, mobile nav | ~17 KB |
| `pages.css` | Inner-page headers, leadership card responsive rules (v6) | ~35 KB |
| `mobile.css` | Full mobile-first breakpoint overrides — v5 rewrite (v6 tag) | ~60 KB |
| `premium.css` | Decorative/premium elements | ~49 KB |
| `enhancements.css` | UX/UI enhancement pack (64 sections, v2 tag) | ~64 KB |
| `rtl.css` | Arabic RTL stylesheet (85 sections) | ~50 KB |

### Admin Panel

| File | Purpose | Size |
|------|---------|------|
| `admin/css/admin.css` | Complete admin design system — sidebar (incl. user block, sign-out), topbar, panels, forms, data tables, badges, modals, toasts, stat cards, responsive breakpoints | ~28,000 chars |

**Admin CSS variables:**
```css
:root {
  --navy: #0a1931;  --red: #c0272d;   --gold: #c9982a;
  --sidebar-w: 260px;  --topbar-h: 64px;
}
```

**Admin responsive breakpoints:**
- `≤900px` — sidebar off-canvas (`.admin-sidebar.open`), topbar hamburger shows
- `≤640px` — form rows collapse to single column
- `≤420px` — user info hidden in topbar, stats grid 1-column

---

## 🔧 JavaScript Architecture

### Public Site

| File | Purpose |
|------|---------|
| `nav.js` | Navigation open/close, mobile accordion, search redirect, active nav highlight |
| `main.js` | Hero slideshow, counters, scroll-reveal, testimonials, video lightbox, contact/admissions/hero forms (API), FAQ accordion, tour tabs, mobile CTA observer, parallax, gallery, announcement band, active section highlight, ripple, back-to-top |
| `img-fallback.js` | Replaces broken `<img>` and CSS `background-image` with local school photos |
| `i18n.js` | Full bilingual engine: 400+ key dictionary, `applyTranslations()`, `applyDir()`, `switchLang()`, `NAIS_i18n` public API |

### Admin Panel

| File | Purpose |
|------|---------|
| `admin/js/core.js` | Auth (login/logout/guard/roles), API (full CRUD wrapper), Toast, Modal, Sidebar, initUserPanel, initTabs, initTableSearch, confirmDelete, logActivity, badgeHtml, timeAgo, formatDate, initDraggable, copyToClipboard, emptyRow |

---

## 🌐 Bilingual System (EN / AR) — RTL Support

- **Storage:** `localStorage('nais_lang')` — persists across pages
- **Trigger:** Any `.lang-switcher[data-lang]` button
- **Body class:** `lang-ar` / `lang-en` for RTL CSS scoping
- **HTML dir:** `<html dir="rtl" lang="ar">` set automatically
- **Coverage:** 400+ translation keys across all 12 public pages; admin forms have EN + AR input pairs with `dir="rtl"` on Arabic fields

---

## ⚠️ Known Limitations / Pending Items

| Item | Note |
|------|------|
| **Video lightbox** | Shows "School Film Coming Soon" placeholder — no actual video file yet |
| **Campus Tour** | Uses real campus photos; no 360° iframe embed yet |
| **Google Maps** | Embeds approximate location; update with exact embed code |
| **Search results page** | `?search=term` redirects correctly but no results UI exists |
| **Email notifications** | Form submissions in Table API; no webhook/email forwarding set up |
| **CMS auth** | Demo credential auth only — no real server-side authentication |
| **Admin visual confirm** | CSS layout rewritten and all IDs corrected May 10 — verify sidebar, dropdown, and logout all work in browser |

---

## 🚀 Recommended Next Steps

1. **Add actual school video** to the video lightbox (replace "Coming Soon" with real `<iframe>`)
2. **School calendar integration** — ICS file download or live calendar embed
3. **Set up email forwarding** for `contact_submissions` (webhook → admissions email)
4. **Add Google Analytics 4** — paste the GA4 measurement ID into Settings → Analytics
5. **Add real 360° virtual tour** (Matterport or Google Maps Street View iframes)
6. **Add `sitemap.xml`** (machine-readable) for SEO search indexing
7. **Connect Meta Pixel / Hotjar** in Settings → Analytics → Connected Tools
8. **Add cookie consent banner** for GDPR/UAE compliance

---

## 🧪 Test Status

| Page | Console Errors | Last Tested |
|------|---------------|-------------|
| `admin/login.html` | ✅ 0 | May 10, 2026 |
| `admin/index.html` | ✅ 0 | May 10, 2026 |
| `admin/content.html` | ✅ 0 | May 10, 2026 |
| `admin/media.html` | ✅ 0 | May 10, 2026 |
| `admin/staff.html` | ✅ 0 | May 10, 2026 |
| `admin/announcements.html` | ✅ 0 | May 10, 2026 |
| `admin/events.html` | ✅ 0 | May 10, 2026 |
| `admin/admissions.html` | ✅ 0 | May 10, 2026 |
| `admin/results.html` | ✅ 0 | May 10, 2026 |
| `admin/gallery.html` | ✅ 0 | May 10, 2026 |
| `admin/documents.html` | ✅ 0 | May 10, 2026 |
| `admin/seo.html` | ✅ 0 | May 10, 2026 |
| `admin/users.html` | ✅ 0 | May 10, 2026 |
| `admin/settings.html` | ✅ 0 | May 10, 2026 |
| `index.html` | ✅ 0 | May 8, 2026 |
| `about.html` | ✅ 0 | May 10, 2026 |
| `admissions.html` | ✅ 0 | May 10, 2026 |
| `academics.html` | ✅ 0 | May 10, 2026 |
| `curriculum.html` | ✅ 0 | May 10, 2026 |
| `pbl.html` | ✅ 0 | May 10, 2026 |
| `parent-faq.html` | ✅ 0 | May 10, 2026 |
| `phase4-results.html` | ✅ 0 | May 10, 2026 |
| `privacy-policy.html` | ✅ 0 | May 10, 2026 |
| `terms-of-use.html` | ✅ 0 | May 10, 2026 |
| `safeguarding.html` | ✅ 0 | May 10, 2026 |
| `sitemap.html` | ✅ 0 | May 10, 2026 |

---

*Last updated: May 10, 2026 — Phase 4 sidebar expansion complete. 6 new admin pages created: `events.html`, `admissions.html`, `results.html`, `gallery.html`, `documents.html`, `seo.html`. All 14 admin pages updated with new sidebar: 🏫 logo, user profile block (avatar + name + role badge), expanded nav (Events, Admissions, Results, Gallery, Documents, SEO Manager, View Website), Sign Out button pinned to bottom. 6 new table schemas created and seeded: `cms_admissions` (5 rows), `cms_results` (4 rows), `cms_gallery` (5 rows), `cms_documents` (5 rows), `cms_seo` (5 rows), plus `cms_events` re-seeded (9 rows). `core.js` updated to wire `#sidebarSignOut`. `admin.css` updated with `.sidebar-user`, `.sidebar-user-badge`, `.sidebar-signout-btn`, `.nav-arrow`. All 26 pages (12 public + 14 admin) verified at 0 console errors.*
