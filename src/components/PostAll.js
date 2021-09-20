import noImg from "../img/no-image.png";
import { PostNotFound } from "./PostNotFound";

const PostAll = ({ props }) => {
  // 記事の読み込みが完了していない場合のブロック処理を上流で行うこと
  return (
    <div className="content-field">
      {props.id ? (
        // 記事が見つかった場合
        <div>
          <h1>{props.title}</h1>
          <div>
            <span>{props.publishedAt.slice(0, 10)}</span>
            <span>{props.category.category}</span>
          </div>
          <div>{props.description}</div>
          <div>
            <span>
              {props.thumbnailURL ? (
                <img src={props.thumbnailURL} alt={`thumbnail-${props.id}`}></img>
              ) : (
                <img src={noImg} alt="no-thumbnail"></img>
              )}
            </span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: props.body }} />
          {/* <div>{props.body}</div> */}
        </div>
      ) : (
        // 記事が見つからない場合
        <PostNotFound />
      )}
    </div>
  );
};

export { PostAll };
