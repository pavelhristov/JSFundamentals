function solve(lines) {
    //read input
    //read the valley, convert to number array
    //read the patterns, convert to number arrays
    //read a single pattern
    //Find max coins that can be collected following a pattern
    //for every pattern calculate the coins
    //find a way to calculate coins for a single pattern
    //start from 0
    //follow the pattern
    //collect coins on the way
    //if end of pattern start from begining 
    //if outside valley or on visited index stop
    //find the max coins
    //return the max coins

    var valley = lines[0].split(',').map(Number),
        m = Number(lines[1]),
        results = [];
    for (var i = 0; i < m; i += 1) {
        results.push(coinsForPattern(valley, lines[i + 2].split(',').map(Number)));

    }
    // console.log(valley);

    //var pattern = [1,2,-3];

    function isOutSide(valley, index) {
        return valley[index] === undefined;
    }

    function coinsForPattern(valley, pattern) {
        var visited = [],
            coins = 0,
            index = 0,
            patternIndex = 0;
        //continue while not visited and inside valley
        while (!visited[index] && !isOutSide(valley, index)) {
            visited[index] = true;
            coins += valley[index];

            index += pattern[patternIndex];
            patternIndex = (patternIndex += 1) % pattern.length;
        }

        return coins;
    }
    var maxCoins = Math.max.apply(null, results);
    console.log(maxCoins);
}

var test1 = [
    ' 1, 3, -6, 7, 4 ,1, 12',
    '3',
    '1, 2, -3',
    '1, 3, -2',
    '1, -1'
];

solve(test1);