function solve(args) {
    var x = Number(args[0]),
        y = Number(args[1]),
        z = Number(args[2]);
    if (x !== 0 && y !== 0 && z !== 0) {
        if (x > 0) {
            if (y > 0) {
                if (z > 0) {
                    console.log("+");
                } else {
                    console.log("-");
                }
            } else {
                if (z > 0) {
                    console.log("-");
                } else {
                    console.log("+");
                }
            }
        } else {
            if (y > 0) {
                if (z > 0) {
                    console.log("-");
                } else {
                    console.log("+");
                }
            } else {
                if (z > 0) {
                    console.log("+");
                } else {
                    console.log("-");
                }
            }
        }
    } else {
        console.log(0);
    }
}