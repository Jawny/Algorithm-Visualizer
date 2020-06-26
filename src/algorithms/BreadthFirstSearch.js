function BFS(node, grid) {
  let queue = [node];
  let visited = new Set();
  visited.add(node);
  let res = [];

  let curr;
  while (queue.length !== 0) {
    curr = queue.shift();
    res.push(curr);
    searchThroughNeighboursHelper(curr, grid, visited, queue);
  }
  return res;
}
function searchThroughNeighboursHelper(node, grid, visited, queue) {
  let x = node.x;
  let y = node.y;
  let rows = grid.length;
  let cols = grid[0].length;

  // add right neighbour
  if (x + 1 < cols && !visited.has(grid[x + 1][y])) {
    visited.add(grid[x + 1][y]);
    queue.push(grid[x + 1][y]);
  }
  // add bottom neighbour
  if (y + 1 < rows && !visited.has(grid[x][y + 1])) {
    visited.add(grid[x][y + 1]);
    queue.push(grid[x][y + 1]);
  }
  // add left neighbour
  if (x - 1 > 0 && !visited.has(grid[x - 1][y])) {
    visited.add(grid[x - 1][y]);
    queue.push(grid[x - 1][y]);
  }
  // add top neighbour
  if (y - 1 > 0 && !visited.has(grid[x][y - 1])) {
    visited.add(grid[x][y - 1]);
    queue.push(grid[x][y - 1]);
  }
}

export default BFS;
