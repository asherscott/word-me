import "./App.css";
import { useState } from "react";
import dictonary from "./dictonary.json";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Words from "./pages/Words";
import Lists from "./pages/Lists";
import Nav from "./pages/Nav";

function App() {
  const [list, setList] = useState([]);

  return (
    <>
      <Nav />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/lists">
          <Lists />
        </Route>
        <Route path="/words">
          <Words />
        </Route>
        <Route path="/">
          <Home list={list} setList={setList} dictonary={dictonary} />;
        </Route>
      </Switch>
    </>
  );
}

export default App;
