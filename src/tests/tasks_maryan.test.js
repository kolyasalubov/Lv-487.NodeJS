const { numberLength, digitsSum, findPerfectNumbers } = require('../tasks/tasks_maryan');


test('should return number of digits in "1234" ', () => {
    const number = numberLength(1234);
    expect(number).toBe(4);
})

test('should return number of digits in "9" ', () => {
    const number = numberLength(9);
    expect(number).toBe(1);
})

test('should return number of digits in "729010" ', () => {
    const number = numberLength(729010);
    expect(number).toBe(6);
})

test('should return sum of digits in "729010" ', () => {
    const number = digitsSum(729010);
    expect(number).toBe(19);
})

test('should return sum of digits in "751" ', () => {
    const number = digitsSum(751);
    expect(number).toBe(13);
})

test('should return sum of digits in "1" ', () => {
    const number = digitsSum(1);
    expect(number).toBe(1);
})

test('should return all perfect numbers below "12" ', () => {
    const number = findPerfectNumbers(12);
    expect(number).toContain(6);
})

test('should return all perfect numbers below "29" ', () => {
    const number = findPerfectNumbers(29);
    expect(number).toContain(6, 28);
})

test('should return all perfect numbers below "9999" ', () => {
    const number = findPerfectNumbers(9999);
    expect(number).toContain(6, 28, 496, 8128);
})


