const ShowCategories = ({ categories }) => {
  //カテゴリを表示
  return categories.length ? (
    <div>
      {categories.map((category, index) => {
        return <span key={"category-" + String(index)}>{category.category}</span>;
      })}
    </div>
  ) : (
    // 表示するカテゴリが0個だった場合(特に表示するものなし)
    <div></div>
  );
};

export { ShowCategories };
