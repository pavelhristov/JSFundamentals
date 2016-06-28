function solve(lines) {
    //read input
    //slice the array from 1 to length
    //implement reorder
    //too complicated
    //implement print
    //treat the words as a 2D array
    //find the length of the longest word
    //map to string length and use Math.max


    var n = Number(lines[0]),
        words = lines.slice(1);

    function print(words) {
        var wordLengths = words.map(function(w) {
            return w.length;
        });

        var maxLength = Math.max.apply(null, wordLengths);
        var result = '';

        for (var c = 0; c < maxLength; c += 1) {
            for (var i = c; i < words[i].length; i += 1) {
                if (words[i][c]) {
                    result += words[i][c];
                }
            }
        }
        console.log(result);
    }
    console.log(print(words));

    function reorder(words) {
        //magic

        // var oldPosition = 0;
        // var newPosition = words[oldPosition].length % (n + 1);
        // words.splice(newPosition, 0, words[oldPosition]);
        // if (newPosition < oldPosition) {
        //     words.splice(oldPos + 1, 1);
        // } else {
        //     words.splice(oldPosition, 1);
        // }
        // console.log(words);

        for (var oldPosition = 0; oldPosition < words.length; oldPosition += 1) {
            //TOFINISH
        }
    }

    reorder(words);
    print(words);
}


var test1 = [
    '3',
    'hi',
    'academy',
    'exam'
];

solve(test1);


// TOLEARN: slice, splice, map, filter