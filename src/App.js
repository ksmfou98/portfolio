import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom"
import Side from "./page/Side/Side";
import "./App.css"
import MainApp from "./page/Main/Main";

function App() {
  return (
    <Router>
      <Side />
      <Route exact path="/" component={MainApp} />
    </Router>
    
  );
}

export default App;
