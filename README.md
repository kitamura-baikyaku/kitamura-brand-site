# 北村充ブランドサイト Ver.8.0 Blog System

大阪市の不動産売却相談サイトに、ブログ／売却ガイド機能を追加したバージョンです。

## 追加内容

- `/blog` ブログ一覧ページ
- `/blog/osaka-sell-checkpoints` 記事ページ
- `/blog/ai-satei-vs-houmon-satei` 記事ページ
- `/blog/inherited-house-sell-or-rent` 記事ページ
- `data/blogs.js` 記事データ管理
- トップページのブログセクションを実記事リンクへ変更
- sitemap.xml 更新

## 今後の記事追加方法

1. `data/blogs.js` に記事データを1件追加
2. GitHub DesktopでCommit
3. Push origin
4. Netlifyで自動公開

記事ページは `/app/blog/[slug]/page.js` が自動生成します。
