import { PostAbout } from "./PostAbout";
import { PostNotMuch } from "./PostNotMuch";

const ShowPosts = ({ posts }) => {
  // 記事概要を表示
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

export { ShowPosts };
