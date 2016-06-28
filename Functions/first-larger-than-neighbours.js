function solve(args) {
    var n = args[0],
        numbers = args[1].split(' ').map(Number);

    function firstLarger(array) {
        for (var i = 1; i < array.length - 1; i += 1) {
            if (array[i] >= array[i - 1] && array[i] >= array[i + 1]) {
                return i;
            }
        }
    }
    console.log(firstLarger(numbers));
}