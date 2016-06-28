function solve(args) {
    var x = Number(args[0]),
        y = Number(args[1]);
    if (x > y) {
        console.log(y + ' ' + x);
    } else {
        console.log(x + ' ' + y);
    }
}