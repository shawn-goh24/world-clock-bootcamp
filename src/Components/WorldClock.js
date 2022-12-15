import React from "react";

import Clock from "./Clock";

export default class WorldClock extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     test: 0
  //   }
  // }

  componentDidUpdate() {
    console.log("Hello")
  }

  render() {
    let {clockData} = this.props;
    console.log(clockData)

    return(
      <div>
        {clockData.map((data) =>
          <Clock timeZone={data.toString()}/>
        )}
      </div>
    )
  }
}