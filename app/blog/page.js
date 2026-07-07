import Link from 'next/link';
import { blogs } from '../data/blogs';

export const metadata = {
  title: '売却ガイド・ブログ｜北村　充 大阪市の不動産売却相談',
  description: '大阪市の不動産売却、相続、住み替え、空き家、AI査定に関する売却ガイドです。'
};

export default function BlogIndex() {
  return (
    <main>
      <section className="blogHero">
        <div className="container">
          <p className="eyebrow">BLOG / GUIDE</p>
          <h1>売却ガイド・ブログ</h1>
          <p>大阪市で不動産売却を検討している方へ。相場・相続・住み替え・AI査定の見方を、分かりやすく整理しています。</p>
          <Link className="backHome" href="/">トップページへ戻る</Link>
        </div>
      </section>
      <section className="section">
        <div className="container blogListGrid">
          {blogs.map((blog) => (
            <article className="blogListCard" key={blog.slug}>
              <div className="blogMeta"><span>{blog.category}</span><time>{blog.date}</time></div>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <Link href={`/blog/${blog.slug}`}>続きを読む</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
