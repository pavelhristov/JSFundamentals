function solve(args) {
    var arr = args,
        min = +arr[0],
        max = +arr[0],
        sum = 0.0,
        avg = 0.0;
    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = +arr[i];
        }
        if (arr[i] < min) {
            min = +arr[i];
        }
        sum += +arr[i];
    }
    avg = sum / arr.length;
    console.log("min=" + min.toFixed(2));
    console.log("max=" + max.toFixed(2));
    console.log("sum=" + sum.toFixed(2));
    console.log("avg=" + avg.toFixed(2));
}