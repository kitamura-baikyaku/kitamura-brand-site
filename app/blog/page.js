import { blogs } from '../../data/blogs';

const LINE_URL = 'https://lin.ee/SKauttW';
const AI_URL = 'https://www.aisatei.com/?id=f34d098b-8769-26ad-926c-b0fa1ef28c9e';

export const metadata = {
  title: '売却ガイド・ブログ｜北村　充',
  description: '大阪市の不動産売却、相続、住み替え、AI査定に役立つ情報をまとめています。'
};

export default function BlogIndex() {
  return (
    <main>
      <SimpleHeader />
      <section className="blogHero">
        <div className="container">
          <p className="eyebrow">BLOG / REPORT</p>
          <h1>売却ガイド・ブログ</h1>
          <p>大阪市で不動産売却を検討されている方向けに、相場・相続・住み替え・AI査定の考え方を分かりやすくまとめています。</p>
        </div>
      </section>
      <section className="section">
        <div className="container blogListGrid">
          {blogs.map((blog) => (
            <a className="blogListCard" href={`/blog/${blog.slug}`} key={blog.slug}>
              <img src={blog.hero} alt="" />
              <div>
                <small>{blog.category}｜{blog.date}</small>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
                <span>続きを読む</span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="finalCta">
        <div className="container">
          <h2>記事を読んで気になることがあれば、LINEでご相談ください。</h2>
          <div className="ctaRow center">
            <a className="btn btnLine" href={LINE_URL} target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="" />LINEで無料相談</a>
            <a className="btn btnAi" href={AI_URL} target="_blank" rel="noreferrer">AI査定をはじめる</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function SimpleHeader(){
  return (
    <header className="header">
      <div className="container nav">
        <a className="brand" href="/"><span className="brandMark">北</span><span><strong>北村　充</strong><small>大阪市の不動産売却相談</small></span></a>
        <nav><a href="/">ホーム</a><a href="/#ai">AI査定</a><a href="/#about">北村について</a><a href="/#contact">相談する</a></nav>
      </div>
    </header>
  );
}
