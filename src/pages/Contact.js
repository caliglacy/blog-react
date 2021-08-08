import { useState } from "react";

const Contact = () => {
  // const X_WRITE_API_KEY = "9bbf6254-e7fb-434e-a39a-e3dccab70554";

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [text, setText] = useState("");

  const sendMessage = () => {
    console.log(name);
    console.log(mail);
    console.log(text);
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
        <button onClick={sendMessage}>送信</button>
      </div>
    </div>
  );
};

export { Contact };
