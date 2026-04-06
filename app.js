/* ============================================
   APP CONFIGURATION
   ============================================ */
const config = {
  whatsapp: '11971224349',
  instagram: 'https://www.instagram.com/teacher.albert?utm_source=qr&igsh=cnBsbjl5czRhNHA2',
  linkedin: 'https://www.linkedin.com/in/albertopinho?utm_source=share_via&utm_content=profile&utm_medium=member_android',
};

/* ============================================
   MOUNT ALL COMPONENTS
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  new Navbar(config).mount('navbar-root');
  new Hero(config).mount('hero-root');
  new StatsBar(config).mount('stats-root');
  new About(config).mount('about-root');
  new Services(config).mount('services-root');
  new Differentials(config).mount('differentials-root');
  new Testimonials(config).mount('testimonials-root');
  new CTABanner(config).mount('cta-banner-root');
  new Footer(config).mount('footer-root');

  initScrollAnimations();
  initSmoothScroll();
});

/* ============================================
   SCROLL REVEAL ANIMATIONS
   ============================================ */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  // Observe all .reveal elements
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // navbar height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ============================================
   MOBILE MENU TOGGLE
   ============================================ */
function toggleMobileMenu() {
  const navbar = document.getElementById('main-navbar');
  const links = navbar?.querySelector('.navbar__links');
  if (!links) return;

  const isOpen = links.style.display === 'flex';

  if (isOpen) {
    links.style.display = '';
    links.style.position = '';
    links.style.flexDirection = '';
    links.style.top = '';
    links.style.left = '';
    links.style.right = '';
    links.style.background = '';
    links.style.padding = '';
    links.style.borderBottom = '';
    links.style.zIndex = '';
    links.style.gap = '';
  } else {
    links.style.display = 'flex';
    links.style.position = 'fixed';
    links.style.flexDirection = 'column';
    links.style.top = '70px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'rgba(7,15,36,0.98)';
    links.style.padding = '24px 5%';
    links.style.borderBottom = '1px solid rgba(255,255,255,0.07)';
    links.style.zIndex = '999';
    links.style.gap = '20px';

    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => toggleMobileMenu(), { once: true });
    });
  }
}
