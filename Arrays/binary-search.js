function solve(args) {
    var input = args[0].split('\n').map(Number),
        N = input[0],
        X = input.pop(),
        numbers = input,
        start = 0,
        end = N - 1,
        index = -1,
        middle,
        currentItem;
    while (start <= end) {
        middle = (end + start) / 2;
        currentItem = numbers[middle + 1];
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