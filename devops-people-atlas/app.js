'use strict';
const $ = id => document.getElementById(id);
const categories = ['前端与工具', '语言与系统', '软件工程', '数据与后端', '云原生与平台', '运维与可观测性'];
const state = {people: [], category: '全部人物', query: '', language: 'all', sort: 'curated', savedOnly: false, view: 'people'};
let saved;
try { saved = new Set(JSON.parse(localStorage.getItem('engineering-atlas-saved') || '[]')); } catch { saved = new Set(); }
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
const safeUrl = value => { try { const url = new URL(value); return url.protocol === 'https:' ? esc(url.href) : '#'; } catch { return '#'; } };
const link = (url, text, cls='') => `<a class="${cls}" href="${safeUrl(url)}" target="_blank" rel="noopener noreferrer">${text}</a>`;
const icons = {
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 3 12 18h4L8 3H4Zm0 18L20 3"/></svg>',
  website: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 20v-3c-4 1-4-2-6-2m12 5v-4c0-1-.5-2-1-2 4 0 6-2 6-5 0-2-1-3-1-3 .5-1 .5-3 0-3-2 0-3 1-3 1-3-1-5-1-8 0 0 0-1-1-3-1-.5 0-.5 2 0 3 0 0-1 1-1 3 0 3 2 5 6 5-1 0-1 1-1 2v4"/></svg>'
};
function avatar(person) {
  const initials = person.name.split(/\s+/).map(w => w[0]).slice(0,2).join('');
  const username = person.github?.match(/^https:\/\/github\.com\/([^/?#]+)\/?$/)?.[1];
  return `<span class="avatar" aria-hidden="true">${esc(initials)}${username ? `<img src="https://github.com/${esc(username)}.png?size=120" loading="lazy" alt="" onerror="this.remove()">` : ''}</span>`;
}
function socials(person) {
  const entries = [['x','X'],['website','个人网站'],['github','GitHub']].filter(([key]) => person[key]);
  return entries.length ? `<div class="socials">${entries.map(([key,label]) => link(person[key], `${icons[key]}${key==='website'&&person.websiteStatus?'网站 · 暂不可用':label}`)).join('')}</div>` : '';
}
function saveButton(person) {return `<button class="save" data-save="${esc(person.id)}" aria-label="${saved.has(person.id)?'取消收藏':'收藏'} ${esc(person.name)}" aria-pressed="${saved.has(person.id)}">${saved.has(person.id)?'★':'☆'}</button>`;}
function personCard(person) {
  return `<article class="card" data-person="${esc(person.id)}"><div class="card-top"><span class="card-category">${esc(person.category)}</span>${saveButton(person)}</div><div class="person">${avatar(person)}<div><h3><button data-detail="${esc(person.id)}">${esc(person.name)}${person.alias ? `<span class="alias">${esc(person.alias)}</span>` : ''}</button></h3><div class="role">${esc(person.role)}</div></div></div><p class="description">${esc(person.description)}</p><div class="tags">${person.tags.map(tag=>`<span class="tag">${esc(tag)}</span>`).join('')}</div><div class="works-line"><span>代表作</span>${person.works.slice(0,2).map(work=>link(work.url,esc(work.title))).join('<span>·</span>')}</div>${socials(person)}<div class="card-bottom"><span>${esc(person.language)}</span><button data-detail="${esc(person.id)}">人物详情 ↗</button></div></article>`;
}
function readingCard(person) {
  return `<article class="card reading-card"><div class="card-top"><span class="card-category">${esc(person.category)}</span>${saveButton(person)}</div><div class="reading-kicker">编辑推荐 · 学习入口</div><h3>${link(person.start.url,esc(person.start.title))}</h3><p class="description">${esc(person.start.note)}</p><div class="reading-by">${avatar(person)}<button data-detail="${esc(person.id)}">${esc(person.name)} ↗</button><span>· ${esc(person.language)}</span></div>${link(person.start.url,'开始阅读 <span>↗</span>','reading-open')}</article>`;
}
function renderCategories() {
  $('categories').innerHTML = ['全部人物',...categories].map(category=>`<button class="category ${state.category===category?'active':''}" data-category="${esc(category)}" aria-pressed="${state.category===category}">${esc(category)} <span>${category==='全部人物'?state.people.length:state.people.filter(p=>p.category===category).length}</span></button>`).join('');
}
function render() {
  renderCategories();
  const query = state.query.trim().toLocaleLowerCase();
  let people = state.people.filter(person => (state.category==='全部人物'||person.category===state.category) && (!state.savedOnly||saved.has(person.id)) && (state.language==='all'||person.language.includes(state.language)) && (!query||[person.name,person.alias,person.role,person.description,person.category,...person.tags,...person.works.map(w=>w.title),person.start.title,person.x,person.github].join(' ').toLocaleLowerCase().includes(query)));
  if(state.sort==='name') people.sort((a,b)=>a.name.localeCompare(b.name,'en'));
  $('grid').innerHTML = people.map(state.view==='people'?personCard:readingCard).join('');
  $('empty').hidden = people.length>0;
  $('result-count').textContent = `显示 ${people.length} / ${state.people.length} 位人物${state.savedOnly?' · 我的收藏':''}`;
  $('saved-toggle').setAttribute('aria-pressed',state.savedOnly);
  const savedCount = state.people.filter(person=>saved.has(person.id)).length;
  $('saved-toggle').textContent = `${state.savedOnly?'★':'☆'} 收藏${savedCount ? ` · ${savedCount}` : ''}`;
  $('people-view').classList.toggle('active',state.view==='people');
  $('reading-view').classList.toggle('active',state.view==='reading');
  $('people-view').setAttribute('aria-pressed',state.view==='people');
  $('reading-view').setAttribute('aria-pressed',state.view==='reading');
  $('clear-filters').hidden = !(query || state.category!=='全部人物'||state.language!=='all'||state.savedOnly);
}
function resetFilters() {state.query='';state.category='全部人物';state.language='all';state.savedOnly=false;$('search').value='';$('language').value='all';render();}
let toastTimer;
function toast(message) {$('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),2500);}
function save(id) {
  if(saved.has(id)) saved.delete(id); else saved.add(id);
  try {localStorage.setItem('engineering-atlas-saved',JSON.stringify([...saved]));} catch {toast('当前浏览器无法保存收藏；本次浏览仍可使用。');}
  render();
}
function showDetail(id) {
  const person=state.people.find(p=>p.id===id);if(!person)return;
  const verification = typeof person.verification === 'string' ? person.verification : Object.entries(person.verification||{}).map(([key,value])=>`${({x:'X',website:'个人网站',github:'GitHub'})[key]||key}：${value}`).join('；');
  $('detail-body').innerHTML=`<p class="eyebrow">${esc(person.category)} / PROFILE</p><div class="detail-heading">${avatar(person)}<div><h2 id="profile-name">${esc(person.name)}${person.alias?` <span class="alias">${esc(person.alias)}</span>`:''}</h2><div class="role">${esc(person.role)}</div></div></div><p class="detail-description">${esc(person.description)}</p><div class="tags">${person.tags.map(tag=>`<span class="tag">${esc(tag)}</span>`).join('')}<span class="tag">${esc(person.language)}</span></div><div class="detail-section"><h3>找到 TA</h3>${socials(person)}<div class="account-handles">${[['x','X'],['github','GitHub']].filter(([key])=>person[key]).map(([key,label])=>`<span>${label}：@${esc(new URL(person[key]).pathname.split('/').filter(Boolean)[0])}</span>`).join('')}</div>${person.otherLinks?.length?`<div class="detail-links" style="margin-top:12px">${person.otherLinks.map(item=>link(item.url,`${esc(item.title)} <span>↗</span>`)).join('')}</div>`:''}<p>${esc(verification)}</p></div><div class="detail-section"><h3>代表项目与著作</h3><div class="detail-links">${person.works.map(work=>link(work.url,`${esc(work.title)} <span>↗</span>`)).join('')}</div></div><div class="detail-section"><h3>推荐从这里开始 <small>· 编辑选择</small></h3><div class="detail-links">${link(person.start.url,`${esc(person.start.title)} <span>↗</span>`)}</div><p>${esc(person.start.note)}</p></div><div class="detail-section"><h3>资料来源</h3><ol class="source-links">${person.sources.map(source=>`<li>${link(typeof source==='string'?source:source.url,esc(typeof source==='string'?source:source.title||source.url))}</li>`).join('')}</ol></div><p class="detail-footnote">核实日期：${esc(person.checkedAt)} · 账号缺失表示本轮未确认，不表示本人没有账号。部分外部平台可能要求登录。</p>`;
  $('detail').showModal();
}
async function load() {
  try {
    const response=await fetch('people.json');if(!response.ok)throw new Error('Failed to load');
    state.people=await response.json();render();
  } catch {$('result-count').textContent='资料暂时无法载入';$('grid').innerHTML='<div class="error"><h3>资料暂时无法载入</h3><p>请检查网络后重试。</p><button id="reload">重新加载</button></div>';$('reload').addEventListener('click',load);}
}
$('categories').addEventListener('click',event=>{const button=event.target.closest('[data-category]');if(button){state.category=button.dataset.category;render();}});
$('grid').addEventListener('click',event=>{const saveTarget=event.target.closest('[data-save]');const detailTarget=event.target.closest('[data-detail]');if(saveTarget)save(saveTarget.dataset.save);else if(detailTarget)showDetail(detailTarget.dataset.detail);else if(!event.target.closest('a,button')){const card=event.target.closest('[data-person]');if(card)showDetail(card.dataset.person);}});
$('search').addEventListener('input',event=>{state.query=event.target.value;render();});
$('language').addEventListener('change',event=>{state.language=event.target.value;render();});
$('sort').addEventListener('change',event=>{state.sort=event.target.value;render();});
$('saved-toggle').addEventListener('click',()=>{state.savedOnly=!state.savedOnly;render();});
for(const id of ['clear-filters','empty-reset']) $(id).addEventListener('click',resetFilters);
for(const [id,view] of [['people-view','people'],['reading-view','reading']]) $(id).addEventListener('click',()=>{state.view=view;render();});
for(const id of ['about-nav','footer-about']) $(id).addEventListener('click',()=>$('about').showModal());
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close();}});});
document.addEventListener('keydown',event=>{if(event.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!document.querySelector('dialog[open]')){event.preventDefault();$('search').focus();}});
$('export').addEventListener('click',()=>{if(!state.people.length){toast('请等待人物资料载入。');return;}const blob=new Blob([JSON.stringify({title:'工程人物志',checkedAt:'2026-10-10',people:state.people},null,2)],{type:'application/json;charset=utf-8'});const url=URL.createObjectURL(blob);const anchor=document.createElement('a');anchor.href=url;anchor.download='engineering-atlas-2026-10-10.json';anchor.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('已下载人物资料与来源。');});
load();
