const LINE_URL = 'https://lin.ee/SKauttW';
const AI_URL = 'https://www.aisatei.com/?id=f34d098b-8769-26ad-926c-b0fa1ef28c9e';
const INSTAGRAM_URL = 'https://www.instagram.com/kitamura_baikyaku';
const TIKTOK_URL = 'https://www.tiktok.com/@kitamura_baikyaku';
const PHONE = '090-7555-6542';

const areas = ['北区','都島区','城東区','鶴見区','旭区','福島区','西淀川区','淀川区','東淀川区','西区','港区','此花区','大正区','浪速区','中央区'];

const problems = [
  ['自分の家がいくらで売れるのか知りたい','まずは相場だけ知りたい段階でも大丈夫です。'],
  ['相続した不動産をどうすればいいかわからない','売却・賃貸・保有を比較して整理します。'],
  ['住み替えを検討しているがタイミングが不安','購入と売却の順番、資金計画まで確認します。'],
  ['空き家の管理や売却に困っている','放置リスクや売却時期も含めてご案内します。']
];

const reasons = [
  ['大阪市専門の地域密着サポート','近隣事例・買主動向・販売状況を踏まえ、現実的な売却方針をご提案します。'],
  ['しつこい営業をしない誠実な対応','売ることを急がせず、売主様のペースで判断できるよう丁寧に整理します。'],
  ['相続・住み替え・空き家に強い','価格だけでなく、ご家族・ローン・今後の暮らしまで一緒に考えます。'],
  ['売る・貸す・保有まで比較して提案','売却が正解とは限りません。複数の選択肢を比較して判断を支えます。'],
  ['契約から引き渡しまで丁寧にサポート','販売活動から条件交渉、契約、お引き渡しまで一貫して伴走します。']
];

const flow = [
  ['01','無料相談','LINE・電話から売却の状況やお悩みをお聞きします。'],
  ['02','相場確認','AI査定と近隣事例をもとに価格感を整理します。'],
  ['03','販売戦略','売出価格、販売方法、スケジュールを決めます。'],
  ['04','売却活動','広告・ネット掲載・購入希望者対応を行います。'],
  ['05','契約・引渡し','条件交渉から契約、引き渡しまで伴走します。']
];

const voices = [
  ['西区｜戸建','想像以上の価格で売却できました','相場だけの相談でしたが、売り方まで丁寧に説明してもらえました。'],
  ['北区｜マンション','住み替えも安心して進められました','売却と購入のタイミングを整理してもらい、不安が減りました。'],
  ['中央区｜空き家','空き家の悩みが解決しました','長年放置していた空き家の進め方が分かり助かりました。']
];

const blogs = [
  ['大阪市で不動産を売る前に確認したい5つのこと','価格だけで判断しないための基本チェック。'],
  ['相続した家を売るか貸すか迷った時の考え方','収益性・管理負担・税金を比較します。'],
  ['AI査定の結果を見る時に注意したいポイント','機械査定と実際の売却価格の違いを解説。']
];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero" id="top">
        <div className="heroShade" aria-hidden="true" />
        <div className="container heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">大阪市の不動産売却専門｜無料相談・無料相場診断</p>
            <h1 className="heroTitle" aria-label="売るか迷っている。それなら、まずは相談してください。">
              <span>売るか、</span>
              <span>迷っている。</span>
              <span className="goldText">それなら、</span>
              <span className="goldText">まずは相談してください。</span>
            </h1>
            <p className="lead">今すぐ売る予定がなくても大丈夫です。相場を知り、売る・貸す・保有するすべての選択肢を一緒に整理します。</p>
            <div className="ctaRow">
              <a className="btn btnAi" href={AI_URL} target="_blank" rel="noreferrer">AIで無料査定する</a>
              <a className="btn btnLine" href={LINE_URL} target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="" />LINEで相談する</a>
              <a className="btn btnPhone" href={`tel:${PHONE}`}>電話で相談する</a>
            </div>
            <div className="trustRow">
              <div><small>取扱エリア</small><strong>大阪市対応</strong></div>
              <div><small>相談内容</small><strong>売却・相続</strong></div>
              <div><small>営業方針</small><strong>無理な営業なし</strong></div>
            </div>
          </div>
          <figure className="heroPhoto">
            <img src="/images/hero-phone.jpg" alt="電話で売却相談に対応する北村　充" />
            <figcaption>売却を決める前の相談も歓迎です。</figcaption>
          </figure>
        </div>
      </section>

      <section className="snsBand" id="sns">
        <div className="container snsGrid">
          <div className="snsText">日々の売却情報や<br />お役立ち情報を発信中</div>
          <SocialCard url={INSTAGRAM_URL} icon="/icons/instagram.png" title="Instagram" sub="@kitamura_baikyaku" />
          <SocialCard url={TIKTOK_URL} icon="/icons/tiktok.png" title="TikTok" sub="@kitamura_baikyaku" />
          <SocialCard url={LINE_URL} icon="/icons/line.png" title="LINE公式" sub="無料相談・AI査定はこちら" />
        </div>
      </section>

      <section className="section dark" id="problem">
        <div className="container">
          <SectionTitle eyebrow="PROBLEM" title="こんなお悩みはありませんか？" dark />
          <div className="problemGrid">
            {problems.map(([title, text], i) => (
              <div className="problemCard" key={title}><div className="iconCircle">{['家','相','住','空'][i]}</div><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
          <div className="center"><a className="btn btnLine" href={LINE_URL} target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="" />LINEで無料相談する</a></div>
        </div>
      </section>

      <section className="section" id="reason">
        <div className="container">
          <SectionTitle eyebrow="REASON" title="北村　充が選ばれる5つの理由" />
          <div className="reasonGrid">
            {reasons.map(([title, text], i) => (
              <article className="reasonCard" key={title}><div className="reasonNo">0{i + 1}</div><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container aboutGrid">
          <div className="portrait"><img src="/images/profile.jpg" alt="北村　充プロフィール写真" /></div>
          <div>
            <p className="eyebrow">ABOUT</p>
            <h2 className="aboutTitle"><span>はじめまして。</span><span>大阪市の不動産売却を担当しております</span><span>北村　充です。</span></h2>
            <p>私は大阪市で不動産売却のサポートをしています。前職では介護の現場で、ご本人やご家族の想いに向き合ってきました。不動産売却でも、価格だけではなく「これからの暮らし」まで考えた提案を大切にしています。</p>
            <p>売ることを急がせるのではなく、安心して任せていただける対応を心がけています。</p>
            <div className="profileList"><span>介護福祉士</span><span>損害保険募集人</span><span>大阪府泉大津市出身</span></div>
            <a className="btn btnLine" href={LINE_URL} target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="" />北村に相談する</a>
          </div>
        </div>
      </section>

      <section className="section" id="flow">
        <div className="container">
          <SectionTitle eyebrow="FLOW" title="売却までの流れ" />
          <div className="flowGrid">{flow.map(([no,title,text]) => <div className="flowCard" key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
        </div>
      </section>

      <section className="section aiSection" id="ai">
        <div className="container aiGrid">
          <div className="aiBox"><p className="eyebrow">AI査定</p><h2>30秒でわかるAI相場診断</h2><p>まずは相場を知りたい方はAI査定をご利用ください。より正確な売却方針は、近隣事例や物件状態を確認して北村がご案内します。</p><div className="notice">AI査定フォームでは、お名前の後ろに <strong>（キタムラ）</strong> と入力してください。<br />例：山田太郎（キタムラ）</div><a className="btn btnAi" href={AI_URL} target="_blank" rel="noreferrer">AI査定をはじめる</a></div>
          <div className="aiCompare"><h3>AI査定と北村の査定の違い</h3><p><strong>AI査定：</strong>まず相場の目安を知る。</p><p><strong>北村の査定：</strong>販売戦略、売却時期、住み替え、相続、税金面まで整理する。</p><a className="btn btnLine" href={LINE_URL} target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="" />査定結果の見方を相談する</a></div>
        </div>
      </section>

      <section className="section" id="area">
        <div className="container">
          <SectionTitle eyebrow="AREA" title="対応エリア" text="大阪市全域に対応しています。特に下記エリアの売却相談を強化しています。" />
          <div className="areaTags">{areas.map(a => <span key={a}>{a}</span>)}</div>
        </div>
      </section>

      <section className="section dark" id="voice">
        <div className="container">
          <SectionTitle eyebrow="VOICE" title="お客様の声" dark />
          <div className="voiceGrid">{voices.map(([area,title,text]) => <article className="voiceCard" key={title}><small>{area}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section" id="blog">
        <div className="container">
          <SectionTitle eyebrow="BLOG / REPORT" title="売却レポート・お役立ちブログ" text="公開後に記事を追加し、Instagram・TikTok・LINEの受け皿として育てます。" />
          <div className="blogGrid">{blogs.map(([title,text]) => <article className="blogCard" key={title}><h3>{title}</h3><p>{text}</p><span>準備中</span></article>)}</div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container faqWrap"><SectionTitle eyebrow="FAQ" title="よくある質問" />
          {['まだ売るか決めていなくても相談できますか？|はい。相場だけ知りたい段階でも大丈夫です。','査定に費用はかかりますか？|無料です。AI査定、LINE相談、訪問査定のご相談も無料です。','しつこく営業されませんか？|無理な営業は行いません。ご希望に合わせてご案内します。','マンション以外も対応できますか？|戸建・土地・相続不動産・空き家もご相談可能です。'].map(row => {const [q,a]=row.split('|'); return <details key={q}><summary>{q}</summary><p>{a}</p></details>})}
        </div>
      </section>

      <section className="finalCta" id="contact"><div className="container"><h2>まずは無料相場診断から。</h2><p>売るか迷っている段階でも、LINEからお気軽にご相談ください。</p><div className="ctaRow center"><a className="btn btnLine" href={LINE_URL} target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="" />LINEで無料相談</a><a className="btn btnAi" href={AI_URL} target="_blank" rel="noreferrer">AI査定をはじめる</a><a className="btn btnPhone" href={`tel:${PHONE}`}>電話で相談</a></div></div></section>

      <Footer />
      <div className="fixedCta"><a className="line" href={LINE_URL} target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="" />LINE相談</a><a className="ai" href={AI_URL} target="_blank" rel="noreferrer">AI査定</a><a className="tel" href={`tel:${PHONE}`}>電話</a></div>
    </main>
  );
}

function Header(){return <header className="header"><div className="container nav"><a className="brand" href="#top"><span className="brandMark">北</span><span><strong>北村　充</strong><small>大阪市の不動産売却相談</small></span></a><nav><a href="#problem">お悩み</a><a href="#reason">選ばれる理由</a><a href="#ai">AI査定</a><a href="#about">北村について</a><a href="#area">対応エリア</a><a href="#faq">FAQ</a></nav><div className="headSocial"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><img src="/icons/instagram.png" alt="Instagram" /></a><a href={TIKTOK_URL} target="_blank" rel="noreferrer"><img src="/icons/tiktok.png" alt="TikTok" /></a><a href={LINE_URL} target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="LINE" /></a><a className="phonePill" href={`tel:${PHONE}`}>{PHONE}</a></div></div></header>}
function SocialCard({url,icon,title,sub}){return <a className="snsCard" href={url} target="_blank" rel="noreferrer"><img src={icon} alt={title}/><span><strong>{title}</strong><small>{sub}</small></span></a>}
function SectionTitle({eyebrow,title,text,dark}){return <div className={`sectionTitle ${dark?'titleDark':''}`}><span>{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>}
function Footer(){return <footer className="footer"><div className="container footerGrid"><div><h3>北村　充</h3><p>大阪市の不動産売却相談</p></div><div><strong>お電話でのご相談</strong><h2>{PHONE}</h2><p>株式会社ランド 阿波座店<br/>大阪市西区立売堀5-4-1</p></div><div><strong>SNSリンク</strong><div className="footerSns"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><img src="/icons/instagram.png" alt="Instagram" /></a><a href={TIKTOK_URL} target="_blank" rel="noreferrer"><img src="/icons/tiktok.png" alt="TikTok" /></a><a href={LINE_URL} target="_blank" rel="noreferrer"><img src="/icons/line.png" alt="LINE" /></a></div></div></div><div className="container copy">© 2026 北村　充 不動産売却相談. All Rights Reserved.</div></footer>}
