import { blogPosts, getPost } from '../../../data/blogs';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return { title: '記事が見つかりません｜北村　充' };
  return {
    title: `${post.title}｜北村　充｜大阪市の不動産売却相談`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      locale: 'ja_JP',
      images: ['/images/hero-phone.jpg']
    }
  };
}

export default function BlogPost({ params }) {
  const post = getPost(params.slug);
  if (!post) {
    return <main><div className="container articlePage"><h1>記事が見つかりません</h1><a className="textLink" href="/blog">ブログ一覧へ戻る</a></div></main>;
  }

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <main>
      <ArticleHeader />
      <article className="articlePage">
        <div className="container articleLayout">
          <div className="articleMain">
            <nav className="breadcrumb"><a href="/">TOP</a><span>/</span><a href="/blog">売却ガイド</a><span>/</span><strong>{post.category}</strong></nav>
            <div className="articleMeta"><span>{post.category}</span><span>{post.date}</span><span>{post.readTime}</span></div>
            <h1>{post.title}</h1>
            <p className="articleLead">{post.lead}</p>
            <div className="toc"><strong>この記事で分かること</strong>{post.sections.map((section) => <a key={section.heading} href={`#${section.heading}`}>{section.heading}</a>)}</div>
            {post.sections.map((section) => (
              <section className="articleSection" id={section.heading} key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <section className="articleSummary"><h2>まとめ</h2><p>{post.summary}</p></section>
            <div className="articleCta"><h2>売るか迷っている段階でも大丈夫です。</h2><p>相場確認、AI査定の見方、売る・貸す・保有の比較まで、北村が一緒に整理します。</p><div className="ctaRow center"><a className="btn btnLine" href="https://lin.ee/SKauttW" target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="" />LINEで無料相談</a><a className="btn btnAi" href="https://www.aisatei.com/?id=f34d098b-8769-26ad-926c-b0fa1ef28c9e" target="_blank" rel="noreferrer">AI査定をはじめる</a></div></div>
          </div>
          <aside className="articleSide">
            <div className="sideBox"><h3>北村　充</h3><p>大阪市の不動産売却・相続・住み替え・空き家のご相談を承ります。</p><a className="btn btnLine" href="https://lin.ee/SKauttW" target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="" />相談する</a></div>
            <div className="sideBox"><h3>関連記事</h3>{related.map((item) => <a className="sideLink" href={`/blog/${item.slug}`} key={item.slug}>{item.title}</a>)}</div>
          </aside>
        </div>
      </article>
      <ArticleFooter />
    </main>
  );
}

function ArticleHeader(){return <header className="header"><div className="container nav"><a className="brand" href="/"><span className="brandMark">北</span><span><strong>北村　充</strong><small>大阪市の不動産売却相談</small></span></a><nav><a href="/#problem">お悩み</a><a href="/#ai">AI査定</a><a href="/#about">北村について</a><a href="/blog">売却ガイド</a></nav><div className="headActions"><a className="headSocial" href="https://www.instagram.com/kitamura_baikyaku" target="_blank" rel="noreferrer"><img src="/icons/instagram.png" alt="Instagram" /></a><a className="headSocial" href="https://www.tiktok.com/@kitamura_baikyaku" target="_blank" rel="noreferrer"><img src="/icons/tiktok.png" alt="TikTok" /></a><a className="headSocial" href="https://lin.ee/SKauttW" target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="LINE" /></a></div></div></header>}
function ArticleFooter(){return <footer className="footer"><div className="container copy">© 2026 北村　充 不動産売却相談サポート</div></footer>}
