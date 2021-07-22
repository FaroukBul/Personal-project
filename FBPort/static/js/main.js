import {Gato} from "./gato.js"

document.addEventListener('DOMContentLoaded', () => {
    enumareteSquares()
    let gato = new Gato(3)
    window.onclick = event => {
        let element = event.target
        if (element.classList.contains("cell")) {
            gato.markCell(element)
        }
    }

function enumareteSquares(){
   for(let row=0; row <= 9; row++){
       let big_square = 0
       for(let col=0; col <= 9; col++){
        if(col % 3 == 0){ big_square++}
        let small_square = document.getElementById(`${row}${col}`)
        if(small_square == null){
            console.log(`%{row}%{col}`)
        }
        small_square.id = `${big_square}${row}${col}`
       }
   }
}
})
