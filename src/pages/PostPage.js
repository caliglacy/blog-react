import { MICROCMS_API_KEY_X } from "../environment.js";
import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
import { PostAll } from "../components/PostAll";

const PostPage = (props) => {
  const id = props.match.params.id; // 記事IDをprops(URL末尾)から取得

  const [loading, setLoading] = useState(false); // 記事データ取得中

  // 記事データのstate
  const [post, setPost] = useState({
    id: "", //記事ID
    title: "", //記事タイトル
    publishedAt: "", // 公開日
    category: "", //カテゴリ
    thumbnailURL: "", // サムネイルURL
    description: "", // 概要
    body: "", // 本文
  });

  // コンポーネント表示時に記事を取得
  useEffect(() => {
    // 記事データ取得開始
    setLoading(true);

    // 投稿を取得する
    fetch(`https://caliglacy.microcms.io/api/v1/post/${id}`, {
      headers: {
        "X-API-KEY": MICROCMS_API_KEY_X,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPost({
          id: data.id,
          title: data.title,
          publishedAt: data.publishedAt,
          category: data.category,
          thumbnailURL: data.hasOwnProperty("thumbnail") ? data.thumbnail.url : "", // サムネイルは任意項目なので存在有無のチェックが必要
          description: data.description,
          body: data.body,
        });
        // 記事データ取得成功
        setLoading(false);
      })
      .catch((err) => {
        console.log("投稿データの取得に失敗しました。 PostPage.js", err);
        // 記事データ取得失敗
        setLoading(false);
      });
  }, [id]);

  return <div>{loading ? <Loading /> : <PostAll props={post} />}</div>;
};

export { PostPage };
