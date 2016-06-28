function solve(args) {
    var //arr = args[0].split('\n', ', ').map(Number),
        count = 1,
        maxCount = 0;
    for (var i = 1; i < args.length; i += 1) {
        if (Number(args[i]) === Number(args[i - 1]) + 1) {
            count += 1;
        } else {
            maxCount = Math.max(count, maxCount);
            count = 1;
        }
    }
    maxCount = Math.max(count, maxCount);
    console.log(maxCount);
}

solve(['8', '7', '3', '2', '3', '4', '2', '2', '4']);