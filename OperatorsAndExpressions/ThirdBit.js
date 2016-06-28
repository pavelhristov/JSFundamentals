function thirdBit(args) {
    var num = Number(args[0]);
    // if (num < 4) {
    //     return 0;
    // }
    // var binary = num.toString(2);
    // console.log(binary.charAt(binary.length - 3));
    var p = 3;
    var mask = 1 << p;
    var numAndMask = num & mask;
    var bit = numAndMask >> p;
    console.log(bit);
}