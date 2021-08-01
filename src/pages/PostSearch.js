// import { useEffect, useState } from "react";
import { useState } from "react";
import { Loading } from "../components/Loading";
// import { ShowCategories } from "../components/ShowCategories";
import { ShowPosts } from "../components/ShowPosts";

const PostSearch = () => {
  const [searched, setSearched] = useState(false); // 1回以上検索したか
  const [keyword, setKeyword] = useState("");
  // const [categories, setCategories] = useState("");
  const [posts, setPosts] = useState([]); // 記事一覧用のstate
  const [loading, setLoading] = useState(false); // 記事データ取得中

  // useEffect(() => {
  //   // リクエスト情報作成
  //   const API_KEY_MICROCMS = "89355ccb-6236-420b-aeac-f740c233f765";
  //   const url = new URL("https://caliglacy.microcms.io/api/v1/category/");
  //   // カテゴリ一覧を取得
  //   fetch(url, {
  //     headers: {
  //       "X-API-KEY": API_KEY_MICROCMS,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setCategories(json.contents);
  //     })
  //     .catch((err) => {
  //       console.log("カテゴリ一覧の取得に失敗しました。", err);
  //     });
  // }, []);

  const searchKeyword = (word) => {
    // 記事データ取得開始
    setLoading(true);

    // リクエスト情報作成
    const API_KEY_MICROCMS = "89355ccb-6236-420b-aeac-f740c233f765";
    let url = new URL("https://caliglacy.microcms.io/api/v1/post/");
    const params = { limit: 10, orders: "-publishedAt", q: word };
    url.search = new URLSearchParams(params);

    // 投稿データを取得
    fetch(url, {
      headers: {
        "X-API-KEY": API_KEY_MICROCMS,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setPosts(json.contents);
        // 記事データ取得成功
        setLoading(false);
        setSearched(true);
      })
      .catch((err) => {
        console.log("最新投稿の取得に失敗しました。 TopPage.js", err);
        // 記事データ取得失敗
        setLoading(false);
        setSearched(true);
      });
  };

  return (
    <div>
      <div>
        <div>キーワードで検索</div>
        <input type="text" onChange={(e) => setKeyword(e.target.value)}></input>
        <button onClick={() => searchKeyword(keyword)}>検索</button>
      </div>

      {loading ? <Loading /> : <ShowPosts posts={posts} searched={searched} />}
    </div>
  );
};

export { PostSearch };
