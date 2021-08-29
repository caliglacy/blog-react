import { MICROCMS_API_KEY_X_WRITE } from "../environment.js";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("READY");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [text, setText] = useState("");

  const sendMessage = () => {
    const message = { name: name, mail: mail, text: text };

    //送信データチェック
    if (name === "" || mail === "" || text === "") {
      setResult("BLANK");
      alert("必須項目を入力してください。");
      return;
    }

    // 送信中はボタンを無効化
    setResult("BUSY");

    // 問い合わせ内容を送信する
    fetch("https://caliglacy.microcms.io/api/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": MICROCMS_API_KEY_X_WRITE,
      },
      body: JSON.stringify(message),
    })
      .then((response) => {
        if (response.ok) {
          alert("送信が完了しました。");
          // 入力項目をクリア
          setName("");
          setMail("");
          setText("");
          setResult("OK");
        } else {
          // 問い合わせデータ登録に失敗した場合(レスポンスが201でない)
          alert("送信に失敗しました。再度お試しください。");
          console.log("問い合わせデータの送信に失敗しました。", response);
          setResult("NG");
        }
      })
      .catch((err) => {
        // ネットワーク系のエラーによって失敗した場合
        alert("送信に失敗しました。再度お試しください。");
        console.log("問い合わせデータの送信に失敗しました。", err);
        setResult("NG");
      });
  };

  return (
    <div>
      <div className="mb-2 flex">
        <label className="w-40 block font-bold md:text-right mb-1 md:mb-0 pr-4" for="contact-name">
          お名前
        </label>
        <input
          type="text"
          name="name"
          id="contact-name"
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        ></input>
      </div>
      <div className="mb-2 flex">
        <label className="w-40 block font-bold md:text-right mb-1 md:mb-0 pr-4" for="contact-mail">
          メールアドレス
        </label>
        <input
          type="text"
          name="mail"
          id="contact-mail"
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => {
            setMail(e.target.value);
          }}
          value={mail}
        ></input>
      </div>
      <div className="flex">
        <label className="w-40 block font-bold md:text-right mb-1 md:mb-0 pr-4" for="contact-text">
          本文
        </label>
        <textarea
          rows="10"
          cols="60"
          id="contact-text"
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        ></textarea>
      </div>
      <div className="mb-2 flex">
        <div className="w-40"></div>
        <div>質問の内容によっては、お答えできない場合がございます。</div>
      </div>
      <div className="flex">
        <div className="w-40"></div>
        <div>
          <button
            onClick={sendMessage}
            className={
              result === "BUSY"
                ? "ml-1 w-40 bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
                : "ml-1 w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            }
          >
            送信
          </button>
        </div>
      </div>
    </div>
  );
};

export { Contact };
