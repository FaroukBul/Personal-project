import {Gato} from "./gato.js"
import {Sudoku, enumareteSquares} from "./sudoku.js"
import {ToDos} from "./todo.js"

document.addEventListener('DOMContentLoaded', () => {
    let newTodo = new ToDos()
    newTodo.assignId()

    setInterval( function() { 
        let newTodo = new ToDos()
        newTodo.getDate()}, 1000)

    window.onclick = event => {
        let element = event.target
        if (element.classList.contains("cell")) {
            gato.markCell(element)
        }
    }
})
