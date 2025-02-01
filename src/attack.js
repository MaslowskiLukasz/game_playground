import { animate } from "./animation";
import { SQUARE_SIZE } from "./constants";
import { sprites } from "./sprites";

const fireAnimation = {
  startFrame: 0,
  length: 3,
  speed: 10,
}

const AttackTypes = {
  fire: 'fire',
}
Object.freeze(AttackTypes);

const Attacks = {
  [AttackTypes.fire]: fireAnimation,
}
Object.freeze(Attacks);

const Attack = {
  position: {
    x: 0,
    y: 0
  },
  type: AttackTypes.fire,
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
      const { currentFrame, animationCount } =
        animate(
          Attacks[this.type].length,
          this.currentFrame,
          this.animationCount,
          Attacks[this.type].speed
        );
      this.currentFrame = currentFrame;
      this.animationCount = animationCount;

      ctx.drawImage(
        sprites.frog,
        this.currentFrame * SQUARE_SIZE,
        Attacks[this.type].startFrame,
        SQUARE_SIZE,
        SQUARE_SIZE,
        offsetX,
        offsetY,
        SQUARE_SIZE,
        SQUARE_SIZE
      );
    };

    if (this.currentFrame === 0 && this.animationCount === 0) {
      this.playAnimation = false;
    }
  }
}

export { Attack }
