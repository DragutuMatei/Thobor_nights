import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import GasesteLinkul from "./pages/GasesteLinkul";
import FindTheWords from "./pages/FindTheWords";
import Dif from "./pages/Dif";
import Sort from "./pages/Sort";
import Bin from "./pages/Bin";
import Coor from "./pages/Coor";
import Steaguri from "./pages/Steaguri";
import "./Style.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/GasesteLinkul" exact component={GasesteLinkul} />
          <Route path="/Steaguri" exact component={Steaguri} />
          <Route path="/Coor" exact component={Coor} />
          <Route path="/FindTheWords" exact component={FindTheWords} />
          <Route path="/Dif" exact component={Dif} />
          <Route path="/Bin" exact component={Bin} />
          <Route path="/Sort" exact component={Sort} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
