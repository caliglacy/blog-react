import info from "../data/about.json";

const About = () => {
  return (
    <div>
      <div>
        <h2>{info.what.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: info.what.body }} />
      </div>
      <div>
        <h2>{info.purpose.title}</h2>
        <ul>
          {info.purpose.point.map((item, key) => {
            return <li key={key}>{item}</li>;
          })}
        </ul>
        <div dangerouslySetInnerHTML={{ __html: info.purpose.body }} />
      </div>
      <div>
        <h2>{info.technology.title}</h2>
        <ul>
          {info.technology.list.map((item, key) => {
            return (
              <li key={key}>
                {item.category}：{item.item}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2>{info.plan.title}</h2>
        <ul>
          {info.plan.list.map((item, key) => {
            return <li key={key}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export { About };
