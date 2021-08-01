import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { PostPage } from "./pages/PostPage";
import { Page404 } from "./pages/Page404";
import { PostSearch } from "./pages/PostSearch";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TopPage} />
          {/* <Route exact path="/post" component={PostListPage} /> */}
          <Route exact path="/post" component={PostSearch /* ToDo: 仮配置。設計通りであるかはチェックすること。 */} />
          <Route path="/post/:id" component={PostPage} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
      <SideBar />
      <Footer />
    </div>
  );
}

export default App;
