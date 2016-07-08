/* globals console, module */

function solve(args) {
    "use strict";

    //input
    const rowcol = args[0].split(' ').map(Number),
        row = rowcol[0],
        col = rowcol[1];
    let matrix = [];
    for (let i = 1; i < args.length; i += 1) {
        matrix.push(args[i].split(' '));
    }
    //sorcery
    function getValue(row, col) {
        let result = Math.pow(2, row) + col;
        return result;
    }

    function nextCell(direction) {
        if (direction[0] === 'd') {
            i += 1;
        } else if (direction[0] === 'u') {
            i -= 1;
        }
        if (direction[1] === 'r') {
            j += 1;
        } else if (direction[1] === 'l') {
            j -= 1;
        }
    }

    let i = 0,
        j = 0,
        count = 0,
        destination = '';

    while (true) {
        count += getValue(i, j);
        destination = matrix[i][j];
        matrix[i][j] = false;

        nextCell(destination);

        if (i >= row || i < 0 || j >= col || j < 0) {
            console.log(`successed with ${count}`);
            break;
        }
        if (matrix[i][j] === false) {
            console.log(`failed at (${i}, ${j})`);
            break;
        }
    }
}


test1 = [
    '3 5',
    'dr dl dr ur ul',
    'dr dr ul ur ur',
    'dl dr ur dl ur'
];
test2 = [
    '3 5',
    'dr dl dl ur ul',
    'dr dr ul ul ur',
    'dl dr ur dl ur'
];

solve(test2);