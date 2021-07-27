import noImg from "../img/no-image.png";

const PostAbout = ({ props } = props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <span>{props.publishedAt.slice(0, 10)}</span>
        <span>{props.category.category}</span>
      </div>
      <div>
        <span>{props.thumbnail ? <img src={props.thumbnail.url}></img> : <img src={noImg}></img>}</span>
      </div>
      <div>{props.description}</div>
    </div>
  );
};

export { PostAbout };
