const LINE_URL = 'https://lin.ee/SKauttW';
const AI_URL = 'https://www.aisatei.com/?id=f34d098b-8769-26ad-926c-b0fa1ef28c9e';
const INSTAGRAM_URL = 'https://www.instagram.com/kitamura_baikyaku';
const TIKTOK_URL = 'https://www.tiktok.com/@kitamura_baikyaku';
const PHONE = '090-7555-6542';

const areas = ['北区','都島区','城東区','鶴見区','旭区','福島区','西淀川区','淀川区','東淀川区','西区','港区','此花区','大正区','浪速区','中央区'];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">大阪市の不動産売却専門｜無料相談・無料相場診断</p>
            <h1 className="hero-title hero-title-v52" aria-label="売るか迷っている。それなら、まずは相談してください。">
              <span className="line-main hero-no-break">売るか迷っている。</span>
              <span className="line-gold hero-no-break">それなら、まずは</span>
              <span className="line-gold hero-no-break">相談してください。</span>
            </h1>
            <p className="lead">今すぐ売る予定がなくても大丈夫です。相場を知り、売る・貸す・保有する選択肢を一緒に整理します。</p>
            <div className="cta-row">
              <a className="btn btn-ai" href={AI_URL} target="_blank">🤖 AIで無料査定する</a>
              <a className="btn btn-line" href={LINE_URL} target="_blank">LINEで気軽に相談する</a>
              <a className="btn btn-phone" href={`tel:${PHONE}`}>電話で相談する</a>
            </div>
            <div className="trust-row">
              <div className="trust"><small>取扱エリア</small><strong>大阪市対応</strong></div>
              <div className="trust"><small>相談内容</small><strong>売却・相続</strong></div>
              <div className="trust"><small>営業方針</small><strong>無理な営業なし</strong></div>
            </div>
          </div>
          <div className="hero-photo">
            <img src="/images/hero-phone.jpg" alt="電話で売却相談に対応する北村充" />
            <div className="hero-note">売却を決める前の相談も歓迎です。</div>
          </div>
        </div>
      </section>

      <section className="section" id="sns">
        <div className="container">
          <div className="section-title"><span className="eyebrow">SNS / LINE</span><h2>日々の売却情報も発信中です</h2></div>
          <div className="sns-grid">
            <a className="sns-card" href={INSTAGRAM_URL} target="_blank"><img src="/icons/instagram.png" alt="Instagram"/><div><strong>Instagram</strong><br/><small>@kitamura_baikyaku</small></div></a>
            <a className="sns-card" href={TIKTOK_URL} target="_blank"><img src="/icons/tiktok.png" alt="TikTok"/><div><strong>TikTok</strong><br/><small>@kitamura_baikyaku</small></div></a>
            <a className="sns-card" href={LINE_URL} target="_blank"><div className="card-icon">LINE</div><div><strong>LINE公式</strong><br/><small>無料相談・AI査定はこちら</small></div></a>
          </div>
        </div>
      </section>

      <section className="section dark" id="problem">
        <div className="container">
          <div className="section-title"><span className="eyebrow">PROBLEM</span><h2>こんなお悩みはありませんか？</h2></div>
          <div className="cards">
            {['自分の家がいくらで売れるのか知りたい','相続した不動産をどうすればいいかわからない','住み替えを検討しているがタイミングが不安','空き家の管理や売却に困っている'].map((t,i)=><div className="card" key={t}><div className="card-icon">{['🏠','💰','🚚','🔑'][i]}</div><h3>{t}</h3><p>売る前の段階から、現実的な選択肢を整理します。</p></div>)}
          </div>
          <div className="cta-row" style={{justifyContent:'center',marginTop:32}}><a className="btn btn-line" href={LINE_URL} target="_blank">LINEで無料相談する</a></div>
        </div>
      </section>

      <section className="section" id="reason">
        <div className="container split">
          <div className="image-panel"><img src="/images/profile.jpg" alt="北村充プロフィール写真" /></div>
          <div>
            <div className="section-title reason-title"><span className="eyebrow">REASON</span><h2 className="reason-heading"><span className="desktop-title">北村充が選ばれる5つの理由</span><span className="mobile-title">北村充が選ばれる<br/>5つの理由</span></h2></div>
            <div className="reason-list">
              {['大阪市専門の地域密着サポート','しつこい営業をしない誠実な対応','相続・住み替え・空き家に強い','売る・貸す・保有まで比較して提案','契約から引き渡しまで丁寧にサポート'].map((t,i)=><div className="reason" key={t}><div className="num">0{i+1}</div><div><strong>{t}</strong><br/><small>売主様の状況に合わせて、無理のない判断を支援します。</small></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="ai">
        <div className="container split">
          <div className="ai-box">
            <p className="eyebrow">AI査定</p><h2>30秒でわかるAI相場診断</h2>
            <p>まずは相場を知りたい方はAI査定をご利用ください。より正確な売却方針は、近隣事例や物件状態を確認して北村がご案内します。</p>
            <div className="ai-alert">AI査定フォームでは、お名前の後ろに <strong>（キタムラ）</strong> と入力してください。<br/>例：山田太郎（キタムラ）</div>
            <a className="btn btn-ai" href={AI_URL} target="_blank">AI査定をはじめる</a>
          </div>
          <div className="card">
            <h3>AI査定と北村の査定の違い</h3>
            <p><strong>AI査定：</strong>まず相場の目安を知る。</p>
            <p><strong>北村の査定：</strong>販売戦略、売却時期、住み替え、相続、税金面まで整理する。</p>
            <a className="btn btn-line" href={LINE_URL} target="_blank">査定結果の見方を相談する</a>
          </div>
        </div>
      </section>

      <section className="section dark" id="about">
        <div className="container split">
          <div>
            <div className="section-title" style={{textAlign:'left'}}><span className="eyebrow">ABOUT</span><h2>はじめまして、北村充です。</h2></div>
            <p>私は大阪市で不動産売却のサポートをしています。前職では介護の現場で、ご本人やご家族の想いに向き合ってきました。不動産売却でも、価格だけではなく「これからの暮らし」まで考えた提案を大切にしています。</p>
            <p>売ることを急がせるのではなく、安心して任せていただける対応を心がけています。</p>
            <a className="btn btn-line" href={LINE_URL} target="_blank">北村に相談する</a>
          </div>
          <div className="image-panel"><img src="/images/store.jpg" alt="CENTURY21 株式会社ランド 阿波座店 外観" /></div>
        </div>
      </section>

      <section className="section" id="area">
        <div className="container"><div className="section-title"><span className="eyebrow">AREA</span><h2>対応エリア</h2><p>大阪市全域に対応しています。特に下記エリアの売却相談を強化しています。</p></div><div className="area-tags">{areas.map(a=><span className="tag" key={a}>{a}</span>)}</div></div>
      </section>

      <section className="section" id="faq">
        <div className="container"><div className="section-title"><span className="eyebrow">FAQ</span><h2>よくある質問</h2></div><div className="faq">
          <details open><summary>まだ売るか決めていなくても相談できますか？</summary><p>はい。相場だけ知りたい段階でも大丈夫です。</p></details>
          <details><summary>査定に費用はかかりますか？</summary><p>無料です。AI査定、LINE相談、訪問査定のご相談も無料です。</p></details>
          <details><summary>しつこく営業されませんか？</summary><p>無理な営業は行いません。ご希望に合わせてご案内します。</p></details>
          <details><summary>マンション以外も対応できますか？</summary><p>戸建・土地・相続不動産・空き家もご相談可能です。</p></details>
        </div></div>
      </section>
      <Footer />
      <div className="fixed-cta"><a className="line" href={LINE_URL} target="_blank">LINE相談</a><a className="tel" href={`tel:${PHONE}`}>電話</a></div>
    </main>
  );
}

function Header(){return <header className="header"><div className="container nav"><a className="brand" href="#top"><div className="brand-mark">北</div><div><div className="brand-title">北村 充</div><div className="brand-sub">大阪市の不動産売却相談</div></div></a><nav className="nav-links"><a href="#problem">お悩み</a><a href="#reason">選ばれる理由</a><a href="#ai">AI査定</a><a href="#about">北村について</a><a href="#area">対応エリア</a><a href="#faq">FAQ</a></nav><div className="social"><a href={INSTAGRAM_URL} target="_blank"><img src="/icons/instagram.png" alt="Instagram"/></a><a href={TIKTOK_URL} target="_blank"><img src="/icons/tiktok.png" alt="TikTok"/></a><a className="phone-pill" href={`tel:${PHONE}`}>{PHONE}</a></div></div></header>}
function Footer(){return <footer className="footer"><div className="container footer-grid"><div><div className="brand-title">北村 充</div><p>大阪市の不動産売却相談</p></div><div><strong>お電話でのご相談</strong><h2>{PHONE}</h2><p>株式会社ランド 阿波座店<br/>大阪市西区立売堀5-4-1</p></div><div><strong>SNSリンク</strong><div className="social" style={{marginTop:12}}><a href={INSTAGRAM_URL} target="_blank"><img src="/icons/instagram.png" alt="Instagram"/></a><a href={TIKTOK_URL} target="_blank"><img src="/icons/tiktok.png" alt="TikTok"/></a><a href={LINE_URL} target="_blank"><span className="tag">LINE</span></a></div></div></div><div className="container" style={{borderTop:'1px solid rgba(255,255,255,.12)',marginTop:30,paddingTop:16,fontSize:12}}>© 2026 北村充 不動産売却相談. All Rights Reserved.</div></footer>}
