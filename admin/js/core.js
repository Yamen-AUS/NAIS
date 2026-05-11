/* ═══════════════════════════════════════════════════════════════
   NAIS CMS — Core JavaScript
   Auth, API helpers, sidebar, toasts, modals, utilities
   IDs match all 8 admin HTML pages exactly.
═══════════════════════════════════════════════════════════════ */
'use strict';

/* ── Session version: bump this to force-logout all stale sessions ── */
const SESSION_VERSION = '2.1';

/* ── Demo credentials (in production: replace with real auth) ── */
const DEMO_USERS = [
  { email:'admin@naisdubai.ae',      password:'Admin@2025!',      name:'System Administrator', role:'super_admin',  avatar:'SA', department:'Executive' },
  { email:'principal@naisdubai.ae',  password:'Principal@2025!',  name:'School Principal',     role:'principal',    avatar:'SP', department:'Leadership' },
  { email:'marketing@naisdubai.ae',  password:'Marketing@2025!',  name:'Marketing Manager',    role:'marketing',    avatar:'MM', department:'Marketing' },
  { email:'admissions@naisdubai.ae', password:'Admissions@2025!', name:'Admissions Officer',   role:'admissions',   avatar:'AO', department:'Admissions' },
  { email:'academic@naisdubai.ae',   password:'Academic@2025!',   name:'Academic Coordinator', role:'academic',     avatar:'AC', department:'Academics' },
  { email:'viewer@naisdubai.ae',     password:'Viewer@2025!',     name:'Read-Only Viewer',     role:'readonly',     avatar:'RV', department:'General' }
];

const ROLE_LABELS = {
  super_admin: 'Super Admin', principal: 'Principal',
  marketing:   'Marketing',   admissions: 'Admissions',
  academic:    'Academic',    readonly:   'Read Only'
};

const ROLE_PERMISSIONS = {
  super_admin: { all: true },
  principal:   { content: true, staff: true, announcements: true, events: true, media: true },
  marketing:   { content: true, media: true, announcements: true, events: true },
  admissions:  { content: ['admissions'], announcements: true, events: true },
  academic:    { content: ['academics','curriculum','results'], staff: true, media: true },
  readonly:    { read: true }
};

/* ═══════════════════════════════════════════════
   AUTH
═══════════════════════════════════════════════ */
const Auth = {
  KEY: 'nais_cms_user',

  login(email, password) {
    const user = DEMO_USERS.find(u => u.email === email && u.password === password);
    if (!user) return false;
    const session = { ...user, loginTime: Date.now(), _v: SESSION_VERSION };
    localStorage.setItem(this.KEY, JSON.stringify(session));
    return true;
  },

  logout() {
    localStorage.removeItem(this.KEY);
    window.location.href = 'login.html';
  },

  getUser() {
    try {
      const u = JSON.parse(localStorage.getItem(this.KEY));
      // Clear stale sessions from older versions
      if (u && u._v !== SESSION_VERSION) {
        localStorage.removeItem(this.KEY);
        return null;
      }
      return u;
    } catch { return null; }
  },

  isLoggedIn() { return !!this.getUser(); },

  guard() {
    if (!this.isLoggedIn()) {
      window.location.href = 'login.html';
      return false;
    }
    return true;
  },

  can(action, page = null) {
    const user = this.getUser();
    if (!user) return false;
    const perms = ROLE_PERMISSIONS[user.role] || {};
    if (perms.all) return true;
    if (action === 'read') return true;
    if (perms.read && action === 'read') return true;
    if (perms[action] === true) return true;
    if (Array.isArray(perms[action]) && page && perms[action].includes(page)) return true;
    return false;
  }
};

/* ═══════════════════════════════════════════════
   API HELPERS
═══════════════════════════════════════════════ */
const API = {
  base: '../tables/',

  async get(table, params = {}) {
    const qs = new URLSearchParams({ limit: 100, ...params }).toString();
    const res = await fetch(`${this.base}${table}?${qs}`);
    if (!res.ok) throw new Error(`GET ${table} failed: ${res.status}`);
    return res.json();
  },

  async getOne(table, id) {
    const res = await fetch(`${this.base}${table}/${id}`);
    if (!res.ok) throw new Error(`GET ${table}/${id} failed`);
    return res.json();
  },

  async post(table, data) {
    const res = await fetch(`${this.base}${table}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`POST ${table} failed`);
    return res.json();
  },

  async put(table, id, data) {
    const res = await fetch(`${this.base}${table}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`PUT ${table}/${id} failed`);
    return res.json();
  },

  async patch(table, id, data) {
    const res = await fetch(`${this.base}${table}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`PATCH ${table}/${id} failed`);
    return res.json();
  },

  async delete(table, id) {
    const res = await fetch(`${this.base}${table}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error(`DELETE ${table}/${id} failed`);
    return true;
  }
};

/* ═══════════════════════════════════════════════
   ACTIVITY LOGGER
═══════════════════════════════════════════════ */
async function logActivity(action, targetType, targetLabel) {
  const user = Auth.getUser();
  if (!user) return;
  try {
    await API.post('cms_activity_log', {
      user_name: user.name,
      user_role: user.role,
      action,
      target_type: targetType,
      target_label: targetLabel,
      timestamp: new Date().toISOString(),
      ip_note: 'Dubai, UAE'
    });
  } catch (_) { /* silent — never break the page for logging */ }
}

/* ═══════════════════════════════════════════════
   TOAST NOTIFICATIONS
═══════════════════════════════════════════════ */
const Toast = {
  container: null,

  init() {
    this.container = document.getElementById('toast-container');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      this.container.id = 'toast-container';
      document.body.appendChild(this.container);
    }
  },

  show(title, msg = '', type = 'success', duration = 3500) {
    if (!this.container) this.init();
    const icons = {
      success: 'fa-check-circle',
      error:   'fa-times-circle',
      warning: 'fa-exclamation-triangle',
      info:    'fa-info-circle'
    };
    const toast = document.createElement('div');
    toast.className = `toast${type !== 'success' ? ' ' + type : ''}`;
    toast.innerHTML = `
      <i class="fas ${icons[type] || icons.success} toast-icon"></i>
      <div class="toast-body">
        <div class="toast-title">${title}</div>
        ${msg ? `<div class="toast-msg">${msg}</div>` : ''}
      </div>
      <button class="toast-close" onclick="this.closest('.toast').remove()">✕</button>`;
    this.container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.4s';
      setTimeout(() => toast.remove(), 400);
    }, duration);
  },

  success(title, msg) { this.show(title, msg, 'success'); },
  error(title, msg)   { this.show(title, msg, 'error'); },
  warning(title, msg) { this.show(title, msg, 'warning'); },
  info(title, msg)    { this.show(title, msg, 'info'); }
};

/* ═══════════════════════════════════════════════
   MODAL HELPERS
═══════════════════════════════════════════════ */
const Modal = {
  open(id)  { const m = document.getElementById(id); if (m) m.classList.add('open'); },
  close(id) { const m = document.getElementById(id); if (m) m.classList.remove('open'); },
  closeAll() { document.querySelectorAll('.modal-backdrop.open').forEach(m => m.classList.remove('open')); }
};

/* ═══════════════════════════════════════════════
   SIDEBAR
   HTML IDs used across all 8 pages:
     aside#adminSidebar
     button#sidebarToggle  (topbar hamburger)
     button#sidebarClose   (sidebar × button)
     div#sidebarOverlay
     .nav-item             (nav links)
═══════════════════════════════════════════════ */
const Sidebar = {
  init() {
    const sidebar  = document.getElementById('adminSidebar');
    const overlay  = document.getElementById('sidebarOverlay');
    const toggleBtn= document.getElementById('sidebarToggle');
    const closeBtn = document.getElementById('sidebarClose');

    if (!sidebar) return;

    toggleBtn?.addEventListener('click', () => this.toggle());
    closeBtn?.addEventListener('click',  () => this.close());
    overlay?.addEventListener('click',   () => this.close());

    // Mark the active nav-item by matching current filename
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(link => {
      const href = link.getAttribute('href')?.split('?')[0].split('/').pop();
      if (href === path || (path === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  },

  toggle() {
    const sidebar = document.getElementById('adminSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const isOpen  = sidebar?.classList.contains('open');
    isOpen ? this.close() : this.open();
  },

  open() {
    document.getElementById('adminSidebar')?.classList.add('open');
    document.getElementById('sidebarOverlay')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  close() {
    document.getElementById('adminSidebar')?.classList.remove('open');
    document.getElementById('sidebarOverlay')?.classList.remove('active');
    document.body.style.overflow = '';
  }
};

/* ═══════════════════════════════════════════════
   USER PANEL INIT
   Populates [data-user-name], [data-user-role],
   [data-user-avatar], [data-user-email], [data-user-dept]
   Wires up #logoutBtn and any [data-logout] elements
═══════════════════════════════════════════════ */
function initUserPanel() {
  const user = Auth.getUser();
  if (!user) return;

  document.querySelectorAll('[data-user-name]').forEach(el => { el.textContent = user.name; });
  document.querySelectorAll('[data-user-role]').forEach(el => { el.textContent = ROLE_LABELS[user.role] || user.role; });
  document.querySelectorAll('[data-user-avatar]').forEach(el => { el.textContent = user.avatar || user.name.slice(0, 2).toUpperCase(); });
  document.querySelectorAll('[data-user-email]').forEach(el => { el.textContent = user.email || ''; });
  document.querySelectorAll('[data-user-dept]').forEach(el => { el.textContent = user.department || ''; });

  // Wire the standard logout button used in all pages: id="logoutBtn"
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm('Log out of NAIS CMS?')) Auth.logout();
    });
  }

  // Wire sidebar sign-out button: id="sidebarSignOut"
  const sidebarSignOut = document.getElementById('sidebarSignOut');
  if (sidebarSignOut) {
    sidebarSignOut.addEventListener('click', () => {
      if (confirm('Log out of NAIS CMS?')) Auth.logout();
    });
  }

  // Also wire any elements with data-logout attribute (fallback)
  document.querySelectorAll('[data-logout]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Log out of NAIS CMS?')) Auth.logout();
    });
  });

  // Hide elements that require a role the current user doesn't have
  document.querySelectorAll('[data-require-role]').forEach(el => {
    const roles = el.dataset.requireRole.split(',').map(r => r.trim());
    if (!roles.includes(user.role) && !roles.includes('all')) {
      el.style.display = 'none';
    }
  });

  // Wire topbar user dropdown toggle
  const topbarUser = document.getElementById('topbarUser');
  const dropdown   = document.getElementById('userDropdown');
  if (topbarUser && dropdown) {
    topbarUser.addEventListener('click', e => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });
    document.addEventListener('click', () => dropdown.classList.remove('open'));
  }
}

/* ═══════════════════════════════════════════════
   TABS
   .tabs-nav > .tab-btn[data-tab="x"]
   .tab-pane[data-tab="x"]
═══════════════════════════════════════════════ */
function initTabs(container = document) {
  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const navEl  = btn.closest('.tabs-nav');
      const target = btn.dataset.tab;

      // Deactivate sibling tab buttons
      navEl?.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show matching tab pane — scope to the nearest tabs wrapper if present
      const wrapper = navEl?.closest('.tabs-wrapper') || document;
      wrapper.querySelectorAll('.tab-pane').forEach(p => {
        p.classList.toggle('active', p.dataset.tab === target);
      });
    });
  });
}

/* ═══════════════════════════════════════════════
   CLIENT-SIDE TABLE SEARCH
═══════════════════════════════════════════════ */
function initTableSearch(inputId, tableBodyId) {
  const input = document.getElementById(inputId);
  const tbody = document.getElementById(tableBodyId);
  if (!input || !tbody) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    tbody.querySelectorAll('tr').forEach(row => {
      row.style.display = (q === '' || row.textContent.toLowerCase().includes(q)) ? '' : 'none';
    });
  });
}

/* ═══════════════════════════════════════════════
   CONFIRM DELETE HELPER
═══════════════════════════════════════════════ */
function confirmDelete(label, onConfirm) {
  const modal     = document.getElementById('confirm-modal');
  const msgEl     = document.getElementById('confirm-msg');
  const confirmBtn= document.getElementById('confirm-btn');

  if (!modal) {
    // Fallback if the confirm modal markup isn't present
    if (confirm(`Delete "${label}"? This cannot be undone.`)) onConfirm();
    return;
  }

  if (msgEl) msgEl.textContent = `Are you sure you want to delete "${label}"? This cannot be undone.`;

  // Replace confirm button to remove any previous listener
  const newBtn = confirmBtn.cloneNode(true);
  confirmBtn.parentNode.replaceChild(newBtn, confirmBtn);
  newBtn.addEventListener('click', () => {
    Modal.close('confirm-modal');
    onConfirm();
  });

  Modal.open('confirm-modal');
}

/* ═══════════════════════════════════════════════
   RELATIVE TIME
═══════════════════════════════════════════════ */
function timeAgo(dateStr) {
  if (!dateStr) return 'Unknown';
  const date = new Date(typeof dateStr === 'number' ? dateStr : dateStr);
  const diff  = Date.now() - date.getTime();
  const min   = Math.floor(diff / 60000);
  if (min < 1)  return 'Just now';
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr  < 24) return `${hr}h ago`;
  const d  = Math.floor(hr / 24);
  if (d   < 7)  return `${d}d ago`;
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

/* ═══════════════════════════════════════════════
   FORMAT DATE
═══════════════════════════════════════════════ */
function formatDate(dateStr, opts = {}) {
  if (!dateStr) return '—';
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric', ...opts
    });
  } catch { return '—'; }
}

/* ═══════════════════════════════════════════════
   BADGE HTML HELPER
   Generates: <span class="badge badge-{status}">label</span>
   All badge-* classes are defined in admin.css
═══════════════════════════════════════════════ */
function badgeHtml(status) {
  if (!status) return '<span class="badge badge-gray">—</span>';
  const map = {
    published:  'badge-published',
    active:     'badge-active',
    draft:      'badge-draft',
    pending:    'badge-pending',
    scheduled:  'badge-scheduled',
    archived:   'badge-archived',
    expired:    'badge-expired',
    completed:  'badge-completed',
    upcoming:   'badge-upcoming',
    ongoing:    'badge-ongoing',
    cancelled:  'badge-cancelled',
    emergency:  'badge-red',
    high:       'badge-red',
    normal:     'badge-navy',
    inactive:   'badge-archived',
    open:       'badge-green',
    limited:    'badge-gold',
    closed:     'badge-red',
    featured:   'badge-gold',
    teal:       'badge-teal'
  };
  const cls   = map[status.toLowerCase()] || 'badge-navy';
  const label = status.charAt(0).toUpperCase() + status.slice(1);
  return `<span class="badge ${cls}">${label}</span>`;
}

/* ═══════════════════════════════════════════════
   DRAG-AND-DROP (content / media reorder)
═══════════════════════════════════════════════ */
function initDraggable(listEl) {
  if (!listEl) return;
  let dragEl = null;

  listEl.querySelectorAll('[draggable="true"]').forEach(item => {
    item.addEventListener('dragstart', () => { dragEl = item; item.style.opacity = '0.4'; });
    item.addEventListener('dragend',   () => { dragEl = null; item.style.opacity = ''; });
    item.addEventListener('dragover',  e => { e.preventDefault(); });
    item.addEventListener('drop', e => {
      e.preventDefault();
      if (dragEl && dragEl !== item) {
        const items   = [...listEl.children];
        const fromIdx = items.indexOf(dragEl);
        const toIdx   = items.indexOf(item);
        if (fromIdx < toIdx) item.after(dragEl); else item.before(dragEl);
      }
    });
  });
}

/* ═══════════════════════════════════════════════
   COPY TO CLIPBOARD HELPER
═══════════════════════════════════════════════ */
async function copyToClipboard(text, successMsg = 'Copied!') {
  try {
    await navigator.clipboard.writeText(text);
    Toast.success(successMsg);
  } catch {
    // Fallback for non-secure contexts
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity  = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    Toast.success(successMsg);
  }
}

/* ═══════════════════════════════════════════════
   EMPTY STATE HELPER
   Returns an HTML string for a "nothing here yet" cell
═══════════════════════════════════════════════ */
function emptyRow(colspan, message = 'No records found.') {
  return `<tr><td colspan="${colspan}" style="text-align:center;padding:40px 16px;color:var(--gray400);font-size:13px;">
    <i class="fas fa-inbox" style="font-size:28px;display:block;margin-bottom:10px;opacity:0.35;"></i>
    ${message}
  </td></tr>`;
}

/* ═══════════════════════════════════════════════
   GLOBAL INIT — runs on every admin page
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Auth guard — skip on login page itself
  if (!window.location.pathname.includes('login.html')) {
    if (!Auth.guard()) return;
  }

  Toast.init();
  Sidebar.init();
  initUserPanel();
  initTabs();

  // Close any modal when clicking its backdrop
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) backdrop.classList.remove('open');
    });
  });

  // Wire [data-modal-close] buttons (close the nearest .modal-backdrop)
  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal-backdrop')?.classList.remove('open');
    });
  });

  // Close user dropdown on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('userDropdown')?.classList.remove('open');
      Modal.closeAll();
      Sidebar.close();
    }
  });
});
