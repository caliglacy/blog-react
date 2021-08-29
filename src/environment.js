// 環境変数の設定
const MICROCMS_API_KEY_X = process.env.REACT_APP_MICROCMS_API_KEY_X;
const MICROCMS_API_KEY_X_WRITE = process.env.REACT_APP_MICROCMS_API_KEY_X_WRITE;

// 環境変数が未設定の場合はエラーとする
if (!MICROCMS_API_KEY_X) {
  throw new Error("Missing env.MICROCMS_API_KEY_X");
}
if (!MICROCMS_API_KEY_X_WRITE) {
  throw new Error("Missing env.MICROCMS_API_KEY_X_WRITE");
}

export { MICROCMS_API_KEY_X, MICROCMS_API_KEY_X_WRITE };
