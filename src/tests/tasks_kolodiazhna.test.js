const { findPower, sumOfSquares, sumOfSquares1 } = require('../tasks/tasks_kolodiazhna');

test('should return greatest integer k of number 10', ()=>{
    expect(findPower(10)).toBe('k = 1')
})
test('should return text "enter positive number"', ()=>{
    expect(findPower(-10)).toBe('enter positive number')
})
test('should return undefined if string leters income', ()=>{
    expect(findPower('a')).toBe(undefined);
})
test('should return undefined if nothing income', ()=>{
    expect(findPower()).toBe(undefined);
})



test('should return x = 4, y = 5 of number 41', ()=>{
    expect(sumOfSquares(41)).toBe('x = 4, y = 5');
})
test('should return undefined if string leters income', ()=>{
    expect(sumOfSquares('a')).toBe(undefined);
})
test('should return undefined if nothing income', ()=>{
    expect(sumOfSquares()).toBe(undefined);
})



test('should return x = 5, y = 4 of number 41', ()=>{
    expect(sumOfSquares1(41)).toBe('x = 5, y = 4');
})
test('should return undefined if string leters income', ()=>{
    expect(sumOfSquares1('a')).toBe(undefined);
})
test('should return undefined if nothing income', ()=>{
    expect(sumOfSquares1()).toBe(undefined);
})



