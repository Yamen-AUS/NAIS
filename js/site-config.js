/**
 * site-config.js — NAIS Dubai CMS → Website Live Sync
 * ─────────────────────────────────────────────────────
 * Loads site settings from the CMS (cms_settings table) and injects
 * them into every public page at runtime via data-config attributes.
 *
 * Usage:  Add  data-config="KEY"  to any element whose text or href
 *         should be driven by a CMS setting.
 *
 * Supported data-config values:
 *   phone        → contact_phone   (text + href on <a>)
 *   phone2       → contact_phone2
 *   whatsapp     → contact_whatsapp (href on <a>)
 *   email_adm    → contact_email_adm (text + href on <a>)
 *   email_gen    → contact_email_gen (text + href on <a>)
 *   address_en   → contact_address_en
 *   address_ar   → contact_address_ar
 *   hours        → contact_hours
 *   hours_ar     → contact_hours_ar
 *   maps_url     → maps_embed_url   (src on <iframe>)
 *   site_name    → site_name
 *   site_tagline → site_tagline
 *
 * The script exposes window.NAIS_CONFIG as a plain key→value map
 * so other scripts (i18n.js, nav.js) can read config values too.
 */

(function () {
  'use strict';

  /* ─── Fallback defaults (shown while loading / on fetch failure) ─── */
  var DEFAULTS = {
    contact_phone:      '+971 4 263 5456',
    contact_phone2:     '+971 4 263 5457',
    contact_whatsapp:   '+971 4 263 5456',
    contact_email_adm:  'admissions@naischool.ae',
    contact_email_gen:  'info@naischool.ae',
    contact_address_en: 'Al Mizhar 1, Mirdif, Dubai, UAE',
    contact_address_ar: 'الميزهر 1، مردف، دبي، الإمارات',
    contact_hours:      'Mon–Thu: 7:30 AM – 03:30 PM',
    contact_hours_ar:   'الاثنين–الخميس: 7:30 ص – 3:30 م',
    maps_embed_url:     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7',
    site_name:          'NAIS Dubai',
    site_tagline:       'Where Every Student Thrives'
  };

  /* ─── data-config key → setting_key map ─── */
  var KEY_MAP = {
    'phone':        'contact_phone',
    'phone2':       'contact_phone2',
    'whatsapp':     'contact_whatsapp',
    'email_adm':    'contact_email_adm',
    'email_gen':    'contact_email_gen',
    'address_en':   'contact_address_en',
    'address_ar':   'contact_address_ar',
    'hours':        'contact_hours',
    'hours_ar':     'contact_hours_ar',
    'maps_url':     'maps_embed_url',
    'site_name':    'site_name',
    'site_tagline': 'site_tagline'
  };

  /* ─── Detect whether we are on a static host (server without Table API) ─── */
  var IS_STATIC_HOST = (function () {
    var h = window.location.hostname;
    if (h === 'localhost' || h === '127.0.0.1' || h === '') return false;
    if (h.indexOf('genspark') !== -1) return false;
    return true;
  })();

  /* ─── In-page static fallback data (mirrors cms_settings seed) ─── */
  /* Used on static deployments where the Table API is unavailable           */
  var STATIC_SETTINGS = {
    contact_address_en: 'Al Mizhar 1, Mirdif, Dubai, UAE',
    contact_address_ar: 'الميزهر 1، مردف، دبي، الإمارات',
    contact_phone:      '+971 4 263 5456',
    contact_phone2:     '+971 4 263 5457',
    contact_whatsapp:   '+971 4 263 5456',
    contact_email_adm:  'admissions@naischool.ae',
    contact_email_gen:  'info@naischool.ae',
    contact_hours:      'Mon–Thu: 7:30 AM – 03:30 PM',
    contact_hours_ar:   'الاثنين–الخميس: 7:30 ص – 3:30 م',
    maps_embed_url:     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7',
    site_name:          'NAIS Dubai',
    site_tagline:       'Where Every Student Thrives',
    admissions_open:    'true',
    maintenance_mode:   'false'
  };

  /* ─── Apply config to DOM ─── */
  function applyConfig(config) {
    /* Expose globally for i18n.js / nav.js */
    window.NAIS_CONFIG = config;

    /* Inject into every [data-config] element */
    document.querySelectorAll('[data-config]').forEach(function (el) {
      var alias = el.getAttribute('data-config');
      var settingKey = KEY_MAP[alias] || alias;
      var value = config[settingKey];
      if (!value) return;

      var tag = el.tagName.toLowerCase();

      if (tag === 'iframe') {
        /* Maps embed */
        el.src = value;
        return;
      }

      if (tag === 'a') {
        /* Determine href scheme */
        if (settingKey.indexOf('phone') !== -1 || settingKey.indexOf('whatsapp') !== -1) {
          var digits = value.replace(/[\s\-()]/g, '');
          el.href = 'tel:' + digits;
        } else if (settingKey.indexOf('email') !== -1) {
          el.href = 'mailto:' + value;
        }
        el.textContent = value;
        return;
      }

      /* Default: set text content (preserves child elements by checking first) */
      if (el.children.length === 0) {
        el.textContent = value;
      } else {
        /* Has child elements — only update text nodes, not child element content */
        el.childNodes.forEach(function (node) {
          if (node.nodeType === 3 /* TEXT_NODE */ && node.textContent.trim()) {
            node.textContent = value;
          }
        });
      }
    });

    /* ── Also update href on <a> tags that WRAP a [data-config] element ── */
    document.querySelectorAll('a[data-config-href]').forEach(function (el) {
      var alias = el.getAttribute('data-config-href');
      var settingKey = KEY_MAP[alias] || alias;
      var value = config[settingKey];
      if (!value) return;
      if (settingKey.indexOf('phone') !== -1 || settingKey.indexOf('whatsapp') !== -1) {
        el.href = 'tel:' + value.replace(/[\s\-()]/g, '');
      } else if (settingKey.indexOf('email') !== -1) {
        el.href = 'mailto:' + value;
      }
    });

    /* ── Dispatch event so i18n.js can re-apply translated values ── */
    document.dispatchEvent(new CustomEvent('nais:config-loaded', { detail: config }));
  }

  /* ─── Convert API rows array → flat key/value map ─── */
  function rowsToMap(rows) {
    var map = Object.assign({}, DEFAULTS);
    (rows || []).forEach(function (row) {
      if (row.setting_key && row.setting_value !== undefined) {
        map[row.setting_key] = row.setting_value;
      }
    });
    return map;
  }

  /* ─── Fetch from Table API ─── */
  function fetchFromAPI() {
    return fetch('tables/cms_settings?limit=100')
      .then(function (res) {
        if (!res.ok) throw new Error('cms_settings API error: ' + res.status);
        return res.json();
      })
      .then(function (json) {
        return rowsToMap(json.data || []);
      });
  }

  /* ─── Main init ─── */
  function init() {
    /* Apply defaults immediately so page looks correct before fetch resolves */
    applyConfig(Object.assign({}, DEFAULTS));

    if (IS_STATIC_HOST) {
      /* Static host — use built-in data, no network call needed */
      applyConfig(rowsToMap(
        Object.keys(STATIC_SETTINGS).map(function (k) {
          return { setting_key: k, setting_value: STATIC_SETTINGS[k] };
        })
      ));
      return;
    }

    /* Live preview — fetch real data from API */
    fetchFromAPI()
      .then(function (config) {
        applyConfig(config);
      })
      .catch(function (err) {
        console.warn('[site-config] Could not load cms_settings, using defaults.', err);
        /* Defaults already applied above — nothing more to do */
      });
  }

  /* Run after DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
