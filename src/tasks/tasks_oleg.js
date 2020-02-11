import Task, { tasks } from '../constructor.js';

// ===================================== 178.1  ========================
function fiveAndThreeDivisible(n) {
        let k = 0;
        for (let i = 0; i < n; i++) {
                if (i % 3 === 0 && !i % 5 === 0) k++;
        }
        return k;
}

// ===================================== 178.2  ========================
function evenPowDecimals(n) {
        let k = 0;
        for (let i = 0; i < n; i++) {
                if (Math.sqrt(i) % 2 === 0) k++;
        }
        return k;
}

// ===============================   554  =====================

function pythagoreanTriplets(limit) {
        const pifArr = [];
        let c = 0;
        let m = 2;
        // Limit c will limit all - a, b and c
        while (c < limit) {
                // loop n from 1 to m
                // When m and n are any two positive integers (m > n):
                for (let n = 1; n < m; n++) {
                        let a = m * m - n * n;
                        let b = 2 * m * n;
                        if (a > b) [a, b] = [b, a];
                        c = m * m + n * n;
                        if (c <= limit) pifArr.push([a, b, c]);
                }
                m += 1;
        }
        // pifArr = pifArr.map(el => el.sort((a,b) => a-b));
        return pifArr;
}

tasks.set(
        '178a',
        new Task(
                'Is given a natural number n,  a1 ... an. Find the amount of ak in sequence, a 1 , ... , a n.  ' +
                        'If n is aliquot 3 and not aliquot 5 \n Enter n:',
                fiveAndThreeDivisible
        )
);

tasks.set(
        '178b',
        new Task(
                'Is given a natural number n,  a1 ... an. Find the amount of ak in sequence, a 1 , ... , a n. ' +
                        ' If n is square of even number  \n Enter n:',
                evenPowDecimals
        )
);

tasks.set(
        '554',
        new Task(
                'Is given a natural number n. Save all Pythagorean triplets\n' +
                        'of natural number, each of is not greater n, ' +
                        'all this triplets: a, b, c, should be  2 + b 2 = c 2 (a ≤ b ≤ c ≤ n).',
                pythagoreanTriplets
        )
);
