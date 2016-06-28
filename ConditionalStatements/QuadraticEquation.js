function solve(args) {
    var a = Number(args[0]),
        b = Number(args[1]),
        c = Number(args[2]),
        d = b * b - 4 * a * c,
        x1 = 0,
        x2 = 0;

    if (d < 0) {
        console.log("no real roots");
    } else if (d === 0) {
        x1 = -b / (2 * a);
        console.log("x1=x2=" + x1.toFixed(2));
    } else {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        if (x1 < x2) {
            console.log("x1=" + x1.toFixed(2) + "; x2=" + x2.toFixed(2));
        } else {
            console.log("x1=" + x2.toFixed(2) + "; x2=" + x1.toFixed(2));
        }
    }
}