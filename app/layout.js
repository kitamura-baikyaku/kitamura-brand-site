import './globals.css';

export const metadata = {
  title: '大阪市の不動産売却相談｜北村充｜無料相場診断・AI査定',
  description: '大阪市で不動産売却・相続・住み替え・空き家にお悩みの方へ。北村充が無料相場診断、30秒AI査定、LINE相談でサポートします。',
  openGraph: {
    title: '北村充｜大阪市の不動産売却相談',
    description: '売るか迷っている段階でも大丈夫。無料相場診断・AI査定・LINE相談に対応。',
    images: ['/images/hero-phone.jpg'],
    type: 'website',
    locale: 'ja_JP'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
