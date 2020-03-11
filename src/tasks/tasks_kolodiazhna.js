import Task, { tasks } from '../constructor.js';

// 107
function findPower(m) {
        if (m > 0){
            let k = 0;
            while (4 ** k < m) {
                ++k
            }
            return `k = ${k-1}`;
        } else if (m < 0) {
            return('enter positive number')
        }
    
    }
    

// 243a
function sumOfSquares(n) {
        const n1 = Math.floor(Math.sqrt(n));
    
        for (let x = 1; x <= n1; x++) {
            for (let y = 1; y <= n1; y++) {
                if (x ** 2 + y ** 2 === n) {
                    return `x = ${x}, y = ${y}`;
                } 
            }
        }
    }

// 342b
function sumOfSquares1(n) {
        const n1 = Math.floor(Math.sqrt(n));

        for (let x = 1; x <= n1; x++) {
                for (let y = 1; y <= n1; y++) {
                        if (x ** 2 + y ** 2 === n) {
                                if (x >= y) {
                                        return `x = ${x}, y = ${y}`;
                                }
                        }
                }
        }
}


tasks.set('107', new Task('Get the greatest integer k, where 4^k < m. Please enter number m : ', findPower));

tasks.set('243a', new Task('n = x^2 + y^2. We can find x, y. Please print n', sumOfSquares));

tasks.set('243b', new Task('n = x^2 + y^2. We can find x, y , where x >= y. Please print n', sumOfSquares1));


module.exports = { findPower, sumOfSquares, sumOfSquares1 }