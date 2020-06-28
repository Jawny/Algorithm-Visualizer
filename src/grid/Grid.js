import React, { useState, useEffect } from "react";
import Node from "../node/Node";
import "./Grid.css";
import BFS from "../algorithms/BreadthFirstSearch";
import DFS from "../algorithms/DepthFirstSearch";

const cols = 20;
const rows = 20;

let NODE_START_ROW = 10;
let NODE_START_COL = 5;
let NODE_END_ROW = 10;
let NODE_END_COL = 19;

const Grid = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    createGrid();
  }, []);

  const createGrid = () => {
    const grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
      grid[i] = new Array(cols);
    }
    createSpot(grid);
    setGrid(grid);
  };

  const createSpot = (grid) => {
    let val = 0;
    // create spots
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i][j] = new Spot(i, j, val);
        val += 1;
      }
    }
  };

  // Spot constructor
  function Spot(i, j, val) {
    this.x = i;
    this.y = j;
    this.g = 0;
    this.h = 0;
    this.f = 0;
    this.val = val;
    this.isVisited = false;
    this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL;
    this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL;
  }

  // resultNodes = result steps to play back algorithm
  const runAlgorithm = (resultNodes) => {
    let interval = setInterval(function () {
      if (
        resultNodes[0] === grid[NODE_END_ROW][NODE_END_COL] ||
        resultNodes.length === 0
      ) {
        clearInterval(interval);
        return;
      }
      let curr = resultNodes.shift();

      let newGrid = [];

      for (let i = 0; i < grid.length; i++) {
        newGrid.push([]);
        for (let j = 0; j < grid[0].length; j++) {
          newGrid[i].push(0);
        }
      }

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          newGrid[i][j] = JSON.parse(JSON.stringify(grid[i][j]));
        }
      }

      if (!curr.isStart && !curr.isEnd) {
        grid[curr.x][curr.y].isVisited = true;
        newGrid[curr.x][curr.y].isVisited = true;
      }
      setGrid(newGrid);
    }, 50);
  };

  //clear the grid and reset it to default
  const clearGrid = () => {
    let newGrid = [];

    for (let i = 0; i < grid.length; i++) {
      newGrid.push([]);
      for (let j = 0; j < grid[0].length; j++) {
        newGrid[i].push(0);
      }
    }

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i][j].isVisited = false;
        newGrid[i][j] = JSON.parse(JSON.stringify(grid[i][j]));
      }
    }

    setGrid(newGrid);
  };

  // Create grid with nodes
  const gridWithNode = (
    <div className="d-inline-block">
      <div>
        {grid.map((rowOfSpots, rowIndex) => {
          return (
            <div key={rowIndex} className="row">
              {rowOfSpots.map((spot, spotIndex) => {
                // the line below this comment is same as the 3 commented lines below
                const { isStart, isEnd, isVisited } = spot;
                // const isStart = spot.isStart;
                // const isEnd = spot.isEnd;
                // const isVisited = spot.isVisited;
                return (
                  <Node
                    key={spotIndex}
                    isStart={isStart}
                    isEnd={isEnd}
                    isVisited={isVisited}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
  // Change start node Row position
  const handleStartChangeRow = (event) => {
    // Set current starting node to false
    grid[NODE_START_ROW][NODE_START_COL].isStart = false;
    // check if event value is valid
    if (event.target.value === "" || isNaN(event.target.value)) {
    } else {
      NODE_START_ROW = event.target.value;
    }
    // set new start row node
    grid[NODE_START_ROW][NODE_START_COL].isStart = true;
    deepCopyAndSetGridState(grid);
  };

  // Change start node Col position
  const handleStartChangeCol = (event) => {
    // Set current starting node to false
    grid[NODE_START_ROW][NODE_START_COL].isStart = false;
    // check if event value is valid
    if (event.target.value === "" || isNaN(event.target.value)) {
    } else {
      NODE_START_COL = event.target.value;
    }
    // set new start col node
    grid[NODE_START_ROW][NODE_START_COL].isStart = true;
    deepCopyAndSetGridState(grid);
  };
  // Change end node Row position
  const handleEndChangeRow = (event) => {
    // Set current starting node to false
    grid[NODE_END_ROW][NODE_END_COL].isEnd = false;
    // check if event value is valid
    if (event.target.value === "" || isNaN(event.target.value)) {
    } else {
      NODE_END_ROW = event.target.value;
    }
    // set new start row node
    grid[NODE_END_ROW][NODE_END_COL].isEnd = true;
    deepCopyAndSetGridState(grid);
  };
  // Change end node Col position
  const handleEndChangeCol = (event) => {
    // Set current end node to false
    grid[NODE_END_ROW][NODE_END_COL].isEnd = false;
    // check if event value is valid
    if (event.target.value === "" || isNaN(event.target.value)) {
    } else {
      NODE_END_COL = event.target.value;
    }
    // set new end col node
    grid[NODE_END_ROW][NODE_END_COL].isEnd = true;
    deepCopyAndSetGridState(grid);
  };

  const deepCopyAndSetGridState = (grid) => {
    let newGrid = [];
    for (let i = 0; i < grid.length; i++) {
      newGrid.push([]);
      for (let j = 0; j < grid[0].length; j++) {
        newGrid[i].push(0);
      }
    }

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        newGrid[i][j] = JSON.parse(JSON.stringify(grid[i][j]));
      }
    }
    setGrid(newGrid);
  };

  return (
    <div className="screen">
      <h1> Algorithm Visualizer </h1>
      <div>{gridWithNode}</div>
      <button
        className="btn btn-primary mr-1"
        onClick={() => {
          clearGrid();
          runAlgorithm(BFS(grid[NODE_START_ROW][NODE_START_COL], grid));
        }}
      >
        Breadth First Search
      </button>
      <button
        className="btn btn-primary mr-1"
        onClick={() => {
          clearGrid();
          runAlgorithm(DFS(grid[NODE_START_ROW][NODE_START_COL], grid));
        }}
      >
        {" "}
        Depth First Search
      </button>
      <button
        className="btn btn-primary mr-1"
        onClick={() => {
          clearGrid();
        }}
      >
        Clear Grid
      </button>
      <div>
        <div className="pull-left">
          <label>
            Start position
            {/* start node row */}
            <input
              type="text"
              placeholder="Start Node x-coord"
              name="x-coord"
              onChange={handleStartChangeRow}
            />
            {/* start node col */}
            <input
              type="text"
              placeholder="Start Node y-coord"
              name="y-coord"
              onChange={handleStartChangeCol}
            />
          </label>
        </div>
        <label>
          End Position
          {/* end node row */}
          <input
            type="text"
            placeholder="End Node x-coord"
            name="x-coord"
            onChange={handleEndChangeRow}
          />
          {/* end node col */}
          <input
            type="text"
            placeholder="End Node y-coord"
            name="y-coord"
            onChange={handleEndChangeCol}
          />
        </label>
      </div>
    </div>
  );
};

export default Grid;
