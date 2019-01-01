import React, { Component } from "react";
import Bus from "./Bus";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {id:null},
    //   selected_box: null,
      tripList: [
        { id: 1, startTime: 30, endTime: 150 },
        { id: 2, startTime: 180, endTime: 300 },
        { id: 3, startTime: 330, endTime: 450 },
        { id: 4, startTime: 40, endTime: 130 },
        { id: 5, startTime: 160, endTime: 250 },
        { id: 6, startTime: 280, endTime: 370 },
        { id: 7, startTime: 400, endTime: 490 },
        { id: 8, startTime: 80, endTime: 240 },
        { id: 9, startTime: 280, endTime: 430 }
      ],
      busList: [
        { id: "A", trip: [1] },
        { id: "B", trip: [2] },
        { id: "C", trip: [3] },
        { id: "D", trip: [4] },
        { id: "E", trip: [5] },
        { id: "F", trip: [6] },
        { id: "G", trip: [7] },
        { id: "H", trip: [8] },
        { id: "I", trip: [9] }
      ]
    };
    this.handleBlock = this.handleBlock.bind(this);
    // this.handleBus = this.handleBus.bind(this);
  }
  handleBlock(tripID) {
    // e.preventDefault(); !! GETTING preventDefault undefined
    console.log("inside the handleBlock", tripID)
    this.setState({
        selected: {id: tripID}
    })
}

  render() {
    let eachBus = this.state.busList.map(bus => {
      if (bus.trip.length !== 0) {
        console.log("bus", bus);
        return (
          <Bus
            selected={this.state.selected}
            key={bus.id}
            tripID={bus.trip}
            tripList={this.state.tripList}
            handleBlock={this.handleBlock}
          />
        );
      }
    });
    return <div>{eachBus}</div>;
  }
}

export default Display;
