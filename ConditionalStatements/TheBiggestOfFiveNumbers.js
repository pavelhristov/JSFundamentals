function solve(args) {
    var x = Number(args[0]),
        y = Number(args[1]),
        z = Number(args[2]),
        w = Number(args[3]),
        v = Number(args[4]);
    if (x >= y) {
        if (x >= z) {
            if (x >= w) {
                if (x >= v) {
                    console.log(x);
                } else {
                    console.log(v);
                }
            } else {
                if (w >= v) {
                    console.log(w);
                } else {
                    console.log(v);
                }
            }
        } else if (z >= w) {
            if (z >= v) {
                console.log(z);
            } else {
                console.log(v);
            }
        } else {
            if (w >= v) {
                console.log(w);
            } else {
                console.log(v);
            }
        }
    } else if (y >= x) {
        if (y >= z) {
            if (y >= w) {
                if (y >= v) {
                    console.log(y);
                } else {
                    console.log(v);
                }
            } else {
                if (w >= v) {
                    console.log(w);
                } else {
                    console.log(v);
                }
            }
        } else if (z >= w) {
            if (z >= v) {
                console.log(z);
            } else {
                console.log(v);
            }
        }
    } else if (z >= x) {
        if (z >= y) {
            if (z >= w) {
                if (z >= v) {
                    console.log(z);
                } else {
                    console.log(v);
                }
            } else {
                if (w >= v) {
                    console.log(w);
                } else {
                    console.log(v);
                }
            }
        }
        if (w >= v) {
            console.log(w);
        } else {
            console.log(v);
        }
    } else if (w >= x) {
        if (w >= v) {
            console.log(w);
        } else {
            console.log(v);
        }
    } else {
        console.log(v);
    }
}