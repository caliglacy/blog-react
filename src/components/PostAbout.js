import { Link } from "react-router-dom";
import noImg from "../img/no-image.png";

const PostAbout = ({ props }, index) => {
  return (
    <Link to={`/post/${props.id}`}>
      <div key={"post-about-" + String(index)} className="flex mb-8 p-4 bg-indigo-50 shadow-md">
        <div>
          <span className="bg-gray-300">
            {props.thumbnail ? (
              <img
                src={props.thumbnail.url}
                alt={`thumbnail-${props.id}`}
                className="object-cover h-40 w-40 mx-6"
              ></img>
            ) : (
              <img src={noImg} alt="no-thumbnail" className="object-cover h-40 w-40 mx-6"></img>
            )}
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-medium mt-2 mb-2">{props.title}</h3>
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
