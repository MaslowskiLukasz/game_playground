import { animate } from "./animation";
import { SQUARE_SIZE } from "./constants";
import { sprites } from "./sprites";

const fireAnimation = {
  startFrame: 0,
  length: 3,
  speed: 10,
}

const AttackTypes = {
  fire: fireAnimation,
}
Object.freeze(AttackTypes);

const Attack = {
  position: {
    x: 0,
    y: 0
  },
  type: 'fire',
  animationCount: 0,
  currentFrame: 0,
  playAnimation: true,
  /** @param {MouseEvent} event */
  setPosition(event) {
    const { clientX, clientY } = event;
    this.position.x = clientX;
    this.position.y = clientY;
  },
  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    const x = this.position.x - canvas.offsetLeft;
    const y = this.position.y - canvas.offsetTop;
    const offsetX = x - SQUARE_SIZE / 2;
    const offsetY = y - SQUARE_SIZE / 2;

    if (this.playAnimation) {
      console.log(`current frame ${this.currentFrame}`);
      console.log('is playing');
      const { currentFrame, animationCount } =
        animate(
          AttackTypes[this.type].length,
          this.currentFrame,
          this.animationCount,
          AttackTypes[this.type].speed
        );
      this.currentFrame = currentFrame;
      this.animationCount = animationCount;
      console.log(`currentFrame ${currentFrame}`);
      console.log(`this.currentFrame ${this.currentFrame}`);

      ctx.drawImage(
        sprites.frog,
        this.currentFrame * SQUARE_SIZE,
        AttackTypes[this.type].startFrame,
        SQUARE_SIZE,
        SQUARE_SIZE,
        offsetX,
        offsetY,
        SQUARE_SIZE,
        SQUARE_SIZE
      );
    };
    console.log(`current frame ${this.currentFrame}`);

    if (this.currentFrame === 0 && this.animationCount === 0) {
      this.playAnimation = false;
    }
  }
}

export { Attack }
