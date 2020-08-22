import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello I'm Anh Do</p>
        <a
          className="App-link"
          href="https://www.facebook.com/me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My facebook
        </a>
      </header>
    </div>
  );
}

export default App;
