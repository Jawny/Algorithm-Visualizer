function DFS(node, grid) {
  let visited = new Set();
  let res = [];

  searchThroughNeighboursHelper(grid, res, visited, node.x, node.y);
  return res;
}

function searchThroughNeighboursHelper(grid, res, visited, i, j) {
  console.log("function ran");
  if (
    i >= 0 &&
    j >= 0 &&
    i < grid.length &&
    j < grid[0].length &&
    !visited.has(grid[i][j])
  ) {
    visited.add(grid[i][j]);
    res.push(grid[i][j]);
    searchThroughNeighboursHelper(grid, res, visited, i + 1, j);
    searchThroughNeighboursHelper(grid, res, visited, i - 1, j);
    searchThroughNeighboursHelper(grid, res, visited, i, j + 1);
    searchThroughNeighboursHelper(grid, res, visited, i, j - 1);
  }
}

export default DFS;
