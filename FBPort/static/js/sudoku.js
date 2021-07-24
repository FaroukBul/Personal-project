



function enumareteSquares(){
    let big_square_row = 0
    let square_end_row = 0
    for(let row=1; row <= 9; row++) {
        let big_square_col = 0
        let square_end_col = 0
        for(let col=1; col <= 9; col++) {
            let small_square = document.getElementById(`${row}${col}`)
            small_square.id = `$cuadrant_row${big_square_row}$cuadrant_col${big_square_col}row${row}col${col}`
            
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

class createSudoku{

    createGrid(){
        for(let i=9; i < 9; i){
            let all_taken = document.getElementsByClassName("taken")
            if(all_taken.length < 9){
                this.randomNumberVar = this.randomNumber()
                this.randomPositionVar = this.randomPosition()
                if(this.checkForValidPosition()){
                    this.numberedSquare(randomPosition, randomNumber)
                } 
            }
        }
    }

    checkForValidPosition(){
        if(!this.takenPosition()){
            if(!this.takenRow()){
                if(!this.takenColumn()){
                    if(!this.takenCuadrant()){
                        return true 
                    }
                }
            }
        }
    }

    takenPosition(){
        if (document.getElementsByClassName(this.randomPositionVar)){
            return true
        }
    }

    takenRow(){
        row_number = this.getNumber("row")
        if (document.getElementsByClassName(row_number)){
            return true
        }
    } 

    takenColumn(){
        col_number = this.getNumber("col")
        if (document.getElementsByClassName(col_number)){
            return true
        }
    } 

    takenCuadrant(){
        cuadrant_number = this.getNumber("cuadrant")
        if(document.getElementsByClassName(cuadrant_number)){
            return true
        }
    }

    getNumber(coordinateGroup){
        if(coordinateGroup == "cuadrant"){
            return this.randomPositionVar.split(",")[0]
        }
        if(coordinateGroup == "row"){
            return this.randomPositionVar.split(",")[1]
        }
        if(coordinateGroup == "col"){
            return this.randomPositionVar.split(",")[2]
        }
    }

    randomPosition(){
        return `${this.randomCuadrantRow()},${this.randomCuadrantCol()},${this.randomRow()},${this.randomCol()}`

    }

    randomCuadrantRow(){
        let number = this.randomNumber()
        return `cuadrant_row${number},`
    }

    randomCuadrantCol(){
       let number = this.randomNumber()
       return `cuadrant_col${number},`
   }

   randomRow(){
      let number = this.randomNumber()
       return `row${number},`
   }

   randomCol(){
    let number = this.randomNumber()
       return `col${number}`
   }

    numberedSquare() {
        let square = document.getElementById(this.randomPositionVar)
        square.classList.add("taken")
        square.innerHTML = this.randomNumberVar
    }
   

    randomNumber() {
       let number = Math.floor(Math.random() * 9)

       return number
    }    
}

export {createSudoku, enumareteSquares}
