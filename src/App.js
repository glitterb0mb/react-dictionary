import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="https://cdn.dribbble.com/users/788099/screenshots/16734162/media/25c35cfff9374783ad60cbf6b4fb646d.jpg?compress=1&resize=400x300&vertical=top"
            alt="girlcoding"
          ></img>
        </header>
        <Dictionary />
        <div className="App-footer">Coded by Sarah Davis</div>
      </div>
    </div>
  );
}

export default App;
