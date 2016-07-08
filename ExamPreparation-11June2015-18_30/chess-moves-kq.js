/* globals console, module */

function solve(args) {
    "use strict";
    const rows = +args[0],
        cols = +args[1];
    const board = args.slice(2, rows + 2);
    let moves = args.slice(rows + 2 + 1)
        .map(moveString => {
            let parts = moveString.split(" ");
            return {
                "fromRow": getRowIndex(parts[0][1]),
                "fromCol": getColIndex(parts[0][0]),
                "toRow": getRowIndex(parts[1][1]),
                "toCol": getColIndex(parts[1][0])
            };
        });

    moves.forEach(move => {
        let fromPiece = board[move.fromRow][move.fromCol],
            toPiece = board[move.toRow][move.toCol];

        if (isQueen(fromPiece)) {
            if (isEmpty(toPiece) && checkQueen(move)) {
                console.log("yes");
            } else {
                console.log("no");
            }
        } else if (isKnight(fromPiece)) {
            if (isEmpty(toPiece) && checkKnight(move)) {
                console.log("yes");
            } else {
                console.log("no");
            }
        } else {
            console.log("no");
        }
    });


    function getRowIndex(rowName) {
        return rows - rowName;
    }

    function getColIndex(columnName) {
        let value = columnName.charCodeAt(0);
        return value - "a".charCodeAt(0);
    }

    function isKnight(piece) {
        return piece === "K";
    }

    function isQueen(piece) {
        return piece === "Q";
    }

    function isEmpty(piece) {
        return piece === "-";
    }

    function checkKnight(move) {
        const deltas = [
            [-2, 1],
            [-1, 2],
            [1, 2],
            [2, 1],
            [2, -1],
            [1, -2],
            [-1, -2],
            [-2, -1]
        ];
        return deltas.find(delta => {
            let row = move.fromRow + delta[0],
                col = move.fromCol + delta[1];
            return (row === move.toRow && col === move.toCol) ? true : false;
        });
    }

    function checkQueen(move) {
        let deltaRow = getDelta(move.fromRow, move.toRow),
            deltaCol = getDelta(move.fromCol, move.toCol);

        let row = move.fromRow,
            col = move.fromCol;

        while (true) {
            row += deltaRow;
            col += deltaCol;
            if (!board[row] || !board[row][col]) {
                return false;
            }
            if (!isEmpty(board[row][col])) {
                return false;
            }
            if (move.toRow === row && move.toCol === col) {
                return true;
            }
        }
    }

    function getDelta(from, to) {
        return (from > to) ? -1 : (from < to) ? +1 : 0;

    }
}

module.exports = solve;