import { BrowserRouter, Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div>ロゴ</div>
      <ul>
        <li>
          <Link activeClassName="active" exact to="/">
            ホーム
          </Link>
        </li>
        <li>
          <Link activeClassName="active" exact to="/post">
            投稿検索
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { Header };
