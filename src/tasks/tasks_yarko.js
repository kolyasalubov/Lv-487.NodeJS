import Task, { tasks } from '../constructor.js';

//108

function findNearestPowOfTwo(naturalNumber) {
  let n = 1;
  while (n < naturalNumber) {
    n *= 2;
  }
  return n;
}

//331a

function sumOfThreeSquares(num) {
  let sqrtOfnum = Math.floor(Math.sqrt(num));
  for (let x = 1; x <= sqrtOfnum; x++) {
    for (let y = 1; y <= sqrtOfnum; y++) {
      for (let z = 1; z <= sqrtOfnum; z++) {
        if (x * x + y * y + z * z === num) {
          return `x= ${x}, y= ${y}, z= ${z}`;
        }
      }
    }
  }
  return 'It is impossible to divide';
}

//331b

function sumOfThreeSquaresList(num) {
  let sqrtOfnum = Math.floor(Math.sqrt(num));
  let list = new Set();
  for (let x = 1; x <= sqrtOfnum; x++) {
    for (let y = 1; y <= sqrtOfnum; y++) {
      for (let z = 1; z <= sqrtOfnum; z++) {
        if (x * x + y * y + z * z === num) {
          list.add([x, y, z]);
          break;
        }
      }
    }
  }
  return list.size != 0 ? list : 'It is impossible to divide';
}

tasks.set(
  '108',
  new Task(
    `You are given a number “n”, find the next nearest number of second power.`,
    findNearestPowOfTwo
  )
);

tasks.set(
  '331a',
  new Task(
    `You are given a number “n”,  show this number as a sum of three squares.`,
    sumOfThreeSquares
  )
);

tasks.set(
  '331b',
  new Task(
    `You are given a number “n”,  show this number as sum of three squares. All combination.`,
    sumOfThreeSquaresList
  )
);

module.exports = {
  findNearestPowOfTwo,
  sumOfThreeSquares,
  sumOfThreeSquaresList,
};
