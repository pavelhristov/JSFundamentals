/* globals console, module */

function solve(args) {
    "use strict";

    let enumRegex = /<.+>/;
    let elementsRegex = /^\s/;
    let enums,
        shared,
        count = 0,
        sharedCount = 0,
        result = {};

    args.forEach(function(element) {
        if (enumRegex.test(element)) {
            let current = element;
            current = current.replace('<', '').replace('>', '');
            if (current[0] === '@') {
                enums = current.replace('@', '');
                count = sharedCount;
                shared = true;
            } else {
                enums = current;
                if (shared) {
                    sharedCount += count;
                }
                count = 0;
                shared = false;
            }
        }
        if (elementsRegex.test(element)) {
            let current = element.trim();
            current = current.substring(0, current.length - 1)
                .split(' = ');
            if (current[1] === undefined) {
                current[1] = count;
            }
            result[current[0]] = [current[1], enums];

            count += 1;
        }
    });

    const ordered = {};
    Object.keys(result).sort().forEach(function(key) {
        ordered[key] = result[key];
    });

    for (let key in ordered) {
        if (ordered.hasOwnProperty(key))
            console.log(`${key} = ${ordered[key][0]} :: ${ordered[key][1]};`);
    }
}
let test1 = [
    '<Fruit>',
    '  Apple;',
    '  Banana;',
    '  Pineapple;',
    '</>',
    '<Vegetable>',
    '  Cucumber = 1;',
    '  Cabage;',
    '</>'
];
let test2 = [
    '<@Languages>',
    '   CSharp;',
    '   JavaScript;',
    '   Haskell = 42;',
    '   Rust = 4;',
    '   CPP;',
    '</>',
    '<Result>',
    '   Failed;',
    '   Passed;',
    '   Excellence;',
    '</>',
    '<@Insects>',
    '   Ant;',
    '   Mosquito = 2;',
    '</>'
];
solve(test1);