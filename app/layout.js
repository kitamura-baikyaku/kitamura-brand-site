import './globals.css';

export const metadata = {
  title: '大阪市の不動産売却なら北村　充｜無料相場診断・AI査定',
  description: '大阪市の不動産売却・相続・住み替え・空き家の相談なら北村　充へ。売るか迷っている段階でも無料相談・無料相場診断・AI査定に対応しています。',
  keywords: ['大阪市 不動産売却','大阪市 マンション売却','大阪市 相続 売却','空き家 売却 大阪市','北村充','株式会社ランド 阿波座店'],
  openGraph: {
    title: '北村　充｜大阪市の不動産売却相談',
    description: '売るか迷っている。それなら、まずは相談してください。',
    type: 'website',
    locale: 'ja_JP',
    images: ['/images/hero-phone.jpg']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
