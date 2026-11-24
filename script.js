const sourceMetadata={
  '001.':{title:'Palomar guarda il mondo — Un atlante fotografico dello sguardo di Italo Calvino',type:'Editorial Design',client:'Personal project',year:'2022'},
  '002.':{title:'Arte Rupestre Valcamonica — Identità visiva per il patrimonio rupestre della Valle Camonica',type:'Branding',client:'Personal project',year:'2022'},
  '003.':{title:'Illumia — Un progetto speculativo sul cambiamento climatico e lo sguardo del Sole',type:'Speculative Design',client:'BA Thesis',year:'2023'},
  '004.':{title:'Anthropogenic Narratives — Una mostra sulle prospettive non umane e il cambiamento climatico',type:'Exhibition Branding',client:'Triennale Milano',year:'2023'},
  '005.':{title:'Internet Art Archive — Un archivio digitale per documentare e preservare la net art',type:'Web Design',client:'Personal project',year:'2023'},
  '006.':{title:'Questo è ciò che chiamo amicizia — Racconti e immagini per esplorare i legami di amicizia',type:'Editorial Design',client:'Personal project',year:'2024'},
  '007.':{title:'Capsula — Un’app per raccogliere e riscoprire i propri ricordi',type:'Interaction Design',client:'Personal project',year:'2024'},
  '008.':{type:'Editorial Design',client:'Personal project',year:'2024'},
  '009.':{title:'No! The sound of dissens — Una pubblicazione sul suono come forma di dissenso',type:'Publication',client:'Personal project',year:'2025'},
  '010.':{type:'Design for the Territory',client:'Personal project',year:'2024'},
  '011.':{title:"L'altra — Un cortometraggio sulla convivenza e la distanza tra due sconosciute",type:'Video Making',client:'Personal project',year:'2025'},
  '012.':{type:'Research',client:'MA Thesis',year:'2026'}
};
document.querySelectorAll('.project').forEach(project=>{
  Object.assign(project.dataset,sourceMetadata[project.dataset.number]||{});
  if(['001.','002.','003.','004.','005.','006.','007.','009.','011.'].includes(project.dataset.number)) project.dataset.title=project.dataset.title.split(' — ')[0];
});
const projects=[...document.querySelectorAll('.project')].reverse();
const track=document.querySelector('.track');
projects.forEach(project=>track.append(project));
document.querySelectorAll('.project[data-number="001."] .artwork').forEach(cover=>{
  cover.classList.add('project-cover');
  cover.dataset.previewSrc='images/001/cover/timbro.png';
  cover.style.backgroundImage="url('images/001/cover/timbro.png')";
  cover.style.backgroundSize='auto 100svh';
  cover.style.backgroundRepeat='no-repeat';
  cover.style.backgroundPosition='center';
});
document.querySelectorAll('.project[data-number="002."] .artwork').forEach(cover=>{
  cover.classList.add('project-cover');
  cover.dataset.previewSrc='images/002/cover/cover.gif';
  cover.style.backgroundImage="url('images/002/cover/cover.gif')";
  cover.style.backgroundSize='auto 100svh';
  cover.style.backgroundRepeat='no-repeat';
  cover.style.backgroundPosition='center';
});
document.querySelectorAll('.project[data-number="003."] .artwork').forEach(cover=>{
  cover.classList.add('project-cover');
  cover.dataset.previewSrc='images/003/cover/cover.png';
  cover.style.backgroundImage="url('images/003/cover/cover.png')";
  cover.style.backgroundSize='auto 100svh';
  cover.style.backgroundRepeat='no-repeat';
  cover.style.backgroundPosition='center';
});
document.querySelectorAll('.project[data-number="004."] .artwork').forEach(cover=>{
  cover.classList.add('project-cover');
  cover.dataset.previewSrc='images/004/cover/cover.png';
  cover.style.backgroundImage="url('images/004/cover/cover.png')";
  cover.style.backgroundSize='auto 100svh';
  cover.style.backgroundRepeat='no-repeat';
  cover.style.backgroundPosition='center';
});
document.querySelectorAll('.project[data-number="005."] .artwork').forEach(cover=>{
  cover.classList.add('project-cover','project-cover-005');
  cover.dataset.previewSrc='images/005/cover.gif';
  cover.dataset.previewAspect='1.5';
  cover.style.backgroundImage="url('images/005/cover.gif')";
  cover.style.backgroundSize='auto 100svh';
  cover.style.backgroundRepeat='no-repeat';
  cover.style.backgroundPosition='center';
});
document.querySelectorAll('.project[data-number="012."] .artwork').forEach(cover=>{
  cover.classList.add('project-cover');
  cover.dataset.previewSrc='images/012/GALLERY/cover.png';
  cover.style.backgroundImage="url('images/012/GALLERY/cover.png')";
  cover.style.backgroundSize='auto 100svh';
  cover.style.backgroundRepeat='no-repeat';
  cover.style.backgroundPosition='center';
});
document.querySelectorAll('.project[data-number="008."] .artwork').forEach(cover=>{
  cover.classList.add('project-cover');
  cover.dataset.previewSrc='images/008/cover/Impaginato_Alteri 43.png';
  cover.style.backgroundImage="url('images/008/cover/Impaginato_Alteri 43.png')";
  cover.style.backgroundSize='auto 100svh';
  cover.style.backgroundRepeat='no-repeat';
  cover.style.backgroundPosition='center';
});
document.querySelectorAll('.project[data-number="009."] .artwork').forEach(cover=>{
  cover.classList.add('project-cover');
  cover.dataset.previewSrc='images/009/cover/Slide 16_9 - 9.png';
  cover.style.backgroundImage="url('images/009/cover/Slide 16_9 - 9.png')";
  cover.style.backgroundSize='auto 100svh';
  cover.style.backgroundRepeat='no-repeat';
  cover.style.backgroundPosition='center';
});
document.querySelectorAll('.project[data-number="010."] .artwork').forEach(cover=>{
  cover.classList.add('project-cover');
  cover.dataset.previewSrc='images/010/cover/Frame 23.png';
  cover.style.backgroundImage="url('images/010/cover/Frame 23.png')";
  cover.style.backgroundSize='auto 100svh';
  cover.style.backgroundRepeat='no-repeat';
  cover.style.backgroundPosition='center';
});
document.querySelectorAll('.project[data-number="007."] .artwork').forEach(cover=>{
  cover.classList.add('project-cover');
  cover.dataset.previewSrc='images/007/COVER/cover-3.png';
  cover.style.backgroundImage="url('images/007/COVER/cover-3.png')";
  cover.style.backgroundSize='auto 100svh';
  cover.style.backgroundRepeat='no-repeat';
  cover.style.backgroundPosition='center';
});
document.querySelectorAll('.project[data-number="006."] .artwork').forEach(cover=>{
  cover.classList.add('project-cover');
  cover.dataset.previewSrc='images/006/cover/cover.png';
  cover.style.backgroundImage="url('images/006/cover/cover.png')";
  cover.style.backgroundSize='auto 100svh';
  cover.style.backgroundRepeat='no-repeat';
  cover.style.backgroundPosition='center';
});
document.querySelectorAll('.project[data-number="011."] .artwork').forEach(cover=>{
  cover.classList.add('project-cover');
  cover.dataset.previewSrc='images/011/COVER/cover.png';
  cover.style.backgroundImage="url('images/011/COVER/cover.png')";
  cover.style.backgroundSize='auto 100svh';
  cover.style.backgroundRepeat='no-repeat';
  cover.style.backgroundPosition='center';
});
const counter=document.querySelector('.project-count');
const cue=document.querySelector('.cursor-cue');
const progress=document.querySelector('.progress span');
const gallery=document.querySelector('.gallery');
const gridList=document.querySelector('.grid-list');
const gridPreview=document.querySelector('.grid-preview');
const isMobileViewport=window.matchMedia('(max-width: 640px)').matches;
let current=0;
const requestedView=isMobileViewport?'full':new URLSearchParams(location.search).get('view');
const cloneSlide=source=>{
  const clone=source.cloneNode(true);
  clone.classList.add('project-clone');
  clone.setAttribute('aria-hidden','true');
  clone.inert=true;
  return clone;
};
const duplicateSlides=()=>projects.map(cloneSlide);
track.prepend(...duplicateSlides());
track.append(...duplicateSlides());
let snapAfterTransition=null;
const centeredOffset=slide=>slide.offsetLeft-(gallery.clientWidth-slide.offsetWidth)/2;
track.addEventListener('transitionend',event=>{
  if(event.target!==track||event.propertyName!=='transform'||snapAfterTransition===null)return;
  const slide=track.children[snapAfterTransition];
  track.style.transition='none';
  track.style.transform=`translate3d(${-centeredOffset(slide)}px,0,0)`;
  track.offsetHeight;
  track.style.transition='';
  snapAfterTransition=null;
});

function showProject(index,direction=0){
  const previous=current;
  current=(index+projects.length)%projects.length;
  const project=projects[current];
  let physicalIndex=projects.length+current;
  if(direction>0&&previous===projects.length-1&&current===0){physicalIndex=projects.length*2;snapAfterTransition=projects.length}
  else if(direction<0&&previous===0&&current===projects.length-1){physicalIndex=projects.length-1;snapAfterTransition=projects.length*2-1}
  else snapAfterTransition=null;
  const translate=centeredOffset(track.children[physicalIndex]);
  track.style.transform=`translate3d(${-translate}px,0,0)`;
  const counterNumber=document.createElement('span');
  const counterTitle=document.createElement('span');
  counterNumber.textContent=project.dataset.number;
  counterTitle.textContent=project.dataset.title;
  counter.replaceChildren(counterNumber,counterTitle);
  counter.href=`project.html?item=${current}&from=full`;
  progress.style.width=`${100/projects.length}%`;
  progress.style.transform=`translateX(${current*100}%)`;
}
function setView(view){
  document.body.dataset.view=view;
  document.querySelectorAll('.section-link[data-view-link]').forEach(link=>{
    const active=link.dataset.viewLink===view;
    link.classList.toggle('is-active',active);
    if(active)link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  });
  document.querySelectorAll('.view-button').forEach(button=>{
    const active=button.dataset.viewTarget===view;
    button.classList.toggle('is-active',active);
    button.setAttribute('aria-pressed',String(active));
  });
}
document.querySelectorAll('.view-button').forEach(button=>button.addEventListener('click',()=>setView(button.dataset.viewTarget)));
if(requestedView==='grid'||requestedView==='full')setView(requestedView);
let suppressGalleryClickUntil=0;
document.querySelector('.hit-left').addEventListener('click',event=>{
  if(Date.now()<suppressGalleryClickUntil){event.preventDefault();return}
  showProject(current-1,-1);
});
document.querySelector('.hit-right').addEventListener('click',event=>{
  if(Date.now()<suppressGalleryClickUntil){event.preventDefault();return}
  showProject(current+1,1);
});
gallery.addEventListener('mousemove',event=>{
  cue.style.left=`${event.clientX}px`;cue.style.top=`${event.clientY}px`;
  cue.textContent=event.clientX<window.innerWidth/2?'PREVIOUS':'NEXT';
});
gallery.addEventListener('mouseleave',()=>cue.style.opacity='0');
gallery.addEventListener('mouseenter',()=>cue.style.opacity='1');
document.addEventListener('keydown',event=>{
  if(event.key==='ArrowRight')showProject(current+1,1);
  if(event.key==='ArrowLeft')showProject(current-1,-1);
});
let touchStart=0;
gallery.addEventListener('touchstart',event=>touchStart=event.changedTouches[0].clientX,{passive:true});
gallery.addEventListener('touchend',event=>{
  const distance=event.changedTouches[0].clientX-touchStart;
  if(Math.abs(distance)>40){
    showProject(current+(distance<0?1:-1),distance<0?1:-1);
    suppressGalleryClickUntil=Date.now()+700;
  }
},{passive:true});

projects.forEach((project,index)=>{
  const openProject=()=>{
    if(window.matchMedia('(max-width: 640px)').matches)return;
    location.href=`project.html?item=${index}&from=${document.body.dataset.view||'full'}`;
  };
  project.addEventListener('click',openProject);
  project.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openProject()}});
  const row=document.createElement('a');
  row.className='project-row';row.href=`project.html?item=${index}&from=grid`;row.setAttribute('role','listitem');
  row.innerHTML=`<span class="row-identity"><span class="row-number">${project.dataset.number}</span><span class="row-title">${project.dataset.title}</span></span><span class="row-type">${project.dataset.type}</span><span class="row-client">${project.dataset.client}</span><span class="row-year">${project.dataset.year}</span>`;
  const showPreview=()=>{
    gridList.classList.add('has-hover');row.classList.add('is-hovered');
    const previewVisual=document.createElement("div");
    previewVisual.className="preview-visual";
    const previewNumber=document.createElement("span");
    previewNumber.className="preview-number";
    previewNumber.textContent=project.dataset.number;
    const previewArtwork=project.querySelector(".artwork").cloneNode(true);
    if(previewArtwork.dataset.previewSrc){
      const image=new Image();
      image.onload=()=>previewArtwork.style.aspectRatio=previewArtwork.dataset.previewAspect||`${image.naturalWidth} / ${image.naturalHeight}`;
      image.src=previewArtwork.dataset.previewSrc;
    }
    previewVisual.append(previewNumber,previewArtwork);
    const previewData=document.createElement("div");
    previewData.className="preview-data";
    previewData.textContent=[project.dataset.title,project.dataset.type,project.dataset.client,project.dataset.year].filter(Boolean).join(", ");
    gridPreview.replaceChildren(previewVisual,previewData);
    gridPreview.setAttribute('aria-hidden','false');
  };
  const hidePreview=()=>{
    gridList.classList.remove('has-hover');row.classList.remove('is-hovered');
    gridPreview.replaceChildren();gridPreview.setAttribute('aria-hidden','true');
  };
  row.addEventListener('mouseenter',showPreview);
  row.addEventListener('mouseleave',hidePreview);
  row.addEventListener('focus',showPreview);
  row.addEventListener('blur',hidePreview);
  gridList.append(row);
});
showProject(0);
window.addEventListener('resize',()=>showProject(current));
