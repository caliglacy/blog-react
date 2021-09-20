const Footer = () => {
  const Year = new Date().getFullYear(); // 表示時の西暦
  return (
    <div className="mt-4 py-2 bg-indigo-700 text-white text-sm">
      <div className="max-w-content">
        <div className="flex justify-center space-x-8">
          <span>ホーム</span>
          <span>先頭に戻る</span>
          <span>問い合わせ</span>
        </div>
        <div className="text-center">© {Year} caliglacy All rights reserved.</div>
      </div>
    </div>
  );
};

export { Footer };
