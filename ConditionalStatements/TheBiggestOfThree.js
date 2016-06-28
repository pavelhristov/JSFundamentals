function solve(args) {
    var x = Number(args[0]),
        y = Number(args[1]),
        z = Number(args[2]);
    if (x >= y) {
        if (x >= z) {
            console.log(x);
        } else {
            console.log(z);
        }
    } else if (y >= x) {
        if (y >= z) {
            console.log(y);
        } else {
            console.log(z);
        }
    } else {
        console.log(z);
    }
}