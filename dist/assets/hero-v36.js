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

(() => {
  const hero = document.querySelector('.hx-hero');
  const stage = hero.querySelector('.hx-stage');
  const header = hero.querySelector('.hx-header');
  const toggle = hero.querySelector('.hx-menu-toggle');
  const menu = hero.querySelector('.hx-menu');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = matchMedia('(max-width:800px)');
  const img = hero.querySelector('#hx-ribbon-image');
  const canvas = hero.querySelector('canvas');
  let opened = false, lastFocus, restoreScroll = 0;
  function setMenu(open) {
    if (open === opened) return;
    opened = open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    menu.hidden = !open;
    menu.inert = !open;
    stage.inert = open;
    document.body.classList.toggle('hx-menu-open', open);
    if (open) {
      lastFocus = document.activeElement;
      restoreScroll = scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${restoreScroll}px`;
      document.body.style.width = '100%';
      menu.querySelector('a').focus({preventScroll:true});
    } else {
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
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => {
    if (!opened) return;
    if (e.key === 'Escape') {e.preventDefault();setMenu(false);}
    if (e.key === 'Tab') {
      const nodes = [toggle, ...menu.querySelectorAll('a')];
      const current = nodes.indexOf(document.activeElement);
      e.preventDefault();nodes[(current + (e.shiftKey ? -1 : 1) + nodes.length) % nodes.length].focus();
    }
  });
  mobile.addEventListener('change', () => {if (!mobile.matches) setMenu(false);});
  const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 20);
  addEventListener('scroll', onScroll, {passive:true});onScroll();
  function fitTitle() {
    hero.querySelectorAll('.hx-line').forEach(line => {
      if (!line.offsetWidth) return;
      const text = line.firstElementChild;
      text.style.setProperty('--fit', line.clientWidth / text.offsetWidth);
    });
  }
  document.fonts.ready.then(fitTitle);
  const ro = new ResizeObserver(fitTitle);ro.observe(stage);fitTitle();

  let targetX=0,targetY=0,drag=0, selected=0;
  
  const hits = [...hero.querySelectorAll('.hx-panel')];
  let highlightTimer;
  function select(n) {
    selected=(n+3)%3;
    hits.forEach((hit,i)=>hit.classList.toggle('is-current',i===selected));
    targetX=(selected-1.5)*.5;
    clearTimeout(highlightTimer);highlightTimer=setTimeout(()=>hits.forEach(hit=>hit.classList.remove('is-current')),1600);
  }
  hero.querySelector('.hx-drag').addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();select(selected+(e.key==='ArrowRight'?1:-1));}});
  let origin=null, moved=false;
  for (const el of [...hits,hero.querySelector('.hx-drag')]) {
    el.addEventListener('pointerdown',e=>{origin={x:e.clientX,y:e.clientY,id:e.pointerId};moved=false;el.setPointerCapture(e.pointerId);});
    el.addEventListener('pointermove',e=>{
      if(!origin)return;
      const dx=e.clientX-origin.x;drag=dx/stage.clientWidth;
      if(Math.abs(dx)>8)moved=true;
      targetX=drag*6;
    });
    const end=e=>{
      if(!origin)return;
      if(moved&&Math.abs(e.clientX-origin.x)>25)select(selected+(e.clientX<origin.x?1:-1));
      origin=null;drag=0;
    };
    el.addEventListener('pointerup',end);
    el.addEventListener('pointercancel',()=>{origin=null;drag=0;});
    el.addEventListener('click',e=>{if(moved){e.preventDefault();e.stopImmediatePropagation();moved=false;}});
  }
  hero.querySelector('.hx-drag').addEventListener('click',()=>{if(!moved)select(selected+1);});
  stage.addEventListener('pointermove',e=>{
    if(e.pointerType==='touch'||origin)return;
    const rect=stage.getBoundingClientRect();
    targetX=(e.clientX-rect.left)/rect.width-.5;
    targetY=(e.clientY-rect.top)/rect.height-.5;
  },{passive:true});
  stage.addEventListener('pointerleave',()=>{if(!origin){targetX=0;targetY=0;}});

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
      precision mediump float;
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
        p+=wave*edge*(.24+glass*.76);
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
    hero.querySelector('.hx-panels').style.transform = `translate(${Math.sin(clock*.64)*2+x*3}px, ${Math.cos(clock*.47)*1.5+y*2}px)`;
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
  motion.addEventListener('change',()=>motion.matches?stop():start());
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();stop();hero.querySelector('.hx-art').classList.remove('is-live');});
  addEventListener('pagehide',stop);
})();
