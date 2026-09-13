(() => {
  const header = document.querySelector('.hc-header');
  const hero = document.querySelector('.hc-hero');
  const art = document.querySelector('.hc-art');
  const toggle = document.querySelector('.hc-menu-toggle');
  const menu = document.querySelector('.hc-mobile-menu');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setMenu = (open) => {
    document.body.classList.toggle('hc-menu-open', open);
    toggle?.setAttribute('aria-expanded', String(open));
    toggle?.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    menu?.setAttribute('aria-hidden', String(!open));
  };

  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenu(false);
  });

  const updateHeader = () => header?.classList.toggle('is-scrolled', scrollY > 18);
  addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  if (hero && art && !reduceMotion && matchMedia('(pointer:fine)').matches) {
    hero.addEventListener('pointermove', event => {
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - .5) * -18;
      const y = ((event.clientY - rect.top) / rect.height - .5) * -12;
      art.style.setProperty('--mx', `${x}px`);
      art.style.setProperty('--my', `${y}px`);
    }, { passive: true });
    hero.addEventListener('pointerleave', () => {
      art.style.setProperty('--mx', '0px');
      art.style.setProperty('--my', '0px');
    });
  }

  const clamp = value => Math.max(0, Math.min(1, value));
  const agencySection = document.querySelector('.agency-section');
  const revealWords = [...document.querySelectorAll('.reveal-word')];
  const revealCopy = [...document.querySelectorAll('.reveal-copy')];
  const servicesSection = document.querySelector('.services-section');
  const servicesRevealWords = [...document.querySelectorAll('.services-reveal-word')];
  const servicesRevealCopy = [...document.querySelectorAll('.services-reveal-copy')];

  const updateReveals = () => {
    if (agencySection) {
      const rect = agencySection.getBoundingClientRect();
      const viewport = innerHeight;
      const progress = clamp((viewport * .42 - rect.top) / (Math.max(1, rect.height - viewport) + viewport * .42));
      revealWords.forEach((word, i) => word.style.setProperty('--word-reveal', String(clamp(progress * 2.15 + .12 - i * .105))));
      revealCopy.forEach((part, i) => part.style.setProperty('--copy-reveal', String(clamp(progress * 3 - .18 - i * .11))));
    }
    if (servicesSection) {
      const rect = servicesSection.getBoundingClientRect();
      const progress = clamp((innerHeight * .92 - rect.top) / Math.max(1, innerHeight * .62));
      servicesRevealWords.forEach((word, i) => word.style.setProperty('--services-word-reveal', String(clamp(progress * 1.7 + .05 - i * .12))));
      servicesRevealCopy.forEach((part, i) => part.style.setProperty('--services-copy-reveal', String(clamp(progress * 2.25 - .2 - i * .18))));
    }
  };

  if (reduceMotion) {
    [...revealWords, ...revealCopy].forEach(node => {
      node.style.setProperty('--word-reveal', '1');
      node.style.setProperty('--copy-reveal', '1');
    });
    servicesRevealWords.forEach(node => node.style.setProperty('--services-word-reveal', '1'));
    servicesRevealCopy.forEach(node => node.style.setProperty('--services-copy-reveal', '1'));
  } else {
    addEventListener('scroll', updateReveals, { passive: true });
    addEventListener('resize', updateReveals, { passive: true });
    updateReveals();
  }

  const serviceCards = [...document.querySelectorAll('.service-card')];
  const mobileServices = matchMedia('(max-width: 900px)');
  const cardObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-seen');
      cardObserver.unobserve(entry.target);
    }
  }), { threshold: .12 });

  const videoObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    const video = entry.target.querySelector('video');
    if (!video) return;
    if (entry.isIntersecting && !reduceMotion) video.play().catch(() => {});
    else video.pause();
  }), { threshold: .12, rootMargin: '20% 0px' });

  serviceCards.forEach(card => {
    if (reduceMotion) card.classList.add('is-seen'); else cardObserver.observe(card);
    videoObserver.observe(card);
    const button = card.querySelector('.service-toggle');
    button?.addEventListener('click', () => {
      const open = !card.classList.contains('is-open');
      if (mobileServices.matches) serviceCards.forEach(other => {
        if (other !== card) other.classList.remove('is-open');
      });
      card.classList.toggle('is-open', open);
      button.setAttribute('aria-expanded', String(open));
      button.textContent = open ? 'Zamknij' : 'Zobacz więcej';
    });
  });
})();
