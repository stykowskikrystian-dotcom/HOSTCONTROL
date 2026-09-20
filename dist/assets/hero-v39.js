(() => {
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
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

  const agencyStage = document.querySelector('.agency-stage');
  const agencyStageCopy = document.querySelector('.agency-stage-copy');
  const agencyOptions = [...document.querySelectorAll('.agency-option')];
  const agencyImages = [...document.querySelectorAll('.agency-media img')];
  const agencyActiveLabel = document.querySelector('.agency-active-label');
  const agencyActiveTitle = document.querySelector('.agency-stage-copy h3');
  const agencyActiveDescription = document.querySelector('.agency-active-description');
  const agencyStageIndex = document.querySelector('.agency-stage-index');
  let agencyActive = 0;
  let agencyTimer = null;

  const scheduleAgencyRotation = () => {
    clearTimeout(agencyTimer);
    if (reduceMotion || !agencySection?.classList.contains('is-visible')) return;
    agencyTimer = setTimeout(() => setAgencyScene(agencyActive + 1), 6200);
  };

  const setAgencyScene = (next, userInitiated = false) => {
    if (!agencyOptions.length) return;
    agencyActive = (next + agencyOptions.length) % agencyOptions.length;
    const selected = agencyOptions[agencyActive];
    agencyOptions.forEach((option, index) => {
      const activeOption = index === agencyActive;
      option.classList.toggle('active', activeOption);
      option.setAttribute('aria-pressed', activeOption ? 'true' : 'false');
    });
    agencyImages.forEach((image, index) => image.classList.toggle('active', index === agencyActive));
    agencyStageCopy?.classList.remove('is-changing');
    if (agencyStageCopy) void agencyStageCopy.offsetWidth;
    agencyStageCopy?.classList.add('is-changing');
    agencyActiveLabel.textContent = selected.dataset.label;
    agencyActiveTitle.textContent = selected.dataset.title;
    agencyActiveDescription.textContent = selected.dataset.description;
    agencyStageIndex.textContent = `${String(agencyActive + 1).padStart(2, '0')} / 04`;
    if (userInitiated) selected.focus({ preventScroll: true });
    scheduleAgencyRotation();
  };

  agencyOptions.forEach((option, index) => option.addEventListener('click', () => setAgencyScene(index, true)));
  agencyStage?.addEventListener('pointermove', event => {
    if (reduceMotion) return;
    const rect = agencyStage.getBoundingClientRect();
    agencyStage.style.setProperty('--stage-x', `${((event.clientX - rect.left) / rect.width) * 100}%`);
    agencyStage.style.setProperty('--stage-y', `${((event.clientY - rect.top) / rect.height) * 100}%`);
  }, { passive: true });

  if (agencySection) {
    const agencyObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      agencySection.classList.toggle('is-visible', entry.isIntersecting);
      if (entry.isIntersecting) scheduleAgencyRotation(); else clearTimeout(agencyTimer);
    }), { threshold: .18 });
    agencyObserver.observe(agencySection);
    if (reduceMotion) agencySection.classList.add('is-visible');
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
        if (other === card) return;
        other.classList.remove('is-open');
        const otherButton = other.querySelector('.service-toggle');
        otherButton?.setAttribute('aria-expanded', 'false');
        if (otherButton) otherButton.textContent = 'Zobacz więcej';
      });
      card.classList.toggle('is-open', open);
      button.setAttribute('aria-expanded', String(open));
      button.textContent = open ? 'Zamknij' : 'Zobacz więcej';
    });
  });
})();

(() => {
  const section = document.querySelector('.founder-section');
  if (!section) return;
  const portrait = section.querySelector('.founder-portrait-wrap');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const observer = new IntersectionObserver(entries => entries.forEach(entry => section.classList.toggle('is-visible', entry.isIntersecting)), { threshold:.035, rootMargin:'0px 0px -6% 0px' });
  observer.observe(section);
  if (reduceMotion || !portrait) return;
  section.addEventListener('pointermove', event => {
    const rect = section.getBoundingClientRect();
    section.style.setProperty('--founder-x', `${event.clientX - rect.left}px`);
    section.style.setProperty('--founder-y', `${event.clientY - rect.top}px`);
  }, { passive:true });
  portrait.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch') return;
    const rect = portrait.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    portrait.style.setProperty('--tilt-x', `${y * -3.5}deg`);
    portrait.style.setProperty('--tilt-y', `${x * 4.5}deg`);
  }, { passive:true });
  portrait.addEventListener('pointerleave', () => {
    portrait.style.setProperty('--tilt-x', '0deg');
    portrait.style.setProperty('--tilt-y', '0deg');
  });
})();

(() => {
  const section = document.querySelector('.stack-section');
  if (!section) return;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tabs = [...section.querySelectorAll('.stack-tab')];
  const stage = section.querySelector('.stack-stage');
  const indexNode = section.querySelector('.stack-index');
  const labelNode = section.querySelector('.stack-label');
  const titleNode = section.querySelector('.stack-overview-copy h3');
  const descriptionNode = section.querySelector('.stack-description');
  const toolsNode = section.querySelector('.stack-tools');
  let active = 0;
  let timer;

  const stacks = {
    web: {
      label:'Web i AI', title:'Szybkie wdrożenia i technologia gotowa do rozwoju',
      description:'Projektujemy, kodujemy, testujemy i publikujemy strony oraz aplikacje. AI wspiera analizę i pracę nad kodem, ale końcowe decyzje zawsze pozostają po stronie zespołu.',
      tools:[['openai','AI','OpenAI Codex','AI i wsparcie kodowania','https://openai.com/codex/'],['github','GH','GitHub','Wersjonowanie i współpraca','https://github.com/'],['vercel','VE','Vercel','Hosting i wdrożenia','https://vercel.com/'],['react','RE','React','Interaktywne interfejsy','https://react.dev/'],['wordpress','WP','WordPress','Zarządzanie treścią','https://wordpress.org/'],['cloudflare','CF','Cloudflare','Szybkość i bezpieczeństwo','https://www.cloudflare.com/']]
    },
    design: {
      label:'Design i branding', title:'Spójny system wizualny od szkicu do wdrożenia',
      description:'Budujemy kierunek wizualny, interfejsy, identyfikacje i materiały kampanii. Narzędzia pomagają utrzymać spójność, tempo pracy i kontrolę nad każdym formatem.',
      tools:[['figma','FI','Figma','UX/UI i prototypowanie','https://www.figma.com/'],['affinityphoto','AP','Affinity Photo','Kreacja i retusz','https://www.affinity.studio/'],['affinitydesigner','AD','Affinity Designer','Logo i grafika wektorowa','https://www.affinity.studio/'],['wacom','WA','Wacom','Szkice i ilustracja','https://www.wacom.com/'],['canva','CA','Canva','Szybkie formaty marki','https://www.canva.com/'],['blender','BL','Blender','Grafika i wizualizacje 3D','https://www.blender.org/']]
    },
    photo: {
      label:'Fotografia i film', title:'Pełna kontrola obrazu od planu po gotowy format',
      description:'Planujemy kadry, realizujemy materiał i prowadzimy postprodukcję. Przygotowujemy zdjęcia oraz filmy gotowe na stronę, social media, kampanię i duży ekran.',
      tools:[['vsco','VS','VSCO','Selekcja i styl obrazu','https://www.vsco.co/'],['affinityphoto','AP','Affinity Photo','Zaawansowany retusz','https://www.affinity.studio/'],['wondersharefilmora','WF','Filmora','Montaż filmowy','https://filmora.wondershare.com/'],['davinciresolve','DR','DaVinci Resolve','Kolor i postprodukcja','https://www.blackmagicdesign.com/products/davinciresolve'],['googlephotos','GP','Google Photos','Archiwizacja materiału','https://www.google.com/photos/about/'],['blackmagicdesign','BM','Blackmagic Design','Produkcja filmowa','https://www.blackmagicdesign.com/']]
    },
    drone: {
      label:'Dron i produkcja', title:'Ujęcia z powietrza połączone z produkcją na ziemi',
      description:'Dobieramy sprzęt do lokalizacji i efektu. Łączymy loty, stabilizowane ujęcia, dźwięk i montaż w jeden materiał, który prowadzi widza i opowiada historię.',
      tools:[['dji','DJ','DJI','Drony i stabilizacja','https://www.dji.com/'],['insta360','I3','Insta360','Ujęcia dynamiczne','https://www.insta360.com/'],['blackmagicdesign','BM','Blackmagic Design','Kamery i produkcja','https://www.blackmagicdesign.com/'],['wondersharefilmora','WF','Filmora','Montaż materiału','https://filmora.wondershare.com/'],['davinciresolve','DR','DaVinci Resolve','Color grading','https://www.blackmagicdesign.com/products/davinciresolve'],['audacity','AU','Audacity','Dźwięk i miks','https://www.audacityteam.org/']]
    },
    marketing: {
      label:'Marketing i analityka', title:'Kampanie oparte na treści, dystrybucji i danych',
      description:'Projektujemy komunikację, uruchamiamy kampanie i analizujemy wyniki. Dzięki temu kolejne działania wynikają z danych, a nie wyłącznie z intuicji.',
      tools:[['meta','ME','Meta','Social media i kampanie','https://about.meta.com/'],['googleads','GA','Google Ads','Kampanie płatne','https://business.google.com/google-ads/'],['googleanalytics','AN','Google Analytics','Analityka zachowań','https://analytics.google.com/'],['mailchimp','MC','Mailchimp','E-mail marketing','https://mailchimp.com/'],['notion','NO','Notion','Planowanie i organizacja','https://www.notion.com/'],['zapier','ZA','Zapier','Automatyzacja procesów','https://zapier.com/']]
    }
  };

  const toolMarkup = ([slug,abbr,name,use,url]) => `<a class="stack-tool" href="${url}" target="_blank" rel="noreferrer" aria-label="${name}, otwórz oficjalną stronę"><span class="stack-icon"><b>${abbr}</b><img src="assets/stack/${slug}.svg" alt=""></span><div><strong>${name}</strong><small>${use}</small></div></a>`;
  const render = (next, user = false) => {
    active = (next + tabs.length) % tabs.length;
    const tab = tabs[active];
    const data = stacks[tab.dataset.stack];
    tabs.forEach((item,i) => { const selected=i===active; item.classList.toggle('is-active',selected); item.setAttribute('aria-selected',String(selected)); item.tabIndex=selected?0:-1; });
    stage.classList.remove('is-changing'); void stage.offsetWidth; stage.classList.add('is-changing');
    indexNode.textContent = `${String(active + 1).padStart(2,'0')} / 05`;
    labelNode.textContent = data.label; titleNode.textContent = data.title; descriptionNode.textContent = data.description;
    toolsNode.innerHTML = data.tools.map(toolMarkup).join('');
    toolsNode.querySelectorAll('img').forEach(image => image.addEventListener('error', () => image.remove(), { once:true }));
    if (user) tab.scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'nearest',inline:'center'});
  };
  const start = () => { clearInterval(timer); if (!reduceMotion) timer=setInterval(() => render(active+1),7200); };
  tabs.forEach((tab,i) => {
    tab.addEventListener('click',() => {render(i,true);start();});
    tab.addEventListener('keydown',event => { if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))return;event.preventDefault();render(active+(['ArrowRight','ArrowDown'].includes(event.key)?1:-1),true);tabs[active].focus();start(); });
  });
  section.addEventListener('pointermove',event => {if(reduceMotion)return;const rect=section.getBoundingClientRect();section.style.setProperty('--stack-x',`${event.clientX-rect.left}px`);section.style.setProperty('--stack-y',`${event.clientY-rect.top}px`);},{passive:true});
  stage.addEventListener('pointerenter',() => clearInterval(timer));stage.addEventListener('pointerleave',start);
  const observer=new IntersectionObserver(entries => entries.forEach(entry => {section.classList.toggle('is-visible',entry.isIntersecting);if(entry.isIntersecting)start();else clearInterval(timer);}),{threshold:.16});
  observer.observe(section);render(0);
})();

(() => {
  const section = document.querySelector('.trust-strip');
  if (!section) return;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const values = [...section.querySelectorAll('.trust-stat strong[data-count]')];
  let played = false;

  section.addEventListener('pointermove', event => {
    if (reduceMotion) return;
    const rect = section.getBoundingClientRect();
    section.style.setProperty('--trust-x', `${event.clientX - rect.left}px`);
    section.style.setProperty('--trust-y', `${event.clientY - rect.top}px`);
  }, { passive:true });

  const animateValues = () => {
    if (played) return;
    played = true;
    values.forEach((node, index) => {
      const target = Number(node.dataset.count);
      const suffix = node.dataset.suffix || '';
      if (reduceMotion) { node.textContent = `${target}${suffix}`; return; }
      const duration = 1000 + index * 140;
      const start = performance.now();
      const tick = now => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  };
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    section.classList.add('is-visible');
    animateValues();
    observer.disconnect();
  }), { threshold:.18 });
  observer.observe(section);
})();

(() => {
  const section = document.querySelector('.why-section');
  if (!section) return;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = [...section.querySelectorAll('.why-item')];
  const number = section.querySelector('.why-stage-number');
  const label = section.querySelector('.why-stage-label');
  const stage = section.querySelector('.why-stage');
  const labels = ['Jeden zespół','Pełna odpowiedzialność','Właściwe rozwiązanie','Stały partner'];
  let active = 0;
  let timer;

  const setActive = (next, user = false) => {
    active = (next + items.length) % items.length;
    items.forEach((item, index) => {
      const selected = index === active;
      item.classList.toggle('is-active', selected);
      item.querySelector('button').setAttribute('aria-expanded', String(selected));
    });
    number.textContent = String(active + 1).padStart(2,'0');
    label.textContent = labels[active];
    stage.classList.remove('is-changing'); void stage.offsetWidth; stage.classList.add('is-changing');
    if (user) restart();
  };
  const restart = () => {
    clearInterval(timer);
    if (!reduceMotion) timer = setInterval(() => setActive(active + 1), 5200);
  };
  items.forEach((item, index) => item.querySelector('button').addEventListener('click', () => setActive(index, true)));
  stage.addEventListener('pointermove', event => {
    if (reduceMotion) return;
    const rect = stage.getBoundingClientRect();
    stage.style.setProperty('--why-x', `${event.clientX - rect.left}px`);
    stage.style.setProperty('--why-y', `${event.clientY - rect.top}px`);
  }, { passive:true });
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    section.classList.toggle('is-visible', entry.isIntersecting);
    if (entry.isIntersecting) restart(); else clearInterval(timer);
  }), { threshold:.16 });
  observer.observe(section);
  setActive(0);
})();

(() => {
  const section = document.querySelector('.process-section');
  if (!section) return;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tabs = [...section.querySelectorAll('.process-tab')];
  const panel = section.querySelector('.process-panel');
  const copy = section.querySelector('.process-copy');
  const index = section.querySelector('.process-index');
  const label = section.querySelector('.process-label');
  const title = section.querySelector('.process-copy h3');
  const summary = section.querySelector('.process-summary');
  const steps = [...section.querySelectorAll('.process-steps li')];
  const progress = section.querySelector('.process-progress span');
  const content = {
    web: { label:'Strony internetowe', title:'Od strategii do strony gotowej sprzedawać.', summary:'Poznajemy odbiorców, porządkujemy treści, projektujemy doświadczenie i wdrażamy szybki serwis przygotowany do dalszego rozwoju.', steps:[['Warsztat','Cel i użytkownicy'],['UX i treść','Struktura serwisu'],['Design','Interfejs i ruch'],['Wdrożenie','Testy i publikacja']] },
    marketing: { label:'Marketing', title:'Komunikacja, która trafia do właściwych ludzi.', summary:'Łączymy analizę, pomysł i dystrybucję. Budujemy plan działań, przygotowujemy materiały i optymalizujemy kampanię na podstawie realnych wyników.', steps:[['Diagnoza','Rynek i cele'],['Koncepcja','Kanały i przekaz'],['Kampania','Kreacja i emisja'],['Optymalizacja','Wyniki i rozwój']] },
    branding: { label:'Branding', title:'Nadajemy marce kierunek i własny język.', summary:'Wydobywamy charakter firmy, definiujemy jej pozycję i tworzymy elastyczny system wizualny spójny w każdym punkcie kontaktu.', steps:[['Odkrycie','DNA marki'],['Strategia','Pozycja i ton'],['Identyfikacja','Logo i system'],['Brandbook','Zasady wdrożenia']] },
    drone: { label:'Fotografia i dron', title:'Planujemy obraz, który pracuje dla marki.', summary:'Od scenariusza i lokalizacji po ujęcia z ziemi i powietrza. Realizujemy materiał, montujemy go i przygotowujemy formaty do wszystkich kanałów.', steps:[['Preprodukcja','Koncepcja i plan'],['Realizacja','Foto i loty'],['Postprodukcja','Selekcja i montaż'],['Formaty','WWW i social media']] },
    events: { label:'Eventy firmowe', title:'Prowadzimy wydarzenie od pomysłu do finału.', summary:'Projektujemy doświadczenie uczestników, organizujemy przestrzeń, oprawę oraz wykonawców i koordynujemy realizację na miejscu.', steps:[['Koncepcja','Cel i scenariusz'],['Produkcja','Miejsce i partnerzy'],['Oprawa','Technika i branding'],['Realizacja','Koordynacja eventu']] }
  };
  let active = 0;
  let step = 0;
  let timer;

  const paintStep = next => {
    step = next % steps.length;
    steps.forEach((item, i) => item.classList.toggle('is-current', i === step));
    progress.style.width = `${(step + 1) * 25}%`;
  };
  const render = (next, user = false) => {
    active = (next + tabs.length) % tabs.length;
    const tab = tabs[active];
    const data = content[tab.dataset.process];
    tabs.forEach((item, i) => { item.classList.toggle('is-active', i === active); item.setAttribute('aria-selected', String(i === active)); item.tabIndex = i === active ? 0 : -1; });
    copy.classList.remove('is-changing'); void copy.offsetWidth; copy.classList.add('is-changing');
    index.textContent = `${String(active + 1).padStart(2,'0')} / 05`;
    label.textContent = data.label; title.textContent = data.title; summary.textContent = data.summary;
    steps.forEach((item, i) => { item.querySelector('strong').textContent = data.steps[i][0]; item.querySelector('small').textContent = data.steps[i][1]; });
    paintStep(0);
    if (user) tab.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block:'nearest', inline:'center' });
  };
  const start = () => {
    clearInterval(timer);
    if (reduceMotion) return;
    timer = setInterval(() => { if (step < 3) paintStep(step + 1); else render(active + 1); }, 1900);
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => { render(i, true); start(); });
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key)) return;
      event.preventDefault(); const direction = ['ArrowRight','ArrowDown'].includes(event.key) ? 1 : -1; render(active + direction, true); tabs[active].focus(); start();
    });
  });
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) start(); else clearInterval(timer); }), { threshold:.22 });
  observer.observe(section);
  panel.addEventListener('pointerenter', () => clearInterval(timer));
  panel.addEventListener('pointerleave', start);
  render(0);
})();

(() => {
  const hero = document.querySelector('.hx-hero');
  const stage = hero.querySelector('.hx-stage');
  const header = hero.querySelector('.hx-header');
  hero.querySelectorAll('.hx-secondary').forEach(button => {
    button.addEventListener('pointermove', event => {
      const rect = button.getBoundingClientRect();
      button.style.setProperty('--button-x', `${event.clientX - rect.left}px`);
      button.style.setProperty('--button-y', `${event.clientY - rect.top}px`);
    }, { passive: true });
    button.addEventListener('pointerleave', () => {
      button.style.setProperty('--button-x', '50%');
      button.style.setProperty('--button-y', '50%');
    });
  });
  const toggle = hero.querySelector('.hx-menu-toggle');
  const menu = hero.querySelector('.hx-menu');
  const mobileServices = hero.querySelector('.hx-mobile-services');
  const mobileServicesTrigger = hero.querySelector('.hx-mobile-services-trigger');
  const mobileServicesList = hero.querySelector('.hx-mobile-services-list');
  const desktopServices = hero.querySelector('.hx-nav-services');
  const desktopServicesTrigger = hero.querySelector('.hx-nav-services-trigger');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = matchMedia('(max-width:800px)');
  const img = hero.querySelector('#hx-ribbon-image');
  const canvas = hero.querySelector('canvas');
  let opened = false, lastFocus, restoreScroll = 0, closeTimer;
  function setMobileServices(open) {
    mobileServices.classList.toggle('is-open', open);
    mobileServicesList.classList.toggle('is-open', open);
    mobileServicesTrigger.setAttribute('aria-expanded', String(open));
  }
  function setDesktopServices(open) {
    desktopServices.classList.toggle('is-open', open);
    desktopServicesTrigger.setAttribute('aria-expanded', String(open));
  }
  function setMenu(open) {
    if (open === opened) return;
    opened = open;
    clearTimeout(closeTimer);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    document.body.classList.toggle('hx-menu-open', open);
    if (open) {
      setDesktopServices(false);
      menu.hidden = false;
      menu.inert = false;
      stage.inert = true;
      requestAnimationFrame(() => menu.classList.add('is-open'));
      lastFocus = document.activeElement;
      restoreScroll = scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${restoreScroll}px`;
      document.body.style.width = '100%';
      setTimeout(() => {
        if (opened) menu.querySelector('.hx-menu-main-link')?.focus({preventScroll:true});
      }, motion.matches ? 0 : 240);
    } else {
      menu.classList.remove('is-open');
      menu.inert = true;
      stage.inert = false;
      setMobileServices(false);
      closeTimer = setTimeout(() => { if (!opened) menu.hidden = true; }, motion.matches ? 0 : 360);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      const previous = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0,restoreScroll);
      document.documentElement.style.scrollBehavior = previous;
      lastFocus?.focus({preventScroll:true});
    }
  }
  toggle.addEventListener('click', () => setMenu(!opened));
  mobileServicesTrigger.addEventListener('click', () => {
    setMobileServices(mobileServicesTrigger.getAttribute('aria-expanded') !== 'true');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  desktopServicesTrigger.addEventListener('click', () => {
    setDesktopServices(desktopServicesTrigger.getAttribute('aria-expanded') !== 'true');
  });
  desktopServices.addEventListener('pointerenter', () => setDesktopServices(true));
  desktopServices.addEventListener('pointerleave', () => setDesktopServices(false));
  desktopServices.addEventListener('focusin', () => setDesktopServices(true));
  desktopServices.addEventListener('focusout', event => {
    if (!desktopServices.contains(event.relatedTarget)) setDesktopServices(false);
  });
  document.addEventListener('pointerdown', event => {
    if (!desktopServices.contains(event.target)) setDesktopServices(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && desktopServices.classList.contains('is-open')) {
      event.preventDefault();
      setDesktopServices(false);
      desktopServicesTrigger.focus({preventScroll:true});
    }
  });
  document.addEventListener('keydown', e => {
    if (!opened) return;
    if (e.key === 'Escape') {e.preventDefault();setMenu(false);}
    if (e.key === 'Tab') {
      const nodes = [toggle, ...menu.querySelectorAll('a[href],button:not([disabled])')];
      const current = nodes.indexOf(document.activeElement);
      e.preventDefault();nodes[(current + (e.shiftKey ? -1 : 1) + nodes.length) % nodes.length].focus();
    }
  });
  mobile.addEventListener('change', () => {
    if (!mobile.matches) setMenu(false);
    else setDesktopServices(false);
  });
  const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 20);
  addEventListener('scroll', onScroll, {passive:true});onScroll();
  // Project captions stay as vector text, mapped into the ribbon's photographed planes.
  const captionNodes=[...hero.querySelectorAll('.hx-panel')];
  function smoothStep(a,b,value){const t=Math.max(0,Math.min(1,(value-a)/(b-a)));return t*t*(3-2*t);}
  // Identical spatial field to the shader. Invert texture sampling so caption
  // vertices follow the visible surface, rather than moving in the opposite direction.
  function ribbonPoint(u,v,time,px,py){
    let x=u,y=v;
    for(let i=0;i<12;i++){
      const edge=smoothStep(0,.04,x)*smoothStep(0,.04,1-x)*smoothStep(0,.025,y)*smoothStep(0,.025,1-y);
      const dx=(Math.sin(y*13-time*.64)*.0038+Math.sin(y*24+time*.4)*.0013+px*.008)*edge;
      const dy=(Math.cos(x*11+time*.47)*.0022+py*.004)*edge;
      x=u-dx;y=v-dy;
    }
    return [x,y];
  }
  function fitCaptions(time=null,px=0,py=0) {
    const reference = mobile.matches ? [941,1672] : [1672,941];
    const quads = mobile.matches ? [
      [[295,1094],[493,1055],[540,1225],[316,1280]],
      [[650,1239],[837,1264],[856,1427],[663,1408]],
      [[281,1310],[487,1396],[488,1547],[295,1514]]
    ] : [
      [[773,94],[924,122],[953,282],[832,292]],
      [[1235,316],[1336,352],[1381,528],[1264,505]],
      [[1056,438],[1196,518],[1136,699],[1035,670]]
    ];
    const stageWidth=stage.clientWidth,stageHeight=stage.clientHeight;
    const scale=stageWidth/reference[0];
    const w=220*scale,h=240*scale;
    captionNodes.forEach((panel,index)=>{
      const to=quads[index].map(([x,y])=>{
        const u=x/reference[0],v=y/reference[1];
        const [tx,ty]=time===null?[u,v]:ribbonPoint(u,v,time,px,py);
        return [tx*stageWidth,ty*stageHeight];
      });
      const from=[[0,0],[w,0],[w,h],[0,h]];
      const rows=[];
      for(let i=0;i<4;i++){
        const [x,y]=from[i],[u,v]=to[i];
        rows.push([x,y,1,0,0,0,-u*x,-u*y,u]);
        rows.push([0,0,0,x,y,1,-v*x,-v*y,v]);
      }
      for(let c=0;c<8;c++){
        let pivot=c;for(let r=c+1;r<8;r++)if(Math.abs(rows[r][c])>Math.abs(rows[pivot][c]))pivot=r;
        [rows[c],rows[pivot]]=[rows[pivot],rows[c]];
        const d=rows[c][c];if(Math.abs(d)<1e-10)return;
        for(let k=c;k<9;k++)rows[c][k]/=d;
        for(let r=0;r<8;r++){if(r===c)continue;const m=rows[r][c];for(let k=c;k<9;k++)rows[r][k]-=m*rows[c][k];}
      }
      const [a,b,c,d,e,f,g,hp]=rows.map(r=>r[8]);
      panel.style.width=`${w}px`;panel.style.height=`${h}px`;
      panel.style.transform=`matrix3d(${a},${d},0,${g},${b},${e},0,${hp},0,0,1,0,${c},${f},0,1)`;
      panel.style.setProperty('--caption-scale',scale);
    });
  }
  function fitTitle() {
    fitCaptions();
    hero.querySelectorAll('.hx-line').forEach(line => {
      if (!line.offsetWidth) return;
      const text = line.firstElementChild;
      text.style.setProperty('--fit', line.clientWidth / text.offsetWidth);
    });
  }
  document.fonts.ready.then(fitTitle);
  const ro = new ResizeObserver(fitTitle);ro.observe(stage);fitTitle();

  let targetX=0,targetY=0;
  stage.addEventListener('pointermove',e=>{
    if(e.pointerType==='touch')return;
    const rect=stage.getBoundingClientRect();
    targetX=(e.clientX-rect.left)/rect.width-.5;
    targetY=(e.clientY-rect.top)/rect.height-.5;
  },{passive:true});
  stage.addEventListener('pointerleave',()=>{targetX=0;targetY=0;});

  // The reference artwork is warped on the GPU: live waves alter its glass
  // surface while all typography and controls remain independent HTML.
  const gl = canvas.getContext('webgl',{alpha:false,antialias:false,powerPreference:'low-power'});
  if(!gl)return;
  function shader(type,source){const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s;}
  let program;
  try {
    program=gl.createProgram();
    gl.attachShader(program,shader(gl.VERTEX_SHADER,'attribute vec2 position;varying vec2 uv;void main(){uv=position*.5+.5;gl_Position=vec4(position,0.,1.);}'));
    gl.attachShader(program,shader(gl.FRAGMENT_SHADER,`
      #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
      #else
      precision mediump float;
      #endif
      varying vec2 uv;
      uniform sampler2D art;
      uniform float time;
      uniform vec2 pointer;
      void main(){
        vec2 p=vec2(uv.x,1.-uv.y);
        vec3 original=texture2D(art,p).rgb;
        float glass=smoothstep(.07,.30,original.b-original.r);
        float edge=smoothstep(0.,.04,p.x)*smoothstep(0.,.04,1.-p.x)*smoothstep(0.,.025,p.y)*smoothstep(0.,.025,1.-p.y);
        vec2 wave=vec2(sin(p.y*13.-time*.64)*.0038+sin(p.y*24.+time*.4)*.0013,cos(p.x*11.+time*.47)*.0022);
        wave+=pointer*vec2(.008,.004);
        p+=wave*edge;
        vec3 color=texture2D(art,p).rgb;
        float shine=pow(max(0.,sin(p.x*5.+p.y*9.-time*.33)),18.)*.055*glass;
        gl_FragColor=vec4(color+vec3(.15,.4,.75)*shine,1.);
      }`));
    gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))return;
  }catch{return;}
  gl.useProgram(program);
  const buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
  const pos=gl.getAttribLocation(program,'position');gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0);
  const texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  const timeLoc=gl.getUniformLocation(program,'time'),pointerLoc=gl.getUniformLocation(program,'pointer');
  let loaded=false,visible=true,frame=0,x=0,y=0,clock=0,last=0;
  function upload(){
    if(!img.complete||!img.naturalWidth)return;
    try{gl.bindTexture(gl.TEXTURE_2D,texture);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,img);loaded=true;resize();start();}catch{canvas.hidden=true;}
  }
  function resize(){
    const dpr=Math.min(devicePixelRatio,2.5),w=Math.round(stage.clientWidth*dpr),h=Math.round(stage.clientHeight*dpr);
    if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);}
  }
  function render(now){
    frame=0;if(!loaded||!visible||document.hidden||motion.matches)return;
    const elapsed=last?Math.min(now-last,50):16;last=now;clock+=elapsed*.0015;
    x+=(targetX-x)*.05;y+=(targetY-y)*.05;
    fitCaptions(clock,x,y);
    gl.uniform1f(timeLoc,clock);gl.uniform2f(pointerLoc,x,y);gl.drawArrays(gl.TRIANGLES,0,6);
    hero.querySelector('.hx-art').classList.add('is-live');
    frame=requestAnimationFrame(render);
  }
  function start(){if(!frame&&!motion.matches&&!document.hidden&&visible){last=0;frame=requestAnimationFrame(render);}}
  function stop(){cancelAnimationFrame(frame);frame=0;}
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;visible?start():stop();});observer.observe(stage);
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(stage);
  img.addEventListener('load',upload);upload();
  document.addEventListener('visibilitychange',()=>document.hidden?stop():start());
  motion.addEventListener('change',()=>{if(motion.matches){stop();fitCaptions();}else start();});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();stop();fitCaptions();hero.querySelector('.hx-art').classList.remove('is-live');});
  addEventListener('pagehide',stop);
})();
