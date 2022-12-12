import React from "react";

import Clock from "./Clock";

export default class WorldClock extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      numberOfClock: 0
    }
  }

  render() {
    return(
      <div>
        <Clock timeZone="America/Los_Angeles"/>
        <Clock timeZone="Europe/London"/>
        <Clock timeZone="Asia/Singapore"/>
      </div>
    )
  }
}