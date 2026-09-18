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
