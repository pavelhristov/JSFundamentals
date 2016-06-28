function solve(args) {
    var N = Number(args[0]),
        k = 1,
        count = 1,
        line = '';

    for (var i = 1; i <= N; i++) {
        if (i < N) {
            line += k + ' ';
        } else if (i == N) {
            line += k;
            console.log(line);
            i = 0;
            k = count;
            count++;
            line = '';
            if (count > N) {
                break;
            }
        }
        k++;
    }
}