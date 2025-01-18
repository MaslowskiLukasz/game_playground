import { NUMBER_OF_SQUARES, PATH_COLOR } from "./constants";
import { gridState } from "./grid";
import { ctx } from "./render";
import { SQUARE_SIZE } from "./constants";

class Node {
  constructor(position) {
    this.parent = {};
    this.distanceFromStart = 0;
    this.distanceFromTarget = 0;
    this.pathFindingValue = 0;
    this.position = position;
  }
  updatePathFindingValue() {
    this.pathFindingValue = this.distanceFromTarget + this.distanceFromStart;
  }
}

const calculateDistance = (currentPosition, targetPosition) => {
  return Math.abs(targetPosition.x - currentPosition.x) + Math.abs(targetPosition.y - currentPosition.y);
}

/**
 * Get sibling squares, not diagonal
 */

const getSiblingNodes = (node) => {
  const results = [];
  const { x, y } = node.position;

  if (x > 0 && gridState[y][x - 1] === 0) {
    results.push(new Node({ x: x - 1, y }));
  }
  if (x < NUMBER_OF_SQUARES - 1 && gridState[y][x + 1] === 0) {
    results.push(new Node({ x: x + 1, y }));
  }
  if (y > 0 && gridState[y - 1][x] === 0) {
    results.push(new Node({ x, y: y - 1 }));
  }
  if (y < NUMBER_OF_SQUARES - 1 && gridState[y + 1][x] === 0) {
    results.push(new Node({ x, y: y + 1 }));
  }
  return results;
}

const isNodeInArray = (node, arr) => {
  const isInArray = arr.find((e) => {
    return e.position.x === node.position.x && e.position.y === node.position.y
  })
  return isInArray;
}

const isTargetPosition = (node, targetPosition) => {
  return node.position.x === targetPosition.x && node.position.y === targetPosition.y;
}

const retracePath = (start, end) => {
  const path = [];
  let currentNode = { ...end };

  while (!(currentNode.position.x === start.position.x && currentNode.position.y === start.position.y)) {
    path.push((currentNode));
    currentNode = { ...currentNode.parent };
  }

  return path;
}

/**
 * Get best path: startPosition, targetPosition {x,y}
 */
const findPath = (startPosition, targetPosition) => {
  const startNode = new Node(startPosition);
  let open = [startNode];
  const closed = [];

  while (open.length) {
    open = open.toSorted((a, b) => a.pathFindingValue - b.pathFindingValue);
    const bestNode = open.shift();
    closed.push(bestNode);
    if (isTargetPosition(bestNode, targetPosition)) {
      const path = retracePath(startNode, bestNode);
      return path;
    }
    const siblings = getSiblingNodes(bestNode);
    for (let siblingNode of siblings) {
      if (isNodeInArray(siblingNode, closed)) {
        continue;
      }

      const newMovementCost = bestNode.distanceFromStart + 1;
      if (newMovementCost < siblingNode.distanceFromStart || !isNodeInArray(siblingNode, open)) {
        siblingNode.distanceFromStart = newMovementCost;
        siblingNode.distanceFromTarget = calculateDistance(siblingNode.position, targetPosition);
        siblingNode.updatePathFindingValue();
        siblingNode.parent = { ...bestNode };
      }

      if (!isNodeInArray(siblingNode, open)) {
        open.push((siblingNode));
      }
    }
  }
}

const draw = (arr) => {
  for (let node of arr) {
    ctx.fillStyle = PATH_COLOR;
    ctx.fillRect(node.position.x * SQUARE_SIZE, node.position.y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
  }
}

export { findPath, draw };
