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
    <div className="max-w-screen-xl mx-auto lg:flex justify-center">
      <div className="w-2/3 flex-grow">
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
      <div className="w-1/3 ml-4 flex-grow">
        <SideBar />
      </div>
    </div>
  );
};

export { Contents };
