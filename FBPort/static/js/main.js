import {Gato} from "./gato.js"
import {createSudoku, enumareteSquares} from "./sudoku.js"

document.addEventListener('DOMContentLoaded', () => {
    enumareteSquares()
    let new_sudoku = new createSudoku()
    new_sudoku.createGrid()
    console.log("this")
    let gato = new Gato(3)
    window.onclick = event => {
        let element = event.target
        if (element.classList.contains("cell")) {
            gato.markCell(element)
        }
    }

    




     

})
