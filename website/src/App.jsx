import { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon, ArrowUpRightIcon, XIcon, GithubLogoIcon, DownloadSimpleIcon, CopyIcon } from '@phosphor-icons/react';
import '@fontsource-variable/noto-sans-sc';

const products = [
  { id: 'focus', name: '专注工具', image: 'focus.png', description: '帮助你更专注地投入工作与学习，', secondLine: '在简单中获得更好的效率。', detail: '把注意力留给重要的事情。一个围绕专注时间与当下任务的轻量工具概念。' },
  { id: 'notes', name: '轻量笔记', image: 'notes.png', description: '随手记录想法，整理灵感与知识，', secondLine: '让思考更清晰。', detail: '为随时出现的灵感准备一处简单的空间。一个以快速记录与清晰整理为核心的笔记工具概念。' },
  { id: 'image', name: '图片助手', image: 'image.png', description: '简单高效地处理图片，', secondLine: '让创作与分享更轻松。', detail: '让日常图片处理更轻松。一个让图片整理与基础编辑更直接的工具概念。' },
];

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

const releasedProducts = [compound, littlebird, xTracker];

function DownloadLink({ product, className = 'primary-button' }) {
  if (product.installMethod === 'unpacked') return <a className={className} href={product.download} download>
    下载插件 ZIP<DownloadSimpleIcon size={20} aria-hidden="true" />
  </a>;
  return <a className={className} href={product.download} target="_blank" rel="noopener noreferrer">
    App Store 下载<ArrowUpRightIcon size={20} aria-hidden="true" />
    <span className="sr-only">（在新标签页打开）</span>
  </a>;
}

function HeroProducts({ onSelect }) {
  return <div className="hero-products" role="group" aria-label="产品速览">
    {[...releasedProducts, ...products].map(product => <button
      className={`hero-product hero-product-${product.id}`}
      key={product.id}
      type="button"
      aria-label={`了解${product.name}`}
      aria-haspopup="dialog"
      onClick={() => onSelect(product)}
    >
      <span className="hero-product-visual">
        <img src={`./assets/${product.image}`} alt="" width="256" height="256" fetchPriority={product.id === 'compound' ? 'high' : 'auto'} />
        <span className="hero-product-name">{product.shortName || product.name}</span>
        {product.subtitle && <span className="hero-product-subtitle">{product.subtitle}</span>}
      </span>
    </button>)}
  </div>;
}

function FeaturedProduct({ product, onSelect, onGuide }) {
  return <article id={product.id} className={`featured-product${product.type === 'extension' ? ' featured-extension' : ''}`} aria-labelledby={`${product.id}-title`}>
    <div className="featured-copy">
      <div className="product-status"><span className="release-status">{product.installMethod === 'unpacked' ? '网站下载 · 手动安装' : '已在 App Store 上架'}</span><span>{product.platforms}</span></div>
      <div className="featured-identity">
        <img src={`./assets/${product.image}`} width="72" height="72" alt="" loading="lazy" />
        <h3 id={`${product.id}-title`}>{product.shortName}<span>{product.subtitle}</span></h3>
      </div>
      <p className="featured-tagline">{product.tagline}</p>
      <p className="featured-description">{product.description[0]}<br />{product.description[1]}</p>
      <ul className="product-highlights" aria-label="产品内容">{product.highlights.map(item => <li key={item}>{item}</li>)}</ul>
      <div className="featured-actions">
        <button className="secondary-button" type="button" onClick={() => onSelect(product)}>了解更多<ArrowRightIcon size={20} aria-hidden="true" /></button>
        <DownloadLink product={product} />
        {product.installMethod === 'unpacked' && <button className="secondary-button" type="button" onClick={() => onGuide(product)}>安装指南</button>}
      </div>
      {product.version && <p className="download-meta">v{product.version} · 需开启开发者模式</p>}
    </div>
    <div className="product-screens" aria-label={`${product.shortName}真实界面`}>
      {product.screens.map(screen => <figure key={screen.image}>
        <img src={`./assets/${screen.image}`} alt={screen.alt} width={screen.width} height={screen.height} loading="lazy" />
        <figcaption>{screen.caption}</figcaption>
      </figure>)}
      {product.screenNote && <p className="screen-note">{product.screenNote}</p>}
    </div>
  </article>;
}

function InstallGuide({ product }) {
  const [copyStatus, setCopyStatus] = useState('');
  async function copyAddress() {
    try {
      await navigator.clipboard.writeText('chrome://extensions');
      setCopyStatus('已复制，粘贴到 Chrome 地址栏即可。');
    } catch {
      setCopyStatus('未能复制，请手动复制上方地址。');
    }
  }
  return <section className="install-guide" aria-labelledby="install-title">
    <h3 id="install-title">手动安装</h3>
    <p>在电脑上的 Chrome 中操作，手机可浏览此指南。</p>
    <ol className="install-steps">
      <li><strong>下载并解压 ZIP</strong><span>将文件解压到一个固定位置，保留这个文件夹。</span></li>
      <li><strong>打开扩展管理页</strong><span>把下方地址粘贴到 Chrome 地址栏，再按回车。</span>
        <div className="extension-address"><code>chrome://extensions</code><button className="copy-address" type="button" onClick={copyAddress} aria-label="复制扩展管理地址"><CopyIcon size={18} aria-hidden="true" />复制</button></div>
        <p className="copy-status" role="status">{copyStatus}</p>
      </li>
      <li><strong>开启开发者模式</strong><span>打开扩展管理页右上角的“开发者模式”。</span></li>
      <li><strong>加载解压后的文件夹</strong><span>点击“加载已解压的扩展程序”，选择直接包含 <code>manifest.json</code> 的文件夹。</span></li>
      <li><strong>打开 X-Tracker</strong><span>在扩展菜单中固定插件，点击图标打开侧栏。在“列表”中添加 X 用户名，再到“动态”中阅读。读取 X 内容前，请先在同一个 Chrome 中登录 X。</span></li>
    </ol>
    <div className="install-update"><h4>以后如何更新？</h4><p>下载新版，把文件覆盖到原来的插件文件夹，然后在扩展管理页重新加载 X-Tracker。无需卸载，以保留本地列表、缓存和收藏；此安装方式不自动更新。</p></div>
    <details className="install-notes"><summary>使用与权限说明</summary><p>当前版本请求网站访问（含所有网址）、标签页、脚本执行、本地存储和下载权限。读取 X 时使用不激活的临时标签页，完成后关闭。可读取内容受 X 登录、账号权限、限流和页面结构影响。</p><p>翻译依赖 Chrome 内置翻译 API，首次可能需下载语言包。账号设置导出不包含推文缓存和收藏，卸载插件会删除本地数据。</p><a href="https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-an-unpacked-extension" target="_blank" rel="noopener noreferrer">Chrome 官方安装说明<span className="sr-only">（在新标签页打开）</span></a></details>
    <p className="download-meta">{product.shortName} v{product.version} · 网站下载，尚未在 Chrome Web Store 上架</p>
  </section>;
}

export function App() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showGuide, setShowGuide] = useState(false);
  function selectProduct(product) { setShowGuide(false); setActive(product); }
  function openGuide(product) { setShowGuide(true); setActive(product); }
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
    if (active) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = previous; };
    }
  }, [active]);
  function trapDialogFocus(event) {
    if (event.key !== 'Tab') return;
    const controls = Array.from(event.currentTarget.querySelectorAll('button, a[href]'));
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first?.focus();
    }
  }
  return (
    <>
      <a className="skip-link" href="#products">跳到产品列表</a>
      <div className="page-top">
        <header className="site-header">
          <nav className="navigation" aria-label="主导航">
            <a className="wordmark" href="#home" aria-label="luchuangao 首页">
              <img className="brand-logo" src="./assets/luchuangao-atelier-logo.png" alt="" width="210" height="44" />
            </a>
            <a href="#products">产品</a>
            <button type="button" onClick={() => selectProduct('about')}>关于我</button>
            <a href="https://github.com/luchuangao" target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only">（在新标签页打开）</span></a>
          </nav>
        </header>
        <main id="home">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <h1 id="hero-title"><span>把想法，</span><span>做成好用的产品。</span></h1>
              <p>探索我正在打造的应用与小工具。</p>
              <a className="primary-button" href="#products">探索产品<ArrowRightIcon size={24} weight="regular" aria-hidden="true" /></a>
            </div>
            <HeroProducts onSelect={selectProduct} />
          </section>
          <section className="products-section" id="products" aria-labelledby="products-title">
            <div className="section-heading"><h2 id="products-title">我的产品</h2><p>从已经发布的应用与插件，到正在探索的想法。</p></div>
            <div className="product-filters" role="group" aria-label="按产品状态筛选">
              {[['all', '全部', releasedProducts.length + products.length], ['released', '已发布', releasedProducts.length], ['examples', '设计示例', products.length]].map(([id, label, count]) =>
                <button key={id} type="button" aria-pressed={filter === id} onClick={() => setFilter(id)}>{label}<span>{count}</span></button>
              )}
            </div>
            {filter !== 'examples' && <div className="released-products">
              {releasedProducts.map(product => <FeaturedProduct key={product.id} product={product} onSelect={selectProduct} onGuide={openGuide} />)}
            </div>}
            {filter !== 'released' && <div className="examples-section">
              <div className="examples-heading"><h3>设计示例</h3><p>一些轻量工具的探索。</p></div>
              <div className="product-grid">
              {products.map(product => (
                <article className="product" key={product.id}>
                  <button className="product-image-button" type="button" onClick={() => selectProduct(product)} aria-label={`了解${product.name}`}>
                    <img src={`./assets/${product.image}`} width="144" height="144" alt="" />
                  </button>
                  <h3>{product.name}</h3>
                  <p>{product.description}<br />{product.secondLine}</p>
                  <button className="text-button" type="button" onClick={() => selectProduct(product)}>了解更多<ArrowRightIcon size={21} aria-hidden="true" /></button>
                </article>
              ))}
              </div>
            </div>}
          </section>
        </main>
      </div>
      <dialog ref={dialogRef} className="detail-dialog" onKeyDown={trapDialogFocus} aria-labelledby="dialog-title" onCancel={() => setActive(null)} onClose={() => setActive(null)} onClick={event => { if (event.target === dialogRef.current) setActive(null); }}>
        <div className="dialog-inner">
          <button className="close-button" type="button" aria-label="关闭详情" onClick={() => setActive(null)}><XIcon size={22} /></button>
          {active === 'about' ? <>
            <p className="eyebrow">关于我</p><h2 id="dialog-title">你好，我是 luchuangao。</h2>
            <p className="dialog-description">这里是我的产品与创作空间。<br />把想法，做成好用的产品。</p>
            <a className="primary-button" href="https://github.com/luchuangao" target="_blank" rel="noopener noreferrer"><GithubLogoIcon size={22} />访问 GitHub<span className="sr-only">（在新标签页打开）</span></a>
          </> : active && <>
            <img className={`dialog-product-icon${active.status === 'released' ? ' app-icon' : ''}`} src={`./assets/${active.image}`} alt="" width="112" height="112" />
            <p className="eyebrow">{active.status === 'released' ? `${active.platforms} · 已发布` : '设计示例'}</p><h2 id="dialog-title">{active.name}</h2>
            <p className="dialog-description">{active.detail}</p>
            {active.status === 'released' ? <>
              {showGuide && active.installMethod === 'unpacked' ? <InstallGuide key={active.id} product={active} /> : <>
              <ul className="detail-features">
                {active.features.map(([title, description]) => <li key={title}><strong>{title}</strong><span>{description}</span></li>)}
              </ul>
              {active.previewScreen && <figure className="detail-preview"><img src={`./assets/${active.previewScreen.image}`} alt={active.previewScreen.alt} width={active.previewScreen.width} height={active.previewScreen.height} loading="lazy" /><figcaption>先预览，再保存 · 演示内容</figcaption></figure>}
              </>}
              <div className="dialog-actions"><DownloadLink product={active} />
                {active.installMethod === 'unpacked' && <button className="secondary-button" type="button" onClick={() => setShowGuide(!showGuide)}>{showGuide ? '产品介绍' : '安装指南'}</button>}
              </div>
              <div className="support-links">
                {active.support && <a href={active.support} target={active.type === 'extension' ? '_blank' : undefined} rel={active.type === 'extension' ? 'noopener noreferrer' : undefined}>{active.type === 'extension' ? '问题反馈' : '产品支持'}{active.type === 'extension' && <span className="sr-only">（在新标签页打开）</span>}</a>}
                {active.privacy && <a href={active.privacy}>隐私政策</a>}
                {active.source && <a href={active.source} target="_blank" rel="noopener noreferrer">源码与说明<span className="sr-only">（在新标签页打开）</span></a>}
              </div>
              {active.note && <p className="learning-note">{active.note}</p>}
            </> : <>
              <p className="example-note">这是用于展示网站设计的示例产品，暂无下载入口。</p>
              <button className="primary-button" type="button" onClick={() => setActive(null)}>返回产品</button>
            </>}
          </>}
        </div>
      </dialog>
    </>
  );
}
