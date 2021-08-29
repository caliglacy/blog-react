// 環境変数の設定
const API_KEY_MICROCMS_POSTS = process.env.REACT_APP_API_KEY_MICROCMS_POSTS;
const API_KEY_MICROCMS_CONTACT = process.env.REACT_APP_API_KEY_MICROCMS_CONTACT;

// 環境変数が未設定の場合はエラーとする
if (!API_KEY_MICROCMS_POSTS) {
  throw new Error("Missing env.API_KEY_MICROCMS_POSTS");
}
if (!API_KEY_MICROCMS_CONTACT) {
  throw new Error("Missing env.API_KEY_MICROCMS_CONTACT");
}

export { API_KEY_MICROCMS_POSTS, API_KEY_MICROCMS_CONTACT };
