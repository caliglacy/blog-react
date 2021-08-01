import { useState } from "react";

const PostSearch = () => {
  const [keyword, setKeyword] = useState("");

  const searchKeyword = (word) => {
    // デバッグ処理
    console.log(word);
  };

  return (
    <div>
      <div>キーワードで検索</div>
      <input type="text" onChange={(e) => setKeyword(e.target.value)}></input>
      <button onClick={() => searchKeyword(keyword)}>検索</button>
    </div>
  );
};

export { PostSearch };
