const Footer = () => {
  const Year = new Date().getFullYear(); // 表示時の西暦
  return (
    <div className="py-2 bg-purple-900 text-white">
      <div className="flex justify-center space-x-8">
        <span className="">ホーム</span>
        <span className="">先頭に戻る</span>
        <span className="">問い合わせ</span>
      </div>
      <div className="text-center">© {Year} caliglacy All rights reserved.</div>
    </div>
  );
};

export { Footer };
