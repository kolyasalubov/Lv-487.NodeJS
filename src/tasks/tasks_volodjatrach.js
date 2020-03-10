import Task, { tasks } from '../constructor.js';

// 88a
const task88a = (n) =>  {
        const strNumber = Math.pow(n, 2).toString();
        if (strNumber.includes(3)) {
                return `YES! ${strNumber} includes 3`;
        }
        return `No ${strNumber} does not includes 3`;
}


// 88b
const task88b = (n) => {
        const strNumber = Math.pow(n, 2).toString();
        const reverse = strNumber
                .split('')
                .reverse()
                .join('');
        return reverse;
}


// 322
const findDividers = () =>{
        let maxLenght = 0;
        let number = 0;
        for (let n = 1; n <= 10000; n++) {
                const lengh = findLenght(n);
                if (lengh > maxLenght) {
                        maxLenght = lengh;
                        number = n;
                }
        }
        return `The number is ${number} and it has ${maxLenght} dividers`;
}

function findLenght(n) {
        const dil = [];
        for (let i = 1; i <= n; i++) {
                if (n % i === 0) {
                        dil.push(i);
                }
        }
        return dil.length;
}

tasks.set(
        '88a',
        new Task(
                "You have the natural number n. Find out if n to the power of 2 includes '3'. Please enter 'n'",
                task88a
        )
);

tasks.set(
        '88b',
        new Task("You have the natural number n. Reverse number n to the power of 2.Please enter 'n'", task88b)
);

tasks.set(
        '322',
        new Task('Find the natural number from 1 to 10 000 with the maximum amount of dividers', findDividers)
);

module.exports = { task88a, task88b, findDividers};