function primeCheck(args) {
    var num = Number(args[0]),
        i = 2;
    if (num <= 1) {
        console.log("false");
    } else {
        if (num > i) {
            while ((i < num) && (num % i !== 0)) {
                i += 1;
            }
            if (i === num) {
                console.log("true");
            } else {
                console.log("false");
            }
        } else {
            console.log("true");
        }
    }
}