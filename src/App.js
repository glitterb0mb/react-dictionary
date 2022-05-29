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
        <Dictionary />
        <div className="App-footer">Coded by Sarah Davis</div>
      </div>
    </div>
  );
}

export default App;
