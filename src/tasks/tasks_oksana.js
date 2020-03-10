import Task, { tasks } from '../constructor.js';

// ----------------------------------555------------------------------------------------//
function addRow(triangle) {
        const previous = triangle[triangle.length - 1];
        const newRow = [1];
        for (let i = 0; i < previous.length - 1; i++) {
                const current = previous[i];
                const next = previous[i + 1];
                newRow.push(current + next);
        }
        newRow.push(1);
        return triangle.push(newRow);
}
function pascalTriangle(numRows) {
        const triangle = [[1], [1, 1]];

        if (numRows === 0) {
                return [];
        }
        if (numRows == 1) {
                return [[1]];
        }
        if (numRows == 2) {
                return [[1], [1, 1]];
        }
        for (let i = 2; i < numRows; i++) {
                addRow(triangle);
        }

        return triangle;
}
// ----------------------------------178h------------------------------------------------//

function conditionH(firstNumber, secondNumber) {
        const arr = [];
        let count = 0;

        for (let i = firstNumber; i <= secondNumber; i++) {
                arr.push(i);
        }

        arr.forEach(currentValue => {
                if (currentValue > (currentValue - 1 + currentValue + 1) / 2) count++;
        });
        return count;
}

// ----------------------------------178d------------------------------------------------//
function factorial(n) {
        return n ? n * factorial(n - 1) : 1;
}
function conditionD(firstNumber, secondNumber) {
        const arr = [];
        let count = 0;
        for (let i = firstNumber; i <= secondNumber; i++) {
                arr.push(i);
        }
        arr.forEach(function callback(currentValue, index) {
                if (2 ** (index + 1) < currentValue && currentValue < factorial(index + 1)) {
                        count++;
                }
        });

        return count;
}

tasks.set(
        '555',
        new Task(
                "Pascal's triangle is a numerical triangle in which there are '1' on the edges, and each number inside is equal to the sum of the two standing above it in the next row from above.Given a natural number n. Get the first n lines of a Pascal's triangle.",
                pascalTriangle
        )
);

tasks.set(
        '178h',
        new Task(
                'Given natural number n, a1, ... ,an. Find the number (ak) of sequence members a1, ... ,an that satisfy the given conditions: ak<(ak-1 + ak+1)/2. Please write two numbers (a1 and an)',
                conditionH
        )
);
tasks.set(
        '178d',
        new Task(
                'Given natural number n, a1, ... ,an. Find the number (ak) of sequence members a1, ... ,an that satisfy the given conditions: 2**k<ak<k!. Please write two numbers (a1 and an)',
                conditionD
        )
);
