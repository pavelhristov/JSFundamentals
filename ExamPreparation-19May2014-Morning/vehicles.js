/* globals console, module */

function solve(args) {
    "use strict";
    const tires = Number(args[0]);
    let count = 0;

    for (let i = 0; i <= tires / 10; i += 1) {
        for (let j = 0; j <= tires / 4; j += 1) {
            for (let k = 0; k <= tires / 3; k += 1) {
                if ((i * 10 + j * 4 + k * 3) === tires) {
                    count += 1;
                }
            }
        }
    }

    console.log(count);
}

solve(['40']);