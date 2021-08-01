import { useState, useEffect } from "react";
import { PostAbout } from "../components/PostAbout";
import { Loading } from "./Loading";
import { PostNotMuch } from "./PostNotMuch";

const LatestPosts = () => {
  // このコンポーネントは最新の投稿を表示します

  const API_KEY_MICROCMS = "89355ccb-6236-420b-aeac-f740c233f765";
  const [posts, setPosts] = useState([]); // 記事一覧用のstate
  const [loading, setLoading] = useState(false); // 記事データ取得中

  useEffect(() => {
    // 記事データ取得開始
    setLoading(true);

    // 投稿を取得する(全取得、新しい順)
    fetch("https://caliglacy.microcms.io/api/v1/post/", {
      headers: {
        "X-API-KEY": API_KEY_MICROCMS,
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
  }, []);

  const showPosts = (posts, cnt) => {
    return posts.length ? (
      <div>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <PostAbout props={post} />
            </div>
          );
        })}
      </div>
    ) : (
      // 表示する投稿が0件だった場合
      <PostNotMuch />
    );
  };

  return loading ? <Loading /> : showPosts(posts, 5);
};

export { LatestPosts };
