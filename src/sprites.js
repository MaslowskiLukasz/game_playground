const sprites = {};

const loadSprite = () => {
  const sprite = new Image();
  sprites['frog'] = sprite;
  // sprite.src = '../assets/frog.png';
  // sprite.src = '../assets/frog_sheet.png';
  sprite.src = '../assets/test.png';
}

export { sprites, loadSprite };
