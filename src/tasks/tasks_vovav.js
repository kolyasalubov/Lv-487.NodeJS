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
          if (typeof n !== "number" || n === "") {
            console.log("argument must be an integer");
          }
          let dividers = [];
          for (let i = 0; i < n; i++) {
            if (n % i === 0) {
              dividers.push(i);
            }
          }
          return dividers;
        };
      
        let obj = {};
        let sumObj = {};
        let resultObj = {};
      
        for (let i = x; i <= y; i++) {
          obj[i] = findDeviders(i);
        }
        for (let key in obj) {
          sumObj[key] = obj[key].reduce((sum, elem) => sum + elem);
        }
        let tempObj = { ...sumObj };
        for (let key in sumObj) {
          for (let item in tempObj)
            if (key == tempObj[item] && sumObj[key] == item) {
              resultObj[key] = +item;
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
module.exports = {findData, findPrime, findRange}