import { resetMovementState, movementState } from "./controls";

const Player = {
  position: {
    x: 0,
    y: 0
  },
  speed: 4,
  updatePosition() {
    if (movementState.UP) {
      Player.position.y -= Player.speed;
    }
    if (movementState.DOWN) {
      Player.position.y += Player.speed;
    }

    if (movementState.LEFT) {
      Player.position.x -= Player.speed;
    }
    if (movementState.RIGHT) {
      Player.position.x += Player.speed;
    }
    resetMovementState();
  }
}

export { Player };
