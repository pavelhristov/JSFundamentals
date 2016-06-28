function solve(args) {
    if ((args % 5 === 0) && (args % 7 === 0)) {
        console.log("true " + args);
    } else {
        console.log("false " + args);
    }
}