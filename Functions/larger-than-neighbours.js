function solve(args) {
    var n = args[0],
        numbers = args[1].split(' ').map(Number);

    function smallerNeightbours(array) {
        var count = 0;
        for (var i = 1; i < array.length - 1; i += 1) {
            if (array[i] >= array[i - 1] && array[i] >= array[i + 1]) {
                count += 1;
            }
        }
        console.log(count);
    }
    smallerNeightbours(numbers);
}