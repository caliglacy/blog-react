import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="theme-color-light shadow-md">
      <div className="max-w-content flex">
        <div className="flex-auto py-3 ml-2 text-4xl">かりらぼ。</div>
        <ul className="flex-auto flex">
          <li className="flex-1 w-18 hover:bg-indigo-300 duration-200">
            <NavLink
              className="block py-5 text-lg text-center"
              activeClassName="active theme-color-heavy text-white font-semibold my-auto"
              exact
              to="/"
            >
              ホーム
            </NavLink>
          </li>
          <li className="flex-1 w-18 hover:bg-indigo-300 duration-200">
            <NavLink
              className="block py-5 text-lg text-center"
              activeClassName="active theme-color-heavy text-white font-semibold"
              exact
              to="/post"
            >
              投稿検索
            </NavLink>
          </li>
          <li className="flex-1 w-18 hover:bg-indigo-300 duration-200">
            <NavLink
              className="block py-5 text-lg text-center"
              activeClassName="active theme-color-heavy text-white font-semibold"
              to="/profile"
            >
              プロフィール
            </NavLink>
          </li>
          <li className="flex-1 w-18 hover:bg-indigo-300 duration-200">
            <NavLink
              className="block py-5 text-lg text-center"
              activeClassName="active theme-color-heavy text-white font-semibold"
              to="/about"
            >
              これはなに？
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Header };
