import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Visual from "./components/visual.js";

function App() {
  return (
    <div className="App">
      <h1 id="title">Birth and Death Rates</h1>
      <p className="content">
        Birth and Death rates are crucial to asseccing humanitys' progress and
        advancement. According to The United Nations Food and Agriculture
        Organization (FAO) estimates the world population will surpass 9.1
        billion by 2050, at which point agricultural systems will not be able to
        supply enough food to feed everyone. However, new research suggests the
        world could run out of food even sooner. If you look at our
        visualizations, you might find interesting trends or unexpected
        information.
      </p>
      <Visual></Visual>
    </div>
  );
}

export default App;
