function solve(args) {
    var numbers = args.splice(1).sort().map(Number),
        counter = 1,
        element = numbers[0],
        maxCounter = 0,
        maxElement = numbers[0];
    for (var i = 1; i < numbers.length; i += 1) {
        if (element === numbers[i]) {
            counter += 1;
        } else {
            if (maxCounter < counter) {
                maxCounter = counter;
                maxElement = element;
            }
            counter = 1;
        }
        element = numbers[i];
    }
    if (maxCounter < counter) {
        maxCounter = counter;
        maxElement = element;
    }
    console.log(maxElement + ' (' + maxCounter + (maxCounter == 1 ? ' time)' : ' times)'));
}