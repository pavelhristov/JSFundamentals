/*globals console, module*/
function solve(args) {
    "use strict";
    let heights = args[0].split(' ').map(Number);
    let bestCount = -1;
    let count = 0;
    let current;
    let isDescending;

    current = heights[0];
    heights.push(-1);
    for (var i = 1; i < heights.length; i += 1) {
        let height = heights[i];
        if (isDescending) {
            //descent finished
            if (current < height) {
                isDescending = !isDescending;
            }
        } else {
            //ascending
            if (current > height) {
                bestCount = Math.max(bestCount, count);
                count = 0;
                isDescending = isDescending;
            }
        }
        count += 1;
        current = height;
    }

    // Your solution here 
    console.log(result);
}

function solve(args) {
    var heights = args[0].split(' ').map(Number);

    var peaks = [0];
    for (let i = 1; i < heights.length; i += 1) {
        if (isGreaterThanNeighBours(i, heights)) {
            peaks.push(i);
        }
    }
    peaks.push(heights.length - 1);

}

module.exports = solve;