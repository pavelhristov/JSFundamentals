/* globals console, module */

function solve(args) {
    "use strict";

    function bracketsCheck(str) {
        let bracketsCount = 0;
        let i = 0;
        while (bracketsCount >= 0) {
            if (str[i] === '(') {
                bracketsCount += 1;
            } else if (str[i] === ')') {
                bracketsCount -= 1;
            }
            if (i === str.length - 1) {
                if (bracketsCount === 0) {
                    return "Correct";
                }
            }
            i += 1;
        }
        return "Incorrect";
    }

    console.log(bracketsCheck(args[0]));
}

solve(['((a+b)/5-d)']);
solve([')(a+b))']);