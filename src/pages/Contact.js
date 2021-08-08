import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("READY");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [text, setText] = useState("");

  const sendMessage = () => {
    const X_WRITE_API_KEY = "9bbf6254-e7fb-434e-a39a-e3dccab70554";
    const message = { name: name, mail: mail, text: text };

    // 送信中はボタンを無効化
    setResult("BUSY");

    // 問い合わせ内容を送信する
    fetch("https://caliglacy.microcms.io/api/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": X_WRITE_API_KEY,
      },
      body: JSON.stringify(message),
    })
      .then((response) => {
        if (response.ok) {
          alert("送信が完了しました。");
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
      <div>お問い合わせ</div>
      <div>
        <span>お名前</span>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <span>メールアドレス</span>
        <input
          type="text"
          name="mail"
          onChange={(e) => {
            setMail(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <span>本文</span>
        <textarea
          rows="10"
          cols="60"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
      </div>
      <div>質問の内容によっては、お答えできない場合がございます。</div>
      <div>
        <button onClick={sendMessage} disabled={result === "BUSY"}>
          送信
        </button>
      </div>
    </div>
  );
};

export { Contact };
