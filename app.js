(() => {
  'use strict';
  const {restaurants, dates, dayLabel, rank} = window.DateNight;
  const main = document.querySelector('main');
  const dialog = document.querySelector('#shortlist-dialog');
  const storageKey = 'table-for-two-2026-v1';
  let answers = {}, step = -1, result = null, shortlistDate = '21', toastTimer;
  const escape = text => String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const external = (href, label) => `<a href="${escape(href)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
  const steps = ['date','family','food','mood','style'];
  const foodOptions = {
    bold:[['thai','🌶','Thai, please','Fragrant curries & bright herbs'],['asian','🥢','A little Asian feast','Southeast Asian plates to share'],['mezze','🫒','Pass the mezze','Hummus, warm spices & little bites']],
    comfort:[['italian','🍝','Pasta kind of love','An Italian evening, nice and slow'],['pizza','🍕','Pizza is a love language','Crisp crusts & something delicious'],['any','♡','Either, with you','You had me at Italian food']],
    seasonal:[['finnish','🌲','A taste of Finland','Local flavours, cosy feelings'],['modern','✳','Surprise my taste buds','Seasonal menus & clever little plates'],['veggie','🌿','Let the veggies shine','Colourful, plant-forward goodness']]
  };
  const eligible = () => restaurants.filter(r=>answers.date==='any'||r.days.includes(answers.date));
  const selectedDate = () => answers.date==='any' ? ['22','21','23'].find(day=>result.days.includes(day)) : answers.date;
  const photos = (r, compact=false) => `<div class="restaurant-photos ${compact?'compact':''}">${r.photos.map(p=>`<figure><a class="photo-link" href="${escape(p.src)}" target="_blank" rel="noopener" aria-label="View ${escape(p.alt)}"><img src="${escape(p.src)}" alt="${escape(p.alt)}" loading="lazy" decoding="async" width="600" height="450"></a><figcaption><span>${escape(p.label)}</span><a href="${escape(p.source)}" target="_blank" rel="noopener noreferrer">Photo: ${escape(p.credit)} ↗</a></figcaption></figure>`).join('')}</div>`;
  function render(html, focus=true) {
    main.innerHTML=html;
    if(focus){window.scrollTo({top:0,behavior:'instant'});main.focus({preventScroll:true});}
  }
  function hero(focus=true) {
    step=-1;
    const countdown = 'YAY! IN 1 MONTH, IT’S ONE YEAR OF US';
    let saved;try{saved=JSON.parse(localStorage.getItem(storageKey));}catch{}
    const canResume=saved && restaurants.some(r=>r.id===saved.id&&r.days.includes(saved.date));
    render(`<section class="hero screen"><div class="hero-copy"><p class="eyebrow">${countdown}</p><h1 class="hero-title" lang="sv">Ett år med<br><em>min älskling</em></h1><p class="hero-journey" lang="sv">Från Helsingfors till Lyon, via Tägerwilen och Stockholm tillbaka till Helsingfors</p><p class="intro"><strong>Will you go on an anniversary date<br>with me in Helsinki?</strong></p><button class="primary" data-action="start">Yes, it’s a date! <span aria-hidden="true">♡</span></button><p class="under-button">A few little questions. One delicious evening.</p>${canResume?'<button class="secondary" data-action="resume">Revisit our saved date ♡</button>':''}</div><div class="hero-art hero-photo"><figure class="memory-frame"><img src="assets/cover.jpg" alt="The two of us together by the water at sunset" width="1600" height="1200" fetchpriority="high" decoding="async"><figcaption class="handwritten">the best seat is opposite you.</figcaption></figure><div class="seal" aria-label="Our first anniversary, 22 November"><span>OUR FIRST</span><b>22.11</b><span>ANNIVERSARY</span></div></div></section>`,focus);
  }
  function config() {
    const familyOptions=[['bold','🌶','Bold & full of flavour','Thai, Asian & Lebanese'],['comfort','🍝','A little Italian comfort','Pasta, pizza & all the good stuff'],['seasonal','🌿','Something seasonal','Finnish, modern & veggie-forward']];
    return [
      {title:'First, when shall we <em>celebrate?</em>',sub:'Our anniversary is 22.11. A day either side is just as lovely.',options:[['21','21','The night before','Saturday · 21 November'],['22','22','Our anniversary','Sunday · 22 November'],['23','23','Keep the love going','Monday · 23 November']]},
      {title:'What are you <em>craving?</em>',sub:'',options:familyOptions.map(o=>[...o,...(!eligible().some(r=>r.family===o[0])?['Try 21 or 23 November for this craving.']:[])])},
      {title:'Ooh, tell me <em>a little more.</em>',sub:'What sounds like your kind of delicious?',options:(foodOptions[answers.family]||[]).map(o=>[...o,...(o[0]!=='any'&&!eligible().some(r=>r.family===answers.family&&r.food===o[0])?['This flavour is on another date. Go back to change the day.']:[])])},
      {title:'And the mood for <em>our evening?</em>',sub:'The food matters. So does the feeling.',options:[['cozy','🕯','Cosy & just us','Soft light, slow conversations'],['lively','🥂','A little buzz','A lively room & a happy table'],['occasion','✦','Make it feel special','A proper anniversary occasion']]},
      {title:'One last thing. How shall <em>we dine?</em>',sub:'Then I’ll find us a little match.',options:[['sharing','🫶','A bit of everything','Sharing plates & stealing bites'],['tasting','✳','Let the chef surprise us','A menu that makes an evening of it'],['comfort','♡','Keep it easy','Something lovely, no fuss']]}
    ][step];
  }
  function quiz() {
    const q=config(), key=steps[step];
    render(`<section class="quiz-wrap screen"><div class="quiz-top"><button class="back" data-action="back">← ${step===0?'The invitation':'A little step back'}</button><span class="step-label">${String(step+1).padStart(2,'0')} / 05 · OUR DATE, YOUR WAY</span></div><div class="progress" aria-label="Question ${step+1} of 5">${steps.map((_,i)=>`<span class="${i<=step?'done':''}"></span>`).join('')}</div><div class="quiz-head">${step===0?'<p class="eyebrow">SAVE A LITTLE EVENING</p>':''}<h2>${q.title}</h2>${q.sub?`<p>${q.sub}</p>`:''}</div>${step===0?'<aside class="date-notice" role="note"><span aria-hidden="true">✳</span><strong>The 22nd of November is a Sunday, therefore some restaurants are closed.</strong></aside>':''}<div class="choices" role="group" aria-label="${key} options">${q.options.map(([value,icon,title,sub,disabled])=>`<button class="choice" data-value="${value}" aria-pressed="${answers[key]===value}" ${disabled?'disabled':''}><span class="${step===0?'date-number':'choice-icon'}" aria-hidden="true">${icon}</span><span class="choice-title">${title}</span><span class="choice-sub">${disabled||sub}</span></button>`).join('')}</div><div class="quiz-bottom">${step===0?'<button class="flexible-date" data-action="any-day">Any day, as long as it’s with you. <span aria-hidden="true">→</span></button>':`<p>${['','Good taste. I knew I liked you.','I’m already getting hungry.','My favourite part is still you.','One year in. So many dinners to go.'][step]}</p>`}<button class="primary" data-action="next" ${!answers[key]?'disabled':''}>${step===4?'Find our table':'Continue'} <span aria-hidden="true">→</span></button></div>${answers.date?`<p class="quiz-side-note">${dayLabel(answers.date)}</p>`:''}</section>`);
  }
  function showResult(restaurant) {
    result=restaurant;
    const r=result;
    render(`<section class="reveal screen"><div class="reveal-heading"><h2>I think we’ve found <em>our table.</em></h2><p class="fineprint">${dayLabel(selectedDate())} 2026 · Helsinki · You & me</p></div><article class="result-card">${photos(r)}<div class="result-copy"><div class="tags"><span class="tag">${r.cuisine}</span>${r.added?'<span class="tag">A LITTLE DISCOVERY</span>':''}</div><h2>${r.name}</h2><p class="result-description">${r.description}</p><p class="funfact"><b>A LITTLE DINNER-TABLE TRIVIA</b>${r.fact}</p><div class="result-links">${external('https://www.instagram.com/'+r.instagram+'/','Instagram')}${external(r.menu,'Explore the menu')}${external('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(r.name+' '+r.address+' Helsinki'),'Find our way')}</div><p class="fineprint">${r.note}</p></div></article><div class="result-actions"><button class="primary" data-action="confirm">This one. With you. <span aria-hidden="true">♡</span></button><div class="secondary-actions"><button class="secondary" data-action="another">Another little match</button><button class="secondary" data-action="shortlist">Ups spoiler alert!!</button><button class="secondary" data-action="restart">Try the questions again</button></div></div><p class="fineprint result-note">Our pick, ready for a reservation. Nothing is booked yet — I’ll take care of that.</p></section>`);
  }
  function confirm() {
    try{localStorage.setItem(storageKey,JSON.stringify({id:result.id,date:selectedDate()}));}catch{}
    const url=new URL(location.href);url.hash=new URLSearchParams({r:result.id,d:selectedDate()}).toString();
    history.replaceState(null,'',url);
    confirmed();confetti();
  }
  function confirmed() {
    render(`<section class="confirmed screen"><span class="big-heart" aria-hidden="true">♡</span><p class="eyebrow">ONE YEAR DOWN. ALL THE LITTLE DATES TO GO.</p><h2>It’s a date,<br><em>my favourite person.</em></h2><p class="intro" style="margin-inline:auto">The restaurant is lovely.<br>But you’re the reason I’m excited.</p><div class="ticket"><p class="eyebrow">A TABLE FOR TWO</p><h3>${result.name}</h3><p>${dayLabel(selectedDate())} 2026</p><p>${result.address}, Helsinki</p><span class="handwritten">You bring you. I’ll bring the heart eyes.</span></div><p class="saved-notice">Our choice is ready ♡</p><p class="fineprint">Send it to me so I can book our table. Time to be decided together.<br>This saves our choice on this device; it doesn’t make a reservation.</p><button class="primary" data-action="share">Send our date choice <span aria-hidden="true">↗</span></button><div class="secondary-actions"><button class="secondary" data-action="calendar">Save a calendar reminder</button><button class="secondary" data-action="change">Change our restaurant</button>${external(result.url,'Restaurant & reservations')}</div><div id="share-fallback"></div></section>`);
  }
  function toast(text){const el=document.querySelector('#toast');el.textContent=text;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),3500);}
  async function share(){
    const url=new URL(location.href);url.hash=new URLSearchParams({r:result.id,d:selectedDate()}).toString();
    const text=`It’s a date! ♡ My anniversary dinner choice is ${result.name} in Helsinki, ${dayLabel(selectedDate())} 2026. Let’s choose a time and book a table for two.\n${url.href}`;
    if(navigator.share){try{await navigator.share({title:'Our anniversary date ♡',text,url:url.href});return;}catch(e){if(e.name==='AbortError')return;}}
    try{await navigator.clipboard.writeText(text);toast('Our date choice is copied. Paste it into a message ♡');}
    catch{document.querySelector('#share-fallback').innerHTML=`<div class="share-fallback"><label for="share-message" class="fineprint">Copy this little message and send it to me:</label><textarea id="share-message" readonly>${escape(text)}</textarea></div>`;document.querySelector('#share-message').select();}
  }
  function calendar(){
    const date=selectedDate(),day=`202611${date}`,end=`202611${Number(date)+1}`;
    const clean=s=>String(s).replace(/\\/g,'\\\\').replace(/\r?\n/g,'\\n').replace(/,/g,'\\,').replace(/;/g,'\\;');
    const event=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//A table for two//Anniversary//EN','CALSCALE:GREGORIAN','BEGIN:VEVENT',`UID:anniversary-2026-${result.id}@cb-invitation`,`DTSTAMP:${new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'')}`,`DTSTART;VALUE=DATE:${day}`,`DTEND;VALUE=DATE:${end}`,`SUMMARY:${clean('Our anniversary dinner at '+result.name+' ♡')}`,`LOCATION:${clean(result.address+', Helsinki')}`,'DESCRIPTION:Our restaurant choice. Time and reservation still to be confirmed.','STATUS:TENTATIVE','TRANSP:TRANSPARENT','END:VEVENT','END:VCALENDAR',''].join('\r\n');
    const blob=new Blob([event],{type:'text/calendar;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='our-anniversary-date.ics';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('A little calendar reminder, with the time still to decide ♡');
  }
  function confetti(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;for(let i=0;i<32;i++){const el=document.createElement('i');el.className='confetti';el.style.left=Math.random()*100+'vw';el.style.animationDelay=Math.random()*.5+'s';el.style.background=['#a63336','#d2a360','#e5b5a9','#677555'][i%4];el.style.borderRadius=i%2?'50%':'0';document.body.append(el);setTimeout(()=>el.remove(),3200);}}
  function shortlist(){shortlistDate=dates.includes(answers.date)?answers.date:'21';renderList();dialog.showModal();}
  function renderList(){
    document.querySelector('#date-filter').innerHTML=dates.map(d=>`<button data-date="${d}" aria-pressed="${shortlistDate===d}">${dayLabel(d)}</button>`).join('');
    const sorted=[...restaurants].sort((a,b)=>Number(b.days.includes(shortlistDate))-Number(a.days.includes(shortlistDate)));
    document.querySelector('#restaurant-list').innerHTML=sorted.map(r=>{const available=r.days.includes(shortlistDate);return `<article class="list-item ${available?'':'unavailable'}"><div><h3>${r.name}${r.added?'<span class="tag">EXTRA DISCOVERY</span>':''}</h3><p>${r.cuisine} · ${r.address}</p><p class="${available?'':'status-closed'}">${available?'Fits this date · table to be confirmed':'Another evening: '+r.days.map(d=>d+'.11').join(' or ')}</p>${photos(r,true)}<div class="list-links">${external(r.menu,'Menu')}${external('https://www.instagram.com/'+r.instagram+'/','Instagram')}</div></div><button class="secondary" data-restaurant="${r.id}" ${available?'':'disabled'}>This could be our place →</button></article>`;}).join('');
  }
  main.addEventListener('click',e=>{
    const choice=e.target.closest('[data-value]');
    if(choice&&!choice.disabled){const key=steps[step];if(answers[key]!==choice.dataset.value){answers[key]=choice.dataset.value;for(let i=step+1;i<steps.length;i++)delete answers[steps[i]];}main.querySelectorAll('[data-value]').forEach(el=>el.setAttribute('aria-pressed',String(el===choice)));main.querySelector('[data-action=next]').disabled=false;return;}
    const action=e.target.closest('[data-action]')?.dataset.action;
    if(action==='start'||action==='restart'){answers={};result=null;history.replaceState(null,'',location.pathname+location.search);step=0;quiz();}
    if(action==='any-day'&&step===0){answers={date:'any'};step=1;quiz();}
    if(action==='back'){if(step===0)hero();else{step--;quiz();}}
    if(action==='next'&&answers[steps[step]]){if(step<4){step++;quiz();}else{const matches=rank(answers);if(matches.length)showResult(matches[0]);else{step=1;quiz();toast('Let’s try another craving for this date.');}}}
    if(action==='another'){const matches=rank(answers);if(matches.length>1){showResult(matches[(matches.findIndex(r=>r.id===result.id)+1)%matches.length]);}else{shortlist();}}
    if(action==='shortlist')shortlist();
    if(action==='confirm')confirm();
    if(action==='share')share();
    if(action==='calendar')calendar();
    if(action==='change')showResult(result);
    if(action==='resume'){try{const saved=JSON.parse(localStorage.getItem(storageKey));const r=restaurants.find(r=>r.id===saved.id&&r.days.includes(saved.date));if(r){answers={date:saved.date};result=r;confirmed();}}catch{hero();}}
  });
  document.querySelector('#open-shortlist').addEventListener('click',shortlist);
  document.querySelector('#close-shortlist').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{
    const date=e.target.closest('[data-date]');if(date){shortlistDate=date.dataset.date;renderList();}
    const pick=e.target.closest('[data-restaurant]');if(pick&&!pick.disabled){answers={date:shortlistDate};dialog.close();showResult(restaurants.find(r=>r.id===pick.dataset.restaurant));}
    if(e.target===dialog){const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)dialog.close();}
  });
  function init(){const params=new URLSearchParams(location.hash.slice(1)),r=restaurants.find(r=>r.id===params.get('r'));if(r&&r.days.includes(params.get('d'))){answers={date:params.get('d')};result=r;confirmed();}else hero(false);}
  window.addEventListener('hashchange',init);
  init();
})();
