/**
 * NAIS Dubai – Main JavaScript
 * Premium Interactions & Animations
 */

(function () {
  'use strict';

  /* ─── HERO SLIDESHOW ─── */
  const slides   = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-dot');
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    heroDots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    heroDots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 6000);
  }

  function stopSlideshow() {
    clearInterval(slideInterval);
  }

  if (slides.length > 0) {
    startSlideshow();
    heroDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        stopSlideshow();
        goToSlide(i);
        startSlideshow();
      });
    });
  }

  /* ─── STICKY HEADER ─── */
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ─── BACK TO TOP ─── */
  const btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btt.classList.add('visible');
      } else {
        btt.classList.remove('visible');
      }
    }, { passive: true });
    btt.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─── MOBILE NAV ─── */
  const hamburger = document.getElementById('hamburger');
  let mobileNav, mobileOverlay;

  function createMobileNav() {
    // Create overlay
    mobileOverlay = document.createElement('div');
    mobileOverlay.className = 'mobile-nav-overlay';
    document.body.appendChild(mobileOverlay);

    // Create nav panel
    mobileNav = document.createElement('nav');
    mobileNav.className = 'mobile-nav';
    mobileNav.setAttribute('aria-label', 'Mobile Navigation');
    mobileNav.innerHTML = `
      <div class="mobile-nav-header">
        <div class="logo-wrap" style="text-decoration:none;">
          <div class="logo-emblem small">
            <div class="logo-shield">
              <div class="shield-inner">
                <span class="shield-star">★</span>
                <span class="shield-letters">NAIS</span>
              </div>
            </div>
          </div>
          <div class="logo-text">
            <span class="logo-title">North American</span>
            <span class="logo-subtitle">International School</span>
          </div>
        </div>
        <button class="mobile-nav-close" id="mobile-nav-close" aria-label="Close menu">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="mobile-nav-links">
        <a href="about.html"><span>About NAIS</span><i class="fas fa-chevron-right" style="font-size:0.7rem;opacity:0.4;"></i></a>
        <a href="academics.html"><span>Academics</span><i class="fas fa-chevron-right" style="font-size:0.7rem;opacity:0.4;"></i></a>
        <a href="index.html#student-life"><span>Student Life</span><i class="fas fa-chevron-right" style="font-size:0.7rem;opacity:0.4;"></i></a>
        <a href="admissions.html"><span>Admissions</span><i class="fas fa-chevron-right" style="font-size:0.7rem;opacity:0.4;"></i></a>
        <a href="index.html#news"><span>News &amp; Events</span><i class="fas fa-chevron-right" style="font-size:0.7rem;opacity:0.4;"></i></a>
        <a href="index.html#contact"><span>Contact Us</span><i class="fas fa-chevron-right" style="font-size:0.7rem;opacity:0.4;"></i></a>
      </div>
      <div class="mobile-nav-ctas">
        <a href="admissions.html" class="btn btn-primary" style="justify-content:center;">Apply Now</a>
        <a href="index.html#tour" class="btn btn-outline-white" style="justify-content:center;">Book a Tour</a>
        <div style="margin-top:10px;padding-top:16px;border-top:1px solid #EDF0F5;">
          <p style="font-size:0.78rem;color:#8892A4;margin-bottom:10px;font-family:'Montserrat',sans-serif;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Contact</p>
          <a href="tel:+97142635456" style="font-size:0.88rem;color:#4A5568;display:flex;align-items:center;gap:8px;margin-bottom:8px;"><i class="fas fa-phone-alt" style="color:#E11B22;font-size:0.75rem;"></i>+971 4 263 5456</a>
          <a href="mailto:admissions@naischool.ae" style="font-size:0.88rem;color:#4A5568;display:flex;align-items:center;gap:8px;"><i class="fas fa-envelope" style="color:#E11B22;font-size:0.75rem;"></i>admissions@naischool.ae</a>
        </div>
      </div>
    `;
    document.body.appendChild(mobileNav);

    document.getElementById('mobile-nav-close').addEventListener('click', closeMobileNav);
    mobileOverlay.addEventListener('click', closeMobileNav);
  }

  function openMobileNav() {
    if (!mobileNav) createMobileNav();
    mobileNav.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMobileNav() {
    mobileNav.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if (hamburger.classList.contains('active')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  /* ─── COUNTER ANIMATION ─── */
  function animateCounter(el, target, suffix) {
    const duration = 2000;
    const start = performance.now();
    const startVal = 0;

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * (target - startVal) + startVal);
      el.textContent = current;
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    }
    requestAnimationFrame(update);
  }

  let countersStarted = false;
  const heroCounters = document.querySelectorAll('.hero-stats .stat-number[data-target]');
  const fullCounters = document.querySelectorAll('.stats-grid-full .stat-count[data-target]');

  function startHeroCounters() {
    heroCounters.forEach(el => {
      animateCounter(el, parseInt(el.dataset.target, 10), '');
    });
  }

  function startFullCounters() {
    if (countersStarted) return;
    countersStarted = true;
    fullCounters.forEach(el => {
      animateCounter(el, parseInt(el.dataset.target, 10), '');
    });
  }

  // Start hero counters after a short delay
  setTimeout(startHeroCounters, 1200);

  /* ─── INTERSECTION OBSERVER – SCROLL ANIMATIONS ─── */
  const observerOptions = { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.1 };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Trigger counters when stats section enters view
        if (entry.target.classList.contains('stats-section')) {
          startFullCounters();
        }
        scrollObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe animate elements
  document.querySelectorAll('.animate-fade-up, .stagger-children, .stats-section').forEach(el => {
    scrollObserver.observe(el);
  });

  /* ─── STATS COUNTER FALLBACK ─── */
  // Dedicated observer with generous rootMargin to ensure counters always fire
  if (fullCounters.length > 0) {
    const statsEl = document.querySelector('.stats-section');
    if (statsEl) {
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startFullCounters();
            statsObserver.unobserve(entry.target);
          }
        });
      }, { root: null, rootMargin: '0px 0px 0px 0px', threshold: 0.05 });
      statsObserver.observe(statsEl);
    }
  }

  // Add animation classes to key elements dynamically
  const sectionsToAnimate = [
    '.welcome-grid',
    '.programs-grid',
    '.care-grid',
    '.life-showcase',
    '.news-grid',
    '.admissions-steps',
    '.accreditation-logos',
    '.contact-grid',
    '.testimonials-slider'
  ];

  sectionsToAnimate.forEach(selector => {
    const el = document.querySelector(selector);
    if (el) el.classList.add('animate-fade-up');
  });

  // Re-observe after adding classes
  document.querySelectorAll('.animate-fade-up').forEach(el => {
    scrollObserver.observe(el);
  });

  /* ─── TESTIMONIALS SLIDER ─── */
  const testimonialCards  = document.querySelectorAll('.testimonial-card');
  const testimonialDots   = document.querySelectorAll('.t-dot');
  const testimonialNext   = document.getElementById('testimonial-next');
  const testimonialPrev   = document.getElementById('testimonial-prev');
  let currentTestimonial  = 0;
  let testimonialInterval;

  function goToTestimonial(index) {
    testimonialCards[currentTestimonial].classList.remove('active');
    testimonialDots[currentTestimonial].classList.remove('active');
    currentTestimonial = (index + testimonialCards.length) % testimonialCards.length;
    testimonialCards[currentTestimonial].classList.add('active');
    testimonialDots[currentTestimonial].classList.add('active');
  }

  function startTestimonialAuto() {
    testimonialInterval = setInterval(() => {
      goToTestimonial(currentTestimonial + 1);
    }, 5000);
  }

  function stopTestimonialAuto() {
    clearInterval(testimonialInterval);
  }

  if (testimonialCards.length > 0) {
    startTestimonialAuto();

    if (testimonialNext) {
      testimonialNext.addEventListener('click', () => {
        stopTestimonialAuto();
        goToTestimonial(currentTestimonial + 1);
        startTestimonialAuto();
      });
    }
    if (testimonialPrev) {
      testimonialPrev.addEventListener('click', () => {
        stopTestimonialAuto();
        goToTestimonial(currentTestimonial - 1);
        startTestimonialAuto();
      });
    }
    testimonialDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        stopTestimonialAuto();
        goToTestimonial(i);
        startTestimonialAuto();
      });
    });
  }

  /* ─── CONTACT FORM ─── */
  const contactForm    = document.getElementById('contact-form');
  const formSuccess    = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple validation
      const required = contactForm.querySelectorAll('[required]');
      let valid = true;
      required.forEach(field => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#C41E3A';
          field.addEventListener('input', () => {
            field.style.borderColor = '';
          }, { once: true });
        }
      });

      if (!valid) return;

      // Simulate form submission
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        contactForm.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'flex';
      }, 1400);
    });
  }

  /* ─── SMOOTH SCROLL FOR ANCHOR LINKS ─── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 76;
        const targetY = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
        // Close mobile nav if open
        if (mobileNav && mobileNav.classList.contains('active')) closeMobileNav();
      }
    });
  });

  /* ─── TICKER PAUSE ON HOVER ─── */
  const annTicker = document.querySelector('.ann-ticker span');
  if (annTicker) {
    annTicker.addEventListener('mouseenter', () => {
      annTicker.style.animationPlayState = 'paused';
    });
    annTicker.addEventListener('mouseleave', () => {
      annTicker.style.animationPlayState = 'running';
    });
  }

  /* ─── ADD STAGGER TO PROGRAM CARDS ─── */
  const programGrid = document.querySelector('.programs-grid');
  if (programGrid) {
    programGrid.classList.add('stagger-children');
    scrollObserver.observe(programGrid);
  }

  const careGrid = document.querySelector('.care-grid');
  if (careGrid) {
    careGrid.classList.add('stagger-children');
    scrollObserver.observe(careGrid);
  }

  /* ─── ACTIVE NAV LINK ─── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href !== '#' && currentPath.includes(href.split('#')[0]) && href !== 'index.html') {
      link.style.color = 'var(--red)';
    }
  });

  /* ─── PRELOADER ─── */
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    // Fade in hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.style.opacity = '1';
    }
  });

  /* ─── KEYBOARD ACCESSIBILITY ─── */
  document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.nav-dropdown');

    if (link && dropdown) {
      link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const isOpen = dropdown.style.opacity === '1';
          dropdown.style.opacity = isOpen ? '' : '1';
          dropdown.style.visibility = isOpen ? '' : 'visible';
          dropdown.style.transform = isOpen ? '' : 'translateY(0)';
        }
      });
    }
  });

  /* ─── IMAGE LAZY LOAD FALLBACK ─── */
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
  } else {
    // Fallback: observe images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) img.src = img.dataset.src;
          imageObserver.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => imageObserver.observe(img));
  }

  /* ─── HERO MINI FORM HANDLER ─── */
  const heroMiniForm = document.getElementById('hero-mini-form');
  if (heroMiniForm) {
    heroMiniForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = heroMiniForm.querySelectorAll('input[required]');
      let valid = true;
      inputs.forEach(inp => {
        if (!inp.value.trim()) {
          valid = false;
          inp.style.borderColor = 'rgba(225,27,34,0.7)';
          inp.addEventListener('input', () => { inp.style.borderColor = ''; }, { once: true });
        }
      });
      if (!valid) return;
      const btn = heroMiniForm.querySelector('.btn-cta-mini');
      btn.innerHTML = '<i class="fas fa-check"></i> Sent! We\'ll be in touch.';
      btn.style.background = '#1A9B5C';
      btn.disabled = true;
    });
  }

  /* ─── OBSERVE NEW ANIMATED SECTIONS ─── */
  document.querySelectorAll('.why-grid, .calendar-grid, .quick-access-grid').forEach(el => {
    el.classList.add('stagger-children');
    scrollObserver.observe(el);
  });

})();
