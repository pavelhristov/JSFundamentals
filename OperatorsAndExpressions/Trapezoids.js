function trapezoids(args) {
    var a = Number(args[0]),
        b = Number(args[1]),
        h = Number(args[2]),
        area = ((a + b) * h) / 2;
    console.log(area.toFixed(7));
}