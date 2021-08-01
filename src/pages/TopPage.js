import { LatestPosts } from "../components/LatestPosts";

const TopPage = () => {
  return (
    <div>
      <h2>コンポーネント：トップ</h2>
      <LatestPosts count={5} />
    </div>
  );
};

export { TopPage };
