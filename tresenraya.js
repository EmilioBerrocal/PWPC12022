let board;
let count = 0;


function createBoard() {
    let rows = []
    for (let i = 0; i < 3; i++) {
        let casillas = []
        for (let j = 0; j < 3; j++) {
            casillas.push({
                showState : false,
                valor : ""
            })
        }
        rows.push(casillas)
    }
    return rows
}

function setValue(board, row, col, value) {
    board[row][col] = value
}

const getValue = (board, row, col) => {
    return board[row][col]
}

const renderizarBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
        const casillas = board[i]
        for (let j=0; j < casillas.length; j++) {
            const butCasilla = document.getElementById(`${i}_${j}`)
            if (casillas[j].showState) {
                butCasilla.innerHTML = casillas[j].valor
            }else {
                butCasilla.innerHTML = ""
            }
            
        }
    }
}
const XO = (row, col) => {

    if (count%2 == 0){
        
        setValue(board,row,col,{
            showState : true,
            valor : "X"
        })
        const casilla = getValue(board,row,col)      
        casilla.showState = true   
        renderizarBoard(board)
        count++
    }
    else{
        
        setValue(board,row,col,{
            showState : true,
            valor : "O"
        })
        const casilla = getValue(board,row,col)      
        casilla.showState = true   
        renderizarBoard(board)
        count++
    }
}

const main = () => {
    board = createBoard() 
    renderizarBoard(board)
}

main()
