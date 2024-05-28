let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

let isValid = true;

let memory = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false
}

isValidSudoku(board)

// valida regra e valores do board
function valid_sudoku(value) {

    // valida se os valores estão entre [0,9]
    if (value < 0 || value > 9) {
        isValid = false
        console.log('is not valid!')
        return false
    }

    /*/
        - valida se o valor passado existe em memory
            - valida se o valor passado é true -> nesse caso o board não é valido!
            - seta o valor de memory como true 
    /*/
    if (memory.hasOwnProperty(value)) {

        if (memory[value] === true) {
            isValid = false;
            console.log('is not valid!')
            return false
        }

        memory[value] = true;
    }
}

function isValidSudoku(board) {
    let N = 9

    //#region regra das linhas
    for (let i = 0; i < N; i++) {
        reset_memory() // reseta a memória a cada linha
        for (let j = 0; j < N; j++) {
            valid_sudoku(board[i][j])
        }
    } //#endregion

    if (isValid) {

        //#region regra das colunas
        for (let j = 0; j < N; j++) {
            reset_memory() // reseta a memória a cada coluna
            for (let i = 0; i < N; i++) {
                valid_sudoku(board[i][j])
            }
        } //#endregion


        //#region regra dos subquadrados 3x3
        // 1º QUADRANTE
        reset_memory()
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                valid_sudoku(board[i][j])
            }
        }
        // 2º QUADRANTE
        reset_memory()
        for (let i = 0; i < 3; i++) {
            for (let j = 3; j < 6; j++) {
                valid_sudoku(board[i][j])
            }
        }
        // 3º QUADRANTE
        reset_memory()
        for (let i = 0; i < 3; i++) {
            for (let j = 6; j < 9; j++) {
                valid_sudoku(board[i][j])
            }
        }
        // 4º QUADRANTE
        reset_memory()
        for (let i = 3; i < 6; i++) {
            for (let j = 0; j < 3; j++) {
                valid_sudoku(board[i][j])
            }
        }
        // 5º QUADRANTE
        reset_memory()
        for (let i = 3; i < 6; i++) {
            for (let j = 3; j < 6; j++) {
                valid_sudoku(board[i][j])
            }
        }
        // 6º QUADRANTE
        reset_memory()
        for (let i = 3; i < 6; i++) {
            for (let j = 6; j < 9; j++) {
                valid_sudoku(board[i][j])
            }
        }
        // 7º QUADRANTE
        reset_memory()
        for (let i = 6; i < 9; i++) {
            for (let j = 0; j < 3; j++) {
                valid_sudoku(board[i][j])
            }
        }
        // 8º QUADRANTE
        reset_memory()
        for (let i = 6; i < 9; i++) {
            for (let j = 3; j < 6; j++) {
                valid_sudoku(board[i][j])
            }
        }
        // 9º QUADRANTE
        reset_memory()
        for (let i = 6; i < 9; i++) {
            for (let j = 6; j < 9; j++) {
                valid_sudoku(board[i][j])
            }
        }
        //#endregion

    }

    else return false

    return true
}

function reset_memory() {
    memory = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false
    }
}

if (isValid) console.log('sudoku is valid!')