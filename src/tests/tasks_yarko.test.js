const {
  findNearestPowOfTwo,
  sumOfThreeSquares,
  sumOfThreeSquaresList,
} = require('../tasks/tasks_yarko');

test('should return nearest value of second power arg "16"', () => {
  const number = findNearestPowOfTwo(10);
  expect(number).toBe(16);
});

test('should return nearest value of second power arg "250"', () => {
  const number = findNearestPowOfTwo(250);
  expect(number).toBe(256);
});

test('should return nearest value of second power arg "0"', () => {
  const number = findNearestPowOfTwo(0);
  expect(number).toBe(1);
});

test('should return a string of three multipliers arg "50"', () => {
  expect(sumOfThreeSquares(50)).toBe('x= 3, y= 4, z= 5');
});

test('should return a string that number is impossible to divide  "100"', () => {
  expect(sumOfThreeSquares(100)).toBe('It is impossible to divide');
});

test('should return a string of three multipliers arg "50"', () => {
  const result = new Set([
    [3, 4, 5],
    [3, 5, 4],
    [4, 3, 5],
    [4, 5, 3],
    [5, 3, 4],
    [5, 4, 3],
  ]);
  expect(sumOfThreeSquaresList(50)).toEqual(result);
});

test('should return a string that number is impossible to divide  "60"', () => {
  expect(sumOfThreeSquaresList(60)).toBe('It is impossible to divide');
});
