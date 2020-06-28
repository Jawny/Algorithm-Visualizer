function Astar(start, end, grid) {
  let openList = [];
  let closedList = [];
  let res = [];

  openList.append(start);

  while (openList.length > 0) {
    currentNode = openList[0];
    currentIndex = 0;

    for (let i = 0; i < openList.length; i++) {
      if (openList[i].f < currenNode.f) {
        currentNode = openList[i];
        currentIndex = i;
      }
    }
    openList.splice(openList.indexOf(currentIndex));
    closedList.push(currenNode);

    if (currentNode === end) {
      current = currentNode;
      while (current !== null) {
        res.append();
      }
    }
  }
}
