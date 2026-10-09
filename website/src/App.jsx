import { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon, ArrowUpRightIcon, XIcon, GithubLogoIcon } from '@phosphor-icons/react';
import '@fontsource-variable/noto-sans-sc';

const products = [
  { id: 'focus', name: '专注工具', image: 'focus.png', description: '帮助你更专注地投入工作与学习，', secondLine: '在简单中获得更好的效率。', detail: '把注意力留给重要的事情。一个围绕专注时间与当下任务的轻量工具概念。' },
  { id: 'notes', name: '轻量笔记', image: 'notes.png', description: '随手记录想法，整理灵感与知识，', secondLine: '让思考更清晰。', detail: '为随时出现的灵感准备一处简单的空间。一个以快速记录与清晰整理为核心的笔记工具概念。' },
  { id: 'image', name: '图片助手', image: 'image.png', description: '简单高效地处理图片，', secondLine: '让创作与分享更轻松。', detail: '让日常图片处理更轻松。一个让图片整理与基础编辑更直接的工具概念。' },
];

const compound = {
  id: 'compound',
  name: '复利计算器：时间的杠杆',
  image: 'compoundly-icon.png',
  detail: '把本金、收益率与时间放进计算，直观看见长期增长。通过互动实验，理解财富、风险与认知。',
  download: 'https://apps.apple.com/cn/app/id6787851299',
};

function AppStoreLink({ className = 'primary-button' }) {
  return <a className={className} href={compound.download} target="_blank" rel="noopener noreferrer">
    App Store 下载<ArrowUpRightIcon size={20} aria-hidden="true" />
    <span className="sr-only">（在新标签页打开）</span>
  </a>;
}

function HeroProducts({ onSelect }) {
  return <div className="hero-products" role="group" aria-label="产品速览">
    {[compound, ...products].map(product => <button
      className={`hero-product hero-product-${product.id}`}
      key={product.id}
      type="button"
      aria-label={`了解${product.name}`}
      aria-haspopup="dialog"
      onClick={() => onSelect(product)}
    >
      <span className="hero-product-visual">
        <img src={`./assets/${product.image}`} alt="" width="256" height="256" fetchPriority={product.id === 'compound' ? 'high' : 'auto'} />
        <span className="hero-product-name">{product.id === 'compound' ? '复利计算器' : product.name}</span>
        {product.id === 'compound' && <span className="hero-product-subtitle">时间的杠杆</span>}
      </span>
    </button>)}
  </div>;
}

export function App() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState('all');
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
            <button type="button" onClick={() => setActive('about')}>关于我</button>
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
            <HeroProducts onSelect={setActive} />
          </section>
          <section className="products-section" id="products" aria-labelledby="products-title">
            <div className="section-heading"><h2 id="products-title">我的产品</h2><p>从已经发布的 App，到正在探索的想法。</p></div>
            <div className="product-filters" role="group" aria-label="按产品状态筛选">
              {[['all', '全部', 4], ['released', '已发布', 1], ['examples', '设计示例', 3]].map(([id, label, count]) =>
                <button key={id} type="button" aria-pressed={filter === id} onClick={() => setFilter(id)}>{label}<span>{count}</span></button>
              )}
            </div>
            {filter !== 'examples' && <article className="featured-product" aria-labelledby="compound-title">
              <div className="featured-copy">
                <div className="product-status"><span className="release-status">已在 App Store 上架</span><span>iPhone · iPad</span></div>
                <div className="featured-identity">
                  <img src="./assets/compoundly-icon.png" width="72" height="72" alt="" loading="lazy" />
                  <h3 id="compound-title">复利计算器<span>时间的杠杆</span></h3>
                </div>
                <p className="featured-tagline">看见时间的力量。</p>
                <p className="featured-description">算清复利与定投，探索财富和认知实验。<br />让长期思考，变得直观。</p>
                <ul className="product-highlights" aria-label="产品内容"><li>复利计算</li><li>长期规划</li><li>互动实验</li></ul>
                <div className="featured-actions">
                  <button className="secondary-button" type="button" onClick={() => setActive(compound)}>了解更多<ArrowRightIcon size={20} aria-hidden="true" /></button>
                  <AppStoreLink />
                </div>
              </div>
              <div className="product-screens" aria-label="复利计算器真实界面">
                <figure><img src="./assets/compoundly-home.jpg" alt="复利计算页面，展示预计金额、增长倍数和时间轨迹" width="600" height="1304" loading="lazy" /><figcaption>把时间放进计算</figcaption></figure>
                <figure><img src="./assets/compoundly-lab.jpg" alt="财富交换互动实验，展示参与者的财富分布和差距指数" width="600" height="1301" loading="lazy" /><figcaption>在实验中理解变化</figcaption></figure>
              </div>
            </article>}
            {filter !== 'released' && <div className="examples-section">
              <div className="examples-heading"><h3>设计示例</h3><p>一些轻量工具的探索。</p></div>
              <div className="product-grid">
              {products.map(product => (
                <article className="product" key={product.id}>
                  <button className="product-image-button" type="button" onClick={() => setActive(product)} aria-label={`了解${product.name}`}>
                    <img src={`./assets/${product.image}`} width="144" height="144" alt="" />
                  </button>
                  <h3>{product.name}</h3>
                  <p>{product.description}<br />{product.secondLine}</p>
                  <button className="text-button" type="button" onClick={() => setActive(product)}>了解更多<ArrowRightIcon size={21} aria-hidden="true" /></button>
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
            <img className={`dialog-product-icon${active.id === 'compound' ? ' compound-icon' : ''}`} src={`./assets/${active.image}`} alt="" width="112" height="112" />
            <p className="eyebrow">{active.id === 'compound' ? 'iPhone 与 iPad · 已发布' : '设计示例'}</p><h2 id="dialog-title">{active.name}</h2>
            <p className="dialog-description">{active.detail}</p>
            {active.id === 'compound' ? <>
              <ul className="detail-features">
                <li><strong>复利与定投</strong><span>比较投入、收益和时间的关系。</span></li>
                <li><strong>长期规划</strong><span>从目标和退休需求出发，寻找自己的计划。</span></li>
                <li><strong>财富与认知实验</strong><span>亲手改变参数，观察不同选择的结果。</span></li>
              </ul>
              <AppStoreLink />
              <div className="support-links"><a href="./compoundly/support.html">产品支持</a><a href="./compoundly/privacy.html">隐私政策</a></div>
              <p className="learning-note">计算与实验仅供学习，不构成投资建议。</p>
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
