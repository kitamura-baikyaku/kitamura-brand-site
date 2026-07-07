import Link from 'next/link';
import { blogs, getBlog } from '../../data/blogs';

const LINE_URL = 'https://lin.ee/SKauttW';
const AI_URL = 'https://www.aisatei.com/?id=f34d098b-8769-26ad-926c-b0fa1ef28c9e';

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export function generateMetadata({ params }) {
  const blog = getBlog(params.slug);
  if (!blog) return { title: '記事が見つかりません｜北村　充' };
  return {
    title: `${blog.title}｜北村　充 大阪市の不動産売却相談`,
    description: blog.description
  };
}

export default function BlogArticle({ params }) {
  const blog = getBlog(params.slug);
  if (!blog) {
    return (
      <main className="section">
        <div className="container">
          <h1>記事が見つかりません</h1>
          <Link href="/blog">ブログ一覧へ戻る</Link>
        </div>
      </main>
    );
  }
  return (
    <main>
      <article className="articlePage">
        <div className="container articleContainer">
          <nav className="breadcrumb"><Link href="/">TOP</Link><span>/</span><Link href="/blog">売却ガイド</Link></nav>
          <p className="eyebrow">{blog.category}</p>
          <h1>{blog.title}</h1>
          <p className="articleLead">{blog.description}</p>
          <time className="articleDate">更新日：{blog.date}</time>
          <div className="articleBody">
            {blog.body.map((block) => (
              <section key={block.heading}>
                <h2>{block.heading}</h2>
                <p>{block.text}</p>
              </section>
            ))}
          </div>
          <div className="articleCta">
            <h2>売却を決める前でもご相談ください</h2>
            <p>相場確認、AI査定結果の見方、売却・賃貸・保有の比較まで、北村が分かりやすく整理します。</p>
            <div className="ctaRow center">
              <a className="btn btnLine" href={LINE_URL} target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="" />LINEで無料相談</a>
              <a className="btn btnAi" href={AI_URL} target="_blank" rel="noreferrer">AI査定をはじめる</a>
            </div>
          </div>
          <div className="relatedPosts">
            <h2>関連記事</h2>
            <div className="blogListGrid compact">
              {blogs.filter((item) => item.slug !== blog.slug).slice(0, 2).map((item) => (
                <article className="blogListCard" key={item.slug}>
                  <div className="blogMeta"><span>{item.category}</span><time>{item.date}</time></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link href={`/blog/${item.slug}`}>続きを読む</Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
