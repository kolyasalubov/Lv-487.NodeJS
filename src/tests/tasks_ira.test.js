const { swapMarginalDigits, wrapByOne, findLagrangeNumbers} = require('../tasks/tasks_ira');

test('should return swapped first digit with the last digit of the number', ()=>{
  const number = swapMarginalDigits(123);
  expect(number).toBe(321)
});

test('should return number with added digit 1 in the begin and in the end', ()=>{
  const number = wrapByOne(555);
  expect(number).toBe(15551)
});

test('should return x,y,z,t where x*x + y*y + z*z + t*t equal number n', ()=>{
  const number = findLagrangeNumbers(4);
  expect(number).toBe("x= 1, y= 1, z= 1, t= 1")
});

test('should return "These numbers were not found" if x*x + y*y + z*z + t*t not equal number n', ()=>{
  const number = findLagrangeNumbers(1);
  expect(number).toBe("These numbers were not found")
});
