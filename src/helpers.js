import { WINDOW_WIDTH, NUMBER_OF_SQUARES, SQUARE_SIZE, GRASS_MAX, WATER_MAX } from "./constants";
import { sprites } from "./sprites";

/**
 * @param {number} square - grid value
 * @returns {HTMLImageElement}
 */
const getSquareImage = (square) => {
  if (square <= GRASS_MAX) {
    return sprites[`grass-${square}`];
  } else if (square > GRASS_MAX && square < WATER_MAX) {
    return sprites[`water-${square}`];
  }
  return sprites[`hole-${square}`];
}

const getOverSquareImage = (square) => {
  if (square > 0) {
    return sprites.bush;
  }
  return null;
}

/**
 * Check if point is outside of grid map
 * @param {number} value
  */
const checkOutOfBounds = (value) => {
  if (value < 0 || value + WINDOW_WIDTH > NUMBER_OF_SQUARES * SQUARE_SIZE) {
    return true;
  }
  return false;
}

/**
 * Check if player can move used for down, and right edge of canvas
  * @param {number} position
  * @returns {boolean}
  */
const checkInBoundWorld = (position) => {
  return position <= SQUARE_SIZE * (NUMBER_OF_SQUARES - 1) && position >= 0;
}

export { getSquareImage, getOverSquareImage, checkOutOfBounds, checkInBoundWorld };
