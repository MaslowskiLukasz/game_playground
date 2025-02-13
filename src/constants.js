const CAMERA_MODES = {
  still: "still",
  movingWindow: "movingWindow",
  gridMovingWindow: "gridMovingWindow",
  edgeWindow: "edgeWindow"
}

const GRASS_MAX = 9;
const WATER_MAX = 19;

/** @type (number) */
const NUMBER_OF_SQUARES = 16;
//** @type {number} */
const SQUARE_SIZE = 32;
/** @type (number) */
const WINDOW_SIZE = 7;
/** @type {number} */
const WINDOW_WIDTH = WINDOW_SIZE * SQUARE_SIZE;
const CAMERA_MODE = CAMERA_MODES.still;

const GRASS_COLOR = '#32c75c';
const WATER_COLOR = '#198ae1';
const HOLE_COLOR = '#131a36';
const PLAYER_COLOR = '#ed3b3b';
const ENEMY_COLOR = '#f0f';
const PATH_COLOR = '#0ff';

export {
  NUMBER_OF_SQUARES,
  SQUARE_SIZE,
  GRASS_COLOR,
  WATER_COLOR,
  HOLE_COLOR,
  PLAYER_COLOR,
  ENEMY_COLOR,
  PATH_COLOR,
  WINDOW_SIZE,
  WINDOW_WIDTH,
  CAMERA_MODE,
  CAMERA_MODES,
  GRASS_MAX,
  WATER_MAX,
}
