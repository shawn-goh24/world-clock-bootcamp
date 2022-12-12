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
    let {clockData} = this.props;

    return(
      <div>
        {clockData.map((data) =>
          <Clock timeZone={data.toString()}/>
        )}
      </div>
    )
  }
}