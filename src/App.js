import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { PostPage } from "./pages/PostPage";
import { Page404 } from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TopPage} />
        {/* <Route exact path="/post" component={PostListPage} /> */}
        <Route path="/post" component={PostPage} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
