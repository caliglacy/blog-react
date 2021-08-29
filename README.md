# blog-react

Develop an original blog implemented in create-app-react.

# 公開バージョン

v1.1

# 説明

ブログ制作を通じて、React および周辺知識を習得することが目的です。<br>
また、日記や雑記程度の付加価値を求めない情報の発信を目的としています。

# ビルド時の注意事項

ビルド環境にて、以下の環境変数を定義してください。

| 環境変数                           | 説明                               |
| ---------------------------------- | ---------------------------------- |
| REACT_APP_API_KEY_MICROCMS_POSTS   | microCMS の投稿データ取得 API キー |
| REACT_APP_API_KEY_MICROCMS_CONTACT | microCMS の問い合わせ送信 API キー |

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

v1.1 API キーを環境変数から作成されるように修正([#4](https://github.com/caliglacy/blog-react/issues/4))<br>
v1.0 初リリース
