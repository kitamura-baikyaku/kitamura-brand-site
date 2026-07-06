# 北村充ブランドサイト Ver.5

Next.js + 静的書き出し（Netlify向け）で作成した、北村充ブランドサイトです。

## 目的

- 大阪市の不動産売却相談の反響獲得
- LINE公式、AI査定、電話、Instagram、TikTokへの導線統合
- GitHubでバージョン管理しながら長期運用

## 主要URL

- LINE公式: https://lin.ee/SKauttW
- Instagram: https://www.instagram.com/kitamura_baikyaku
- TikTok: https://www.tiktok.com/@kitamura_baikyaku
- AI査定: https://www.aisatei.com/?id=f34d098b-8769-26ad-926c-b0fa1ef28c9e

## GitHubへ反映する方法

1. このZIPを解凍
2. 中身を `ドキュメント/GitHub/kitamura-brand-site` に上書きコピー
3. GitHub Desktopを開く
4. Summaryに `Ver5 Next.js版追加` と入力
5. `Commit to main`
6. `Push origin`

## Netlify設定

Netlify側で自動的に以下が使われます。

- Build command: `npm run build`
- Publish directory: `out`

`netlify.toml` に設定済みです。

## 更新しやすいファイル

- メインページ: `app/page.js`
- デザイン: `app/globals.css`
- 画像: `public/images/`
- SNSロゴ: `public/icons/`
