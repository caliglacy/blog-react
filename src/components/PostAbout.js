import { Link } from "react-router-dom";
import noImg from "../img/no-image.png";

const PostAbout = ({ props }, index) => {
  return (
    <Link to={`/post/${props.id}`}>
      <div key={"post-about-" + String(index)}>
        <h3>{props.title}</h3>
        <div>
          <span>{props.publishedAt.slice(0, 10)}</span>
          <span>{props.category.category}</span>
        </div>
        <div>
          <span>
            {props.thumbnail ? (
              <img src={props.thumbnail.url} alt={`thumbnail-${props.id}`}></img>
            ) : (
              <img src={noImg} alt="no-thumbnail"></img>
            )}
          </span>
        </div>
        <div>{props.description}</div>
      </div>
    </Link>
  );
};

export { PostAbout };
