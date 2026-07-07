# 反映手順

## 重要
今回のVer8.0 Stableは、過去のVer8系ファイルを削除してから入れてください。
古いCSSや古いappフォルダが残ると、レイアウト崩れが再発します。

## 手順
1. このZIPを解凍します。
2. GitHub Desktopで管理している `kitamura-brand-site` フォルダを開きます。
3. 中にある既存ファイルをすべて削除します。
   - `.git` フォルダだけは削除しないでください。
   - Windowsで `.git` が見えない場合は、通常表示されないので触らなくて大丈夫です。
4. 解凍した `kitamura_brand_v8_0_stable_rebuild` の中身をすべてコピーします。
5. GitHub Desktopで Summary に下記を入力します。

   `Ver8.0 Stable Ver7.2ベースで再構築`

6. Commit to main → Push origin
7. Netlifyのデプロイ完了後、シークレットウィンドウで確認します。

## 確認URL
- トップ: https://boisterous-fairy-cede52.netlify.app/
- ブログ一覧: https://boisterous-fairy-cede52.netlify.app/blog
