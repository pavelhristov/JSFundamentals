function solve(args) {
    var words = args[0].split(/\r\n|\n|\r/);
    var first = words[0].split(''),
        second = words[1].split(''),
        result = '=';
    if (first > second) {
        result = '>';
    } else if (first < second) {
        result = '<';
    } else {
        result = '=';
    }
    console.log(result);
}

solve(['', 'food']);