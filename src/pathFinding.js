import { GRASS_MAX, NUMBER_OF_SQUARES, PATH_COLOR } from "./constants";
import { gridState } from "./grid";
import { ctx } from "./render";
import { SQUARE_SIZE } from "./constants";
import { Node, Position } from "./types";

/**
 * Calculate distance between two grid positions (x,y)
 * @param {Position} currentPosition
 * @param {Position} targetPosition
 * @returns {number}
 */
const calculateDistance = (currentPosition, targetPosition) => {
  return Math.abs(targetPosition.x - currentPosition.x) + Math.abs(targetPosition.y - currentPosition.y);
}

/**
 * Get sibling squares, not diagonal
 * @param {Node} node
 */
const getSiblingNodes = (node) => {
  const results = [];
  const { x, y } = node.position;

  if (x > 0 && gridState[y][x - 1] <= GRASS_MAX) {
    results.push(new Node({ x: x - 1, y }));
  }
  if (x < NUMBER_OF_SQUARES - 1 && gridState[y][x + 1] <= GRASS_MAX) {
    results.push(new Node({ x: x + 1, y }));
  }
  if (y > 0 && gridState[y - 1][x] <= GRASS_MAX) {
    results.push(new Node({ x, y: y - 1 }));
  }
  if (y < NUMBER_OF_SQUARES - 1 && gridState[y + 1][x] <= GRASS_MAX) {
    results.push(new Node({ x, y: y + 1 }));
  }
  return results;
}

/** Checks if node exists in array
 * @param {Node} node
 * @param {Array} arr Array to check
 * @returns {boolean}
 */
const isNodeInArray = (node, arr) => {
  const isInArray = arr.find((e) => {
    return e.position.x === node.position.x && e.position.y === node.position.y
  })
  return isInArray;
}

/**
 * Checks if node is target position
 * @param {Node} node
 * @param {Position} targetPosition
 * @returns {boolean}
 */
const isTargetPosition = (node, targetPosition) => {
  return node.position.x === targetPosition.x && node.position.y === targetPosition.y;
}

/**
 * Get path from algorithm results
 * @param {Node} start
 * @param {Node} end
 * @returns {Node[]}
 */
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
 * Find shortest path between two positions
 * @param {Position} startPosition
 * @param {Position} targetPosition
 * @returns {(Node|null)}
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
  return null;
}

/**
 * Draw path
 * @param {Node[]} arr
 */
const draw = (arr) => {
  for (let node of arr) {
    ctx.fillStyle = PATH_COLOR;
    ctx.fillRect(node.position.x * SQUARE_SIZE, node.position.y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
  }
}

export { findPath, draw };
