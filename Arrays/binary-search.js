function solve(args) {
    var input = args[0].split('\n').map(Number),
        N = input[0],
        numbers = input.splice(1, N),
        X = input[1],
        start = 0,
        end = N - 1,
        index = -1,
        middle,
        currentItem;
    while (start <= end) {
        middle = (end + start) / 2;
        currentItem = numbers[middle];
        if (currentItem === X) {
            index = middle;
            break;
        } else if (currentItem < X) {
            start = middle + 1;
        } else if (currentItem > X) {
            end = middle - 1;
        }
    }
    console.log(index);
}