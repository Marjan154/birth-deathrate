import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Visual from "./components/visual.js";
import { HashRouter as Router, Route, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Navbar />
        <Route exact path="/" component={Visual} />
      </Router>
    </div>
  );
}

export default App;
