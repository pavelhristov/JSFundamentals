function solve(args) {
    var x = Number(args[0]),
        y = Number(args[1]),
        z = Number(args[2]);
    if (x >= y) {
        if (x >= z) {
            if (y >= z) {
                console.log(x + ' ' + y + ' ' + z);
            } else {
                console.log(x + ' ' + z + ' ' + y);
            }
        } else {
            console.log(z + ' ' + x + ' ' + y);
        }
    } else if (y >= x) {
        if (y >= z) {
            if (x >= z) {
                console.log(y + ' ' + x + ' ' + z);
            } else {
                console.log(y + ' ' + z + ' ' + x);
            }
        } else {
            console.log(z + ' ' + y + ' ' + x);
        }
    } else {
        if (x >= y) {
            console.log(z + ' ' + x + ' ' + y);
        } else {
            console.log(z + ' ' + y + ' ' + x);
        }
    }
}