function solve(args) {
    var x = Number(args[0]),
        y = Number(args[1]),
        distance = Math.sqrt(Math.pow(x - 1, 2) + Math.pow(y - 1, 2)),
        circleStatus,
        rectangleStatus;
    if (distance <= (1.5)) {
        circleStatus = "inside circle ";
    } else {
        circleStatus = "outside circle ";
    }
    if ((x <= 5) && (x >= -1)) {
        if ((y <= 1) && (y >= -1)) {
            rectangleStatus = "inside rectangle";
        } else {
            rectangleStatus = "outside rectangle";
        }
    } else {
        rectangleStatus = "outside rectangle";
    }
    console.log(circleStatus + rectangleStatus);
}