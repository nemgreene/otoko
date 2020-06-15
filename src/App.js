import React, { useState } from "react";
import logo from "./logo.png";
import brand from "./otoko.png";
import "./App.css";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Welcome from "./components/welcome";
import Otoko from "./components/otokoComponent";
import WaterTrade from "./components/watertradeComponent";
import Contact from "./components/contactComponent";
import Swag from "./components/swagComponent";
import Gallery from "./components/galleryComponent";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/otoko">
            <Otoko />
          </Route>
          <Route path="/watertrade">
            <WaterTrade />
          </Route>
          <Route path="/swag">
            <Swag />
          </Route>
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
