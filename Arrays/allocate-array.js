function solve(args) {
    var n = Number(args[0]),
        array = [];
    for (var i = 0; i < n; i += 1) {
        array[i] = i * 5;
        console.log(array[i]);
    }
}

solve(['5']);