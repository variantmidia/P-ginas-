/* ============================================
   BASE COMPONENT CLASS
   ============================================ */
class Component {
  constructor(props = {}) {
    this.props = props;
  }

  render() {
    throw new Error('render() must be implemented by subclass');
  }

  mount(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = this.render();
    this.afterMount && this.afterMount();
  }
}

/* ============================================
   SVG ICONS (reusable)
   ============================================ */
const Icons = {
  whatsapp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>`,

  instagram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>`,

  linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>`,

  star: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>`,

  check: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
    <polyline points="20 6 9 17 4 12"/>
  </svg>`,

  arrow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>`,

  menu: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>`,

  trophy: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/>
    <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0012 0V2z"/>
  </svg>`,

  users: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>`,

  bookOpen: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
  </svg>`,

  starFilled: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>`,

  target: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>`,

  calendar: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>`,

  award: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>`,

  clock: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>`,

  globe: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>`,

  briefcase: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
  </svg>`,

  messageCircle: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>`,

  user: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>`,

  phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.63a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.64a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>`,

  zap: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>`,
};

/* ============================================
   ICON BOX — colored rounded box with SVG icon
   Usage: IconBox(Icons.trophy, 'gold')
   Colors: gold | blue | green | purple | red | teal | orange
   ============================================ */
const iconBoxColors = {
  gold:   { bg: 'linear-gradient(135deg,#C9A84C,#E8C97A)', color: '#0D1B3E' },
  blue:   { bg: 'linear-gradient(135deg,#3B82F6,#60A5FA)', color: '#fff' },
  green:  { bg: 'linear-gradient(135deg,#10B981,#34D399)', color: '#fff' },
  purple: { bg: 'linear-gradient(135deg,#8B5CF6,#A78BFA)', color: '#fff' },
  red:    { bg: 'linear-gradient(135deg,#EF4444,#F87171)', color: '#fff' },
  teal:   { bg: 'linear-gradient(135deg,#0EA5E9,#38BDF8)', color: '#fff' },
  orange: { bg: 'linear-gradient(135deg,#F59E0B,#FCD34D)', color: '#0D1B3E' },
  pink:   { bg: 'linear-gradient(135deg,#EC4899,#F472B6)', color: '#fff' },
};

function IconBox(iconSvg, color = 'gold', size = 52) {
  const c = iconBoxColors[color] || iconBoxColors.gold;
  return `<div style="width:${size}px;height:${size}px;border-radius:${Math.round(size*0.27)}px;background:${c.bg};display:flex;align-items:center;justify-content:center;color:${c.color};flex-shrink:0;box-shadow:0 4px 14px rgba(0,0,0,0.18);">${iconSvg}</div>`;
}

/* ============================================
   UNION JACK SVG (inline, decorative)
   ============================================ */
function UnionJackSVG(opacity = 0.06) {
  return `<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
    <rect width="60" height="40" fill="#012169"/>
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" stroke-width="8"/>
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" stroke-width="4"/>
    <path d="M30,0 V40 M0,20 H60" stroke="#fff" stroke-width="12"/>
    <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" stroke-width="8"/>
  </svg>`;
}

/* ============================================
   LOGO MARK SVG
   ============================================ */
function LogoMarkSVG() {
  return `<svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="21" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#0D1B3E">A</text>
  </svg>`;
}

/* ============================================
   STATUE OF LIBERTY SILHOUETTE SVG
   ============================================ */
function StatueSVG() {
  return `<svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg" fill="rgba(255,255,255,0.06)">
    <!-- Crown rays -->
    <polygon points="100,20 95,60 105,60"/>
    <polygon points="100,20 80,55 90,62"/>
    <polygon points="100,20 120,55 110,62"/>
    <polygon points="100,20 70,50 82,60"/>
    <polygon points="100,20 130,50 118,60"/>
    <!-- Head -->
    <ellipse cx="100" cy="75" rx="22" ry="25"/>
    <!-- Crown base -->
    <rect x="78" y="60" width="44" height="16" rx="3"/>
    <!-- Neck -->
    <rect x="92" y="98" width="16" height="14"/>
    <!-- Robe shoulders -->
    <path d="M60,112 Q75,105 92,112 L88,180 L72,180 Z"/>
    <path d="M140,112 Q125,105 108,112 L112,180 L128,180 Z"/>
    <!-- Torso -->
    <rect x="80" y="112" width="40" height="80" rx="6"/>
    <!-- Right arm raised -->
    <path d="M138,115 L158,80 L165,84 L145,120 Z"/>
    <!-- Torch -->
    <rect x="161" y="55" width="8" height="30" rx="3"/>
    <ellipse cx="165" cy="52" rx="7" ry="10"/>
    <!-- Left arm with tablet -->
    <path d="M62,118 L45,140 L50,144 L67,122 Z"/>
    <rect x="35" y="138" width="20" height="26" rx="2" transform="rotate(-15,45,151)"/>
    <!-- Skirt / robe lower body -->
    <path d="M72,190 L68,280 L132,280 L128,190 Z"/>
    <!-- Pleats suggestion -->
    <path d="M85,195 L82,280" stroke="rgba(0,0,0,0.1)" stroke-width="1"/>
    <path d="M100,193 L100,280" stroke="rgba(0,0,0,0.1)" stroke-width="1"/>
    <path d="M115,195 L118,280" stroke="rgba(0,0,0,0.1)" stroke-width="1"/>
    <!-- Pedestal top -->
    <rect x="60" y="278" width="80" height="18" rx="2"/>
    <!-- Pedestal body -->
    <path d="M55,295 L50,370 L150,370 L145,295 Z"/>
    <!-- Pedestal base -->
    <rect x="40" y="368" width="120" height="16" rx="2"/>
    <!-- Base platform -->
    <rect x="30" y="382" width="140" height="18" rx="3"/>
  </svg>`;
}

/* ============================================
   NAVBAR COMPONENT
   ============================================ */
class Navbar extends Component {
  render() {
    const { whatsapp } = this.props;
    const waLink = `https://wa.me/55${whatsapp.replace(/\D/g,'')}?text=Olá%20Teacher%20Albert!%20Tenho%20interesse%20em%20aulas%20de%20inglês.`;

    return `
    <nav class="navbar" id="main-navbar">
      <div class="container">
        <div class="navbar__inner">
          <a href="#home" class="navbar__logo">
            <div class="navbar__logo-mark">
              ${LogoMarkSVG()}
            </div>
            <div class="navbar__logo-text">
              <span class="navbar__logo-name">Teacher Albert</span>
              <span class="navbar__logo-sub">English Teacher</span>
            </div>
          </a>

          <ul class="navbar__links">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Planos</a></li>
            <li><a href="#differentials">Diferenciais</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
          </ul>

          <a href="${waLink}" target="_blank" rel="noopener" class="btn btn--primary navbar__cta">
            ${Icons.whatsapp} Agende sua Aula
          </a>

          <button class="navbar__hamburger" aria-label="Menu" onclick="toggleMobileMenu()">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>`;
  }

  afterMount() {
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('main-navbar');
      if (nav) {
        nav.classList.toggle('navbar--scrolled', window.scrollY > 60);
      }
    });
  }
}

/* ============================================
   HERO COMPONENT
   ============================================ */
class Hero extends Component {
  render() {
    const { whatsapp } = this.props;
    const waIndividual = `https://wa.me/55${whatsapp.replace(/\D/g,'')}?text=Olá%20Teacher%20Albert!%20Tenho%20interesse%20em%20AULA%20INDIVIDUAL.%20Pode%20me%20dar%20mais%20informações?`;
    const waGroup = `https://wa.me/55${whatsapp.replace(/\D/g,'')}?text=Olá%20Teacher%20Albert!%20Tenho%20interesse%20em%20AULA%20EM%20GRUPO.%20Pode%20me%20dar%20mais%20informações?`;

    // Generate particles
    const particles = Array.from({ length: 18 }, (_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = 6 + Math.random() * 6;
      const size = 1 + Math.random() * 2;
      return `<div class="particle" style="left:${left}%;bottom:${10 + Math.random()*60}%;width:${size}px;height:${size}px;animation-delay:${delay}s;animation-duration:${duration}s;"></div>`;
    }).join('');

    return `
    <section class="hero" id="home">
      <div class="hero__bg"></div>
      <div class="hero__vignette"></div>

      <!-- Decorative rings -->
      <div class="hero__ring hero__ring--1"></div>
      <div class="hero__ring hero__ring--2"></div>
      <div class="hero__ring hero__ring--3"></div>

      <!-- Floating particles -->
      <div class="hero__particles">${particles}</div>

      <!-- Statue of Liberty silhouette -->
      <div class="hero__statue">${StatueSVG()}</div>

      <!-- UK Flag badge -->
      <div class="hero__flag-badge">${UnionJackSVG()}</div>

      <div class="hero__content">
        <div class="hero__left">
          <div class="hero__eyebrow">
            <div class="hero__eyebrow-flag">
              <span style="font-size:1.2rem">🇬🇧</span>
            </div>
            <span class="hero__eyebrow-text">Inglês que Transforma Vidas</span>
          </div>

          <h1 class="hero__title">
            Fale Inglês com<br>
            <strong>Confiança</strong><br>
            e Fluência Real
          </h1>

          <p class="hero__subtitle">
            Mais de 15 anos de experiência, método exclusivo e material próprio.<br>
            Aprenda do jeito que funciona — do básico à fluência.
          </p>

          <div class="hero__actions">
            <a href="${waIndividual}" target="_blank" rel="noopener" class="btn btn--primary">
              ${Icons.whatsapp} Quero Aula Individual
            </a>
            <a href="${waGroup}" target="_blank" rel="noopener" class="btn btn--outline-white">
              ${Icons.whatsapp} Quero Aula em Grupo
            </a>
          </div>

          <div class="hero__social-proof">
            <div class="hero__avatars">
              <div class="hero__avatar">M</div>
              <div class="hero__avatar">R</div>
              <div class="hero__avatar">C</div>
              <div class="hero__avatar">J</div>
            </div>
            <div class="hero__social-text">
              <strong>+500 alunos formados</strong>
              em 15 anos de carreira
            </div>
          </div>
        </div>

        <div class="hero__right">
          <div class="hero__card">
            <div class="hero__card-title">💎 Escolha seu plano</div>

            <div class="hero__price-row">
              <div class="hero__price-label">
                <div class="hero__price-icon hero__price-icon--individual">${Icons.user}</div>
                <div>
                  <div class="hero__price-type">Aula Individual</div>
                  <div class="hero__price-sub">Foco 100% em você</div>
                </div>
              </div>
              <div>
                <div class="hero__price-value">R$200</div>
                <div class="hero__price-per">por hora</div>
              </div>
            </div>

            <div class="hero__price-row">
              <div class="hero__price-label">
                <div class="hero__price-icon hero__price-icon--group">${Icons.users}</div>
                <div>
                  <div class="hero__price-type">Aula em Grupo</div>
                  <div class="hero__price-sub">Aprenda em turma</div>
                </div>
              </div>
              <div>
                <div class="hero__price-value" style="color:#0DC87E">R$150</div>
                <div class="hero__price-per">por hora</div>
              </div>
            </div>

            <a href="${waIndividual}" target="_blank" rel="noopener" class="btn btn--whatsapp" style="width:100%;justify-content:center;">
              ${Icons.whatsapp} Falar com Teacher Albert
            </a>
          </div>
        </div>
      </div>
    </section>`;
  }
}

/* ============================================
   STATS BAR COMPONENT
   ============================================ */
class StatsBar extends Component {
  render() {
    const stats = [
      { icon: IconBox(Icons.trophy,   'gold'),   number: '+15',  label: 'Anos de<br>Experiência' },
      { icon: IconBox(Icons.users,    'blue'),   number: '+500', label: 'Alunos<br>Formados' },
      { icon: IconBox(Icons.bookOpen, 'purple'), number: '100%', label: 'Material<br>Exclusivo' },
      { icon: IconBox(Icons.starFilled,'orange'), number: '5.0', label: 'Avaliação<br>Média' },
    ];

    return `
    <div class="stats-bar">
      <div class="container">
        <div class="stats-bar__inner">
          ${stats.map(s => `
            <div class="stat-item reveal">
              ${s.icon}
              <div>
                <div class="stat-item__number">${s.number}</div>
                <div class="stat-item__label">${s.label.replace('\n', '<br>')}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>`;
  }
}

/* ============================================
   ABOUT COMPONENT
   ============================================ */
class About extends Component {
  render() {
    const { whatsapp } = this.props;
    const waLink = `https://wa.me/55${whatsapp.replace(/\D/g,'')}?text=Olá%20Teacher%20Albert!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas.`;

    const highlights = [
      { icon: IconBox(Icons.bookOpen,  'blue',   44), title: 'Material Próprio', text: 'Apostilas e exercícios exclusivos desenvolvidos pelo professor' },
      { icon: IconBox(Icons.target,    'red',    44), title: 'Método Focado', text: 'Abordagem prática para conversação e fluência real' },
      { icon: IconBox(Icons.calendar,  'teal',   44), title: 'Horários Flexíveis', text: 'Aulas adaptadas à sua rotina e disponibilidade' },
      { icon: IconBox(Icons.award,     'gold',   44), title: '+15 Anos', text: 'Experiência comprovada com centenas de alunos transformados' },
    ];

    return `
    <section class="about section" id="about">
      <div class="container">
        <div class="about__inner">
          <div class="about__image-wrap reveal">
            <div class="about__image-bg"></div>
            <div class="about__image">
              <img src="assets/professor.jpg" alt="Teacher Albert — Professor de Inglês"
                   onerror="this.outerHTML='<div style=\'width:100%;height:520px;background:linear-gradient(135deg,#0D1B3E 0%,#162347 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;\'><div style=\'font-size:5rem\'>👨‍🏫</div><div style=\'font-family:Georgia,serif;font-size:1.2rem;color:rgba(201,168,76,0.9);font-style:italic;\'>Teacher Albert</div><div style=\'font-size:0.75rem;color:rgba(255,255,255,0.4);letter-spacing:0.15em;text-transform:uppercase;\'>Salve a foto em assets/professor.jpg</div></div>'" />
            </div>
            <div class="about__badge">
              <div class="about__badge-number">15+</div>
              <div class="about__badge-label">Anos de<br>Experiência</div>
            </div>
          </div>

          <div class="about__content">
            <span class="tag tag--gold">Sobre o Professor</span>
            <div class="gold-line"></div>
            <h2 class="heading-lg reveal">Alberto Pinho,<br><em style="font-weight:300">o Teacher Albert</em></h2>
            <p class="body-text reveal reveal-delay-1" style="margin-top:20px;">
              Com mais de 15 anos dedicados ao ensino do inglês, o Teacher Albert é referência em aulas
              particulares e em grupo. Sua trajetória é marcada pela criação de um método próprio que combina
              gramática, conversação e cultura anglófona de forma dinâmica e eficaz.
            </p>
            <p class="body-text reveal reveal-delay-2" style="margin-top:16px;">
              Diferente de cursos padronizados, cada aula é planejada com material exclusivo desenvolvido
              pelo próprio professor — uma abordagem que já transformou a vida de centenas de alunos,
              de estudantes a executivos e turmas especializadas como advogados e grupos religiosos.
            </p>

            <div class="about__highlights">
              ${highlights.map((h, i) => `
                <div class="about__highlight reveal reveal-delay-${i + 1}">
                  <div class="about__highlight-icon" style="margin-bottom:12px">${h.icon}</div>
                  <div class="about__highlight-title">${h.title}</div>
                  <div class="about__highlight-text">${h.text}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }
}

/* ============================================
   SERVICES COMPONENT
   ============================================ */
class Services extends Component {
  render() {
    const { whatsapp } = this.props;
    const waIndividual = `https://wa.me/55${whatsapp.replace(/\D/g,'')}?text=Olá%20Teacher%20Albert!%20Tenho%20interesse%20em%20AULA%20INDIVIDUAL.%20Quero%20começar!`;
    const waGroup = `https://wa.me/55${whatsapp.replace(/\D/g,'')}?text=Olá%20Teacher%20Albert!%20Tenho%20interesse%20em%20AULA%20EM%20GRUPO.%20Quero%20participar!`;

    const individualFeatures = [
      'Plano de estudos 100% personalizado',
      'Material exclusivo Teacher Albert',
      'Feedback individualizado em cada aula',
      'Horário flexível e sem turma',
      'Foco nos seus objetivos específicos',
      'Aceleração máxima no aprendizado',
    ];

    const groupFeatures = [
      'Turmas reduzidas (até 8 alunos)',
      'Material exclusivo Teacher Albert',
      'Interação e prática em grupo',
      'Dinâmicas e conversação real',
      'Custo-benefício excelente',
      'Networking com outros alunos',
    ];

    return `
    <section class="services section" id="services">
      <div class="container">
        <div class="services__header">
          <span class="tag tag--gold">Planos e Investimento</span>
          <h2 class="heading-lg reveal">Escolha como quer aprender</h2>
          <div class="gold-line" style="margin:20px auto 28px;"></div>
          <p class="body-text reveal reveal-delay-1">
            Duas modalidades pensadas para diferentes perfis e objetivos.
            Ambas com o mesmo nível de excelência e material exclusivo.
          </p>
        </div>

        <div class="services__grid">
          <!-- INDIVIDUAL CTA -->
          <div class="service-card service-card--individual reveal">
            <div class="service-card__glow"></div>
            <div class="service-card__badge">⭐ Mais Eficaz</div>
            <h3 class="service-card__title">Aula Individual</h3>
            <p class="service-card__desc">
              Atenção 100% focada em você. O professor adapta o ritmo, o vocabulário
              e os exercícios ao seu nível e às suas metas. Resultado garantido.
            </p>
            <div class="service-card__price">
              <span class="service-card__currency">R$</span>
              <span class="service-card__amount">200</span>
              <div>
                <div class="service-card__per">por hora</div>
                <div class="service-card__per">aula individual</div>
              </div>
            </div>
            <ul class="service-card__features">
              ${individualFeatures.map(f => `
                <li class="service-card__feature">
                  <span class="service-card__check">${Icons.check}</span>
                  ${f}
                </li>
              `).join('')}
            </ul>
            <a href="${waIndividual}" target="_blank" rel="noopener" class="btn service-card__cta">
              ${Icons.whatsapp} Quero Aula Individual ${Icons.arrow}
            </a>
          </div>

          <!-- GROUP CTA -->
          <div class="service-card service-card--group reveal reveal-delay-2">
            <div class="service-card__glow"></div>
            <div class="service-card__badge">💰 Melhor Custo</div>
            <h3 class="service-card__title">Aula em Grupo</h3>
            <p class="service-card__desc">
              Aprenda junto com outros alunos em um ambiente dinâmico.
              A interação em grupo acelera a conversação e a confiança no idioma.
            </p>
            <div class="service-card__price">
              <span class="service-card__currency" style="color:rgba(255,255,255,0.4)">R$</span>
              <span class="service-card__amount">150</span>
              <div>
                <div class="service-card__per">por hora</div>
                <div class="service-card__per">por aluno</div>
              </div>
            </div>
            <ul class="service-card__features">
              ${groupFeatures.map(f => `
                <li class="service-card__feature">
                  <span class="service-card__check" style="background:rgba(13,200,126,0.12);color:#0DC87E">${Icons.check}</span>
                  ${f}
                </li>
              `).join('')}
            </ul>
            <a href="${waGroup}" target="_blank" rel="noopener" class="btn service-card__cta">
              ${Icons.whatsapp} Quero Aula em Grupo ${Icons.arrow}
            </a>
          </div>
        </div>
      </div>
    </section>`;
  }
}

/* ============================================
   DIFFERENTIALS COMPONENT
   ============================================ */
class Differentials extends Component {
  render() {
    const items = [
      {
        icon: IconBox(Icons.bookOpen,      'blue'),
        title: 'Material 100% Exclusivo',
        text: 'Apostilas, exercícios e conteúdos desenvolvidos pelo próprio Teacher Albert ao longo de 15 anos de prática. Você não vai encontrar esse material em nenhum outro curso.',
      },
      {
        icon: IconBox(Icons.target,        'red'),
        title: 'Método Próprio e Comprovado',
        text: 'Uma metodologia testada e refinada com centenas de alunos. Combinando gramática contextualizada, conversação e imersão cultural para resultados reais.',
      },
      {
        icon: IconBox(Icons.zap,           'orange'),
        title: 'Aprendizado Acelerado',
        text: 'Esqueça anos de curso parado no básico. O foco é a sua evolução constante e mensurável, do primeiro dia de aula até a fluência plena.',
      },
      {
        icon: IconBox(Icons.globe,         'teal'),
        title: 'Cultura Anglófona',
        text: 'Além do idioma, você aprende sobre a cultura dos países de língua inglesa. Porque falar inglês de verdade é muito mais do que decorar regras gramaticais.',
      },
      {
        icon: IconBox(Icons.briefcase,     'purple'),
        title: 'Inglês para Todas as Áreas',
        text: 'Experiência com turmas para igrejas, advogados, empresários e estudantes. O conteúdo é adaptado ao seu universo profissional ou pessoal.',
      },
      {
        icon: IconBox(Icons.messageCircle, 'pink'),
        title: 'Suporte Contínuo',
        text: 'O relacionamento com o aluno vai além da aula. Teacher Albert está disponível para tirar dúvidas e acompanhar seu progresso de perto.',
      },
    ];

    return `
    <section class="differentials section" id="differentials">
      <div class="container">
        <div class="differentials__header">
          <span class="tag tag--navy">Por que Teacher Albert?</span>
          <h2 class="heading-lg reveal">O que nos torna<br><em style="font-weight:300">verdadeiramente únicos?</em></h2>
          <div class="gold-line" style="margin:20px auto 28px;"></div>
          <p class="body-text reveal reveal-delay-1" style="max-width:560px;margin:0 auto;">
            Não é só inglês. É uma experiência de aprendizado construída ao longo de mais de uma década
            de dedicação e resultados.
          </p>
        </div>

        <div class="differentials__grid">
          ${items.map((item, i) => `
            <div class="diff-card reveal reveal-delay-${(i % 3) + 1}">
              <div class="diff-card__icon" style="background:none;width:auto;height:auto">${item.icon}</div>
              <h3 class="diff-card__title">${item.title}</h3>
              <p class="diff-card__text">${item.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
  }
}

/* ============================================
   TESTIMONIALS COMPONENT
   ============================================ */
class Testimonials extends Component {
  render() {
    const items = [
      {
        text: 'O Teacher Albert mudou completamente minha relação com o inglês. Em 6 meses eu já estava me comunicando em reuniões com clientes internacionais. O material dele é incrível!',
        name: 'Mariana Costa',
        role: 'Advogada — São Paulo',
        initial: 'M',
      },
      {
        text: 'Tentei vários cursos antes e nenhum deu resultado. Com o Teacher Albert aprendi de verdade. O método dele é diferente de tudo que já vi. Hoje trabalho em multinacional.',
        name: 'Rafael Souza',
        role: 'Engenheiro — São Paulo',
        initial: 'R',
      },
      {
        text: 'As aulas em grupo são incríveis! A dinâmica com os outros alunos e a didática do professor fazem toda a diferença. Recomendo para qualquer pessoa que quer aprender de verdade.',
        name: 'Camila Ferreira',
        role: 'Designer — São Paulo',
        initial: 'C',
      },
    ];

    return `
    <section class="testimonials section" id="testimonials">
      <div class="container">
        <div class="testimonials__header">
          <span class="tag tag--gold">Depoimentos</span>
          <h2 class="heading-lg reveal">O que dizem nossos alunos</h2>
          <div class="gold-line" style="margin:20px auto 28px;"></div>
        </div>

        <div class="testimonials__grid">
          ${items.map((t, i) => `
            <div class="testimonial-card reveal reveal-delay-${i + 1}">
              <div class="testimonial-card__stars">
                ${Icons.star}${Icons.star}${Icons.star}${Icons.star}${Icons.star}
              </div>
              <p class="testimonial-card__text">"${t.text}"</p>
              <div class="testimonial-card__author">
                <div class="testimonial-card__avatar">${t.initial}</div>
                <div>
                  <div class="testimonial-card__name">${t.name}</div>
                  <div class="testimonial-card__role">${t.role}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
  }
}

/* ============================================
   CTA BANNER COMPONENT
   ============================================ */
class CTABanner extends Component {
  render() {
    const { whatsapp } = this.props;
    const waIndividual = `https://wa.me/55${whatsapp.replace(/\D/g,'')}?text=Olá%20Teacher%20Albert!%20Quero%20começar%20minhas%20aulas%20de%20inglês.%20Pode%20me%20ajudar?`;

    return `
    <section class="cta-banner">
      <div class="container">
        <div class="cta-banner__inner">
          <h2 class="cta-banner__title reveal">
            Pronto para falar inglês<br>com confiança?
          </h2>
          <p class="cta-banner__subtitle reveal reveal-delay-1">
            Dê o primeiro passo agora. Entre em contato com o Teacher Albert
            e comece sua transformação hoje.
          </p>
          <div class="cta-banner__actions reveal reveal-delay-2">
            <a href="${waIndividual}" target="_blank" rel="noopener" class="btn btn--navy">
              ${Icons.whatsapp} Começar Agora — É Só Chamar!
            </a>
          </div>
        </div>
      </div>
    </section>`;
  }
}

/* ============================================
   FOOTER COMPONENT
   ============================================ */
class Footer extends Component {
  render() {
    const { whatsapp, instagram, linkedin } = this.props;
    const waLink = `https://wa.me/55${whatsapp.replace(/\D/g,'')}?text=Olá%20Teacher%20Albert!`;
    const waDisplay = whatsapp.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    return `
    <footer class="footer" id="contact">
      <div class="container">
        <div class="footer__top">
          <div>
            <div class="footer__brand-name">Teacher Albert</div>
            <div class="footer__brand-sub">English Teacher</div>
            <p class="footer__brand-desc">
              Transformando vidas através do inglês há mais de 15 anos.
              Método exclusivo, material próprio e dedicação total ao sucesso do aluno.
            </p>
            <div class="footer__social">
              <a href="${instagram}" target="_blank" rel="noopener" class="footer__social-link" aria-label="Instagram">
                ${Icons.instagram}
              </a>
              <a href="${linkedin}" target="_blank" rel="noopener" class="footer__social-link" aria-label="LinkedIn">
                ${Icons.linkedin}
              </a>
              <a href="${waLink}" target="_blank" rel="noopener" class="footer__social-link" aria-label="WhatsApp">
                ${Icons.whatsapp}
              </a>
            </div>
          </div>

          <div>
            <div class="footer__col-title">Navegação</div>
            <ul class="footer__links">
              <li><a href="#home">Início</a></li>
              <li><a href="#about">Sobre o Professor</a></li>
              <li><a href="#services">Planos e Preços</a></li>
              <li><a href="#differentials">Diferenciais</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <div class="footer__col-title">Contato</div>
            <div class="footer__contact-item">
              <div class="footer__contact-icon">${Icons.phone}</div>
              <div class="footer__contact-text">
                WhatsApp<br>
                <a href="${waLink}" target="_blank" rel="noopener">${waDisplay}</a>
              </div>
            </div>
            <div class="footer__contact-item">
              <div class="footer__contact-icon">${Icons.instagram}</div>
              <div class="footer__contact-text">
                Instagram<br>
                <a href="${instagram}" target="_blank" rel="noopener">@teacher.albert</a>
              </div>
            </div>
            <div class="footer__contact-item">
              <div class="footer__contact-icon">${Icons.linkedin}</div>
              <div class="footer__contact-text">
                LinkedIn<br>
                <a href="${linkedin}" target="_blank" rel="noopener">Alberto Pinho</a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer__bottom">
          <div class="footer__copy">
            © ${new Date().getFullYear()} Teacher Albert. Todos os direitos reservados.
          </div>
          <div class="footer__copy">
            Desenvolvido com dedicação 🇬🇧
          </div>
        </div>
      </div>
    </footer>`;
  }
}
