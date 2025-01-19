import { findPath } from "./pathFinding";
import { Player } from "./player";

class Node {
  /** @param {Position} position */
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

class Enemy {
  /** @param {Position} position */
  constructor(position) {
    this.position = position;
    this.speed = 1;
    this.path = [];
  }
  /**
   * Update position
   * @function changePosition
   * @memberOf Enemy#
   * @param {Position} position
  */
  changePosition(position) {
    /** @member {object} */
    this.position.x = position.x;
    this.position.y = position.y;
  };
  /** Find path to Player */
  findPath() {
    this.path = findPath(this.position, Player.gridPosition());
  };
  /** Get length of the path
   * @returns {number}
   */
  getPathLength() {
    return this.path.length;
  };
  /** Get position of the last element in path
   * @returns {Position}
  */
  getLastPathElementPosition() {
    return this.path[this.getPathLength() - 1].position;
  };
  /** Move to next element of the path and delete it from path */
  move() {
    if (this.getPathLength()) {
      this.changePosition(this.getLastPathElementPosition());
      this.path.shift();
    }
  };
  /** Find path and move enemy */
  updatePosition() {
    this.findPath();
    this.move();
  };
}

export { Node, Position, Enemy };
