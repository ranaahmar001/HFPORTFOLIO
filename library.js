const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const localAsset=file=>typeof assetData!=='undefined'?assetData[file]:'assets/'+file;
const categoryLabels=['All work','Social & ad creative','Branding & print','Landing pages','Email marketing'];
const gallery=document.querySelector('#creative-grid');
document.querySelector('.filter-row').innerHTML=categoryLabels.map((c,i)=>`<button data-design-filter="${safe(c)}" aria-pressed="${i===0}" class="${i===0?'active':''}">${safe(c)}</button>`).join('');
function renderDesigns(category='All work'){
 const list=sourceLibrary.designs.filter(d=>category==='All work'||d.category===category);
 gallery.innerHTML=list.map(d=>`<button class="creative-item" data-library-design="${safe(d.file)}"><div class="creative-image"><img src="${localAsset(d.file)}" alt="${safe(d.name)}" loading="lazy"></div><span>${safe(d.name)}<small>↗</small></span><small class="design-category">${safe(d.category)} · p.${d.page}</small></button>`).join('');
 document.querySelector('#design-count').textContent=`${list.length} designs`;
}
renderDesigns();
document.querySelectorAll('[data-design-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-design-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});renderDesigns(b.dataset.designFilter);}));
const categories=[...new Set(sourceLibrary.pages.map(p=>p.category))];
document.querySelector('#library-category').innerHTML='<option value="">All categories</option>'+categories.map(c=>`<option>${safe(c)}</option>`).join('');
function renderLibrary(){
 const term=document.querySelector('#library-search').value.toLowerCase(),category=document.querySelector('#library-category').value;
 const list=sourceLibrary.pages.filter(p=>(!category||p.category===category)&&`${p.title} ${p.text} ${p.page}`.toLowerCase().includes(term));
 document.querySelector('#library-count').textContent=`${list.length} of 66 source pages`;
 document.querySelector('#library-grid').innerHTML=list.map(p=>`<button class="source-card" data-source-page="${p.page}"><img src="${localAsset(p.preview)}" alt="Canva source page ${p.page}: ${safe(p.title)}" loading="lazy"><span>${safe(p.category)}</span><h3>${safe(p.title)}</h3><small>Page ${p.page} · Open details ↗</small>${p.note?'<i>Source note</i>':''}</button>`).join('')||'<p>No matching pages. Try another brand or category.</p>';
}
function revealLibrary(){document.querySelector('.library-disclosure').open=true;renderLibrary();}
document.querySelector('#library-search').addEventListener('input',revealLibrary);document.querySelector('#library-category').addEventListener('change',revealLibrary);renderLibrary();
document.addEventListener('click',e=>{
 const item=e.target.closest('[data-library-design]'),source=e.target.closest('[data-source-page]');
 if(item){const d=sourceLibrary.designs.find(x=>x.file===item.dataset.libraryDesign);openDialog(`<span class="section-kicker">${safe(d.category)} · Source p.${d.page}</span><h2>${safe(d.name)}</h2><img class="lightbox-image" src="${localAsset(d.file)}" alt="${safe(d.name)}"><p class="evidence-note">Original supplied design, matched to the Canva source category.</p>`);}
 if(source){const p=sourceLibrary.pages.find(x=>x.page===Number(source.dataset.sourcePage));openDialog(`<div class="case-header"><span class="section-kicker">${safe(p.category)} · Page ${p.page}</span><h2>${safe(p.title)}</h2></div>${p.note?`<aside class="source-warning">${safe(p.note)}</aside>`:''}<img class="case-evidence" src="${localAsset(p.preview)}" alt="Current Canva page ${p.page}"><p class="evidence-note">Current Canva source preview.</p>${p.page!==1?`<details><summary>Open larger matching PDF evidence</summary><img class="case-evidence" src="${localAsset(p.image)}" alt="Supplied PDF page ${p.page}"></details>`:''}${p.text?`<details><summary>Read original source wording</summary><div class="source-transcript">${safe(p.text)}</div></details>`:'<p class="evidence-note">This page contains visual evidence only.</p>'}<a class="button" target="_blank" rel="noopener noreferrer" href="https://www.canva.com/d/OCwR-q9tsZR51Im">Open original Canva presentation ↗</a>`);}
});
