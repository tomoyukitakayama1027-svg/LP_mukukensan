# LP（2026年9月制作）

## 状態
- 公開状況: **公開中**（リポジトリ public）
- ホスティング: Cloudflare Pages（main に push すると自動で反映）
  - Vercel の無料プランは非商用限定のため、会費制コミュニティの本LPでは使わない

## ディレクトリ
```
index.html        トップページ
assets/css/       スタイル
assets/js/        スクリプト
assets/images/    画像
docs/             制作メモ・仕様
_private/         社外秘（Git管理外）
```

## 更新時のメモ
- `index.html` の `style.css?v=…` / `main.js?v=…` の数字は、CSSやJSを直したら新しくする。
  閲覧者のブラウザに古いファイルが残るのを防ぐため。
