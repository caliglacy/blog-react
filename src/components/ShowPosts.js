import { PostAbout } from "./PostAbout";
import { PostNotMuch } from "./PostNotMuch";

const ShowPosts = ({ posts, searched }) => {
  // 記事概要を表示
  return posts.length ? (
    <div>
      {posts.map((post, index) => {
        return <PostAbout props={post} key={index} />;
      })}
    </div>
  ) : (
    // 表示する投稿が0件だった場合はそう伝える
    <div>{searched ? <PostNotMuch /> : <div>キーワードごとに最新10件の投稿を検索できます。</div>}</div>
  );
};

export { ShowPosts };
