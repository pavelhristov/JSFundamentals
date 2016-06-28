function solve(args) {
    var numbers = args[0].split(/\r\n|\n|\r/).map(Number),
        k;
    numbers.splice(0, 1);
    for (var j = 0; j < numbers.length; j += 1) {
        k = numbers[j];
        for (var i = j + 1; i < numbers.length; i += 1) {
            if (numbers[i] < k) {
                k = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = k;
            }
        }
    }
    console.log(numbers.join('\r\n'));
}

solve(['6', '3', '4', '1', '5', '2', '6']);