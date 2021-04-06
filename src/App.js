import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Side from "page/Side/Side";
import "./App.css";
import SideProfile from "component/SideProfile/SideProfile";
import Project from "page/Project/Project";
import Main from "page/Main/Main";

function App() {
  return (
    <Router>
      <div id="container">
        <Side />
        <SideProfile />
        <Route exact path="/" component={Main} />
        <Route path="/project" component={Project} />
      </div>
      
    </Router>
  );
}

export default App;
