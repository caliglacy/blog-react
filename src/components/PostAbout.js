import { Link } from "react-router-dom";
import noImg from "../img/no-image.png";

const PostAbout = ({ props }, index) => {
  return (
    <Link to={`/post/${props.id}`}>
      <div
        key={"post-about-" + String(index)}
        className="flex mb-8 p-4 bg-indigo-50 shadow-md hover:shadow-xl duration-200"
      >
        <span className="flex-none bg-gray-300 mr-4 my-auto h-40 w-40">
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
          <h3 className="text-2xl font-medium">{props.title}</h3>
          <div className="mb-2">
            <span className="mr-4">{props.publishedAt.slice(0, 10)}</span>
            <span>{props.category.category}</span>
          </div>
          <div className="mb-2">{props.description}</div>
        </div>
      </div>
    </Link>
  );
};

export { PostAbout };
