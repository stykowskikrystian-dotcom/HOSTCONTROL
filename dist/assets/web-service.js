(() => {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nav = document.querySelector('[data-nav]');
  const menuButton = document.querySelector('.web-menu-button');
  const mobileMenu = document.querySelector('.web-mobile-menu');

  const updateNav = () => nav?.classList.toggle('is-scrolled', scrollY > 28);
  addEventListener('scroll', updateNav, { passive:true });
  updateNav();

  const setMenu = open => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    mobileMenu.classList.toggle('is-open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
  };
  menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });

  const revealSections = [...document.querySelectorAll('.reveal-section')];
  if (reduceMotion) revealSections.forEach(section => section.classList.add('is-visible'));
  else {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    }), { threshold:.08, rootMargin:'0px 0px -7% 0px' });
    revealSections.forEach(section => revealObserver.observe(section));
  }

  const tilt = document.querySelector('[data-tilt]');
  if (tilt && !reduceMotion) {
    tilt.addEventListener('pointermove', event => {
      if (event.pointerType === 'touch') return;
      const rect = tilt.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      tilt.style.transform = `perspective(1100px) rotateX(${y * -3}deg) rotateY(${x * 4}deg)`;
    }, { passive:true });
    tilt.addEventListener('pointerleave', () => tilt.style.transform = '');
  }

  const scope = document.querySelector('.web-scope');
  if (scope) {
    const tabs = [...scope.querySelectorAll('.scope-tab')];
    const stage = scope.querySelector('.scope-stage');
    const number = scope.querySelector('.scope-number');
    const title = scope.querySelector('.scope-stage h3');
    const description = scope.querySelector('.scope-description');
    const list = scope.querySelector('.scope-list');
    const image = scope.querySelector('.scope-window img');
    const data = {
      firmowa:{number:'01 / STRONA FIRMOWA',title:'Profesjonalna obecność, która prowadzi do kontaktu',description:'Przejrzysty serwis dla firmy, usługi lub marki. Porządkujemy ofertę, budujemy wiarygodność i prowadzimy odbiorcę do telefonu, formularza albo rezerwacji.',list:['Architektura treści i UX','Indywidualny projekt graficzny','CMS do samodzielnej edycji','Analityka i cele konwersji'],image:'../../assets/project-webdesign.webp',alt:'Przykład nowoczesnego projektu strony firmowej'},
      sklep:{number:'02 / SKLEP INTERNETOWY',title:'Zakupy zaprojektowane bez niepotrzebnych barier',description:'Budujemy wygodny katalog, karty produktów, koszyk, płatności i panel zamówień. Całość projektujemy wokół prostego wyboru i bezpiecznego zakupu.',list:['Katalog i warianty produktów','Płatności i metody dostawy','Panel zamówień i klientów','Analityka e-commerce'],image:'../../assets/portfolio-dlawas.webp',alt:'Przykład dynamicznego interfejsu sprzedażowego'},
      landing:{number:'03 / LANDING PAGE',title:'Jedna oferta, jeden cel i jasna decyzja',description:'Skoncentrowana strona kampanii, produktu lub wydarzenia. Każdy element wspiera konkretną akcję: zapis, telefon, zapytanie albo zakup.',list:['Strategia komunikatu','Sekcje nastawione na konwersję','Formularz i integracje','Pomiar efektów kampanii'],image:'../../assets/portfolio-krzywe.webp',alt:'Przykład strony oferty i rezerwacji'},
      custom:{number:'04 / PROJEKT DEDYKOWANY',title:'Funkcje zaprojektowane dokładnie pod Twój proces',description:'Portal, konfigurator, system rezerwacji lub nietypowa aplikacja webowa. Najpierw modelujemy działanie, później dobieramy architekturę i technologię.',list:['Analiza procesu i funkcji','Prototyp rozwiązania','Integracje z usługami','Plan dalszego rozwoju'],image:'../../assets/digital.jpg',alt:'Kodowanie dedykowanego rozwiązania internetowego'}
    };
    const render = index => {
      const tab = tabs[index];
      const item = data[tab.dataset.scope];
      tabs.forEach((node, i) => { const active = i === index; node.classList.toggle('is-active', active); node.setAttribute('aria-selected', String(active)); node.tabIndex = active ? 0 : -1; });
      stage.classList.remove('is-changing'); void stage.offsetWidth; stage.classList.add('is-changing');
      number.textContent = item.number; title.textContent = item.title; description.textContent = item.description;
      list.innerHTML = item.list.map(value => `<li>${value}</li>`).join('');
      image.src = item.image; image.alt = item.alt;
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => render(index));
      tab.addEventListener('keydown', event => {
        if (!['ArrowLeft','ArrowRight'].includes(event.key)) return;
        event.preventDefault(); const next = (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length; render(next); tabs[next].focus();
      });
    });
  }

  const processSteps = [...document.querySelectorAll('.process-step')];
  const processRail = document.querySelector('.process-rail span');
  const consoleIndex = document.querySelector('.console-index');
  const consoleLabel = document.querySelector('.console-label');
  if (processSteps.length) {
    const activate = step => {
      const index = processSteps.indexOf(step);
      processSteps.forEach((node, i) => node.classList.toggle('is-active', i === index));
      if (processRail) processRail.style.height = `${((index + 1) / processSteps.length) * 100}%`;
      if (consoleIndex) consoleIndex.textContent = String(index + 1).padStart(2,'0');
      if (consoleLabel) consoleLabel.textContent = step.querySelector('h3').textContent;
    };
    if (!reduceMotion) {
      const processObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) activate(entry.target); }), { threshold:.62, rootMargin:'-18% 0px -26% 0px' });
      processSteps.forEach(step => processObserver.observe(step));
    }
  }

  const timeTabs = [...document.querySelectorAll('.time-tab')];
  const timeResult = document.querySelector('.timeline-result');
  const timeData = {
    start:{time:'2–3',unit:'tygodnie',title:'Skoncentrowana strona kampanii lub oferty',description:'Jeden konkretny cel, przemyślana narracja i szybkie wdrożenie. Termin liczymy od zebrania materiałów i zatwierdzenia zakresu.',tags:['Strategia','UX/UI','Wdrożenie','Analityka']},
    business:{time:'4–7',unit:'tygodni',title:'Pełna strona firmowa gotowa do rozwoju',description:'Czas obejmuje strukturę, projekt kluczowych widoków, wdrożenie podstron, panel treści, testy oraz przygotowanie do publikacji.',tags:['Warsztat','Treści','Design','CMS','SEO']},
    shop:{time:'6–10',unit:'tygodni',title:'Sklep z kompletną ścieżką zakupową',description:'Termin zależy od liczby produktów, integracji płatności, dostaw, wariantów i sposobu przekazania danych produktowych.',tags:['UX sklepu','Produkty','Płatności','Dostawy','Testy']},
    custom:{time:'8+',unit:'tygodni',title:'Rozwiązanie dopasowane do własnego procesu',description:'Po analizie funkcji dzielimy projekt na etapy. Dzięki temu pierwsza użyteczna wersja może wystartować wcześniej, a kolejne moduły rozwijamy świadomie.',tags:['Analiza','Prototyp','Architektura','Integracje','Rozwój']}
  };
  const renderTime = index => {
    const tab = timeTabs[index]; const item = timeData[tab.dataset.time];
    timeTabs.forEach((node,i) => { const active=i===index; node.classList.toggle('is-active',active); node.setAttribute('aria-selected',String(active)); node.tabIndex=active?0:-1; });
    timeResult.classList.remove('is-changing'); void timeResult.offsetWidth; timeResult.classList.add('is-changing');
    timeResult.querySelector('.timeline-time strong').textContent=item.time; timeResult.querySelector('.timeline-time span').textContent=item.unit;
    timeResult.querySelector('.timeline-copy h3').textContent=item.title; timeResult.querySelector('.timeline-copy>p').textContent=item.description;
    timeResult.querySelector('.timeline-copy>div').innerHTML=item.tags.map(tag=>`<span>${tag}</span>`).join('');
  };
  timeTabs.forEach((tab,index) => { tab.addEventListener('click',()=>renderTime(index)); tab.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight'].includes(event.key))return;event.preventDefault();const next=(index+(event.key==='ArrowRight'?1:-1)+timeTabs.length)%timeTabs.length;renderTime(next);timeTabs[next].focus();}); });

  document.querySelectorAll('.faq-item button').forEach(button => button.addEventListener('click', () => {
    const item = button.closest('.faq-item'); const open = !item.classList.contains('is-open');
    document.querySelectorAll('.faq-item').forEach(other => { other.classList.remove('is-open'); other.querySelector('button').setAttribute('aria-expanded','false'); });
    if (open) { item.classList.add('is-open'); button.setAttribute('aria-expanded','true'); }
  }));
})();
