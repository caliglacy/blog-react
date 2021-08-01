import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div>ロゴ</div>
      <ul>
        <li>
          <NavLink activeClassName="active" exact to="/">
            ホーム
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to="/post">
            投稿検索
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export { Header };
