/**
 * @param {number} currentFrame
 * @param {number} numberOfColumns
 * @returns {number}
 */
const changeCurrentFrame = (currentFrame, numberOfFrames) => {
  currentFrame = currentFrame + 1;
  if (currentFrame >= numberOfFrames) {
    currentFrame = 0;
  }
  return currentFrame;
}

/**
 * @param {number} numberOfColumns
 * @param {number} currentFrame
 * @param {number} animationCount
 * @param {number} animationSpeed
 * @returns {Animation}
 */
const animate = (numberOfFrames, currentFrame, animationCount, animationSpeed = 10) => {
  animationCount = animationCount + 1;
  if (animationCount > animationSpeed) {
    currentFrame = changeCurrentFrame(currentFrame, numberOfFrames);
    animationCount = 0;
  }

  return {
    currentFrame,
    animationCount,
  }
}

export { animate };
