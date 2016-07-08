/* globals console, module */

function solve(args) {
    "use strict";
    let word = args[0],
        text = args[1];

    function wordCount(word, text) {
        let index = -1,
            count = 0;

        do {
            index = text.indexOf(word, index + 1);
            count += 1;
        } while (index >= 0);
        return count - 1;
    }
    console.log(wordCount(word, text.toLowerCase()));
}

solve([
    'we',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);