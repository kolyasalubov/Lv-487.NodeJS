import Task, { tasks } from '../constructor.js';

// 87

function sumOfLastNumbers(m, n) {
        return [m, n].reduce((sum, el) => sum + +String(el).slice(-1), 0);
}

// 226

function multipleNumbers(m, n) {
        const result = [];
        for (let i = 2; i < m && i < n; i++) {
                if (m % i === 0 && n % i === 0) {
                        result.push(i);
                }
        }
        return result;
}

// 559

function mersennePrime(number) {
        const mersennePrimeNumbers = [
                3,
                7,
                31,
                127,
                8191,
                131071,
                524287,
                2147483647,
                2305843009213693951,
                618970019642690137449562111,
                162259276829213363391578010288127,
                170141183460469231731687303715884105727,
        ];
        return mersennePrimeNumbers.filter(el => el < number);
}

tasks.set(
        '87',
        new Task(
                `Natural numbers n, m are given. Find the sum of the last digits of the numbers n and m. 
                Please provide 2 arguments.`,
                sumOfLastNumbers
        )
);

tasks.set(
        '226',
        new Task(
                `Natural numbers m, n are given. Find all their natural common multiples, smaller mn. 
        Please provide 2 arguments.`,
                multipleNumbers
        )
);
tasks.set(
        '559',
        new Task(
                `Natural number n is given. Find al Mersenne Primes smaller then n.
                Please provide 1 argument`,
                mersennePrime
        )
);