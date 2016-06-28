function AreaAndPerimeter(args) {
    var width = args[0],
        height = args[1];
    var p = 2 * width + 2 * height;
    var s = width * height;
    console.log(s.toFixed(2) + " " + p.toFixed(2));
}