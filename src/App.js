import React from "react";
import logo from "./logo.png";
import "./App.css";

import WorldClock from "./Components/WorldClock";

class App extends React.Component {
  render() {
    const clockData = [
      "America/Los_Angeles",
      "Europe/London",
      "Asia/Singapore",
      "Africa/Lagos"
    ]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <WorldClock clockData={clockData}/>
        </header>
      </div>
    );
  }
}

export default App;
