import { Link } from "react-router-dom";
import noImg from "../img/no-image.png";

const PostAbout = ({ props }, index) => {
  return (
    <Link to={`/post/${props.id}`}>
      <div
        key={"post-about-" + String(index)}
        className="flex mb-8 p-4 bg-white drop-shadow-basic hover:drop-shadow-strong duration-200"
      >
        <span className="flex-none bg-gray-200 mr-4 my-auto h-40 w-40">
          {props.thumbnail ? (
            <img
              src={props.thumbnail.url}
              alt={`thumbnail-${props.id}`}
              className="object-cover my-auto h-40 w-40"
            ></img>
          ) : (
            <img src={noImg} alt="no-thumbnail" className="object-cover my-auto h-40 w-40"></img>
          )}
        </span>
        <div>
          <h3 className="my-1">{props.title}</h3>
          <div className="mb-1">
            <span className="mr-4">{props.publishedAt.slice(0, 10)}</span>
            <span>{props.category.category}</span>
          </div>
          <div className="mb-1">{props.description}</div>
        </div>
      </div>
    </Link>
  );
};

export { PostAbout };
