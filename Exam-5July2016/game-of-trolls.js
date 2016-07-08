/* globals console, module */

function solve(args) {
    "use strict";

    const format = args[0].split(' ').map(Number),
        row = format[0],
        col = format[1],
        start = args[1].split(';'),
        w = start[0].split(' ').map(Number),
        n = start[1].split(' ').map(Number),
        l = start[2].split(' ').map(Number);
    let moves = args.slice(2, args.length)
        .map(moveString => {
            let parts = moveString.split(" ");
            return {
                "action": parts[0],
                "obj": parts[1],
                "direction": parts[2]
            };
        });

    function makeTroll(name, position) {
        return {
            "name": name,
            "position": position,
            "traped": false
        };
    }

    function escaped(princess, row, col) {
        if (princess.position[0] === row - 1 && princess.position[1] === col - 1) {
            return true;
        } else {
            return false;
        }
    }

    function moveTo(troll, direction, row, col) {
        if (direction === 'r') {
            troll.position[1] += 1;
            if (troll.position[1] >= col) {
                troll.position[1] = col - 1;
            }
        }
        if (direction === 'l') {
            troll.position[1] -= 1;
            if (troll.position[1] < 0) {
                troll.position[1] = 0;
            }
        }
        if (direction === 'u') {
            troll.position[0] -= 1;
            if (troll.position[0] < 0) {
                troll.position[0] = 0;
            }
        }
        if (direction === 'd') {
            troll.position[0] += 1;
            if (troll.position[0] >= row) {
                troll.position[0] = row - 1;
            }
        }
    }

    function isCaptured(princess, troll1, troll2) {
        if ((Math.abs(troll1.position[1] - princess.position[1]) <= 1 &&
                Math.abs(troll1.position[0] - princess.position[0]) <= 1) ||
            (Math.abs(troll2.position[1] - princess.position[1]) <= 1 &&
                Math.abs(troll2.position[0] - princess.position[0]) <= 1)) {
            return true;
        } else {
            return false;
        }
    }
    let troll1 = makeTroll("Wboup", w),
        troll2 = makeTroll("Nbslbub", n),
        princess = makeTroll("Lsjtujzbo", l),
        traps = [],
        result = '',
        flag = true;

    //moves.forEach(function(move) 
    for (let i = 0; i < moves.length; i += 1) {
        //check if in trap
        traps.forEach(function(element) {
            if (element === troll1.position) {
                troll1.traped = true;
            }
            if (element === troll2.position) {
                troll2.traped = true;
            }
        }, this);
        //check if can be release from trap
        if (troll1.position === troll2.position) {
            traps.splice(traps.indexOf(troll1.position), 1);
            troll1.traped = false;
            troll2.traped = false;
        } else if (troll1.traped && troll2.traped) {
            //trolls are traped
            result = `${princess.name} is saved! ${troll1.position.join(' ')} ${troll2.position.join(' ')}`;
            break;
        }
        //moving
        if (moves[i].action === "lay" && traps.indexOf(princess.position) < 0) {
            traps.push(princess.position);
        } else {
            switch (moves[i].obj) {
                case "Lsjtujzbo":
                    moveTo(princess, moves[i].direction, row, col);
                    break;
                case "Nbslbub":
                    if (!troll2.traped) {
                        moveTo(troll2, moves[i].direction, row, col);
                    }
                    break;
                case "Wboup":
                    if (!troll1.traped) {
                        moveTo(troll1, moves[i].direction, row, col);
                    }
                    break;
                default:
                    break;
            }
        }
        // princess has escaped
        if (escaped(princess, row, col)) {
            result = `${princess.name} is saved! ${troll1.position.join(' ')} ${troll2.position.join(' ')}`;
            break;
        }
        // princess is being captured
        if (isCaptured(princess, troll1, troll2)) {
            result = `The trolls caught ${princess.name} at ${princess.position.join(' ')}`;
            break;
        }
    }
    console.log(result);
}

test1 = [
    '5 5',
    '1 1;0 1;2 3',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Wboup r',
    'mv Wboup r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d'
];
test2 = [
    '7 7',
    '0 1;0 2;3 3',
    'mv Lsjtujzbo l',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup l',
    'mv Wboup l',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub d',
    'mv Lsjtujzbo d',
    'mv Lsjtujzbo l',
    'mv Lsjtujzbo l',
    'mv Nbslbub l',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup r',
    'mv Lsjtujzbo d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r'
];
test3 = [
    '8 8',
    '1 3;0 3;5 5',
    'mv Lsjtujzbo l',
    'mv Lsjtujzbo l',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Wboup r',
    'mv Wboup r',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Lsjtujzbo l',
    'mv Nbslbub d',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d'
];

solve(test3);