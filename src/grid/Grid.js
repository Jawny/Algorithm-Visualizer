import React, { useState, useEffect } from "react";
import Node from "../node/Node";
import "./Grid.css";
import BFS from "../algorithms/BreadthFirstSearch";
import DFS from "../algorithms/DepthFirstSearch";

const cols = 15;
const rows = 15;

const NODE_START_ROW = 0;
const NODE_START_COL = 0;
const NODE_END_ROW = 6;
const NODE_END_COL = 3;

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
  );
  return (
    <div className="grid">
      <h1> Grid </h1>
      {gridWithNode}
      <button
        className="BFS"
        onClick={() => {
          clearGrid();
          runAlgorithm(BFS(grid[NODE_START_ROW][NODE_START_COL], grid));
        }}
      >
        Breadth First Search
      </button>
      <button
        className="DFS"
        onClick={() => {
          clearGrid();
          runAlgorithm(DFS(grid[NODE_START_ROW][NODE_START_COL], grid));
        }}
      >
        {" "}
        Depth First Search
      </button>
      <button
        className="clear"
        onClick={() => {
          clearGrid();
        }}
      >
        Clear Grid
      </button>
    </div>
  );
};

export default Grid;
