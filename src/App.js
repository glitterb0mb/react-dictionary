import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="https://miro.medium.com/max/1400/0*-ATQ3-hGyZxfZqmo"
            alt="dicpic"
          ></img>
        </header>
        <Dictionary defaultKeyword="sunrise" />
        <div className="App-footer">
          <a href="https://github.com/glitterb0mb/react-dictionary">
            Coded by Sarah Davis
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
