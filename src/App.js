import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Contents } from "./components/Contents";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Contents />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
