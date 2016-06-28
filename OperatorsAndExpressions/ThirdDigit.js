function thirdDigit(args) {
    var str = args + '';
    var digit = str.charAt(str.length - 3);
    if (digit === '') {
        digit = 0;
    }
    if (digit == 7) {
        console.log("true");
    } else {
        console.log("false " + digit);
    }
}