# blog-react

Develop an original blog implemented in create-app-react.

# 公開バージョン

v1.3

# 説明

ブログ制作を通じて、React および周辺知識を習得することが目的です。<br>
また、日記や雑記程度の付加価値を求めない情報の発信を目的としています。

# ビルド時の注意事項

ビルド環境にて、以下の環境変数を定義してください。

| 環境変数                           | 説明                                                            |
| ---------------------------------- | --------------------------------------------------------------- |
| REACT_APP_MICROCMS_API_KEY_X       | microCMS の API キー(GET API リクエスト用)                      |
| REACT_APP_MICROCMS_API_KEY_X_WRITE | microCMS の API キー(POST, PUT, PATCH, DELETE API リクエスト用) |

# 使用されている技術

| 要素           | 内容                 |
| -------------- | -------------------- |
| 言語           | HTML/CSS, JavaScript |
| ライブラリ     | React                |
| フレームワーク | Tailwind CSS         |
| ヘッドレス CMS | microCMS             |

# 作成情報

作成者: caliglacy

# ライセンス

再配布禁止

# リリースノート

v1.6 レイアウトを修正
v1.5 投稿一覧のテキストとサムネイルが重なっている問題を修正(#1)<br>
v1.4 Tailwind CSS に JIT モードを設定(開発者用)<br>
v1.3 Tailwind CSS を CDN からビルドに変更<br>
v1.2 API キー用の環境変数名を修正<br>
v1.1 API キーを環境変数から作成されるように修正([#4](https://github.com/caliglacy/blog-react/issues/4))<br>
v1.0 初リリース
