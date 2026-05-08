/**
 * NAIS Dubai – Bilingual i18n System (EN / AR)
 * =============================================
 * Usage:
 *   - Add data-i18n="key" to any element whose textContent should be translated
 *   - Add data-i18n-placeholder="key" for input placeholders
 *   - Add data-i18n-aria="key" for aria-label attributes
 *   - Add data-i18n-html="key" for innerHTML (rich content)
 * Language is stored in localStorage under "nais_lang"
 * RTL is toggled via <html dir="rtl" lang="ar"> + body class "lang-ar"
 */

(function () {
  'use strict';

  /* ═══════════════════════════════════════════════════
     TRANSLATION DICTIONARY
  ═══════════════════════════════════════════════════ */
  var T = {

    /* ── Global / Nav ── */
    'nav.about':            { en: 'About',            ar: 'عن المدرسة' },
    'nav.academics':        { en: 'Academics',        ar: 'الأكاديمية' },
    'nav.student-life':     { en: 'Student Life',     ar: 'حياة الطالب' },
    'nav.admissions':       { en: 'Admissions',       ar: 'القبول والتسجيل' },
    'nav.our-school':       { en: 'Our School',       ar: 'مدرستنا' },
    'nav.apply-now':        { en: 'Apply Now',        ar: 'سجّل الآن' },
    'nav.search':           { en: 'Search',           ar: 'بحث' },
    'nav.search-placeholder': { en: 'Keyword',        ar: 'كلمة البحث' },
    'nav.careers':          { en: 'Career Opportunities', ar: 'فرص العمل' },
    'nav.menu':             { en: 'MENU',             ar: 'القائمة' },
    'nav.close':            { en: 'Close Menu',       ar: 'إغلاق' },

    'nav.sub.mission':      { en: 'Mission & Vision',       ar: 'الرسالة والرؤية' },
    'nav.sub.leadership':   { en: 'School Leadership',      ar: 'قيادة المدرسة' },
    'nav.sub.values':       { en: 'Core Values — CARE',     ar: 'القيم الأساسية — CARE' },
    'nav.sub.campus':       { en: 'Our Campus',             ar: 'حرمنا الجامعي' },
    'nav.sub.accreditation':{ en: 'Accreditation',          ar: 'الاعتمادية' },
    'nav.sub.kg':           { en: 'Kindergarten',           ar: 'رياض الأطفال' },
    'nav.sub.elementary':   { en: 'Elementary School',      ar: 'المرحلة الابتدائية' },
    'nav.sub.middle':       { en: 'Middle School',          ar: 'المرحلة المتوسطة' },
    'nav.sub.high':         { en: 'High School',            ar: 'المرحلة الثانوية' },
    'nav.sub.ap':           { en: 'AP Courses',             ar: 'مقررات AP المتقدمة' },
    'nav.sub.curriculum':   { en: 'American Curriculum ★',  ar: 'المنهج الأمريكي ★' },
    'nav.sub.results':      { en: 'Academic Results ★',     ar: 'النتائج الأكاديمية ★' },
    'nav.sub.pbl':          { en: 'Project-Based Learning ★', ar: 'التعلم القائم على المشاريع ★' },
    'nav.sub.arts':         { en: 'Arts & Culture',         ar: 'الفنون والثقافة' },
    'nav.sub.athletics':    { en: 'Athletics & Sports',     ar: 'الرياضة والألعاب' },
    'nav.sub.clubs':        { en: 'Clubs & Activities',     ar: 'الأندية والأنشطة' },
    'nav.sub.service':      { en: 'Community Service',      ar: 'خدمة المجتمع' },
    'nav.sub.council':      { en: 'Student Council',        ar: 'مجلس الطلاب' },
    'nav.sub.how-apply':    { en: 'How to Apply',           ar: 'كيفية التقديم' },
    'nav.sub.fees':         { en: 'Tuition & Fees',         ar: 'الرسوم الدراسية' },
    'nav.sub.tours':        { en: 'Campus Tours',           ar: 'جولات الحرم الجامعي' },
    'nav.sub.request-info': { en: 'Request Information',    ar: 'طلب المعلومات' },
    'nav.sub.documents':    { en: 'Required Documents',     ar: 'المستندات المطلوبة' },
    'nav.sub.faq':          { en: 'Admissions FAQ',         ar: 'أسئلة القبول الشائعة' },
    'nav.sub.life':         { en: 'Life at NAIS',           ar: 'الحياة في NAIS' },
    'nav.sub.upper':        { en: 'Upper School',           ar: 'المرحلة العليا' },
    'nav.sub.parents':      { en: 'Parent Community',       ar: 'مجتمع الأهالي' },
    'nav.sub.news':         { en: 'News & Events',          ar: 'الأخبار والفعاليات' },
    'nav.sub.contact':      { en: 'Contact Us',             ar: 'اتصل بنا' },
    'nav.sub.visit':        { en: 'Visit Campus',           ar: 'زيارة الحرم' },
    'nav.sub.gallery':      { en: 'Photo Gallery ✦',        ar: 'معرض الصور ✦' },

    'nav.promo.label':      { en: 'Open Enrollment',        ar: 'التسجيل مفتوح' },
    'nav.promo.title':      { en: 'Apply for 2026–2027',    ar: 'التقديم لعام 2026–2027' },
    'nav.promo.desc':       { en: 'Secure your child\'s place at NAIS Dubai. Limited seats available for all grades KG–12.', ar: 'احجز مقعد طفلك في NAIS دبي. مقاعد محدودة لجميع الصفوف من KG حتى الصف الثاني عشر.' },
    'nav.promo.link':       { en: 'Learn More',             ar: 'اعرف المزيد' },
    'nav.tagline.est':      { en: 'Est. 2005 · Dubai, UAE', ar: 'تأسست 2005 · دبي، الإمارات' },
    'nav.tagline.title':    { en: 'Inspiring Excellence,<br>Building Tomorrow\'s Leaders', ar: 'نُلهم التميّز،<br>ونبني قادة الغد' },
    'nav.tagline.sub':      { en: 'A premier American curriculum school serving KG–Grade 12 students in the heart of Dubai.', ar: 'مدرسة رائدة بمنهج أمريكي تخدم طلاب من KG حتى الصف الثاني عشر في قلب دبي.' },

    /* ── Topbar ── */
    'topbar.portal':        { en: 'Parent Portal',    ar: 'بوابة الأهل' },
    'topbar.elearning':     { en: 'E-Learning',       ar: 'التعلم الإلكتروني' },
    'topbar.careers':       { en: 'Careers',          ar: 'الوظائف' },
    'topbar.address':       { en: 'Al Mizhar 1, Dubai, UAE', ar: 'المزهر 1، دبي، الإمارات' },

    /* ── Hero Section ── */
    'hero.badge':           { en: 'Premier American Education in Dubai', ar: 'تعليم أمريكي متميز في دبي' },
    'hero.title1':          { en: 'Progress You Can See.',  ar: 'تقدّم تراه بعينيك.' },
    'hero.title2':          { en: 'Care You Can Feel.',     ar: 'اهتمام تحسّ به.' },
    'hero.subtitle':        { en: 'North American International School provides an exceptional American curriculum education for students from Kindergarten through Grade 12 in the heart of Dubai.', ar: 'تقدّم المدرسة الأمريكية الدولية الشمالية تعليماً استثنائياً بالمنهج الأمريكي لطلاب من مرحلة الروضة حتى الصف الثاني عشر في قلب دبي.' },
    'hero.btn.apply':       { en: 'Apply Now',              ar: 'سجّل الآن' },
    'hero.btn.tour':        { en: 'Book a Campus Tour',     ar: 'احجز جولة في الحرم' },
    'hero.btn.whatsapp':    { en: 'WhatsApp Us',            ar: 'تواصل واتساب' },
    'hero.btn.360':         { en: 'Explore Our Campus in 360°', ar: 'استكشف حرمنا بزاوية 360°' },
    'hero.btn.360sub':      { en: 'Classrooms · Labs · Playgrounds', ar: 'فصول دراسية · مختبرات · ملاعب' },
    'hero.tagline':         { en: 'KHDA Licensed · American Curriculum KG–12 · Dubai, UAE', ar: 'مرخصة من KHDA · منهج أمريكي KG–12 · دبي، الإمارات' },
    'hero.stat.students':   { en: 'Students Enrolled',      ar: 'طالب ملتحق' },
    'hero.stat.faculty':    { en: 'Expert Faculty',         ar: 'كادر أكاديمي متخصص' },
    'hero.stat.nations':    { en: 'Nationalities',          ar: 'جنسية' },
    'hero.stat.years':      { en: 'Years of Excellence',    ar: 'عام من التميز' },

    /* ── Why NAIS Section ── */
    'why.title':            { en: 'Why Choose NAIS Dubai?', ar: 'لماذا تختار NAIS دبي؟' },
    'why.card1.title':      { en: 'KHDA Licensed & Accredited', ar: 'مرخصة ومعتمدة من KHDA' },
    'why.card1.text':       { en: 'Fully licensed by Dubai\'s Knowledge & Human Development Authority. Internationally accredited by NEASC — recognized worldwide.', ar: 'حاصلة على الترخيص الكامل من هيئة المعرفة والتنمية البشرية في دبي. معتمدة دولياً من NEASC — معترف بها عالمياً.' },
    'why.card2.title':      { en: 'American Curriculum Excellence', ar: 'تميّز المنهج الأمريكي' },
    'why.card2.text':       { en: 'Rigorous US curriculum with Advanced Placement (AP) courses, preparing students for top universities worldwide.', ar: 'منهج أمريكي صارم مع دورات AP المتقدمة، يُعدّ الطلاب للالتحاق بأفضل الجامعات حول العالم.' },
    'why.card3.title':      { en: 'Proven Academic Results', ar: 'نتائج أكاديمية مثبتة' },
    'why.card3.text':       { en: 'Consistent high achievement in standardized tests, college acceptance rates, and measurable student growth every year.', ar: 'تحصيل مرتفع ومستمر في الاختبارات المعيارية ومعدلات القبول الجامعي ونمو الطلاب الملموس كل عام.' },
    'why.card4.title':      { en: 'Safe & Inclusive Community', ar: 'مجتمع آمن وشامل' },
    'why.card4.text':       { en: 'A nurturing, diverse environment where every student belongs — our zero-tolerance anti-bullying policy ensures safety and respect for all.', ar: 'بيئة رعاية متنوعة ينتمي إليها كل طالب — سياسة عدم التسامح مع التنمر تضمن الأمان والاحترام للجميع.' },

    /* ── USP Pillars ── */
    'usp.title':            { en: 'Our Core Strengths',     ar: 'ركائزنا الأساسية' },
    'usp.subtitle':         { en: 'What Sets Us Apart',     ar: 'ما يميّزنا' },
    'usp.p1.tag':           { en: '',                       ar: '' },
    'usp.p1.title':         { en: 'Inclusive Education',    ar: 'التعليم الشامل' },
    'usp.p1.text':          { en: 'Every student belongs. Our inclusive model ensures learners of all abilities thrive together in a supportive, differentiated environment — celebrated, not separated.', ar: 'كل طالب ينتمي هنا. نموذجنا الشامل يضمن أن يزدهر المتعلمون بجميع قدراتهم معاً في بيئة داعمة ومتمايزة — نحتفل بهم لا نفصلهم.' },
    'usp.p2.tag':           { en: '',                       ar: '' },
    'usp.p2.title':         { en: 'Safe & Anti-Bullying Culture', ar: 'ثقافة الأمان ومنع التنمر' },
    'usp.p2.text':          { en: 'Relationship-based education is at our core. A proven zero-tolerance anti-bullying framework means students feel safe, respected, and empowered every single day.', ar: 'التعليم القائم على العلاقات في صميم فلسفتنا. إطار صارم لمكافحة التنمر يعني أن يشعر الطلاب بالأمان والاحترام والتمكين كل يوم.' },
    'usp.p3.tag':           { en: '',                       ar: '' },
    'usp.p3.title':         { en: 'High Parent Satisfaction', ar: 'رضا الأهل العالي' },
    'usp.p3.text':          { en: 'Our families are our strongest advocates. Independently verified high levels of parent satisfaction reflect the trust built through transparent communication and genuine partnership.', ar: 'أسرنا هم أقوى المؤيدين لنا. مستويات رضا عالية موثّقة بشكل مستقل تعكس الثقة المبنية على التواصل الشفاف والشراكة الحقيقية.' },
    'usp.p4.tag':           { en: '',                       ar: '' },
    'usp.p4.title':         { en: 'Measurable Academic Growth', ar: 'نمو أكاديمي قابل للقياس' },
    'usp.p4.text':          { en: 'Clear, data-driven evidence of academic improvement for every student — tracked, reported, and acted upon. Progress is visible, personal, and celebrated.', ar: 'أدلة واضحة قائمة على البيانات تُظهر التحسن الأكاديمي لكل طالب — تُتتبع وتُرفع وتُعالج. التقدم مرئي وشخصي ويُحتفى به.' },
    'usp.p5.tag':           { en: '',                       ar: '' },
    'usp.p5.title':         { en: 'Emirati & Islamic Values', ar: 'القيم الإماراتية والإسلامية' },
    'usp.p5.text':          { en: 'Deeply woven into school life, our commitment to UAE national identity and Islamic values ensures students grow with strong cultural roots alongside global ambition.', ar: 'منسوجة بعمق في حياة المدرسة، تضمن التزامنا بالهوية الوطنية الإماراتية والقيم الإسلامية نمو الطلاب بجذور ثقافية راسخة إلى جانب الطموح العالمي.' },
    'usp.p6.tag':           { en: '',                       ar: '' },
    'usp.p6.title':         { en: 'Whole-Child Excellence', ar: 'التميز الشامل للطفل' },
    'usp.p6.text':          { en: 'We nurture every dimension of a child\'s development — academic, social, emotional, and physical — producing confident, compassionate graduates ready for life beyond school.', ar: 'نرعى كل جانب من جوانب نمو الطفل — الأكاديمي والاجتماعي والعاطفي والجسدي — لننتج خريجين واثقين ومتعاطفين مستعدين للحياة خارج المدرسة.' },

    /* ── Academics Preview ── */
    'acad.title':           { en: 'Academic Excellence',    ar: 'التميز الأكاديمي' },
    'acad.subtitle':        { en: 'Programs Built for Success', ar: 'برامج مُصمَّمة للنجاح' },
    'acad.kg.title':        { en: 'Kindergarten',           ar: 'رياض الأطفال' },
    'acad.kg.text':         { en: 'Play-based learning that builds foundational skills in literacy, numeracy, and social development.', ar: 'تعلم قائم على اللعب يبني المهارات الأساسية في القراءة والكتابة والحساب والتطور الاجتماعي.' },
    'acad.elem.title':      { en: 'Elementary',             ar: 'المرحلة الابتدائية' },
    'acad.elem.text':       { en: 'Grades 1–5 with project-based learning, STEM integration, and character development at the core.', ar: 'الصفوف 1–5 مع التعلم القائم على المشاريع وتكامل STEM وتنمية الشخصية في صميم المنهج.' },
    'acad.middle.title':    { en: 'Middle School',          ar: 'المرحلة المتوسطة' },
    'acad.middle.text':     { en: 'Grades 6–8 preparing students for academic rigor with expanded electives and leadership opportunities.', ar: 'الصفوف 6–8 تُعدّ الطلاب للصرامة الأكاديمية مع مواد اختيارية موسّعة وفرص قيادية.' },
    'acad.high.title':      { en: 'High School & AP',       ar: 'المرحلة الثانوية وAP' },
    'acad.high.text':       { en: 'Grades 9–12 with 15+ AP courses, college counseling, and a 100% university acceptance record.', ar: 'الصفوف 9–12 مع أكثر من 15 مقرر AP وإرشاد جامعي ومعدل قبول جامعي 100%.' },
    'acad.explore':         { en: 'Explore All Programs',   ar: 'استكشف جميع البرامج' },

    /* ── Admissions Preview ── */
    'adm.title':            { en: 'Join Our School Family', ar: 'انضم إلى عائلة مدرستنا' },
    'adm.subtitle':         { en: 'Simple Steps to Enrollment', ar: 'خطوات بسيطة للتسجيل' },
    'adm.step1':            { en: 'Submit Application',     ar: 'تقديم الطلب' },
    'adm.step2':            { en: 'Assessment & Interview', ar: 'التقييم والمقابلة' },
    'adm.step3':            { en: 'Offer & Enrollment',     ar: 'القبول والتسجيل' },
    'adm.cta':              { en: 'Start Your Application', ar: 'ابدأ طلبك' },
    'adm.tour':             { en: 'Book a Campus Tour',     ar: 'احجز جولة في الحرم' },

    /* ── Values / CARE ── */
    'care.title':           { en: 'Our Core Values',        ar: 'قيمنا الأساسية' },
    'care.c.title':         { en: 'Community',              ar: 'المجتمع' },
    'care.a.title':         { en: 'Achievement',            ar: 'الإنجاز' },
    'care.r.title':         { en: 'Respect',                ar: 'الاحترام' },
    'care.e.title':         { en: 'Excellence',             ar: 'التميز' },

    /* ── Contact / Footer ── */
    'contact.title':        { en: 'Get in Touch',           ar: 'تواصل معنا' },
    'contact.subtitle':     { en: 'We\'d love to hear from you', ar: 'يسعدنا التواصل معك' },
    'contact.name':         { en: 'Full Name',              ar: 'الاسم الكامل' },
    'contact.email':        { en: 'Email Address',          ar: 'البريد الإلكتروني' },
    'contact.phone':        { en: 'Phone Number',           ar: 'رقم الهاتف' },
    'contact.message':      { en: 'Your Message',           ar: 'رسالتك' },
    'contact.send':         { en: 'Send Message',           ar: 'إرسال الرسالة' },
    'contact.address.label':{ en: 'Address',                ar: 'العنوان' },
    'contact.phone.label':  { en: 'Phone',                  ar: 'الهاتف' },
    'contact.email.label':  { en: 'Email',                  ar: 'البريد' },
    'contact.hours.label':  { en: 'Office Hours',           ar: 'ساعات العمل' },
    'contact.hours.val':    { en: 'Sun–Thu: 7:30 AM – 3:30 PM', ar: 'الأحد–الخميس: 7:30 ص – 3:30 م' },

    /* ── Footer ── */
    'footer.desc':          { en: 'A premier American curriculum school in Dubai, nurturing excellence since 2005.', ar: 'مدرسة رائدة بمنهج أمريكي في دبي، تُربّي التميز منذ عام 2005.' },
    'footer.links':         { en: 'Quick Links',            ar: 'روابط سريعة' },
    'footer.contact':       { en: 'Contact',                ar: 'التواصل' },
    'footer.legal':         { en: 'Legal',                  ar: 'القانونية' },
    'footer.privacy':       { en: 'Privacy Policy',         ar: 'سياسة الخصوصية' },
    'footer.terms':         { en: 'Terms of Use',           ar: 'شروط الاستخدام' },
    'footer.safeguarding':  { en: 'Safeguarding Policy',    ar: 'سياسة حماية الطلاب' },
    'footer.rights':        { en: 'All rights reserved.',   ar: 'جميع الحقوق محفوظة.' },
    'footer.sitemap':       { en: 'Sitemap',                ar: 'خريطة الموقع' },

    /* ── Misc Buttons / Labels ── */
    'btn.read-more':        { en: 'Read More',              ar: 'اقرأ المزيد' },
    'btn.learn-more':       { en: 'Learn More',             ar: 'اعرف المزيد' },
    'btn.apply':            { en: 'Apply Now',              ar: 'سجّل الآن' },
    'btn.contact':          { en: 'Contact Us',             ar: 'اتصل بنا' },
    'btn.whatsapp':         { en: 'WhatsApp',               ar: 'واتساب' },
    'btn.back-top':         { en: 'Back to top',            ar: 'العودة للأعلى' },
    'btn.skip':             { en: 'SKIP',                   ar: 'تخطي' },
    'btn.enter-site':       { en: 'ENTER SITE',             ar: 'ادخل الموقع' },
    'btn.book-tour':        { en: 'BOOK TOUR',              ar: 'احجز جولة' },

    /* ── Page Titles (document.title) ── */
    'page.title.home':      { en: 'North American International School | Dubai – Excellence in American Education', ar: 'المدرسة الأمريكية الدولية الشمالية | دبي – التميز في التعليم الأمريكي' },
    'page.title.about':     { en: 'About NAIS | North American International School Dubai', ar: 'عن المدرسة | المدرسة الأمريكية الدولية الشمالية دبي' },
    'page.title.academics': { en: 'Academics | North American International School Dubai', ar: 'الأكاديمية | المدرسة الأمريكية الدولية الشمالية دبي' },
    'page.title.admissions':{ en: 'Admissions | North American International School Dubai', ar: 'القبول | المدرسة الأمريكية الدولية الشمالية دبي' },

    /* ── Mobile bottom bar ── */
    'mob.call':             { en: 'CALL',                   ar: 'اتصال' },
    'mob.whatsapp':         { en: 'WHATSAPP',               ar: 'واتساب' },
    'mob.apply':            { en: 'APPLY NOW',              ar: 'سجّل الآن' },
    'mob.tour':             { en: 'BOOK TOUR',              ar: 'احجز جولة' },

    /* ── Recruitment / Visit section ── */
    'recruit.title':        { en: 'Meet Our Principal & Open House', ar: 'قابل مديرنا وانضم ليوم الأبواب المفتوحة' },
    'recruit.subtitle':     { en: 'Experience NAIS First-Hand', ar: 'اختبر NAIS بنفسك' },
    'recruit.btn.tour':     { en: 'Book a Visit',           ar: 'احجز زيارة' },
    'recruit.btn.apply':    { en: 'Apply Online',           ar: 'قدّم إلكترونياً' },

    /* ── Accreditation ── */
    'accred.title':         { en: 'Accreditation & Recognition', ar: 'الاعتماد والتقدير' },

    /* ── Gallery ── */
    'gallery.title':        { en: 'Life at NAIS Dubai',     ar: 'الحياة في NAIS دبي' },
    'gallery.subtitle':     { en: 'Campus Moments',         ar: 'لحظات من الحرم المدرسي' },
    'gallery.btn':          { en: 'View Full Gallery',      ar: 'عرض المعرض الكامل' },

    /* ── News / Events ── */
    'news.title':           { en: 'Latest News & Events',   ar: 'أحدث الأخبار والفعاليات' },

    /* ── Mini form (hero) ── */
    'form.parent-name':     { en: 'Parent Name *',          ar: 'اسم ولي الأمر *' },
    'form.phone':           { en: 'Phone / WhatsApp *',     ar: 'الهاتف / واتساب *' },
    'form.email-addr':      { en: 'Email Address *',        ar: 'البريد الإلكتروني *' },
    'form.grade':           { en: 'Grade Level',            ar: 'المرحلة الدراسية' },
    'form.grade.kg':        { en: 'Kindergarten',           ar: 'رياض الأطفال' },
    'form.grade.elem':      { en: 'Elementary (Gr. 1–5)',   ar: 'الابتدائي (الصف 1–5)' },
    'form.grade.middle':    { en: 'Middle School (Gr. 6–8)', ar: 'المتوسط (الصف 6–8)' },
    'form.grade.high':      { en: 'High School (Gr. 9–12)', ar: 'الثانوي (الصف 9–12)' },
    'form.submit':          { en: 'Get Information',        ar: 'احصل على المعلومات' },
    'form.respond':         { en: 'We respond within 24 hours', ar: 'نردّ خلال 24 ساعة' },
    'form.request-info':    { en: 'Request Information',    ar: 'طلب المعلومات' },

    /* ── Why Section ── */
    'why.section.label':    { en: 'Why Families Choose Us',  ar: 'لماذا تختارنا الأسر' },
    'why.section.h2':       { en: 'What Makes NAIS <em>the Different</em>', ar: 'ما الذي يجعل NAIS <em>مختلفة</em>' },
    'why.section.intro':    { en: 'Families from 45+ nationalities choose NAIS for our unique combination of academic excellence, character development, and an inclusive, inspiring community.', ar: 'تختار أسر من أكثر من 45 جنسية مدرسة NAIS لمزيجها الفريد من التميز الأكاديمي وتنمية الشخصية ومجتمعها الشامل والملهم.' },
    'why.c1.h3':            { en: 'KHDA Licensed & Accredited', ar: 'مرخصة ومعتمدة من KHDA' },
    'why.c1.p':             { en: 'Fully licensed by Dubai\'s Knowledge & Human Development Authority. Internationally accredited by NEASC — recognized worldwide.', ar: 'حاصلة على الترخيص الكامل من هيئة المعرفة والتنمية البشرية في دبي. معتمدة دولياً من NEASC — معترف بها عالمياً.' },
    'why.c2.h3':            { en: 'Small Class Sizes',       ar: 'فصول صغيرة الحجم' },
    'why.c2.p':             { en: 'With a target of just 22 students per class, every child receives the personal attention and individualized support they deserve to thrive.', ar: 'بهدف 22 طالبًا في الفصل فقط، يحصل كل طفل على الاهتمام الشخصي والدعم الفردي اللذين يستحقهما للازدهار.' },
    'why.c3.h3':            { en: '100% University Acceptance', ar: '100% قبول جامعي' },
    'why.c3.p':             { en: 'Every NAIS graduate gains admission to a university. Our dedicated counseling team guides students to top universities in North America, UK, and beyond.', ar: 'كل خريج من NAIS يُقبل في جامعة. يرشد فريق الإرشاد المتخصص لدينا الطلاب نحو أفضل الجامعات في أمريكا الشمالية والمملكة المتحدة وما بعدها.' },
    'why.c4.h3':            { en: 'Truly International',    ar: 'دولية حقيقية' },
    'why.c4.p':             { en: '45+ nationalities create a rich, multicultural environment that prepares students to thrive in today\'s global world with empathy and confidence.', ar: 'أكثر من 45 جنسية تخلق بيئة متعددة الثقافات تُعدّ الطلاب للازدهار في العالم العالمي اليوم بتعاطف وثقة.' },
    'why.c5.h3':            { en: '15+ AP Courses',         ar: 'أكثر من 15 مقرر AP' },
    'why.c5.p':             { en: 'College-preparatory Advanced Placement courses in sciences, humanities, arts, and computer science — giving students a head start on university success.', ar: 'مقررات AP التحضيرية للجامعة في العلوم والإنسانيات والفنون وعلوم الحاسوب — تمنح الطلاب انطلاقة في النجاح الجامعي.' },
    'why.c6.h3':            { en: 'Whole-Child Development', ar: 'تنمية الطفل الشاملة' },
    'why.c6.p':             { en: 'Our CARE values — Community, Awareness, Resilience, Engagement — guide every aspect of school life, developing character alongside academics.', ar: 'قيم CARE لدينا — المجتمع والوعي والمرونة والمشاركة — توجّه كل جانب من جوانب الحياة المدرسية، وتنمّي الشخصية إلى جانب الأكاديميات.' },

    /* ── Academics Section ── */
    'acad.sec.label':       { en: 'Academic Programs',      ar: 'البرامج الأكاديمية' },
    'acad.sec.h2':          { en: 'Education for Every <br/><em>Stage of Growth</em>', ar: 'تعليم لكل <br/><em>مرحلة نمو</em>' },
    'acad.sec.intro':       { en: 'Our American curriculum programs are thoughtfully designed to meet each student\'s developmental stage — nurturing curiosity, building skills, and inspiring achievement from Kindergarten through Grade 12.', ar: 'صُمِّمت برامجنا بالمنهج الأمريكي بعناية لتلبية احتياجات كل مرحلة نمو للطالب — تُنمّي الفضول وتبني المهارات وتُلهم الإنجاز من رياض الأطفال حتى الصف الثاني عشر.' },
    'acad.kg.h3':           { en: 'Kindergarten',           ar: 'رياض الأطفال' },
    'acad.kg.p':            { en: 'Nurturing a love of learning through play-based exploration, foundational literacy, and social-emotional development in a warm, joyful environment.', ar: 'تنمية حب التعلم من خلال الاستكشاف القائم على اللعب والقراءة والكتابة التأسيسية والتطور الاجتماعي العاطفي في بيئة دافئة وسعيدة.' },
    'acad.elem.h3':         { en: 'Elementary School',      ar: 'المرحلة الابتدائية' },
    'acad.elem.p':          { en: 'Building strong academic foundations in core subjects while developing critical thinking, creativity, and confident communication skills.', ar: 'بناء أسس أكاديمية قوية في المواد الأساسية مع تطوير التفكير النقدي والإبداع ومهارات التواصل الواثق.' },
    'acad.mid.h3':          { en: 'Middle School',          ar: 'المرحلة المتوسطة' },
    'acad.mid.p':           { en: 'Challenging students with rigorous academics, project-based learning, and leadership opportunities that foster independence and resilience.', ar: 'تحدي الطلاب بأكاديميات صارمة والتعلم القائم على المشاريع وفرص القيادة التي تعزز الاستقلالية والمرونة.' },
    'acad.high.h3':         { en: 'High School',            ar: 'المرحلة الثانوية' },
    'acad.high.p':          { en: 'College-preparatory excellence with AP courses, robust counseling, and a track record of placing students in top universities worldwide.', ar: 'تميّز تحضيري للجامعة مع مقررات AP وإرشاد قوي وسجل حافل بقبول الطلاب في أفضل الجامعات حول العالم.' },
    'acad.hi.ap':           { en: 'Advanced Placement (AP)', ar: 'البكالوريا المتقدمة (AP)' },
    'acad.hi.counsel':      { en: 'University counseling',  ar: 'الإرشاد الجامعي' },
    'acad.hi.global':       { en: 'Global opportunities',   ar: 'فرص عالمية' },
    'acad.explore-all':     { en: 'View Full Academic Overview', ar: 'عرض نظرة أكاديمية كاملة' },
    'acad.hl.ap':           { en: 'AP Courses',             ar: 'مقررات AP' },
    'acad.hl.ap.sub':       { en: '15+ Advanced Placement subjects offered', ar: 'أكثر من 15 مادة AP متاحة' },
    'acad.hl.nations':      { en: '45+ Nationalities',      ar: '45+ جنسية' },
    'acad.hl.nations.sub':  { en: 'A truly diverse, multicultural community', ar: 'مجتمع متنوع متعدد الثقافات حقاً' },
    'acad.hl.uni':          { en: 'University Acceptance',  ar: 'القبول الجامعي' },
    'acad.hl.uni.sub':      { en: '100% of graduates admitted to universities', ar: '100% من الخريجين مقبولون في الجامعات' },
    'acad.hl.stem':         { en: 'STEM Focus',             ar: 'التركيز على STEM' },
    'acad.hl.stem.sub':     { en: 'State-of-the-art labs & innovation hub', ar: 'مختبرات متطورة ومركز ابتكار' },

    /* ── Welcome Section ── */
    'welcome.label':        { en: 'Welcome to NAIS',        ar: 'مرحباً بكم في NAIS' },
    'welcome.h2':           { en: 'A School That<br/><em>Transforms Lives</em>', ar: 'مدرسة <br/><em>تُغيّر الحياة</em>' },
    'welcome.lead':         { en: 'North American International School is Dubai\'s premier American curriculum institution, dedicated to developing every student\'s intellectual curiosity, moral character, and global perspective.', ar: 'المدرسة الأمريكية الدولية الشمالية هي المؤسسة التعليمية الأمريكية الرائدة في دبي، المكرسة لتنمية الفضول الفكري والشخصية الأخلاقية والمنظور العالمي لكل طالب.' },
    'welcome.p2':           { en: 'From Kindergarten through Grade 12, our students benefit from small class sizes, highly qualified faculty, and a rigorous yet nurturing environment that prepares them for the world\'s top universities and beyond.', ar: 'من رياض الأطفال حتى الصف الثاني عشر، يستفيد طلابنا من فصول صغيرة الحجم وكادر أكاديمي مؤهل عالياً وبيئة صارمة ولكنها راعية تُعدّهم لأفضل الجامعات في العالم وما بعدها.' },
    'welcome.p1.h4':        { en: 'Academic Excellence',   ar: 'التميز الأكاديمي' },
    'welcome.p1.p':         { en: 'American curriculum with AP courses and dedicated university counseling', ar: 'منهج أمريكي مع مقررات AP وإرشاد جامعي متخصص' },
    'welcome.p2.h4':        { en: 'Global Perspective',    ar: 'المنظور العالمي' },
    'welcome.p2.p':         { en: '45+ nationalities creating a truly international community', ar: 'أكثر من 45 جنسية تخلق مجتمعاً دولياً حقيقياً' },
    'welcome.p3.h4':        { en: 'Character First',       ar: 'الشخصية أولاً' },
    'welcome.p3.p':         { en: 'CARE values: Community, Awareness, Resilience, Engagement', ar: 'قيم CARE: المجتمع والوعي والمرونة والمشاركة' },
    'welcome.btn.story':    { en: 'Discover Our Story',    ar: 'اكتشف قصتنا' },
    'welcome.btn.film':     { en: 'Watch School Film',     ar: 'شاهد فيلم المدرسة' },

    /* ── CARE Values ── */
    'care.label':           { en: 'Our Core Values',        ar: 'قيمنا الأساسية' },
    'care.h2':              { en: 'At NAIS, We <em>CARE</em>', ar: 'في NAIS، نحن نهتم <em>CARE</em>' },
    'care.intro':           { en: 'Our CARE framework guides every interaction, decision, and relationship — creating a culture of excellence and belonging.', ar: 'يوجّه إطار CARE لدينا كل تفاعل وقرار وعلاقة — خالقاً ثقافة التميز والانتماء.' },
    'care.c.h3':            { en: 'Community',              ar: 'المجتمع' },
    'care.c.p':             { en: 'We cultivate a warm, inclusive community where every student feels known, respected, and connected — across classrooms, hallways, and beyond.', ar: 'نُنمّي مجتمعاً دافئاً شاملاً يشعر فيه كل طالب بأنه معروف ومحترم ومتواصل — في الفصول والممرات وما بعدها.' },
    'care.a.h3':            { en: 'Awareness',              ar: 'الوعي' },
    'care.a.p':             { en: 'We develop mindful, empathetic learners who are aware of themselves, their environment, and their responsibility to the global community.', ar: 'نطوّر متعلمين واعين ومتعاطفين يدركون أنفسهم وبيئتهم ومسؤوليتهم تجاه المجتمع العالمي.' },
    'care.r.h3':            { en: 'Resilience',             ar: 'المرونة' },
    'care.r.p':             { en: 'We nurture the strength and grit to overcome challenges, learn from setbacks, and emerge more confident and capable with every experience.', ar: 'نُنمّي القوة والعزيمة للتغلب على التحديات والتعلم من الانتكاسات والخروج أكثر ثقة وكفاءة مع كل تجربة.' },
    'care.e.h3':            { en: 'Engagement',             ar: 'المشاركة' },
    'care.e.p':             { en: 'We inspire deep, active engagement in learning, school life, and community — building students who are passionate and purposeful in all they do.', ar: 'نُلهم المشاركة العميقة والنشطة في التعلم والحياة المدرسية والمجتمع — نبني طلاباً متحمسين وهادفين في كل ما يفعلونه.' },

    /* ── Student Life ── */
    'life.label':           { en: 'Beyond the Classroom',  ar: 'ما وراء الفصل الدراسي' },
    'life.h2':              { en: 'A Vibrant <em>Student Life</em>', ar: 'حياة طلابية <em>نابضة</em>' },
    'life.arts.tag':        { en: 'Arts & Culture',         ar: 'الفنون والثقافة' },
    'life.arts.h3':         { en: 'Discover Your Creative Voice', ar: 'اكتشف صوتك الإبداعي' },
    'life.arts.p':          { en: 'From visual arts to performing arts, our programs inspire students to express themselves boldly and develop a lifelong appreciation for the arts.', ar: 'من الفنون البصرية إلى فنون الأداء، تُلهم برامجنا الطلاب للتعبير عن أنفسهم بجرأة وتنمية تقدير مدى الحياة للفنون.' },
    'life.sports.h4':       { en: 'Athletics & Sports',    ar: 'الألعاب الرياضية' },
    'life.sports.p':        { en: 'Competitive sports that build teamwork, discipline, and excellence on and off the field.', ar: 'رياضات تنافسية تبني العمل الجماعي والانضباط والتميز داخل الملعب وخارجه.' },
    'life.clubs.h4':        { en: 'Clubs & Societies',     ar: 'الأندية والجمعيات' },
    'life.clubs.p':         { en: '30+ clubs letting students explore passions, develop leadership, and build friendships.', ar: 'أكثر من 30 نادياً تتيح للطلاب استكشاف الشغف وتطوير القيادة وبناء الصداقات.' },
    'life.service.h4':      { en: 'Community Service',     ar: 'خدمة المجتمع' },
    'life.service.p':       { en: 'Instilling a spirit of giving and global citizenship through meaningful service.', ar: 'غرس روح العطاء والمواطنة العالمية من خلال الخدمة الهادفة.' },

    /* ── Stats ── */
    'stats.students':       { en: 'Students',              ar: 'طالب' },
    'stats.teachers':       { en: 'Qualified Teachers',    ar: 'معلم مؤهل' },
    'stats.nations':        { en: 'Nationalities',         ar: 'جنسية' },
    'stats.uni':            { en: 'University Acceptance', ar: 'نسبة القبول الجامعي' },
    'stats.years':          { en: 'Years of Excellence',   ar: 'عام من التميز' },
    'stats.class':          { en: 'Students per Class',    ar: 'طالب في الفصل' },

    /* ── Testimonials ── */
    'test.label':           { en: 'Voices of Our Community', ar: 'أصوات مجتمعنا' },
    'test.h2':              { en: 'What Our Families <em>Say</em>', ar: 'ما تقوله <em>عائلاتنا</em>' },
    'test.1.q':             { en: '"NAIS has been transformative for our children. The teachers genuinely care about each student as an individual. The American curriculum combined with the diverse international community has prepared our daughter beautifully for university in the United States."', ar: '"كانت NAIS تحولية لأطفالنا. يهتم المعلمون حقاً بكل طالب كفرد. لقد أعدّ المنهج الأمريكي مقروناً بالمجتمع الدولي المتنوع ابنتنا إعداداً رائعاً للجامعة في الولايات المتحدة."' },
    'test.1.name':          { en: 'Sarah R.',               ar: 'سارة ر.' },
    'test.1.role':          { en: 'Parent of Grade 11 Student', ar: 'ولي أمر طالب في الصف الحادي عشر' },
    'test.2.q':             { en: '"The small class sizes mean every child gets personal attention. My son struggled in his previous school but at NAIS he has thrived — academically and socially. The inclusion program is outstanding."', ar: '"الفصول الصغيرة تعني أن كل طفل يحصل على اهتمام شخصي. كان ابني يعاني في مدرسته السابقة لكن في NAIS ازدهر أكاديمياً واجتماعياً. برنامج الدمج متميز."' },
    'test.2.name':          { en: 'Ahmed M.',               ar: 'أحمد م.' },
    'test.2.role':          { en: 'Parent of Grade 7 Student', ar: 'ولي أمر طالب في الصف السابع' },
    'test.3.q':             { en: '"As a NAIS graduate, I can say the school shaped who I am today. The CARE values aren\'t just words — they\'re genuinely lived every day. I was accepted to my dream university in Canada thanks to the incredible guidance I received."', ar: '"بوصفي خريجة من NAIS، يمكنني القول إن المدرسة شكّلت هويتي. قيم CARE ليست مجرد كلمات — إنها تُعاش حقاً كل يوم. قُبلت في جامعة أحلامي في كندا بفضل الإرشاد الرائع الذي تلقيته."' },
    'test.3.name':          { en: 'Lena K.',                ar: 'لينا ك.' },
    'test.3.role':          { en: 'Class of 2023 – University of Toronto', ar: 'دفعة 2023 – جامعة تورنتو' },
    'test.4.q':             { en: '"We relocated from New York and were anxious about finding the right school in Dubai. NAIS immediately felt like home. The American curriculum seamlessly continued our daughter\'s education and the community welcomed us warmly."', ar: '"انتقلنا من نيويورك وكنا قلقين من إيجاد المدرسة المناسبة في دبي. شعرنا فوراً أن NAIS وطننا. استمر المنهج الأمريكي في تعليم ابنتنا بسلاسة ورحّب بنا المجتمع بدفء."' },
    'test.4.name':          { en: 'Jennifer P.',            ar: 'جينيفر ب.' },
    'test.4.role':          { en: 'Parent of Grade 4 & Grade 9 Students', ar: 'ولية أمر طلاب في الصف الرابع والتاسع' },

    /* ── Recruitment Section ── */
    'recruit.sec.label':    { en: 'Recruitment & Visits',  ar: 'التجنيد والزيارات' },
    'recruit.sec.h2':       { en: 'Meet Our <em>Principal</em> & Open House', ar: 'قابل <em>مديرنا</em> وانضم لليوم المفتوح' },
    'recruit.sec.intro':    { en: 'Experience NAIS first-hand. Meet our Principal, tour the campus, and discover why families choose us — no obligation, just an honest conversation.', ar: 'اختبر NAIS بنفسك. قابل مديرنا وجُل في الحرم واكتشف لماذا تختارنا الأسر — بدون التزام، مجرد محادثة صادقة.' },
    'recruit.badge.open':   { en: 'Open House 2026',        ar: 'اليوم المفتوح 2026' },
    'recruit.banner.h3':    { en: 'Experience NAIS — See It for Yourself', ar: 'اختبر NAIS — شاهده بنفسك' },
    'recruit.banner.p':     { en: 'Meet students, tour classrooms, and speak directly with our Principal and faculty.', ar: 'قابل الطلاب وجُل في الفصول وتحدث مباشرة مع مديرنا وأعضاء هيئة التدريس.' },
    'recruit.register':     { en: 'Register Now',           ar: 'سجّل الآن' },
    'recruit.meet.h3':      { en: 'Meet the Principal',     ar: 'قابل المدير' },
    'recruit.meet.sub':     { en: 'Weekly Walk-In Sessions — No Appointment Needed', ar: 'جلسات أسبوعية بدون موعد مسبق' },
    'recruit.tue':          { en: 'Tuesdays',               ar: 'الثلاثاء' },
    'recruit.thu':          { en: 'Thursdays',              ar: 'الخميس' },
    'recruit.book.visit':   { en: 'Book Your Visit',        ar: 'احجز زيارتك' },
    'recruit.openhouse.h3': { en: 'Open House Saturdays',   ar: 'يوم مفتوح كل سبت' },
    'recruit.openhouse.sub':{ en: 'Tour the campus with the whole family', ar: 'جُل في الحرم مع العائلة بأكملها' },
    'recruit.oh.title':     { en: 'Open House Saturday',    ar: 'يوم السبت المفتوح' },
    'recruit.oh.time':      { en: '10:00 am – 2:00 pm',    ar: '10:00 ص – 2:00 م' },
    'recruit.register.oh':  { en: 'Register for Open House', ar: 'سجّل في اليوم المفتوح' },
    'recruit.amb.h3':       { en: 'Parent Ambassador Programme', ar: 'برنامج سفير الأهل' },
    'recruit.amb.sub':      { en: 'Refer a family. Earn AED 500.', ar: 'أحِل عائلة. اربح 500 درهم.' },
    'recruit.amb.p':        { en: 'Love NAIS? Share it. When your referred family enrols, you receive <strong>AED 500</strong> as our way of saying thank you for being an ambassador of our school community.', ar: 'تحب NAIS؟ شاركها. عندما تلتحق العائلة التي أحلتها، تحصل على <strong>500 درهم</strong> تقديراً لكونك سفيراً لمجتمع مدرستنا.' },
    'recruit.amb.reward':   { en: 'Per successful referral', ar: 'لكل إحالة ناجحة' },
    'recruit.amb.btn':      { en: 'Refer a Family',         ar: 'أحِل عائلة' },

    /* ── 360 Tour ── */
    'tour360.label':        { en: 'Virtual Campus Tour',    ar: 'جولة افتراضية في الحرم' },
    'tour360.h2':           { en: 'Explore Our Campus <em>in 360°</em>', ar: 'استكشف حرمنا <em>بزاوية 360°</em>' },
    'tour360.intro':        { en: 'Step inside a real school — classrooms, science labs, and playgrounds — from anywhere in the world. These are live 360° walkthroughs of actual school spaces.', ar: 'ادخل إلى مدرسة حقيقية — الفصول الدراسية والمختبرات العلمية والملاعب — من أي مكان في العالم. هذه جولات مباشرة بزاوية 360° لمساحات مدرسية فعلية.' },
    'tour360.tab1':         { en: 'Main Entrance',          ar: 'المدخل الرئيسي' },
    'tour360.tab2':         { en: 'KG Playground',          ar: 'ملعب الروضة' },
    'tour360.tab3':         { en: 'Sports Field',           ar: 'الملعب الرياضي' },
    'tour360.campus.h3':    { en: 'Our NAIS Campus',        ar: 'حرمنا في NAIS' },
    'tour360.campus.p':     { en: 'The iconic NAIS Dubai main building in Al Mizhar 1 — a welcoming, purpose-built school designed to inspire every student from the moment they arrive.', ar: 'المبنى الرئيسي الشهير لـ NAIS دبي في المزهر 1 — مدرسة مُصممة خصيصاً لتُلهم كل طالب من لحظة وصوله.' },
    'tour360.sports.h3':    { en: 'Sports Field',           ar: 'الملعب الرياضي' },
    'tour360.sports.p':     { en: 'Our full-size, premium artificial turf football pitch with a grand shaded canopy — the perfect arena for competitive sports, PE lessons, and school tournaments all year round.', ar: 'ملعبنا الكامل الحجم بعشب اصطناعي فاخر مع مظلة كبيرة — الساحة المثالية للرياضات التنافسية ودروس التربية البدنية والبطولات المدرسية طوال العام.' },
    'tour360.real.strong':  { en: 'Prefer a real visit?',   ar: 'تفضّل الزيارة الحقيقية؟' },
    'tour360.real.span':    { en: 'Our campus tours run every weekday — meet the Principal and see NAIS in person.', ar: 'جولاتنا في الحرم تسير كل يوم دراسي — قابل المدير وشاهد NAIS شخصياً.' },
    'tour360.book':         { en: 'Book a Campus Tour',     ar: 'احجز جولة في الحرم' },

    /* ── Video Promo ── */
    'video.label':          { en: 'Experience NAIS',        ar: 'اختبر NAIS' },
    'video.h2':             { en: 'See Our <em>Campus</em> Come Alive', ar: 'شاهد <em>حرمنا</em> ينبض بالحياة' },
    'video.p':              { en: 'Discover what makes NAIS Dubai\'s most trusted American school. Watch our school film to meet our faculty, students, and the vibrant community that defines our unique spirit.', ar: 'اكتشف ما يجعل NAIS أكثر المدارس الأمريكية موثوقية في دبي. شاهد فيلم مدرستنا لتتعرف على كادرنا وطلابنا والمجتمع النابض الذي يُعرّف روحنا الفريدة.' },
    'video.apply':          { en: 'Apply for 2026–2027',    ar: 'التقديم لعام 2026–2027' },
    'video.tour':           { en: 'Book a Tour',            ar: 'احجز جولة' },

    /* ── News ── */
    'news.label':           { en: 'Stay Informed',          ar: 'ابقَ على اطلاع' },
    'news.h2':              { en: 'Latest News <em>& Events</em>', ar: 'أحدث الأخبار <em>والفعاليات</em>' },
    'news.all':             { en: 'All News',               ar: 'كل الأخبار' },

    /* ── CTA Strip ── */
    'cta.h3':               { en: 'Ready to Start Your NAIS Journey?', ar: 'مستعد لبدء رحلتك في NAIS؟' },
    'cta.p':                { en: 'Join our community of 900+ students from 45+ nationalities', ar: 'انضم إلى مجتمعنا من أكثر من 900 طالب من أكثر من 45 جنسية' },
    'cta.apply':            { en: 'Apply Now',              ar: 'سجّل الآن' },
    'cta.contact':          { en: 'Contact Us',             ar: 'اتصل بنا' },
    'cta.whatsapp':         { en: 'WhatsApp',               ar: 'واتساب' },

    /* ── Admissions CTA Section ── */
    'adm.cta.label':        { en: 'Admissions 2026–2027',   ar: 'القبول 2026–2027' },
    'adm.cta.h2':           { en: 'Ready to Join the NAIS Family?', ar: 'مستعد للانضمام لعائلة NAIS؟' },
    'adm.cta.p':            { en: 'Enrollment is now open for the 2026–2027 academic year. Take the first step toward giving your child an exceptional American education in Dubai.', ar: 'التسجيل مفتوح الآن للعام الدراسي 2026–2027. اتخذ الخطوة الأولى نحو منح طفلك تعليماً أمريكياً استثنائياً في دبي.' },
    'adm.step1.h4':         { en: 'Book a Tour',            ar: 'احجز جولة' },
    'adm.step1.p':          { en: 'Visit our beautiful campus and experience NAIS first-hand', ar: 'زُر حرمنا الجميل واختبر NAIS بنفسك' },
    'adm.step2.h4':         { en: 'Submit Application',     ar: 'قدّم الطلب' },
    'adm.step2.p':          { en: 'Complete our simple online admissions application', ar: 'أكمل طلب القبول الإلكتروني البسيط' },
    'adm.step3.h4':         { en: 'Assessment Day',         ar: 'يوم التقييم' },
    'adm.step3.p':          { en: 'Join us for a friendly assessment and meet our team', ar: 'انضم إلينا لتقييم ودي وقابل فريقنا' },
    'adm.step4.h4':         { en: 'Welcome to NAIS!',       ar: 'مرحباً بك في NAIS!' },
    'adm.step4.p':          { en: 'Receive your offer and start your NAIS journey', ar: 'استلم عرضك وابدأ رحلتك في NAIS' },
    'adm.cta.email':        { en: 'Email Admissions',       ar: 'راسل القبول' },

    /* ── Accreditations ── */
    'accred.sec.label':     { en: 'Recognition & Trust',    ar: 'الاعتراف والثقة' },
    'accred.sec.h2':        { en: 'Accreditations & <em>Affiliations</em>', ar: 'الاعتمادات <em>والانتماءات</em>' },
    'accred.khda':          { en: 'Knowledge & Human Development Authority', ar: 'هيئة المعرفة والتنمية البشرية' },
    'accred.neasc':         { en: 'New England Association of Schools & Colleges', ar: 'رابطة مدارس وكليات نيو إنغلاند' },
    'accred.cb':            { en: 'Advanced Placement Program Member', ar: 'عضو برنامج AP المتقدم' },
    'accred.moe':           { en: 'UAE Ministry of Education Licensed', ar: 'مرخصة من وزارة التربية الإماراتية' },

    /* ── Contact Section ── */
    'contact.sec.label':    { en: 'Get in Touch',           ar: 'تواصل معنا' },
    'contact.sec.h2':       { en: 'We\'d Love to <em>Hear From You</em>', ar: 'يسعدنا <em>سماعك</em>' },
    'contact.sec.p':        { en: 'Whether you have questions about admissions, want to schedule a tour, or simply want to learn more about NAIS, our team is here to help.', ar: 'سواء كانت لديك أسئلة حول القبول أو تريد تحديد موعد لجولة أو ببساطة تريد معرفة المزيد عن NAIS، فريقنا هنا للمساعدة.' },
    'contact.addr.strong':  { en: 'Address',                ar: 'العنوان' },
    'contact.addr.span':    { en: 'Al Mizhar 1, Mirdif, Dubai<br/>United Arab Emirates', ar: 'المزهر 1، مردف، دبي<br/>الإمارات العربية المتحدة' },
    'contact.phone.strong': { en: 'Phone',                  ar: 'الهاتف' },
    'contact.email.strong': { en: 'Admissions Email',       ar: 'البريد الإلكتروني للقبول' },
    'contact.hours.strong': { en: 'Office Hours',           ar: 'ساعات العمل' },
    'contact.hours.span':   { en: 'Sunday – Thursday: 8:00 AM – 3:30 PM', ar: 'الأحد – الخميس: 8:00 ص – 3:30 م' },
    'contact.whatsapp.btn': { en: 'Chat on WhatsApp – Quick Response!', ar: 'تحدث على واتساب – ردٌّ سريع!' },
    'contact.form.h3':      { en: 'Send Us a Message',      ar: 'أرسل لنا رسالة' },
    'contact.form.name':    { en: 'Full Name',              ar: 'الاسم الكامل' },
    'contact.form.email':   { en: 'Email Address',          ar: 'البريد الإلكتروني' },
    'contact.form.phone':   { en: 'Phone Number',           ar: 'رقم الهاتف' },
    'contact.form.msg':     { en: 'Your Message',           ar: 'رسالتك' },
    'contact.form.msg.ph':  { en: 'Tell us how we can help you...', ar: 'أخبرنا كيف يمكننا مساعدتك...' },
    'contact.form.send':    { en: 'Send Message',           ar: 'إرسال الرسالة' },
    'contact.form.thanks':  { en: 'Thank you! We\'ll be in touch within 24 hours.', ar: 'شكراً! سنتواصل معك في غضون 24 ساعة.' },

    /* ── Tour Banner ── */
    'tourbanner.h3':        { en: '📍 Visit Our Campus in Al Mizhar 1, Dubai', ar: '📍 زُر حرمنا في المزهر 1، دبي' },
    'tourbanner.p':         { en: 'Book a personalized campus tour and experience NAIS first-hand — meet our teachers, see our facilities, and discover what makes us Dubai\'s premier American school.', ar: 'احجز جولة شخصية في الحرم واختبر NAIS بنفسك — قابل معلمينا وشاهد مرافقنا واكتشف ما يجعلنا المدرسة الأمريكية الرائدة في دبي.' },
    'tourbanner.btn':       { en: 'Book a Tour',            ar: 'احجز جولة' },

    /* ── Footer extra ── */
    'footer.copy':          { en: '© 2025 North American International School, Dubai. All Rights Reserved.', ar: '© 2025 المدرسة الأمريكية الدولية الشمالية، دبي. جميع الحقوق محفوظة.' },
    'footer.ac.programs':   { en: 'Academic Programs',      ar: 'البرامج الأكاديمية' },
    'footer.apply.now':     { en: 'Apply Now',              ar: 'سجّل الآن' },

    /* ── Announcement Band ── */
    'ann.latest':           { en: 'Latest',                 ar: 'آخر الأخبار' },
    'ann.ticker':           { en: '📅 Open House – Register Now for Academic Year 2026–2027 | 🎓 Latest School News – Stay Updated with NAIS Highlights | 🏆 NAIS Students Win Regional Science Fair – Congratulations! | ⭐ Enrollment Now Open – Book Your Tour Today', ar: '📅 اليوم المفتوح – سجّل الآن للعام الدراسي 2026–2027 | 🎓 آخر أخبار المدرسة – ابقَ على اطلاع بأبرز أحداث NAIS | 🏆 طلاب NAIS يفوزون في معرض العلوم الإقليمي – تهانينا! | ⭐ التسجيل مفتوح الآن – احجز جولتك اليوم' },
    'ann.viewall':          { en: 'View All',               ar: 'عرض الكل' },

    /* ── Quick Access Dashboard ── */
    'quick.apply':          { en: 'Apply Now',              ar: 'سجّل الآن' },
    'quick.fees':           { en: 'Tuition & Fees',         ar: 'الرسوم الدراسية' },
    'quick.calendar':       { en: 'School Calendar',        ar: 'التقويم المدرسي' },
    'quick.lms':            { en: 'LMS Login',              ar: 'بوابة التعلم' },
    'quick.docs':           { en: 'Documents & Forms',      ar: 'المستندات والنماذج' },

    /* ── USP Section ── */
    'usp.h2':               { en: 'Our Core <em>Strengths</em>', ar: 'ركائزنا <em>الأساسية</em>' },
    'usp.intro':            { en: 'Recognised by independent inspection entities, these are the pillars that define the NAIS experience and make us uniquely positioned in Dubai\'s education landscape.', ar: 'معترف بها من جهات تفتيش مستقلة، هذه هي الركائز التي تُعرِّف تجربة NAIS وتجعلنا في مكانة فريدة في مشهد التعليم في دبي.' },

    /* ── Gallery Section ── */
    'gallery.label':        { en: 'Life at NAIS Dubai',     ar: 'الحياة في NAIS دبي' },
    'gallery.h2':           { en: 'Every Moment <em>Matters</em>', ar: 'كل لحظة <em>تحسب</em>' },
    'gallery.text':         { en: 'From morning assembly to sports day, science fairs to cultural celebrations — our campus is alive with curiosity, creativity, and community. Explore life at NAIS through our lens.', ar: 'من طابور الصباح إلى يوم الرياضة، ومن معارض العلوم إلى الاحتفالات الثقافية — حرمنا يفيض بالفضول والإبداع والمجتمع. استكشف الحياة في NAIS من خلال عدستنا.' },
    'gallery.stat.photos':  { en: 'Photos',                 ar: 'صورة' },
    'gallery.stat.categories': { en: 'Categories',          ar: 'فئة' },
    'gallery.stat.year':    { en: 'Academic Year',          ar: 'العام الدراسي' },

    /* ── Calendar Section ── */
    'cal.label':            { en: 'Academic Year 2026–2027', ar: 'العام الدراسي 2026–2027' },
    'cal.h2':               { en: 'School <em>Calendar</em>', ar: 'التقويم <em>المدرسي</em>' },

    /* ── Academics card features ── */
    'acad.kg.f1':           { en: 'Play-based learning',    ar: 'التعلم القائم على اللعب' },
    'acad.kg.f2':           { en: 'Literacy & numeracy foundations', ar: 'أسس القراءة والحساب' },
    'acad.kg.f3':           { en: 'Social-emotional growth', ar: 'النمو الاجتماعي العاطفي' },
    'acad.elem.f1':         { en: 'Core curriculum excellence', ar: 'تميّز المنهج الأساسي' },
    'acad.elem.f2':         { en: 'STEM integration',        ar: 'تكامل STEM' },
    'acad.elem.f3':         { en: 'Creative arts & music',   ar: 'الفنون الإبداعية والموسيقى' },
    'acad.mid.f1':          { en: 'Project-based learning',  ar: 'التعلم القائم على المشاريع' },
    'acad.mid.f2':          { en: 'Advanced science labs',   ar: 'مختبرات علوم متقدمة' },
    'acad.mid.f3':          { en: 'Leadership programs',     ar: 'برامج القيادة' },
    'acad.explore':         { en: 'Explore Program',         ar: 'استكشف البرنامج' },

    /* ── Contact form extra fields ── */
    'contact.form.pname':   { en: 'Parent / Guardian Name *', ar: 'اسم ولي الأمر *' },
    'contact.form.pname.ph':{ en: 'Your full name',          ar: 'اسمك الكامل' },
    'contact.form.sname':   { en: 'Student Name *',          ar: 'اسم الطالب *' },
    'contact.form.sname.ph':{ en: 'Student\'s name',         ar: 'اسم الطالب' },
    'contact.form.email':   { en: 'Email Address *',         ar: 'البريد الإلكتروني *' },
    'contact.form.email.ph':{ en: 'your@email.com',          ar: 'بريدك@الإلكتروني.com' },
    'contact.form.phone':   { en: 'Phone Number',            ar: 'رقم الهاتف' },

    /* ── Leadership Cards ── */
    'leader.ceo.tag':       { en: 'Group CEO',               ar: 'الرئيس التنفيذي للمجموعة' },
    'leader.ceo.title':     { en: 'Group Chief Executive Officer', ar: 'الرئيس التنفيذي للمجموعة' },
    'leader.ceo.quote':     { en: '"Our mission is to create world-class schools where every child is inspired to achieve their greatest potential."', ar: '"مهمتنا إنشاء مدارس عالمية المستوى يُلهَم فيها كل طفل لتحقيق أعلى إمكاناته."' },
    'leader.ceo.link':      { en: 'About Our Group',         ar: 'عن مجموعتنا' },
    'leader.ed.tag':        { en: 'Chairman / Owner',        ar: 'رئيسة مجلس الإدارة / المالكة' },
    'leader.ed.title':      { en: 'Chairman / Owner, NAIS Dubai', ar: 'رئيسة مجلس الإدارة / المالكة، NAIS دبي' },
    'leader.ed.quote':      { en: '"At NAIS, we nurture every child\'s unique potential within a safe, inclusive, and values-driven environment."', ar: '"في NAIS، نُنمّي الإمكانات الفريدة لكل طفل في بيئة آمنة وشاملة وقائمة على القيم."' },
    'leader.ed.link':       { en: 'About Leadership',        ar: 'عن القيادة' },
    'leader.prin.tag':      { en: 'Principal',               ar: 'المدير' },
    'leader.prin.title':    { en: 'Principal, NAIS Dubai',   ar: 'مدير المدرسة، NAIS دبي' },
    'leader.prin.quote':    { en: '"Every student at NAIS is known, valued, and challenged to become a leader of character ready for the world."', ar: '"كل طالب في NAIS معروف ومُقدَّر ومُتحدَّى ليكون قائداً بالشخصية مستعداً للعالم."' },
    'leader.principal.tag':    { en: 'Principal',               ar: 'المدير' },
    'leader.principal.title':  { en: 'Principal, NAIS Dubai',   ar: 'مدير المدرسة، NAIS دبي' },

    /* ── Welcome Section Quote ── */
    'welcome.quote':        { en: '"At NAIS, every student is known, valued, and challenged to reach their fullest potential. We build not just academic excellence but leaders of character."', ar: '"في NAIS، كل طالب معروف ومُقدَّر ومُتحدَّى ليبلغ أعلى إمكاناته. نحن لا نبني التميز الأكاديمي فحسب، بل نبني قادة بالشخصية."' },
    'welcome.quote.role':   { en: 'Principal, NAIS Dubai',   ar: 'مدير المدرسة، NAIS دبي' },
    'welcome.btn.film':     { en: 'Watch School Film',       ar: 'شاهد فيلم المدرسة' },

    /* ── Achievement Badges ── */
    'badge.khda':           { en: 'KHDA Rated Good',         ar: 'تقييم KHDA: جيد' },
    'badge.khda.sub':       { en: 'Official Dubai Rating',   ar: 'التقييم الرسمي في دبي' },

    'badge.cb':             { en: 'College Board Member',    ar: 'عضو College Board' },
    'badge.cb.sub':         { en: 'AP Program Provider',     ar: 'مزوّد برنامج AP' },
    'badge.moe':            { en: 'MoE UAE Licensed',        ar: 'مرخص من وزارة التربية' },
    'badge.moe.sub':        { en: 'Ministry Approved',       ar: 'موافقة الوزارة' },

    /* ── University Destinations ── */
    'uni.label':            { en: 'Graduate Destinations',   ar: 'وجهات الخريجين' },
    'uni.sub':              { en: 'Our Class of 2024 graduates are studying at leading universities worldwide', ar: 'خريجو دفعة 2024 يدرسون في أبرز الجامعات حول العالم' },

    /* ── Calendar Events ── */
    'cal.full':             { en: 'Full Calendar',           ar: 'التقويم الكامل' },
    'cal.tag1':             { en: 'Start of Year',           ar: 'بداية العام' },
    'cal.e1.h4':            { en: 'First Day of School – AY 2026–2027', ar: 'أول يوم دراسي – العام 2026–2027' },
    'cal.e1.p':             { en: 'Welcome back! All students report to school', ar: 'أهلاً بكم! جميع الطلاب يعودون للمدرسة' },
    'cal.tag2':             { en: 'Event',                   ar: 'فعالية' },
    'cal.e2.h4':            { en: 'Open House Day 2025',     ar: 'يوم الأبواب المفتوحة 2025' },
    'cal.e2.p':             { en: 'Prospective families welcome – campus tours available', ar: 'ترحيب بالأسر المحتملة – جولات في الحرم متاحة' },
    'cal.tag3':             { en: 'Holiday',                 ar: 'إجازة' },
    'cal.e3.h4':            { en: 'UAE National Day Break',  ar: 'إجازة اليوم الوطني الإماراتي' },
    'cal.e3.p':             { en: 'School closed – National Day celebrations', ar: 'المدرسة مغلقة – احتفالات اليوم الوطني' },
    'cal.tag4':             { en: 'Break',                   ar: 'إجازة' },
    'cal.e4.h4':            { en: 'Winter Break Begins',     ar: 'بداية الإجازة الشتوية' },
    'cal.e4.p':             { en: 'Students return January 5, 2026', ar: 'يعود الطلاب في 5 يناير 2026' },
    'cal.tag5':             { en: 'Exams',                   ar: 'امتحانات' },
    'cal.e5.h4':            { en: 'AP Exam Preparation Week', ar: 'أسبوع التحضير لامتحانات AP' },
    'cal.e5.p':             { en: 'College Board AP exam prep for Grades 11–12', ar: 'تحضير امتحانات AP للصفين 11–12' },
    'cal.tag6':             { en: 'Graduation',              ar: 'تخرّج' },
    'cal.e6.h4':            { en: 'Class of 2026 Graduation Ceremony', ar: 'حفل تخرّج دفعة 2026' },
    'cal.e6.p':             { en: 'Celebrating our graduating seniors', ar: 'احتفاء بطلابنا الخريجين' },

    /* ── News Cards ── */
    'news.tag.event':       { en: 'Event',                   ar: 'فعالية' },
    'news.tag.achievement': { en: 'Achievement',             ar: 'إنجاز' },
    'news.tag.academics':   { en: 'Academics',               ar: 'أكاديميات' },
    'news.1.h3':            { en: 'Open House 2026 – Experience NAIS First-Hand', ar: 'يوم مفتوح 2026 – اختبر NAIS بنفسك' },
    'news.1.p':             { en: 'Join us for our Spring Open House and tour our campus. Meet our faculty, explore our programs, and discover what makes NAIS Dubai\'s premier American school.', ar: 'انضم إلينا في يوم الأبواب المفتوحة الربيعي وجُل في حرمنا. قابل كادرنا واستكشف برامجنا واكتشف ما يجعل NAIS المدرسة الأمريكية الرائدة في دبي.' },
    'news.2.h3':            { en: 'NAIS Students Triumph at Regional Science Fair', ar: 'طلاب NAIS يتألقون في معرض العلوم الإقليمي' },
    'news.2.p':             { en: 'Our talented students brought home first and second place honors at the Dubai Regional Science Fair, showcasing innovation in sustainability.', ar: 'أحضر طلابنا الموهوبون المراكز الأولى والثانية من معرض دبي الإقليمي للعلوم، مُظهرين الابتكار في مجال الاستدامة.' },
    'news.3.h3':            { en: 'Class of 2025 – Record University Acceptances', ar: 'دفعة 2025 – أرقام قياسية في القبول الجامعي' },
    'news.3.p':             { en: 'We are proud to celebrate our graduating class as they receive offers from top universities across North America, the UK, and Australia.', ar: 'نفخر بالاحتفاء بدفعتنا الخريجة وهي تتلقى عروضاً من أفضل الجامعات في أمريكا الشمالية والمملكة المتحدة وأستراليا.' },
    'news.readmore':        { en: 'Read More',               ar: 'اقرأ المزيد' },

    /* ── Hero extra ── */
    'hero.scroll':          { en: 'Scroll',                  ar: 'مرّر للأسفل' },

    /* ── Gallery Badges & Accent Labels ── */
    'gal.badge.sports':     { en: 'Sports & Athletics',      ar: 'الرياضة والألعاب' },
    'gal.badge.stem':       { en: 'STEM Labs',               ar: 'مختبرات STEM' },
    'gal.badge.culture':    { en: 'Cultural Events',         ar: 'الفعاليات الثقافية' },
    'gal.badge.class':      { en: 'Classroom Life',          ar: 'الحياة الدراسية' },
    'gal.badge.science':    { en: 'Early Years Science',     ar: 'علوم مرحلة الروضة' },
    'gal.accent.sports':    { en: 'Sports',                  ar: 'رياضة' },
    'gal.accent.events':    { en: 'Events',                  ar: 'فعاليات' },
    'gal.accent.community': { en: 'Community',               ar: 'مجتمع' },
    'gal.accent.uae':       { en: 'UAE Spirit',              ar: 'روح الإمارات' },
    'gal.accent.learning':  { en: 'Learning',                ar: 'تعلّم' },
    'gal.accent.classrooms':{ en: 'Classrooms',              ar: 'الفصول' },

    /* ── Photo Parallax Panels ── */
    'ppx.tag1':             { en: 'Campus Life',             ar: 'الحياة في الحرم' },
    'ppx.title1':           { en: 'Our World-Class<br/>Al Mizhar Campus', ar: 'حرمنا العالمي المستوى<br/>في المزهر' },
    'ppx.desc1':            { en: 'Modern facilities, green spaces, and state-of-the-art classrooms designed to inspire every learner.', ar: 'مرافق حديثة ومساحات خضراء وفصول دراسية متطورة مصممة لإلهام كل متعلم.' },
    'ppx.tag2':             { en: 'Academics',               ar: 'الأكاديميات' },
    'ppx.title2':           { en: 'STEM, Arts &amp;<br/>Beyond the Classroom', ar: 'STEM والفنون<br/>وما وراء الفصل' },
    'ppx.desc2':            { en: 'Hands-on labs, project-based learning, and AP courses preparing students for top universities worldwide.', ar: 'مختبرات تطبيقية وتعلم قائم على المشاريع ومقررات AP تُعدّ الطلاب لأفضل الجامعات عالمياً.' },
    'ppx.tag3':             { en: 'Community',               ar: 'المجتمع' },
    'ppx.title3':           { en: '45+ Nationalities,<br/>One NAIS Family', ar: 'أكثر من 45 جنسية،<br/>عائلة NAIS الواحدة' },
    'ppx.desc3':            { en: 'A vibrant, diverse community united by shared values of respect, ambition, and global citizenship.', ar: 'مجتمع نابض متنوع تجمعه قيم مشتركة من الاحترام والطموح والمواطنة العالمية.' },

    /* ── Virtual Tour Extra ── */
    'tour360.kg.h3':        { en: 'KG Playground',           ar: 'ملعب الروضة' },
    'tour360.kg.p':         { en: 'Our vibrant, fully shaded Kindergarten play area is a safe haven of joy and discovery — colourful play equipment, soft rubberised flooring, and age-appropriate activities designed for our youngest learners.', ar: 'منطقة لعب الروضة النابضة بالحياة والمظللة بالكامل هي ملاذ آمن للبهجة والاكتشاف — معدات ملونة وأرضية مطاطية ناعمة وأنشطة مناسبة للأعمار لأصغر متعلمينا.' },
    'tour.campus.f1':       { en: 'Purpose-Built School Campus', ar: 'حرم مدرسي مُصمَّم خصيصاً' },
    'tour.campus.f2':       { en: 'Al Mizhar 1, Mirdif, Dubai', ar: 'المزهر 1، مردف، دبي' },
    'tour.campus.f3':       { en: 'Secure, Gated Entrance',  ar: 'مدخل آمن مُحاط بأبواب' },
    'tour.campus.f4':       { en: 'Ample Parking & Drop-Off', ar: 'مواقف سيارات ومنطقة إيصال واسعة' },
    'tour.kg.f1':           { en: 'Fully Shaded Canopy',     ar: 'مظلة كاملة' },
    'tour.kg.f2':           { en: 'Safety-Certified Rubber Flooring', ar: 'أرضية مطاطية معتمدة للسلامة' },
    'tour.kg.f3':           { en: 'Age-Appropriate Play Equipment', ar: 'معدات لعب مناسبة للعمر' },
    'tour.kg.f4':           { en: 'Supervised at All Times', ar: 'إشراف على مدار اليوم' },
    'tour.kg.btn':          { en: 'KG Programme',            ar: 'برنامج الروضة' },
    'tour.sports.f1':       { en: 'Full-Size Artificial Turf Pitch', ar: 'ملعب عشب اصطناعي كامل الحجم' },
    'tour.sports.f2':       { en: 'Large Shaded Canopy',     ar: 'مظلة كبيرة للتظليل' },
    'tour.sports.f3':       { en: 'Football, Basketball & Athletics', ar: 'كرة قدم وسلة وألعاب قوى' },
    'tour.sports.f4':       { en: 'Fenced & Fully Enclosed', ar: 'مسوّر ومغلق بالكامل' },
    'tour.sports.btn':      { en: 'Student Life',            ar: 'حياة الطالب' },

    /* ── Enrollment Notice ── */
    'enroll.strong':        { en: '📅 Enrollment Now Open for 2026–2027!', ar: '📅 التسجيل مفتوح الآن لعام 2026–2027!' },
    'enroll.p':             { en: 'Limited seats available — don\'t miss the opportunity to join NAIS Dubai.', ar: 'مقاعد محدودة — لا تفوّت فرصة الانضمام إلى NAIS دبي.' },
    'enroll.link':          { en: 'Apply Today →',           ar: 'سجّل اليوم ←' },

    /* ── Video Lightbox ── */
    'video.film.h3':        { en: 'School Film Coming Soon',  ar: 'فيلم المدرسة قريباً' },
    'video.film.p':         { en: 'Experience NAIS first-hand — book a personal campus tour and meet our team.', ar: 'اختبر NAIS بنفسك — احجز جولة شخصية في الحرم وقابل فريقنا.' },

    /* ── Contact Form Grade Options ── */
    'contact.form.grade':    { en: 'Grade Applying For *',   ar: 'المرحلة المتقدَّم لها *' },
    'contact.form.grade.sel':{ en: 'Select Grade Level',     ar: 'اختر المرحلة الدراسية' },
    'contact.form.grade.kg1':{ en: 'Kindergarten 1',         ar: 'الروضة 1' },
    'contact.form.grade.kg2':{ en: 'Kindergarten 2',         ar: 'الروضة 2' },
    'contact.form.grade.elem':{ en: 'Grade 1 – Grade 5 (Elementary)', ar: 'الصف 1 – الصف 5 (الابتدائي)' },
    'contact.form.grade.mid':{ en: 'Grade 6 – Grade 8 (Middle School)', ar: 'الصف 6 – الصف 8 (المتوسط)' },
    'contact.form.grade.high':{ en: 'Grade 9 – Grade 12 (High School)', ar: 'الصف 9 – الصف 12 (الثانوي)' },

    /* ── Footer Quick Links (translatable text) ── */
    'footer.ql.about':      { en: 'About NAIS',              ar: 'عن NAIS' },
    'footer.ql.academics':  { en: 'Academic Programs',       ar: 'البرامج الأكاديمية' },
    'footer.ql.admissions': { en: 'Admissions',              ar: 'القبول والتسجيل' },
    'footer.ql.life':       { en: 'Student Life',            ar: 'حياة الطالب' },
    'footer.ql.news':       { en: 'News & Events',           ar: 'الأخبار والفعاليات' },
    'footer.ql.contact':    { en: 'Contact Us',              ar: 'اتصل بنا' },
    'footer.ql.gallery':    { en: 'Photo Gallery',           ar: 'معرض الصور' },
    'footer.al.kg':         { en: 'Kindergarten (KG1–KG2)',  ar: 'الروضة (KG1–KG2)' },
    'footer.al.elem':       { en: 'Elementary (Grades 1–5)', ar: 'الابتدائي (الصفوف 1–5)' },
    'footer.al.mid':        { en: 'Middle School (Grades 6–8)', ar: 'المتوسط (الصفوف 6–8)' },
    'footer.al.high':       { en: 'High School (Grades 9–12)', ar: 'الثانوي (الصفوف 9–12)' },
    'footer.al.incl':       { en: 'Inclusion Program',       ar: 'برنامج الدمج' },
    'footer.al.ap':         { en: 'AP Courses',              ar: 'مقررات AP' },
    'footer.contact.head':  { en: 'Contact & Location',      ar: 'التواصل والموقع' },
    'footer.addr':          { en: 'Al Mizhar 1, Mirdif, Dubai, UAE', ar: 'المزهر 1، مردف، دبي، الإمارات' },
    'footer.hours':         { en: 'Sun–Thu: 8:00 AM – 3:30 PM', ar: 'الأحد–الخميس: 8:00 ص – 3:30 م' },
    'footer.apply.btn':     { en: 'Apply Now',               ar: 'سجّل الآن' },
    'footer.whatsapp.btn':  { en: 'WhatsApp',                ar: 'واتساب' },
    'footer.privacy':       { en: 'Privacy Policy',          ar: 'سياسة الخصوصية' },
    'footer.terms':         { en: 'Terms of Use',            ar: 'شروط الاستخدام' },
    'footer.safeguarding':  { en: 'Safeguarding Policy',     ar: 'سياسة حماية الطلاب' },
    'footer.sitemap':       { en: 'Sitemap',                 ar: 'خريطة الموقع' },

    /* ── Stats — Graduates ── */
    'stats.graduates':      { en: 'Students per Class',      ar: 'طالب في الفصل' },

    /* ── Tour Source Badges ── */
    'tour.src.entrance':    { en: 'NAIS Dubai · Main Entrance – Al Mizhar 1', ar: 'NAIS دبي · المدخل الرئيسي – المزهر 1' },
    'tour.src.kg':          { en: 'NAIS Dubai · KG Playground – Shaded & Safe', ar: 'NAIS دبي · ملعب الروضة – مظلل وآمن' },
    'tour.src.sports':      { en: 'NAIS Dubai · Football Field – Shaded Artificial Turf', ar: 'NAIS دبي · الملعب – عشب اصطناعي مظلل' },
    'tour.cap.entrance':    { en: 'North American International School · Al Mizhar 1, Dubai', ar: 'المدرسة الأمريكية الدولية الشمالية · المزهر 1، دبي' },
    'tour.cap.kg':          { en: 'Fully Shaded · Safety-Certified · Dedicated KG Play Zone', ar: 'مظلل بالكامل · معتمد للسلامة · منطقة لعب مخصصة للروضة' },
    'tour.cap.sports':      { en: 'Full-Size Pitch · Premium Artificial Turf · Shaded Canopy', ar: 'ملعب كامل الحجم · عشب اصطناعي فاخر · مظلة ظل' },

    /* ── Gallery Filmstrip accent labels ── */
    'gal.film.label':       { en: 'Life at NAIS Dubai',      ar: 'الحياة في NAIS دبي' },

    /* ── Contact form phone placeholder ── */
    'contact.form.phone.ph':{ en: '+971 XX XXX XXXX',        ar: '+971 XX XXX XXXX' },

    /* ── Back to top button ── */
    'btn.back-top':         { en: 'Back to top',             ar: 'العودة للأعلى' },

    /* ── Apply floating button label ── */
    'float.apply':          { en: 'Apply Now',               ar: 'سجّل الآن' },

    /* ── Nav lang switcher labels ── */
    'lang.en':              { en: 'English',                 ar: 'الإنجليزية' },
    'lang.ar':              { en: 'Arabic',                  ar: 'العربية' },

    /* ── Scroll / Hero dots aria ── */
    'hero.dot1':            { en: 'Slide 1',                 ar: 'الشريحة 1' },
    'hero.dot2':            { en: 'Slide 2',                 ar: 'الشريحة 2' },
    'hero.dot3':            { en: 'Slide 3',                 ar: 'الشريحة 3' },

    /* ── Video lightbox close ── */
    'vl.close':             { en: 'Close video lightbox',    ar: 'إغلاق نافذة الفيديو' },

    /* ── Welcome section KHDA badge ── */
    'welcome.khda.badge':   { en: 'KHDA Rated',              ar: 'تقييم KHDA' },
    'welcome.khda.rating':  { en: 'Good',                    ar: 'جيد' },

    /* ── Academic grade tags (program cards) ── */
    'acad.grade.kg':        { en: 'KG 1 – KG 2',            ar: 'KG 1 – KG 2' },
    'acad.grade.elem':      { en: 'Grades 1 – 5',           ar: 'الصفوف 1 – 5' },
    'acad.grade.mid':       { en: 'Grades 6 – 8',           ar: 'الصفوف 6 – 8' },
    'acad.grade.high':      { en: 'Grades 9 – 12',          ar: 'الصفوف 9 – 12' },

    /* ── Academic highlights banner ── */
    'acad.hl.ap.count':     { en: '15+',                     ar: '+15' },
    'acad.hl.nations.count':{ en: '45+',                     ar: '+45' },
    'acad.hl.uni.pct':      { en: '100%',                    ar: '100%' },

    /* ── CTA strip icon labels ── */
    'cta.apply.full':       { en: 'Apply Now',               ar: 'سجّل الآن' },
    'cta.contact.full':     { en: 'Contact Us',              ar: 'اتصل بنا' },
    'cta.whatsapp.full':    { en: 'WhatsApp',                ar: 'واتساب' },

    /* ── Enrollment notice ── */
    'enroll.notice.icon':   { en: 'Enrollment open',         ar: 'التسجيل مفتوح' },

    /* ── Section CTA buttons ── */
    'btn.apply-now':        { en: 'Apply Now',               ar: 'سجّل الآن' },
    'btn.view-gallery':     { en: 'View Full Gallery',       ar: 'عرض المعرض الكامل' },
    'btn.all-news':         { en: 'All News',                ar: 'كل الأخبار' },
    'btn.full-calendar':    { en: 'Full Calendar',           ar: 'التقويم الكامل' },
    'btn.discover-story':   { en: 'Discover Our Story',      ar: 'اكتشف قصتنا' },
    'btn.watch-film':       { en: 'Watch School Film',       ar: 'شاهد فيلم المدرسة' },
    'btn.explore-all':      { en: 'Explore All Programs',    ar: 'استكشف جميع البرامج' },

    /* ── Page Titles (extra pages) ── */
    'page.title.gallery':   { en: 'Photo Gallery | NAIS Dubai – Life at Our School', ar: 'معرض الصور | NAIS دبي – الحياة في مدرستنا' },
    'page.title.curriculum':{ en: 'American Curriculum | North American International School Dubai', ar: 'المنهج الأمريكي | المدرسة الأمريكية الدولية الشمالية دبي' },
    'page.title.pbl':       { en: 'Project-Based Learning | NAIS Dubai', ar: 'التعلم القائم على المشاريع | NAIS دبي' },
    'page.title.results':   { en: 'Academic Results | NAIS Dubai', ar: 'النتائج الأكاديمية | NAIS دبي' },
    'page.title.faq':       { en: 'Parent FAQ | NAIS Dubai', ar: 'أسئلة الأهل | NAIS دبي' },
    'page.title.privacy':   { en: 'Privacy Policy | NAIS Dubai', ar: 'سياسة الخصوصية | NAIS دبي' },
    'page.title.terms':     { en: 'Terms of Use | NAIS Dubai', ar: 'شروط الاستخدام | NAIS دبي' },
    'page.title.safeguarding':{ en: 'Safeguarding Policy | NAIS Dubai', ar: 'سياسة حماية الطلاب | NAIS دبي' },

    /* ── Admissions page specific ── */
    'adm.hero.title':       { en: 'Join the NAIS<br/><em>Family</em>', ar: 'انضم إلى عائلة<br/><em>NAIS</em>' },
    'adm.hero.sub':         { en: 'Enrollment is open for the 2026–2027 academic year. We\'d love to welcome your child into our exceptional learning community.', ar: 'التسجيل مفتوح للعام الدراسي 2026–2027. يسعدنا ترحيب طفلك في مجتمعنا التعليمي الاستثنائي.' },
    'adm.intro.label':      { en: 'Welcome',                ar: 'أهلاً وسهلاً' },
    'adm.intro.h2':         { en: 'Begin Your Child\'s<br/><em>NAIS Journey</em>', ar: 'ابدأ رحلة<br/><em>طفلك في NAIS</em>' },
    'adm.intro.p1':         { en: 'We believe the admissions process should be as welcoming as our school. Our Admissions team is dedicated to guiding families through every step — from your first inquiry to your child\'s first day at NAIS.', ar: 'نؤمن بأن عملية القبول يجب أن تكون بنفس دفء مدرستنا. فريق القبول لدينا مكرّس لإرشاد الأسر في كل خطوة — من أول استفسار حتى اليوم الأول لطفلك في NAIS.' },
    'adm.intro.p2':         { en: 'Whether you are relocating to Dubai, looking for a school change, or starting your educational search in the UAE, NAIS offers a smooth, transparent admissions experience and a warm welcome to every prospective family.', ar: 'سواء كنت تنتقل إلى دبي أو تبحث عن تغيير مدرسة أو تبدأ بحثك التعليمي في الإمارات، تقدم NAIS تجربة قبول سلسة وشفافة وترحيبًا حارًا لكل أسرة.' },
    'adm.contact.call':     { en: 'Call Admissions',        ar: 'اتصل بفريق القبول' },
    'adm.contact.email':    { en: 'Email Us',               ar: 'راسلنا' },
    'adm.avg.class':        { en: 'Avg Class Size',         ar: 'متوسط حجم الفصل' },
    'adm.process.label':    { en: 'Simple & Transparent',   ar: 'بسيطة وشفافة' },
    'adm.process.h2':       { en: 'The Admissions<br/><em>Process</em>', ar: 'عملية<br/><em>القبول</em>' },
    'adm.process.intro':    { en: 'We\'ve made the admissions process simple and straightforward. Here\'s what to expect when you apply to NAIS Dubai.', ar: 'جعلنا عملية القبول بسيطة ومباشرة. إليك ما يمكن توقعه عند التقديم في NAIS دبي.' },
    'adm.step.01.title':    { en: 'Inquire & Explore',      ar: 'الاستفسار والاستكشاف' },
    'adm.step.01.p':        { en: 'Submit an inquiry form or call our Admissions team. We\'ll answer your questions and send our prospectus and fee schedule.', ar: 'أرسل نموذج استفسار أو اتصل بفريق القبول. سنجيب على أسئلتك ونرسل كتيبنا وجدول الرسوم.' },
    'adm.step.02.title':    { en: 'Campus Tour',            ar: 'جولة في الحرم' },
    'adm.step.02.p':        { en: 'Visit our beautiful Al Mizhar campus. Meet our team, see our facilities, and experience the NAIS community firsthand.', ar: 'زُر حرمنا الجميل في المزهر. قابل فريقنا وشاهد مرافقنا واختبر مجتمع NAIS مباشرة.' },
    'adm.step.03.title':    { en: 'Submit Application',     ar: 'تقديم الطلب' },
    'adm.step.03.p':        { en: 'Complete our online application form and submit required documents — school reports, passport copies, and more.', ar: 'أكمل نموذج الطلب الإلكتروني وأرسل المستندات المطلوبة — تقارير المدرسة ونسخ جوازات السفر والمزيد.' },
    'adm.step.04.title':    { en: 'Assessment Day',         ar: 'يوم التقييم' },
    'adm.step.04.p':        { en: 'Students joining Grade 2 and above attend a friendly assessment to ensure the best academic placement for your child.', ar: 'يحضر الطلاب الملتحقون بالصف الثاني فما فوق تقييمًا وديًا لضمان أفضل توزيع أكاديمي لطفلك.' },
    'adm.step.05.title':    { en: 'Receive Offer',          ar: 'استلام العرض' },
    'adm.step.05.p':        { en: 'We\'ll review and send an official admission offer, typically within 3–5 working days of the assessment.', ar: 'سنراجع ونرسل عرض قبول رسمي، عادةً في غضون 3–5 أيام عمل من التقييم.' },
    'adm.step.06.title':    { en: 'Welcome to NAIS!',       ar: 'مرحباً بك في NAIS!' },
    'adm.step.06.p':        { en: 'Accept your offer, complete enrollment formalities, and prepare for your child\'s exciting first day at NAIS!', ar: 'اقبل عرضك وأكمل إجراءات التسجيل واستعد ليوم طفلك الأول المثير في NAIS!' },
    'adm.why.h2':           { en: 'A School That <em>Truly Cares</em>', ar: 'مدرسة <em>تهتم حقًا</em>' },
    'adm.why.p':            { en: 'At NAIS, every child is known by name. Our small class sizes, dedicated faculty, and vibrant multicultural community create an environment where students thrive academically and personally.', ar: 'في NAIS، كل طفل معروف بالاسم. فصولنا الصغيرة وكادرنا المتفاني ومجتمعنا متعدد الثقافات يخلقون بيئة يزدهر فيها الطلاب أكاديميًا وشخصيًا.' },
    'adm.why.pt1':          { en: 'American curriculum — globally recognized', ar: 'منهج أمريكي — معترف به عالميًا' },
    'adm.why.pt2':          { en: 'KHDA-licensed & fully accredited', ar: 'مرخصة من KHDA ومعتمدة بالكامل' },
    'adm.why.pt3':          { en: '15+ Advanced Placement (AP) subjects', ar: 'أكثر من 15 مادة AP متقدمة' },
    'adm.why.pt4':          { en: 'State-of-the-art facilities & STEM labs', ar: 'مرافق متطورة ومختبرات STEM' },
    'adm.why.pt5':          { en: 'Dedicated Inclusion & IEP support', ar: 'دعم الدمج والخطط التعليمية الفردية' },
    'adm.why.pt6':          { en: 'Rich sports, arts & extracurricular life', ar: 'حياة رياضية وفنية وأنشطة غنية' },

    /* ── Fees section ── */
    'fees.label':           { en: 'Transparent Pricing',    ar: 'أسعار شفافة' },
    'fees.h2':              { en: 'Tuition & <em>Fees</em>', ar: 'الرسوم <em>الدراسية</em>' },
    'fees.intro':           { en: 'NAIS offers exceptional value for a premium American education. All fees are KHDA-regulated and published transparently below in UAE Dirhams (AED).', ar: 'تقدم NAIS قيمة استثنائية لتعليم أمريكي متميز. جميع الرسوم منظمة من KHDA ومنشورة بشفافية أدناه بالدرهم الإماراتي (درهم).' },
    'fees.th.grade':        { en: 'Grade Level',            ar: 'المرحلة الدراسية' },
    'fees.th.program':      { en: 'Program',                ar: 'البرنامج' },
    'fees.th.annual':       { en: 'Annual Tuition (AED)',   ar: 'الرسوم السنوية (درهم)' },
    'fees.th.term':         { en: 'Per Term (AED)',         ar: 'لكل فصل (درهم)' },
    'fees.sibling.title':   { en: 'Sibling Discount',       ar: 'خصم الأخوة' },
    'fees.sibling.p':       { en: '10% discount on tuition fees for each additional sibling enrolled at NAIS.', ar: 'خصم 10% على الرسوم الدراسية لكل شقيق/شقيقة إضافي/ة مسجل/ة في NAIS.' },
    'fees.payment.title':   { en: 'Payment Plans',          ar: 'خطط الدفع' },
    'fees.payment.p':       { en: 'Flexible payment options — annual, semester, or term-by-term installments available.', ar: 'خيارات دفع مرنة — متاحة سنويًا أو فصليًا أو بالتقسيط الفصلي.' },
    'fees.khda.title':      { en: 'KHDA Regulated',         ar: 'منظمة من KHDA' },
    'fees.khda.p':          { en: 'All fees are fully regulated and approved by the Knowledge & Human Development Authority.', ar: 'جميع الرسوم منظمة ومعتمدة بالكامل من هيئة المعرفة والتنمية البشرية.' },

    /* ── Documents section ── */
    'docs.label':           { en: 'Application Requirements', ar: 'متطلبات التقديم' },
    'docs.h2':              { en: 'Required<br/><em>Documents</em>', ar: 'المستندات<br/><em>المطلوبة</em>' },
    'docs.intro':           { en: 'Please prepare the following documents before submitting your application to ensure a smooth enrollment process.', ar: 'يرجى تجهيز المستندات التالية قبل تقديم طلبك لضمان سلاسة عملية التسجيل.' },
    'docs.student.title':   { en: 'Student Documents',      ar: 'وثائق الطالب' },
    'docs.student.1':       { en: 'Passport copy (student)', ar: 'نسخة جواز سفر (الطالب)' },
    'docs.student.2':       { en: 'UAE Residence Visa (if applicable)', ar: 'تأشيرة الإقامة الإماراتية (إن وجدت)' },
    'docs.student.3':       { en: 'Original birth certificate', ar: 'شهادة الميلاد الأصلية' },
    'docs.student.4':       { en: 'Emirates ID (if available)', ar: 'الهوية الإماراتية (إن توفرت)' },
    'docs.student.5':       { en: 'Updated immunization records', ar: 'سجلات التطعيم المحدّثة' },
    'docs.academic.title':  { en: 'Academic Records',       ar: 'السجلات الأكاديمية' },
    'docs.academic.1':      { en: 'Last 2 years\' school reports', ar: 'تقارير المدرسة لآخر سنتين' },
    'docs.academic.2':      { en: 'Current school transcripts', ar: 'كشوف درجات المدرسة الحالية' },
    'docs.academic.3':      { en: 'Teacher recommendation letter', ar: 'خطاب توصية من المعلم' },
    'docs.academic.4':      { en: 'Standardized test results (if any)', ar: 'نتائج الاختبارات المعيارية (إن وجدت)' },
    'docs.academic.5':      { en: 'Transfer certificate (if applicable)', ar: 'شهادة نقل (إن انطبق)' },
    'docs.parent.title':    { en: 'Parent Documents',       ar: 'وثائق ولي الأمر' },
    'docs.parent.1':        { en: 'Parent passport copies', ar: 'نسخ جوازات سفر ولي الأمر' },
    'docs.parent.2':        { en: 'UAE Residence Visa (parent)', ar: 'تأشيرة إقامة إماراتية (ولي الأمر)' },
    'docs.parent.3':        { en: 'Emirates ID copies',     ar: 'نسخ الهوية الإماراتية' },
    'docs.parent.4':        { en: 'Completed application form', ar: 'نموذج الطلب مكتملًا' },
    'docs.parent.5':        { en: 'Registration fee payment (AED 1,500)', ar: 'سداد رسوم التسجيل (1,500 درهم)' },
    'docs.note':            { en: 'All documents should be clear, legible scans or photos. Original documents will be verified on Assessment Day. For students transferring mid-year, please contact Admissions for expedited processing.', ar: 'يجب أن تكون جميع المستندات مسحًا ضوئيًا أو صورًا واضحة ومقروءة. ستُتحقق من المستندات الأصلية يوم التقييم. للطلاب المنتقلين في منتصف العام، يرجى التواصل مع فريق القبول للمعالجة المستعجلة.' },

    /* ── Admissions testimonials ── */
    'adm.test.h2':          { en: 'What Our Families<br/><em>Say About NAIS</em>', ar: 'ما تقوله<br/><em>أسرنا عن NAIS</em>' },

    /* ── Admissions form ── */
    'adm.form.sidebar.label':{ en: 'Ready to Join?',        ar: 'مستعد للانضمام؟' },
    'adm.form.sidebar.h2':  { en: 'Start Your<br/><em>Application</em>', ar: 'ابدأ<br/><em>طلبك</em>' },
    'adm.form.sidebar.p':   { en: 'Complete the enquiry form and our Admissions team will contact you within one working day to guide you through next steps.', ar: 'أكمل نموذج الاستفسار وسيتواصل معك فريق القبول في غضون يوم عمل واحد لإرشادك خلال الخطوات التالية.' },
    'adm.form.step1':       { en: 'Fill in the form',       ar: 'أكمل النموذج' },
    'adm.form.step2':       { en: 'We call you within 24 hrs', ar: 'نتصل بك خلال 24 ساعة' },
    'adm.form.step3':       { en: 'Book your campus tour',  ar: 'احجز جولتك في الحرم' },
    'adm.form.step4':       { en: 'Submit & get your offer', ar: 'قدّم واحصل على عرضك' },
    'adm.form.title':       { en: 'Online Admissions Enquiry', ar: 'استفسار القبول الإلكتروني' },
    'adm.form.intro':       { en: 'Fields marked with * are required. We\'ll respond within one working day.', ar: 'الحقول المميزة بـ * إلزامية. سنرد في غضون يوم عمل واحد.' },
    'adm.form.parent.section':{ en: 'Parent / Guardian Information', ar: 'معلومات ولي الأمر' },
    'adm.form.fname':       { en: 'First Name *',           ar: 'الاسم الأول *' },
    'adm.form.fname.ph':    { en: 'First name',             ar: 'الاسم الأول' },
    'adm.form.lname':       { en: 'Last Name *',            ar: 'الاسم الأخير *' },
    'adm.form.lname.ph':    { en: 'Last name',              ar: 'الاسم الأخير' },
    'adm.form.nationality': { en: 'Nationality',            ar: 'الجنسية' },
    'adm.form.nationality.ph':{ en: 'e.g. American, British, Emirati...', ar: 'مثال: أمريكي، بريطاني، إماراتي...' },
    'adm.form.student.section':{ en: 'Student Information', ar: 'معلومات الطالب' },
    'adm.form.sfname':      { en: 'Student First Name *',   ar: 'اسم الطالب الأول *' },
    'adm.form.sfname.ph':   { en: 'Student\'s first name',  ar: 'الاسم الأول للطالب' },
    'adm.form.slname':      { en: 'Student Last Name *',    ar: 'اسم الطالب الأخير *' },
    'adm.form.slname.ph':   { en: 'Student\'s last name',   ar: 'الاسم الأخير للطالب' },
    'adm.form.dob':         { en: 'Date of Birth *',        ar: 'تاريخ الميلاد *' },
    'adm.form.curgrade':    { en: 'Current Grade Level *',  ar: 'المستوى الدراسي الحالي *' },
    'adm.form.applygrade':  { en: 'Applying for Grade *',   ar: 'يتقدم للصف *' },
    'adm.form.startdate':   { en: 'Preferred Start Date',   ar: 'تاريخ البدء المفضل' },
    'adm.form.additional.section':{ en: 'Additional Information', ar: 'معلومات إضافية' },
    'adm.form.school':      { en: 'Current School Name',    ar: 'اسم المدرسة الحالية' },
    'adm.form.school.ph':   { en: 'Name of current / previous school', ar: 'اسم المدرسة الحالية / السابقة' },
    'adm.form.msg.ph':      { en: 'Any questions, special circumstances, or additional information...', ar: 'أي أسئلة أو ظروف خاصة أو معلومات إضافية...' },
    'adm.form.terms':       { en: 'I agree to the <a href="privacy-policy.html">Privacy Policy</a> and consent to NAIS contacting me regarding my enquiry. *', ar: 'أوافق على <a href="privacy-policy.html">سياسة الخصوصية</a> وأمنح NAIS موافقتي للتواصل معي بشأن استفساري. *' },
    'adm.form.submit':      { en: 'Submit Enquiry',         ar: 'إرسال الاستفسار' },

    /* ── FAQ page ── */
    'faq.label':            { en: 'Common Questions',       ar: 'الأسئلة الشائعة' },
    'faq.h2':               { en: 'Frequently Asked<br/><em>Questions</em>', ar: 'الأسئلة<br/><em>المتكررة</em>' },

    /* ── Academics page – tabs (used on multiple pages) ── */
    'acad.tab.programs':    { en: 'Academic Programs',      ar: 'البرامج الأكاديمية' },
    'acad.tab.curriculum':  { en: 'American Curriculum',   ar: 'المنهج الأمريكي' },
    'acad.tab.results':     { en: 'Academic Results',       ar: 'النتائج الأكاديمية' },

    /* ── Gallery page ── */
    'gal.hero.label':       { en: 'Photo Gallery · NAIS Dubai 2024–2025', ar: 'معرض الصور · NAIS دبي 2024–2025' },
    'gal.hero.title':       { en: 'Life Through<br/><em>Our Lens</em>', ar: 'الحياة من خلال<br/><em>عدستنا</em>' },
    'gal.hero.sub':         { en: 'Explore the vibrant moments, achievements, and community that make NAIS Dubai unique — captured throughout the 2024–25 academic year.', ar: 'استكشف اللحظات النابضة والإنجازات والمجتمع الذي يجعل NAIS دبي فريدة — موثّقة طوال العام الدراسي 2024–25.' },
    'gal.filter.all':       { en: 'All',                    ar: 'الكل' },
    'gal.filter.campus':    { en: 'Campus',                 ar: 'الحرم' },
    'gal.filter.learning':  { en: 'Learning',               ar: 'التعلم' },
    'gal.filter.sports':    { en: 'Sports',                 ar: 'الرياضة' },
    'gal.filter.arts':      { en: 'Arts & Culture',         ar: 'الفنون والثقافة' },
    'gal.filter.events':    { en: 'Events',                 ar: 'الفعاليات' },
    'gal.filter.community': { en: 'Community',              ar: 'المجتمع' },
    'gal.sh.featured':      { en: 'Featured Moments',       ar: 'لحظات مميزة' },
    'gal.sh.year':          { en: '2024–2025 Academic Year', ar: 'العام الدراسي 2024–2025' },
    'gal.info.title':       { en: 'Explore Life at NAIS — Through Our Lens', ar: 'استكشف الحياة في NAIS — من خلال عدستنا' },
    'gal.info.caption':     { en: '14 photos · 6 categories · Academic Year 2024–2025', ar: '14 صورة · 6 فئات · العام الدراسي 2024–2025' },

    /* ── Curriculum page ── */
    'cur.hero.badge':       { en: 'American Curriculum Overview', ar: 'نظرة عامة على المنهج الأمريكي' },
    'cur.hero.h1':          { en: 'The American<br/><em>Curriculum at NAIS</em>', ar: 'المنهج الأمريكي<br/><em>في NAIS</em>' },
    'cur.hero.sub':         { en: 'A world-class, rigorous academic framework preparing students from KG through Grade 12 for success at the world\'s leading universities.', ar: 'إطار أكاديمي صارم عالمي المستوى يُعدّ الطلاب من الروضة حتى الصف الثاني عشر للنجاح في أفضل جامعات العالم.' },

    /* ── PBL page ── */
    'pbl.hero.badge':       { en: 'Innovative Teaching Approach', ar: 'نهج تدريسي مبتكر' },
    'pbl.hero.h1':          { en: 'Project-Based<br/><em>Learning at NAIS</em>', ar: 'التعلم القائم<br/><em>على المشاريع في NAIS</em>' },
    'pbl.hero.sub':         { en: 'Developing critical thinkers, creative problem-solvers, and collaborative leaders through hands-on, real-world learning experiences.', ar: 'تطوير مفكرين ناقدين وحالّين إبداعيين للمشكلات وقادة تعاونيين من خلال تجارب تعلم عملية وواقعية.' },

    /* ── Results page ── */
    'res.hero.badge':       { en: 'Proven Track Record', ar: 'سجل حافل بالنتائج' },
    'res.hero.h1':          { en: 'Academic<br/><em>Results & Achievements</em>', ar: 'النتائج<br/><em>والإنجازات الأكاديمية</em>' },
    'res.hero.sub':         { en: 'Transparent, independently verified academic performance data demonstrating consistent excellence across all grade levels at NAIS Dubai.', ar: 'بيانات أداء أكاديمي شفافة موثّقة بشكل مستقل تُثبت تميزًا متسقًا في جميع المراحل الدراسية في NAIS دبي.' },

    /* ── Parent FAQ page ── */
    'pfaq.hero.badge':      { en: 'Parent Information Hub', ar: 'مركز معلومات الأهل' },
    'pfaq.hero.h1':         { en: 'Parent<br/><em>FAQ & Guide</em>', ar: 'دليل<br/><em>الأهل والأسئلة الشائعة</em>' },
    'pfaq.hero.sub':        { en: 'Everything parents need to know about life at NAIS Dubai — from admissions and fees to daily routines and school policies.', ar: 'كل ما يحتاج الأهل معرفته عن الحياة في NAIS دبي — من القبول والرسوم إلى الروتين اليومي وسياسات المدرسة.' },

    /* ── Legal pages ── */
    'legal.home':           { en: 'Home',                   ar: 'الرئيسية' },
    'legal.back':           { en: 'Back to Home',           ar: 'العودة للرئيسية' },
    'privacy.title':        { en: 'Privacy Policy',         ar: 'سياسة الخصوصية' },
    'privacy.updated':      { en: 'Last Updated: January 2025', ar: 'آخر تحديث: يناير 2025' },
    'terms.title':          { en: 'Terms of Use',           ar: 'شروط الاستخدام' },
    'safeguarding.title':   { en: 'Safeguarding Policy',    ar: 'سياسة حماية الطلاب' },

    /* ── Admissions form additional labels ── */
    'adm.form.special':     { en: 'Learning Support Needs?', ar: 'احتياجات دعم التعلم؟' },
    'adm.form.howheard':    { en: 'How did you hear about NAIS?', ar: 'كيف علمت عن NAIS؟' },

    /* ── Fees note ── */
    'fees.note.strong':     { en: 'Please Note:',            ar: 'يُرجى الانتباه:' },
    'fees.note.p':          { en: 'Fees listed are annual tuition fees subject to KHDA annual increase approvals. Additional fees may apply for registration (AED 1,500), books, uniforms, and activities. Contact Admissions for a complete fee breakdown.', ar: 'الرسوم المدرجة هي رسوم تعليمية سنوية خاضعة لموافقات KHDA على الزيادات السنوية. قد تنطبق رسوم إضافية على التسجيل (1,500 درهم) والكتب والزي المدرسي والأنشطة. اتصل بفريق القبول للحصول على تفصيل كامل للرسوم.' },

    /* ── Fee table program badges ── */
    'fees.badge.early':     { en: 'Early Years',             ar: 'التعليم المبكر' },
    'fees.badge.elem':      { en: 'Elementary',              ar: 'الابتدائي' },
    'fees.badge.mid':       { en: 'Middle School',           ar: 'المتوسط' },
    'fees.badge.high':      { en: 'High School',             ar: 'الثانوي' },
    'fees.badge.ap':        { en: 'High School (AP)',        ar: 'الثانوي (AP)' },

    /* ── Academics page: misc KPI aliases (kept for backwards compat) ── */
    'acad.kpi.students':    { en: 'Students',               ar: 'طالب' },
    'acad.kpi.nations':     { en: 'Nationalities',          ar: 'جنسية' },

    /* ── Academics page: grade cards ── */
    'acad.card.kg.tag':     { en: 'KG 1 – KG 2',            ar: 'KG 1 – KG 2' },
    'acad.card.kg.title':   { en: 'Kindergarten',           ar: 'رياض الأطفال' },
    'acad.card.kg.desc':    { en: 'Play-based learning in a warm, nurturing environment that builds foundational literacy, numeracy, and social-emotional skills for life.', ar: 'تعلّم قائم على اللعب في بيئة دافئة وراعية تبني مهارات القراءة والكتابة والرياضيات الأساسية والمهارات الاجتماعية العاطفية للحياة.' },
    'acad.card.elem.tag':   { en: 'Grades 1 – 5',           ar: 'الصفوف 1 – 5' },
    'acad.card.elem.title': { en: 'Elementary School',      ar: 'المرحلة الابتدائية' },
    'acad.card.elem.desc':  { en: 'Rigorous core academics with STEM integration, project-based learning, and character development building confident, curious learners.', ar: 'أكاديميات أساسية صارمة مع تكامل STEM والتعلم القائم على المشاريع وتطوير الشخصية لبناء متعلمين واثقين ومتطلعين.' },
    'acad.card.mid.tag':    { en: 'Grades 6 – 8',           ar: 'الصفوف 6 – 8' },
    'acad.card.mid.title':  { en: 'Middle School',          ar: 'المرحلة المتوسطة' },
    'acad.card.mid.desc':   { en: 'Challenging academics, expanded electives, and leadership opportunities that build academic strength, independence, and resilience.', ar: 'أكاديميات تحديّة ومواد اختيارية موسّعة وفرص قيادية تبني القوة الأكاديمية والاستقلالية والمرونة.' },
    'acad.card.high.tag':   { en: 'Grades 9 – 12',          ar: 'الصفوف 9 – 12' },
    'acad.card.high.title': { en: 'High School',            ar: 'المرحلة الثانوية' },
    'acad.card.high.desc':  { en: 'College-preparatory rigor with 15+ AP courses, dedicated university counseling, and a 100% university acceptance record for every graduate.', ar: 'صرامة تحضيرية للجامعة مع أكثر من 15 مقرر AP وإرشاد جامعي مخصص ومعدل قبول جامعي 100% لكل خريج.' },
    'acad.card.explore':    { en: 'Explore Program',        ar: 'استكشف البرنامج' },

    /* ── Academics page: grade-level section headings ── */
    'acad.prog.label':      { en: 'Academic Programs',      ar: 'البرامج الأكاديمية' },
    'acad.prog.h2':         { en: 'Programs for Every<br/><em>Stage of Learning</em>', ar: 'برامج لكل<br/><em>مرحلة تعلّم</em>' },
    'acad.prog.intro':      { en: 'From joyful early childhood education through rigorous AP-level high school courses, NAIS provides a seamless, world-class American curriculum pathway from KG through Grade 12.', ar: 'من التعليم المبكر المبهج إلى مقررات الثانوية AP الصارمة، توفر NAIS مساراً سلساً وعالمي المستوى بالمنهج الأمريكي من رياض الأطفال حتى الصف الثاني عشر.' },

    /* ── Academics page: AP section ── */
    'acad.ap.label':        { en: 'Advanced Placement',     ar: 'الدراسات المتقدمة' },
    'acad.ap.h2':           { en: 'AP Courses — College<br/><em>Credit from Grade 10</em>', ar: 'مقررات AP — رصيد<br/><em>جامعي من الصف 10</em>' },
    'acad.ap.intro':        { en: 'NAIS is a College Board–approved AP school offering 15+ Advanced Placement subjects across five domains. Our AP students consistently outperform global averages.', ar: 'NAIS مدرسة AP معتمدة من College Board تقدم أكثر من 15 مادة AP في خمسة مجالات. يتفوق طلاب AP لدينا باستمرار على المتوسطات العالمية.' },
    'acad.ap.pass':         { en: 'Overall AP Pass Rate (Score 3+)', ar: 'معدل النجاح الإجمالي في AP (درجة 3+)' },
    'acad.ap.psych':        { en: 'AP Psychology Pass Rate', ar: 'معدل نجاح AP علم النفس' },
    'acad.ap.cs':           { en: 'AP Computer Science Pass Rate', ar: 'معدل نجاح AP علوم الحاسوب' },

    /* ── Academics page: inclusion ── */
    'acad.incl.label':      { en: 'Inclusive Education',    ar: 'التعليم الشامل' },
    'acad.incl.h2':         { en: 'Every Learner<br/><em>Belongs at NAIS</em>', ar: 'كل متعلم<br/><em>ينتمي إلى NAIS</em>' },
    'acad.incl.p1':         { en: 'Our dedicated Inclusion Program supports students with diverse learning needs through qualified specialists, individualized plans, and evidence-based interventions.', ar: 'يدعم برنامج الدمج المتخصص لدينا الطلاب ذوي احتياجات التعلم المتنوعة من خلال متخصصين مؤهلين وخطط فردية وتدخلات قائمة على الأدلة.' },
    'acad.incl.f1':         { en: 'Individualized Education Plans (IEPs)', ar: 'خطط التعليم الفردية (IEPs)' },
    'acad.incl.f2':         { en: 'Learning Support Specialists', ar: 'متخصصو دعم التعلم' },
    'acad.incl.f3':         { en: 'Speech & Language Therapy', ar: 'علاج النطق واللغة' },
    'acad.incl.f4':         { en: 'Occupational Therapy Support', ar: 'دعم العلاج المهني' },
    'acad.incl.f5':         { en: 'Co-Teaching Classroom Model', ar: 'نموذج التدريس المشترك' },
    'acad.incl.f6':         { en: 'Differentiated Instruction', ar: 'التعليم المتمايز' },

    /* ── Academics page: CTA ── */
    'acad.cta.h3':          { en: 'Start Your Child\'s Journey at NAIS', ar: 'ابدأ رحلة طفلك في NAIS' },
    'acad.cta.p':           { en: 'Enrollment open for 2026–2027. Join our community of 900+ students from 45+ nationalities.', ar: 'التسجيل مفتوح لعام 2026–2027. انضم إلى مجتمعنا من أكثر من 900 طالب من أكثر من 45 جنسية.' },

    /* ── Academics page: curriculum tab ── */
    'cur.advantages.label': { en: 'Why American Curriculum?', ar: 'لماذا المنهج الأمريكي؟' },
    'cur.advantages.h2':    { en: 'Built for the<br/><em>World\'s Best Universities</em>', ar: 'مُصمَّم لأفضل<br/><em>جامعات العالم</em>' },
    'cur.adv1.title':       { en: 'Global University Recognition', ar: 'اعتراف جامعي عالمي' },
    'cur.adv1.p':           { en: 'American curriculum credentials are accepted at top universities in the US, UK, Canada, Australia, Europe, and the UAE.', ar: 'مؤهلات المنهج الأمريكي مقبولة في أفضل الجامعات في الولايات المتحدة والمملكة المتحدة وكندا وأستراليا وأوروبا والإمارات.' },
    'cur.adv2.title':       { en: 'STEM & Critical Thinking', ar: 'STEM والتفكير النقدي' },
    'cur.adv2.p':           { en: 'From KG exploration to AP Physics and Calculus, scientific thinking and problem-solving are woven throughout every grade.', ar: 'من استكشاف الروضة إلى AP في الفيزياء والحساب، يُنسج التفكير العلمي وحل المشكلات في كل مرحلة.' },
    'cur.adv3.title':       { en: 'Whole-Child Development', ar: 'تنمية الطفل الشاملة' },
    'cur.adv3.p':           { en: 'Arts, athletics, and social-emotional learning sit alongside academic achievement for truly balanced graduates.', ar: 'الفنون والرياضة والتعلم الاجتماعي العاطفي جنباً إلى جنب مع الإنجاز الأكاديمي لخريجين متوازنين حقاً.' },
    'cur.adv4.title':       { en: 'Small Class Sizes',       ar: 'فصول صغيرة الحجم' },
    'cur.adv4.p':           { en: 'Maximum 22 students per class — ensuring every student receives genuine personal attention and support.', ar: 'حد أقصى 22 طالباً في الفصل — لضمان حصول كل طالب على اهتمام شخصي ودعم حقيقي.' },
    'cur.adv5.title':       { en: '15+ AP Courses',         ar: 'أكثر من 15 مقرر AP' },
    'cur.adv5.p':           { en: 'College Board-certified AP courses offer students the chance to earn university credit while still in high school.', ar: 'تتيح مقررات AP المعتمدة من College Board للطلاب الحصول على رصيد جامعي خلال المرحلة الثانوية.' },
    'cur.adv6.title':       { en: 'Measurable Progress',    ar: 'تقدم قابل للقياس' },
    'cur.adv6.p':           { en: 'MAP, SAT, AP, and IELTS assessments track and evidence every student\'s academic growth at NAIS.', ar: 'تتبع اختبارات MAP وSAT وAP وIELTS وتُثبت النمو الأكاديمي لكل طالب في NAIS.' },

    /* ── Academics page: grading system ── */
    'acad.grade.label':     { en: 'Assessment System',      ar: 'نظام التقييم' },
    'acad.grade.h2':        { en: 'Grading &amp;<br/><em>Assessment</em>', ar: 'التقديرات<br/><em>والتقييم</em>' },
    'acad.grade.gpa':       { en: 'GPA Scale: 0.0 – 4.0 (AP weighted up to 5.0)', ar: 'مقياس GPA: 0.0 – 4.0 (مرجَّح AP حتى 5.0)' },
    'acad.grade.formative': { en: 'Formative (quizzes, classwork)', ar: 'التكويني (اختبارات قصيرة، عمل الفصل)' },
    'acad.grade.summative': { en: 'Summative (tests, projects)', ar: 'الختامي (اختبارات، مشاريع)' },
    'acad.grade.final':     { en: 'Final Examinations',     ar: 'الامتحانات النهائية' },

    /* ── Academics page: results tab ── */
    'res.kpi.ap':           { en: 'AP Pass Rate',           ar: 'معدل نجاح AP' },
    'res.kpi.sat':          { en: 'SAT Average Score',      ar: 'متوسط درجة SAT' },
    'res.kpi.ielts':        { en: 'IELTS Band 6+ Rate',     ar: 'معدل IELTS 6+ باند' },
    'res.kpi.uni':          { en: 'University Acceptance',  ar: 'القبول الجامعي' },
    'res.ap.label':         { en: 'AP Performance 2024–25', ar: 'أداء AP 2024–25' },
    'res.ap.h2':            { en: 'Advanced Placement<br/><em>Results</em>', ar: 'نتائج<br/><em>الدراسات المتقدمة AP</em>' },
    'res.sat.label':        { en: 'SAT & External Exams',   ar: 'SAT والاختبارات الخارجية' },
    'res.sat.h2':           { en: 'External Assessment<br/><em>Performance</em>', ar: 'أداء<br/><em>التقييم الخارجي</em>' },
    'res.uni.label':        { en: 'Graduate Destinations',  ar: 'وجهات الخريجين' },
    'res.uni.h2':           { en: '100% University<br/><em>Acceptance Rate</em>', ar: '100% نسبة<br/><em>القبول الجامعي</em>' },
    'res.uni.p':            { en: 'Every NAIS graduate is accepted to a university. Our Class of 2024–25 earned places at leading institutions across North America, the UK, Australia, and the UAE.', ar: 'كل خريج من NAIS يُقبل في جامعة. حصل خريجو دفعة 2024–25 على مقاعد في مؤسسات رائدة في أمريكا الشمالية والمملكة المتحدة وأستراليا والإمارات.' },
    'res.compare.label':    { en: 'Curriculum Comparison',  ar: 'مقارنة المناهج' },
    'res.compare.h2':       { en: 'American vs British vs<br/><em>IB Curriculum</em>', ar: 'الأمريكي مقابل البريطاني<br/><em>مقابل IB</em>' },
    'res.compare.american': { en: 'American Curriculum',    ar: 'المنهج الأمريكي' },
    'res.compare.british':  { en: 'British Curriculum',     ar: 'المنهج البريطاني' },
    'res.compare.ib':       { en: 'IB Programme',           ar: 'برنامج IB' },

    /* ── Gallery page: section headings ── */
    'gal.cta.h2':           { en: 'Experience NAIS<br/><em>In Person</em>', ar: 'اختبر NAIS<br/><em>شخصياً</em>' },
    'gal.cta.p':            { en: 'Book a campus tour and experience our vibrant community, state-of-the-art facilities, and welcoming school culture for yourself.', ar: 'احجز جولة في الحرم واختبر مجتمعنا النابض ومرافقنا المتطورة وثقافتنا المدرسية الترحيبية بنفسك.' },
    'gal.cta.btn.tour':     { en: 'Book a Campus Tour',     ar: 'احجز جولة في الحرم' },
    'gal.cta.btn.apply':    { en: 'Apply for 2026–2027',    ar: 'تقدّم لعام 2026–2027' },

    /* ── Parent FAQ page keys ── */
    'pfaq.label':           { en: 'Parent Information Centre', ar: 'مركز معلومات الأهل' },
    'pfaq.intro':           { en: 'Everything you need to know about life at NAIS Dubai — from first inquiry to graduation day.', ar: 'كل ما تحتاج معرفته عن الحياة في NAIS دبي — من أول استفسار حتى يوم التخرج.' },

    /* ── PBL page keys ── */
    'pbl.label':            { en: 'Our Teaching Philosophy', ar: 'فلسفتنا التعليمية' },
    'pbl.intro':            { en: 'At NAIS, learning goes beyond textbooks. Project-Based Learning challenges students to solve real problems, collaborate with peers, and present their findings — developing the skills that top universities and employers demand.', ar: 'في NAIS، يتجاوز التعلم الكتب المدرسية. يتحدى التعلم القائم على المشاريع الطلاب لحل مشكلات حقيقية والتعاون مع الأقران وعرض نتائجهم — تطوير المهارات التي تطلبها أفضل الجامعات وأصحاب العمل.' },

    /* ── Phase 4 results page keys ── */
    'ph4.hero.badge':       { en: 'KHDA Inspection Results', ar: 'نتائج تفتيش KHDA' },
    'ph4.hero.h1':          { en: 'Phase 4 Inspection<br/><em>Results & Report</em>', ar: 'نتائج تفتيش<br/><em>المرحلة الرابعة والتقرير</em>' },
    'ph4.hero.sub':         { en: 'NAIS Dubai\'s independently verified KHDA Phase 4 inspection outcomes — transparent evidence of our commitment to educational excellence.', ar: 'نتائج تفتيش KHDA المرحلة الرابعة الموثّقة بشكل مستقل لـ NAIS دبي — دليل شفاف على التزامنا بالتميز التعليمي.' },

    /* ── Sitemap page ── */
    'sitemap.title':        { en: 'Sitemap | NAIS Dubai',   ar: 'خريطة الموقع | NAIS دبي' },

    /* ── Back-to-top aria ── */
    'aria.back-top':        { en: 'Back to top',             ar: 'العودة للأعلى' },

    /* ══════════════════════════════════════════════════
       CURRICULUM PAGE — full section translations
    ══════════════════════════════════════════════════ */
    'cur.anchor.grading':   { en: 'Grading',                ar: 'التقديرات' },
    'cur.anchor.exams':     { en: 'Assessments',            ar: 'التقييمات' },
    'cur.anchor.difference':{ en: 'How It\'s Different',    ar: 'كيف يختلف' },
    'cur.anchor.skills':    { en: 'Skills',                 ar: 'المهارات' },
    'cur.anchor.pathways':  { en: 'Pathways',               ar: 'المسارات' },
    'cur.anchor.why':       { en: 'Why Choose NAIS',        ar: 'لماذا NAIS' },
    'cur.anchor.faq':       { en: 'FAQ',                    ar: 'الأسئلة الشائعة' },

    'cur.grade.label':      { en: 'How We Grade',           ar: 'كيف نُقيِّم' },
    'cur.grade.h2':         { en: 'Continuous, Transparent &amp; <em>Fair Assessment</em>', ar: 'تقييم مستمر وشفاف <em>وعادل</em>' },
    'cur.grade.sub':        { en: 'At NAIS, students are never defined by a single exam. Grading reflects what they know, how they think, and how they grow over time.', ar: 'في NAIS، لا يُعرَّف الطلاب بامتحان واحد. يعكس التقدير ما يعرفونه وكيف يفكرون وكيف يتطورون بمرور الوقت.' },
    'cur.grade.elem.h3':    { en: 'Elementary School (KG–Grade 5)', ar: 'المرحلة الابتدائية (روضة–الصف 5)' },
    'cur.grade.elem.p':     { en: 'Grades are based 100% on ongoing performance — no high-stakes exams. Students are assessed through consistent daily engagement, projects, and teacher observations.', ar: 'تُبنى التقديرات 100% على الأداء المستمر — بدون امتحانات ذات مخاطر عالية. يُقيَّم الطلاب من خلال المشاركة اليومية المنتظمة والمشاريع وملاحظات المعلم.' },
    'cur.grade.sec.h3':     { en: 'Secondary School (Grades 6–12)', ar: 'المرحلة الثانوية (الصفوف 6–12)' },
    'cur.grade.sec.p':      { en: 'The 80/20 model balances consistent coursework with formal examinations, ensuring a fair and well-rounded picture of every student\'s ability.', ar: 'يوازن نموذج 80/20 بين عمل المقررات المنتظم والامتحانات الرسمية، لضمان صورة عادلة ومتكاملة لقدرة كل طالب.' },

    'cur.assess.label':     { en: 'Assessment Philosophy',  ar: 'فلسفة التقييم' },
    'cur.assess.h2':        { en: 'Balanced &amp; <em>Meaningful</em> Assessment', ar: 'تقييم متوازن <em>وهادف</em>' },
    'cur.assess.sub':       { en: 'Unlike exam-heavy systems, NAIS uses multiple assessment methods throughout the semester, designed using Bloom\'s Taxonomy to ensure deep, meaningful learning.', ar: 'على عكس الأنظمة الثقيلة بالامتحانات، تستخدم NAIS طرق تقييم متعددة طوال الفصل الدراسي، مُصممة باستخدام تصنيف بلوم لضمان تعلم عميق وهادف.' },

    'cur.compare.label':    { en: 'Curriculum Comparison',  ar: 'مقارنة المناهج' },
    'cur.compare.h2':       { en: 'How the American Curriculum <em>Stands Apart</em>', ar: 'كيف يتميز المنهج الأمريكي' },
    'cur.compare.sub':      { en: 'Flexible, student-centered, and skills-based — here is how the American curriculum compares to more traditional, exam-focused systems.', ar: 'مرن وموجّه نحو الطالب وقائم على المهارات — إليك كيف يقارن المنهج الأمريكي بالأنظمة التقليدية القائمة على الامتحانات.' },

    'cur.skills.label':     { en: 'What Students Develop',  ar: 'ما يطوره الطلاب' },
    'cur.skills.h2':        { en: 'Skills for the <em>Real World</em>', ar: 'مهارات <em>للعالم الحقيقي</em>' },
    'cur.skills.sub':       { en: 'The American curriculum replaces rote memorization with genuine, transferable life skills that prepare students for university, career, and citizenship.', ar: 'يستبدل المنهج الأمريكي الحفظ الأصم بمهارات حياتية حقيقية قابلة للنقل تُعدّ الطلاب للجامعة والمهنة والمواطنة.' },

    'cur.skill1.h4':        { en: 'Critical Thinking',      ar: 'التفكير النقدي' },
    'cur.skill1.p':         { en: 'Students question, analyze, and evaluate information — never accepting things at face value.', ar: 'يتساءل الطلاب ويحللون ويقيّمون المعلومات — لا يقبلون الأشياء على علّاتها.' },
    'cur.skill2.h4':        { en: 'Creativity',             ar: 'الإبداع' },
    'cur.skill2.p':         { en: 'Open-ended projects and flexible assessments encourage original ideas and innovative solutions.', ar: 'تشجع المشاريع المفتوحة والتقييمات المرنة الأفكار الأصيلة والحلول المبتكرة.' },
    'cur.skill3.h4':        { en: 'Communication',          ar: 'التواصل' },
    'cur.skill3.p':         { en: 'Presentations, debates, and research tasks build confident, articulate expression in every student.', ar: 'تبني العروض التقديمية والنقاشات ومهام البحث تعبيراً واثقاً وواضحاً في كل طالب.' },
    'cur.skill4.h4':        { en: 'Problem-Solving',        ar: 'حل المشكلات' },
    'cur.skill4.p':         { en: 'Real-world challenges across subjects teach students to think strategically and find solutions.', ar: 'تعلّم التحديات الواقعية عبر المواد الطلاب التفكير الاستراتيجي وإيجاد الحلول.' },
    'cur.skill5.h4':        { en: 'Collaboration',          ar: 'التعاون' },
    'cur.skill5.p':         { en: 'Group projects and team assessments build the interpersonal skills every employer values.', ar: 'تبني مشاريع المجموعات والتقييمات الجماعية المهارات الشخصية التي يقدّرها كل صاحب عمل.' },
    'cur.skill6.h4':        { en: 'Global Awareness',       ar: 'الوعي العالمي' },
    'cur.skill6.p':         { en: 'A diverse campus community and internationally focused curriculum builds global citizens.', ar: 'يبني مجتمع الحرم المتنوع والمنهج ذو التوجه الدولي مواطنين عالميين.' },
    'cur.skill7.h4':        { en: 'Digital Literacy',       ar: 'الثقافة الرقمية' },
    'cur.skill7.p':         { en: 'Technology is embedded across subjects, preparing students for a digitally connected world.', ar: 'مُدمجة التكنولوجيا في جميع المواد لتجهيز الطلاب لعالم متصل رقمياً.' },
    'cur.skill8.h4':        { en: 'Independence &amp; Ownership', ar: 'الاستقلالية والملكية' },
    'cur.skill8.p':         { en: 'Students learn to take charge of their own learning journey and take responsibility for their progress.', ar: 'يتعلم الطلاب الاستحواذ على رحلتهم التعليمية وتحمّل مسؤولية تقدمهم.' },

    'cur.path.label':       { en: 'Flexible Pathways',      ar: 'مسارات مرنة' },
    'cur.path.h2':          { en: 'A Journey Built Around <em>Every Child</em>', ar: 'رحلة مبنية حول <em>كل طفل</em>' },
    'cur.path.sub':         { en: 'From Kindergarten through Grade 12, NAIS tailors each stage to meet students where they are — offering personalised support, advanced opportunities, and a clear route to university.', ar: 'من رياض الأطفال حتى الصف الثاني عشر، تُخصّص NAIS كل مرحلة لتلبية احتياجات الطلاب — وتقدم دعماً شخصياً وفرصاً متقدمة ومساراً واضحاً نحو الجامعة.' },
    'cur.path.kg':          { en: 'Foundation',             ar: 'التأسيس' },
    'cur.path.kg.p':        { en: 'Play-based, inquiry-led learning. Building literacy, numeracy, and love of learning.', ar: 'تعلم قائم على اللعب والاستفسار. بناء القراءة والحساب وحب التعلم.' },
    'cur.path.elem':        { en: 'Elementary',             ar: 'الابتدائي' },
    'cur.path.elem.p':      { en: '100% coursework-based. Core subjects plus arts, science, and physical education.', ar: 'قائم 100% على المقررات. المواد الأساسية إضافة إلى الفنون والعلوم والتربية البدنية.' },
    'cur.path.mid':         { en: 'Middle School',          ar: 'المتوسط' },
    'cur.path.mid.p':       { en: '80/20 grading model introduced. Electives and deeper subject specialization begin.', ar: 'يُقدَّم نموذج تقدير 80/20. تبدأ المواد الاختيارية والتخصص الأعمق في المادة.' },
    'cur.path.high':        { en: 'High School',            ar: 'الثانوي' },
    'cur.path.high.p':      { en: 'GPA tracking, AP courses, SAT/PSAT prep, IELTS, and full university counseling.', ar: 'تتبع GPA ومقررات AP وتحضير SAT/PSAT وIELTS وإرشاد جامعي كامل.' },

    'cur.why.label':        { en: 'Why Choose NAIS',        ar: 'لماذا تختار NAIS' },
    'cur.why.h2':           { en: 'Choosing the American Curriculum<br/>Means Choosing the <em>Whole Child</em>', ar: 'اختيار المنهج الأمريكي<br/>يعني اختيار <em>الطفل بأكمله</em>' },
    'cur.why.sub':          { en: 'At NAIS, we focus on academic success, global readiness, confidence, independence, and balanced personal growth — not just test scores.', ar: 'في NAIS، نركز على النجاح الأكاديمي والاستعداد العالمي والثقة والاستقلالية والنمو الشخصي المتوازن — ليس فقط درجات الاختبارات.' },
    'cur.why1.h4':          { en: 'Academic Success',       ar: 'النجاح الأكاديمي' },
    'cur.why1.p':           { en: 'Students build strong foundations in literacy, mathematics, and science while developing the higher-order thinking skills universities demand.', ar: 'يبني الطلاب أسساً قوية في القراءة والرياضيات والعلوم مع تطوير مهارات التفكير العليا التي تتطلبها الجامعات.' },
    'cur.why2.h4':          { en: 'Global Readiness',       ar: 'الاستعداد العالمي' },
    'cur.why2.p':           { en: 'The curriculum prepares students for universities around the world — especially in the U.S. and Canada — through SAT, AP, and internationally recognized qualifications.', ar: 'يُعدّ المنهج الطلاب لجامعات حول العالم — خاصة في الولايات المتحدة وكندا — من خلال SAT وAP والمؤهلات المعترف بها دولياً.' },
    'cur.why3.h4':          { en: 'Confidence &amp; Independence', ar: 'الثقة والاستقلالية' },
    'cur.why3.p':           { en: 'Students learn how to think critically, express ideas with clarity, and take ownership of their own educational journey.', ar: 'يتعلم الطلاب كيفية التفكير النقدي والتعبير عن الأفكار بوضوح والاستحواذ على رحلتهم التعليمية.' },
    'cur.why4.h4':          { en: 'Balanced Learning',      ar: 'التعلم المتوازن' },
    'cur.why4.p':           { en: 'With a rich mix of academics, real-world projects, and extracurricular activities, students develop both intellectually and personally.', ar: 'مع مزيج غني من الأكاديميات والمشاريع الواقعية والأنشطة اللاصفية، يتطور الطلاب فكرياً وشخصياً.' },
    'cur.why5.h4':          { en: 'Growth-Focused Approach', ar: 'منهج يركز على النمو' },
    'cur.why5.p':           { en: 'Because students are assessed continuously throughout the year, they are encouraged to improve over time — never defined by one single exam result.', ar: 'لأن الطلاب يُقيَّمون باستمرار طوال العام، يُشجَّعون على التحسن بمرور الوقت — لا يُعرَّفون بنتيجة امتحان واحدة.' },
    'cur.why6.h4':          { en: 'Community &amp; Support', ar: 'المجتمع والدعم' },
    'cur.why6.p':           { en: 'A caring, diverse community of 45+ nationalities and 60+ expert faculty members ensures every student feels seen, supported, and inspired.', ar: 'مجتمع متعاطف ومتنوع من أكثر من 45 جنسية وأكثر من 60 عضواً متخصصاً في هيئة التدريس يضمن أن يشعر كل طالب بأنه مرئي ومدعوم وملهَم.' },

    'cur.uni.label':        { en: 'University Destinations', ar: 'وجهات الخريجين' },
    'cur.uni.h3':           { en: 'NAIS Graduates Are Accepted Into Universities <em>Worldwide</em>', ar: 'يُقبل خريجو NAIS في جامعات <em>حول العالم</em>' },
    'cur.uni.p':            { en: 'The American curriculum\'s GPA system, AP credits, and standardized test preparation open doors to institutions across the United States, Canada, UK, Australia, and beyond.', ar: 'يفتح نظام GPA للمنهج الأمريكي وأرصدة AP وتحضير الاختبارات المعيارية أبواب المؤسسات عبر الولايات المتحدة وكندا والمملكة المتحدة وأستراليا وما بعدها.' },

    'cur.faq.label':        { en: 'Common Questions',       ar: 'الأسئلة الشائعة' },
    'cur.faq.h2':           { en: 'Parents Ask, <em>We Answer</em>', ar: 'يسأل الأهل، <em>نجيب</em>' },
    'cur.faq.sub':          { en: 'Everything families need to know about how the American curriculum works at NAIS Dubai.', ar: 'كل ما تحتاج الأسر معرفته عن كيفية عمل المنهج الأمريكي في NAIS دبي.' },

    'cur.faq.q1':           { en: 'How does grading work in the American curriculum?', ar: 'كيف يعمل نظام التقديرات في المنهج الأمريكي؟' },
    'cur.faq.a1':           { en: 'Grading at NAIS is <strong>continuous, transparent, and based on overall student performance</strong> — not just exams.<br/><ul><li><strong>Elementary School:</strong> 100% based on ongoing performance — classwork, projects, and assessments.</li><li><strong>Secondary School:</strong> 80% coursework + 20% exams. Grades are reported as letter grades (A–F).</li><li><strong>High School:</strong> Letter grades contribute to a GPA used in university applications.</li></ul>', ar: 'التقديرات في NAIS <strong>مستمرة وشفافة وتستند إلى الأداء الكلي للطالب</strong> — ليس فقط الامتحانات.<br/><ul><li><strong>الابتدائي:</strong> 100% مستند إلى الأداء المستمر — عمل الفصل والمشاريع والتقييمات.</li><li><strong>الثانوي:</strong> 80% مقررات + 20% امتحانات. تُبلَّغ التقديرات بحروف (A–F).</li><li><strong>الثانوية:</strong> تُساهم تقديرات الحروف في GPA المستخدم في طلبات الجامعة.</li></ul>' },
    'cur.faq.q2':           { en: 'How much of the grade is based on exams?', ar: 'كم نسبة التقدير المستند إلى الامتحانات؟' },
    'cur.faq.a2':           { en: 'In Secondary School (Grades 6–12), exams make up only <strong>20% of the final grade</strong>. The remaining 80% comes from coursework, assignments, projects, and participation throughout the year. In Elementary School, there are <strong>no formal exams</strong> — assessment is 100% coursework-based.', ar: 'في المرحلة الثانوية (الصفوف 6–12)، تشكّل الامتحانات فقط <strong>20% من التقدير النهائي</strong>. يأتي الـ 80% المتبقي من المقررات والواجبات والمشاريع والمشاركة طوال العام. في المرحلة الابتدائية، <strong>لا توجد امتحانات رسمية</strong> — التقييم قائم 100% على المقررات.' },
    'cur.faq.q3':           { en: 'What is the difference between formative and summative assessment?', ar: 'ما الفرق بين التقييم التكويني والختامي؟' },
    'cur.faq.a3':           { en: '<ul><li><strong>Formative assessments</strong> are daily learning checks — quizzes, exit tickets, classroom discussions. They help teachers understand where students are and adjust their teaching.</li><li><strong>Summative assessments</strong> are end-of-unit tasks that measure what students have learned — tests, essays, projects, or presentations.</li></ul>', ar: '<ul><li><strong>التقييمات التكوينية</strong> هي فحوصات تعلم يومية — اختبارات قصيرة وتذاكر الخروج ومناقشات الفصل. تساعد المعلمين على فهم مستوى الطلاب وتعديل تدريسهم.</li><li><strong>التقييمات الختامية</strong> هي مهام نهاية الوحدة التي تقيس ما تعلمه الطلاب — اختبارات ومقالات ومشاريع أو عروض تقديمية.</li></ul>' },
    'cur.faq.q4':           { en: 'What are AP courses and who can take them?', ar: 'ما مقررات AP ومن يمكنه أخذها؟' },
    'cur.faq.a4':           { en: '<strong>Advanced Placement (AP)</strong> courses are college-level classes offered to high school students (Grades 9–12). Students who pass the AP exam (score 3–5) may receive <strong>university credit</strong>. AP courses demonstrate academic strength to university admissions offices worldwide.', ar: 'مقررات <strong>AP المتقدمة</strong> هي فصول على مستوى الجامعة تُقدَّم لطلاب المرحلة الثانوية (الصفوف 9–12). قد يحصل الطلاب الذين يجتازون امتحان AP (درجة 3–5) على <strong>رصيد جامعي</strong>. تُثبت مقررات AP القوة الأكاديمية لمكاتب القبول في الجامعات عالمياً.' },
    'cur.faq.q5':           { en: 'How does the American curriculum prepare students for university?', ar: 'كيف يُعدّ المنهج الأمريكي الطلاب للجامعة؟' },
    'cur.faq.a5':           { en: 'The American curriculum provides multiple pathways to university readiness: GPA (cumulative academic record), SAT/PSAT (standardized tests recognized worldwide), AP Courses (demonstrate college-level ability), IELTS (English proficiency), and dedicated University Counseling from Grade 9.', ar: 'يوفر المنهج الأمريكي مسارات متعددة للاستعداد الجامعي: GPA (السجل الأكاديمي التراكمي) وSAT/PSAT (اختبارات معيارية معترف بها عالمياً) ومقررات AP (تُثبت القدرة على المستوى الجامعي) وIELTS (إتقان اللغة الإنجليزية) والإرشاد الجامعي المتخصص من الصف التاسع.' },
    'cur.faq.q6':           { en: 'Is the American curriculum right for my child if they learn differently?', ar: 'هل المنهج الأمريكي مناسب لطفلي إذا كان يتعلم بشكل مختلف؟' },
    'cur.faq.a6':           { en: 'Absolutely. One of the greatest strengths of the American curriculum is its <strong>flexibility and personalised approach</strong>. Our <strong>Inclusion Program</strong> provides dedicated support, and small class sizes allow teachers to give personal attention to every student. Every child is seen, supported, and valued at NAIS.', ar: 'بالتأكيد. من أبرز نقاط قوة المنهج الأمريكي <strong>مرونته وأسلوبه الشخصي</strong>. يوفر <strong>برنامج الدمج</strong> لدينا دعماً متخصصاً، والفصول الصغيرة تتيح للمعلمين الاهتمام الشخصي بكل طالب. كل طفل مرئي ومدعوم ومُقدَّر في NAIS.' },

    'cur.cta.h3':           { en: 'Ready to Give Your Child a <em>World-Class Education?</em>', ar: 'مستعد لمنح طفلك <em>تعليماً عالمي المستوى؟</em>' },
    'cur.cta.p':            { en: 'Join a community of 900+ students from 45+ nationalities at NAIS Dubai — where the American curriculum meets individual care, rigorous academics, and genuine preparation for the future.', ar: 'انضم إلى مجتمع من أكثر من 900 طالب من أكثر من 45 جنسية في NAIS دبي — حيث يلتقي المنهج الأمريكي بالرعاية الفردية والأكاديميات الصارمة والتحضير الحقيقي للمستقبل.' },
    'cur.cta.apply':        { en: 'Apply Now',               ar: 'سجّل الآن' },
    'cur.cta.admissions':   { en: 'Learn About Admissions',  ar: 'تعرف على القبول' },

    'cur.footer.desc':      { en: 'Inspiring excellence, building character, and shaping the global leaders of tomorrow — in the heart of Dubai.', ar: 'نُلهم التميز ونبني الشخصية ونشكّل قادة الغد العالميين — في قلب دبي.' },

    /* ══════════════════════════════════════════════════
       PBL PAGE — full section translations
    ══════════════════════════════════════════════════ */
    'pbl.intro.p1':         { en: 'Project-Based Learning is an approach where students learn by actively working on real-world, meaningful projects rather than only listening to lessons or memorizing information.', ar: 'التعلم القائم على المشاريع نهج يتعلم فيه الطلاب من خلال العمل النشط على مشاريع واقعية وهادفة بدلاً من الاستماع فقط للدروس أو حفظ المعلومات.' },
    'pbl.intro.p2':         { en: 'Instead of only learning concepts in isolation, students at NAIS engage with authentic challenges that require them to think critically, ask deep questions, and collaborate with their peers — building skills that last a lifetime.', ar: 'بدلاً من تعلم المفاهيم بمعزل فقط، يتفاعل طلاب NAIS مع تحديات حقيقية تتطلب منهم التفكير النقدي وطرح أسئلة عميقة والتعاون مع أقرانهم — بناء مهارات تدوم مدى الحياة.' },
    'pbl.badge.label':      { en: 'Learning Approach',       ar: 'نهج التعلم' },
    'pbl.badge.value':      { en: 'Hands-On &amp; Real-World', ar: 'عملي وواقعي' },

    'pbl.pillars.label':    { en: 'The Four Pillars',        ar: 'الركائز الأربع' },
    'pbl.pillars.h2':       { en: 'Instead of Just Learning Concepts,<br/>Students <em>Do</em> More', ar: 'بدلاً من تعلم المفاهيم فقط،<br/>الطلاب يفعلون <em>أكثر</em>' },
    'pbl.pillars.sub':      { en: 'At NAIS, PBL is built on four core student actions that transform passive learning into active discovery.', ar: 'في NAIS، يُبنى التعلم القائم على المشاريع على أربع إجراءات أساسية للطالب تحوّل التعلم السلبي إلى اكتشاف نشط.' },
    'pbl.p1.h3':            { en: 'Investigate Real-Life Problems', ar: 'التحقيق في مشكلات الحياة الحقيقية' },
    'pbl.p1.p':             { en: 'Students tackle genuine, meaningful challenges that connect to the world beyond the classroom — making learning relevant and motivating.', ar: 'يتصدى الطلاب لتحديات حقيقية وهادفة تتصل بالعالم خارج الفصل الدراسي — مما يجعل التعلم ذا صلة ومحفِّزاً.' },
    'pbl.p2.h3':            { en: 'Work Collaboratively',    ar: 'العمل التعاوني' },
    'pbl.p2.p':             { en: 'Teamwork is at the heart of PBL. Students practise communication, compromise, and cooperation — skills essential for university and career success.', ar: 'العمل الجماعي في قلب التعلم القائم على المشاريع. يمارس الطلاب التواصل والتسوية والتعاون — مهارات أساسية للنجاح في الجامعة والمهنة.' },
    'pbl.p3.h3':            { en: 'Apply Knowledge Across Subjects', ar: 'تطبيق المعرفة عبر المواد' },
    'pbl.p3.p':             { en: 'PBL naturally integrates multiple disciplines — science, math, English, and more — so students see how knowledge connects in real situations.', ar: 'يدمج التعلم القائم على المشاريع بشكل طبيعي تخصصات متعددة — العلوم والرياضيات والإنجليزية وغيرها — حتى يرى الطلاب كيف تتصل المعرفة في مواقف حقيقية.' },
    'pbl.p4.h3':            { en: 'Create Presentations &amp; Solutions', ar: 'إنشاء عروض تقديمية وحلول' },
    'pbl.p4.p':             { en: 'Projects culminate in tangible products — presentations, prototypes, campaigns, or reports — giving students a real sense of achievement and ownership.', ar: 'تبلغ المشاريع ذروتها بمنتجات ملموسة — عروض تقديمية ونماذج أولية وحملات أو تقارير — مما يمنح الطلاب إحساساً حقيقياً بالإنجاز والملكية.' },

    'pbl.quote':            { en: '"PBL encourages students to <em>think critically</em>, ask questions, and take <em>ownership</em> of their learning."', ar: '"التعلم القائم على المشاريع يشجع الطلاب على <em>التفكير النقدي</em> وطرح الأسئلة وأخذ <em>زمام</em> تعلمهم."' },
    'pbl.quote.sub':        { en: 'At NAIS Dubai, Project-Based Learning is not an add-on — it is woven into the fabric of daily classroom life, from Kindergarten through Grade 12.', ar: 'في NAIS دبي، التعلم القائم على المشاريع ليس إضافة — بل منسوج في نسيج الحياة اليومية للفصل الدراسي، من رياض الأطفال حتى الصف الثاني عشر.' },
    'pbl.quote.cta':        { en: 'Apply &amp; Join NAIS',   ar: 'قدّم وانضم إلى NAIS' },

    'pbl.skills.label':     { en: 'Building for the Future', ar: 'البناء للمستقبل' },
    'pbl.skills.h2':        { en: 'Essential Skills for University<br/>&amp; <em>Future Careers</em>', ar: 'مهارات أساسية للجامعة<br/>و<em>المهن المستقبلية</em>' },
    'pbl.skills.sub':       { en: 'PBL at NAIS builds the four essential skills that top universities and global employers consistently cite as most critical for success.', ar: 'يبني التعلم القائم على المشاريع في NAIS المهارات الأربع الأساسية التي تستشهد بها أفضل الجامعات وأصحاب العمل العالميون باستمرار باعتبارها الأكثر أهمية للنجاح.' },
    'pbl.sk1.name':         { en: 'Problem-Solving',         ar: 'حل المشكلات' },
    'pbl.sk1.desc':         { en: 'Students learn to break down complex challenges, think analytically, and devise creative solutions — a core skill for every career path.', ar: 'يتعلم الطلاب تفكيك التحديات المعقدة والتفكير التحليلي وابتكار حلول إبداعية — مهارة أساسية لكل مسار مهني.' },
    'pbl.sk2.name':         { en: 'Communication',           ar: 'التواصل' },
    'pbl.sk2.desc':         { en: 'From written reports to oral presentations, students develop confidence in expressing their ideas clearly and persuasively to any audience.', ar: 'من التقارير المكتوبة إلى العروض الشفهية، يطور الطلاب الثقة في التعبير عن أفكارهم بوضوح وإقناع لأي جمهور.' },
    'pbl.sk3.name':         { en: 'Creativity',              ar: 'الإبداع' },
    'pbl.sk3.desc':         { en: 'Open-ended projects give students the freedom to innovate, experiment, and explore original ideas — nurturing the creative thinkers of tomorrow.', ar: 'تمنح المشاريع المفتوحة الطلاب حرية الابتكار والتجريب واستكشاف الأفكار الأصيلة — تنمية المفكرين المبدعين لغد أفضل.' },
    'pbl.sk4.name':         { en: 'Teamwork',                ar: 'العمل الجماعي' },
    'pbl.sk4.desc':         { en: 'Collaborating on shared goals teaches students to listen, lead, compromise, and celebrate success together — mirroring the real workplace.', ar: 'يعلّم التعاون على الأهداف المشتركة الطلاب الاستماع والقيادة والتسوية والاحتفال بالنجاح معاً — محاكاةً لبيئة العمل الحقيقية.' },

    'pbl.process.label':    { en: 'The PBL Journey',         ar: 'رحلة التعلم القائم على المشاريع' },
    'pbl.process.h2':       { en: 'How Project-Based Learning<br/><em>Works at NAIS</em>', ar: 'كيف يعمل التعلم القائم<br/><em>على المشاريع في NAIS</em>' },
    'pbl.process.sub':      { en: 'Every PBL project follows a carefully structured journey that guides students from curiosity to creation.', ar: 'تتبع كل مشروع قائم على التعلم رحلة منظمة بعناية ترشد الطلاب من الفضول إلى الإبداع.' },
    'pbl.step1.h3':         { en: 'Ask the Driving Question', ar: 'طرح السؤال المحرك' },
    'pbl.step1.p':          { en: 'Every project begins with a compelling, open-ended question rooted in a real-world context — sparking curiosity and giving learning a clear purpose.', ar: 'يبدأ كل مشروع بسؤال مقنع ومفتوح مجذّر في سياق واقعي — يُشعل الفضول ويمنح التعلم هدفاً واضحاً.' },
    'pbl.step2.h3':         { en: 'Research &amp; Investigate', ar: 'البحث والتحقيق' },
    'pbl.step2.p':          { en: 'Students gather information, conduct research, interview experts, and analyse data — building genuine subject knowledge in context.', ar: 'يجمع الطلاب المعلومات ويُجرون البحوث ويُجرون مقابلات مع الخبراء ويحللون البيانات — بناء معرفة حقيقية بالمادة في سياقها.' },
    'pbl.step3.h3':         { en: 'Collaborate &amp; Plan',   ar: 'التعاون والتخطيط' },
    'pbl.step3.p':          { en: 'Working in teams, students plan their approach, divide responsibilities, and set goals — learning the dynamics of effective collaboration.', ar: 'بالعمل في فرق، يخطط الطلاب نهجهم ويقسّمون المسؤوليات ويضعون الأهداف — تعلّم ديناميكيات التعاون الفعّال.' },
    'pbl.step4.h3':         { en: 'Create &amp; Build',       ar: 'الإنشاء والبناء' },
    'pbl.step4.p':          { en: 'Students design, build, or produce their solution — whether it\'s a prototype, a campaign, a report, a video, or a community presentation.', ar: 'يصمم الطلاب ويبنون أو ينتجون حلّهم — سواء كان نموذجاً أولياً أو حملة أو تقريراً أو فيديو أو عرضاً تقديمياً للمجتمع.' },
    'pbl.step5.h3':         { en: 'Reflect &amp; Revise',     ar: 'التأمل والمراجعة' },
    'pbl.step5.p':          { en: 'Continuous feedback loops — from teachers and peers — encourage students to reflect, improve, and embrace the iterative nature of real problem-solving.', ar: 'تشجع حلقات التغذية الراجعة المستمرة — من المعلمين والأقران — الطلاب على التأمل والتحسين وتقبّل الطبيعة التكرارية لحل المشكلات الحقيقية.' },
    'pbl.step6.h3':         { en: 'Present &amp; Celebrate',  ar: 'العرض والاحتفال' },
    'pbl.step6.p':          { en: 'Projects culminate in a public presentation to an authentic audience, giving students a meaningful sense of accomplishment and real-world impact.', ar: 'تبلغ المشاريع ذروتها بعرض عام أمام جمهور حقيقي، مما يمنح الطلاب إحساساً هادفاً بالإنجاز والتأثير الواقعي.' },

    'pbl.cta.h2':           { en: 'Experience PBL at <em>NAIS Dubai</em>', ar: 'اختبر التعلم القائم على المشاريع في <em>NAIS دبي</em>' },
    'pbl.cta.p':            { en: 'Join a school where your child will be challenged, inspired, and empowered to make a real difference — from day one.', ar: 'انضم إلى مدرسة يُتحدّى فيها طفلك ويُلهَم ويُمكَّن من إحداث فرق حقيقي — من اليوم الأول.' },
    'pbl.cta.apply':        { en: 'Apply Now',               ar: 'سجّل الآن' },
    'pbl.cta.academics':    { en: 'Explore Academics',       ar: 'استكشف الأكاديميات' },

    'pbl.footer.desc':      { en: 'North American International School Dubai — inspiring excellence and building tomorrow\'s leaders through a rigorous American curriculum and a vibrant international community.', ar: 'المدرسة الأمريكية الدولية الشمالية دبي — تُلهم التميز وتبني قادة الغد من خلال منهج أمريكي صارم ومجتمع دولي نابض.' },
    'pbl.footer.pbl':       { en: 'Project-Based Learning',  ar: 'التعلم القائم على المشاريع' },
    'pbl.footer.cur':       { en: 'American Curriculum',     ar: 'المنهج الأمريكي' },
    'pbl.footer.faq':       { en: 'Parent FAQ',              ar: 'أسئلة الأهل' },
    'pbl.footer.pbl.prog':  { en: 'PBL Program',             ar: 'برنامج التعلم بالمشاريع' },

    /* ══════════════════════════════════════════════════
       PHASE 4 RESULTS PAGE — section translations
    ══════════════════════════════════════════════════ */
    'ph4.kpi.sci':          { en: '+35pp Science Growth',    ar: 'نمو العلوم +35 نقطة مئوية' },
    'ph4.kpi.ap':           { en: '68% AP Pass Rate',        ar: '68% معدل نجاح AP' },
    'ph4.kpi.sci.sub':      { en: '3-year improvement',      ar: 'تحسن خلال 3 سنوات' },
    'ph4.kpi.ap.sub':       { en: 'Score 3+ (2024–25)',      ar: 'درجة 3+ (2024–25)' },

    'ph4.map.label':        { en: 'MAP Assessment Data',     ar: 'بيانات تقييم MAP' },
    'ph4.map.h2':           { en: 'MAP Growth<br/><em>2024–2025</em>', ar: 'نمو MAP<br/><em>2024–2025</em>' },
    'ph4.map.sub':          { en: 'NWEA MAP Growth assessments independently measure student academic growth across all grade levels — providing an honest, verified picture of learning progress.', ar: 'تقيس تقييمات نمو NWEA MAP بشكل مستقل النمو الأكاديمي للطلاب في جميع المراحل الدراسية — مقدّمةً صورة صادقة وموثّقة لتقدم التعلم.' },

    'ph4.trend.label':      { en: '3-Year Trend Analysis',   ar: 'تحليل الاتجاه لـ 3 سنوات' },
    'ph4.trend.h2':         { en: '3-Year MAP<br/><em>Attainment Trend</em>', ar: 'اتجاه تحصيل MAP<br/><em>لـ 3 سنوات</em>' },
    'ph4.trend.sub':        { en: 'Consistent year-on-year improvement across both Mathematics and Science — independently measured and verified through NWEA MAP Growth assessments.', ar: 'تحسن منتظم من عام لآخر في الرياضيات والعلوم — مقاس وموثّق بشكل مستقل من خلال تقييمات نمو NWEA MAP.' },

    'ph4.progress.label':   { en: 'MAP Progress Rating',     ar: 'تقييم تقدم MAP' },
    'ph4.progress.h2':      { en: 'MAP Progress<br/><em>Ratings</em>', ar: 'تقييمات<br/><em>تقدم MAP</em>' },
    'ph4.progress.sub':     { en: 'NWEA\'s independent classification of student growth rates — confirming that NAIS students are growing at above-expected rates in core subjects.', ar: 'تصنيف NWEA المستقل لمعدلات نمو الطلاب — مؤكداً أن طلاب NAIS ينمون بمعدلات أعلى من المتوقع في المواد الأساسية.' },

    'ph4.psat.label':       { en: 'PSAT Performance',        ar: 'أداء PSAT' },
    'ph4.psat.h2':          { en: 'PSAT Results<br/><em>Grade 11 · 2024–2025</em>', ar: 'نتائج PSAT<br/><em>الصف 11 · 2024–2025</em>' },
    'ph4.psat.sub':         { en: 'The PSAT (Preliminary SAT) is a College Board standardized assessment taken in Grade 11, providing an early indicator of SAT readiness and university pathway preparation.', ar: 'PSAT (الـ SAT التمهيدي) تقييم معياري من College Board يُجرى في الصف الحادي عشر، يوفر مؤشراً مبكراً لمدى الاستعداد لـ SAT والتحضير للمسار الجامعي.' },

    'ph4.ap.label':         { en: 'AP Performance 2024–25',  ar: 'أداء AP 2024–25' },
    'ph4.ap.h2':            { en: 'Advanced Placement<br/><em>Exam Results</em>', ar: 'نتائج امتحانات<br/><em>AP المتقدمة</em>' },
    'ph4.ap.sub':           { en: 'College Board Advanced Placement results for NAIS Dubai students in the 2024–2025 academic year — the internationally recognised gold standard for pre-university academic achievement.', ar: 'نتائج الدراسات المتقدمة AP من College Board لطلاب NAIS دبي في العام الدراسي 2024–2025 — المعيار الذهبي المعترف به دولياً لإنجاز ما قبل الجامعة.' },

    'ph4.sat.label':        { en: 'SAT Results 2024–25',     ar: 'نتائج SAT 2024–25' },
    'ph4.sat.h2':           { en: 'SAT Performance<br/><em>2024–2025</em>', ar: 'أداء SAT<br/><em>2024–2025</em>' },
    'ph4.sat.sub':          { en: 'The SAT is a College Board standardized test widely used for university admissions in the USA, Canada, and globally. NAIS students showed strong year-on-year improvement.', ar: 'SAT اختبار معياري من College Board يُستخدم على نطاق واسع للقبول الجامعي في الولايات المتحدة وكندا وعالمياً. أظهر طلاب NAIS تحسناً قوياً من عام لآخر.' },

    'ph4.ielts.label':      { en: 'IELTS Results 2024–25',   ar: 'نتائج IELTS 2024–25' },
    'ph4.ielts.h2':         { en: 'IELTS Academic<br/><em>Performance</em>', ar: 'أداء IELTS<br/><em>الأكاديمي</em>' },
    'ph4.ielts.sub':        { en: 'IELTS is the world\'s most widely taken English language proficiency test, essential for university admissions in the UK, Australia, Canada, and many UAE institutions.', ar: 'IELTS الاختبار الأكثر شيوعاً في العالم لكفاءة اللغة الإنجليزية، وهو ضروري للقبول الجامعي في المملكة المتحدة وأستراليا وكندا والعديد من المؤسسات الإماراتية.' },

    /* ══════════════════════════════════════════════════
       PARENT FAQ PAGE — section translations
    ══════════════════════════════════════════════════ */
    'pfaq.stats.q':         { en: 'Questions Answered',      ar: 'سؤال مجاب' },
    'pfaq.stats.cat':       { en: 'Topic Categories',        ar: 'فئة موضوعية' },
    'pfaq.stats.grades':    { en: 'covering all grade levels', ar: 'يغطي جميع المراحل الدراسية' },
    'pfaq.tab.general':     { en: 'General',                 ar: 'عام' },
    'pfaq.tab.assessment':  { en: 'Assessment',              ar: 'التقييم' },
    'pfaq.tab.learning':    { en: 'Learning',                ar: 'التعلم' },
    'pfaq.tab.exams':       { en: 'Exams & Workload',        ar: 'الامتحانات والعبء الدراسي' },
    'pfaq.tab.integrity':   { en: 'Integrity',               ar: 'النزاهة' },
    'pfaq.tab.university':  { en: 'University',              ar: 'الجامعة' },
    'pfaq.tab.wellbeing':   { en: 'Wellbeing',               ar: 'الرفاهية' },
    'pfaq.cta.h2':          { en: 'Still Have Questions?<br/><em>We\'re Here to Help</em>', ar: 'لا تزال لديك أسئلة؟<br/><em>نحن هنا للمساعدة</em>' },
    'pfaq.cta.p':           { en: 'Our Admissions team is available Sunday–Thursday, 8 AM – 3:30 PM. Contact us by phone, email, or WhatsApp — we respond within 24 hours.', ar: 'فريق القبول لدينا متاح الأحد–الخميس، 8 ص – 3:30 م. تواصل معنا بالهاتف أو البريد الإلكتروني أو واتساب — نرد خلال 24 ساعة.' },
    'pfaq.cta.call':        { en: 'Call Us',                 ar: 'اتصل بنا' },
    'pfaq.cta.email':       { en: 'Email Admissions',        ar: 'راسل القبول' },
    'pfaq.cta.wa':          { en: 'WhatsApp Us',             ar: 'تواصل واتساب' },
    'pfaq.cta.tour':        { en: 'Book a Tour',             ar: 'احجز جولة' },

    /* ══════════════════════════════════════════════════
       LEGAL PAGES — section translations
    ══════════════════════════════════════════════════ */
    'legal.label':          { en: 'Legal',                   ar: 'قانوني' },
    'legal.updated':        { en: 'Last Updated',            ar: 'آخر تحديث' },
    'legal.effective':      { en: 'Effective Date',          ar: 'تاريخ السريان' },
    'legal.reviewed':       { en: 'Last Reviewed',           ar: 'آخر مراجعة' },
    'legal.next.review':    { en: 'Next Review',             ar: 'المراجعة القادمة' },
    'legal.approved':       { en: 'Approved by',             ar: 'اعتمد من قِبَل' },

    'privacy.hero.desc':    { en: 'This Privacy Policy explains how North American International School Dubai collects, uses, and protects your personal information.', ar: 'توضح سياسة الخصوصية هذه كيفية جمع المدرسة الأمريكية الدولية الشمالية دبي لمعلوماتك الشخصية واستخدامها وحمايتها.' },
    'terms.hero.desc':      { en: 'Please read these Terms of Use carefully before using the NAIS Dubai website or services.', ar: 'يرجى قراءة شروط الاستخدام هذه بعناية قبل استخدام موقع NAIS دبي أو خدماتها.' },
    'safeguarding.label':   { en: 'Student Safety',          ar: 'سلامة الطلاب' },
    'safeguarding.hero.desc':{ en: 'NAIS Dubai is committed to providing a safe, inclusive, and nurturing environment for every student. This policy outlines our commitment to child protection and welfare.', ar: 'تلتزم NAIS دبي بتوفير بيئة آمنة وشاملة وراعية لكل طالب. توضح هذه السياسة التزامنا بحماية الطفل ورعايته.' },
    'safeguarding.emergency': { en: 'If a child is in immediate danger, call UAE emergency services: 999', ar: 'إذا كان الطفل في خطر فوري، اتصل بالخدمات الطارئة الإماراتية: 999' },
    'legal.nav.label':      { en: 'Student Safety',         ar: 'سلامة الطلاب' },

    /* ══════════════════════════════════════════════════
       SITEMAP PAGE
    ══════════════════════════════════════════════════ */
    'sitemap.h1':           { en: 'Sitemap',                 ar: 'خريطة الموقع' },
    'sitemap.sub':          { en: 'Find every page and section of the NAIS Dubai website', ar: 'اعثر على كل صفحة وقسم في موقع NAIS دبي' },

    /* ══════════════════════════════════════════════════
       SHARED FOOTER / COMMON LABELS
    ══════════════════════════════════════════════════ */
    'footer.about':         { en: 'About NAIS',              ar: 'عن NAIS' },
    'footer.academics':     { en: 'Academics',               ar: 'الأكاديميات' },
    'footer.pbl':           { en: 'Project-Based Learning',  ar: 'التعلم بالمشاريع' },
    'footer.cur':           { en: 'American Curriculum',     ar: 'المنهج الأمريكي' },
    'footer.admissions.lnk':{ en: 'Admissions',              ar: 'القبول والتسجيل' },
    'footer.contact.us':    { en: 'Contact Us',              ar: 'اتصل بنا' },
    'footer.gallery.lnk':   { en: 'Photo Gallery',           ar: 'معرض الصور' },
    'footer.kg':            { en: 'Kindergarten',            ar: 'رياض الأطفال' },
    'footer.elementary':    { en: 'Elementary',              ar: 'الابتدائي' },
    'footer.middle':        { en: 'Middle School',           ar: 'المتوسط' },
    'footer.high':          { en: 'High School',             ar: 'الثانوي' },
    'footer.ap':            { en: 'AP Courses',              ar: 'مقررات AP' },
    'footer.pbl.prog':      { en: 'PBL Program',             ar: 'برنامج التعلم بالمشاريع' },
    'footer.contact.head2': { en: 'Contact Us',              ar: 'اتصل بنا' },
    'footer.copyright':     { en: '© 2025 North American International School Dubai. All rights reserved.', ar: '© 2025 المدرسة الأمريكية الدولية الشمالية دبي. جميع الحقوق محفوظة.' },
    'footer.privacy.lnk':   { en: 'Privacy Policy',         ar: 'سياسة الخصوصية' },
    'footer.terms.lnk':     { en: 'Terms of Use',           ar: 'شروط الاستخدام' },
    'footer.sitemap.lnk':   { en: 'Sitemap',                ar: 'خريطة الموقع' },
    'footer.safeguarding.lnk':{ en: 'Safeguarding',         ar: 'حماية الطلاب' },
    'footer.inspire':       { en: 'Inspiring excellence, building character, and shaping the global leaders of tomorrow — in the heart of Dubai.', ar: 'نُلهم التميز ونبني الشخصية ونشكّل قادة الغد العالميين — في قلب دبي.' },
    'footer.nais.desc':     { en: 'North American International School Dubai — inspiring excellence and building tomorrow\'s leaders through a rigorous American curriculum and a vibrant international community.', ar: 'المدرسة الأمريكية الدولية الشمالية دبي — تُلهم التميز وتبني قادة الغد من خلال منهج أمريكي صارم ومجتمع دولي نابض.' },
    'footer.quick.links':   { en: 'Quick Links',             ar: 'روابط سريعة' },
    'footer.acad.programs': { en: 'Academic Programs',       ar: 'البرامج الأكاديمية' },

    /* ── Gallery page: panoramic banner ── */
    'gal.pano.sub':         { en: 'Class of 2025',           ar: 'دفعة 2025' },
    'gal.pano.title':       { en: 'NAIS Dubai — Celebrating Our Graduates', ar: 'NAIS دبي — نحتفي بخريجينا' },

    /* ── Gallery page: section headings ── */
    'gal.sh.learning':      { en: 'Learning &amp; Arts',     ar: 'التعلم والفنون' },
    'gal.sh.grades':        { en: 'Grades KG–12',            ar: 'الصفوف KG–12' },
    'gal.sh.moremoments':   { en: 'More Moments',            ar: 'المزيد من اللحظات' },
    'gal.sh.fullcol':       { en: 'Full Collection',         ar: 'المجموعة الكاملة' },
    'gal.sh.events':        { en: 'Events &amp; Celebrations', ar: 'الفعاليات والاحتفالات' },

    /* ── Gallery photo captions ── */
    'gal.cap.champs':       { en: 'Champions on the Field',  ar: 'أبطال الملعب' },
    'gal.cap.engaged':      { en: 'Engaged Minds, Every Day', ar: 'عقول متفاعلة، كل يوم' },
    'gal.cap.scilab':       { en: 'Science Lab Excellence',  ar: 'تميّز مختبر العلوم' },
    'gal.cap.little-sci':   { en: 'Little Scientists at Work', ar: 'العلماء الصغار في العمل' },
    'gal.cap.uae-spirit':   { en: 'Celebrating UAE Spirit',  ar: 'الاحتفاء بروح الإمارات' },
    'gal.cap.sportsday':    { en: 'Sports Day Celebrations', ar: 'احتفالات يوم الرياضة' },
    'gal.cap.proud':        { en: 'Proud NAIS Spirit',       ar: 'روح NAIS الفخورة' },
    'gal.cap.uae-nat':      { en: 'UAE National Day',        ar: 'اليوم الوطني الإماراتي' },
    'gal.cap.every-stu':    { en: 'Every Student Matters',   ar: 'كل طالب يهم' },
    'gal.cap.natday-pride': { en: 'National Day Pride',      ar: 'فخر اليوم الوطني' },
    'gal.cap.class2025':    { en: 'Class of 2025 – Record Acceptances', ar: 'دفعة 2025 – أرقام قياسية في القبول' },
    'gal.cap.team-spirit':  { en: 'Team Spirit',             ar: 'روح الفريق' },
    'gal.cap.heritage':     { en: 'Celebrating Our Heritage', ar: 'الاحتفاء بتراثنا' },

    /* ── Sitemap section headings ── */
    'sitemap.sec.main':     { en: 'Main Pages',              ar: 'الصفحات الرئيسية' },
    'sitemap.sec.about':    { en: 'About NAIS',              ar: 'عن NAIS' },
    'sitemap.sec.academics':{ en: 'Academics',               ar: 'الأكاديميات' },
    'sitemap.sec.admissions':{ en: 'Admissions',             ar: 'القبول والتسجيل' },
    'sitemap.sec.results':  { en: 'Results &amp; Data',      ar: 'النتائج والبيانات' },
    'sitemap.sec.gallery':  { en: 'Gallery &amp; Campus',    ar: 'معرض الصور والحرم' },
    'sitemap.sec.contact':  { en: 'Contact Us',              ar: 'اتصل بنا' },
    'sitemap.sec.legal':    { en: 'Legal &amp; Policies',    ar: 'القانوني والسياسات' },
    'sitemap.sec.social':   { en: 'Social Media',            ar: 'وسائل التواصل الاجتماعي' },
    'sitemap.nav.label':    { en: 'Navigation',              ar: 'التنقل' },
    'sitemap.desc':         { en: 'A complete overview of all pages on the NAIS Dubai website.', ar: 'نظرة عامة شاملة على جميع صفحات موقع NAIS دبي.' },

    /* ── Academics page – hero ── */
    'acad.hero.badge': { en: 'KG – Grade 12 · American Curriculum · Dubai, UAE', ar: 'KG – الصف 12 · المنهج الأمريكي · دبي، الإمارات' },
    'acad.hero.h1':    { en: 'Where <em>Learning</em> Becomes<br/>a Lifelong Advantage', ar: 'حيث يصبح <em>التعلم</em><br/>ميزة تدوم العمر كله' },
    'acad.hero.sub':   { en: 'A rigorous American curriculum, world-class faculty, and exceptional results — from Kindergarten through Grade 12.', ar: 'منهج أمريكي صارم وأعضاء هيئة تدريس من طراز عالمي ونتائج استثنائية — من الروضة حتى الصف الثاني عشر.' },

    /* ── Academics page – KPI bar ── */
    'acad.kpi.uni':  { en: 'University<br/>Acceptance',   ar: 'قبول<br/>الجامعات' },
    'acad.kpi.ap':   { en: 'AP Pass Rate<br/>Score 3+',    ar: 'معدل اجتياز AP<br/>درجة 3+' },
    'acad.kpi.sat':  { en: 'SAT Average<br/>2024–25',      ar: 'متوسط SAT<br/>2024–25' },
    'acad.kpi.sci':  { en: 'Science Growth<br/>3 Years',   ar: 'نمو العلوم<br/>3 سنوات' },
    'acad.kpi.path': { en: 'Complete<br/>Pathway',         ar: 'مسار<br/>متكامل' },
    'acad.kpi.path': { en: 'Complete\nPathway',       ar: 'مسار\nمتكامل' },

    /* ── Academics page – AP section ── */
    'acad.ap.label':      { en: 'College Board Approved',       ar: 'معتمد من College Board' },
    'acad.ap.h2':         { en: 'Advanced Placement <em>AP Courses</em>', ar: 'مقررات <em>AP المتقدمة</em>' },
    'acad.ap.intro':      { en: '10+ AP courses across sciences, humanities, and technology — giving students the opportunity to earn university credit and stand out in admissions worldwide.', ar: '10+ مقررات AP عبر العلوم والإنسانيات والتكنولوجيا — تتيح للطلاب الحصول على ساعات جامعية معتمدة والتميز في القبول الجامعي عالمياً.' },
    'acad.ap.cat.english':{ en: 'English & Language Arts',      ar: 'الإنجليزية وفنون اللغة' },
    'acad.ap.cat.math':   { en: 'Mathematics',                  ar: 'الرياضيات' },
    'acad.ap.cat.science':{ en: 'Sciences',                     ar: 'العلوم' },
    'acad.ap.cat.history':{ en: 'History & Social Studies',     ar: 'التاريخ والدراسات الاجتماعية' },
    'acad.ap.cat.cs':     { en: 'Computer Science',             ar: 'علوم الحاسوب' },
    'acad.ap.cat.econ':   { en: 'Economics & Languages',        ar: 'الاقتصاد واللغات' },
    'acad.ap.stat1.lbl':  { en: 'AP Pass Rate · Score 3+',      ar: 'معدل اجتياز AP · درجة 3+' },
    'acad.ap.stat2.lbl':  { en: 'AP Psychology Pass Rate',      ar: 'معدل اجتياز AP علم النفس' },
    'acad.ap.stat3.lbl':  { en: 'AP Comp. Science Pass Rate',   ar: 'معدل اجتياز AP علوم الحاسوب' },

    /* ── Academics page – Inclusion section ── */
    'acad.incl.label': { en: 'Every Child Belongs',   ar: 'كل طفل ينتمي' },
    'acad.incl.h2':    { en: 'Inclusion <em>Program</em>', ar: 'برنامج <em>الدمج</em>' },
    'acad.incl.p':     { en: 'NAIS is committed to inclusive education. Our dedicated Inclusion Program ensures students with diverse learning needs receive individualized support, IEPs, and a true sense of belonging.', ar: 'تلتزم NAIS بالتعليم الشامل. يضمن برنامج الدمج المخصص لدينا أن يتلقى الطلاب ذوو الاحتياجات التعليمية المتنوعة الدعم الفردي وخطط التعليم الفردية والشعور الحقيقي بالانتماء.' },
    'acad.incl.f1':    { en: 'Individualized Education Plans (IEPs)', ar: 'خطط التعليم الفردية (IEPs)' },
    'acad.incl.f2':    { en: 'Learning support specialists',          ar: 'متخصصو دعم التعلم' },
    'acad.incl.f3':    { en: 'Speech & language therapy',             ar: 'علاج النطق واللغة' },
    'acad.incl.f4':    { en: 'Occupational therapy support',          ar: 'دعم العلاج الوظيفي' },
    'acad.incl.f5':    { en: 'Co-teaching classroom model',           ar: 'نموذج الفصل الدراسي المشترك' },
    'acad.incl.f6':    { en: 'Differentiated instruction',            ar: 'التعليم المتمايز' },

    /* ── Academics page – Grading system ── */
    'acad.grade.label':         { en: 'Grading & Assessment',       ar: 'التقييم والدرجات' },
    'acad.grade.h2':            { en: 'Transparent Grading <em>System</em>', ar: 'نظام درجات <em>شفاف</em>' },
    'acad.grade.intro':         { en: 'Clear, consistent grading aligned to US standards — so families always understand how their child is performing and progressing.', ar: 'تقييم واضح ومتسق متوافق مع المعايير الأمريكية — حتى تفهم العائلات دائماً كيفية أداء أبنائها وتقدمهم.' },
    'acad.grade.scale.title':   { en: 'Letter Grade Scale',          ar: 'سلم الدرجات الحرفية' },
    'acad.grade.gpa.title':     { en: 'GPA & Assessment Types',      ar: 'المعدل التراكمي وأنواع التقييم' },
    'acad.grade.gpa.p':         { en: 'The American GPA system (0.0 – 4.0 scale) is used for High School. AP courses carry weighted GPA (up to 5.0), rewarding academic challenge.', ar: 'يُستخدم نظام GPA الأمريكي (مقياس 0.0 – 4.0) للمرحلة الثانوية. تحمل مقررات AP معدلاً تراكمياً مرجحاً (حتى 5.0)، يكافئ التحدي الأكاديمي.' },
    'acad.grade.breakdown.title':{ en: 'Assessment Breakdown',       ar: 'توزيع التقييم' },
    'acad.grade.ext.title':     { en: 'External Assessments',        ar: 'الاختبارات الخارجية' },
    'acad.grade.uni.title':     { en: 'University Pathways',         ar: 'المسارات الجامعية' },
    'acad.grade.uni.p':         { en: 'NAIS graduates are accepted to leading universities across North America, the UK, Europe, and Australia — with dedicated university counseling starting in Grade 9.', ar: 'يُقبل خريجو NAIS في الجامعات الرائدة عبر أمريكا الشمالية والمملكة المتحدة وأوروبا وأستراليا — مع إرشاد جامعي مخصص يبدأ من الصف التاسع.' },

    /* ── Academics page – Curriculum comparison ── */
    'acad.compare.label':      { en: 'Why Choose American?',         ar: 'لماذا تختار المنهج الأمريكي؟' },
    'acad.compare.h2':         { en: 'American Curriculum vs. <em>Other Systems</em>', ar: 'المنهج الأمريكي مقارنةً <em>بالأنظمة الأخرى</em>' },
    'acad.compare.th.feature': { en: 'Feature',                      ar: 'الميزة' },
    'acad.compare.th.american':{ en: 'American Curriculum',          ar: 'المنهج الأمريكي' },
    'acad.compare.th.british': { en: 'British Curriculum',           ar: 'المنهج البريطاني' },
    'acad.compare.th.ib':      { en: 'IB Programme',                 ar: 'برنامج IB' },

    /* ── Academics page – FAQ section ── */
    'acad.faq.label': { en: 'Parent Questions',    ar: 'أسئلة أولياء الأمور' },
    'acad.faq.h2':    { en: 'Common <em>Questions</em>', ar: 'الأسئلة <em>الشائعة</em>' },

    /* ── Academics page – MAP results ── */
    'acad.map.label': { en: 'MAP Growth Assessments',  ar: 'تقييمات نمو MAP' },
    'acad.map.h2':    { en: 'Measuring <em>Real Growth</em>', ar: 'قياس <em>النمو الحقيقي</em>' },
    'acad.map.intro': { en: 'MAP (Measures of Academic Progress) is an internationally recognised benchmark assessment used to track individual student growth each year.', ar: 'MAP (مقاييس التقدم الأكاديمي) هو تقييم معياري معترف به دولياً يُستخدم لتتبع نمو كل طالب على حدة سنوياً.' },

    /* ── Academics page – 3-year trend ── */
    'acad.trend.label': { en: '3-Year Attainment · 2022–23 → 2024–25', ar: 'الإنجاز لـ 3 سنوات · 2022–23 → 2024–25' },
    'acad.trend.h2':    { en: 'Consistent Growth <em>Year After Year</em>', ar: 'نمو ثابت <em>عاماً بعد عام</em>' },
    'acad.trend.intro': { en: 'Students performing at or above national norm. Every subject shows upward momentum across three consecutive academic years.', ar: 'طلاب يؤدون بمستوى المعيار الوطني أو أعلى. كل مادة تُظهر زخماً تصاعدياً عبر ثلاث سنوات دراسية متتالية.' },

    /* ── Academics page – External exams ── */
    'acad.extern.label': { en: 'AP · SAT · IELTS',  ar: 'AP · SAT · IELTS' },
    'acad.extern.h2':    { en: 'College Readiness & <em>International Excellence</em>', ar: 'الاستعداد الجامعي و<em>التميز الدولي</em>' },
    'acad.extern.intro': { en: 'High school students sit internationally recognised examinations that open doors to universities across the world.', ar: 'يُقدّم طلاب المرحلة الثانوية اختبارات معترفاً بها دولياً تفتح أبواب الجامعات في جميع أنحاء العالم.' },

    /* ── Academics page – University acceptance banner ── */
    'acad.uni.label': { en: 'University Acceptance — Class of 2025', ar: 'القبول الجامعي — دفعة 2025' },
    'acad.uni.p':     { en: 'Every NAIS graduate who applied was accepted to a university of their choice. Our counseling program begins in Grade 9 and leaves nothing to chance.', ar: 'كل خريج من NAIS تقدم بطلب قُبل في الجامعة التي اختارها. يبدأ برنامج الإرشاد لدينا في الصف التاسع ولا يترك شيئاً للصدفة.' },
    'acad.uni.btn':   { en: 'Apply for 2026–27',  ar: 'تقدّم لعام 2026–27' },

    /* ── General buttons ── */
    'btn.learn-more': { en: 'Learn More',           ar: 'اعرف المزيد' },

    /* ── PBL page quick links ── */
    'pbl.quick.what':    { en: 'What is PBL?',  ar: 'ما هو PBL؟' },
    'pbl.quick.pillars': { en: 'Core Pillars',  ar: 'الركائز الأساسية' },
    'pbl.quick.skills':  { en: 'Key Skills',    ar: 'المهارات الرئيسية' },
    'pbl.quick.process': { en: 'How It Works',  ar: 'كيف يعمل' },

    /* ── Academics page – grade card features (untranslated list items) ── */
    'acad.feat.kg.f1':    { en: 'Phonics & early literacy',         ar: 'الصوتيات والقراءة المبكرة' },
    'acad.feat.kg.f2':    { en: 'Numeracy & math concepts',         ar: 'الأعداد ومفاهيم الرياضيات' },
    'acad.feat.kg.f3':    { en: 'Arabic language introduction',     ar: 'مقدمة اللغة العربية' },
    'acad.feat.kg.f4':    { en: 'Arts, music & movement',           ar: 'الفنون والموسيقى والحركة' },
    'acad.feat.elem.f1':  { en: 'English Language Arts (ELA)',      ar: 'فنون اللغة الإنجليزية (ELA)' },
    'acad.feat.elem.f2':  { en: 'Mathematics (Common Core)',        ar: 'الرياضيات (المنهج الموحد)' },
    'acad.feat.elem.f3':  { en: 'Science & STEM projects',          ar: 'العلوم ومشاريع STEM' },
    'acad.feat.elem.f4':  { en: 'Arabic & Islamic Studies',         ar: 'اللغة العربية والدراسات الإسلامية' },
    'acad.feat.mid.f1':   { en: 'Pre-Algebra & Algebra 1',          ar: 'ما قبل الجبر والجبر 1' },
    'acad.feat.mid.f2':   { en: 'Life & Physical Sciences',         ar: 'علوم الحياة والعلوم الطبيعية' },
    'acad.feat.mid.f3':   { en: 'Project-based learning',           ar: 'التعلم القائم على المشاريع' },
    'acad.feat.mid.f4':   { en: 'Leadership development',           ar: 'تنمية القيادة' },
    'acad.feat.high.f1':  { en: '10+ AP Courses',                   ar: '10+ مقررات AP' },
    'acad.feat.high.f2':  { en: 'SAT/ACT preparation',              ar: 'الإعداد لاختبار SAT/ACT' },
    'acad.feat.high.f3':  { en: 'University counseling Gr 9–12',    ar: 'الإرشاد الجامعي الصف 9–12' },
    'acad.feat.high.f4':  { en: 'Lab Sciences (Bio, Chem, Physics)',ar: 'العلوم المعملية (أحياء، كيمياء، فيزياء)' },

    /* ── Admissions page extended nav keys ── */
    'nav.sub.calendar': { en: 'School Calendar', ar: 'التقويم الدراسي' },

    /* ── Academics page – comparison table rows ── */
    'acad.compare.row1.feat':  { en: 'Global University Recognition',   ar: 'الاعتراف الجامعي العالمي' },
    'acad.compare.row1.amer':  { en: 'Excellent — 50+ countries',       ar: 'ممتاز — 50+ دولة' },
    'acad.compare.row1.brit':  { en: 'Good — UK & Commonwealth',        ar: 'جيد — المملكة المتحدة ودول الكومنولث' },
    'acad.compare.row1.ib':    { en: 'Excellent',                       ar: 'ممتاز' },
    'acad.compare.row2.feat':  { en: 'University Credit (Pre-graduation)', ar: 'الساعات الجامعية (قبل التخرج)' },
    'acad.compare.row2.amer':  { en: 'Yes — via AP courses',            ar: 'نعم — عبر مقررات AP' },
    'acad.compare.row2.brit':  { en: 'No direct equivalent',            ar: 'لا يوجد ما يعادلها مباشرةً' },
    'acad.compare.row2.ib':    { en: 'Limited — via HL exams',          ar: 'محدود — عبر امتحانات HL' },
    'acad.compare.row3.feat':  { en: 'Subject Flexibility',             ar: 'مرونة المواد الدراسية' },
    'acad.compare.row3.amer':  { en: 'High — wide elective choice',     ar: 'عالية — خيارات اختيارية واسعة' },
    'acad.compare.row3.brit':  { en: 'Medium',                          ar: 'متوسطة' },
    'acad.compare.row3.ib':    { en: 'Medium — fixed structure',        ar: 'متوسطة — هيكل محدد' },
    'acad.compare.row4.feat':  { en: 'Student Wellbeing Focus',         ar: 'التركيز على رفاهية الطالب' },
    'acad.compare.row4.amer':  { en: 'Whole-child emphasis',            ar: 'تركيز على الطفل الكامل' },
    'acad.compare.row4.brit':  { en: 'Good',                            ar: 'جيد' },
    'acad.compare.row4.ib':    { en: 'Very strong',                     ar: 'قوي جداً' },
    'acad.compare.row5.feat':  { en: 'Arabic & Islamic Studies',        ar: 'اللغة العربية والدراسات الإسلامية' },
    'acad.compare.row5.amer':  { en: 'Integrated (UAE requirement)',     ar: 'مدمجة (متطلب إماراتي)' },
    'acad.compare.row5.brit':  { en: 'Integrated',                      ar: 'مدمجة' },
    'acad.compare.row5.ib':    { en: 'School dependent',                ar: 'يعتمد على المدرسة' },

    /* ── Academics page – FAQ items ── */
    'acad.faq.q1': { en: 'Is the American diploma recognized in UAE universities?', ar: 'هل الشهادة الأمريكية معترف بها في الجامعات الإماراتية؟' },
    'acad.faq.a1': { en: 'Yes. The American High School Diploma is fully recognized by all major UAE universities, including AUS, AUD, UAEU, Khalifa University, and NYU Abu Dhabi. It is also accepted globally across 50+ countries.', ar: 'نعم. تحظى شهادة الثانوية الأمريكية باعتراف كامل من جميع الجامعات الإماراتية الكبرى، بما فيها AUS وAUD وجامعة الإمارات وجامعة خليفة وNYU أبوظبي. كما تُقبل عالمياً في أكثر من 50 دولة.' },
    'acad.faq.q2': { en: 'How are students assessed — exams or coursework?', ar: 'كيف يُقيَّم الطلاب — بالامتحانات أم بالأعمال الدراسية؟' },
    'acad.faq.a2': { en: 'Assessment is a healthy balance of both: formative (ongoing classwork, quizzes) at 40%, summative (projects, tests) at 40%, and final examinations at 20%. This continuous approach reduces exam anxiety and gives a complete picture of each student\'s progress.', ar: 'التقييم توازن صحي بين الاثنين: تكويني (أعمال الفصل المستمرة والاختبارات القصيرة) بنسبة 40%، وتجميعي (المشاريع والاختبارات) بنسبة 40%، وامتحانات نهائية بنسبة 20%. يقلل هذا النهج المستمر من قلق الامتحانات ويعطي صورة كاملة عن تقدم كل طالب.' },
    'acad.faq.q3': { en: 'What is an AP course and is it mandatory?', ar: 'ما هو مقرر AP وهل هو إلزامي؟' },
    'acad.faq.a3': { en: 'AP (Advanced Placement) are College Board university-level courses available in Grades 10–12. They are optional but highly recommended for academically motivated students. A score of 3 or above (out of 5) on AP exams earns university credit — saving families tuition costs and time.', ar: 'مقررات AP (Advanced Placement) هي مقررات جامعية المستوى من College Board متاحة للصفوف 10–12. هي اختيارية لكن موصى بها بشدة للطلاب المتحمسين أكاديمياً. الحصول على درجة 3 أو أعلى (من 5) في امتحانات AP يكسب ساعات جامعية معتمدة — مما يوفر على العائلات التكاليف والوقت.' },
    'acad.faq.q4': { en: 'When does university counseling begin?', ar: 'متى يبدأ الإرشاد الجامعي؟' },
    'acad.faq.a4': { en: 'University counseling at NAIS begins in Grade 9. Our dedicated counselors guide students through course selection, extracurricular planning, personal statement writing, and application strategy — ensuring every student is fully prepared by Grade 12.', ar: 'يبدأ الإرشاد الجامعي في NAIS من الصف التاسع. يرشد مستشارونا المخصصون الطلاب في اختيار المواد وتخطيط الأنشطة اللاصفية وكتابة البيانات الشخصية واستراتيجية التقديم — مما يضمن إعداد كل طالب بالكامل بحلول الصف الثاني عشر.' },
    'acad.faq.all': { en: 'View All Parent FAQs',  ar: 'عرض جميع أسئلة الأهل الشائعة' },

    /* ── Academics page – MAP/results card content ── */
    'acad.map.card1.tag':   { en: 'Algebra 1 MAP · Grade 9',     ar: 'MAP الجبر 1 · الصف 9' },
    'acad.map.card1.h3':    { en: 'Strong Algebra Foundation',   ar: 'أساس جبر متين' },
    'acad.map.card1.p':     { en: 'Grade 9 students performed strongly in their first Algebra 1 MAP baseline — setting a clear benchmark for tracking future growth, aligned to California Standards.', ar: 'أظهر طلاب الصف التاسع أداءً قوياً في أول مستوى أساسي لـ MAP في الجبر 1 — مما وضع معياراً واضحاً لتتبع النمو المستقبلي، متوافقاً مع معايير كاليفورنيا.' },
    'acad.map.card1.s1lbl': { en: 'At/Above Norm',               ar: 'عند/فوق المعيار' },
    'acad.map.card1.s2lbl': { en: 'Above Norm',                  ar: 'فوق المعيار' },
    'acad.map.card1.s3lbl': { en: 'Top Quartile',                ar: 'الربع الأعلى' },
    'acad.map.card2.tag':   { en: 'Life Science MAP · Grade 9',  ar: 'MAP علوم الحياة · الصف 9' },
    'acad.map.card2.h3':    { en: 'Biology Baseline Established', ar: 'تأسيس خط أساس الأحياء' },
    'acad.map.card2.p':     { en: 'Life Science MAP results show a healthy first-year baseline aligned with Grade 8/9 Biology standards — directly informing targeted teaching for 2026.', ar: 'تُظهر نتائج MAP لعلوم الحياة خطاً أساسياً صحياً للسنة الأولى متوافقاً مع معايير الأحياء للصف 8/9 — يُعلم مباشرةً التعليم الموجه لعام 2026.' },
    'acad.map.card3.tag':   { en: 'MAP Progress Ratings',        ar: 'تقييمات تقدم MAP' },
    'acad.map.card3.h3':    { en: 'Outstanding Progress in Key Subjects', ar: 'تقدم متميز في المواد الرئيسية' },
    'acad.map.card3.p':     { en: 'NAIS students demonstrate exceptional learning velocity — rated Outstanding in Mathematics and Very Good in Science across all phases.', ar: 'يُظهر طلاب NAIS سرعة تعلم استثنائية — مُقيَّمة بـ"متميز" في الرياضيات و"جيد جداً" في العلوم عبر جميع المراحل.' },

    /* ── Academics page – trend labels ── */
    'acad.trend.sci.head':    { en: 'Science — At or Above National Norm',     ar: 'العلوم — عند المعيار الوطني أو أعلى' },
    'acad.trend.math.head':   { en: 'Mathematics — At or Above National Norm', ar: 'الرياضيات — عند المعيار الوطني أو أعلى' },
    'acad.trend.best':        { en: 'Best improvement',   ar: 'أفضل تحسن' },
    'acad.trend.steady':      { en: 'Steady growth',      ar: 'نمو ثابت' },
    'acad.trend.dsib.good':   { en: 'DSIB: Good',         ar: 'DSIB: جيد' },
    'acad.trend.high.perf':   { en: 'High performers ↑',  ar: 'الأداء العالي ↑' },
    'acad.trend.outstanding': { en: 'Outstanding',        ar: 'متميز' },
    'acad.trend.very.good':   { en: 'Very Good',          ar: 'جيد جداً' },

    /* ── Academics page – AP/SAT/IELTS result cards ── */
    'acad.res.ap.tag':   { en: 'Advanced Placement · Gr 10–12',  ar: 'التعليم المتقدم · الصف 10–12' },
    'acad.res.ap.h3':    { en: 'AP — University-Level Results',   ar: 'AP — نتائج على مستوى الجامعة' },
    'acad.res.ap.p':     { en: 'College Board examinations. A score of 3+ earns university credit worldwide. NAIS offers 10+ AP courses across sciences, humanities & technology.', ar: 'امتحانات College Board. درجة 3+ تكسب ساعات جامعية معتمدة عالمياً. تقدم NAIS أكثر من 10 مقررات AP في العلوم والإنسانيات والتكنولوجيا.' },
    'acad.res.ap.s1':    { en: 'Overall Pass Rate',   ar: 'معدل الاجتياز الكلي' },
    'acad.res.ap.s2':    { en: 'Psychology Pass',     ar: 'اجتياز علم النفس' },
    'acad.res.ap.s3':    { en: 'Comp Sci Pass',       ar: 'اجتياز علوم الحاسوب' },
    'acad.res.ap.psych': { en: 'AP Psychology',       ar: 'AP علم النفس' },
    'acad.res.ap.cs':    { en: 'AP Computer Science', ar: 'AP علوم الحاسوب' },
    'acad.res.ap.phys':  { en: 'AP Physics 1',        ar: 'AP فيزياء 1' },
    'acad.res.sat.tag':  { en: 'SAT · Grades 11–12',  ar: 'SAT · الصفوف 11–12' },
    'acad.res.sat.h3':   { en: 'SAT — 3 Years of Growth', ar: 'SAT — 3 سنوات من النمو' },
    'acad.res.sat.p':    { en: 'Consistent year-on-year improvement in both Reading/Writing and Math — with total scores rising 48 points in 2024–25 alone.', ar: 'تحسن سنوي ثابت في كلٍّ من القراءة/الكتابة والرياضيات — مع ارتفاع الدرجات الإجمالية 48 نقطة في 2024–25 وحدها.' },
    'acad.res.sat.avg':  { en: '2024–25 Average', ar: 'متوسط 2024–25' },
    'acad.res.sat.gain': { en: 'Points Gained',   ar: 'النقاط المكتسبة' },
    'acad.res.sat.ebrw': { en: 'EBRW Average',    ar: 'متوسط EBRW' },
    'acad.res.sat.math': { en: 'Math Average',    ar: 'متوسط الرياضيات' },
    'acad.res.sat.1200': { en: 'Scoring 1200+',   ar: 'النتيجة 1200+' },
    'acad.res.ielts.tag':    { en: 'IELTS · 2024–25', ar: 'IELTS · 2024–25' },
    'acad.res.ielts.h3':     { en: 'IELTS — University Entry Ready', ar: 'IELTS — جاهز لدخول الجامعة' },
    'acad.res.ielts.p':      { en: '78% of NAIS students achieve IELTS Band 6.0+ — the entry standard for most universities worldwide. 42% reach Band 7.0+ for top-ranked institutions.', ar: '78% من طلاب NAIS يحققون IELTS Band 6.0+ — معيار القبول في معظم الجامعات العالمية. 42% يصلون إلى Band 7.0+ للمؤسسات المصنفة عالياً.' },
    'acad.res.ielts.avg':    { en: 'Average Band',  ar: 'متوسط النطاق' },
    'acad.res.ielts.b6':     { en: 'Band 6.0+',     ar: 'النطاق 6.0+' },
    'acad.res.ielts.b7':     { en: 'Band 7.0+',     ar: 'النطاق 7.0+' },
    'acad.res.ielts.means':  { en: 'What This Means', ar: 'ما يعنيه هذا' },
    'acad.res.ielts.means.p':{ en: 'Band 6.0+ meets English-language requirements at universities including UCL, Manchester, Toronto, and UAE institutions.', ar: 'النطاق 6.0+ يستوفي متطلبات اللغة الإنجليزية في جامعات من بينها UCL ومانشستر وتورنتو والمؤسسات الإماراتية.' },
    'acad.res.psat.tag':     { en: 'PSAT — Grade 11 (2024–25)', ar: 'PSAT — الصف 11 (2024–25)' },
    'acad.res.psat.ebrw.sc': { en: 'EBRW Score (+22 pts from last year)', ar: 'درجة EBRW (+22 نقطة من العام الماضي)' },
    'acad.res.psat.math.sc': { en: 'Math Score (+23 pts from last year)',  ar: 'درجة الرياضيات (+23 نقطة من العام الماضي)' },
    'acad.res.psat.ebrw.bm': { en: 'EBRW Benchmark Met',  ar: 'تحقق المعيار EBRW' },
    'acad.res.psat.math.bm': { en: 'Math Benchmark Met',  ar: 'تحقق المعيار الرياضيات' },
    'acad.res.uni.tag':      { en: 'University Acceptance — 100%', ar: 'القبول الجامعي — 100%' },
    'acad.res.uni.sub':      { en: 'of graduates admitted to their chosen university', ar: 'من الخريجين مقبولون في الجامعة التي اختاروها' },
    'acad.res.uni.na':       { en: 'North America (US/Canada)', ar: 'أمريكا الشمالية (الولايات المتحدة/كندا)' },
    'acad.res.uni.uk':       { en: 'United Kingdom',            ar: 'المملكة المتحدة' },
    'acad.res.uni.aus':      { en: 'Australia',                 ar: 'أستراليا' },
    'acad.res.uni.uae':      { en: 'UAE & Europe',              ar: 'الإمارات وأوروبا' },
    'acad.res.hero.badge':   { en: 'Academic Year 2024–2025 · External Assessment Results', ar: 'العام الدراسي 2024–2025 · نتائج التقييمات الخارجية' },
    'acad.res.hero.h2':      { en: 'Our Students. Our <em style="color:var(--hub-gold);">Achievements.</em>', ar: 'طلابنا. <em style="color:var(--hub-gold);">إنجازاتنا.</em>' },
    'acad.res.hero.sub':     { en: 'Clear, independent evidence of academic progress at NAIS Dubai — measured through internationally recognised assessments.', ar: 'أدلة واضحة ومستقلة على التقدم الأكاديمي في NAIS دبي — مُقاسة عبر تقييمات معترف بها دولياً.' },
    'acad.res.hero.s1lbl':   { en: 'Science Growth<br/>3 Years',  ar: 'نمو العلوم<br/>3 سنوات' },
    'acad.res.hero.s2lbl':   { en: 'AP Pass Rate<br/>Score 3+',   ar: 'معدل اجتياز AP<br/>درجة 3+' },
    'acad.res.hero.s3lbl':   { en: 'SAT Average<br/>2024–25',     ar: 'متوسط SAT<br/>2024–25' },
    'acad.res.hero.s4lbl':   { en: 'IELTS Average<br/>Band Score', ar: 'متوسط IELTS<br/>النطاق' },
    'acad.res.hero.s5lbl':   { en: 'University Entry<br/>IELTS Band 6+', ar: 'دخول الجامعة<br/>IELTS Band 6+' },

    /* ── Academics page – progress bars ── */
    'acad.prog.bar.sci912':   { en: 'Science Progress (Gr 9–12)',     ar: 'تقدم العلوم (الصف 9–12)' },
    'acad.prog.bar.math912':  { en: 'Mathematics Progress (Gr 9–12)', ar: 'تقدم الرياضيات (الصف 9–12)' },
    'acad.prog.bar.sci15':    { en: 'Science Progress (Gr 1–5)',      ar: 'تقدم العلوم (الصف 1–5)' },
    'acad.prog.badge.vg':     { en: 'Very Good — 76%',      ar: 'جيد جداً — 76%' },
    'acad.prog.badge.out84':  { en: 'Outstanding — 84%',    ar: 'متميز — 84%' },
    'acad.prog.badge.out96':  { en: 'Outstanding — 96%',    ar: 'متميز — 96%' },

    /* ── Academics page – External assessment detail items ── */
    'acad.ext.map.name':    { en: 'MAP Assessment',          ar: 'تقييم MAP' },
    'acad.ext.map.desc':    { en: 'Measures academic growth across all grades — tracked yearly.', ar: 'يقيس النمو الأكاديمي عبر جميع الصفوف — مُتتبَّع سنوياً.' },
    'acad.ext.ap.name':     { en: 'AP Exams (Gr 10–12)',     ar: 'امتحانات AP (الصف 10–12)' },
    'acad.ext.ap.desc':     { en: 'College Board exams. Score 3+ earns university credit globally.', ar: 'امتحانات College Board. درجة 3+ تكسب ساعات جامعية معتمدة عالمياً.' },
    'acad.ext.sat.name':    { en: 'SAT (Gr 11–12)',          ar: 'SAT (الصف 11–12)' },
    'acad.ext.sat.desc':    { en: '2024–25 Average: 1,080. Year-on-year improvement of +48 pts.', ar: 'متوسط 2024–25: 1,080. تحسن سنوي بمقدار +48 نقطة.' },
    'acad.ext.ielts.name':  { en: 'IELTS',                   ar: 'IELTS' },
    'acad.ext.ielts.desc':  { en: '78% of students achieve Band 6.0+ (university entry level).', ar: '78% من الطلاب يحققون Band 6.0+ (مستوى دخول الجامعة).' },

    /* ── About page – additional keys ── */
    'about.topbar.phone':   { en: '+971 4 288 4844',          ar: '+971 4 288 4844' },
    'about.topbar.email':   { en: 'admissions@naischool.ae',  ar: 'admissions@naischool.ae' },

    /* ── Admissions page – hero & intro ── */
    'adm.hero.badge':    { en: 'Admissions 2026–2027',    ar: 'القبول 2026–2027' },

    /* ── General shared labels ── */
    'btn.apply-now':     { en: 'Apply Now',              ar: 'سجّل الآن' },
    'btn.contact':       { en: 'Contact Admissions',     ar: 'تواصل مع القبول' },
    'btn.view-all-faqs': { en: 'View All Parent FAQs',   ar: 'عرض جميع أسئلة الأهل' },
    'btn.book-tour':     { en: 'Book a Campus Tour',     ar: 'احجز جولة في الحرم' },
    'label.improved':    { en: '↑ improved',             ar: '↑ تحسّن' },
    'label.honor.roll':  { en: 'Honor Roll',             ar: 'قائمة الشرف' },
    'label.ap.bonus':    { en: 'AP Bonus',               ar: 'مكافأة AP' },
    'label.outstanding': { en: 'Outstanding',            ar: 'متميز' },
    'label.a.gpa':       { en: 'A · Outstanding',        ar: 'A · متميز' },
    'label.ap.gpa':      { en: 'AP Weighted GPA',        ar: 'المعدل المرجح AP' },
    'label.form.40':     { en: 'Formative (quizzes, classwork)', ar: 'تكويني (اختبارات قصيرة، أعمال الفصل)' },
    'label.summ.40':     { en: 'Summative (tests, projects)',    ar: 'تجميعي (اختبارات، مشاريع)' },
    'label.final.20':    { en: 'Final Examinations',             ar: 'الامتحانات النهائية' },
    'label.uni.toronto': { en: 'University of Toronto', ar: 'جامعة تورنتو' },
    'label.uni.nyu':     { en: 'New York University',   ar: 'جامعة نيويورك' },
    'label.uni.ucl':     { en: 'UCL London',             ar: 'UCL لندن' },
    'label.uni.mcgill':  { en: 'McGill University',     ar: 'جامعة ماكجيل' },
    'label.uni.kings':   { en: 'King\'s College London', ar: 'كلية كينغز لندن' },
    'label.uni.boston':  { en: 'Boston University',     ar: 'جامعة بوسطن' },
    'label.uni.accept':  { en: '+ 100% Acceptance Rate', ar: '+ معدل قبول 100%' },

    /* ── Grade scale labels ── */
    'acad.grade.a.plus': { en: 'Exceptional',    ar: 'استثنائي' },
    'acad.grade.a':      { en: 'Excellent',      ar: 'ممتاز' },
    'acad.grade.b':      { en: 'Above Average',  ar: 'فوق المتوسط' },
    'acad.grade.c':      { en: 'Average',        ar: 'متوسط' },
    'acad.grade.d':      { en: 'Below Average',  ar: 'دون المتوسط' },
    'acad.grade.f':      { en: 'Failing',        ar: 'راسب' },

    /* ── About page – hero ── */
    'about.hero.badge':    { en: 'Est. 2005 · KHDA Licensed · Cognia Accredited', ar: 'تأسست 2005 · مرخصة من KHDA · معتمدة من Cognia' },
    'about.hero.title':    { en: 'About North American<br/><em>International School</em>', ar: 'عن المدرسة الأمريكية<br/><em>الدولية الشمالية</em>' },
    'about.hero.sub':      { en: 'Inspiring excellence, building character, and shaping the global leaders of tomorrow — in the heart of Dubai.', ar: 'نُلهم التميز، ونبني الشخصية، ونصنع قادة الغد العالميين — في قلب دبي.' },
    'about.breadcrumb':    { en: 'About NAIS', ar: 'عن NAIS' },

    /* ── About page – mission / vision ── */
    'about.mission.label': { en: 'Our Purpose',          ar: 'غايتنا' },
    'about.mission.h2':    { en: 'Mission, Vision<br/><em>&amp; Philosophy</em>', ar: 'الرسالة والرؤية<br/><em>والفلسفة</em>' },
    'about.mission.p1':    { en: 'North American International School was founded on the belief that every child deserves an exceptional education that prepares them not just for university, but for life. Rooted in the American curriculum tradition, we have built a community of learners who are curious, compassionate, and ready for a changing world.', ar: 'تأسست المدرسة الأمريكية الدولية الشمالية على اعتقاد بأن كل طفل يستحق تعليماً استثنائياً يُعدّه ليس فقط للجامعة، بل للحياة. متجذّرون في تقاليد المنهج الأمريكي، بنينا مجتمعاً من المتعلمين الفضوليين الرحيمين المستعدين لعالم متغيّر.' },
    'about.mission.p2':    { en: 'Our approach combines academic rigor with genuine care for each student\'s social-emotional wellbeing. At NAIS, students are not numbers — they are individuals with unique gifts, passions, and potential. Our small class sizes, dedicated faculty, and supportive community create the ideal conditions for every student to thrive.', ar: 'يجمع نهجنا بين الصرامة الأكاديمية والرعاية الحقيقية للسلامة الاجتماعية والعاطفية لكل طالب. في NAIS، الطلاب ليسوا أرقاماً — بل أفراد بمواهب وشغف وإمكانات فريدة. فصولنا الصغيرة وكادرنا المتفاني ومجتمعنا الداعم يخلقون الظروف المثالية لازدهار كل طالب.' },
    'about.mission.h4a':   { en: 'Our Mission',          ar: 'رسالتنا' },
    'about.mission.stmt':  { en: '"To provide an exceptional American education that empowers students to achieve academic excellence, develop strong character, and become engaged global citizens."', ar: '"تقديم تعليم أمريكي استثنائي يُمكّن الطلاب من تحقيق التميز الأكاديمي وتنمية الشخصية القوية وأن يصبحوا مواطنين عالميين فاعلين."' },
    'about.vision.h4':     { en: 'Our Vision',           ar: 'رؤيتنا' },
    'about.vision.stmt':   { en: '"A community of learners who are intellectually curious, morally grounded, and equipped to make a positive difference in the world."', ar: '"مجتمع من المتعلمين المتشوّقين فكرياً والراسخين أخلاقياً والمجهّزين لإحداث فارق إيجابي في العالم."' },
    'about.badge.years':   { en: 'Years of Educational Excellence in Dubai', ar: 'عاماً من التميز التعليمي في دبي' },
    'about.vision.label':  { en: 'Vision',   ar: 'الرؤية' },
    'about.mission.tag':   { en: 'Mission',  ar: 'الرسالة' },

    /* ── About page – leadership ── */
    'about.leadership.label': { en: 'Our People',        ar: 'فريقنا' },
    'about.leadership.h2':    { en: 'School <em>Leadership</em>', ar: 'قيادة <em>المدرسة</em>' },
    'about.leadership.intro': { en: 'Our experienced, passionate leadership team sets the tone for excellence, care, and innovation across every aspect of school life at NAIS.', ar: 'يضع فريق قيادتنا المتمرس والمتحمس نغمة التميز والرعاية والابتكار في كل جانب من جوانب الحياة المدرسية في NAIS.' },
    'about.lead.label':    { en: 'School Leadership',  ar: 'قيادة المدرسة' },
    'about.lead.h2':       { en: 'Meet Our <em>Leadership</em>', ar: 'تعرّف على <em>قيادتنا</em>' },

    'leader.vp.hs.tag':    { en: 'Vice Principal',      ar: 'نائب المدير' },
    'leader.vp.hs.title':  { en: 'Vice Principal – High School, NAIS Dubai', ar: 'نائب مدير – المرحلة الثانوية، NAIS دبي' },
    'leader.vp.ms.title':  { en: 'Vice Principal – Middle School, NAIS Dubai', ar: 'نائب مدير – المرحلة المتوسطة، NAIS دبي' },
    'leader.vp.es.title':  { en: 'Vice Principal – Elementary School, NAIS Dubai', ar: 'نائب مدير – المرحلة الابتدائية، NAIS دبي' },
    'leader.hod.tag':      { en: 'Head of Department',  ar: 'رئيس القسم' },
    'leader.hod.le.title': { en: 'Head of Lower Elementary (KG–Grade 2), NAIS Dubai', ar: 'رئيس قسم الابتدائي الأدنى (KG–الصف 2)، NAIS دبي' },
    'leader.hod.ie.title': { en: 'Head of Inclusive Education, NAIS Dubai', ar: 'رئيس قسم التعليم الشامل، NAIS دبي' },
    'leader.dean.tag':     { en: 'Dean of Students',    ar: 'عميد الطلاب' },
    'leader.dean.title':   { en: 'Dean of Students, NAIS Dubai', ar: 'عميد الطلاب، NAIS دبي' },
    'leader.bio.read':     { en: 'Read Bio',            ar: 'اقرأ السيرة' },
    'leader.bio.hide':     { en: 'Hide Bio',            ar: 'إخفاء السيرة' },

    /* ── About page – DSIB inspection ── */
    'about.dsib.label':    { en: 'Official Inspection Results', ar: 'نتائج التفتيش الرسمية' },
    'about.dsib.h2':       { en: 'DSIB Inspection Report<br/><em>2023–2024</em>', ar: 'تقرير التفتيش DSIB<br/><em>2023–2024</em>' },
    'about.dsib.intro':    { en: 'The Dubai Schools Inspection Bureau (DSIB) independently evaluated NAIS Dubai and recognised significant strengths across teaching, curriculum, and student development.', ar: 'قيّم مكتب دبي للتفتيش المدرسي (DSIB) NAIS دبي بشكل مستقل واعترف بنقاط قوة مهمة في التدريس والمنهج وتنمية الطلاب.' },
    'about.dsib.ratings':  { en: 'Rating Highlights',   ar: 'أبرز التقييمات' },
    'about.dsib.quotes':   { en: 'Inspector Quotes',    ar: 'أقوال المفتشين' },
    'about.dsib.pill.good':   { en: 'Good',             ar: 'جيد' },
    'about.dsib.pill.vgood':  { en: 'Very Good',        ar: 'جيد جداً' },
    'about.dsib.cta.title':   { en: 'KHDA Licensed &amp; DSIB Evaluated', ar: 'مرخصة من KHDA ومُقيَّمة من DSIB' },
    'about.dsib.cta.sub':     { en: 'North American International School Dubai — 2023–2024 Academic Year', ar: 'المدرسة الأمريكية الدولية الشمالية، دبي — العام الدراسي 2023–2024' },
    'about.dsib.apply.btn':   { en: 'Apply for 2026–2027', ar: 'التقديم لعام 2026–2027' },

    /* ── About page – gallery bar ── */
    'about.gallery.h3':    { en: 'Explore Life at NAIS — Through Our Lens', ar: 'استكشف الحياة في NAIS — من خلال عدستنا' },
    'about.gallery.sub':   { en: '14 photos · 6 categories · Academic Year 2024–2025', ar: '14 صورة · 6 فئات · العام الدراسي 2024–2025' },
    'about.gallery.btn':   { en: 'View Full Gallery',   ar: 'عرض المعرض الكامل' },

    /* ── About page – campus ── */
    'about.campus.label':  { en: 'Our Environment',     ar: 'بيئتنا' },
    'about.campus.h2':     { en: 'A Campus Designed for<br/><em>Learning &amp; Growth</em>', ar: 'حرم مُصمَّم من أجل<br/><em>التعلم والنمو</em>' },
    'about.campus.intro':  { en: 'Our thoughtfully designed campus in Al Mizhar 1, Dubai provides students with inspiring spaces to learn, create, collaborate, and thrive.', ar: 'يوفر حرمنا المُصمَّم بعناية في المزهر 1 بدبي للطلاب مساحات ملهمة للتعلم والإبداع والتعاون والازدهار.' },
    'about.campus.class.h3':  { en: 'Modern Classrooms', ar: 'فصول دراسية حديثة' },
    'about.campus.class.p':   { en: 'Bright, technology-equipped classrooms with interactive whiteboards and collaborative learning spaces designed to inspire.', ar: 'فصول مضيئة مزوّدة بالتقنية ولوحات تفاعلية ومساحات تعلم تعاونية مُصمَّمة للإلهام.' },
    'about.campus.sports.h3': { en: 'Sports Facilities', ar: 'منشآت رياضية' },
    'about.campus.sports.p':  { en: 'Full gymnasium, outdoor courts, and a sports field supporting a wide range of athletic programs and physical education.', ar: 'صالة رياضية كاملة وملاعب خارجية وأرض رياضية تدعم مجموعة واسعة من البرامج الرياضية والتربية البدنية.' },
    'about.campus.lib.h3':    { en: 'Library &amp; Resource Centre', ar: 'المكتبة ومركز الموارد' },
    'about.campus.lib.p':     { en: 'A well-stocked library and digital resource centre providing students access to knowledge, research tools, and quiet study spaces.', ar: 'مكتبة غنية ومركز موارد رقمية يتيح للطلاب الوصول إلى المعرفة وأدوات البحث ومساحات الدراسة الهادئة.' },

    /* ── About page – student life ── */
    'about.life.label':    { en: 'Life at NAIS',         ar: 'الحياة في NAIS' },
    'about.life.h2':       { en: 'Beyond the <em>Classroom</em>', ar: 'ما وراء <em>الفصل الدراسي</em>' },
    'about.life.intro':    { en: 'At NAIS, education extends far beyond textbooks. Our rich co-curricular programs, vibrant arts scene, competitive sports, and community service initiatives develop the whole child.', ar: 'في NAIS، يمتد التعليم إلى ما هو أبعد بكثير من الكتب المدرسية. تُنمّي برامجنا المشتركة الغنية والمشهد الفني النابض والرياضات التنافسية ومبادرات خدمة المجتمع الطفل بأكمله.' },
    'about.life.athletics.h4': { en: 'Athletics &amp; Sports', ar: 'الرياضة والألعاب' },
    'about.life.athletics.p':  { en: 'Football, basketball, swimming, athletics and more — competitive teams with expert coaching.', ar: 'كرة القدم والسلة والسباحة وألعاب القوى وغيرها — فرق تنافسية مع تدريب متخصص.' },
    'about.life.arts.h4':      { en: 'Visual &amp; Performing Arts', ar: 'الفنون البصرية وفنون الأداء' },
    'about.life.arts.p':       { en: 'Drama, music, visual arts and dance — building creativity and self-expression in every student.', ar: 'المسرح والموسيقى والفنون البصرية والرقص — بناء الإبداع والتعبير عن الذات لدى كل طالب.' },
    'about.life.clubs.h4':     { en: 'Clubs &amp; Societies', ar: 'الأندية والجمعيات' },
    'about.life.clubs.p':      { en: '30+ student-led clubs spanning robotics, debate, journalism, MUN, coding, and more.', ar: 'أكثر من 30 نادياً يقودها الطلاب تشمل الروبوتيك والنقاش والصحافة وMUN والبرمجة وغيرها.' },
    'about.life.service.h4':   { en: 'Community Service', ar: 'خدمة المجتمع' },
    'about.life.service.p':    { en: 'Inspiring global citizenship through meaningful service projects locally and internationally.', ar: 'إلهام المواطنة العالمية من خلال مشاريع خدمة هادفة محلياً ودولياً.' },

    /* ── About page – testimonials ── */
    'about.test.label':    { en: 'Voices of Our Community', ar: 'أصوات مجتمعنا' },
    'about.test.h2':       { en: 'What Our Students <em>Say</em>', ar: 'ما يقوله <em>طلابنا</em>' },

    /* ── About page – accreditations ── */
    'about.accred.label':  { en: 'Recognition &amp; Trust', ar: 'الاعتراف والثقة' },
    'about.accred.h2':     { en: 'Accreditations &amp; <em>Affiliations</em>', ar: 'الاعتمادات <em>والانتماءات</em>' },
    'about.accred.intro':  { en: 'NAIS is recognized and accredited by leading educational bodies, ensuring our programs meet the highest international standards.', ar: 'تحظى NAIS بالاعتراف والاعتماد من هيئات تعليمية رائدة تضمن أن برامجنا تلبي أعلى المعايير الدولية.' },

    /* ── Admissions page – fees table ── */
    'adm.fees.note.head': { en: 'Please Note:', ar: 'يُرجى الملاحظة:' },
    'adm.docs.label':     { en: 'Required Documents', ar: 'المستندات المطلوبة' },
    'adm.docs.h2':        { en: 'What You\'ll <em>Need</em>', ar: 'ما <em>ستحتاجه</em>' },
    'adm.faq.label':      { en: 'Admissions FAQ',     ar: 'أسئلة القبول الشائعة' },
    'adm.faq.h2':         { en: 'Common <em>Questions</em>', ar: 'الأسئلة <em>الشائعة</em>' },

    /* ── Parent FAQ page ── */
    'faq.hero.badge': { en: 'Parent Resources · NAIS Dubai', ar: 'موارد أولياء الأمور · NAIS دبي' },
    'faq.hero.h1':    { en: 'Parent <em>FAQ</em>', ar: 'الأسئلة الشائعة <em>للأهل</em>' },

    /* ── Phase 4 Results page ── */
    'res4.hero.badge': { en: 'KHDA Phase 4 Inspection · 2024–2025', ar: 'تفتيش KHDA المرحلة 4 · 2024–2025' },
    'res4.hero.h1':    { en: 'Phase 4 <em>Inspection Results</em>', ar: 'نتائج <em>تفتيش المرحلة 4</em>' },

    /* ── Curriculum page extra ── */
    'cur.hero.badge': { en: 'American Curriculum · NAIS Dubai', ar: 'المنهج الأمريكي · NAIS دبي' },

    /* ── PBL page extra ── */
    'pbl.hero.badge': { en: 'Project-Based Learning · NAIS Dubai', ar: 'التعلم القائم على المشاريع · NAIS دبي' },
  };

  /* ═══════════════════════════════════════════════════
     CORE ENGINE
  ═══════════════════════════════════════════════════ */

  var STORAGE_KEY = 'nais_lang';
  var currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  /** Get translated string */
  function t(key) {
    var entry = T[key];
    if (!entry) return key;
    return entry[currentLang] || entry['en'] || key;
  }

  /** Apply translations to all [data-i18n] elements */
  function applyTranslations() {
    var lang = currentLang;

    /* Text content */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (val) el.textContent = val;
    });

    /* innerHTML (for <br> tags etc.) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var entry = T[key];
      if (entry) el.innerHTML = entry[lang] || entry['en'] || key;
    });

    /* Placeholders */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var val = t(key);
      if (val) el.placeholder = val;
    });

    /* Aria-labels */
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      var val = t(key);
      if (val) el.setAttribute('aria-label', val);
    });

    /* document.title */
    var pageTitleKey = document.body.getAttribute('data-page-title');
    if (pageTitleKey) {
      var entry = T[pageTitleKey];
      if (entry) document.title = entry[lang] || entry['en'];
    }
  }

  /** Switch direction & font for Arabic */
  function applyDir() {
    var html = document.documentElement;
    if (currentLang === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
      document.body.classList.add('lang-ar');
      document.body.classList.remove('lang-en');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
      document.body.classList.add('lang-en');
      document.body.classList.remove('lang-ar');
    }
  }

  /** Update all language switcher buttons */
  function updateSwitchers() {
    document.querySelectorAll('.lang-switcher').forEach(function (btn) {
      var targetLang = btn.getAttribute('data-lang');
      btn.classList.toggle('active', targetLang === currentLang);
      btn.setAttribute('aria-pressed', targetLang === currentLang ? 'true' : 'false');
    });
  }

  /** Full apply */
  function applyAll() {
    applyDir();
    applyTranslations();
    updateSwitchers();
  }

  /** Switch language */
  function switchLang(lang) {
    if (lang !== 'en' && lang !== 'ar') return;
    currentLang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyAll();

    /* Dispatch event for other scripts to hook into */
    document.dispatchEvent(new CustomEvent('nais:langchange', { detail: { lang: lang } }));
  }

  /* ═══════════════════════════════════════════════════
     BIND SWITCHER BUTTONS
  ═══════════════════════════════════════════════════ */
  function bindSwitchers() {
    document.querySelectorAll('.lang-switcher').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        if (lang) switchLang(lang);
      });
    });
  }

  /* ═══════════════════════════════════════════════════
     INIT
  ═══════════════════════════════════════════════════ */
  function init() {
    bindSwitchers();
    applyAll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Expose public API */
  window.NAIS_i18n = {
    t: t,
    switchLang: switchLang,
    getCurrentLang: function () { return currentLang; },
    applyAll: applyAll
  };

}());
