const { sumOfLastNumbers, multipleNumbers, mersennePrime } = require('./tasks_markiyan.js');

test('Should return sum of last digets of the numbers', () => {
    expect(sumOfLastNumbers(1023, 904)).toBe(7)
})

test('Should return all common natural multiples of two natural numbers', () => {
    expect(multipleNumbers(80, 20)).toEqual([2, 4, 5, 10])
})

test('Should return all Mersenne Primes, smaller then number', () => {
    expect(mersennePrime(1023)).toEqual([3, 7, 31, 127])
})