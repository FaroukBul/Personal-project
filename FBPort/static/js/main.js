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
        let big_square_row = 0
        let square_end_row = 0
        for(let row=1; row <= 9; row++) {
            let big_square_col = 0
            let square_end_col = 0
            for(let col=1; col <= 9; col++) {
                let small_square = document.getElementById(`${row}${col}`)
                small_square.id = `${big_square_row}${big_square_col}${row}${col}`
                
                if(col % 3 == 0){ 
                    if(square_end_col == 3){
                        big_square_col = 0
                        square_end_col = 0
                    }
                    big_square_col++
                    square_end_col++ 
                }
            }
            if(row % 3 == 0){ 
                if(square_end_row == 3){
                    big_square_row = 0
                    square_end_row = 0
                }
                big_square_row++
                square_end_row++ 
            }
        }
     }

})
