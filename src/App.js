import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { PostPage } from "./pages/PostPage";
import { Page404 } from "./pages/Page404";
import { PostSearch } from "./pages/PostSearch";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SideBar } from "./components/SideBar";
import { ProfilePage } from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route exact path="/post" component={PostSearch} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route component={Page404} />
      </Switch>
      <SideBar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
