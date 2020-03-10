const { task88b, task88a, findDividers } = require('../tasks/tasks_volodjatrach');

test('should return reversed number arg "5"', ()=>{
    const number = task88b(5);
    expect(number).toBe('52')
})
test('should return reversed number arg "-5"', ()=>{
    const number = task88b(-5);
    expect(number).toBe('52')
})
test('should return NaN if nothing string leters income', ()=>{
    expect(task88b('a')).toBe("NaN");
})
test('should return NaN if nothing income', ()=>{
    expect(task88b()).toBe("NaN");
})

test('should return text if number includes 3, arg "555"', ()=>{
    const number = task88a(555);
    expect(number).toBe('YES! 308025 includes 3')
})

test('should return text if number includes 3, arg "-555"', ()=>{
    const number = task88a(-555);
    expect(number).toBe('YES! 308025 includes 3')
})
test('should return text if number includes 3, arg "123"', ()=>{
    const number = task88a(123);
    expect(number).toBe('No 15129 does not includes 3')
})

test('should return NaN if nothing income', ()=>{
    const number = task88a();
    expect(number).toBe('No NaN does not includes 3')
})
test('should allways return text with 7560 and 64 ', ()=>{
    const number = findDividers();
    expect(number).toBe('The number is 7560 and it has 64 dividers')
})
