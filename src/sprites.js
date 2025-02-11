const sprites = {};

const listOfSprites = [
  {
    name: 'frog',
    src: '../assets/test.png',
  },
  {
    name: 'fireAttack',
    src: '../assets/fire.png',
  },
  {
    name: 'grass-0',
    src: '../assets/grass-0.png',
  },
  {
    name: 'grass-1',
    src: '../assets/grass-1.png',
  },
  {
    name: 'grass-2',
    src: '../assets/grass-2.png',
  },
  {
    name: 'grass-3',
    src: '../assets/grass-3.png',
  },
  {
    name: 'grass-4',
    src: '../assets/grass-4.png',
  },
  {
    name: 'grass-5',
    src: '../assets/grass-5.png',
  },
  {
    name: 'water-10',
    src: '../assets/water-10.png',
  },
  {
    name: 'water-11',
    src: '../assets/water-11.png',
  },
  {
    name: 'water-12',
    src: '../assets/water-12.png',
  },
  {
    name: 'water-13',
    src: '../assets/water-13.png',
  },
  {
    name: 'water-14',
    src: '../assets/water-14.png',
  },
  {
    name: 'water-15',
    src: '../assets/water-15.png',
  },
  {
    name: 'hole-20',
    src: '../assets/hole-20.png',
  },
  {
    name: 'hole-21',
    src: '../assets/hole-21.png',
  },
  {
    name: 'hole-22',
    src: '../assets/hole-22.png',
  },
  {
    name: 'hole-23',
    src: '../assets/hole-23.png',
  },
  {
    name: 'hole-24',
    src: '../assets/hole-24.png',
  },
  {
    name: 'hole-25',
    src: '../assets/hole-25.png',
  },
  {
    name: 'hole-26',
    src: '../assets/hole-26.png',
  },
  {
    name: 'hole-27',
    src: '../assets/hole-27.png',
  },
  {
    name: 'hole-28',
    src: '../assets/hole-28.png',
  },
  {
    name: 'hole-29',
    src: '../assets/hole-29.png',
  },
  {
    name: 'hole-30',
    src: '../assets/hole-30.png',
  },
  {
    name: 'bush',
    src: '../assets/bush.png',
  },
]

const loadSprite = () => {
  for (let sprite of listOfSprites) {
    const img = new Image();
    img.src = sprite.src;
    sprites[sprite.name] = img;
  }
}

export { sprites, loadSprite };
