import React from "react";
import logo from "./logo.png";
import "./App.css";

import WorldClock from "./Components/WorldClock";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      timeZone: []
    }
  }

  addTimeZone(zone) {
    if (!this.state.timeZone.includes(zone)) {
      this.setState({
        timeZone: [...this.state.timeZone, zone]
      })
    } else {
      this.setState({
        timeZone: this.state.timeZone.filter((i) => { return i !== zone })
      });
    }
  }


  render() {
    // const clockData = [
    //   "America/Los_Angeles",
    //   "Europe/London",
    //   "Asia/Singapore",
    //   "Africa/Lagos"
    // ]
    const clickDemo = (e) => {
      this.addTimeZone(e.target.innerText)
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <select multiple>
            <option onClick={clickDemo} key="America/Los_Angeles">America/Los_Angeles</option>
            <option onClick={clickDemo} key="Europe/London">Europe/London</option>
            <option onClick={clickDemo} key="Asia/Singapore">Asia/Singapore</option>
            <option onClick={clickDemo} key="Africa/Lagos">Africa/Lagos</option>
          </select>
          <WorldClock clockData={this.state.timeZone}/>
        </header>
      </div>
    );
  }
}

export default App;
