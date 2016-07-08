/* globals console, module */

function solve(args) {
    "use strict";

    function isPeak(array, index) {
        if (index === 0) {
            return false;
        } else if (index === array.length - 1) {
            return false;
        } else {
            if (array[index] > array[index + 1] && array[index] > array[index - 1]) {
                return true;
            } else {
                return false;
            }
        }
    }

    const valley = args[0].split(' ').map(Number);
    let pocketsSum = 0;

    for (let i = 1; i < valley.length - 1; i += 1) {
        if (isPeak(valley, i - 1) && isPeak(valley, i + 1)) {
            pocketsSum += valley[i];
        }
    }

    console.log(pocketsSum);
}

test1 = [
    "53 20 1 30 2 40 3 10 1"
];
test2 = [
    "53 20 1 30 30 2 40 3 10 1"
];
test3 = [
    "53 20 1 30 2 40 3 3 10 1"
];

solve(test1);