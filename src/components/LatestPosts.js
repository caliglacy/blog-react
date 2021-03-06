import { MICROCMS_API_KEY_X } from "../environment.js";
import { useState, useEffect } from "react";
import { Loading } from "./Loading";
import { ShowPosts } from "./ShowPosts";

const LatestPosts = ({ count }) => {
  // このコンポーネントは最新の投稿を表示します
  const [posts, setPosts] = useState([]); // 記事一覧用のstate
  const [loading, setLoading] = useState(false); // 記事データ取得中

  useEffect(() => {
    // 記事データ取得開始
    setLoading(true);

    // リクエスト情報作成
    let url = new URL("https://caliglacy.microcms.io/api/v1/post/");
    const params = { limit: count, orders: "-publishedAt" };
    url.search = new URLSearchParams(params);

    // 投稿データを取得
    fetch(url, {
      headers: {
        "X-API-KEY": MICROCMS_API_KEY_X,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setPosts(json.contents);
        // 記事データ取得成功
        setLoading(false);
      })
      .catch((err) => {
        console.log("最新投稿の取得に失敗しました。 TopPage.js", err);
        // 記事データ取得失敗
        setLoading(false);
      });
  }, [count]);

  return loading ? <Loading /> : <ShowPosts posts={posts} />;
};

export { LatestPosts };
