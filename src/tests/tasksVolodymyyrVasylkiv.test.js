// 182
const vova = require('../tasks/tasks_vovav');


test('should return sum and quantity ', () => {
expect(vova.findData(1,2,4,5,8,15,8,10).toString()).toBe({summ:30,quantity:3}.toString())    
})
test('should return sum and quantity ', () => {
expect(vova.findData(1,2,4,'',8,15,8,10).toString()).toBe({summ:30,quantity:3}.toString())    
})
test('should return sum and quantity ', () => {
expect(vova.findData(1,2,4,'str',8,15,8,10).toString()).toBe({summ:30,quantity:3}.toString())    
})


test('should return prime integers', () => {
    expect(vova.findPrime(10).toString()).toBe([2,3,5,7].toString());
});
test('should return prime integers', () => {
    expect(vova.findPrime('').toString()).toBe([].toString());
});
test('should return prime integers', () => {
    expect(vova.findPrime('str')).toStrictEqual([]);
});
test('should return prime integers', () => {
    expect(vova.findPrime([10])).toStrictEqual([2,3,5,7]);
});


test('should return  friendly numbers between 200 and 300', () => {
    expect(vova.findRange(200,300)).toStrictEqual({220:284,284:220})
})
test('should return  friendly numbers between 200 and 300', () => {
    expect(vova.findRange(100,400)).toStrictEqual({220:284,284:220})
})
