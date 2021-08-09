import thumbnail from "../img/my-image.png";
import profile from "../data/profile.json";
import noImg from "../img/no-image.png";

const ProfilePage = () => {
  return (
    <div>
      <div className="mb-16">
        <h2 className="mb-8 pl-2 pb-1 border-l-8 border-b-2 border-purple-600 text-3xl">プロフィール</h2>
        <div className="flex">
          <span>
            <img src={thumbnail} alt="サムネイル" className="rounded-full object-cover h-40 w-40 mx-6"></img>
          </span>
          <span className="my-auto">
            <div className="mb-2 text-3xl">{profile.name}</div>
            <div>
              <div className="mb-2 flex">
                <a href={profile.sns.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: profile.description }} />
          </span>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="mb-8 pl-2 pb-1 border-l-8 border-b-2 border-purple-600 text-3xl">作品</h2>
        <div>
          {profile.portfolio.map((data, key) => {
            return (
              <a href={data.link} target="_blank" rel="noopener noreferrer" key={key} className="mb-4 flex">
                <span>
                  {data.thumbnail ? (
                    <img src={data.thumbnail} alt={data.name} className="object-cover h-40 w-40 mx-6"></img>
                  ) : (
                    <img src={noImg} alt="no-thumbnail" className="object-cover h-40 w-40 mx-6"></img>
                  )}
                </span>
                <span className="my-auto">
                  <div className="mb-4 text-3xl">{data.name}</div>
                  <div dangerouslySetInnerHTML={{ __html: data.text }} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
      <div className="mb-16">
        <h2 className="mb-8 pl-2 pb-1 border-l-8 border-b-2 border-purple-600 text-3xl">スキルセット</h2>
        <div className="ml-6">
          <div className="mb-8">
            <h3 className="mb-4 border-b border-purple-600 border-double text-2xl">言語</h3>
            <ul>
              {profile.skill.language.map((data, key) => {
                return (
                  <li key={key} className="mb-3 flex">
                    <span className="w-40">{data.skill}</span>
                    <span className="mr-10 w-10">
                      {/* <span className="mr-2">{data.work ? "実務" : "開発"}</span> */}
                      <span>{data.year}年</span>
                    </span>
                    <span>{data.comment}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="mb-4 border-b border-purple-600 border-double text-2xl">ライブラリ</h3>
            <ul>
              {profile.skill.library.map((data, key) => {
                return (
                  <li key={key} className="mb-3 flex">
                    <span className="w-40">{data.skill}</span>
                    <span className="mr-10 w-10">
                      {/* <span className="mr-2">{data.work ? "実務" : "開発"}</span> */}
                      <span>{data.year}年</span>
                    </span>
                    <span>{data.comment}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="mb-4 border-b border-purple-600 border-double text-2xl">フレームワーク</h3>
            <ul>
              {profile.skill.framework.map((data, key) => {
                return (
                  <li key={key} className="mb-3 flex">
                    <span className="w-40">{data.skill}</span>
                    <span className="mr-10 w-10">
                      {/* <span className="mr-2">{data.work ? "実務" : "開発"}</span> */}
                      <span>{data.year}年</span>
                    </span>
                    <span>{data.comment}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="mb-8 pl-2 pb-1 border-l-8 border-b-2 border-purple-600 text-3xl">これまでの経験</h2>
        <div className="ml-6">
          {profile.career.map((data, key) => {
            return (
              <div key={key} className="mb-6 flex">
                <div className="w-1/6 text-xl">
                  {data.year}年 {data.month}月
                </div>
                <div className="w-5/6">
                  <div className="mb-1 text-xl">{data.event}</div>
                  <div className="text-gray-800 text-opacity-50">{data.comment}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { ProfilePage };
