import { findPath } from "./pathFinding";
import { Player } from "./player";

const Enemy = {
  position: {
    x: 15,
    y: 15
  },
  speed: 1,
  path: [],
  changePosition(position) {
    this.position.x = position.x;
    this.position.y = position.y;
  },
  findPath() {
    this.path = findPath(this.position, Player.gridPosition());
  },
  getPathLength() {
    return this.path.length;
  },
  getLastPathElementPosition() {
    return this.path[this.getPathLength() - 1].position;
  },
  move() {
    if (this.getPathLength()) {
      this.changePosition(this.getLastPathElementPosition());
      this.path.shift();
    }
  }
}

export { Enemy };
