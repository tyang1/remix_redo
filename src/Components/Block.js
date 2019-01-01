import React, { Component } from "react";

class Block extends Component {
    render() {
    let checkSelected = this.props.selected.id === this.props.blockID;
    return (
      <div
        style={{
          position: "relative",
          height: "50",
          width: this.props.endTime - this.props.startTime,
          left: this.props.startTime,
          border: "solid 1px black",
          backgroundColor: checkSelected ? "#D3D3D3" : "white"
        }}
      >
        <p
          onClick={event => {
            // event.stopPropagation();
            console.log("in BLock", this.props.blockID)
            this.props.handleBlock(this.props.blockID);
          }}
        >
          {" "}
          {this.props.blockID}{" "}
        </p>
      </div>
    );
  }
}

export default Block;
