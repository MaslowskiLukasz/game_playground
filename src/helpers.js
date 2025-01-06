import { GRASS_COLOR, WATER_COLOR, HOLE_COLOR, WINDOW_WIDTH, NUMBER_OF_SQUARES, SQUARE_SIZE } from "./constants";
/**
 * Converts number on tile map to color
 * @param {number} square
  */
const getSquareColor = (square) => {
  if (square === 0) {
    return GRASS_COLOR;
  } else if (square === 1) {
    return WATER_COLOR;
  }

  return HOLE_COLOR;
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

export { getSquareColor, checkOutOfBounds };
