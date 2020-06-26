import React from "react";
import "./Node.css";

const Node = ({ isStart, isEnd, isVisited }) => {
  let classes = "";
  if (isStart) {
    classes += "node-start";
  } else if (isEnd) {
    classes += "node-end";
  } else if (isVisited) {
    classes += "node-visited";
  }

  return <div className={`node ${classes}`}></div>;
};
export default Node;
