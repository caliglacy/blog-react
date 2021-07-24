import "./App.css";
import { TopPage } from "./pages/TopPage";

function App() {
  // テスト：単一のコンテンツをAPIで取得する
  const API_KEY_MICROCMS = "89355ccb-6236-420b-aeac-f740c233f765";
  fetch("https://caliglacy.microcms.io/api/v1/test/yt3gq56pr5t", {
    headers: {
      "X-API-KEY": API_KEY_MICROCMS,
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));

  return (
    <div>
      <TopPage />
    </div>
  );
}

export default App;
