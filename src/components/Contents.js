import { Route, Switch } from "react-router-dom";
import { TopPage } from "../pages/TopPage";
import { PostPage } from "../pages/PostPage";
import { Page404 } from "../pages/Page404";
import { PostSearch } from "../pages/PostSearch";
import { SideBar } from "./SideBar";
import { ProfilePage } from "../pages/ProfilePage";
import { Contact } from "../pages/Contact";
import { About } from "../pages/About";

const Contents = () => {
  return (
    <div className="max-w-content my-8 px-8 lg:flex">
      <div className="lg:w-3/4">
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route exact path="/post" component={PostSearch} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route component={Page404} />
        </Switch>
      </div>
      <div className="lg:w-1/4 ml-4">
        <SideBar />
      </div>
    </div>
  );
};

export { Contents };
