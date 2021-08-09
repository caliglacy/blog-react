import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-indigo-100 flex">
      <div className="flex-auto py-3 text-4xl ">かりらぼ。</div>
      <ul className="h-auto flex-auto flex ">
        <li className="flex-auto w-18 hover:bg-indigo-300 duration-200">
          <NavLink
            className="block h-full text-lg"
            activeClassName=" active bg-purple-600 text-white font-semibold"
            exact
            to="/"
          >
            ホーム
          </NavLink>
        </li>
        <li className="flex-auto w-18 hover:bg-indigo-300 duration-200">
          <NavLink
            className="block h-full text-lg"
            activeClassName="active bg-purple-600 text-white font-semibold"
            exact
            to="/post"
          >
            投稿検索
          </NavLink>
        </li>
        <li className="flex-auto w-18 hover:bg-indigo-300 duration-200">
          <NavLink
            className="block h-full text-lg"
            activeClassName="active bg-purple-600 text-white font-semibold"
            to="/profile"
          >
            プロフィール
          </NavLink>
        </li>
        <li className="flex-auto w-18 hover:bg-indigo-300 duration-200">
          <NavLink
            className="block h-full text-lg"
            activeClassName="active bg-purple-600 text-white font-semibold"
            to="/contact"
          >
            問い合わせ
          </NavLink>
        </li>
        <li className="flex-auto w-18 hover:bg-indigo-300 duration-200">
          <NavLink
            className="block h-full text-lg"
            activeClassName="active bg-purple-600 text-white font-semibold"
            to="/about"
          >
            このブログについて
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export { Header };
