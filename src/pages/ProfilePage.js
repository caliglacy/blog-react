import thumbnail from "../img/my-image.png";
import profile from "../data/profile.json";
import noImg from "../img/my-image.png";

const ProfilePage = () => {
  return (
    <div>
      <div>
        <h2>プロフィール</h2>
        <span>
          <img src={thumbnail} alt="サムネイル"></img>
        </span>
        <span>
          <div>{profile.name}</div>
          <div>
            <div>
              <a href={profile.sns.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </span>
      </div>
      <div>
        <h2>作品</h2>
        <div>
          {profile.portfolio.map((data, key) => {
            return (
              <a href={data.link} target="_blank" rel="noopener noreferrer" key={key}>
                <span>
                  {data.thumbnail ? (
                    <img src={data.thumbnail} alt={data.name}></img>
                  ) : (
                    <img src={noImg} alt="no-thumbnail"></img>
                  )}
                </span>
                <span>
                  <div>{data.name}</div>
                  <div>{data.comment}</div>
                </span>
              </a>
            );
          })}
        </div>
      </div>
      <div>
        <h2>スキルセット</h2>
        <div>
          <h3>言語</h3>
          <ul>
            {profile.skill.language.map((data, key) => {
              return (
                <li key={key}>
                  {data.skill}（{data.year}年）
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3>ライブラリ</h3>
          <ul>
            {profile.skill.language.map((data, key) => {
              return (
                <li key={key}>
                  {data.skill}（{data.year}年）
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3>フレームワーク</h3>
          <ul>
            {profile.skill.language.map((data, key) => {
              return (
                <li key={key}>
                  {data.skill}（{data.year}年）
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <h2>職歴</h2>
        {profile.career.map((data, key) => {
          return (
            <div key={key}>
              <span>
                {data.year}年 {data.month}月
              </span>
              <span>
                <div>{data.event}</div>
                <div>{data.comment}</div>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ProfilePage };
