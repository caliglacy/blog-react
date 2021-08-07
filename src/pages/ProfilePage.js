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
          <a href={profile.portfolio[0].link} target="_blank" rel="noopener noreferrer">
            <span>
              {profile.portfolio[0].thumbnail ? (
                <img src={profile.portfolio[0].thumbnail} alt={profile.portfolio[0].name}></img>
              ) : (
                <img src={noImg} alt="no-thumbnail"></img>
              )}
            </span>
            <span>
              <div>{profile.portfolio[0].name}</div>
              <div>{profile.portfolio[0].comment}</div>
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2>スキルセット</h2>
        <div>
          <h3>言語</h3>
          <div>
            <div>
              {profile.skill.language[0].skill}（{profile.skill.language[0].year}年）
            </div>
          </div>
        </div>
        <div>
          <h3>ライブラリ</h3>
          <div>
            <div>
              {profile.skill.library[0].skill}（{profile.skill.library[0].year}年）
            </div>
          </div>
        </div>
        <div>
          <h3>フレームワーク</h3>
          <div>
            <div>
              {profile.skill.framework[0].skill}（{profile.skill.framework[0].year}年）
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>職歴</h2>
        <div>
          <span>
            {profile.career[0].year}年 {profile.career[0].month}月
          </span>
          <span>
            <div>{profile.career[0].event}</div>
            <div>{profile.career[0].comment}</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export { ProfilePage };
