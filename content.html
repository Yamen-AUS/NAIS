/* ═══════════════════════════════════════════════════════════════
   NAIS CMS — Core JavaScript
   Auth, API helpers, sidebar, toasts, modals, utilities
   IDs match all 8 admin HTML pages exactly.
═══════════════════════════════════════════════════════════════ */
'use strict';

/* ── Session version: bump this to force-logout all stale sessions ── */
const SESSION_VERSION = '2.2';

/* ── Demo credentials (in production: replace with real auth) ── */
const DEMO_USERS = [
  { email:'admin@naisdubai.ae',       password:'Admin@2025!',      name:'System Administrator', role:'super_admin', avatar:'SA', department:'Executive'  },
  { email:'s.mitchell@naisdubai.ae',  password:'Principal@2025!',  name:'Sarah Mitchell',       role:'admin',      avatar:'SM', department:'Leadership' },
  { email:'j.thornton@naisdubai.ae',  password:'VPAcademic@2025!', name:'James Thornton',       role:'editor',     avatar:'JT', department:'Academics'  },
  { email:'l.hassan@naisdubai.ae',    password:'Admissions@2025!', name:'Layla Hassan',         role:'editor',     avatar:'LH', department:'Admissions' },
  { email:'t.mansour@naisdubai.ae',   password:'ITManager@2025!',  name:'Tariq Mansour',        role:'editor',     avatar:'TM', department:'IT'         },
  { email:'o.alrashidi@naisdubai.ae', password:'HODSports@2025!',  name:'Omar Al-Rashidi',      role:'viewer',     avatar:'OA', department:'PE'         }
];

const ROLE_LABELS = {
  super_admin: 'Super Admin', admin:    'Admin',
  editor:      'Editor',      viewer:   'Viewer',
  principal:   'Principal',   readonly: 'Read Only'
};

const ROLE_PERMISSIONS = {
  super_admin: { all: true },
  admin:       { content: true, staff: true, announcements: true, events: true, media: true, admissions: true, results: true, gallery: true, documents: true, seo: true, users: true },
  editor:      { content: true, staff: true, announcements: true, events: true, media: true, admissions: true, results: true, gallery: true, documents: true, seo: true },
  viewer:      { read: true },
  /* legacy role names kept for backward compat */
  principal:   { content: true, staff: true, announcements: true, events: true, media: true },
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
   ENVIRONMENT DETECTION
   GitHub Pages / any static host → use built-in
   static data store (read-only demo mode).
   Genspark preview → use live Table API.
═══════════════════════════════════════════════ */
const IS_STATIC_HOST = (() => {
  const h = window.location.hostname;
  // github.io, netlify.app, vercel.app, raw file, or any non-localhost
  // that is NOT the Genspark preview domain
  if (h === 'localhost' || h === '127.0.0.1' || h === '') return false;
  if (h.includes('genspark') || h.includes('app.genspark')) return false;
  return true; // github.io and all other static hosts
})();

/* ═══════════════════════════════════════════════
   STATIC DEMO DATA STORE
   Mirrors the seeded Table API data exactly.
   Used on GitHub Pages / static hosts only.
═══════════════════════════════════════════════ */
const STATIC_DB = (() => {
  const ts = () => new Date().toISOString();
  const id = (n) => `static-${n}`;

  const data = {

    cms_announcements: [
      { id: id('ann1'), title: 'NAIS Dubai Achieves Outstanding KHDA Rating 2024-2025', title_ar: 'نظام نايس دبي يحقق تقييم هيئة المعرفة والتنمية البشرية المتميز 2024-2025', body_en: 'We are delighted to announce that NAIS Dubai has been awarded an Outstanding rating by the Knowledge and Human Development Authority (KHDA) for the academic year 2024-2025. This achievement reflects the dedication of our staff, students, and parent community.', body_ar: 'يسعدنا الإعلان عن حصول نظام نايس دبي على تقييم متميز من هيئة المعرفة والتنمية البشرية للعام الدراسي 2024-2025.', category: 'general', priority: 'urgent', pinned: true, status: 'published', publish_date: '2025-01-12T08:00:00Z', expiry_date: '2026-01-12T08:00:00Z', audience: 'all', tags: ['KHDA','Outstanding','Achievement'], link_url: 'https://www.khda.gov.ae', image_url: '', created_by: 'Sarah Mitchell', created_at: '2025-01-12T08:00:00Z' },
      { id: id('ann2'), title: 'Open Day – Saturday 15 February 2025', title_ar: 'يوم الأبواب المفتوحة – السبت 15 فبراير 2025', body_en: 'Join us for our upcoming Open Day on Saturday 15 February 2025 from 9:00 AM to 1:00 PM. Tour our world-class facilities, meet our teachers, and learn about our British curriculum programmes for FS1 through Year 13.', body_ar: 'انضموا إلينا في يوم الأبواب المفتوحة القادم يوم السبت 15 فبراير 2025 من الساعة 9:00 صباحاً حتى 1:00 ظهراً.', category: 'admissions', priority: 'high', pinned: true, status: 'published', publish_date: '2025-01-22T08:00:00Z', expiry_date: '2025-02-15T13:00:00Z', audience: 'all', tags: ['Open Day','Admissions','Tour'], link_url: '', image_url: '', created_by: 'Layla Hassan', created_at: '2025-01-22T08:00:00Z' },
      { id: id('ann3'), title: 'End of Year Examination Schedule – June 2025', title_ar: 'جدول امتحانات نهاية العام – يونيو 2025', body_en: 'The End of Year examination timetable for all year groups (Year 1 – Year 13) has been published. Students should review their personal timetables on the Parent Portal.', body_ar: 'تم نشر جدول امتحانات نهاية العام لجميع المراحل الدراسية (السنة الأولى – السنة الثالثة عشرة).', category: 'academic', priority: 'high', pinned: false, status: 'published', publish_date: '2025-04-19T08:00:00Z', expiry_date: '2025-06-20T08:00:00Z', audience: 'students', tags: ['Exams','Timetable','Year End'], link_url: '', image_url: '', created_by: 'James Thornton', created_at: '2025-04-19T08:00:00Z' },
      { id: id('ann4'), title: 'Graduation Ceremony – Class of 2025', title_ar: 'حفل التخرج – دفعة 2025', body_en: 'We are proud to invite families of Year 13 students to the Class of 2025 Graduation Ceremony on Thursday 12 June 2025 at 6:00 PM in the school auditorium.', body_ar: 'نفخر بدعوة أسر طلاب السنة الثالثة عشرة لحضور حفل تخرج دفعة 2025 يوم الخميس 12 يونيو 2025 الساعة 6:00 مساءً في قاعة المدرسة.', category: 'events', priority: 'high', pinned: false, status: 'published', publish_date: '2025-05-07T08:00:00Z', expiry_date: '2025-06-12T22:00:00Z', audience: 'parents', tags: ['Graduation','Year 13','Ceremony'], link_url: '', image_url: '', created_by: 'Sarah Mitchell', created_at: '2025-05-07T08:00:00Z' },
      { id: id('ann5'), title: 'Summer School Enrolment Now Open', title_ar: 'التسجيل في المدرسة الصيفية متاح الآن', body_en: 'NAIS Dubai Summer School 2025 enrolment is now open for students aged 4-16. Programmes run from 7 July to 1 August 2025.', body_ar: 'يسعدنا الإعلان عن فتح باب التسجيل في المدرسة الصيفية لعام 2025 للطلاب من سن 4 إلى 16 عاماً.', category: 'academic', priority: 'normal', pinned: false, status: 'published', publish_date: '2025-03-18T08:00:00Z', expiry_date: '2025-08-01T08:00:00Z', audience: 'parents', tags: ['Summer School','Enrichment','Holidays'], link_url: '', image_url: '', created_by: 'Layla Hassan', created_at: '2025-03-18T08:00:00Z' },
      { id: id('ann6'), title: 'Annual Sports Day – 20 March 2025', title_ar: 'اليوم الرياضي السنوي – 20 مارس 2025', body_en: 'Our annual Sports Day will be held on Thursday 20 March 2025 at the NAIS Dubai main sports field. All students from FS2 to Year 13 will participate.', body_ar: 'سيُقام يومنا الرياضي السنوي يوم الخميس 20 مارس 2025 في الملعب الرياضي الرئيسي لنايس دبي.', category: 'sports', priority: 'normal', pinned: false, status: 'published', publish_date: '2025-03-06T08:00:00Z', expiry_date: '2025-03-21T08:00:00Z', audience: 'all', tags: ['Sports Day','Athletics','Community'], link_url: '', image_url: '', created_by: 'Omar Al-Rashidi', created_at: '2025-03-06T08:00:00Z' },
      { id: id('ann7'), title: '2025-2026 Admissions Now Open', title_ar: 'القبول للعام الدراسي 2025-2026 متاح الآن', body_en: 'Applications for the 2025-2026 academic year are now open for all year groups from FS1 to Year 12. We welcome students from all nationalities.', body_ar: 'بات التسجيل في العام الدراسي 2025-2026 متاحاً لجميع المراحل من الروضة الأولى وحتى السنة الثانية عشرة.', category: 'admissions', priority: 'high', pinned: false, status: 'published', publish_date: '2025-02-01T08:00:00Z', expiry_date: '2025-09-01T08:00:00Z', audience: 'all', tags: ['Admissions','Enrolment','2025-2026'], link_url: '', image_url: '', created_by: 'Layla Hassan', created_at: '2025-02-01T08:00:00Z' }
    ],

    cms_events: [
      { id: id('evt1'), title: 'NAIS Dubai Open Day – Spring 2025', title_ar: 'يوم الأبواب المفتوحة – ربيع 2025', description_en: 'Join us for our Spring Open Day and discover what makes NAIS Dubai one of the leading British curriculum schools in the UAE.', description_ar: 'انضموا إلينا في يوم الأبواب المفتوحة لربيع 2025 واكتشفوا ما يجعل نظام نايس دبي من أبرز المدارس ذات المناهج البريطانية في الإمارات.', event_date: '2025-02-15T09:00:00Z', end_date: '2025-02-15T13:00:00Z', start_time: '09:00', end_time: '13:00', location: 'NAIS Dubai Main Campus, JVC', location_ar: 'حرم نايس دبي الرئيسي، قرية جميرا الدائرية', category: 'admissions', capacity: 200, rsvp_url: 'https://www.naisdubai.ae/open-day', image_url: '', featured: true, status: 'completed', created_by: 'Layla Hassan', created_at: '2025-01-20T08:00:00Z' },
      { id: id('evt2'), title: 'Annual Sports Day 2025', title_ar: 'اليوم الرياضي السنوي 2025', description_en: 'The highlight of our sporting calendar! Students from FS2 to Year 13 compete across athletics, relay races, long jump, and team sports.', description_ar: 'أبرز فعاليات تقويمنا الرياضي! يتنافس الطلاب من المرحلة الثانية للروضة حتى السنة الثالثة عشرة في مختلف الفعاليات الرياضية.', event_date: '2025-03-20T07:30:00Z', end_date: '2025-03-20T13:00:00Z', start_time: '07:30', end_time: '13:00', location: 'NAIS Dubai Sports Field', location_ar: 'ملعب نايس دبي الرياضي', category: 'sports', capacity: 0, rsvp_url: '', image_url: '', featured: true, status: 'completed', created_by: 'Omar Al-Rashidi', created_at: '2025-03-01T08:00:00Z' },
      { id: id('evt3'), title: 'Secondary Science Fair 2025', title_ar: 'معرض العلوم للمرحلة الثانوية 2025', description_en: 'Year 7 to Year 12 students showcase their science projects covering topics from renewable energy and AI to biology and environmental science.', description_ar: 'يعرض طلاب السنوات 7 إلى 12 مشاريعهم العلمية التي تغطي مواضيع من الطاقة المتجددة والذكاء الاصطناعي إلى علم الأحياء والعلوم البيئية.', event_date: '2025-04-10T09:00:00Z', end_date: '2025-04-10T15:00:00Z', start_time: '09:00', end_time: '15:00', location: 'NAIS Dubai Multi-Purpose Hall', location_ar: 'قاعة نايس دبي متعددة الأغراض', category: 'academic', capacity: 300, rsvp_url: '', image_url: '', featured: false, status: 'completed', created_by: 'James Thornton', created_at: '2025-03-15T08:00:00Z' },
      { id: id('evt4'), title: 'Year 13 Graduation Ceremony – Class of 2025', title_ar: 'حفل تخرج السنة 13 – دفعة 2025', description_en: 'A formal celebration honouring the achievements of our Class of 2025 as they complete their A-Level studies.', description_ar: 'احتفال رسمي يُكرَّم فيه إنجازات خريجي دفعة 2025 عند إتمامهم دراسة مرحلة A-Level.', event_date: '2025-06-12T18:00:00Z', end_date: '2025-06-12T22:00:00Z', start_time: '18:00', end_time: '22:00', location: 'NAIS Dubai Auditorium', location_ar: 'قاعة نايس دبي الكبرى', category: 'celebration', capacity: 400, rsvp_url: 'https://www.naisdubai.ae/graduation-2025', image_url: '', featured: true, status: 'published', created_by: 'Sarah Mitchell', created_at: '2025-05-01T08:00:00Z' },
      { id: id('evt5'), title: 'Parent-Teacher Consultation Day – Term 3', title_ar: 'يوم التواصل بين أولياء الأمور والمعلمين – الفصل الثالث', description_en: 'Scheduled one-to-one meetings between subject teachers and parents to discuss academic progress and predicted grades.', description_ar: 'اجتماعات فردية مجدولة بين مدرسي المواد وأولياء الأمور لمناقشة التقدم الأكاديمي والدرجات المتوقعة في IGCSE وA-Level.', event_date: '2025-05-08T08:00:00Z', end_date: '2025-05-08T17:00:00Z', start_time: '08:00', end_time: '17:00', location: 'NAIS Dubai – All Classrooms', location_ar: 'نايس دبي – جميع الفصول الدراسية', category: 'academic', capacity: 0, rsvp_url: 'https://www.naisdubai.ae/parent-portal', image_url: '', featured: false, status: 'published', created_by: 'James Thornton', created_at: '2025-04-20T08:00:00Z' },
      { id: id('evt6'), title: "Creative Arts Evening – 'Illuminate'", title_ar: "أمسية الفنون الإبداعية – 'إضاءة'", description_en: "An evening showcasing the creative talents of NAIS Dubai students including live music, drama, visual art exhibitions, and dance.", description_ar: 'أمسية تعرض مواهب طلاب نايس دبي الإبداعية، تتضمن عروضاً موسيقية حية ومسرحيات قصيرة ومعارض للفنون البصرية ورقصات.', event_date: '2025-05-22T18:30:00Z', end_date: '2025-05-22T21:00:00Z', start_time: '18:30', end_time: '21:00', location: 'NAIS Dubai Auditorium & Art Galleries', location_ar: 'قاعة نايس دبي الكبرى وصالات الفنون', category: 'arts', capacity: 350, rsvp_url: '', image_url: '', featured: true, status: 'published', created_by: 'Sarah Mitchell', created_at: '2025-05-01T08:00:00Z' },
      { id: id('evt7'), title: 'Admissions Open Morning – September 2025 Intake', title_ar: 'صباح القبول المفتوح – دفعة سبتمبر 2025', description_en: 'Families interested in enrolling for September 2025 are invited to visit our campus for a guided tour, curriculum overview, and Q&A.', description_ar: 'تُدعى الأسر المهتمة بالالتحاق في سبتمبر 2025 لزيارة حرمنا الجامعي لجولة إرشادية ونظرة عامة على المناهج وجلسة أسئلة وأجوبة.', event_date: '2025-06-28T09:00:00Z', end_date: '2025-06-28T12:00:00Z', start_time: '09:00', end_time: '12:00', location: 'NAIS Dubai Reception & Main Hall', location_ar: 'استقبال نايس دبي والقاعة الرئيسية', category: 'admissions', capacity: 80, rsvp_url: 'https://www.naisdubai.ae/open-morning', image_url: '', featured: false, status: 'published', created_by: 'Layla Hassan', created_at: '2025-05-15T08:00:00Z' }
    ],

    cms_staff: [
      { id: id('stf1'), name_en: 'Sarah Mitchell', name_ar: 'سارة ميتشيل', title_en: 'Principal', title_ar: 'مديرة المدرسة', department: 'leadership', bio_en: 'Sarah Mitchell has over 22 years of experience in British international education. She joined NAIS Dubai in 2018 and has led the school to achieve Outstanding KHDA ratings for three consecutive years.', bio_ar: 'تمتلك سارة ميتشيل أكثر من 22 عاماً من الخبرة في التعليم البريطاني الدولي. انضمت إلى نظام نايس دبي عام 2018.', email: 's.mitchell@naisdubai.ae', phone: '+971 4 XXX 0001', nationality: 'British', years_experience: 22, photo_url: '', linkedin_url: '', display_order: 1, show_about: true, show_home: true, show_careers: false, featured: true, tag: 'Leadership', created_at: '2024-09-01T08:00:00Z' },
      { id: id('stf2'), name_en: 'James Thornton', name_ar: 'جيمس ثورنتون', title_en: 'Vice Principal – Academic', title_ar: 'نائب المدير – الشؤون الأكاديمية', department: 'leadership', bio_en: 'James Thornton oversees curriculum delivery and academic standards across all year groups. With 18 years in education, he specialises in IGCSE and A-Level programme management.', bio_ar: 'يشرف جيمس ثورنتون على تقديم المناهج والمعايير الأكاديمية في جميع المراحل الدراسية.', email: 'j.thornton@naisdubai.ae', phone: '+971 4 XXX 0002', nationality: 'British', years_experience: 18, photo_url: '', linkedin_url: '', display_order: 2, show_about: true, show_home: false, show_careers: false, featured: true, tag: 'Leadership', created_at: '2024-09-01T08:00:00Z' },
      { id: id('stf3'), name_en: 'Layla Hassan', name_ar: 'ليلى حسن', title_en: 'Head of Admissions', title_ar: 'رئيسة قسم القبول', department: 'admin', bio_en: 'Layla Hassan leads the NAIS Dubai admissions function, managing the full student journey from inquiry through enrolment. Fluent in Arabic and English.', bio_ar: 'تقود ليلى حسن وظيفة القبول في نايس دبي، وتدير الرحلة الكاملة للطالب من الاستفسار حتى التسجيل.', email: 'l.hassan@naisdubai.ae', phone: '+971 4 XXX 0003', nationality: 'Emirati', years_experience: 10, photo_url: '', linkedin_url: '', display_order: 3, show_about: true, show_home: false, show_careers: true, featured: false, tag: 'Admissions', created_at: '2024-09-01T08:00:00Z' },
      { id: id('stf4'), name_en: 'Omar Al-Rashidi', name_ar: 'عمر الراشدي', title_en: 'Head of Physical Education', title_ar: 'رئيس قسم التربية البدنية', department: 'academic', bio_en: 'Omar Al-Rashidi has been leading the PE department at NAIS Dubai since 2019. A former UAE national athletics coach, he has built a competitive and inclusive sports programme.', bio_ar: 'يقود عمر الراشدي قسم التربية البدنية في نايس دبي منذ 2019. وهو مدرب ألعاب القوى الوطني الإماراتي السابق.', email: 'o.alrashidi@naisdubai.ae', phone: '+971 4 XXX 0004', nationality: 'Emirati', years_experience: 15, photo_url: '', linkedin_url: '', display_order: 4, show_about: true, show_home: false, show_careers: false, featured: false, tag: 'HOD', created_at: '2024-09-01T08:00:00Z' },
      { id: id('stf5'), name_en: 'Priya Nair', name_ar: 'بريا ناير', title_en: 'Head of Science', title_ar: 'رئيسة قسم العلوم', department: 'academic', bio_en: 'Priya Nair leads the Science department, teaching IGCSE and A-Level Biology and Chemistry. She holds a PhD in Biochemistry from Imperial College London.', bio_ar: 'تقود بريا ناير قسم العلوم، وتدرّس مادتَي الأحياء والكيمياء لمرحلتَي IGCSE وA-Level.', email: 'p.nair@naisdubai.ae', phone: '+971 4 XXX 0005', nationality: 'Indian', years_experience: 14, photo_url: '', linkedin_url: '', display_order: 5, show_about: true, show_home: false, show_careers: true, featured: false, tag: 'HOD', created_at: '2024-09-01T08:00:00Z' },
      { id: id('stf6'), name_en: 'Mohammed Al-Farsi', name_ar: 'محمد الفارسي', title_en: 'Head of Arabic & Islamic Studies', title_ar: 'رئيس قسم اللغة العربية والتربية الإسلامية', department: 'academic', bio_en: 'Mohammed Al-Farsi oversees the Arabic Language and Islamic Studies curriculum from FS1 to Year 13. He is committed to preserving Arabic cultural heritage.', bio_ar: 'يشرف محمد الفارسي على مناهج اللغة العربية والتربية الإسلامية من الروضة الأولى حتى الصف الثالث عشر.', email: 'm.alfarsi@naisdubai.ae', phone: '+971 4 XXX 0006', nationality: 'Emirati', years_experience: 12, photo_url: '', linkedin_url: '', display_order: 6, show_about: true, show_home: false, show_careers: false, featured: false, tag: 'HOD', created_at: '2024-09-01T08:00:00Z' },
      { id: id('stf7'), name_en: 'Emily Clarke', name_ar: 'إيميلي كلارك', title_en: 'SENCO & Inclusion Lead', title_ar: 'منسقة التعليم الخاص وقائدة الدمج', department: 'support', bio_en: 'Emily Clarke leads the Special Educational Needs and Inclusion programme at NAIS Dubai. She works closely with families, teachers, and external specialists.', bio_ar: 'تقود إيميلي كلارك برنامج الاحتياجات التعليمية الخاصة والدمج في نايس دبي.', email: 'e.clarke@naisdubai.ae', phone: '+971 4 XXX 0007', nationality: 'British', years_experience: 16, photo_url: '', linkedin_url: '', display_order: 7, show_about: true, show_home: false, show_careers: true, featured: false, tag: 'Support', created_at: '2024-09-01T08:00:00Z' },
      { id: id('stf8'), name_en: 'Tariq Mansour', name_ar: 'طارق منصور', title_en: 'IT Manager & Digital Learning Lead', title_ar: 'مدير تقنية المعلومات وقائد التعلم الرقمي', department: 'it', bio_en: 'Tariq Mansour manages all IT infrastructure and digital learning platforms at NAIS Dubai. He leads the school\'s digital transformation strategy.', bio_ar: 'يدير طارق منصور جميع البنية التحتية لتقنية المعلومات ومنصات التعلم الرقمي في نايس دبي.', email: 't.mansour@naisdubai.ae', phone: '+971 4 XXX 0008', nationality: 'Lebanese', years_experience: 11, photo_url: '', linkedin_url: '', display_order: 8, show_about: false, show_home: false, show_careers: true, featured: false, tag: 'IT', created_at: '2024-09-01T08:00:00Z' }
    ],

    cms_admissions: [
      { id: id('adm1'), student_name: 'Aisha Al-Mansouri', dob: '2015-03-14', nationality: 'Emirati', applying_grade: 'Year 5', parent_name: 'Khalid Al-Mansouri', parent_email: 'khalid.almansouri@gmail.com', parent_phone: '+971 50 111 2233', whatsapp: '+971 50 111 2233', status: 'enrolled', stage: 'enrolled', notes: 'Strong academic background. Sibling already enrolled in Year 8.', submitted_at: '2025-01-08T10:30:00Z', assigned_to: 'Layla Hassan', created_at: '2025-01-08T10:30:00Z' },
      { id: id('adm2'), student_name: 'Lucas Fernandez', dob: '2012-07-22', nationality: 'Spanish', applying_grade: 'Year 8', parent_name: 'Maria Fernandez', parent_email: 'm.fernandez@outlook.com', parent_phone: '+971 55 234 5678', whatsapp: '+971 55 234 5678', status: 'offered', stage: 'decision', notes: 'Family relocating from Madrid. Strong Maths results from previous school.', submitted_at: '2025-01-15T09:00:00Z', assigned_to: 'Layla Hassan', created_at: '2025-01-15T09:00:00Z' },
      { id: id('adm3'), student_name: 'Fatima Zahra Benali', dob: '2017-11-05', nationality: 'Moroccan', applying_grade: 'Year 2', parent_name: 'Youssef Benali', parent_email: 'y.benali@eim.ae', parent_phone: '+971 52 345 6789', whatsapp: '+971 52 345 6789', status: 'interview', stage: 'assessment', notes: 'Arabic-speaking family. Child is bilingual (Arabic/French). Place available in Year 2.', submitted_at: '2025-01-18T14:00:00Z', assigned_to: 'Layla Hassan', created_at: '2025-01-18T14:00:00Z' },
      { id: id('adm4'), student_name: 'Ethan Whitmore', dob: '2010-05-30', nationality: 'British', applying_grade: 'Year 10', parent_name: 'Richard Whitmore', parent_email: 'r.whitmore@bpgulf.com', parent_phone: '+971 50 456 7890', whatsapp: '+971 50 456 7890', status: 'reviewing', stage: 'application', notes: 'Family arriving from UK in March 2025. Requesting IGCSE entry mid-year.', submitted_at: '2025-01-20T11:00:00Z', assigned_to: 'Layla Hassan', created_at: '2025-01-20T11:00:00Z' },
      { id: id('adm5'), student_name: 'Nour Al-Rashid', dob: '2016-08-19', nationality: 'Saudi', applying_grade: 'Year 4', parent_name: 'Reem Al-Rashid', parent_email: 'reem.alrashid@gmail.com', parent_phone: '+971 54 567 8901', whatsapp: '+971 54 567 8901', status: 'enrolled', stage: 'enrolled', notes: 'Enrolled for Term 2 start. SEN screening requested.', submitted_at: '2025-01-05T08:30:00Z', assigned_to: 'Layla Hassan', created_at: '2025-01-05T08:30:00Z' },
      { id: id('adm6'), student_name: 'Arjun Mehta', dob: '2014-12-01', nationality: 'Indian', applying_grade: 'Year 6', parent_name: 'Sunil Mehta', parent_email: 'sunil.mehta@tcs.com', parent_phone: '+971 55 678 9012', whatsapp: '+971 55 678 9012', status: 'new', stage: 'inquiry', notes: 'Initial inquiry received via website. Information pack sent by email.', submitted_at: '2025-01-28T16:00:00Z', assigned_to: 'Layla Hassan', created_at: '2025-01-28T16:00:00Z' },
      { id: id('adm7'), student_name: 'Sofia Andersen', dob: '2009-04-15', nationality: 'Danish', applying_grade: 'Year 11', parent_name: 'Lars Andersen', parent_email: 'l.andersen@maersk.ae', parent_phone: '+971 50 789 0123', whatsapp: '+971 50 789 0123', status: 'waitlisted', stage: 'decision', notes: 'First on waitlist. No space currently available. Family informed.', submitted_at: '2025-01-10T13:00:00Z', assigned_to: 'Layla Hassan', created_at: '2025-01-10T13:00:00Z' },
      { id: id('adm8'), student_name: 'Omar Hassan Al-Zabi', dob: '2013-09-27', nationality: 'Emirati', applying_grade: 'Year 7', parent_name: 'Hassan Al-Zabi', parent_email: 'h.alzabi@adnoc.ae', parent_phone: '+971 52 890 1234', whatsapp: '+971 52 890 1234', status: 'interview', stage: 'assessment', notes: 'ADNOC employee family. Interview with VP Academic scheduled. Excellent previous results.', submitted_at: '2025-01-22T10:00:00Z', assigned_to: 'Layla Hassan', created_at: '2025-01-22T10:00:00Z' }
    ],

    cms_results: [
      { id: id('res1'), title: 'IGCSE Results 2024', exam_type: 'IGCSE', academic_year: '2023-2024', grade_level: 'Year 10 & 11', publish_date: '2024-08-15T08:00:00Z', status: 'published', document_url: '', summary: 'NAIS Dubai students achieved outstanding IGCSE results for the 2023-2024 academic year. 97% of students achieved grades A*-C, with 68% achieving A* or A grades.', pass_rate: 97, created_by: 'James Thornton', created_at: '2024-08-15T08:00:00Z' },
      { id: id('res2'), title: 'A-Level Results 2024 – Class of 2024', exam_type: 'A-Level', academic_year: '2023-2024', grade_level: 'Year 12 & 13', publish_date: '2024-08-13T08:00:00Z', status: 'published', document_url: '', summary: 'NAIS Dubai A-Level Class of 2024 achieved outstanding results. 99% pass rate overall, with 72% of entries graded A*-B. 100% of Year 13 students progressed to their first or second choice universities.', pass_rate: 99, created_by: 'James Thornton', created_at: '2024-08-13T08:00:00Z' },
      { id: id('res3'), title: 'MAP Assessment Results – Autumn 2024', exam_type: 'MAP', academic_year: '2024-2025', grade_level: 'Year 2 – Year 9', publish_date: '2025-02-10T08:00:00Z', status: 'published', document_url: '', summary: 'Autumn 2024 MAP assessments completed for Years 2-9. Results show 78% of students performing above the international norm in Mathematics and 74% in Reading.', pass_rate: 0, created_by: 'James Thornton', created_at: '2025-02-10T08:00:00Z' },
      { id: id('res4'), title: 'PSAT Results – October 2024', exam_type: 'PSAT', academic_year: '2024-2025', grade_level: 'Year 10 & 11', publish_date: '2025-01-20T08:00:00Z', status: 'published', document_url: '', summary: 'Year 10 and Year 11 students sat the PSAT 10 and PSAT/NMSQT in October 2024. 12 students qualified for the National Merit Scholarship Programme recognition.', pass_rate: 0, created_by: 'James Thornton', created_at: '2025-01-20T08:00:00Z' },
      { id: id('res5'), title: 'Term 2 Internal Assessment Results 2024-2025', exam_type: 'Internal', academic_year: '2024-2025', grade_level: 'All Year Groups', publish_date: '2025-04-05T08:00:00Z', status: 'published', document_url: '', summary: 'Term 2 internal assessment results for all year groups (FS2 to Year 13) are now available. 91% of students met or exceeded their individual target grades.', pass_rate: 91, created_by: 'James Thornton', created_at: '2025-04-05T08:00:00Z' }
    ],

    cms_gallery: [
      { id: id('gal1'), title: 'Open Day – Campus Tour', image_url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200', thumb_url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400', category: 'events', album: 'Open Day Spring 2025', caption: 'Families touring the NAIS Dubai campus during our Spring Open Day.', date_taken: '2025-02-15T10:00:00Z', status: 'published', featured: true, sort_order: 1, tags: ['Open Day','Campus','Families'], created_at: '2025-02-16T08:00:00Z' },
      { id: id('gal2'), title: 'Sports Day – Relay Race', image_url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200', thumb_url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400', category: 'sports', album: 'Sports Day 2025', caption: 'Students competing in the 100m relay race on Sports Day 2025.', date_taken: '2025-03-20T08:30:00Z', status: 'published', featured: true, sort_order: 2, tags: ['Sports Day','Athletics','Relay'], created_at: '2025-03-21T08:00:00Z' },
      { id: id('gal3'), title: 'Sports Day – Tug of War', image_url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200', thumb_url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', category: 'sports', album: 'Sports Day 2025', caption: 'Annual tug-of-war competition between Year 9 and Year 10 teams.', date_taken: '2025-03-20T10:00:00Z', status: 'published', featured: false, sort_order: 3, tags: ['Sports Day','Team Spirit'], created_at: '2025-03-21T08:00:00Z' },
      { id: id('gal4'), title: 'Science Fair – Solar Energy Project', image_url: 'https://images.unsplash.com/photo-1532094349884-543559059b9b?w=1200', thumb_url: 'https://images.unsplash.com/photo-1532094349884-543559059b9b?w=400', category: 'academics', album: 'Science Fair 2025', caption: 'Year 10 students presenting their renewable energy project using solar panels.', date_taken: '2025-04-10T11:00:00Z', status: 'published', featured: true, sort_order: 4, tags: ['Science Fair','STEM','Year 10'], created_at: '2025-04-11T08:00:00Z' },
      { id: id('gal5'), title: 'Creative Arts Evening – Music Performance', image_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200', thumb_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400', category: 'arts', album: 'Creative Arts Evening 2025', caption: 'Year 8 students performing an original composition at the Illuminate Creative Arts Evening.', date_taken: '2025-05-22T19:30:00Z', status: 'published', featured: true, sort_order: 5, tags: ['Arts Evening','Music','Performance'], created_at: '2025-05-23T08:00:00Z' },
      { id: id('gal6'), title: 'Library – Group Study Session', image_url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200', thumb_url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400', category: 'campus', album: 'Campus Life', caption: 'Students collaborating on a group project in NAIS Dubai\'s modern library.', date_taken: '2025-03-05T13:00:00Z', status: 'published', featured: false, sort_order: 6, tags: ['Campus','Library','Learning'], created_at: '2025-03-06T08:00:00Z' },
      { id: id('gal7'), title: 'UAE National Day Celebration', image_url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200', thumb_url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400', category: 'community', album: 'Community Events', caption: 'NAIS Dubai parents and staff celebrating UAE National Day.', date_taken: '2024-12-02T09:00:00Z', status: 'published', featured: false, sort_order: 7, tags: ['UAE National Day','Community','Culture'], created_at: '2024-12-03T08:00:00Z' },
      { id: id('gal8'), title: 'Graduation Ceremony – Class of 2025', image_url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200', thumb_url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400', category: 'events', album: 'Graduation 2025', caption: 'Year 13 graduates celebrating at the Class of 2025 graduation ceremony.', date_taken: '2025-06-12T20:00:00Z', status: 'draft', featured: true, sort_order: 8, tags: ['Graduation','Year 13','Class of 2025'], created_at: '2025-06-13T08:00:00Z' }
    ],

    cms_documents: [
      { id: id('doc1'), title: 'NAIS Dubai Student & Parent Handbook 2024-2025', doc_type: 'handbook', file_url: '', file_size: '4.2 MB', file_format: 'PDF', audience: 'all', status: 'published', upload_date: '2024-09-01T08:00:00Z', academic_year: '2024-2025', uploaded_by: 'Sarah Mitchell', download_count: 342, created_at: '2024-09-01T08:00:00Z' },
      { id: id('doc2'), title: 'Academic Calendar 2024-2025', doc_type: 'calendar', file_url: '', file_size: '1.1 MB', file_format: 'PDF', audience: 'all', status: 'published', upload_date: '2024-08-20T08:00:00Z', academic_year: '2024-2025', uploaded_by: 'James Thornton', download_count: 518, created_at: '2024-08-20T08:00:00Z' },
      { id: id('doc3'), title: 'Admissions Application Form – 2025-2026', doc_type: 'form', file_url: '', file_size: '380 KB', file_format: 'PDF', audience: 'parents', status: 'published', upload_date: '2025-01-10T08:00:00Z', academic_year: '2024-2025', uploaded_by: 'Layla Hassan', download_count: 87, created_at: '2025-01-10T08:00:00Z' },
      { id: id('doc4'), title: 'Safeguarding & Child Protection Policy 2024-2025', doc_type: 'policy', file_url: '', file_size: '2.8 MB', file_format: 'PDF', audience: 'all', status: 'published', upload_date: '2024-09-05T08:00:00Z', academic_year: '2024-2025', uploaded_by: 'Sarah Mitchell', download_count: 124, created_at: '2024-09-05T08:00:00Z' },
      { id: id('doc5'), title: 'Medical Information & Consent Form', doc_type: 'form', file_url: '', file_size: '240 KB', file_format: 'DOCX', audience: 'parents', status: 'published', upload_date: '2024-09-01T08:00:00Z', academic_year: '2024-2025', uploaded_by: 'Emily Clarke', download_count: 65, created_at: '2024-09-01T08:00:00Z' },
      { id: id('doc6'), title: 'Staff Code of Conduct & Professional Standards 2024-2025', doc_type: 'policy', file_url: '', file_size: '1.6 MB', file_format: 'PDF', audience: 'staff', status: 'published', upload_date: '2024-09-03T08:00:00Z', academic_year: '2024-2025', uploaded_by: 'Sarah Mitchell', download_count: 58, created_at: '2024-09-03T08:00:00Z' },
      { id: id('doc7'), title: 'KHDA School Inspection Report 2024-2025', doc_type: 'report', file_url: '', file_size: '3.4 MB', file_format: 'PDF', audience: 'parents', status: 'published', upload_date: '2025-01-20T08:00:00Z', academic_year: '2024-2025', uploaded_by: 'Sarah Mitchell', download_count: 201, created_at: '2025-01-20T08:00:00Z' }
    ],

    cms_seo: [
      { id: id('seo1'),  page_slug: '/',          page_name: 'Homepage',          meta_title: 'NAIS Dubai | Outstanding British Curriculum School in Dubai',       meta_description: 'NAIS Dubai is a leading British curriculum school in Dubai, UAE, offering outstanding education from FS1 to Year 13. KHDA Outstanding rated.',            focus_keyword: 'British school Dubai',            og_image: '', canonical_url: 'https://www.naisdubai.ae/',         no_index: false, schema_type: 'Organization', seo_score: 92, last_updated: '2025-04-01T08:00:00Z', created_at: '2025-01-01T08:00:00Z' },
      { id: id('seo2'),  page_slug: '/about',      page_name: 'About Us',          meta_title: 'About NAIS Dubai | Our Mission, Values & Leadership',              meta_description: 'Learn about NAIS Dubai\'s mission, values, leadership team, and our commitment to delivering world-class British education in the heart of Dubai.',        focus_keyword: 'about NAIS Dubai',                og_image: '', canonical_url: 'https://www.naisdubai.ae/about',     no_index: false, schema_type: 'WebPage',      seo_score: 85, last_updated: '2025-03-15T08:00:00Z', created_at: '2025-01-01T08:00:00Z' },
      { id: id('seo3'),  page_slug: '/admissions', page_name: 'Admissions',        meta_title: 'Admissions | NAIS Dubai | Apply for 2025-2026',                    meta_description: 'Apply to NAIS Dubai for the 2025-2026 academic year. We welcome students from FS1 to Year 13. Discover our admissions process and open day dates.',  focus_keyword: 'admissions British school Dubai',  og_image: '', canonical_url: 'https://www.naisdubai.ae/admissions', no_index: false, schema_type: 'WebPage',      seo_score: 88, last_updated: '2025-04-10T08:00:00Z', created_at: '2025-01-01T08:00:00Z' },
      { id: id('seo4'),  page_slug: '/curriculum', page_name: 'Curriculum',        meta_title: 'British Curriculum | IGCSE & A-Level | NAIS Dubai',                meta_description: 'Explore NAIS Dubai\'s British curriculum, from Early Years Foundation Stage through to IGCSE and A-Levels. Academic excellence for every student.',       focus_keyword: 'British curriculum Dubai IGCSE',   og_image: '', canonical_url: 'https://www.naisdubai.ae/curriculum', no_index: false, schema_type: 'WebPage',      seo_score: 81, last_updated: '2025-02-20T08:00:00Z', created_at: '2025-01-01T08:00:00Z' },
      { id: id('seo5'),  page_slug: '/events',     page_name: 'Events',            meta_title: 'Events & Calendar | NAIS Dubai',                                  meta_description: 'Stay up to date with all NAIS Dubai events including open days, sports days, graduation ceremonies, and parent-teacher consultation days.',             focus_keyword: 'school events Dubai 2025',         og_image: '', canonical_url: 'https://www.naisdubai.ae/events',    no_index: false, schema_type: 'Event',        seo_score: 78, last_updated: '2025-05-01T08:00:00Z', created_at: '2025-01-01T08:00:00Z' },
      { id: id('seo6'),  page_slug: '/news',       page_name: 'News & Announcements', meta_title: 'News & Announcements | NAIS Dubai',                            meta_description: 'Read the latest news and announcements from NAIS Dubai including academic achievements, school updates, and community events.',                         focus_keyword: 'NAIS Dubai news announcements',    og_image: '', canonical_url: 'https://www.naisdubai.ae/news',      no_index: false, schema_type: 'Article',      seo_score: 74, last_updated: '2025-05-05T08:00:00Z', created_at: '2025-01-01T08:00:00Z' },
      { id: id('seo7'),  page_slug: '/contact',    page_name: 'Contact Us',        meta_title: 'Contact Us | NAIS Dubai',                                         meta_description: 'Contact NAIS Dubai\'s admissions team, general enquiries, or visit us at our campus in Jumeirah Village Circle.',                                      focus_keyword: 'contact NAIS Dubai',               og_image: '', canonical_url: 'https://www.naisdubai.ae/contact',  no_index: false, schema_type: 'WebPage',      seo_score: 70, last_updated: '2025-01-10T08:00:00Z', created_at: '2025-01-01T08:00:00Z' },
      { id: id('seo8'),  page_slug: '/gallery',    page_name: 'Gallery',           meta_title: 'Photo Gallery | NAIS Dubai School Life',                         meta_description: 'Browse the NAIS Dubai photo gallery showcasing our campus life, events, sports days, arts evenings, and student achievements.',                      focus_keyword: 'NAIS Dubai school photos',         og_image: '', canonical_url: 'https://www.naisdubai.ae/gallery',  no_index: false, schema_type: 'WebPage',      seo_score: 66, last_updated: '2025-05-10T08:00:00Z', created_at: '2025-01-01T08:00:00Z' },
      { id: id('seo9'),  page_slug: '/results',    page_name: 'Exam Results',      meta_title: 'Exam Results | IGCSE & A-Level | NAIS Dubai',                    meta_description: 'View NAIS Dubai\'s outstanding IGCSE and A-Level examination results. Our students consistently achieve above the international average.',           focus_keyword: 'IGCSE A-Level results Dubai 2024', og_image: '', canonical_url: 'https://www.naisdubai.ae/results',  no_index: false, schema_type: 'WebPage',      seo_score: 83, last_updated: '2025-04-05T08:00:00Z', created_at: '2025-01-01T08:00:00Z' },
      { id: id('seo10'), page_slug: '/careers',    page_name: 'Careers',           meta_title: 'Careers at NAIS Dubai | Teaching Jobs Dubai',                    meta_description: 'Join the NAIS Dubai team. Explore teaching and support staff vacancies at one of Dubai\'s leading Outstanding-rated British curriculum schools.',     focus_keyword: 'teaching jobs Dubai British school',og_image: '', canonical_url: 'https://www.naisdubai.ae/careers',  no_index: false, schema_type: 'WebPage',      seo_score: 76, last_updated: '2025-03-01T08:00:00Z', created_at: '2025-01-01T08:00:00Z' }
    ],

    cms_media: [
      { id: id('med1'), file_name: 'nais-campus-aerial.jpg',       file_url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200', thumb_url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400', file_type: 'image', mime_type: 'image/jpeg', file_size: 2457600, file_size_label: '2.4 MB', alt_text: 'NAIS Dubai school campus aerial view',          folder: 'images',    upload_date: '2024-09-01T08:00:00Z', uploaded_by: 'Tariq Mansour', usage_count: 14, created_at: '2024-09-01T08:00:00Z' },
      { id: id('med2'), file_name: 'science-lab-students.jpg',     file_url: 'https://images.unsplash.com/photo-1532094349884-543559059b9b?w=1200', thumb_url: 'https://images.unsplash.com/photo-1532094349884-543559059b9b?w=400', file_type: 'image', mime_type: 'image/jpeg', file_size: 1887436, file_size_label: '1.8 MB', alt_text: 'NAIS Dubai students in science lab',            folder: 'images',    upload_date: '2025-04-11T09:00:00Z', uploaded_by: 'Tariq Mansour', usage_count: 6,  created_at: '2025-04-11T09:00:00Z' },
      { id: id('med3'), file_name: 'sports-day-relay-2025.jpg',    file_url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200', thumb_url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400', file_type: 'image', mime_type: 'image/jpeg', file_size: 2201600, file_size_label: '2.1 MB', alt_text: 'Students at sports day relay race',            folder: 'images',    upload_date: '2025-03-21T10:00:00Z', uploaded_by: 'Omar Al-Rashidi', usage_count: 5, created_at: '2025-03-21T10:00:00Z' },
      { id: id('med4'), file_name: 'library-study-area.jpg',       file_url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200', thumb_url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400', file_type: 'image', mime_type: 'image/jpeg', file_size: 1572864, file_size_label: '1.5 MB', alt_text: 'NAIS Dubai library study area',                folder: 'images',    upload_date: '2025-03-06T09:00:00Z', uploaded_by: 'Tariq Mansour', usage_count: 9,  created_at: '2025-03-06T09:00:00Z' },
      { id: id('med5'), file_name: 'arts-evening-music-2025.jpg',  file_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200', thumb_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400', file_type: 'image', mime_type: 'image/jpeg', file_size: 2097152, file_size_label: '2.0 MB', alt_text: 'Music performance at Creative Arts Evening',    folder: 'images',    upload_date: '2025-05-23T08:00:00Z', uploaded_by: 'Tariq Mansour', usage_count: 4,  created_at: '2025-05-23T08:00:00Z' },
      { id: id('med6'), file_name: 'graduation-ceremony-2025.jpg', file_url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200', thumb_url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400', file_type: 'image', mime_type: 'image/jpeg', file_size: 3145728, file_size_label: '3.0 MB', alt_text: 'NAIS Dubai graduation ceremony 2025',          folder: 'images',    upload_date: '2025-06-13T10:00:00Z', uploaded_by: 'Tariq Mansour', usage_count: 3,  created_at: '2025-06-13T10:00:00Z' },
      { id: id('med7'), file_name: 'student-handbook-2024-25.pdf', file_url: '', thumb_url: '', file_type: 'document', mime_type: 'application/pdf', file_size: 4404019, file_size_label: '4.2 MB', alt_text: 'NAIS Dubai Student and Parent Handbook PDF',     folder: 'documents', upload_date: '2024-09-01T08:00:00Z', uploaded_by: 'Sarah Mitchell', usage_count: 342, created_at: '2024-09-01T08:00:00Z' },
      { id: id('med8'), file_name: 'academic-calendar-2024-25.pdf',file_url: '', thumb_url: '', file_type: 'document', mime_type: 'application/pdf', file_size: 1153433, file_size_label: '1.1 MB', alt_text: 'NAIS Dubai Academic Calendar PDF',                folder: 'documents', upload_date: '2024-08-20T08:00:00Z', uploaded_by: 'James Thornton', usage_count: 518, created_at: '2024-08-20T08:00:00Z' }
    ],

    cms_users: [
      { id: id('usr1'), name: 'System Administrator', email: 'admin@naisdubai.ae',      role: 'super_admin', status: 'active', job_title: 'CMS Super Administrator',          avatar: 'SA', notes: 'Primary system administrator. Full access to all CMS modules.', last_login: '2025-05-11T08:00:00Z', created_at: '2024-09-01T08:00:00Z' },
      { id: id('usr2'), name: 'Sarah Mitchell',       email: 's.mitchell@naisdubai.ae', role: 'admin',       status: 'active', job_title: 'Principal',                       avatar: 'SM', notes: 'School Principal. Reviews and approves all published content.',   last_login: '2025-05-10T14:30:00Z', created_at: '2024-09-01T08:00:00Z' },
      { id: id('usr3'), name: 'James Thornton',       email: 'j.thornton@naisdubai.ae', role: 'editor',      status: 'active', job_title: 'Vice Principal – Academic',        avatar: 'JT', notes: 'Manages academic content including results and announcements.',   last_login: '2025-05-09T11:00:00Z', created_at: '2024-09-01T08:00:00Z' },
      { id: id('usr4'), name: 'Layla Hassan',         email: 'l.hassan@naisdubai.ae',   role: 'editor',      status: 'active', job_title: 'Head of Admissions',              avatar: 'LH', notes: 'Manages admissions pipeline, events, and admissions announcements.', last_login: '2025-05-11T09:15:00Z', created_at: '2024-09-01T08:00:00Z' },
      { id: id('usr5'), name: 'Tariq Mansour',        email: 't.mansour@naisdubai.ae',  role: 'editor',      status: 'active', job_title: 'IT Manager & Digital Learning Lead', avatar: 'TM', notes: 'Manages media library, SEO settings, and CMS configuration.',    last_login: '2025-05-08T16:00:00Z', created_at: '2024-09-01T08:00:00Z' },
      { id: id('usr6'), name: 'Omar Al-Rashidi',      email: 'o.alrashidi@naisdubai.ae',role: 'viewer',      status: 'active', job_title: 'Head of Physical Education',       avatar: 'OA', notes: 'View-only access. Reviews sports events and gallery entries.',      last_login: '2025-04-30T10:00:00Z', created_at: '2024-09-01T08:00:00Z' }
    ],

    cms_activity_log: [
      { id: id('log1'),  user_name: 'Sarah Mitchell', role: 'Principal',          action: 'published an announcement in', target_label: 'Announcements', module: 'announcements', details: 'NAIS Dubai Achieves Outstanding KHDA Rating 2024-2025', created_at: '2025-05-11T07:45:00Z' },
      { id: id('log2'),  user_name: 'Layla Hassan',   role: 'Head of Admissions', action: 'added a new admissions application in', target_label: 'Admissions', module: 'admissions', details: 'Omar Hassan Al-Zabi – Year 7 application', created_at: '2025-05-10T16:20:00Z' },
      { id: id('log3'),  user_name: 'James Thornton', role: 'Vice Principal',     action: 'published exam results in',    target_label: 'Results',       module: 'results',       details: 'Term 2 Internal Assessment Results 2024-2025', created_at: '2025-05-10T14:00:00Z' },
      { id: id('log4'),  user_name: 'Tariq Mansour',  role: 'IT Manager',         action: 'updated SEO settings for',     target_label: 'SEO',           module: 'seo',           details: 'Homepage meta title and description updated', created_at: '2025-05-09T11:30:00Z' },
      { id: id('log5'),  user_name: 'Sarah Mitchell', role: 'Principal',          action: 'created a new event in',       target_label: 'Events',        module: 'events',        details: 'Year 13 Graduation Ceremony – Class of 2025', created_at: '2025-05-08T10:00:00Z' },
      { id: id('log6'),  user_name: 'Layla Hassan',   role: 'Head of Admissions', action: 'published an announcement in', target_label: 'Announcements', module: 'announcements', details: 'Summer School Enrolment Now Open', created_at: '2025-05-07T09:15:00Z' },
      { id: id('log7'),  user_name: 'Tariq Mansour',  role: 'IT Manager',         action: 'uploaded media to',            target_label: 'Media Library', module: 'media',         details: 'graduation-ceremony-2025.jpg added to Media Library', created_at: '2025-05-06T15:45:00Z' },
      { id: id('log8'),  user_name: 'Sarah Mitchell', role: 'Principal',          action: 'updated staff profile in',     target_label: 'Staff',         module: 'staff',         details: 'Priya Nair – Head of Science bio updated', created_at: '2025-05-05T13:00:00Z' },
      { id: id('log9'),  user_name: 'Tariq Mansour',  role: 'IT Manager',         action: 'added a gallery album to',     target_label: 'Gallery',       module: 'gallery',       details: 'Creative Arts Evening 2025 – 8 photos uploaded', created_at: '2025-05-04T11:00:00Z' },
      { id: id('log10'), user_name: 'Layla Hassan',   role: 'Head of Admissions', action: 'updated admissions status in', target_label: 'Admissions',    module: 'admissions',    details: 'Lucas Fernandez – status changed to Offered', created_at: '2025-05-03T14:30:00Z' },
      { id: id('log11'), user_name: 'James Thornton', role: 'Vice Principal',     action: 'uploaded a document in',       target_label: 'Documents',     module: 'documents',     details: 'Academic Calendar 2024-2025 added to Documents', created_at: '2025-05-02T10:00:00Z' },
      { id: id('log12'), user_name: 'Layla Hassan',   role: 'Head of Admissions', action: 'published a new event in',     target_label: 'Events',        module: 'events',        details: 'Admissions Open Morning – September 2025 Intake', created_at: '2025-05-01T09:00:00Z' }
    ],

    cms_pages: [],
    cms_settings: [
      { id: id('cfg001'), setting_key: 'contact_address_en', setting_value: 'Al Mizhar 1, Mirdif, Dubai, UAE',               group: 'contact',  label: 'Address (English)',          type: 'text',     updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg002'), setting_key: 'contact_address_ar', setting_value: 'الميزهر 1، مردف، دبي، الإمارات',               group: 'contact',  label: 'Address (Arabic)',           type: 'text',     updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg003'), setting_key: 'contact_phone',      setting_value: '+971 4 263 5456',                                group: 'contact',  label: 'Primary Phone',              type: 'text',     updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg004'), setting_key: 'contact_phone2',     setting_value: '+971 4 263 5457',                                group: 'contact',  label: 'Secondary Phone',            type: 'text',     updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg005'), setting_key: 'contact_whatsapp',   setting_value: '+971 4 263 5456',                                group: 'contact',  label: 'WhatsApp Number',            type: 'text',     updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg006'), setting_key: 'contact_email_adm',  setting_value: 'admissions@naischool.ae',                       group: 'contact',  label: 'Admissions Email',           type: 'email',    updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg007'), setting_key: 'contact_email_gen',  setting_value: 'info@naischool.ae',                             group: 'contact',  label: 'General Email',              type: 'email',    updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg008'), setting_key: 'contact_hours',      setting_value: 'Mon–Thu: 7:30 AM – 03:30 PM',                   group: 'contact',  label: 'Office Hours',               type: 'text',     updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg009'), setting_key: 'contact_hours_ar',   setting_value: 'الاثنين–الخميس: 7:30 ص – 3:30 م',              group: 'contact',  label: 'Office Hours (Arabic)',       type: 'text',     updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg010'), setting_key: 'maps_embed_url',     setting_value: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7', group: 'contact', label: 'Google Maps Embed URL', type: 'url', updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg011'), setting_key: 'site_name',          setting_value: 'NAIS Dubai',                                    group: 'general',  label: 'Site Name',                  type: 'text',     updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg012'), setting_key: 'site_tagline',       setting_value: 'Where Every Student Thrives',                   group: 'general',  label: 'Site Tagline',               type: 'text',     updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg013'), setting_key: 'social_facebook',    setting_value: 'https://facebook.com/naisdubai',                group: 'social',   label: 'Facebook URL',               type: 'url',      updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg014'), setting_key: 'social_instagram',   setting_value: 'https://instagram.com/naisdubai',               group: 'social',   label: 'Instagram URL',              type: 'url',      updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg015'), setting_key: 'social_twitter',     setting_value: 'https://twitter.com/naisdubai',                 group: 'social',   label: 'Twitter / X URL',            type: 'url',      updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg016'), setting_key: 'social_youtube',     setting_value: 'https://youtube.com/@naisdubai',                group: 'social',   label: 'YouTube URL',                type: 'url',      updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg017'), setting_key: 'seo_meta_title',     setting_value: 'NAIS Dubai — New Academy International School', group: 'seo',      label: 'Default Meta Title',         type: 'text',     updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg018'), setting_key: 'seo_meta_desc',      setting_value: 'NAIS Dubai offers world-class British curriculum education in Mirdif, Dubai for students from FS1 to Year 13.', group: 'seo', label: 'Default Meta Description', type: 'textarea', updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg019'), setting_key: 'admissions_open',    setting_value: 'true',                                          group: 'features', label: 'Admissions Open',            type: 'boolean',  updated_by: 'admin@naisdubai.ae' },
      { id: id('cfg020'), setting_key: 'maintenance_mode',   setting_value: 'false',                                         group: 'features', label: 'Maintenance Mode',           type: 'boolean',  updated_by: 'admin@naisdubai.ae' }
    ]
  };

  /* ── In-memory write store (mutations during the session) ── */
  const writes = {};  // { tableName: [rows] } — starts empty, accumulates POST/PUT/PATCH/DELETE

  function getTable(table) {
    // Merge base data + any session writes
    const base  = (data[table] || []).filter(r => !r._deleted);
    const added = (writes[table] || []).filter(r => !r._deleted);
    return [...base, ...added];
  }

  function makeId() {
    return 'local-' + Math.random().toString(36).slice(2, 10);
  }

  return {
    get(table, params = {}) {
      const rows   = getTable(table);
      const limit  = parseInt(params.limit) || 100;
      const page   = parseInt(params.page)  || 1;
      const search = (params.search || '').toLowerCase();
      const sort   = params.sort || 'created_at';

      let filtered = search
        ? rows.filter(r => JSON.stringify(r).toLowerCase().includes(search))
        : rows;

      // Sort descending by the sort field (most recent first)
      filtered = [...filtered].sort((a, b) => {
        const av = a[sort] || a.created_at || '';
        const bv = b[sort] || b.created_at || '';
        return bv < av ? -1 : bv > av ? 1 : 0;
      });

      const total  = filtered.length;
      const start  = (page - 1) * limit;
      const paged  = filtered.slice(start, start + limit);
      return { data: paged, total, page, limit, table };
    },

    getOne(table, id) {
      const row = getTable(table).find(r => r.id === id);
      if (!row) throw new Error(`${table}/${id} not found`);
      return row;
    },

    post(table, payload) {
      if (!writes[table]) writes[table] = [];
      const row = { ...payload, id: makeId(), created_at: new Date().toISOString(), updated_at: new Date().toISOString() };
      writes[table].push(row);
      return row;
    },

    put(table, id, payload) {
      return this._update(table, id, payload, true);
    },

    patch(table, id, payload) {
      return this._update(table, id, payload, false);
    },

    _update(table, id, payload, full) {
      // Try writes first, then base
      const wIdx = (writes[table] || []).findIndex(r => r.id === id);
      if (wIdx !== -1) {
        writes[table][wIdx] = full
          ? { ...payload, id, updated_at: new Date().toISOString() }
          : { ...writes[table][wIdx], ...payload, updated_at: new Date().toISOString() };
        return writes[table][wIdx];
      }
      const base = data[table] || [];
      const bIdx = base.findIndex(r => r.id === id);
      if (bIdx !== -1) {
        if (!writes[table]) writes[table] = [];
        const updated = full
          ? { ...payload, id, updated_at: new Date().toISOString() }
          : { ...base[bIdx], ...payload, updated_at: new Date().toISOString() };
        // Move to writes with _baseId marker so base version stays untouched
        updated._fromBase = true;
        writes[table].push(updated);
        base[bIdx]._deleted = true; // shadow the base record
        return updated;
      }
      throw new Error(`${table}/${id} not found`);
    },

    delete(table, id) {
      // Mark deleted in writes
      const wIdx = (writes[table] || []).findIndex(r => r.id === id);
      if (wIdx !== -1) { writes[table][wIdx]._deleted = true; return true; }
      const base = data[table] || [];
      const bIdx = base.findIndex(r => r.id === id);
      if (bIdx !== -1) { base[bIdx]._deleted = true; return true; }
      return true;
    }
  };
})();

/* ═══════════════════════════════════════════════
   API HELPERS
   Auto-selects live Table API (Genspark) or the
   built-in static store (GitHub Pages / any
   static host) based on IS_STATIC_HOST flag.
═══════════════════════════════════════════════ */
const API = {
  base: '../tables/',

  async get(table, params = {}) {
    if (IS_STATIC_HOST) {
      return Promise.resolve(STATIC_DB.get(table, params));
    }
    const qs = new URLSearchParams({ limit: 100, ...params }).toString();
    const res = await fetch(`${this.base}${table}?${qs}`);
    if (!res.ok) throw new Error(`GET ${table} failed: ${res.status}`);
    return res.json();
  },

  async getOne(table, id) {
    if (IS_STATIC_HOST) {
      return Promise.resolve(STATIC_DB.getOne(table, id));
    }
    const res = await fetch(`${this.base}${table}/${id}`);
    if (!res.ok) throw new Error(`GET ${table}/${id} failed`);
    return res.json();
  },

  async post(table, data) {
    if (IS_STATIC_HOST) {
      return Promise.resolve(STATIC_DB.post(table, data));
    }
    const res = await fetch(`${this.base}${table}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`POST ${table} failed`);
    return res.json();
  },

  async put(table, id, data) {
    if (IS_STATIC_HOST) {
      return Promise.resolve(STATIC_DB.put(table, id, data));
    }
    const res = await fetch(`${this.base}${table}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`PUT ${table}/${id} failed`);
    return res.json();
  },

  async patch(table, id, data) {
    if (IS_STATIC_HOST) {
      return Promise.resolve(STATIC_DB.patch(table, id, data));
    }
    const res = await fetch(`${this.base}${table}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`PATCH ${table}/${id} failed`);
    return res.json();
  },

  async delete(table, id) {
    if (IS_STATIC_HOST) {
      return Promise.resolve(STATIC_DB.delete(table, id));
    }
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
   DEMO MODE BANNER
   Shown on static hosts (GitHub Pages etc.)
   to explain that changes reset on refresh.
═══════════════════════════════════════════════ */
function injectDemoBanner() {
  if (!IS_STATIC_HOST) return;
  if (document.getElementById('demo-mode-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'demo-mode-banner';
  banner.style.cssText = [
    'position:fixed', 'bottom:0', 'left:0', 'right:0', 'z-index:9999',
    'background:linear-gradient(90deg,#0a1931,#1a3a6a)',
    'color:#fff', 'font-size:12.5px', 'font-family:Inter,sans-serif',
    'padding:9px 20px', 'display:flex', 'align-items:center', 'gap:12px',
    'box-shadow:0 -2px 12px rgba(0,0,0,0.25)'
  ].join(';');

  banner.innerHTML = `
    <i class="fas fa-flask" style="color:#c9982a;font-size:14px;flex-shrink:0"></i>
    <span>
      <strong style="color:#c9982a">Static Demo Mode</strong> —
      You are viewing this CMS on a static host (GitHub Pages).
      Data is built-in and read-only; changes will reset on refresh.
      <a href="https://app.genspark.ai" target="_blank"
         style="color:#7eb8f7;text-decoration:underline;margin-left:4px">
        Open in Genspark for full live data ↗
      </a>
    </span>
    <button onclick="this.closest('#demo-mode-banner').remove()"
      style="margin-left:auto;background:rgba(255,255,255,0.12);border:none;
             color:#fff;padding:4px 10px;border-radius:4px;cursor:pointer;
             font-size:12px;flex-shrink:0">
      Dismiss
    </button>`;

  document.body.appendChild(banner);

  // Shrink main content so banner doesn't overlap bottom content
  const main = document.querySelector('.admin-main');
  if (main) main.style.paddingBottom = '48px';
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
  injectDemoBanner();

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
