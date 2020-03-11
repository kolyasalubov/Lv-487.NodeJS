const { sumOfLastNumbers, multipleNumbers, mersennePrime } = require('./tasks_markiyan.js');

test('Should return sum of last digets of the numbers. 1023 and 904 result must be 7', () => {
    expect(sumOfLastNumbers(1023, 904)).toBe(7)
})

test('Should return sum of last digets of the numbers. 970 and 30 result must be 0', () => {
    expect(sumOfLastNumbers(970, 30)).toBe(0)
})

test('Should return sum of last digets of the numbers. 2311 and 579 result must be 10', () => {
    expect(sumOfLastNumbers(2311, 579)).toBe(10)
})

test('Should return all common natural multiples of two natural numbers. 80 and 20 must return [2, 4, 5, 10]', () => {
    expect(multipleNumbers(80, 20)).toEqual([2, 4, 5, 10])
})

test('Should return all common natural multiples of two natural numbers. 28 and 36 must return [2, 4]', () => {
    expect(multipleNumbers(28, 36)).toEqual([2, 4])
})

test('Should return all common natural multiples of two natural numbers. 37 and 52 must return []', () => {
    expect(multipleNumbers(37, 52)).toEqual([])
})

test('Should return all Mersenne Primes, smaller then number', () => {
    expect(mersennePrime(1023)).toEqual([3, 7, 31, 127])
})

test('Should return all Mersenne Primes, smaller then number', () => {
    expect(mersennePrime(2147483650)).toEqual([
        3,
        7,
        31,
        127,
        8191,
        131071,
        524287,
        2147483647
    ])
})

test('Should return all Mersenne Primes, smaller then number', () => {
    expect(mersennePrime(9)).toEqual([3, 7])
})