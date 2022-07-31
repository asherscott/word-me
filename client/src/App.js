import "./App.css";
import { useState } from "react";
import dictonary from "./dictonary.json";
import Home from "./pages/Home";

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <div className="Nav"></div>
      <Home list={list} setList={setList} dictonary={dictonary} />
    </div>
  );
}

export default App;
