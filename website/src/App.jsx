import { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon, ArrowUpRightIcon, XIcon, GithubLogoIcon, DownloadSimpleIcon, CopyIcon } from '@phosphor-icons/react';
import '@fontsource-variable/noto-sans-sc';
import { TranslateIcon, SquaresFourIcon, DeviceMobileIcon, DesktopIcon, GlobeIcon } from '@phosphor-icons/react';
import { translator, initialLanguage, localizeProduct, platformFilters, categoryFilters } from './i18n.js';

const callHome = {
  id: 'callhome',
  type: 'app',
  status: 'released',
  name: '常回家看看：家的声音',
  shortName: '常回家看看',
  subtitle: '家的声音',
  image: 'callhome-icon.png',
  platforms: 'iPhone · iPad',
  tagline: '让关心，落到真实的一天里。',
  description: ['轻轻提醒你联系家人，也记下每天的照顾。', '一键拨号、吃药与过期提醒，还有给家人的小惊喜。'],
  highlights: ['家人联系提醒', '吃药与过期提醒', '家庭惊喜转盘'],
  detail: '为家人设置合适的联系节奏，到点收到轻柔提醒；记录吃药与药品、食品的过期日期，还能用家庭惊喜转盘，为下一件暖心小事做个决定。电话由系统拨号界面发起，提醒使用 iOS 本地通知。支持中文与英文，数据保存在设备本地。',
  download: 'https://apps.apple.com/hk/app/%E5%B8%B8%E5%9B%9E%E5%AE%B6%E7%9C%8B%E7%9C%8B-%E5%AE%B6%E7%9A%84%E5%A3%B0%E9%9F%B3/id6788785708',
  support: './callhome/support.html',
  privacy: './callhome/privacy.html',
  features: [
    ['联系家人', '为每位家人设定联系节奏和提醒时间，查看距离上次联系的天数，一键打开系统电话。'],
    ['日常照顾', '记录每日吃药时间，以及药品、食品和其他物品的过期日期；可在 App 内更新服用或处理状态。'],
    ['家庭惊喜', '把送礼物、发红包、陪伴家人等想法放进转盘，为下一件小事添一点乐趣。'],
    ['本地与双语', '支持中文和英文。家人资料与照护记录保存在设备本地，提醒由 iOS 本地通知提供。'],
  ],
  screens: [
    { image: 'callhome-care.png', width: 1242, height: 2688, alt: '常回家看看照顾页面，展示今日吃药与食品、药品过期提醒', caption: '把日常照顾记在心上' },
    { image: 'callhome-surprise.png', width: 1242, height: 2688, alt: '常回家看看家庭惊喜转盘，包含礼物、红包和陪伴家人等选项', caption: '为家人选一件小惊喜' },
  ],
};

const compound = {
  id: 'compound',
  type: 'app',
  status: 'released',
  name: '复利计算器：时间的杠杆',
  shortName: '复利计算器',
  subtitle: '时间的杠杆',
  image: 'compoundly-icon.png',
  platforms: 'iPhone · iPad',
  tagline: '看见时间的力量。',
  description: ['算清复利与定投，探索财富和认知实验。', '让长期思考，变得直观。'],
  highlights: ['复利计算', '长期规划', '互动实验'],
  detail: '把本金、收益率与时间放进计算，直观看见长期增长。通过互动实验，理解财富、风险与认知。',
  download: 'https://apps.apple.com/cn/app/id6787851299',
  support: './compoundly/support.html',
  privacy: './compoundly/privacy.html',
  note: '计算与实验仅供学习，不构成投资建议。',
  features: [
    ['复利与定投', '比较投入、收益和时间的关系。'],
    ['长期规划', '从目标和退休需求出发，寻找自己的计划。'],
    ['财富与认知实验', '亲手改变参数，观察不同选择的结果。'],
  ],
  screens: [
    { image: 'compoundly-home.jpg', width: 600, height: 1304, alt: '复利计算页面，展示预计金额、增长倍数和时间轨迹', caption: '把时间放进计算' },
    { image: 'compoundly-lab.jpg', width: 600, height: 1301, alt: '财富交换互动实验，展示参与者的财富分布和差距指数', caption: '在实验中理解变化' },
  ],
};

const littlebird = {
  id: 'littlebird',
  type: 'app',
  status: 'released',
  name: '小小鸟音乐 · Little Bird Music',
  shortName: '小小鸟音乐',
  subtitle: '本地音乐，私密聆听',
  image: 'littlebird-icon.png',
  platforms: 'iPhone',
  tagline: '让音乐，陪伴每一天。',
  description: ['导入喜欢的音乐，整理属于自己的乐库。', '跟随同步歌词，轻松享受每一首歌。'],
  highlights: ['本地音乐', '同步歌词', '收藏与歌单'],
  detail: '一款轻巧的本地音乐播放器。将自己的音乐带进 iPhone，用清晰的乐库、同步歌词与便捷的播放控制，享受私密的聆听时光。',
  download: 'https://apps.apple.com/cn/app/id6807464230',
  support: './littlebird-support/index.html',
  privacy: './littlebird-support/privacy.html',
  features: [
    ['导入与整理', '支持 MP3、M4A、MP4 等文件，按歌曲、歌手、歌单与收藏管理音乐。'],
    ['同步歌词', '跟随播放高亮歌词，点击歌词即可跳转到对应位置。'],
    ['随时掌控播放', '迷你播放器、完整播放页、锁屏与灵动岛，方便切歌和控制播放。'],
    ['本地聆听', '音乐文件与播放设置保存在设备上，支持中文与英文界面。'],
  ],
  screens: [
    { image: 'littlebird-home.png', width: 1242, height: 2688, alt: '小小鸟音乐首页，展示本地歌曲列表、搜索与迷你播放器', caption: '收藏自己的音乐' },
    { image: 'littlebird-player.png', width: 1242, height: 2688, alt: '小小鸟音乐播放页，展示小鸟封面、同步歌词与播放控制', caption: '跟随歌词，享受聆听' },
  ],
};

const xTracker = {
  id: 'x-tracker',
  type: 'extension',
  status: 'released',
  installMethod: 'unpacked',
  name: 'X-Tracker',
  shortName: 'X-Tracker',
  subtitle: '把值得读的，留在身边',
  image: 'x-tracker-icon.png',
  platforms: '桌面 Chrome',
  version: '1.14.2',
  tagline: '只看想看的人。',
  description: ['在浏览器侧栏阅读 X，收藏值得留下的内容。', '整理关注账号，让每次回访都更轻松。'],
  highlights: ['侧栏阅读', '本地缓存与收藏', '双语卡片'],
  detail: '把关注的账号收进自己的列表，在 Chrome 侧栏阅读 X 推文。向下滚动加载更早内容，浏览过的推文保存在本地；需要时再翻译、收藏，或导出一张好看的卡片。',
  download: './assets/x-tracker-v1.14.2.zip',
  support: 'https://github.com/luchuangao/x-tracker/issues',
  source: 'https://github.com/luchuangao/x-tracker',
  features: [
    ['在侧栏里阅读', '打开账号先看最新一条，下滑加载更早推文，向右滑动返回动态。'],
    ['缓存与收藏', '自动保存已加载的推文与头像，收藏重要内容；已缓存内容可再次阅读。'],
    ['按需翻译与卡片', '点击后才显示中文，支持六种卡片边框、预览和保存 PNG。翻译需 Chrome 内置翻译 API 支持。'],
    ['自己的关注列表', '为账号添加备注与标签，整理列表，并导入或导出账号设置。'],
  ],
  screens: [
    { image: 'x-tracker-feed.png', width: 840, height: 640, alt: 'X-Tracker 实际动态界面，Naval 账号以卡片和标签展示', caption: '整理关注与标签' },
    { image: 'x-tracker-reader.png', width: 840, height: 920, alt: 'X-Tracker 实际阅读界面，Naval 公开推文展示原文、中文、收藏与卡片按钮', caption: '在侧栏里双语阅读' },
  ],
  previewScreen: { image: 'x-tracker-preview.png', width: 780, height: 488, alt: 'X-Tracker 实际卡片预览窗口，展示边框选择与保存 PNG 按钮' },
  screenNote: '实际插件界面 · Naval 公开推文，中文为展示译文。',
};

const zilo = {
  id: 'zilo',
  type: 'app',
  status: 'released',
  installMethod: 'dmg',
  name: 'Zilo',
  shortName: 'Zilo',
  subtitle: '自己的清单，自己掌握',
  image: 'zilo-icon.png',
  platforms: 'macOS 14+',
  version: '1.0',
  build: '11',
  tagline: '让每天的事，有处安放。',
  description: ['在一处管理清单、日历、习惯与专注。', '用 Markdown 记录文档，插入图片和思维导图，并导出 Word、PDF 与 Markdown。'],
  highlights: ['Apple 芯片与 Intel Mac', 'Markdown · 图片 · 思维导图', '任务、日历、专注与习惯'],
  detail: 'Zilo 是一款面向个人的原生 Mac 清单应用。离线管理任务、日历、习惯和专注，也可在任务中撰写 Markdown 文档、插入图片与思维导图，并导出 Word、PDF 或 Markdown。',
  download: './assets/Zilo-1.0-11.dmg',
  source: 'https://github.com/luchuangao/Zilo',
  note: '需要 macOS 14 或更高版本。下载并打开 DMG，将 Zilo 拖入“应用程序”即可安装。此版本已完成 Developer ID 签名与 Apple 公证。应用以本机数据为主；iCloud 同步尚未完成生产环境验证。',
  features: [
    ['清单与规划', '用清单、文件夹、标签和过滤器整理任务；通过列表、看板、时间线与日历安排每天的事。'],
    ['Markdown 文档', '支持 Markdown、代码块语法高亮、检查项、图片和思维导图，并可导出 Word、PDF 与 Markdown。'],
    ['专注与习惯', '使用番茄钟或正计时记录专注，也可设定习惯目标、提醒和打卡频率。'],
  ],
  screens: [
    { image: 'zilo-mindmap.png', width: 2520, height: 1410, alt: 'Zilo Mac 应用真实界面，任务详情中展示 Markdown 表格和思维导图', caption: '在任务文档中整理思维导图' },
    { image: 'zilo-markdown.png', width: 2520, height: 1410, alt: 'Zilo Mac 应用真实界面，展示 Markdown 排版、任务清单与 Python 代码高亮', caption: 'Markdown 排版与代码高亮' },
  ],
};


const juecha = {
  id: 'juecha', type: 'app', status: 'released',
  name: '觉察：屏幕时间管理', shortName: '觉察', subtitle: '屏幕时间与专注',
  image: 'juecha-icon.jpg', platforms: 'iPhone', tagline: '在打开之前，重新做一次选择。',
  description: ['在无意识打开短视频和社交 App 之前，先停一下。', '设置使用额度、开始专注，并回顾自己的选择。'],
  highlights: ['每日使用额度', '即时觉察', '专注与回顾'],
  detail: '觉察是一款面向成年人的数字自律工具。它不会替你决定该不该娱乐，而是在你准备打开目标 App 时，留出一点空间，让你重新做一次选择。',
  download: 'https://apps.apple.com/hk/app/id6797240253',
  support: './juecha-support/', privacy: './juecha-support/privacy.html',
  features: [
    ['每日使用额度', '为自己选择的 App 设置每日使用时间，达到额度后由 iOS 显示系统级干预。'],
    ['即时觉察与睡前暂停', '在打开目标 App 前增加短暂停顿，也可以设置睡前暂停时段。'],
    ['专注计时', '开始 25 分钟专注与 5 分钟休息，专注时暂停选定的 App。'],
    ['回顾变化', '查看干预次数、节省时间和专注记录，观察自己的使用节奏。'],
    ['重视隐私', '不读取聊天或浏览内容；管理对象与记录优先保存在设备本地。'],
  ],
  screens: [
    { image: 'juecha-limit.jpg', width: 518, height: 1120, alt: '觉察每日使用额度设置页', caption: '为常用 App 设定边界' },
    { image: 'juecha-focus.jpg', width: 518, height: 1120, alt: '觉察专注计时与暂停 App 页面', caption: '留出一段专注时间' },
    { image: 'juecha-review.jpg', width: 518, height: 1120, alt: '觉察近 30 天干预与节省时间记录', caption: '回顾每一次选择' },
    { image: 'juecha-profile.jpg', width: 518, height: 1120, alt: '觉察连续天数与阶段里程碑', caption: '看见持续的小变化' },
  ],
};

const releasedProducts = [callHome, compound, littlebird, xTracker, zilo, juecha];

function DownloadLink({ product, t, className = 'primary-button' }) {
  const local = ['unpacked', 'dmg'].includes(product.installMethod);
  const label = product.installMethod === 'unpacked' ? '下载插件 ZIP' : product.installMethod === 'dmg' ? '下载 Mac 版 DMG' : 'App Store 下载';
  return <a className={className} href={product.download} download={local || undefined} target={local ? undefined : '_blank'} rel={local ? undefined : 'noopener noreferrer'}>
    {t(label)}{local ? <DownloadSimpleIcon size={20} aria-hidden="true" /> : <ArrowUpRightIcon size={20} aria-hidden="true" />}
    {!local && <span className="sr-only">{t('（在新标签页打开）')}</span>}
  </a>;
}
function ProductLinks({ product, t, className }) {
  return <div className={className}>
    {product.support && <a href={product.support} target={product.type === 'extension' ? '_blank' : undefined} rel={product.type === 'extension' ? 'noopener noreferrer' : undefined}>{t(product.type === 'extension' ? '问题反馈' : '产品支持')}{product.type === 'extension' && <span className="sr-only">{t('（在新标签页打开）')}</span>}</a>}
    {product.privacy && <a href={product.privacy}>{t('隐私政策')}</a>}
    {product.source && <a href={product.source} target="_blank" rel="noopener noreferrer">{t('源码与说明')}<span className="sr-only">{t('（在新标签页打开）')}</span></a>}
  </div>;
}
function productStatus(product, t) {
  return t(product.installMethod === 'unpacked' ? '网站下载 · 手动安装' : product.installMethod === 'dmg' ? '网站下载 · 已公证' : '已发布');
}
function HeroProducts({ products, onSelect, t, language }) {
  return <div className="hero-products" role="group" aria-label={t('已发布产品速览')}>
    <div className="hero-orbit" aria-hidden="true" />
    {products.map(product => <button className={`hero-product hero-product-${product.id}`} key={product.id} type="button" aria-label={language === 'en' ? `Learn about ${product.name}` : `了解${product.name}`} aria-haspopup="dialog" onClick={() => onSelect(product)}>
      <span className="hero-product-visual"><img src={`./assets/${product.image}`} alt="" width="256" height="256" fetchPriority="high" /><span className="hero-product-name">{product.shortName}</span><span className="hero-product-subtitle">{product.subtitle}</span></span>
    </button>)}
    <span className="hero-availability"><span aria-hidden="true" />{t('应用与插件，现已发布')}</span>
  </div>;
}
function FeaturedProduct({ product, onSelect, onGuide, index, t }) {
  return <article className={`featured-product featured-${product.id}${product.type === 'extension' ? ' featured-extension' : ''}`} id={`product-${product.id}`} aria-labelledby={`${product.id}-title`}>
    <div className="featured-copy">
      <div className="product-status"><span className="release-status">{productStatus(product,t)}</span><span>{product.platforms}</span><span className="product-number">{String(index + 1).padStart(2,'0')}</span></div>
      <div className="featured-identity"><img src={`./assets/${product.image}`} width="72" height="72" alt="" loading="lazy" /><h3 id={`${product.id}-title`}>{product.shortName}<span>{product.subtitle}</span></h3></div>
      <p className="featured-tagline">{product.tagline}</p>
      <p className="featured-description">{product.description.map(line => <span key={line}>{line}</span>)}</p>
      <ul className="product-highlights" aria-label={`${product.shortName} ${t('功能')}`}>{product.highlights.map(item => <li key={item}>{item}</li>)}</ul>
      <div className="featured-actions"><DownloadLink product={product} t={t} /><button className="secondary-button" type="button" aria-haspopup="dialog" onClick={() => onSelect(product)}>{t('了解更多')}<ArrowRightIcon size={20} aria-hidden="true" /></button>{product.installMethod === 'unpacked' && <button className="secondary-button" type="button" aria-haspopup="dialog" onClick={() => onGuide(product)}>{t('安装指南')}</button>}</div>
      {product.version && <p className="download-meta">v{product.version}{product.installMethod === 'unpacked' ? ` · ${t('需开启开发者模式')}` : product.build ? ` · ${t('构建')} ${product.build} · ${t('通用架构')}` : ''}</p>}
      <ProductLinks product={product} t={t} className="card-support-links" />
    </div>
    <div className="product-screens" aria-label={`${product.shortName} ${t('真实界面')}`}>{product.screens.map(screen => <figure key={screen.image}><img src={`./assets/${screen.image}`} alt={screen.alt} width={screen.width} height={screen.height} loading="lazy" decoding="async" /><figcaption>{screen.caption}</figcaption></figure>)}{product.screenNote && <p className="screen-note">{product.screenNote}</p>}</div>
  </article>;
}
function InstallGuide({ product, t }) {
  const [copyResult, setCopyResult] = useState('');
  async function copyAddress() { try { await navigator.clipboard.writeText('chrome://extensions'); setCopyResult('已复制，粘贴到 Chrome 地址栏即可。'); } catch { setCopyResult('未能复制，请手动复制上方地址。'); } }
  return <section className="install-guide" aria-labelledby="install-title">
    <h3 id="install-title">{t('手动安装')}</h3><p>{t('在电脑上的 Chrome 中操作，手机可浏览此指南。')}</p>
    <ol className="install-steps">
      <li><strong>{t('下载并解压 ZIP')}</strong><span>{t('将文件解压到一个固定位置，保留这个文件夹。')}</span></li>
      <li><strong>{t('打开扩展管理页')}</strong><span>{t('把下方地址粘贴到 Chrome 地址栏，再按回车。')}</span><div className="extension-address"><code>chrome://extensions</code><button className="copy-address" type="button" onClick={copyAddress} aria-label={t('复制扩展管理地址')}><CopyIcon size={18} aria-hidden="true" />{t('复制')}</button></div><p className="copy-status" role="status">{t(copyResult)}</p></li>
      <li><strong>{t('开启开发者模式')}</strong><span>{t('打开扩展管理页右上角的“开发者模式”。')}</span></li>
      <li><strong>{t('加载解压后的文件夹')}</strong><span>{t('点击“加载已解压的扩展程序”，选择直接包含')} <code>manifest.json</code> {t('的文件夹。')}</span></li>
      <li><strong>{t('打开 X-Tracker')}</strong><span>{t('在扩展菜单中固定插件，点击图标打开侧栏。在“列表”中添加 X 用户名，再到“动态”中阅读。读取 X 内容前，请先在同一个 Chrome 中登录 X。')}</span></li>
    </ol>
    <div className="install-update"><h4>{t('以后如何更新？')}</h4><p>{t('下载新版，把文件覆盖到原来的插件文件夹，然后在扩展管理页重新加载 X-Tracker。无需卸载，以保留本地列表、缓存和收藏；此安装方式不自动更新。')}</p></div>
    <details className="install-notes"><summary>{t('使用与权限说明')}</summary><p>{t('当前版本请求网站访问（含所有网址）、标签页、脚本执行、本地存储和下载权限。读取 X 时使用不激活的临时标签页，完成后关闭。可读取内容受 X 登录、账号权限、限流和页面结构影响。')}</p><p>{t('翻译依赖 Chrome 内置翻译 API，首次可能需下载语言包。账号设置导出不包含推文缓存和收藏，卸载插件会删除本地数据。')}</p><a href="https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-an-unpacked-extension" target="_blank" rel="noopener noreferrer">{t('Chrome 官方安装说明')}<span className="sr-only">{t('（在新标签页打开）')}</span></a></details>
    <p className="download-meta">{product.shortName} v{product.version} · {t('网站下载，尚未在 Chrome Web Store 上架')}</p>
  </section>;
}
function ProductFilters({ products, platform, category, onPlatform, onCategory, t }) {
  const icons = {all: SquaresFourIcon, ios: DeviceMobileIcon, mac: DesktopIcon, chrome: GlobeIcon};
  const platformProducts = products.filter(p => platform === 'all' || p.platform === platform);
  return <div className="product-filters">
    <div className="filter-row" role="group" aria-label={t('按平台分类')}><span className="filter-label">{t('平台')}</span><div className="filter-options">{platformFilters.map(([id,label]) => {
      const count = products.filter(p => id === 'all' || p.platform === id).length; const Icon = icons[id];
      return count > 0 && <button type="button" className={`filter-chip${platform === id ? ' selected' : ''}`} aria-pressed={platform === id} key={id} onClick={() => onPlatform(id)}><Icon size={19} aria-hidden="true" />{t(label)}<span className="filter-count">{count}</span></button>;
    })}</div></div>
    <div className="filter-row category-row" role="group" aria-label={t('按用途分类')}><span className="filter-label">{t('用途')}</span><div className="filter-options">{categoryFilters.map(([id,label]) => {
      const count = platformProducts.filter(p => id === 'all' || p.category === id).length;
      return count > 0 && <button type="button" className={`filter-chip${category === id ? ' selected' : ''}`} aria-pressed={category === id} key={id} onClick={() => onCategory(id)}>{t(label)}<span className="filter-count">{count}</span></button>;
    })}</div></div>
  </div>;
}
export function App() {
  const [language, setLanguage] = useState(initialLanguage);
  const t = translator(language);
  const products = releasedProducts.map(product => localizeProduct(product,language));
  const [platform, setPlatform] = useState('all'); const [category, setCategory] = useState('all');
  const visible = products.filter(p => (platform === 'all' || p.platform === platform) && (category === 'all' || p.category === category));
  const [active, setActive] = useState(null); const [showGuide, setShowGuide] = useState(false);
  const activeProduct = products.find(p => p.id === active);
  function selectProduct(product) { setShowGuide(false); setActive(typeof product === 'string' ? product : product.id); }
  function openGuide(product) { setShowGuide(true); setActive(product.id); }
  function changePlatform(id) { setPlatform(id); setCategory('all'); }
  const dialogRef = useRef(null);
  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.title = `luchuangao · ${t('产品与创作')}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content',language === 'en' ? 'Explore independent apps and tools by luchuangao: Call Home, Compound Calculator, Little Bird Music, X-Tracker, Zilo and Juecha.' : 'luchuangao 的产品与创作空间。探索常回家看看、复利计算器、小小鸟音乐、X-Tracker、Zilo 与觉察。');
    try { localStorage.setItem('luchuangao-language',language); } catch { /* Language switching works without persistent storage. */ }
  }, [language]);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (active && !dialog.open) dialog.showModal(); if (!active && dialog.open) dialog.close();
    if (active) { const previous = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = previous; }; }
  }, [active]);
  function trapDialogFocus(event) {
    if(event.key !== 'Tab') return;
    const controls = Array.from(event.currentTarget.querySelectorAll('button, a[href], summary')).filter(element => element.getClientRects().length);
    const first = controls[0], last = controls[controls.length-1];
    if(event.shiftKey && document.activeElement === first) {event.preventDefault(); last?.focus();} else if(!event.shiftKey && document.activeElement === last) {event.preventDefault(); first?.focus();}
  }
  return <>
    <a className="skip-link" href="#products">{t('跳到产品列表')}</a>
    <div className="page-top">
      <header className="site-header"><nav className="navigation" aria-label={t('主导航')}>
        <a className="wordmark" href="#home" aria-label={t('luchuangao 首页')}><img className="brand-logo" src="./assets/luchuangao-atelier-logo.png" alt="" width="210" height="44" /></a>
        <div className="nav-links"><a href="#products">{t('产品')}</a><button type="button" onClick={() => selectProduct('about')}>{t('关于我')}</button><a href="https://github.com/luchuangao" target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only">{t('（在新标签页打开）')}</span></a></div>
        <button className="language-button" type="button" lang={language === 'zh' ? 'en' : 'zh-CN'} aria-label={language === 'zh' ? 'Switch to English' : '切换为中文'} onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}><TranslateIcon size={20} aria-hidden="true" /><span>{language === 'zh' ? 'English' : '中文'}</span></button>
      </nav></header>
      <main id="home">
        <section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><p className="hero-eyebrow"><span aria-hidden="true" />luchuangao · {t('产品与创作')}</p><h1 id="hero-title"><span>{t('把想法，')}</span><span>{t('做成好用的产品。')}</span></h1><p className="hero-description">{t('从长期思考、日常聆听，到专注阅读。')}<br />{t('为生活里的小事，做一些好用的工具。')}</p><a className="primary-button" href="#products">{t('探索产品')}<ArrowRightIcon size={23} aria-hidden="true" /></a></div><HeroProducts products={products} onSelect={selectProduct} t={t} language={language} /></section>
        <section className="products-section" id="products" aria-labelledby="products-title"><div className="section-heading"><div><p className="section-eyebrow">{t('为日常而做')}</p><h2 id="products-title">{t('我的产品')}</h2><p>{t('已经发布，可以从这里开始体验。')}</p></div><span className="product-count">{language === 'en' ? `${products.length} available products` : `${products.length} 款已发布产品`}</span></div>
          <ProductFilters products={products} platform={platform} category={category} onPlatform={changePlatform} onCategory={setCategory} t={t} />
          <p className="filter-results" role="status" aria-live="polite">{language === 'en' ? `Showing ${visible.length} of ${products.length} products` : `显示 ${visible.length} / ${products.length} 款产品`}</p>
          <div className="released-products">{visible.map(product => <FeaturedProduct key={product.id} product={product} index={products.findIndex(p => p.id === product.id)} onSelect={selectProduct} onGuide={openGuide} t={t} />)}</div>
          {visible.length === 0 && <div className="empty-products"><p>{t('没有符合条件的产品。')}</p><button className="secondary-button" onClick={() => {setPlatform('all');setCategory('all');}}>{t('查看全部产品')}</button></div>}
        </section>
      </main>
      <footer className="site-footer"><div className="footer-identity"><a href="#home" aria-label={t('回到首页')}><img className="brand-logo" src="./assets/luchuangao-atelier-logo.png" alt="luchuangao" width="210" height="44" loading="lazy" /></a><p>{t('把想法，做成好用的产品。')}</p></div><nav className="footer-links" aria-label={t('页脚导航')}><a href="#products">{t('探索产品')}</a><button type="button" onClick={() => selectProduct('about')}>{t('关于我')}</button><a href="https://github.com/luchuangao" target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRightIcon size={15} aria-hidden="true" /><span className="sr-only">{t('（在新标签页打开）')}</span></a></nav></footer>
    </div>
    <dialog ref={dialogRef} className="detail-dialog" onKeyDown={trapDialogFocus} aria-labelledby="dialog-title" onCancel={() => setActive(null)} onClose={() => setActive(null)} onClick={event => {if(event.target === dialogRef.current) setActive(null);}}><div className="dialog-inner"><button className="close-button" type="button" aria-label={t('关闭详情')} onClick={() => setActive(null)}><XIcon size={22} aria-hidden="true" /></button>
      {active === 'about' ? <><p className="eyebrow">{t('关于我')}</p><h2 id="dialog-title">{t('你好，我是 luchuangao。')}</h2><p className="dialog-description">{t('这里是我的产品与创作空间。')}<br />{t('把想法，做成好用的产品。')}</p><a className="primary-button" href="https://github.com/luchuangao" target="_blank" rel="noopener noreferrer"><GithubLogoIcon size={22} aria-hidden="true" />{t('访问 GitHub')}<span className="sr-only">{t('（在新标签页打开）')}</span></a></> : activeProduct && <>
        <img className="dialog-product-icon app-icon" src={`./assets/${activeProduct.image}`} alt="" width="88" height="88" /><p className="eyebrow">{activeProduct.platforms} · {productStatus(activeProduct,t)}</p><h2 id="dialog-title">{activeProduct.name}</h2><p className="dialog-description">{activeProduct.detail}</p>
        {showGuide && activeProduct.installMethod === 'unpacked' ? <InstallGuide key={activeProduct.id} product={activeProduct} t={t} /> : <><ul className="detail-features">{activeProduct.features.map(([title,description]) => <li key={title}><strong>{title}</strong><span>{description}</span></li>)}</ul>{activeProduct.previewScreen && <figure className="detail-preview"><img src={`./assets/${activeProduct.previewScreen.image}`} alt={activeProduct.previewScreen.alt} width={activeProduct.previewScreen.width} height={activeProduct.previewScreen.height} loading="lazy" /><figcaption>{t('先预览，再保存 · 演示内容')}</figcaption></figure>}</>}
        <div className="dialog-actions"><DownloadLink product={activeProduct} t={t} />{activeProduct.installMethod === 'unpacked' && <button className="secondary-button" type="button" onClick={() => setShowGuide(!showGuide)}>{t(showGuide ? '产品介绍' : '安装指南')}</button>}</div><ProductLinks product={activeProduct} t={t} className="support-links" />{activeProduct.note && <p className="learning-note">{activeProduct.note}</p>}
      </>}
    </div></dialog>
  </>;
}
