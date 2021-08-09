import info from "../data/about.json";

const About = () => {
  return (
    <div>
      <div className="mb-16">
        <h2 className="mb-8 pl-2 pb-1 border-l-8 border-b-2 border-purple-600 text-3xl">{info.what.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: info.what.body }} />
      </div>
      <div className="mb-16">
        <h2 className="mb-8 pl-2 pb-1 border-l-8 border-b-2 border-purple-600 text-3xl">{info.purpose.title}</h2>
        <ul class="ml-4 mb-4 list-disc list-inside">
          {info.purpose.point.map((item, key) => {
            return (
              <li className="mb-1.5" key={key}>
                {item}
              </li>
            );
          })}
        </ul>
        <div dangerouslySetInnerHTML={{ __html: info.purpose.body }} />
      </div>
      <div className="mb-16">
        <h2 className="mb-8 pl-2 pb-1 border-l-8 border-b-2 border-purple-600 text-3xl">{info.technology.title}</h2>
        <ul>
          {info.technology.list.map((item, key) => {
            return (
              <li className="mb-1.5" key={key}>
                {item.category}：{item.item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mb-16">
        <h2 className="mb-8 pl-2 pb-1 border-l-8 border-b-2 border-purple-600 text-3xl">{info.plan.title}</h2>
        <ul className="ml-4 list-disc list-inside">
          {info.plan.list.map((item, key) => {
            return (
              <li className="mb-1.5" key={key}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export { About };
