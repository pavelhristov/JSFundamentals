function solve(args) {
    var arr = args[0].split('\n'),
        count = 1,
        maxCount = 0;
    for (var i = 1; i < arr.length; i += 1) {
        if (arr[i] === arr[i - 1]) {
            count += 1;
        } else {
            maxCount = Math.max(count, maxCount);
            count = 1;
        }
    }
    maxCount = Math.max(count, maxCount);
    console.log(maxCount);
}

solve(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);