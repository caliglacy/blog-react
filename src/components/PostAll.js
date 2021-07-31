import noImg from "../img/no-image.png";

const PostAll = ({ props }) => {
  console.log("渡されたprops:", props);

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <span>{props.publishedAt.slice(0, 10)}</span>
        <span>{props.category.category}</span>
      </div>
      <div>
        <span>
          {props.thumbnailURL ? (
            <img src={props.thumbnailURL} alt={`thumbnail-${props.id}`}></img>
          ) : (
            <img src={noImg} alt="no-thumbnail"></img>
          )}
        </span>
      </div>
      <div>{props.description}</div>
      <div dangerouslySetInnerHTML={{ __html: props.body }} />
      {/* <div>{props.body}</div> */}
    </div>
  );
};

export { PostAll };
