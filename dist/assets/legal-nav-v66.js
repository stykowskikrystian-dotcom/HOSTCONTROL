(()=>{
  const header=document.querySelector('.legal-hx-header');
  const toggle=header?.querySelector('.hx-menu-toggle');
  const menu=document.querySelector('.legal-hx-menu');
  const mobileServices=menu?.querySelector('.hx-mobile-services');
  const mobileServicesTrigger=menu?.querySelector('.hx-mobile-services-trigger');
  const mobileServicesList=menu?.querySelector('.hx-mobile-services-list');
  const desktopServices=header?.querySelector('.hx-nav-services');
  const desktopServicesTrigger=header?.querySelector('.hx-nav-services-trigger');
  if(!header||!toggle||!menu)return;
  let opened=false,lastFocus=null,restoreScroll=0,closeTimer;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');

  function setMobileServices(open){
    mobileServices?.classList.toggle('is-open',open);
    mobileServicesList?.classList.toggle('is-open',open);
    mobileServicesTrigger?.setAttribute('aria-expanded',String(open));
  }
  function setDesktopServices(open){
    desktopServices?.classList.toggle('is-open',open);
    desktopServicesTrigger?.setAttribute('aria-expanded',String(open));
  }
  function setMenu(open){
    if(open===opened)return;
    opened=open;clearTimeout(closeTimer);
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'Zamknij menu':'Otwórz menu');
    document.body.classList.toggle('hx-menu-open',open);
    if(open){
      setDesktopServices(false);setMobileServices(true);
      menu.hidden=false;menu.inert=false;
      requestAnimationFrame(()=>menu.classList.add('is-open'));
      lastFocus=document.activeElement;restoreScroll=scrollY;
      document.body.style.position='fixed';document.body.style.top=`-${restoreScroll}px`;document.body.style.width='100%';
      setTimeout(()=>mobileServicesTrigger?.focus({preventScroll:true}),reduced.matches?0:220);
    }else{
      menu.classList.remove('is-open');menu.inert=true;setMobileServices(false);
      closeTimer=setTimeout(()=>{if(!opened)menu.hidden=true},reduced.matches?0:360);
      document.body.style.position='';document.body.style.top='';document.body.style.width='';
      const behavior=document.documentElement.style.scrollBehavior;document.documentElement.style.scrollBehavior='auto';window.scrollTo(0,restoreScroll);document.documentElement.style.scrollBehavior=behavior;
      lastFocus?.focus({preventScroll:true});
    }
  }
  toggle.addEventListener('click',()=>setMenu(!opened));
  mobileServicesTrigger?.addEventListener('click',()=>setMobileServices(mobileServicesTrigger.getAttribute('aria-expanded')!=='true'));
  menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
  desktopServicesTrigger?.addEventListener('click',()=>setDesktopServices(desktopServicesTrigger.getAttribute('aria-expanded')!=='true'));
  desktopServices?.addEventListener('pointerenter',()=>setDesktopServices(true));
  desktopServices?.addEventListener('pointerleave',()=>setDesktopServices(false));
  desktopServices?.addEventListener('focusin',()=>setDesktopServices(true));
  desktopServices?.addEventListener('focusout',event=>{if(!desktopServices.contains(event.relatedTarget))setDesktopServices(false)});
  document.addEventListener('pointerdown',event=>{if(desktopServices&&!desktopServices.contains(event.target))setDesktopServices(false)});
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'){if(opened){event.preventDefault();setMenu(false)}else setDesktopServices(false)}
    if(opened&&event.key==='Tab'){
      const nodes=[toggle,...menu.querySelectorAll('a[href],button:not([disabled])')];
      const index=nodes.indexOf(document.activeElement);event.preventDefault();nodes[(index+(event.shiftKey?-1:1)+nodes.length)%nodes.length].focus();
    }
  });
  addEventListener('scroll',()=>header.classList.toggle('is-scrolled',scrollY>20),{passive:true});
})();
