import Task, { tasks } from '../constructor.js';

// 86a
function numberLength(num) {
        const string = num.toString();
        return string.length;
}

// 86b
function digitsSum(num) {
        const arr = Array.from(String(num), Number);
        const result = arr.reduce((tot, item) => tot + item, 0);
        return result;
}

// 330
function isPerfect(num) {
        let tot = 0;
        for (let i = 1; i < num; i++) {
                if (num % i === 0) {
                        tot += i;
                }
        }
        if (tot === num) {
                return true;
        }
        return false;
}

function findPerfectNumbers(num) {
        const perfectNum = [];
        for (let i = num - 1; i > 0; i--) {
                const perfect = isPerfect(i);
                if (perfect) {
                        perfectNum.unshift(i);
                }
        }
        return perfectNum;
}

tasks.set('86a', new Task('How many digits in number n. Enter n:', numberLength));

tasks.set('86b', new Task('Sum of digits in number n. Enter n:', digitsSum));

tasks.set('330', new Task('Find all perfect numbers less than n. Enter n:', findPerfectNumbers));

module.exports = { numberLength, digitsSum, findPerfectNumbers };
