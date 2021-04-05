import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Side from "page/Side/Side";
import "./App.css";
import SideProfile from "component/SideProfile/SideProfile";
import Project from "page/Project/Project";

function App() {
  return (
    <Router>
      <Side />
      <SideProfile />
      <div id="container">
        <Route exact path="/" component={Project} />
      </div>
      
    </Router>
  );
}

export default App;
