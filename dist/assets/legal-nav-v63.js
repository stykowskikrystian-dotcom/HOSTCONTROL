(()=>{
  const header=document.querySelector('[data-site-nav]');
  const menu=document.querySelector('#legal-menu');
  const toggle=document.querySelector('.site-menu-button');
  const mobileServices=document.querySelector('.mobile-services-button');
  const mobileList=document.querySelector('.mobile-services-list');
  const desktopServices=document.querySelector('.site-services');
  const desktopButton=desktopServices?.querySelector('button');
  if(!header||!menu||!toggle)return;

  const setMenu=(open)=>{
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'Zamknij menu':'Otwórz menu');
    document.body.classList.toggle('menu-open',open);
    if(open){menu.hidden=false;menu.inert=false;requestAnimationFrame(()=>menu.classList.add('is-open'));}
    else{menu.classList.remove('is-open');menu.inert=true;setTimeout(()=>{if(!menu.classList.contains('is-open'))menu.hidden=true},350);}
  };
  toggle.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
  mobileServices?.addEventListener('click',()=>{const open=mobileServices.getAttribute('aria-expanded')!=='true';mobileServices.setAttribute('aria-expanded',String(open));mobileList?.classList.toggle('is-open',open)});
  menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
  desktopButton?.addEventListener('click',()=>{const open=!desktopServices.classList.contains('is-open');desktopServices.classList.toggle('is-open',open);desktopButton.setAttribute('aria-expanded',String(open))});
  document.addEventListener('click',event=>{if(desktopServices&&!desktopServices.contains(event.target)){desktopServices.classList.remove('is-open');desktopButton?.setAttribute('aria-expanded','false')}});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){setMenu(false);desktopServices?.classList.remove('is-open');desktopButton?.setAttribute('aria-expanded','false')}});
})();
