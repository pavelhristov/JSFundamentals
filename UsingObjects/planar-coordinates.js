function solve(args) {
    function makePoint(x, y) {
        return {
            x: x,
            y: y
        };
    }

    function makeLine(start, end) {
        return {
            start: start,
            end: end,
            length: lineLenght(start, end)
        };
    }

    function sqr(k) {
        return k * k;
    }

    function lineLenght(start, end) {
        return Math.sqrt(sqr(start.x - end.x) + sqr(start.y - end.y));
    }

    var lines = [];
    lines[0] = makeLine(makePoint(+args[0], +args[1]), makePoint(+args[2], +args[3]));
    lines[1] = makeLine(makePoint(+args[4], +args[5]), makePoint(+args[6], +args[7]));
    lines[2] = makeLine(makePoint(+args[8], +args[9]), makePoint(+args[10], +args[11]));
    lines.forEach(function(line) {
        console.log(line.length.toFixed(2));
    }, this);

    if (lines[0].length < lines[1].length + lines[2].length &&
        lines[1].length < lines[0].length + lines[2].length &&
        lines[2].length < lines[1].length + lines[0].length) {
        console.log("Triangle can be built");
    } else {
        console.log("Triangle can not be built");
    }
}


let test1 = [
    '5', '6', '7', '8',
    '1', '2', '3', '4',
    '9', '10', '11', '12'
];

let test2 = [
    '7', '7', '2', '2',
    '5', '6', '2', '2',
    '95', '-14.5', '0', '-0.123'
];

solve(test1);
console.log();
solve(test2);