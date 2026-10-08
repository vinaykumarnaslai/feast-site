const IMG={c:"assets/clean.webp",b:"assets/broken.webp"};const KY=Array.from({length:120},(_,i)=>`assets/frames/f${String(i).padStart(3,"0")}.webp`);
(()=>{
const $=s=>document.getElementById(s),RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const cl=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),mp=(p,a,b)=>cl((p-a)/(b-a)),lerp=(a,b,t)=>a+(b-a)*t,eo=t=>1-Math.pow(1-t,3),eio=t=>t*t*(3-2*t);
const kf=(p,a)=>{for(let i=1;i<a.length;i++)if(p<=a[i][0]){const[p0,v0]=a[i-1],[p1,v1]=a[i];return lerp(v0,v1,eio(cl((p-p0)/(p1-p0))))}return a[a.length-1][1]};
/* ---- data ---- */
const F=[{n:'Milk Chocolate',d:'The classic bar. Smooth, simple, snappable.',c:'#129BEF',t:'#F5EFE3',h:0,k:'classic'},{n:'Milk Crunch',d:'Milk chocolate with a loud little crunch.',c:'#F1A735',t:'#151515',h:-6,k:'crunch'},{n:'Cookies & Creme',d:'Cookie bits meet creamy chocolate.',c:'#F5EFE3',t:'#129BEF',h:0,k:'sweet'},{n:'Caramel',d:'Chocolate with a sweet, gooey twist.',c:'#F1A735',t:'#552814',h:12,k:'sweet'},{n:'Peanut Butter',d:'Salty-sweet and a little bit nutty.',c:'#552814',t:'#F1A735',h:-10,k:'crunch'},{n:'Mario Galaxy Cocoa Crunch',d:'Limited-time cocoa crunch collab.',c:'#151515',t:'#F5EFE3',h:-30,k:'crunch'}];
const P=[['Cocoa sourced on Fairtrade terms','The brand publicly describes sourcing cocoa on Fairtrade terms.'],['Living-income reference pricing','Public commitments mention living-income reference pricing for cocoa farmers.'],['Child-protection systems','Public info describes working with farms and cooperatives that use child-labor monitoring and remediation systems.']];
const Q=[['What is this?','An unofficial, fan-made design concept. Nothing here is for sale.'],['What flavors are there?','Milk Chocolate, Milk Crunch, Cookies & Creme, Caramel, Peanut Butter, plus the limited-time Mario Galaxy Cocoa Crunch. Cups, gummies, chocolate milk and bundles are in the shop.'],['Where is nutrition info?','On the real product packaging and the official brand site. This concept does not invent nutrition data.'],['How is cocoa sourced?','See the cocoa section for the publicly described commitments, and verify them on official sources.'],['Allergens?','Always check the real pack. Chocolate products can contain milk and may contain other allergens.']];
/* ---- flavors ---- */
$('fg').innerHTML=F.map((f,i)=>`<article class="fc rv" style="--c:${f.c};--t:${f.t}"><small>0${i+1}</small><h3>${f.n}</h3><img data-i alt="" style="filter:hue-rotate(${f.h}deg) drop-shadow(0 24px 22px rgba(0,0,0,.35))"><p>${f.d}</p></article>`).join('');
document.querySelectorAll('img[data-i]').forEach(e=>e.src=IMG.c);
/* ---- shop: the real lineup (names/formats/prices from the official store listing, Oct 2026) ---- */
const PR=[['Milk Chocolate','chocolate','King Size · 10 pack',29.99,0,0],['Milk Crunch','chocolate','King Size · 10 pack',29.99,0,-6],['Cookies & Creme','chocolate','King Size · 10 pack',29.99,0,0],['Caramel','chocolate','King Size · 10 pack',29.99,0,12],['Peanut Butter','chocolate','King Size · 10 pack',29.99,0,-10],['Mario Galaxy Cocoa Crunch','chocolate','King Size · 10 pack',23.99,1,-30],
['Peanut Butter Cups','cups','24 packs of 2 cups',20.99,0,0],['Hazelnut Cups','cups','24 packs of 2 cups',0,1,25],['Yoshi Eggs','cups','12 packs of 2 cups',0,1,110],['× Liquid Death PB Cup Bundle','cups','Collab bundle',0,1,200],
['Raspberry Sour Gummies','gummies','Sour Strikes · 9 large bags',0,0,150],['Assorted Sour Gummies','gummies','Sour Strikes · 9 large bags',0,0,0],['Mario Sour Boosts','gummies','12 standard bags',27.99,1,60],
['Chocolate Milk','milk','14oz bottles · 12 pack',14.99,0,0],
['Chocolate Variety Bulk Box','bundles','3 lb box',45,0,0],['Snack-Size Variety Bag','bundles','2 bags · 25 pieces each',24.99,0,0],['Milk Chocolate 2×5 Pack','bundles','Standard size · 2× 5 pack',20.99,0,0],['Milk Crunch 2×5 Pack','bundles','Standard size · 2× 5 pack',20.99,0,-6]];
const CC={chocolate:['#F5EFE3','#151515'],cups:['#552814','#F1A735'],gummies:['#F1A735','#151515'],milk:['#151515','#F5EFE3'],bundles:['#129BEF','#F5EFE3']};
const art=p=>{const k=p[1],f=`filter:hue-rotate(${p[5]}deg)`;
 if(k=='chocolate')return`<img src="${IMG.c}" alt="" style="${f}">`;
 if(k=='bundles')return`<div class="stk">${[0,1,2].map(i=>`<img src="${IMG.c}" alt="" style="top:${i*14-12}%;transform:rotate(${i*5-5}deg);${f}">`).join('')}</div>`;
 if(k=='cups')return`<svg viewBox="0 0 220 150" style="${f}"><g fill="#F1A735"><ellipse cx="72" cy="92" rx="52" ry="30"/><ellipse cx="150" cy="82" rx="52" ry="30"/></g><g fill="#552814"><ellipse cx="72" cy="78" rx="52" ry="30"/><ellipse cx="150" cy="68" rx="52" ry="30"/></g><g fill="#7a4326"><ellipse cx="72" cy="74" rx="34" ry="17"/><ellipse cx="150" cy="64" rx="34" ry="17"/></g></svg>`;
 if(k=='gummies')return`<svg viewBox="0 0 200 160" style="${f}"><path d="M50 14h100l12 134H38z" fill="#129BEF"/><path d="M50 14h100v12H50z" fill="#fff" opacity=".5"/><circle cx="100" cy="82" r="30" fill="#F5EFE3"/><text x="100" y="90" text-anchor="middle" font-size="24" fill="#151515">SOUR</text><g fill="#d6336c"><rect x="26" y="118" width="26" height="14" rx="7" transform="rotate(-20 39 125)"/><rect x="146" y="112" width="26" height="14" rx="7" transform="rotate(24 159 119)"/></g></svg>`;
 return`<svg viewBox="0 0 120 180"><rect x="44" y="6" width="32" height="26" rx="6" fill="#F5EFE3"/><path d="M40 30h40l14 22v110a10 10 0 0 1-10 10H36a10 10 0 0 1-10-10V52z" fill="#552814"/><rect x="26" y="80" width="68" height="56" fill="#F5EFE3"/><text x="60" y="117" text-anchor="middle" font-size="27" fill="#552814">MILK</text></svg>`};
const money=n=>'$'+n.toFixed(2);let flt='all';const bag={};
$('pg').innerHTML=PR.map((p,i)=>`<article class="pc rv" data-k="${p[1]}" ${p[4]?'data-l="1"':''} style="--c:${CC[p[1]][0]};--t:${CC[p[1]][1]}">${p[4]?'<span class="lim">LIMITED</span>':''}<div class="art"><div class="ai">${art(p)}</div></div><h3>${p[0]}</h3><small>${p[2]}</small><div class="r2"><span>${p[3]?money(p[3]):'SEE STORE'}</span><button class="add" data-i="${i}">ADD</button></div></article>`).join('');
$('chips').innerHTML=['all','chocolate','cups','gummies','milk','bundles','limited'].map(k=>`<button aria-pressed="${k=='all'}" data-k="${k}">${k.toUpperCase()}</button>`).join('');
$('chips').onclick=e=>{const b=e.target.closest('button');if(!b)return;flt=b.dataset.k;[...$('chips').children].forEach(c=>c.setAttribute('aria-pressed',c==b));
 document.querySelectorAll('.pc').forEach(c=>{const ok=flt=='all'||c.dataset.k==flt||(flt=='limited'&&c.dataset.l);if(ok){c.hidden=false;requestAnimationFrame(()=>c.classList.remove('off'))}else{c.classList.add('off');setTimeout(()=>{if(c.classList.contains('off'))c.hidden=true},340)}})};
const drawBag=()=>{const k=Object.keys(bag);let t=0,u=0,n=0;k.forEach(i=>{n+=bag[i];PR[i][3]?t+=PR[i][3]*bag[i]:u=1});$('bn').textContent=n;$('sub').textContent=money(t)+(u?' + TBD':'');
 $('cl').innerHTML=k.length?k.map(i=>`<li><span>${PR[i][0]} ×${bag[i]}</span><button data-r="${i}">REMOVE</button></li>`).join(''):'<li>Empty. Go snack.</li>'};
const burst=el=>{if(RM)return;const r=el.getBoundingClientRect(),g=document.createElement('div'),cs=['#129BEF','#F1A735','#F5EFE3','#552814'];g.className='gb';g.setAttribute('aria-hidden','true');
 for(let i=0;i<9;i++){const b=document.createElement('i'),a=i/9*6.28,d=60+Math.random()*50;b.style.cssText=`left:${r.left+r.width/2}px;top:${r.top+r.height/2}px;background:${cs[i%4]}`;g.append(b);requestAnimationFrame(()=>requestAnimationFrame(()=>{b.style.transform=`translate(${Math.cos(a)*d}px,${Math.sin(a)*d}px) scale(.3)`;b.style.opacity=0}))}
 document.body.append(g);setTimeout(()=>g.remove(),800)};
$('pg').onclick=e=>{const b=e.target.closest('.add');if(!b)return;bag[b.dataset.i]=(bag[b.dataset.i]||0)+1;drawBag();burst(b);b.textContent='✓';setTimeout(()=>b.textContent='ADD',1000)};
$('cl').onclick=e=>{const r=e.target.dataset.r;if(r){delete bag[r];drawBag()}};
$('bagb').onclick=()=>$('cart').classList.add('open');$('cx').onclick=()=>$('cart').classList.remove('open');drawBag();
/* ---- story pillars ---- */
$('pls').innerHTML=P.map((p,i)=>`<div class="pl" data-i="${i}"><h3>${p[0]}</h3>${p[1]}<small>Verify against official sources before publishing.</small></div>`).join('');
const NAMES=['FAIRTRADE','LIVING INCOME','CHILD PROTECTION'];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.target.classList.contains('rv')){if(e.isIntersecting)e.target.classList.add('in')}else{e.target.classList.toggle('on',e.isIntersecting);if(e.isIntersecting){$('sn').textContent='0'+(+e.target.dataset.i+1);$('st').textContent=NAMES[e.target.dataset.i]}}}),{threshold:.55});
document.querySelectorAll('.pl,.rv').forEach(e=>io.observe(e));
/* ---- faq / newsletter ---- */
$('qs').innerHTML=Q.map((q,i)=>`<div><button aria-expanded="false" aria-controls="a${i}">${q[0]}<i>+</i></button><div class="fp" id="a${i}"><p>${q[1]}</p></div></div>`).join('');
$('qs').onclick=e=>{const b=e.target.closest('button');if(!b)return;const o=b.getAttribute('aria-expanded')!='true';document.querySelectorAll('#qs button').forEach(x=>{x.setAttribute('aria-expanded','false');x.nextElementSibling.classList.remove('o')});if(o){b.setAttribute('aria-expanded','true');b.nextElementSibling.classList.add('o')}};
$('nf').onsubmit=e=>{e.preventDefault();$('nm').textContent=/^\S+@\S+\.\S+$/.test($('em').value)?'You\'re in. Party invite incoming (demo — nothing was sent).':'That email looks off. Try again?'};
/* ---- hero: the video, as frames, scrubbed by scroll ---- */
const GR=[{a:0,b:.12,t:['UNWRAP','THE GOOD','STUFF.'],c:'first'},{a:.12,b:.34,t:['READY?']},{a:.34,b:.5,t:['NO WRAPPER.','JUST CHOCOLATE.']},{a:.5,b:.64,t:['FEEL THE','WEIGHT.']},{a:.64,b:.8,t:['SNAP.','CRACK.']},{a:.8,b:.94,t:['BREAK IT.']},{a:.94,b:9,t:['TAKE','A','BITE.'],f:1}];
GR.forEach(g=>{const d=document.createElement('div');d.className='g '+(g.c||'');d.innerHTML=`<h2 class="t">${g.t.map(x=>`<span class="m"><span class="ln">${x}</span></span>`).join('')}</h2>`+(g.f?'<a class="cta" id="cta" href="#flavors">SHOP CHOCOLATE</a>':'');(g.f?$('final'):$('copy')).append(d);g.lines=[...d.querySelectorAll('.ln')]});
const cv=$('cv'),cx=cv.getContext('2d'),N=KY.length;let loaded=0;
const ld=u=>{if(!u)return null;const im=new Image();im.src=u;im.decode().catch(()=>0).then(()=>loaded++);return im};
const FK=KY.map(ld),TOT=KY.length;
/* scroll progress -> source frame (24fps clip: peel ~f60-80, snap ~f150, tumble to f239) */
const KF=[[0,0],[.12,30],[.34,84],[.5,125],[.64,148],[.72,164],[.94,226],[1,239]];
const lin=p=>{for(let i=1;i<KF.length;i++)if(p<=KF[i][0]){const[a,x]=KF[i-1],[b,y]=KF[i];return lerp(x,y,(p-a)/(b-a))}return 239};
const hero=$('hero');let sm=0,v=0,last=performance.now(),intro=0,t0=0,lastP=-1,txt='';
const size=()=>{const d=Math.min(devicePixelRatio||1,1.5);cv.width=innerWidth*d;cv.height=innerHeight*d;lastP=-1};size();addEventListener('resize',size);
function draw(p){
 const W=cv.width,H=cv.height,im=FK[0];if(!im.naturalWidth)return;const fw=im.naturalWidth,fh=im.naturalHeight,port=H>W;
 const s0=(port?W*1.9/fw:Math.max(W/fw,H/fh))*lerp(1.1,1,eio(mp(p,0,.3))),push=eio(mp(p,.94,1)),s=s0*(1+.45*push);
 const dw0=fw*s0,dh0=fh*s0,dw=fw*s,dh=fh*s,q=.7,Hc=H*.58,L=W/2+(q-.5)*dw0-q*dw+W*.06*push+mx*W*.012,T=Hc-.5*dh+my*H*.012;
 cx.clearRect(0,0,W,H);cx.imageSmoothingQuality='high';
 const f=lin(p)/2,i0=Math.min(N-1,Math.floor(f)),a=f-i0,A=FK[i0],B=FK[i0+1],d=Math.min(W,H)*.03;
 cx.shadowColor='rgba(20,8,0,.38)';cx.shadowBlur=d;cx.shadowOffsetY=d*.8;
 if(A&&A.naturalWidth)cx.drawImage(A,L,T,dw,dh);
 if(a>.03&&B&&B.naturalWidth){cx.globalAlpha=a;cx.drawImage(B,L,T,dw,dh);cx.globalAlpha=1}
 cx.shadowColor='transparent';cx.shadowBlur=0;cx.shadowOffsetY=0;
}
const BK=[[.34,.5,'CHOCO'],[.5,.64,'HEAVY'],[.64,.8,'SNAP!'],[.8,.94,'CRACK'],[.94,1.2,'BITE']];let bkT='';
function bk(p){const el=$('bkt'),b=BK.find(x=>p>=x[0]&&p<x[1]);if(!b){el.style.opacity=0;return}
 if(bkT!==b[2]){bkT=b[2];el.textContent=b[2]}const t=mp(p,b[0],b[1]),i=eo(cl(t*6)),o=eo(cl((t-.88)*8));
 el.style.opacity=Math.min(i,1-o);el.style.transform=`translateX(${(1-i)*45-o*45}vw) skewX(${(1-i)*-14+o*14}deg) scale(${1+t*.1})`}
function render(p){
 draw(p);bk(p);
 GR.forEach((g,gi)=>g.lines.forEach((l,i)=>{const inV=gi==0?eo(cl(intro*1.5-i*.3)):eo(cl((p-(g.a+i*.012))/.03)),outV=eo(cl((p-(g.b-.03+i*.008))/.03));l.style.transform=`translateY(${(1-inV)*105-outV*105}%)`}));
 $('cta').style.opacity=mp(p,.975,.995);$('cta').style.pointerEvents=p>.98?'auto':'none';
 const lab=p<.06?'SCROLL TO UNWRAP':p<.5?'KEEP GOING':p<.8?'BREAK IT':p<.97?'TAKE A BITE':'';
 if(lab!==txt){txt=lab;$('ind').firstChild.textContent=lab}$('ind').style.opacity=1-mp(p,.95,.97);
 $('pr').textContent=String(Math.round(p*100)).padStart(2,'0')+'%';
}
/* ---- Buttermax-style liquid pointer: background is clear at rest; a big water-like blob floats after the mouse and recolours only while it moves; off over the shop ---- */
const FS=`#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 r;uniform vec2 tr[9];uniform float t,e;uniform vec3 b,c;
void main(){float asp=r.x/r.y;vec2 p=gl_FragCoord.xy/r.y;
 vec2 w=vec2(sin(p.y*7.+t*2.1)+.5*sin(p.y*12.-t*1.3),cos(p.x*7.+t*1.7)+.5*cos(p.x*10.+t*1.1))*.014*e;p+=w;float f=0.;
 for(int i=0;i<9;i++){float k=float(i)/9.;float rad=(.075-.045*k)*(.6+.4*e)*smoothstep(0.,.12,e)*(1.+.1*sin(t*3.+float(i)*1.7));
  vec2 d=p-vec2(tr[i].x*asp,tr[i].y);f+=rad*rad/(dot(d,d)+.0001);}
 float m=smoothstep(.93,1.03,f);vec3 col=mix(c,b,smoothstep(1.,1.7,f));
 gl_FragColor=vec4(col*m,m);}`;
const hx=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255);
/* palette = [clean background, tint colour, blob colour] */
const PAL={flav:['#F5EFE3','#129BEF','#F1A735'],shop:['#129BEF','#F5EFE3','#F1A735'],story:['#151515','#552814','#7a4326'],mis:['#552814','#0b6fb8','#129BEF'],faq:['#F5EFE3','#F1A735','#129BEF'],nl:['#F1A735','#F5EFE3','#129BEF'],fin:['#129BEF','#552814','#F1A735'],ft:['#151515','#552814','#7a4326']};
Object.keys(PAL).forEach(k=>PAL[k]=PAL[k].flatMap(hx));
const HP=[[0,'#1ca8de','#F1A735','#F5EFE3'],[.33,'#1ca8de','#F1A735','#F5EFE3'],[.42,'#129BEF','#F1A735','#F5EFE3'],[.62,'#F1A735','#129BEF','#F5EFE3'],[.74,'#129BEF','#F1A735','#F5EFE3'],[.94,'#129BEF','#F1A735','#F5EFE3'],[1,'#129BEF','#F1A735','#F5EFE3']].map(r=>[r[0],r.slice(1).flatMap(hx)]);
const heroPal=p=>{for(let i=1;i<HP.length;i++)if(p<=HP[i][0]){const t=eio(mp(p,HP[i-1][0],HP[i][0]));return HP[i][1].map((x,k)=>lerp(HP[i-1][1][k],x,t))}return HP[HP.length-1][1]};
const GLc=$('gl'),gl=RM?null:GLc.getContext('webgl',{alpha:true,premultipliedAlpha:true,antialias:false}),U={};
if(gl){const mk=(t,x)=>{const o=gl.createShader(t);gl.shaderSource(o,x);gl.compileShader(o);return o},pr=gl.createProgram();
 gl.attachShader(pr,mk(gl.VERTEX_SHADER,'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}'));gl.attachShader(pr,mk(gl.FRAGMENT_SHADER,FS));gl.linkProgram(pr);gl.useProgram(pr);
 gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer());gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);const l=gl.getAttribLocation(pr,'p');gl.enableVertexAttribArray(l);gl.vertexAttribPointer(l,2,gl.FLOAT,false,0,0);
 ['r','tr[0]','t','e','b','c'].forEach(k=>U[k]=gl.getUniformLocation(pr,k))}
const gsize=()=>{GLc.width=Math.ceil(innerWidth*.6);GLc.height=Math.ceil(innerHeight*.6)};gsize();addEventListener('resize',gsize);
const secs=[...document.querySelectorAll('[data-pal]')],mqi=$('mqi'),shopEl=$('shop'),TRA=new Float32Array(18);
let curP=HP[0][1].slice(),tm={x:.5,y:.5},mo={x:.5,y:.5},mx=0,my=0,vel=0,ly=scrollY,mqx=0,px=innerWidth/2,py=innerHeight/2,lpx=px,lpy=py,spd=0,en=0,drawn=false,moved=false,bgE=0;
const TR=Array.from({length:9},()=>[.5,.5]);
addEventListener('pointermove',e=>{if(!moved){moved=true;px=lpx=e.clientX;py=lpy=e.clientY;TR.forEach(q=>{q[0]=px/innerWidth;q[1]=1-py/innerHeight})}
 tm.x=e.clientX/innerWidth;tm.y=e.clientY/innerHeight;px=e.clientX;py=e.clientY;
 const pc=e.target.closest&&e.target.closest('.pc');if(pc&&!RM){const r=pc.getBoundingClientRect();pc.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*18+'deg');pc.style.setProperty('--rx',-((e.clientY-r.top)/r.height-.5)*18+'deg')}});
document.addEventListener('mouseout',e=>{const pc=e.target.closest&&e.target.closest('.pc');if(pc&&!pc.contains(e.relatedTarget)){pc.style.setProperty('--rx','0deg');pc.style.setProperty('--ry','0deg')}});
function tick(now){const dt=Math.min(.05,(now-last)/1000);last=now;if(t0)intro=cl((now-t0)/1000);
 const r=hero.getBoundingClientRect(),t=cl(-r.top/(r.height-innerHeight)),sy=scrollY;
 vel+=((sy-ly)-vel)*.12;ly=sy;if(!RM)document.documentElement.style.setProperty('--sk',cl(vel*.07,-4,4).toFixed(2)+'deg');
 mo.x+=(tm.x-mo.x)*.08;mo.y+=(tm.y-mo.y)*.08;if(!RM){mx=(mo.x-.5)*2;my=(mo.y-.5)*2}
 /* pointer energy: rises while moving, drains when still; zero over the shop or with the bag open */
 spd=spd*.82+Math.hypot(px-lpx,py-lpy)*.18;lpx=px;lpy=py;
 const tg0=RM?0:cl(spd/14);
 en=tg0>en?en+(tg0-en)*.2:en*.93;
 TR[0][0]+=(px/innerWidth-TR[0][0])*.2;TR[0][1]+=(1-py/innerHeight-TR[0][1])*.2;for(let i=1;i<9;i++){TR[i][0]+=(TR[i-1][0]-TR[i][0])*.28;TR[i][1]+=(TR[i-1][1]-TR[i][1])*.28}
 if(RM)sm=t;else{const k=140,c=2*Math.sqrt(k)*.92;v+=(k*(t-sm)-c*v)*dt;sm+=v*dt}
 const p=cl(sm),key=p+intro+(r.top>-r.height?mx*3+my*7:0);if(key!==lastP){lastP=key;render(p)}
 /* clean background colour follows the current section / hero beat */
 const cy=innerHeight/2,sc=secs.find(e=>{const b=e.getBoundingClientRect();return b.top<=cy&&b.bottom>cy});let tg=null;
 if(r.bottom>innerHeight*.6)tg=heroPal(p);else if(sc)tg=PAL[sc.dataset.pal];
 if(tg)curP=curP.map((x,i)=>x+(tg[i]-x)*.08);
 document.body.style.backgroundColor=`rgb(${curP.slice(0,3).map(x=>Math.round(x*255))})`;
 if(gl){if(en>.008){gl.viewport(0,0,GLc.width,GLc.height);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);
   TR.forEach((q,i)=>{TRA[i*2]=q[0];TRA[i*2+1]=q[1]});gl.uniform2f(U.r,GLc.width,GLc.height);gl.uniform2fv(U['tr[0]'],TRA);gl.uniform1f(U.t,now/1000%628);gl.uniform1f(U.e,en);
   gl.uniform3f(U.b,curP[3],curP[4],curP[5]);gl.uniform3f(U.c,curP[6],curP[7],curP[8]);gl.drawArrays(gl.TRIANGLES,0,3);drawn=true}
  else if(drawn){gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);drawn=false}}
 const w=mqi.scrollWidth/2;mqx=((mqx+(RM?0:.8+vel*.5))%w+w)%w;mqi.style.transform=`translateX(${-mqx}px)`;
 document.querySelectorAll('.mis div').forEach(d=>{const r=d.getBoundingClientRect();d.style.transform=`translateX(${(r.top-innerHeight/2)*d.dataset.s*(RM?0:1)}px)`});
 requestAnimationFrame(tick)}
requestAnimationFrame(tick);
/* preloader = real frame-loading progress */
const pre=document.querySelector('.pre'),pn=pre.querySelector('b'),st=performance.now();
(function c(n){const pct=Math.floor(loaded/TOT*100),t=cl((n-st)/(RM?200:900));pn.textContent=String(Math.min(pct,Math.round(t*100))).padStart(2,'0');
 if(pct>=100&&t>=1){pn.textContent='100';pre.classList.add('done');t0=performance.now();lastP=-1}else requestAnimationFrame(c)})(st);
})();