/* ============================================================
   NAIS DUBAI – Navigation JS  (clean rewrite)
   ============================================================ */

(function () {
  'use strict';

  /* ── DOM references ── */
  const html         = document.documentElement;
  const header       = document.getElementById('site-header');
  const navRail      = document.getElementById('nav-rail');
  const navOverlay   = document.getElementById('nav-overlay');
  const navClose     = document.getElementById('nav-close');
  const desktopLines = document.getElementById('nav-desktop-lines');
  const desktopLabel = document.getElementById('nav-desktop-label');
  const mobileToggle = document.getElementById('nav-mobile-toggle');

  /* ═══════════════════════════════════════
     Open / close overlay
     CSS handles everything via .open class
  ═══════════════════════════════════════ */
  function openNav() {
    if (!navOverlay) return;
    navOverlay.classList.add('open');
    navOverlay.setAttribute('aria-hidden', 'false');
    html.classList.add('nav-open');
    if (navRail) navRail.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    if (!navOverlay) return;
    navOverlay.classList.remove('open');
    navOverlay.setAttribute('aria-hidden', 'true');
    html.classList.remove('nav-open');
    if (navRail) navRail.setAttribute('aria-expanded', 'false');
    // collapse any open mobile sub-menus
    document.querySelectorAll('.nav-primary-item.open').forEach(function (item) {
      item.classList.remove('open');
    });
  }

  /* ── Desktop: click anywhere on the nav rail ── */
  if (navRail) {
    navRail.addEventListener('click', function () {
      if (window.innerWidth >= 1200) openNav();
    });
  }
  if (desktopLines) desktopLines.addEventListener('click', function (e) {
    e.stopPropagation(); openNav();
  });
  if (desktopLabel) desktopLabel.addEventListener('click', function (e) {
    e.stopPropagation(); openNav();
  });

  /* ── Mobile: hamburger toggle ── */
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      navOverlay && navOverlay.classList.contains('open') ? closeNav() : openNav();
    });
  }

  /* ── Close button ── */
  const navCloseInner = document.querySelector('.nav-close-inner');
  if (navCloseInner) navCloseInner.addEventListener('click', closeNav);
  if (navClose) navClose.addEventListener('click', function (e) {
    if (e.target === navClose) closeNav(); // click on wrapper too
  });

  /* ── Escape key ── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  /* ═══════════════════════════════════════
     Sticky header on scroll (desktop)
  ═══════════════════════════════════════ */
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('header-sticky', window.scrollY > 60);
    }, { passive: true });
  }

  /* ═══════════════════════════════════════
     Mobile accordion: primary nav items
  ═══════════════════════════════════════ */
  document.querySelectorAll('.nav-primary-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth < 1200) {
        const item   = link.closest('.nav-primary-item');
        const subNav = item ? item.querySelector('.nav-subnav') : null;
        if (subNav) {
          e.preventDefault();
          document.querySelectorAll('.nav-primary-item.open').forEach(function (openItem) {
            if (openItem !== item) openItem.classList.remove('open');
          });
          item.classList.toggle('open');
        }
      }
    });
  });

  /* ── Mobile: level-3 sub-items ── */
  document.querySelectorAll('.nav-subnav-item--has-children > .nav-subnav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth < 1200) {
        e.preventDefault();
        const item = link.closest('.nav-subnav-item');
        if (item) item.classList.toggle('open');
      }
    });
  });

  /* ═══════════════════════════════════════
     Highlight active page
  ═══════════════════════════════════════ */
  (function () {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-primary-link').forEach(function (link) {
      const href = (link.getAttribute('href') || '').split('#')[0].split('/').pop();
      if (href && href !== '' && path.includes(href)) {
        const item = link.closest('.nav-primary-item');
        if (item) item.classList.add('active');
      }
    });
  })();

  /* ═══════════════════════════════════════
     Search submit
  ═══════════════════════════════════════ */
  const searchInput = document.querySelector('.nav-search-input');
  const searchBtn   = document.querySelector('.nav-search-btn');

  function doSearch() {
    const term = encodeURIComponent((searchInput ? searchInput.value : '').trim());
    if (term) window.location.href = 'index.html?search=' + term;
  }
  if (searchInput) searchInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') doSearch(); });
  if (searchBtn)   searchBtn.addEventListener('click', doSearch);

  /* ═══════════════════════════════════════
     Hero slideshow
  ═══════════════════════════════════════ */
  (function () {
    const slides = document.querySelectorAll('.hero-slide');
    const dots   = document.querySelectorAll('.hero-dot');
    if (!slides.length) return;
    let current = 0;
    let timer   = setInterval(next, 6000);

    function goTo(i) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = (i + slides.length) % slides.length;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }
    function next() { goTo(current + 1); }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        clearInterval(timer); goTo(i);
        timer = setInterval(next, 6000);
      });
    });
  })();

  /* ═══════════════════════════════════════
     Animated counters
  ═══════════════════════════════════════ */
  (function () {
    function runCounter(el) {
      var target = parseInt(el.getAttribute('data-target'), 10);
      if (isNaN(target)) return;
      var current = 0;
      var step = Math.ceil(target / (2200 / 16));
      var interval = setInterval(function () {
        current += step;
        if (current >= target) { current = target; clearInterval(interval); }
        el.textContent = current.toLocaleString();
      }, 16);
    }

    /* Hero stats (.stat-number) */
    var heroCounters = document.querySelectorAll('.stat-number[data-target]');
    if (heroCounters.length) {
      var heroObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          runCounter(entry.target);
          heroObserver.unobserve(entry.target);
        });
      }, { threshold: 0.3 });
      heroCounters.forEach(function (c) { heroObserver.observe(c); });
    }

    /* Full stats section (.stat-count) */
    var fullCounters = document.querySelectorAll('.stat-count[data-target]');
    if (fullCounters.length) {
      var started = false;
      var fullObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || started) return;
          started = true;
          fullCounters.forEach(function (el) { runCounter(el); });
          fullObserver.disconnect();
        });
      }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });
      /* observe the section wrapper, not individual elements */
      var statsSection = document.querySelector('.stats-section');
      if (statsSection) {
        fullObserver.observe(statsSection);
      } else {
        /* fallback: observe first counter directly */
        fullObserver.observe(fullCounters[0]);
      }
    }
  })();

  /* ═══════════════════════════════════════
     Scroll-reveal animations
  ═══════════════════════════════════════ */
  (function () {
    const els = document.querySelectorAll(
      '.animate-fade-up, .welcome-image-col, .welcome-content-col, ' +
      '.program-card, .stat-block, .news-card, .testimonial-card, .care-item'
    );
    if (!els.length) return;
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { el.classList.add('will-reveal'); observer.observe(el); });
  })();

  /* ═══════════════════════════════════════
     Stagger-children + animate-fade-up observer
     (handles inner pages: about, academics, admissions)
  ═══════════════════════════════════════ */
  (function () {
    const allAnimated = document.querySelectorAll('.stagger-children, .animate-fade-up');
    if (!allAnimated.length) return;
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '100px 0px 100px 0px' });
    allAnimated.forEach(function (el) { obs.observe(el); });
  })();

  /* ═══════════════════════════════════════
     Testimonials slider  (fixed selectors)
  ═══════════════════════════════════════ */
  (function () {
    var track  = document.querySelector('.testimonial-track');
    if (!track) return;
    var cards  = track.querySelectorAll('.testimonial-card');
    var dots   = document.querySelectorAll('.t-dot');
    /* FIX: HTML uses #testimonial-prev / #testimonial-next, not .t-prev/.t-next */
    var prevBtn = document.getElementById('testimonial-prev');
    var nextBtn = document.getElementById('testimonial-next');
    if (!cards.length) return;
    var current = 0;
    var timer   = setInterval(function () { goTo(current + 1); }, 6000);

    function goTo(i) {
      cards[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = (i + cards.length) % cards.length;
      cards[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }
    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(function () { goTo(current + 1); }, 6000);
    }
    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); resetTimer(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); resetTimer(); });
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); resetTimer(); });
    });
  })();

  /* ═══════════════════════════════════════
     FAQ accordion (admissions page)
  ═══════════════════════════════════════ */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item   = btn.closest('.faq-item');
      const answer = item ? item.querySelector('.faq-answer') : null;
      const isOpen = item ? item.classList.contains('open') : false;
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        openItem.classList.remove('open');
        const a = openItem.querySelector('.faq-answer');
        if (a) a.style.maxHeight = '0';
      });
      if (!isOpen && item) {
        item.classList.add('open');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 40 + 'px';
      }
    });
  });

  /* ═══════════════════════════════════════
     Admissions form
  ═══════════════════════════════════════ */
  const admissionsForm = document.getElementById('admissions-form');
  if (admissionsForm) {
    admissionsForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const successMsg = document.getElementById('adm-form-success');
      const btn = admissionsForm.querySelector('button[type="submit"]');
      if (btn) { btn.textContent = 'Submitting...'; btn.disabled = true; }
      setTimeout(function () {
        admissionsForm.reset();
        if (btn) { btn.textContent = 'Submit Enquiry'; btn.disabled = false; }
        if (successMsg) {
          successMsg.style.display = 'flex';
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(function () { successMsg.style.display = 'none'; }, 6000);
        }
      }, 1400);
    });
  }

  /* ═══════════════════════════════════════
     Back-to-top button
  ═══════════════════════════════════════ */
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ═══════════════════════════════════════
     Announcement ticker
  ═══════════════════════════════════════ */
  (function () {
    const ticker = document.querySelector('.ann-ticker span');
    if (!ticker) return;
    ticker.style.animation = 'ticker 35s linear infinite';
  })();

  /* ═══════════════════════════════════════
     Hero mini form (lead capture)
  ═══════════════════════════════════════ */
  (function () {
    const heroMiniForm = document.getElementById('hero-mini-form');
    if (!heroMiniForm) return;
    heroMiniForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var inputs = heroMiniForm.querySelectorAll('input[required]');
      var valid = true;
      inputs.forEach(function (inp) {
        if (!inp.value.trim()) {
          valid = false;
          inp.style.borderColor = 'rgba(225,27,34,0.7)';
          inp.addEventListener('input', function () { inp.style.borderColor = ''; }, { once: true });
        }
      });
      if (!valid) return;
      var btn = heroMiniForm.querySelector('.btn-cta-mini');
      if (btn) {
        btn.innerHTML = '<i class="fas fa-check"></i> Sent! We\'ll be in touch.';
        btn.style.background = '#1A9B5C';
        btn.disabled = true;
      }
    });
  })();

  /* ═══════════════════════════════════════
     Fade-in Why/Calendar/QuickAccess cards on scroll
  ═══════════════════════════════════════ */
  (function () {
    var cards = document.querySelectorAll('.why-card, .calendar-card, .quick-access-card, .achievement-badge, .care-card');
    if (!cards.length) return;
    // Only animate if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('anim-pending');
          entry.target.classList.add('visible-now');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '100px 0px 100px 0px' });
    cards.forEach(function (el) {
      el.classList.add('fade-in-card', 'anim-pending');
      obs.observe(el);
    });
    // Safety: show everything after 0.8s regardless
    setTimeout(function () {
      document.querySelectorAll('.anim-pending').forEach(function (el) {
        el.classList.remove('anim-pending');
        el.classList.add('visible-now');
      });
    }, 800);
  })();

  // Global safety: force all stagger/animate-fade elements visible after 1s
  setTimeout(function () {
    document.body.classList.add('anim-ready');
    document.querySelectorAll('.animate-fade-up:not(.in-view), .stagger-children:not(.in-view)').forEach(function (el) {
      el.classList.add('in-view');
    });
  }, 1000);

  /* ═══════════════════════════════════════
     Contact Form — Table API + validation
  ═══════════════════════════════════════ */
  (function () {
    var form = document.getElementById('contact-form');
    if (!form) return;

    function showFieldError(field, msg) {
      field.style.borderColor = '#E11B22';
      field.style.boxShadow = '0 0 0 3px rgba(225,27,34,0.15)';
      var errEl = field.parentElement.querySelector('.field-error');
      if (!errEl) {
        errEl = document.createElement('span');
        errEl.className = 'field-error';
        errEl.style.cssText = 'color:#E11B22;font-size:0.72rem;margin-top:4px;display:block;font-weight:600;';
        field.parentElement.appendChild(errEl);
      }
      errEl.textContent = msg;
    }
    function clearFieldError(field) {
      field.style.borderColor = '';
      field.style.boxShadow = '';
      var errEl = field.parentElement.querySelector('.field-error');
      if (errEl) errEl.remove();
    }
    function validateEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

    form.querySelectorAll('input, select, textarea').forEach(function (f) {
      f.addEventListener('input', function () { clearFieldError(f); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var parentName   = form.querySelector('#parent-name');
      var studentName  = form.querySelector('#student-name');
      var email        = form.querySelector('#email');
      var phone        = form.querySelector('#phone');
      var grade        = form.querySelector('#grade');
      var message      = form.querySelector('#message');
      var submitBtn    = form.querySelector('button[type="submit"]');
      var successBox   = document.getElementById('form-success');
      var valid = true;

      [parentName, studentName, email, grade].forEach(function (f) { clearFieldError(f); });

      if (!parentName.value.trim()) { showFieldError(parentName, 'Please enter your name'); valid = false; }
      if (!studentName.value.trim()) { showFieldError(studentName, "Please enter the student's name"); valid = false; }
      if (!email.value.trim() || !validateEmail(email.value.trim())) { showFieldError(email, 'Please enter a valid email address'); valid = false; }
      if (!grade.value) { showFieldError(grade, 'Please select a grade level'); valid = false; }
      if (!valid) { form.querySelector('.field-error').closest('.form-group').querySelector('input,select,textarea').focus(); return; }

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

      var payload = {
        parent_name:  parentName.value.trim(),
        student_name: studentName.value.trim(),
        email:        email.value.trim(),
        phone:        (phone ? phone.value.trim() : ''),
        grade:        grade.value,
        message:      (message ? message.value.trim() : ''),
        source:       'contact-form'
      };

      fetch('tables/contact_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(function (r) { return r.json(); })
      .then(function () {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
        if (successBox) {
          successBox.style.display = 'flex';
          successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(function () { successBox.style.display = 'none'; }, 7000);
        }
      })
      .catch(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
        alert('Sorry, there was an error. Please try calling us directly: ' + ((window.NAIS_CONFIG && window.NAIS_CONFIG.contact_phone) || '+971 4 263 5456'));
      });
    });
  })();

  /* ═══════════════════════════════════════
     Hero Mini Form — Table API submission
  ═══════════════════════════════════════ */
  (function () {
    var heroMiniForm = document.getElementById('hero-mini-form');
    if (!heroMiniForm) return;
    heroMiniForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var inputs = heroMiniForm.querySelectorAll('input[required]');
      var valid = true;
      inputs.forEach(function (inp) {
        if (!inp.value.trim()) {
          valid = false;
          inp.style.borderColor = 'rgba(225,27,34,0.9)';
          inp.style.background  = 'rgba(225,27,34,0.08)';
          inp.addEventListener('input', function () {
            inp.style.borderColor = '';
            inp.style.background  = '';
          }, { once: true });
        }
      });
      if (!valid) return;
      var btn = heroMiniForm.querySelector('.btn-cta-mini');
      if (btn) { btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…'; btn.disabled = true; }

      var gradeEl = heroMiniForm.querySelector('select');
      fetch('tables/contact_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          parent_name:  inputs[0] ? inputs[0].value.trim() : '',
          phone:        inputs[1] ? inputs[1].value.trim() : '',
          email:        inputs[2] ? inputs[2].value.trim() : '',
          grade:        gradeEl   ? gradeEl.value : '',
          source:       'hero-mini-form'
        })
      })
      .then(function () {
        heroMiniForm.reset();
        if (btn) {
          btn.innerHTML = '<i class="fas fa-check"></i> Sent! We\'ll be in touch.';
          btn.style.background = '#1A9B5C';
          btn.disabled = true;
          setTimeout(function () {
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Get Information';
            btn.style.background = '';
            btn.disabled = false;
          }, 5000);
        }
      })
      .catch(function () {
        if (btn) { btn.innerHTML = '<i class="fas fa-paper-plane"></i> Get Information'; btn.disabled = false; }
      });
    });
  })();

  /* ═══════════════════════════════════════
     Sticky Mobile CTA Bar
  ═══════════════════════════════════════ */
  (function () {
    var bar = document.getElementById('mobile-sticky-cta');
    if (!bar) return;
    var heroSection = document.getElementById('hero');
    if (!heroSection) { bar.classList.add('visible'); return; }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        bar.classList.toggle('visible', !entry.isIntersecting);
      });
    }, { threshold: 0.1 });
    obs.observe(heroSection);
  })();

  /* ═══════════════════════════════════════
     Video play button — open in lightbox
  ═══════════════════════════════════════ */
  (function () {
    var playBtn = document.querySelector('.video-play-btn');
    if (!playBtn) return;
    playBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var overlay = document.getElementById('video-lightbox');
      if (overlay) {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
    var lightbox = document.getElementById('video-lightbox');
    if (lightbox) {
      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox || e.target.classList.contains('vl-close')) {
          lightbox.style.display = 'none';
          document.body.style.overflow = '';
          var iframe = lightbox.querySelector('iframe');
          if (iframe) { var s = iframe.src; iframe.src = ''; iframe.src = s; }
        }
      });
    }
  })();

  /* ═══════════════════════════════════════
     Scroll-to-top smooth for anchor links
  ═══════════════════════════════════════ */
  (function () {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var hash = a.getAttribute('href');
        if (hash === '#') return;
        var target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          var offset = window.innerWidth >= 1200 ? 20 : 70;
          var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  })();

})();
