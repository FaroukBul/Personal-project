import {Gato} from "./gato.js"
import {CreateSudoku, enumareteSquares} from "./sudoku.js"

document.addEventListener('DOMContentLoaded', () => {
    enumareteSquares()
    let new_sudoku = new CreateSudoku()
    new_sudoku.createGrid()
    
    let gato = new Gato(3)
    window.onclick = event => {
        let element = event.target
        if (element.classList.contains("cell")) {
            gato.markCell(element)
        }
    }

    




     

})
