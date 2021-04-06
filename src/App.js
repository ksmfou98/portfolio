import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Side from "page/Side/Side";
import "./App.css";
import SideProfile from "component/SideProfile/SideProfile";
import Main from "page/Main/Main";
import Project from "page/Project/Project";


function App() {
  return (
    <Router>
      <div id="container">
        <Switch>

          <Route exact path="/">
            <Side />
            <Main />
          </Route>
          <Route path="/project">
            <Project />
            <Side />
            <SideProfile />
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
