const Footer = () => {
  const Year = new Date().getFullYear(); // 表示時の西暦
  return (
    <div>
      <div>
        <span>ホーム</span>
        <span>先頭に戻る</span>
        <span>問い合わせ</span>
      </div>
      <div>© {Year} caliglacy All rights reserved.</div>
    </div>
  );
};

export { Footer };
