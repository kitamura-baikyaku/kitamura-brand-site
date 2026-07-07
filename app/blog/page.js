import { BLOG_CATEGORIES, blogPosts } from '../../data/blogs';

export const metadata = {
  title: '売却ガイド・ブログ｜北村　充｜大阪市の不動産売却相談',
  description: '大阪市の不動産売却、相続、住み替え、空き家、AI査定に役立つ売却ガイドを掲載しています。',
};

export default function BlogIndex() {
  return (
    <main>
      <BlogHeader />
      <section className="blogHero">
        <div className="container blogHeroGrid">
          <div>
            <p className="eyebrow">SELLER GUIDE</p>
            <h1>大阪市の不動産売却ガイド</h1>
            <p>売却・相続・住み替え・空き家・AI査定について、売る前に知っておきたい情報を分かりやすく整理しています。</p>
          </div>
          <div className="blogHeroBox">
            <strong>まずは相場を知りたい方へ</strong>
            <span>AI査定とLINE相談を組み合わせて、売る前の不安を整理できます。</span>
            <a className="btn btnLine" href="https://lin.ee/SKauttW" target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="" />LINEで無料相談</a>
          </div>
        </div>
      </section>
      <section className="section blogArchive">
        <div className="container">
          <div className="categoryRow">
            {BLOG_CATEGORIES.map((category) => <span key={category}>{category}</span>)}
          </div>
          <div className="articleGrid">
            {blogPosts.map((post) => (
              <article className="articleCard" key={post.slug}>
                <div className="articleMeta"><span>{post.category}</span><span>{post.readTime}</span></div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <a className="textLink" href={`/blog/${post.slug}`}>記事を読む</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <BlogFooter />
    </main>
  );
}

function BlogHeader(){return <header className="header"><div className="container nav"><a className="brand" href="/"><span className="brandMark">北</span><span><strong>北村　充</strong><small>大阪市の不動産売却相談</small></span></a><nav><a href="/#problem">お悩み</a><a href="/#reason">選ばれる理由</a><a href="/#ai">AI査定</a><a href="/#about">北村について</a><a href="/blog">売却ガイド</a></nav><div className="headActions"><a className="headSocial" href="https://www.instagram.com/kitamura_baikyaku" target="_blank" rel="noreferrer"><img src="/icons/instagram.png" alt="Instagram" /></a><a className="headSocial" href="https://www.tiktok.com/@kitamura_baikyaku" target="_blank" rel="noreferrer"><img src="/icons/tiktok.png" alt="TikTok" /></a><a className="headSocial" href="https://lin.ee/SKauttW" target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="LINE" /></a></div></div></header>}
function BlogFooter(){return <footer className="footer"><div className="container footerGrid"><div><h3>北村　充</h3><p>大阪市の不動産売却相談</p></div><div><h2>090-7555-6542</h2><p>受付時間 9:00〜20:00</p></div><div><p>売却相談はLINEから</p><a className="btn btnLine" href="https://lin.ee/SKauttW" target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="" />LINEで相談する</a></div></div><div className="container copy">© 2026 北村　充 不動産売却相談サポート</div></footer>}
