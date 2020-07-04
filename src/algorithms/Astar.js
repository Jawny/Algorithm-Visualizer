function Astar(start, end, grid) {
  let openList = [];
  let closedList = [];
  let res = [];

  openList.push(start);

  while (openList.length > 0) {
    let lowInd = 0;
    for (let i = 0; i < openList.length; i++) {
      if (openList[i].f < openList[lowInd].f) {
        lowInd = i;
      }
    }
    let currNode = openList[lowInd];

    if (currNode === end) {
      let temp = currNode;
      res.push(temp);
      while (temp.previous) {
        res.push(temp.previous);
        temp = temp.previous;
      }
      return res;
    }

    let indexOfItemToRemove = openList.indexOf(currNode);
    openList.splice(indexOfItemToRemove, 1);
    closedList.push(currNode);

    let neighbours = getNeighbours(currNode, grid);

    for (let i = 0; i < neighbours.length; i++) {
      let neighbour = neighbours[i];
      if (!closedList.includes(neighbour)) {
        let tempG = currNode.g + 1;
        let newPath = false;
        if (openList.includes(neighbour)) {
          if (tempG < neighbour.g) {
            neighbour.g = tempG;
            newPath = true;
          } else {
            neighbour.g = tempG;
            newPath = true;
            openList.push(neighbour);
          }

          if (newPath) {
            neighbour.h = heruistic(neighbour, end);
            neighbour.f = neighbour.g + neighbour.h;
            neighbour.previous = currNode;
          }
        }
      }
    }
  }
}

function getNeighbours(node, grid) {
  let x = node.x;
  let y = node.y;
  let res = [];
  // add right neighbour
  if (x < grid[0].length - 1) {
    res.push(grid[x + 1][y]);
  }
  // add bottom neighbour
  if (y < grid.length - 1) {
    res.push(grid[x][y + 1]);
  }
  // add left neighbour
  if (x > 0) {
    res.push(grid[x - 1][y]);
  }
  // add top neighbour
  if (y > 0) {
    res.push(grid[x][y - 1]);
  }
  return res;
}

function heruistic(a, b) {
  let d = Math.abs(a.x - a.y) + Math.abs(b.x - b.y);
  return d;
}

export default Astar;
