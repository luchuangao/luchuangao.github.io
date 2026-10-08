import { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon, XIcon, GithubLogoIcon } from '@phosphor-icons/react';
import '@fontsource-variable/noto-sans-sc';

const products = [
  { id: 'focus', name: '专注工具', image: 'focus.png', description: '帮助你更专注地投入工作与学习，', secondLine: '在简单中获得更好的效率。', detail: '把注意力留给重要的事情。一个围绕专注时间与当下任务的轻量工具概念。' },
  { id: 'notes', name: '轻量笔记', image: 'notes.png', description: '随手记录想法，整理灵感与知识，', secondLine: '让思考更清晰。', detail: '为随时出现的灵感准备一处简单的空间。一个以快速记录与清晰整理为核心的笔记工具概念。' },
  { id: 'image', name: '图片助手', image: 'image.png', description: '简单高效地处理图片，', secondLine: '让创作与分享更轻松。', detail: '让日常图片处理更轻松。一个让图片整理与基础编辑更直接的工具概念。' },
];

export function App() {
  const [active, setActive] = useState(null);
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
              <img className="brand-mark" src="./assets/luchuangao-logo.png" alt="" width="42" height="42" />
              <span className="brand-name">luchuan<span>gao</span></span>
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
            <img className="hero-art" src="./assets/hero.png" alt="专注、笔记和图片工具的蓝色图标环绕排列" width="800" height="700" fetchPriority="high" />
          </section>
          <section className="products-section" id="products" aria-labelledby="products-title">
            <div className="section-heading"><h2 id="products-title">我的产品</h2><p>产品内容为设计示例。</p></div>
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
            <img className="dialog-product-icon" src={`./assets/${active.image}`} alt="" width="112" height="112" />
            <p className="eyebrow">设计示例</p><h2 id="dialog-title">{active.name}</h2>
            <p className="dialog-description">{active.detail}</p>
            <p className="example-note">这是用于展示网站设计的示例产品，暂无下载入口。</p>
            <button className="primary-button" type="button" onClick={() => setActive(null)}>返回产品</button>
          </>}
        </div>
      </dialog>
    </>
  );
}
