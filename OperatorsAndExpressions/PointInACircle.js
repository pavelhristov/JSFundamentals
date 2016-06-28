function point(args) {
    var x = Number(args[0]),
        y = Number(args[1]),
        distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    if (distance <= 2) {
        console.log("yes " + distance.toFixed(2));
    } else {
        console.log("no " + distance.toFixed(2));
    }
}