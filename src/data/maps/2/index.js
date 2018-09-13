const tiles = [
  [6, 6, 6, 6, 0, 7, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [6, 6, 6, 6, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 5, 5, 5, 2, 2, 2, 2, 2, 0, 0],
  [6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 5, 2, 5, 5, 5, 5, 0, 4],
  [6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5],
  [0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5],
  [0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 5, 5, 5, 5],
  [0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 5, 5, 5, 6],
  [0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 5, 6, 6],
  [6, 6, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 0, 0, 0, 6, 6, 6],
  [6, 6, 6, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 0, 0, 0, 0, 6, 6, 6],
  [6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
  [6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
];

const monsters = [
  {
    type: 'goblin',
    position: [ 7, 3 ]
  },
  {
    type: 'goblin',
    position: [ 5, 11 ]
  }
];

export default {
  tiles,
  monsters
};
