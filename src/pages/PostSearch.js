import { API_KEY_MICROCMS_POSTS } from "../environment.js";
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
  //   const url = new URL("https://caliglacy.microcms.io/api/v1/category/");
  //   // カテゴリ一覧を取得
  //   fetch(url, {
  //     headers: {
  //       "X-API-KEY": API_KEY_MICROCMS_POSTS,
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
    let url = new URL("https://caliglacy.microcms.io/api/v1/post/");
    const params = { limit: 10, orders: "-publishedAt", q: word };
    url.search = new URLSearchParams(params);

    // 投稿データを取得
    fetch(url, {
      headers: {
        "X-API-KEY": API_KEY_MICROCMS_POSTS,
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
        <div className="block text-gray-700 font-bold mb-2">キーワード検索</div>
        <div className="w-3/4 mb-4 flex">
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="input keyword"
            onChange={(e) => setKeyword(e.target.value)}
          ></input>
          <button
            className={
              loading
                ? "ml-1 w-40 bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
                : "ml-1 w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            }
            onClick={() => searchKeyword(keyword)}
          >
            検索
          </button>
        </div>
      </div>

      {loading ? <Loading /> : <ShowPosts posts={posts} searched={searched} />}
    </div>
  );
};

export { PostSearch };
