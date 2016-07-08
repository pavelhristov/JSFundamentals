/* globals console */

function solve(args) {
    "use strict";

    function reverse(str) {
        let chars = str.split(''),
            result = '';
        for (let i = chars.length - 1; i >= 0; i -= 1) {
            result += chars[i];
        }
        return result;
    }

    console.log(reverse(args[0]));
}

solve(['sample']);