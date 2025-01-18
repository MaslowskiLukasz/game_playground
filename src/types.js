/**
 * @typedef Node
 * @type {object}
 * @property {Node} parent
 * @property {number} distanceFromStart
 */
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

/**
 * @typedef Position
 * @type {object}
 * @property {number} x
 * @property {number} y
 */
class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export { Node, Position };
