import { blogs, getBlog } from '../../../data/blogs';
import { notFound } from 'next/navigation';

const LINE_URL = 'https://lin.ee/SKauttW';
const AI_URL = 'https://www.aisatei.com/?id=f34d098b-8769-26ad-926c-b0fa1ef28c9e';

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export function generateMetadata({ params }) {
  const blog = getBlog(params.slug);
  if (!blog) return {};
  return {
    title: `${blog.title}｜北村　充`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.hero]
    }
  };
}

export default function BlogArticle({ params }) {
  const blog = getBlog(params.slug);
  if (!blog) notFound();

  return (
    <main>
      <SimpleHeader />
      <article className="articlePage">
        <div className="container articleContainer">
          <a className="breadcrumb" href="/blog">← ブログ一覧へ戻る</a>
          <p className="eyebrow">{blog.category}｜{blog.date}</p>
          <h1>{blog.title}</h1>
          <p className="articleLead">{blog.description}</p>
          <img className="articleHero" src={blog.hero} alt="" />
          <div className="articleBody">
            {blog.body.map(([heading, text]) => (
              <section key={heading}>
                <h2>{heading}</h2>
                <p>{text}</p>
              </section>
            ))}
            <section className="articleCta">
              <h2>売却で迷ったら、まずはご相談ください。</h2>
              <p>AI査定だけでは判断しにくい部分も、近隣事例や物件状況を踏まえて整理します。</p>
              <div className="ctaRow">
                <a className="btn btnLine" href={LINE_URL} target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="" />LINEで無料相談</a>
                <a className="btn btnAi" href={AI_URL} target="_blank" rel="noreferrer">AI査定をはじめる</a>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}

function SimpleHeader(){
  return (
    <header className="header">
      <div className="container nav">
        <a className="brand" href="/"><span className="brandMark">北</span><span><strong>北村　充</strong><small>大阪市の不動産売却相談</small></span></a>
        <nav><a href="/">ホーム</a><a href="/blog">ブログ</a><a href="/#ai">AI査定</a><a href="/#contact">相談する</a></nav>
      </div>
    </header>
  );
}
