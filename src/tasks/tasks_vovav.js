import Task, { tasks } from '../constructor.js';
// 182
function findData(args) {
        let i;
        let summ = 0;
        const numbers = [];
        for (i = 0; i < args.length; i++) {
                if (args[i] % 5 === 0 && args[i] % 7 !== 0) {
                        summ += args[i];
                        numbers.push(args[i]);
                }
        }

        return {
                summ,
                quantity: numbers.length,
        };
}

// 323
function findPrime(n) {
        const result = [];
        const isPrime = n => {
                if (n === 2) {
                        return true;
                }
                if (!Number.isInteger(n) || n < 2 || !(n % 2)) {
                        return false;
                }
                for (let i = 3; i < n; i++) {
                        if (n % i === 0) {
                                return false;
                        }
                }
                return true;
        };

        for (let i = 0; i < n; i++) {
                if (isPrime(i)) {
                        result.push(i);
                }
        }
        return result;
}

// 560

function findRange(x, y) {
        const findDeviders = n => {
                if (typeof n !== 'number' || n === '') {
                        throw new Error('argument must be an integer');
                }
                const deviders = [];
                for (let i = 0; i < n; i++) {
                        if (n % i === 0) {
                                deviders.push(i);
                        }
                }
                return deviders;
        };
        const obj = {};
        const sumObj = {};
        const resultObj = {};
        for (let i = x; i <= y; i++) {
                obj[i] = findDeviders(i);
        }
        for (const key in obj) {
                let res = 0;
                obj[key].forEach(item => {
                        res += item;
                });
                sumObj[key] = res;
        }
        for (let i = 200; i <= 300; i++) {
                for (const key in sumObj) {
                        if (i === sumObj[key]) {
                                resultObj[key] = sumObj[key];
                        }
                }
        }
        return resultObj;
}
tasks.set(
        '182',
        new Task(
                `Given the integer n, the integers a1,…, an. Find
      the number and sum of those members of a given sequence that
      are divisible by 5 and not divisible by 7. Enter integers  `,
                findData
        )
);

tasks.set('323', new Task(`Get all natural  numbers smaller than n and relatively simple to them. Enter n`, findPrime));

tasks.set(
        '560',
        new Task(
                `Two positive integers are called friendly if
             each of them is equal to the sum of all
       divisors of the other, except this number itself.
        Find all pairs of friendly numbers that range from
         200 to 300. Enter x,y`,
                findRange
        )
);
