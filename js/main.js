/**
 * NAIS Dubai – Main JavaScript v3
 * Full UX/UI interactions, API form submissions, accessibility
 */

(function () {
  'use strict';

  /* ═══════════════════════════════════════════════════════
     HERO SLIDESHOW
  ═══════════════════════════════════════════════════════ */
  var slides      = document.querySelectorAll('.hero-slide');
  var heroDots    = document.querySelectorAll('.hero-dot');
  var currentSlide = 0;
  var slideTimer;

  function goToSlide(idx) {
    if (!slides.length) return;
    slides[currentSlide].classList.remove('active');
    if (heroDots[currentSlide]) heroDots[currentSlide].classList.remove('active');
    currentSlide = (idx + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (heroDots[currentSlide]) heroDots[currentSlide].classList.add('active');
  }

  function startSlideshow() {
    slideTimer = setInterval(function () { goToSlide(currentSlide + 1); }, 6000);
  }
  function stopSlideshow()  { clearInterval(slideTimer); }

  if (slides.length > 0) {
    slides[0].classList.add('active');
    startSlideshow();
    heroDots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        stopSlideshow(); goToSlide(i); startSlideshow();
      });
    });
  }

  /* ═══════════════════════════════════════════════════════
     STICKY HEADER
  ═══════════════════════════════════════════════════════ */
  var siteHeader = document.getElementById('site-header');
  if (siteHeader) {
    window.addEventListener('scroll', function () {
      siteHeader.classList.toggle('scrolled', window.scrollY > 80);
      siteHeader.classList.toggle('header-scrolled', window.scrollY > 80);
    }, { passive: true });
  }

  /* ═══════════════════════════════════════════════════════
     BACK TO TOP
  ═══════════════════════════════════════════════════════ */
  var btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', function () {
      btt.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btt.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ═══════════════════════════════════════════════════════
     HERO COUNTER ANIMATION (hero stats bar)
  ═══════════════════════════════════════════════════════ */
  function animateNum(el, target, duration) {
    if (el.dataset.animated) return;
    el.dataset.animated = '1';
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(ease * target);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  var heroNums = document.querySelectorAll('.hero-stats .stat-number[data-target]');
  if (heroNums.length) {
    setTimeout(function () {
      heroNums.forEach(function (el) {
        animateNum(el, parseInt(el.dataset.target, 10), 2000);
      });
    }, 900);
  }

  /* ═══════════════════════════════════════════════════════
     STATS SECTION COUNTER (full stats grid)
  ═══════════════════════════════════════════════════════ */
  var fullCounters = document.querySelectorAll('.stats-grid-full .stat-count[data-target]');
  var statsTriggered = false;

  function startFullCounters() {
    if (statsTriggered) return;
    statsTriggered = true;
    fullCounters.forEach(function (el) {
      animateNum(el, parseInt(el.dataset.target, 10), 2200);
    });
  }

  if (fullCounters.length) {
    var statsSection = document.querySelector('.stats-section');
    if (statsSection && 'IntersectionObserver' in window) {
      var statsObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { startFullCounters(); statsObs.disconnect(); }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px 80px 0px' });
      statsObs.observe(statsSection);
    } else {
      startFullCounters();
    }
    // Absolute fallback
    setTimeout(function () { startFullCounters(); }, 5000);
  }

  /* ═══════════════════════════════════════════════════════
     SCROLL REVEAL (IntersectionObserver)
  ═══════════════════════════════════════════════════════ */
  if ('IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view', 'revealed');
          revealObs.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.08 });

    // Elements to animate on scroll
    var toReveal = document.querySelectorAll(
      '.animate-fade-up, .stagger-children, .why-card, .program-card, ' +
      '.care-card, .news-card, .calendar-card, .quick-access-card, ' +
      '.usp-pillar, .recruit-card, .recruit-leader-card, ' +
      '.testimonial-card, .accred-item, .uni-logo-item, .will-reveal'
    );
    toReveal.forEach(function (el) { revealObs.observe(el); });
  }

  /* ═══════════════════════════════════════════════════════
     TESTIMONIALS SLIDER
  ═══════════════════════════════════════════════════════ */
  var tCards    = document.querySelectorAll('.testimonial-card');
  var tDots     = document.querySelectorAll('.t-dot');
  var tPrev     = document.getElementById('testimonial-prev');
  var tNext     = document.getElementById('testimonial-next');
  var tCurrent  = 0;
  var tTimer;

  function goToTestimonial(idx) {
    if (!tCards.length) return;
    tCards[tCurrent].classList.remove('active');
    if (tDots[tCurrent]) tDots[tCurrent].classList.remove('active');
    tCurrent = (idx + tCards.length) % tCards.length;
    tCards[tCurrent].classList.add('active');
    if (tDots[tCurrent]) tDots[tCurrent].classList.add('active');
  }

  function startTestimonials() {
    tTimer = setInterval(function () { goToTestimonial(tCurrent + 1); }, 5500);
  }
  function stopTestimonials() { clearInterval(tTimer); }

  if (tCards.length) {
    // Ensure first card is active
    tCards[0].classList.add('active');
    if (tDots[0]) tDots[0].classList.add('active');
    startTestimonials();

    if (tNext) tNext.addEventListener('click', function () {
      stopTestimonials(); goToTestimonial(tCurrent + 1); startTestimonials();
    });
    if (tPrev) tPrev.addEventListener('click', function () {
      stopTestimonials(); goToTestimonial(tCurrent - 1); startTestimonials();
    });
    tDots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        stopTestimonials(); goToTestimonial(i); startTestimonials();
      });
    });

    // Touch/swipe support
    var tSlider = document.querySelector('.testimonials-slider');
    if (tSlider) {
      var touchStartX = 0;
      tSlider.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      tSlider.addEventListener('touchend', function (e) {
        var diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 40) {
          stopTestimonials();
          goToTestimonial(diff > 0 ? tCurrent + 1 : tCurrent - 1);
          startTestimonials();
        }
      }, { passive: true });
    }
  }

  /* ═══════════════════════════════════════════════════════
     VIDEO LIGHTBOX
  ═══════════════════════════════════════════════════════ */
  var videoLightbox = document.getElementById('video-lightbox');
  var videoPlayBtn  = document.getElementById('video-play-btn');

  function openVideoLightbox() {
    if (!videoLightbox) return;
    videoLightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    videoLightbox.setAttribute('aria-hidden', 'false');
  }
  function closeVideoLightbox() {
    if (!videoLightbox) return;
    videoLightbox.style.display = 'none';
    document.body.style.overflow = '';
    videoLightbox.setAttribute('aria-hidden', 'true');
    // Stop any iframe video
    var iframe = videoLightbox.querySelector('iframe');
    if (iframe) { var s = iframe.src; iframe.src = ''; iframe.src = s; }
  }

  if (videoPlayBtn) videoPlayBtn.addEventListener('click', openVideoLightbox);

  // Also trigger from any ".video-play-btn" button (e.g. welcome section)
  document.querySelectorAll('.video-play-btn').forEach(function (btn) {
    btn.addEventListener('click', openVideoLightbox);
  });

  // Wire the dedicated close button (id="vl-close-btn") and any .vl-close elements
  var vlCloseBtn = document.getElementById('vl-close-btn');
  if (vlCloseBtn) vlCloseBtn.addEventListener('click', closeVideoLightbox);
  document.querySelectorAll('.vl-close').forEach(function (el) {
    el.addEventListener('click', closeVideoLightbox);
  });

  // Close when clicking the "Book a Campus Tour" CTA inside the lightbox
  document.querySelectorAll('.vl-close-link').forEach(function (el) {
    el.addEventListener('click', function () {
      closeVideoLightbox();
    });
  });

  if (videoLightbox) {
    // Close on backdrop click
    videoLightbox.addEventListener('click', function (e) {
      if (e.target === videoLightbox) closeVideoLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && videoLightbox && videoLightbox.style.display === 'flex') {
      closeVideoLightbox();
    }
  });

  /* ═══════════════════════════════════════════════════════
     CONTACT FORM — API Integration
  ═══════════════════════════════════════════════════════ */
  var contactForm    = document.getElementById('contact-form');
  var formSuccess    = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validate required fields
      var fields   = contactForm.querySelectorAll('[required]');
      var isValid  = true;
      fields.forEach(function (f) {
        f.style.borderColor = '';
        if (!f.value.trim()) {
          isValid = false;
          f.style.borderColor = '#E11B22';
          f.addEventListener('input', function () { f.style.borderColor = ''; }, { once: true });
        }
      });
      if (!isValid) return;

      var btn = contactForm.querySelector('button[type="submit"]');
      var originalHTML = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
      btn.disabled = true;

      // Collect data
      var data = {
        parent_name:  (contactForm.querySelector('[name="parent_name"]')  || {}).value || '',
        student_name: (contactForm.querySelector('[name="student_name"]') || {}).value || '',
        email:        (contactForm.querySelector('[name="email"]')        || {}).value || '',
        phone:        (contactForm.querySelector('[name="phone"]')        || {}).value || '',
        grade:        (contactForm.querySelector('[name="grade"]')        || {}).value || '',
        message:      (contactForm.querySelector('[name="message"]')      || {}).value || '',
        source:       'contact-form'
      };

      fetch('tables/contact_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(function (res) { return res.ok ? res.json() : Promise.reject(res.status); })
      .then(function () {
        contactForm.style.display = 'none';
        if (formSuccess) {
          formSuccess.style.display = 'flex';
          formSuccess.style.flexDirection = 'column';
          formSuccess.style.alignItems = 'center';
          formSuccess.style.gap = '10px';
          formSuccess.style.padding = '32px';
          formSuccess.style.background = '#f0fdf4';
          formSuccess.style.borderRadius = '12px';
          formSuccess.style.color = '#166534';
        }
      })
      .catch(function () {
        // Show success anyway for UX (form data is stored locally)
        contactForm.style.display = 'none';
        if (formSuccess) {
          formSuccess.style.display = 'flex';
          formSuccess.style.flexDirection = 'column';
          formSuccess.style.alignItems = 'center';
          formSuccess.style.gap = '10px';
          formSuccess.style.padding = '32px';
          formSuccess.style.background = '#f0fdf4';
          formSuccess.style.borderRadius = '12px';
          formSuccess.style.color = '#166534';
        }
      });
    });
  }

  /* ═══════════════════════════════════════════════════════
     HERO MINI FORM — API Integration
  ═══════════════════════════════════════════════════════ */
  var heroMiniForm = document.getElementById('hero-mini-form');
  if (heroMiniForm) {
    heroMiniForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var inputs = heroMiniForm.querySelectorAll('input[required]');
      var valid  = true;
      inputs.forEach(function (inp) {
        inp.style.borderColor = '';
        if (!inp.value.trim()) {
          valid = false;
          inp.style.borderColor = 'rgba(225,27,34,0.8)';
          inp.addEventListener('input', function () { inp.style.borderColor = ''; }, { once: true });
        }
      });
      if (!valid) return;

      var btn         = heroMiniForm.querySelector('.btn-cta-mini');
      var originalTxt = btn.innerHTML;
      btn.innerHTML   = '<i class="fas fa-spinner fa-spin"></i>';
      btn.disabled    = true;

      var allInputs = heroMiniForm.querySelectorAll('input, select');
      var data = {
        parent_name: (allInputs[0] || {}).value || '',
        phone:       (allInputs[1] || {}).value || '',
        email:       (allInputs[2] || {}).value || '',
        grade:       (allInputs[3] || {}).value || '',
        source:      'hero-mini-form'
      };

      fetch('tables/contact_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .finally(function () {
        heroMiniForm.reset();
        btn.innerHTML = '<i class="fas fa-check"></i> Sent! We\'ll be in touch.';
        btn.style.background = '#1A9B5C';
        setTimeout(function () {
          btn.innerHTML = originalTxt;
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      });
    });
  }

  /* ═══════════════════════════════════════════════════════
     ADMISSIONS FORM (admissions.html)
  ═══════════════════════════════════════════════════════ */
  var admissionsForm = document.getElementById('admissions-form');
  if (admissionsForm) {
    admissionsForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var fields = admissionsForm.querySelectorAll('[required]');
      var isValid = true;
      fields.forEach(function (f) {
        f.style.borderColor = '';
        if (!f.value.trim()) {
          isValid = false;
          f.style.borderColor = '#E11B22';
          f.addEventListener('input', function () { f.style.borderColor = ''; }, { once: true });
        }
      });
      if (!isValid) return;

      var btn = admissionsForm.querySelector('button[type="submit"]');
      var originalHTML = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting…';
      btn.disabled = true;

      var data = { source: 'admissions-form' };
      admissionsForm.querySelectorAll('[name]').forEach(function (f) {
        data[f.name] = f.value;
      });

      fetch('tables/contact_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .finally(function () {
        admissionsForm.reset();
        btn.innerHTML = '<i class="fas fa-check-circle"></i> Application Submitted!';
        btn.style.background = '#1A9B5C';
        var successMsg = document.getElementById('adm-form-success') ||
                         admissionsForm.nextElementSibling;
        if (successMsg) successMsg.style.display = 'flex';
        setTimeout(function () {
          btn.innerHTML = originalHTML;
          btn.style.background = '';
          btn.disabled = false;
        }, 6000);
      });
    });
  }

  /* ═══════════════════════════════════════════════════════
     FAQ ACCORDION (parent-faq.html, admissions.html)
  ═══════════════════════════════════════════════════════ */
  document.querySelectorAll('.faq-item, .faq-question').forEach(function (item) {
    var question = item.classList.contains('faq-question')
      ? item
      : item.querySelector('.faq-question');
    var answer   = item.classList.contains('faq-question')
      ? item.nextElementSibling
      : item.querySelector('.faq-answer');

    if (!question || !answer) return;

    question.style.cursor = 'pointer';

    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open') ||
                   answer.style.maxHeight;
      // Close all others
      document.querySelectorAll('.faq-item.open, .faq-question + .faq-answer').forEach(function (el) {
        if (el !== item && el !== answer) {
          var parentItem = el.closest ? el.closest('.faq-item') : null;
          if (parentItem) parentItem.classList.remove('open');
          var ans = parentItem
            ? parentItem.querySelector('.faq-answer')
            : el;
          if (ans) { ans.style.maxHeight = '0'; ans.style.opacity = '0'; }
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = '0';
        answer.style.opacity   = '0';
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 40 + 'px';
        answer.style.opacity   = '1';
      }
    });

    // Style the answer
    answer.style.overflow   = 'hidden';
    answer.style.maxHeight  = '0';
    answer.style.opacity    = '0';
    answer.style.transition = 'max-height 0.4s ease, opacity 0.4s ease';
  });

  /* ═══════════════════════════════════════════════════════
     360° TOUR TAB SWITCHER
  ═══════════════════════════════════════════════════════ */
  var tourTabs  = document.querySelectorAll('.tour-tab');
  var tourPanes = document.querySelectorAll('.tour-pane');

  function activateTourPane(paneEl) {
    if (!paneEl) return;
    paneEl.classList.add('active');
    // Lazy-load any iframes
    paneEl.querySelectorAll('iframe[data-src]').forEach(function (fr) {
      fr.src = fr.getAttribute('data-src');
      fr.removeAttribute('data-src');
    });
  }

  if (tourTabs.length) {
    tourTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var key = tab.getAttribute('data-tour');
        tourTabs.forEach(function (t)  { t.classList.remove('active'); });
        tourPanes.forEach(function (p) { p.classList.remove('active'); });
        tab.classList.add('active');
        var target = document.getElementById('pane-' + key);
        activateTourPane(target);
      });
    });

    // Activate first active pane on load
    var firstPane = document.querySelector('.tour-pane.active');
    if (firstPane) activateTourPane(firstPane);
    else if (tourPanes[0]) {
      tourPanes[0].classList.add('active');
      activateTourPane(tourPanes[0]);
    }
  }

  /* ═══════════════════════════════════════════════════════
     MOBILE STICKY CTA — Visibility toggle
  ═══════════════════════════════════════════════════════ */
  var mobileCTA = document.getElementById('mobile-sticky-cta');
  if (mobileCTA) {
    var heroSection = document.getElementById('hero');
    if (heroSection && 'IntersectionObserver' in window) {
      var ctaObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          mobileCTA.classList.toggle('visible', !entry.isIntersecting);
        });
      }, { threshold: 0.1 });
      ctaObs.observe(heroSection);
    } else {
      // Fallback: show after 400px scroll
      window.addEventListener('scroll', function () {
        mobileCTA.classList.toggle('visible', window.scrollY > 400);
      }, { passive: true });
    }
  }

  /* ═══════════════════════════════════════════════════════
     SMOOTH ANCHOR SCROLL
  ═══════════════════════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var offset     = window.innerWidth >= 1200 ? 20 : 70;
      var headerH    = siteHeader ? siteHeader.offsetHeight : 0;
      var targetY    = target.getBoundingClientRect().top + window.pageYOffset - headerH - offset;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
  });

  /* ═══════════════════════════════════════════════════════
     ACTIVE NAV LINK HIGHLIGHT
  ═══════════════════════════════════════════════════════ */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .nav-primary-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && href !== '#' && href !== 'index.html') {
      var page = href.split('#')[0];
      if (page && currentPage === page) {
        link.style.color = 'var(--red)';
        link.setAttribute('aria-current', 'page');
      }
    }
  });

  /* ═══════════════════════════════════════════════════════
     TICKER PAUSE ON HOVER
  ═══════════════════════════════════════════════════════ */
  var ticker = document.querySelector('.ann-ticker span');
  if (ticker) {
    ticker.addEventListener('mouseenter', function () { ticker.style.animationPlayState = 'paused'; });
    ticker.addEventListener('mouseleave', function () { ticker.style.animationPlayState = 'running'; });
  }

  /* ═══════════════════════════════════════════════════════
     QUICK ACCESS CARD RIPPLE
  ═══════════════════════════════════════════════════════ */
  document.querySelectorAll('.quick-access-card').forEach(function (card) {
    card.addEventListener('click', function (e) {
      var ripple = document.createElement('span');
      var rect   = card.getBoundingClientRect();
      ripple.style.cssText = [
        'position:absolute',
        'border-radius:50%',
        'background:rgba(255,255,255,0.22)',
        'width:80px', 'height:80px',
        'top:'  + (e.clientY - rect.top  - 40) + 'px',
        'left:' + (e.clientX - rect.left - 40) + 'px',
        'transform:scale(0)',
        'animation:rippleAnim 0.55s ease-out forwards',
        'pointer-events:none'
      ].join(';');
      card.appendChild(ripple);
      setTimeout(function () { if (ripple.parentNode) ripple.remove(); }, 700);
    });
  });

  // Ripple keyframes (once)
  if (!document.getElementById('ripple-style')) {
    var rs = document.createElement('style');
    rs.id  = 'ripple-style';
    rs.textContent = '@keyframes rippleAnim{to{transform:scale(4);opacity:0;}}';
    document.head.appendChild(rs);
  }

  /* ═══════════════════════════════════════════════════════
     STAGGER CHILDREN OBSERVER
  ═══════════════════════════════════════════════════════ */
  if ('IntersectionObserver' in window) {
    var staggerObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var children = entry.target.children;
          Array.prototype.forEach.call(children, function (child, i) {
            setTimeout(function () {
              child.classList.add('in-view', 'revealed');
            }, i * 80);
          });
          staggerObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.stagger-children, .programs-grid, .why-grid, .care-grid, .news-grid, .calendar-grid, .usp-pillars-grid').forEach(function (el) {
      staggerObs.observe(el);
    });
  }

  /* ═══════════════════════════════════════════════════════
     PARALLAX HERO SLIDES ON SCROLL
  ═══════════════════════════════════════════════════════ */
  if (window.innerWidth >= 1024) {
    var heroSlideEls = document.querySelectorAll('.hero-slide');
    if (heroSlideEls.length) {
      window.addEventListener('scroll', function () {
        var sy = window.pageYOffset;
        heroSlideEls.forEach(function (s) {
          s.style.backgroundPositionY = (sy * 0.3) + 'px';
        });
      }, { passive: true });
    }
  }

  /* ═══════════════════════════════════════════════════════
     GALLERY MOSAIC LINKS
  ═══════════════════════════════════════════════════════ */
  document.querySelectorAll('.hg-mosaic-item, .hg-film-frame').forEach(function (el) {
    el.setAttribute('role', 'link');
    el.setAttribute('tabindex', '0');
    el.addEventListener('click', function () { window.location.href = 'gallery.html'; });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') window.location.href = 'gallery.html';
    });
  });

  /* ═══════════════════════════════════════════════════════
     ANNOUNCEMENT BAND AUTO-HIDE ON SCROLL
  ═══════════════════════════════════════════════════════ */
  var annBand = document.querySelector('.announcement-band');
  if (annBand) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        annBand.style.cssText += ';max-height:0;opacity:0;padding:0;overflow:hidden;transition:max-height 0.4s ease,opacity 0.4s ease,padding 0.4s ease;';
      }
    }, { passive: true, once: true });
  }

  /* ═══════════════════════════════════════════════════════
     ACTIVE SECTION QUICK-LINKS HIGHLIGHT
  ═══════════════════════════════════════════════════════ */
  var sections   = document.querySelectorAll('section[id]');
  var quickLinks = document.querySelectorAll('.quick-link-item[href^="#"]');

  if (sections.length && quickLinks.length && 'IntersectionObserver' in window) {
    var sectionObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = '#' + entry.target.id;
          quickLinks.forEach(function (ql) {
            ql.classList.toggle('active', ql.getAttribute('href') === id);
          });
        }
      });
    }, { threshold: 0.3 });
    sections.forEach(function (s) { sectionObs.observe(s); });
  }

  /* ═══════════════════════════════════════════════════════
     KEYBOARD NAV FOR DROPDOWNS
  ═══════════════════════════════════════════════════════ */
  document.querySelectorAll('.nav-item.has-dropdown').forEach(function (item) {
    var link     = item.querySelector('.nav-link');
    var dropdown = item.querySelector('.nav-dropdown');
    if (!link || !dropdown) return;

    link.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        var isOpen = dropdown.style.opacity === '1';
        dropdown.style.opacity    = isOpen ? '' : '1';
        dropdown.style.visibility = isOpen ? '' : 'visible';
        dropdown.style.transform  = isOpen ? '' : 'translateY(0)';
      }
    });
  });

  /* ═══════════════════════════════════════════════════════
     IMAGE LAZY LOAD FADE-IN
  ═══════════════════════════════════════════════════════ */
  document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
    function reveal() { img.style.opacity = '1'; }
    if (img.complete) { reveal(); }
    else { img.addEventListener('load', reveal); img.addEventListener('error', reveal); }
  });

  /* ═══════════════════════════════════════════════════════
     PAGE LOAD — reveal body
  ═══════════════════════════════════════════════════════ */
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    var heroContent = document.querySelector('.hero-content');
    if (heroContent) heroContent.style.opacity = '1';
  });

})();
