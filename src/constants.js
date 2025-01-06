const CAMERA_MODES = {
  still: "still",
  movingWindow: "movingWindow",
  gridMovingWindow: "gridMovingWindow",
  edgeWindow: "edgeWindow"
}

/** @type (number) */
const NUMBER_OF_SQUARES = 16;
//** @type {number} */
const SQUARE_SIZE = 16;
/** @type (number) */
const WINDOW_SIZE = 7;
/** @type {number} */
const WINDOW_WIDTH = WINDOW_SIZE * SQUARE_SIZE;
const CAMERA_MODE = CAMERA_MODES.movingWindow;

const GRASS_COLOR = '#32c75c';
const WATER_COLOR = '#198ae1';
const HOLE_COLOR = '#131a36';
const PLAYER_COLOR = '#ed3b3b';

export {
  NUMBER_OF_SQUARES,
  SQUARE_SIZE,
  GRASS_COLOR,
  WATER_COLOR,
  HOLE_COLOR,
  PLAYER_COLOR,
  WINDOW_SIZE,
  WINDOW_WIDTH,
  CAMERA_MODE,
  CAMERA_MODES
}
