if(window.matchMedia('(max-width: 640px)').matches){
  window.location.replace('index.html#home');
}else{
const projectData=[
  {number:'001.',title:'Palomar guarda il mondo — Un atlante fotografico dello sguardo di Italo Calvino',type:'Editorial design',client:'Progetto personale',year:'2025',artwork:'artwork-alter',description:`Palomar guarda il mondo is an editorial project that reinterprets Italo Calvino’s 1983 work, Palomar, through a transmedia lens. The result is a photographic book structured in nine chapters, each divided into three sections, for a total of 27 photo series. The photographs do not aim to portray the world, but to investigate the details of the phenomena around us. Palomar represents an alert, curious eye, an attitude often overlooked. Adopting his gaze becomes a meaningful way to reclaim a quality that has defined humanity for centuries: critical inquiry that persists even in the awareness of its own limits. The project invites us to explore life’s complexities with fresh eyes, enriching our perceptions and our understanding of reality.`},
  {number:'002.',title:'Arte Rupestre Valcamonica — Identità visiva per il patrimonio rupestre della Valle Camonica',type:'Visual identity',client:'Progetto personale',year:'2024',artwork:'artwork-forma',description:`Arte Rupestre Valcamonica is a branding project created to promote the UNESCO rock art site in Valcamonica. Bringing together physical and digital artefacts, the project draws on an in-depth study of local culture and history. Its aim is to fit harmoniously into the natural landscape and bring greater visibility to the rich system of symbols and images that make up the valley’s heritage. The visual concept distils the distinctive, material quality of the rock engravings scattered throughout the area. The resulting ecosystem includes institutional materials such as brochures, catalogues, merchandise and signage, alongside an app that makes visits to the parks interactive and an Instagram profile designed to reach a wider audience of visitors and enthusiasts.`},
  {number:'003.',title:'Illumia — Un progetto speculativo sul cambiamento climatico e lo sguardo del Sole',type:'Art direction',client:'Progetto personale',year:'2024',artwork:'artwork-materia',description:`Illumia is a speculative design project that invites us to consider climate change from an unusual perspective: that of the Sun. The story begins in 1984 at the Atmospheric Research Institute of America, where Illumia is created as a machine to study the relationship between the composition of the air and the colour of sunsets. But Illumia goes beyond scientific research, generating 12 billion sunsets to tell the story of the cosmos, from the Sun’s birth to its end. Over 4.5 billion years, the Sun has witnessed events far beyond human imagination. From this cosmic perspective, climate change appears as a small variation in the Earth’s ceaseless evolution. The project asks us to reflect on the relativity of our existence and the true scale of our impact on nature. With a subtle provocation, Illumia reminds humanity of its insignificance, putting its role in perspective against the cosmos. The project was exhibited at the Triennale Milano.`},
  {number:'004.',title:'Anthropogenic Narratives — Una mostra sulle prospettive non umane e il cambiamento climatico',type:'Campaign',client:'Progetto personale',year:'2023',artwork:'artwork-sotto',description:`Anthropogenic Narratives is a visual identity project created to promote the exhibition Anthropogenic Narratives – Communicating and Experiencing Non-Human Perspectives at the Triennale Milano. Through speculative design projects, the exhibition explores climate change and its impact on the relationship between humans and nature, presenting stories from the perspective of natural elements to encourage reflection and discussion. The graphic concept highlights the primacy of the natural point of view over the human one. Nature’s voice is expressed through organic, generative forms that evoke its complexity; human perspectives are represented by typography, set in contrast and conflict with the dominant natural shapes.`},
  {number:'005.',title:'Internet Art Archive — Un archivio digitale per documentare e preservare la net art',type:'Editorial design',client:'Progetto personale',year:'2023',artwork:'artwork-materia',description:`Net art, a revolutionary artistic expression that emerged with the digital age, has profoundly changed the relationship between art, technology and human interaction. Internet Art Archive is conceived as a digital reference archive to document, preserve and explore the evolution of this movement. Created for curious visitors and enthusiasts, it brings together landmark works, interviews and exhibition documentation, offering an immersive, multidimensional view of net art. The archive is also open to new contributions and updates, with the aim of encouraging dialogue between the past, present and future of a discipline in constant transformation.`},
  {number:'006.',title:'Questo è ciò che chiamo amicizia — Racconti e immagini per esplorare i legami di amicizia',type:'Visual identity',client:'Progetto personale',year:'2022',artwork:'artwork-forma',description:`Questo è ciò che chiamo amicizia is a small book that invites reflection on the intimate, nuanced nature of friendship, exploring how the meaning and boundaries of this bond change with each person’s sensibility, personality and life story. The book brings together short personal accounts: each participant was asked to describe the precise moment they felt a true friendship beginning to form with someone else. These stories are interpreted through evocative collages and abstract diagrams that delicately capture the dynamics of relationships. The book becomes a journey through the nuances of a universal bond, a mosaic of experiences that reveals the uniqueness of every connection.`},
  {number:'007.',title:'Capsula — Un’app per raccogliere e riscoprire i propri ricordi',type:'Art direction',client:'Progetto personale',year:'2022',artwork:'artwork-alter',description:`Capsula is a mobile app designed to guide users on a journey of self-discovery and awareness, bringing past and present together in an intimate, personal experience. Like a digital time capsule, it lets people collect and preserve memories in the form of photos, thoughts and information from connected apps. Each “capsule” remains sealed for a set period; when it opens, it offers a chance to rediscover forgotten moments and reflect on how we have changed over time. Capsula not only invites us to celebrate the small and great steps we have taken, but also encourages positive reflection, turning every experience into a part of our ongoing growth.`},
  {number:'008.',title:'Alteri - Visioni alternative di mascolinità',type:'Publication',client:'Progetto personale',year:'2022',artwork:'artwork-sotto',description:`Alteri is an independent magazine exploring the many facets of masculinity, with the aim of broadening the conversation around gender. Born from a desire to offer different perspectives, the project creates a space for alternative ways of experiencing masculinity, beyond the limits of the patriarchal view and its rigid, restrictive models. Each issue addresses themes connected to specific masculine stereotypes, ranging from mental wellbeing to relationships and self-care. Through articles, interviews and personal stories, Alteri seeks to offer new perspectives and practical ways to move beyond toxic masculinity and contribute to a more inclusive and equal society.`},
  {number:'009.',title:'No! The sound of dissens — Una pubblicazione sul suono come forma di dissenso',type:'Campaign',client:'Progetto personale',year:'2021',artwork:'artwork-materia',description:`No. The Sound of Dissent is an independent magazine exploring sound as a form of resistance and a catalyst for social and cultural transformation. Born from the belief that sound can challenge dominant narratives and open up new perspectives, the project creates a space for critical reflection on its political, social and cultural dimensions. Each issue explores a different aspect of sound as dissent, with the first dedicated to Noise. Through scientific research, photojournalism, anthropology, sociology and art, No. investigates the ways sound shapes our perception of the world and becomes a tool for questioning, disrupting and transforming the status quo. Combining a rigorous approach with a bold editorial voice, the magazine aims to engage an active and conscious audience, encouraging new ways of listening, thinking and resisting.`},
  {number:'010.',title:'Impasse - Il Passo della Morte al confine Italo-francese',type:'Editorial design',client:'Progetto personale',year:'2021',artwork:'artwork-forma',description:`Impasse began with a reflection on border territories and how to tell their stories beyond the alarmist narratives that often surround them. The project focuses on the Passo della Morte, a rugged mountain trail that has become one of the main irregular crossing routes along the Italian–French border between Ventimiglia and Menton. Through a chat-driven interactive documentary combining documentary filmmaking, interactive storytelling and an AI-powered chatbot, users experience the crossing from the perspective of a migrant. They are guided by Ikram, a voice who has already experienced the border and accompanies the story with care and empathy. Through first-person video and immersive 360-degree environments, the experience continually brings users back to Ventimiglia, echoing the cycle of waiting and frustration experienced by migrants and bringing a distant reality closer.`},
  {number:'011.',title:"L'altra — Un cortometraggio sulla convivenza e la distanza tra due sconosciute",type:'Visual identity',client:'Progetto personale',year:'2020',artwork:'artwork-alter',description:`L’altra is a short film about coexistence and what it means to live beside someone we do not truly know. Without romanticising the situation, the project brings to light the friction, silences and discomfort that surface when personal space becomes shared. Almost without dialogue, it follows two women in their twenties, both still trying to find themselves, connected by an apartment but not by a bond. Rather than a conflict, the film stages a distance: a shared vocabulary that has yet to form between two strangers, forced day after day to make room for one another. Without pursuing reconciliation or an answer, the film inhabits this distance, suggesting that the other, however unfamiliar, may be experiencing something not so different from ourselves.`},
  {number:'012.',title:'Border Memory - Analisi di strategie e modelli di design della comunicazione territoriale per la memoria dei luoghi della migrazione',type:'Research',client:'MA Thesis',year:'2026',artwork:'artwork-sotto',description:`Border Memory investigates the role of design in the communication of the memory of places of migration, questioning the ways in which the traces of human mobility can be made visible and critically interpretable. The research starts from the assumption that migrations are not limited to the movement of people, but transform territories, forms of belonging, and the very ways in which places are remembered and narrated. These transformations, however, struggle to integrate into public discourse and memory practices, and instead tend to remain fragmented and marginal, or to be framed within simplifying narratives linked to emergency, trauma, or otherness, which place migration in a dimension perceived as outside place and outside time. This asymmetry hinders an understanding of history as a relational process of copresence and mutual transformation between those who arrive and those who already inhabit the space. Starting from a theoretical framework on the relationship between memory, place, and project, in which memory is understood as a dynamic process of recognition and construction of meaning, the thesis develops an interpretive typology of places of migration, articulated in origin, detachment, crossing, waiting, arrival, dwelling, trauma, and residuality. These configurations offer interpretive keys to the different ways in which migratory memory is deposited, emerges, or is erased within space. On this basis, the thesis develops a comparative analysis of case studies concerning devices oriented toward the communication of the mnemonic significance of these places, conducted through an interpretive analytical framework aimed at identifying strategies and critical issues in the mediation between traces, places, and publics. The results confirm the potential of Communication Design for the Territory as a disciplinary field capable of engaging with the theme of migration and assuming a role of critical mediation and memory activism, contributing to the emergence of fragile memories or memories that are difficult to place within dominant narratives and fostering the construction of a more ethical and plural territorial narrative.`}
].reverse();

const sourceMetadata={
  '001.':{type:'Editorial Design',client:'Personal project',year:'2022'},
  '002.':{type:'Branding',client:'Personal project',year:'2022'},
  '003.':{type:'Speculative Design',client:'BA Thesis',year:'2023'},
  '004.':{type:'Exhibition Branding',client:'Triennale Milano',year:'2023'},
  '005.':{type:'Web Design',client:'Personal project',year:'2023'},
  '006.':{type:'Editorial Design',client:'Personal project',year:'2024'},
  '007.':{type:'Interaction Design',client:'Personal project',year:'2024'},
  '008.':{type:'Editorial Design',client:'Personal project',year:'2024'},
  '009.':{type:'Publication',client:'Personal project',year:'2025'},
  '010.':{type:'Design for the Territory',client:'Personal project',year:'2024'},
  '011.':{type:'Video Making',client:'Personal project',year:'2025'},
  '012.':{type:'Research',client:'MA Thesis',year:'2026'}
};
projectData.forEach(project=>Object.assign(project,sourceMetadata[project.number]||{}));

const descriptionPlaceholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const params=new URLSearchParams(location.search);
const index=Math.min(projectData.length-1,Math.max(0,Number(params.get('item'))||0));
const from=params.get('from')==='grid'?'grid':'full';
const project=projectData[index];
if(['001.','002.','003.','004.','005.','006.','007.','009.','011.'].includes(project.number)) project.title=project.title.split(' — ')[0];
if(project.number==='012.'){
  const gallery=document.querySelector('.detail-gallery');
  gallery.classList.add('detail-gallery--border-memory');
  const media=[
    ['1.png','image',2008/2835],
    ['3.png','image',2008/2835],
    ['4.png','image',470/2835],
    ['5.png','image',2008/2835],
    ['6.mp4','video',16/9],
    ['7.png','image',4173/2873],
    ['Frame 24.png','image',4173/2873],
    ['Frame 25.png','image',4173/2873],
    ['Frame 28.png','image',4173/2873],
    ['Frame 48.png','image',4173/2873],
    ['Frame 49.png','image',4173/2873],
    ['Frame 50.png','image',4173/2873],
    ['Frame 51.png','image',4173/2873],
    ['Frame 57.png','image',4173/2873],
    ['Frame 64.png','image',4173/2873],
    ['Frame 65.png','image',4173/2873],
    ['Frame 67.png','image',4173/2873],
    ['frame 100.png','image',1596/1080]
  ];
  const renderMedia=([file,kind,aspect],index)=>{
    const src=`images/012/GALLERY/${encodeURIComponent(file)}`;
    return kind==='video'
      ? `<video class="detail-image project-photo" src="${src}" aria-label="Border Memory, video ${index+1}" data-gallery-index="${index+1}" data-aspect="${aspect}" data-reveal autoplay muted loop playsinline preload="metadata"></video>`
      : `<img class="detail-image project-photo" src="${src}" alt="Border Memory, image ${index+1}" data-gallery-index="${index+1}" data-aspect="${aspect}" data-reveal loading="lazy">`;
  };
  gallery.innerHTML=`<div class="detail-image-row detail-image-row--triple">${media.slice(0,4).map((item,index)=>renderMedia(item,index===0?0:index+1)).join('')}</div>`
    + media.slice(4).map((item,index)=>`<div class="detail-image-row detail-image-row--single">${renderMedia(item,index+5)}</div>`).join('');
  const referenceImage=gallery.querySelector('[data-gallery-index="7"]');
  const matchRowHeights=()=>{
    const height=referenceImage.getBoundingClientRect().height;
    if(height>0){
      gallery.style.setProperty('--border-memory-media-height',`${height}px`);
      gallery.querySelectorAll('.detail-image-row--triple .project-photo').forEach(item=>{
        item.style.width=`${Number(item.dataset.aspect)*height}px`;
      });
    }
  };
  if('ResizeObserver' in window) new ResizeObserver(matchRowHeights).observe(referenceImage);
  referenceImage.addEventListener('load',matchRowHeights,{once:true});
  window.addEventListener('resize',matchRowHeights,{passive:true});
  requestAnimationFrame(matchRowHeights);
}
if(project.number==='011.'){
  document.querySelector('.detail-gallery').innerHTML=[
    'Sequenza 01.00_00_21_19.Immagine001 copia.jpg',
    'Sequenza 01.00_03_18_18.Immagine003 copia.jpg',
    'Sequenza 01.00_03_29_16.Immagine004 copia.jpg',
    'Sequenza 01.00_04_55_24.Immagine005 copia.jpg',
    'Sequenza 01.00_05_01_11.Immagine006 copia.jpg',
    'Sequenza 01.00_05_15_20.Immagine007 copia.jpg',
    'Sequenza 01.00_06_56_13.Immagine008 copia.jpg',
    'Sequenza 01.00_07_31_23.Immagine009 copia.jpg',
    'Sequenza 01.00_07_40_02.Immagine010 copia.jpg',
    'Sequenza 01.00_08_37_06.Immagine011 copia.jpg',
    'Sequenza 01.00_08_58_05.Immagine012 copia.jpg',
    'Sequenza 01.00_09_23_13.Immagine013 copia.jpg',
    'Sequenza 01.00_09_39_22.Immagine014 copia.jpg',
    'Sequenza 01.00_10_53_09.Immagine015 copia.jpg',
    'Sequenza 01.00_25_02_19.Immagine002 copia.jpg'
  ].map((file,index)=>`<img class="detail-image project-photo" src="images/011/Gallery/${encodeURIComponent(file).replaceAll('%2F','/')}" alt="L'altra, fotogramma ${index+1}" data-reveal loading="lazy">`).join('');
}
if(project.number==='010.'){
  document.querySelector('.detail-gallery').innerHTML=[
    ['images/010/gallery/1.mp4','video'],
    ['images/010/gallery/2.mp4','video'],
    ['images/010/gallery/3.mov','video'],
    ['images/010/gallery/39.png','image'],
    ['images/010/gallery/6.mp4','video'],
    ['images/010/gallery/6_Sentiero.mov','video']
  ].map(([src,kind],index)=>kind==='video'
    ? `<video class="detail-image project-photo" src="${src}" aria-label="Impasse, video ${index+1}" data-reveal autoplay muted loop playsinline preload="metadata"></video>`
    : `<img class="detail-image project-photo" src="${src}" alt="Impasse, immagine ${index+1}" data-reveal loading="lazy">`
  ).join('');
}
if(project.number==='006.'){
  document.querySelector('.detail-gallery').innerHTML=[
    'images/006/gallery/1.jpg',
    'images/006/gallery/2.jpg',
    'images/006/gallery/3.jpg',
    'images/006/gallery/4.jpg',
    'images/006/gallery/5.jpg',
    'images/006/gallery/6.JPG'
  ].map((src,index)=>`<img class="detail-image project-photo" src="${src}" alt="Questo è ciò che chiamo amicizia, immagine ${index+1}" data-reveal loading="lazy">`).join('');
}
if(project.number==='007.'){
  const gallery=document.querySelector('.detail-gallery');
  const images=Array.from({length:12},(_,index)=>`images/007/gallery/${String(index+1).padStart(2,'0')}.png`);
  const renderImage=(src,index)=>`<img class="detail-image project-photo" src="${src}" alt="Capsula, immagine ${index+1}" data-reveal loading="lazy">`;
  gallery.innerHTML=renderImage(images[0],0)
    + renderImage(images[11],11)
    + `<div class="detail-image-row detail-image-row--triple">${images.slice(1,4).map((src,index)=>renderImage(src,index+1)).join('')}</div>`
    + `<div class="detail-image-row detail-image-row--triple">${images.slice(4,7).map((src,index)=>renderImage(src,index+4)).join('')}</div>`
    + `<div class="detail-image-row detail-image-row--triple">${images.slice(8,11).map((src,index)=>renderImage(src,index+8)).join('')}</div>`
    + renderImage(images[7],7);
}
if(project.number==='008.'){
  document.querySelector('.detail-gallery').innerHTML=[
    ['images/008/gallery/01.jpg','image'],
    ['images/008/gallery/02.jpg','image'],
    ['images/008/gallery/03.mov','video'],
    ['images/008/gallery/04.png','image'],
    ['images/008/gallery/05.png','image'],
    ['images/008/gallery/06.png','image'],
    ['images/008/gallery/07.png','image'],
    ['images/008/gallery/08.png','image'],
    ['images/008/gallery/09.png','image'],
    ['images/008/gallery/10.mov','video'],
    ['images/008/gallery/11.jpg','image'],
    ['images/008/gallery/12.jpg','image']
  ].map(([src,kind],index)=>kind==='video'
    ? `<video class="detail-image project-photo" src="${src}" aria-label="Alteri, video ${index+1}" data-reveal autoplay muted loop playsinline preload="metadata"></video>`
    : `<img class="detail-image project-photo" src="${src}" alt="Alteri, immagine ${index+1}" data-reveal loading="lazy">`
  ).join('');
}
if(project.number==='009.'){
  const gallery=document.querySelector('.detail-gallery');
  const images=[
    'images/009/gallery/gallery02/01.png',
    'images/009/gallery/gallery02/02.png',
    'images/009/gallery/gallery02/03.png',
    'images/009/gallery/gallery02/04.png',
    'images/009/gallery/gallery02/05.gif',
    'images/009/gallery/gallery02/06.png',
    'images/009/gallery/gallery02/07.gif'
  ];
  const renderImage=(src,index)=>`<img class="detail-image project-photo" src="${src}" alt="No! The sound of dissens ${index+1}" data-reveal loading="lazy">`;
  gallery.innerHTML=`<div class="detail-image-row detail-image-row--first detail-image-row--same-height">${images.slice(0,2).map((src,index)=>renderImage(src,index+1)).join('')}</div>`
    + images.slice(2).map((src,index)=>renderImage(src,index+3)).join('');
}
if(project.number==='001.'){
  document.querySelector('.detail-gallery').innerHTML=[
    'images/001/gallery/01.jpg',
    'images/001/gallery/02.jpg',
    'images/001/gallery/03.jpg',
    'images/001/gallery/04.jpg',
    'images/001/gallery/05.jpg',
  ].map((src,index)=>`<img class="detail-image project-photo" src="${src}" alt="Palomar guarda il mondo ${index+1}" data-reveal loading="lazy">`).join('');
}
if(project.number==='002.'){
  document.querySelector('.detail-gallery').innerHTML=[
    'images/002/gallery/01.jpg',
    'images/002/gallery/02.jpg',
    'images/002/gallery/03.jpg',
    'images/002/gallery/04.jpg',
    'images/002/gallery/05.jpg',
    'images/002/gallery/06.jpg',
    'images/002/gallery/07.jpg',
    'images/002/gallery/08.jpg',
    'images/002/gallery/09.jpg',
    'images/002/gallery/10.jpg',
    'images/002/gallery/11.jpg',
  ].map((src,index)=>`<img class="detail-image project-photo" src="${src}" alt="Arte Rupestre Valcamonica ${index+1}" data-reveal loading="lazy">`).join('');
}
if(project.number==='003.'){
  document.querySelector('.detail-gallery').innerHTML=[
    ['images/003/gallery/01.jpg','image'],
    ['images/003/gallery/02.jpg','image'],
    ['images/003/gallery/03.mov','video'],
    ['images/003/gallery/05.png','image'],
    ['images/003/gallery/06.jpg','image'],
    ['images/003/gallery/08.jpeg',,'image'],
    ['images/003/gallery/09.mov','video'],
    ['images/003/gallery/176.jpg',,'image'],
    ['images/003/gallery/177.jpg','image'],
    ['images/003/gallery/178.jpg','image'],
    ['images/003/gallery/179.jpg','image'],
    ['images/003/gallery/180.jpg','image'],
    ['images/003/gallery/181.jpg','image'],
    ['images/003/gallery/07.jpg','image'],
  ].map(([src,kind],index)=>kind==='video'
    ? `<video class="detail-image project-photo" src="${src}" aria-label="Illumia, video ${index+1}" data-reveal autoplay muted loop playsinline preload="metadata"></video>`
    : `<img class="detail-image project-photo" src="${src}" alt="Illumia, immagine ${index+1}" data-reveal loading="lazy">`
  ).join('');
}
if(project.number==='004.'){
  const gallery=document.querySelector('.detail-gallery');
  const images=[
    ['images/004/gallery/01.mp4','video'],
    ['images/004/gallery/02.jpg','image'],
    ['images/004/gallery/03.jpg','image'],
    ['images/004/gallery/04.jpg','image'],
    ['images/004/gallery/05.jpg','image'],
    ['images/004/gallery/06.jpg','image'],
    ['images/004/gallery/07.jpg','image'],
  ];
  const renderImage=([src,kind],index)=>kind==='video'
    ? `<video class="detail-image project-photo" src="${src}" aria-label="Anthropogenic Narratives, video ${index+1}" data-reveal autoplay muted loop playsinline preload="metadata"></video>`
    : `<img class="detail-image project-photo" src="${src}" alt="Anthropogenic Narratives, immagine ${index+1}" data-reveal loading="lazy">`;
  gallery.innerHTML=images.slice(0,2).map(renderImage).join('')
    + `<div class="detail-image-row detail-image-row--anthropogenic">${images.slice(2,4).map((image,index)=>renderImage(image,index+2)).join('')}</div>`
    + images.slice(4).map((image,index)=>renderImage(image,index+4)).join('');
}

if(project.number==='005.'){
  const gallery=document.querySelector('.detail-gallery');
  const images=[
    ['images/005/gallery/01.mov','video'],
    ['images/005/gallery/02.mov','video'],
    ['images/005/gallery/03.mov','video'],
    ['images/005/gallery/04.mov','video'],
    ['images/005/gallery/05.mov','video'],
    ['images/005/gallery/06.jpg','image'],
    ['images/005/gallery/07.png','image'],
    ['images/005/gallery/08.mov','video'],
    ['images/005/gallery/09.mov','video'],
  ];
  const renderImage=([src,kind],index)=>kind==='video'
    ? `<video class="detail-image project-photo" src="${src}" aria-label="Internet Art Archive, video ${index+1}" data-reveal autoplay muted loop playsinline preload="metadata"></video>`
    : `<img class="detail-image project-photo" src="${src}" alt="Internet Art Archive, immagine ${index+1}" data-reveal loading="lazy">`;
  gallery.innerHTML=images.slice(0,1).map(renderImage).join('')
    + `<div class="detail-image-row detail-image-row--pair">${images.slice(1,3).map((image,index)=>renderImage(image,index+1)).join('')}</div>`
    + `<div class="detail-image-row detail-image-row--pair">${images.slice(3,5).map((image,index)=>renderImage(image,index+3)).join('')}</div>`
    + images.slice(5).map((image,index)=>renderImage(image,index+5)).join('');
}

document.title=`${project.title} — Camilla Brusadin`;
document.querySelector('.detail-number').textContent=project.number;
document.querySelector('.detail-title').textContent=project.title;
document.querySelector('.detail-type').textContent=project.type;
document.querySelector('.detail-client').textContent=project.client;
document.querySelector('.detail-year').textContent=project.year;
const descriptionCopy=document.querySelector('.detail-description-copy');
const descriptionText=project.description||descriptionPlaceholder;
const descriptionParagraphs=project.number==='012.'
  ? descriptionText.split(/(?=This asymmetry hinders)/)
  : [descriptionText];
descriptionCopy.replaceChildren(...descriptionParagraphs.map(text=>{
  const paragraph=document.createElement('p');
  paragraph.textContent=text.trim();
  return paragraph;
}));

const projectMetadata={
  '001.':{
    context:'Sociology of Cultural and Communication Processes course, Bachelor’s Degree in Communication Design, Politecnico di Milano',
    authors:'Camilla Brusadin, Martina Esposito, Chiara Mazzeo, Cecilia Pizzagalli, Anita Ruggiu, Beatrice Serra',
    specifications:'151 pages, softcover, 220 × 145 mm, offset printing'
  },
  '002.':{
    context:'Visual Communication Design Lab, Bachelor’s Degree in Communication Design, Politecnico di Milano',
    authors:'Manuela Balossi, Sara Barzaghi, Camilla Brusadin, Daniele Galbusera, Federico Ricco'
  },
  '003.':{
    context:'Final Synthesis Lab, Bachelor’s Degree in Communication Design, Politecnico di Milano',
    authors:'Andrea Borsato, Camilla Brusadin, Martina Esposito, Chiara Mazzeo, Marco Taino, Anita Ruggiu'
  },
  '004.':{
    context:'Exhibition at the Salone d’Onore of Triennale Milano, Milan',
    authors:'Camilla Brusadin, Federico Gajo, Enrico Isidori, Martina La Macchia, Camilla Tosi'
  },
  '005.':{
    context:'Digital Image Culture course, Master’s Degree in Communication Design, Politecnico di Milano',
    authors:'Lucrezia Annibali, Camilla Brusadin, Emma Caselli, Federica Milianti, Daniele Galbusera, Luca Gottifredi, Beatrice Serra',
    specifications:'Website developed using HTML, CSS, and JavaScript'
  },
  '006.':{
    context:'Workshop, Master’s Degree in Communication Design, Politecnico di Milano',
    authors:'Camilla Brusadin, Arianna Marenghi, Beatrice Serra, Alice Polerà',
    specifications:'46 pages, 140 × 200 mm, offset printing, Japanese binding, Fedrigoni Tintoretto Neve 95 g/m²'
  },
  '007.':{
    context:'Interaction Systems Lab, Master’s Degree in Communication Design, Politecnico di Milano',
    authors:'Ginevra Bernasconi, Camilla Brusadin, Arianna Marenghi, Beatrice Serra, Camilla Tosi',
    specifications:'Mobile app designed for iOS and Android; prototype created with Figma'
  },
  '008.':{
    context:'Complex Systems and Artefacts Design Studio, Master’s Degree in Communication Design, Politecnico di Milano',
    authors:'Camilla Brusadin, Daniele Galbusera, Marco Taino, Costanza Turi, Ilaria Urgesi',
    specifications:'191 pages, softcover, 165 × 240 mm, offset printing, sewn binding, Fedrigoni Arena Ultrawhite 120 g/m², Burgo Matt 150 g/m², Pur Cotton Smoke 120 g/m², Reflex Zeta Linen 350 g/m²'
  },
  '010.':{
    context:'Final Project course, Master’s Degree in Communication Design, Politecnico di Milano',
    authors:'Camilla Brusadin, Daniele Galbusera, Luca Gottifredi, Arianna Marenghi, Beatrice Serra',
    specifications:'Chat-driven interactive documentary, responsive website, digital archive, generative AI Telegram chatbot (OpenAI API), Flask server'
  },
  '011.':{
    context:'Art Direction and Copywriting course, Master’s Degree in Communication Design, Politecnico di Milano',
    authors:'Camilla Brusadin, Emma Caselli, Arianna Marenghi, Federica Milianti, Beatrice Serra',
    specifications:'12′09″, digital video, 4:3 aspect ratio, 4K, 30 fps, stereo audio'
  },
  '012.':{
    context:'Thesis, Master’s Degree in Communication Design, Politecnico di Milano',
    authors:'Camilla Brusadin',
    specifications:'447 pages, softcover, 165 × 240 mm, offset printing, sewn binding, Fedrigoni Arena White 120 g/m²'
  }
};
const metadata=projectMetadata[project.number]||{};
const projectCategories=document.createElement('dl');
projectCategories.className='detail-project-categories';
[['Context','context'],['Author(s)','authors'],['Specifications','specifications']].forEach(([label,key])=>{
  const row=document.createElement('div');
  const term=document.createElement('dt');
  const value=document.createElement('dd');
  term.textContent=label;
  value.textContent=metadata[key]||'—';
  row.append(term,value);
  projectCategories.append(row);
});
document.querySelector('.detail-description').append(projectCategories);

let revealObserver;
const revealWhenReady=element=>{
  if(element.dataset.revealInView!=="true"||element.classList.contains("is-visible")) return;
  const ready=element.dataset.revealFailed==="true"||(element instanceof HTMLImageElement
    ? element.complete&&element.naturalWidth>0
    : element instanceof HTMLVideoElement
      ? element.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA
      : true);
  if(!ready) return;
  element.classList.add("is-visible");
  revealObserver.unobserve(element);
};
revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    entry.target.dataset.revealInView=entry.isIntersecting?"true":"false";
    revealWhenReady(entry.target);
  });
},{threshold:0,rootMargin:"0px"});
document.querySelectorAll("[data-reveal]").forEach(element=>{
  const onReady=()=>revealWhenReady(element);
  element.addEventListener("load",onReady);
  element.addEventListener("loadeddata",onReady);
  element.addEventListener("canplay",onReady);
  element.addEventListener("error",()=>{
    element.dataset.revealFailed="true";
    onReady();
  },{once:true});
  revealObserver.observe(element);
});

const homeUrl=`index.html?view=${from}#home`;
document.querySelector('.wordmark').href=homeUrl;
const close=document.querySelector('.project-close');
close.href=homeUrl;
close.addEventListener('click',event=>{
  if(document.referrer.includes('index.html')){
    event.preventDefault();
    history.back();
  }
});
}
