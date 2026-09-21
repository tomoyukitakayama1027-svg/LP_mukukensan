# LP（2026年9月制作）

## 状態
- 公開状況: **非公開（privateリポジトリ）**
- 公開予定: 制作完了後に public へ切り替え

## 公開前チェックリスト
- [ ] `docs/要確認リスト.md` の項目をすべて解消（LP上の `要確認` 表示が0件）
- [ ] `index.html` の制作中バー（draft-bar）を削除
- [ ] `index.html` の `<meta name="robots" content="noindex, nofollow">` を削除
- [ ] `robots.txt` の `Disallow: /` を削除
- [ ] `vercel.json` の `X-Robots-Tag: noindex` を削除
- [ ] コミット履歴に秘匿情報（APIキー・個人情報・見積書等）が入っていないか確認
- [ ] `_private/` に社外秘資料が残っていないか確認
- [ ] リポジトリを private → public に変更

## ディレクトリ
```
index.html        トップページ
assets/css/       スタイル
assets/js/        スクリプト
assets/images/    画像
docs/             制作メモ・仕様
_private/         社外秘（Git管理外）
```
