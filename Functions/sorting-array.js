function solve(args) {
    var n = args[0],
        numbers = args[1].split(' ').map(Number);

    function sorting(numbers) {
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
        console.log(numbers.join(' '));
    }
    sorting(numbers);
}