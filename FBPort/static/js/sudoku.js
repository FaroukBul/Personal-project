



function enumareteSquares(){
    let big_square_row = 1
    let square_end_row = 1
    for(let row=1; row <= 9; row++) {
        let big_square_col = 1
        let square_end_col = 1
        for(let col=1; col <= 9; col++) {
            let small_square = document.getElementById(`${row}${col}`)
            small_square.className = `cuandrant_y${big_square_row} cuadrant_x${big_square_col} y${row} x${col}`
            if(col % 3 == 0){ 
                if(square_end_col == 3){
                    big_square_col = 1
                    square_end_col = 1
                }
                big_square_col++
                square_end_col++ 
            }
        }
        if(row % 3 == 0){ 
            if(square_end_row == 3){
                big_square_row = 1
                square_end_row = 1
            }
            big_square_row++
            square_end_row++ 
        }
    }
 }

class CreateSudoku{

    constructor(){
        this.randomPositionVar = null
        this.randomPositionVar = null
    }

    createGrid(){
        for(let i=9; i < 9; i){
            let all_taken = document.getElementsByClassName("taken")
            if(all_taken.length < 9){
                this.randomNumberVar = this.randomNumber()
                this.randomPositionVar = this.randomPosition()
                if(this.checkForValidPosition()){
                    this.numberedSquare()
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
        row = document.getElementsByClassName(row_number)
        for(let index=0; index<= row.length; index++){
            if(row[index].innderHTML == this.randomNumberVar){
                return true
            }
        }
    } 

    getNumber(coordinateGroup){
        if(coordinateGroup == "cuadrant"){
            coordinates = this.randomPositionVar.split(" ")
            let cuadrant_y = coordinates[0]
            let cuadrant_x = coordinates[1]
            return `${cuadrant_y} ${cuadrant_x}`
        }
        if(coordinateGroup == "row"){
            return this.randomPositionVar.split(" ")[2]
        }
        if(coordinateGroup == "col"){
            return this.randomPositionVar.split(" ")[3]
        }
    }

    randomPosition(){
        return `cuadrant_y${this.randomCuadrantRow()} cuadrant_x${this.randomCuadrantCol()} y${this.randomRow()}  col${this.randomCol()}`

    }

    randomCuadrantRow(){
        let number = this.randomNumber()
        return `cuadrant_row${number} `
    }

    randomCuadrantCol(){
       let number = this.randomNumber()
       return `cuadrant_col${number} `
   }

   randomRow(){
      let number = this.randomNumber()
       return `row${number} `
   }

   randomCol(){
    let number = this.randomNumber()
       return `col${number} `
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

export {CreateSudoku, enumareteSquares}
