import { useState, useEffect } from "react";
import { PostAll } from "../components/PostAll";

const PostPage = (props) => {
  const id = props.match.params.id; // 記事IDをprops(URL末尾)から取得
  const API_KEY_MICROCMS = "89355ccb-6236-420b-aeac-f740c233f765"; // ToDo: 分散しているAPIキー定義は一か所にまとめておきたい

  // 記事データのstate
  const [post, setPost] = useState({
    title: "", //記事タイトル
    publishedAt: "", // 公開日
    category: "", //カテゴリ
    thumbnailURL: "", // サムネイルURL
    description: "", // 概要
    body: "", // 本文
  });

  // コンポーネント表示時に記事を取得
  useEffect(() => {
    // 投稿を取得する
    fetch(`https://caliglacy.microcms.io/api/v1/post/${id}`, {
      headers: {
        "X-API-KEY": API_KEY_MICROCMS,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPost({
          title: data.title,
          publishedAt: data.publishedAt,
          category: data.category,
          thumbnailURL: data.hasOwnProperty("thumbnail") ?? data.thumbnail.url, // サムネイルは任意項目なので存在有無のチェックが必要
          description: data.description,
          body: data.body,
        });
      })
      .catch((err) => console.log("投稿データの取得に失敗しました。 PostPage.js", err));
  }, []);

  return (
    <div>
      <PostAll props={post} />
    </div>
  );
};

export { PostPage };
