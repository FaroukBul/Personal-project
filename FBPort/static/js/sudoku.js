
let squares = document.getElementsByClassName('small_square')
enumareteSquares(squares)

function enumareteSquares(squares){
    lastSquareId = parseInt(squares[squares.length -1].id)
   for(row=0; row <= 9; row++){
       big_square = 0
       for(col=0; col <= 9; col++){
        if(col % 3 == 0){ big_square++}
        let small_square = document.getElementById(`%{row}%{col}`)
        small_square.id = `%{big_square}%{row}%{col}`
       }
   }
}

class createSudoku{



    createGrid(){
        checkForUniqueColumn()
        checkForUniqueRow()
        checkForUniqueSquare()
    }
}



class Sudoku{

    constructor(){

    }
}