import Task, { tasks } from '../constructor.js';

// 88v
function swapMarginalDigits(num) {
        const numStr = num.toString();
        const result = numStr.slice(-1) + numStr.slice(1, -1) + numStr.slice(0, 1);
        return parseInt(result);
}

// 88h
function wrapByOne(num) {
        const result = '1'.concat(num, '1');
        return parseInt(result);
}

// 332
function findLagrangeNumbers(num) {
        const sqrtOfnum = Math.floor(Math.sqrt(num));
        for (let x = 1; x <= sqrtOfnum; x++) {
                for (let y = 1; y <= sqrtOfnum; y++) {
                        for (let z = 1; z <= sqrtOfnum; z++) {
                                for (let t = 1; t <= sqrtOfnum; t++) {
                                        if (x * x + y * y + z * z + t * t === num) {
                                                return `x= ${x}, y= ${y}, z= ${z}, t= ${t}`;
                                        }
                                }
                        }
                }
        }
        return 'These numbers were not found';
}

tasks.set('88v', new Task('Swap the first and last digits of number n. Enter n:', swapMarginalDigits));

tasks.set('88h', new Task('Add one at the beginning and the end of the number n. Enter n:', wrapByOne));

tasks.set(
        '332',
        new Task(
                'It is known that any natural number can be represented as a sum of not more than four ' +
                        "squares of natural numbers or, which is the same as the sum of four squares of non-negative integers (Langrange's " +
                        'theorem). Given a natural number n. Find the non-negative: x, y, z, t, where n = x*x + y*y +z*z + t*t. Enter n:',
                findLagrangeNumbers
        )
);
