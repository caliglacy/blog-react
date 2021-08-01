import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
import { PostAbout } from "../components/PostAbout";

const TopPage = () => {
  const API_KEY_MICROCMS = "89355ccb-6236-420b-aeac-f740c233f765";
  const [posts, setPosts] = useState([]); // 記事一覧用のstate

  const [loading, setLoading] = useState(false); // 記事データ取得中

  const getPosts = () => {
    return (
      <div>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <PostAbout props={post} />
            </div>
          );
        })}
      </div>
    );
  };

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
        console.log("投稿データの取得に失敗しました。 TopPage.js");
        // 記事データ取得失敗
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>コンポーネント：トップ</h2>
      {loading ? <Loading /> : getPosts()}
    </div>
  );
};

export { TopPage };
