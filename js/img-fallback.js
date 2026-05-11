/**
 * NAIS Dubai – Image Fallback System v5
 * All real NAIS school photos are stored locally in images/
 *
 * PORTRAITS (bio/leadership sections ONLY – never in galleries or backgrounds):
 * school-01  → Justin McCauley – Principal
 * school-02  → Crystal Goodwin – VP High School
 * school-03  → Jonathan D'Avignon – VP Middle School
 * school-04  → Jennifer McCauley – VP Elementary
 * school-05  → Natasha Sorak – Head of Lower Elementary
 * school-06  → Noha Shaaban – Head of Inclusive Education
 * school-07  → Maha El-Tantawy – Dean of Students
 * school-08  → Open Morning event flyer / classroom scene
 * school-09  → Classroom learning scene (teacher + students)
 *
 * SCENE PHOTOS (galleries, heroes, backgrounds, all visual sections):
 * school-10  → Young girl writing in classroom
 * school-11  → Children in library / reading session
 * school-12  → Female students in chemistry / science lab
 * school-13  → Children in outdoor educational activity
 * school-14  → Children in creative / sensory activity
 * school-15  → NAIS 2025 Graduation Ceremony
 * school-16  → Children cooperative activity on sports turf (Community)
 * school-17  → Tug-of-war competition, primary school (Sports)
 * school-18  → Tug-of-war with balloons, festive sports day (Events)
 * school-19  → Teacher guiding student one-on-one in classroom (Learning)
 * school-20  → Child carrying NAIS flag at sports parade (Events)
 * school-21  → Child with UAE flag face paint, cultural event (Events)
 * school-22  → Students conducting science experiment – Soil A (Learning/STEM)
 * school-23  → Young children science activity – early years (Learning)
 * school-24  → Girl in traditional dress holding UAE flag (Community)
 * school-25  → Children in Gulf traditional dress, national day (Community)
 */
(function(){
  'use strict';

  /* Canonical list of scene/gallery photos (school-10 → school-25) used as fallbacks */
  var LOCAL_PHOTOS = [
    'images/school-10.jpg',
    'images/school-11.jpg',
    'images/school-12.jpg',
    'images/school-13.jpg',
    'images/school-14.jpg',
    'images/school-15.jpg',
    'images/school-16.jpg',
    'images/school-17.jpg',
    'images/school-18.jpg',
    'images/school-19.jpg',
    'images/school-20.jpg',
    'images/school-21.jpg',
    'images/school-22.jpg',
    'images/school-23.jpg',
    'images/school-24.jpg',
    'images/school-25.jpg'
  ];

  var fallbackIndex = 0;

  function getNextFallback() {
    var src = LOCAL_PHOTOS[fallbackIndex % LOCAL_PHOTOS.length];
    fallbackIndex++;
    return src;
  }

  function init() {
    /* ── Handle broken <img> tags ── */
    document.querySelectorAll('img[src]').forEach(function(el) {
      el.addEventListener('error', function onErr() {
        el.removeEventListener('error', onErr); /* prevent infinite loop */
        var next = getNextFallback();
        if (el.src !== window.location.origin + '/' + next) {
          el.src = next;
        }
      });
    });

    /* ── Handle broken CSS background-images on slide/hero elements ── */
    var bgEls = document.querySelectorAll(
      '.hero-slide, .gal-hero-slide, .page-hero-bg, [style*="school-"]'
    );
    bgEls.forEach(function(el) {
      var style = el.getAttribute('style') || '';
      var urlMatch = style.match(/url\(['"]?([^'")\s]+)['"]?\)/);
      if (urlMatch) {
        var testImg = new Image();
        testImg.onerror = function() {
          el.style.backgroundImage = "url('" + getNextFallback() + "')";
        };
        testImg.src = urlMatch[1];
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
