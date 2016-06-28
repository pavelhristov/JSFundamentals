function solve(args) {
    var strHex = args[0],
        result = 0,
        counter = +strHex.length;
    for (var item of strHex) {
        counter--;
        switch (item) {
            case 'A':
                result += 10 * Math.pow(16, counter);
                continue;
            case 'B':
                result += 11 * Math.pow(16, counter);
                continue;
            case 'C':
                result += 12 * Math.pow(16, counter);
                continue;
            case 'D':
                result += 13 * Math.pow(16, counter);
                continue;
            case 'E':
                result += 14 * Math.pow(16, counter);
                continue;
            case 'F':
                result += 15 * Math.pow(16, counter);
                continue;
            default:
                result += Number(item) * Math.pow(16, counter);
                continue;
        }
    }
    console.log(result);
}