import React, { Component } from "react";
import Block from "./Block";

const Bus = props => (
  <div
    style={{
      borderBottom: "1px solid #ccc",
      height: "50",
      margin: "1em 0",
      display: "flex",
    //   flexDirection: "row",
    }}
  >
    {props.tripID.map(block => (
        <Block
          handleBlock={props.handleBlock}
          selected={props.selected}
          blockID={block}
          startTime={props.tripList[block - 1].startTime}
          endTime={props.tripList[block - 1].endTime}
        />
    ))}
  </div>
);

export default Bus;
