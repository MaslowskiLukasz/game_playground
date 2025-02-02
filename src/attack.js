import { animate } from "./animation";
import { SQUARE_SIZE } from "./constants";
import { sprites } from "./sprites";

/** @type {AttackAnimation} */
const fireAnimation = {
  startFrame: 0,
  length: 9,
  speed: 10,
  size: SQUARE_SIZE * 2,
  sprite: "fireAttack",
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
    const currentAttack = Attacks[this.type];
    const x = this.position.x - canvas.offsetLeft;
    const y = this.position.y - canvas.offsetTop;
    const offsetX = x - currentAttack.size / 2;
    const offsetY = y - currentAttack.size / 2;

    if (this.playAnimation) {
      const { currentFrame, animationCount } =
        animate(
          currentAttack.length,
          this.currentFrame,
          this.animationCount,
          currentAttack.speed
        );
      this.currentFrame = currentFrame;
      this.animationCount = animationCount;

      ctx.drawImage(
        sprites[currentAttack.sprite],
        this.currentFrame * currentAttack.size,
        currentAttack.startFrame,
        currentAttack.size,
        currentAttack.size,
        offsetX,
        offsetY,
        currentAttack.size,
        currentAttack.size,
      );
    };

    if (this.currentFrame === 0 && this.animationCount === 0) {
      this.playAnimation = false;
    }
  }
}

export { Attack }
