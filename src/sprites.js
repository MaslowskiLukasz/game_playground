const sprites = {};

const loadSprite = () => {
  const sprite = new Image();
  sprites['frog'] = sprite;
  sprite.src = '../assets/frog.png';
}

export { sprites, loadSprite };
