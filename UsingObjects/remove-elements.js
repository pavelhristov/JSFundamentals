function solve(args) {
    Array.prototype.remove = function(element) {
        var i = this.indexOf(element);
        while (i > -1) {
            this.splice(i, 1);
            i = this.indexOf(element);
        }
    };
    var elements = args;
    elements.remove(elements[0]);
    elements.forEach(function(element) {
        console.log(element);
    }, this);
}

var test1 = ['1', '2', '3', '2', '1', '2', '3', '2'];
var test2 = [
    '_h/_',
    '^54F#',
    'V',
    '^54F#',
    'Z285',
    'kv?tc`',
    '^54F#',
    '_h/_',
    'Z285',
    '_h/_',
    'kv?tc`',
    'Z285',
    '^54F#',
    'Z285',
    'Z285',
    '_h/_',
    '^54F#',
    'kv?tc`',
    'kv?tc`',
    'Z285'
];

solve(test1);
//solve(test2);