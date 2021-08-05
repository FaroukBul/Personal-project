
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
        this.randomNumber = null
        this.randomPosition = null
        this.testRandomNumber = []
        this.cuadrantX = null
        this.cuadrantY = null
        this.x = null
        this.y = null
    }

    createGrid(){
        for(let i=0; i <= 9; i++){
            let all_taken = document.getElementsByClassName("taken")
            console.log(all_taken, i)
            if(all_taken.length <= 9){
                this.randomNumber = this.generateRandomNumber(1, 10)
                this.randomPosition = this.generateRandomPosition()
                console.log(this.randomNumber, this.randomPosition)
                if(this.checkForValidPosition()){
                    console.log("test if statement in createGrid")
                    this.numberedSquare()
                } 
            }
        }
    }

    generateRandomPosition(){
        this.generateRandomCuadrantNumber()
        this.generateRandomGridNumber()
        return `cuandrant_y${this.cuadrantY} cuadrant_x${this.cuadrantX} y${this.y} x${this.y}`
    }

    checkForValidPosition(){
        if(this.validPosition()){
            return true
        }
    }

    validPosition(){
        let positionClass = this.randomPosition + "taken"
        let position = document.getElementsByClassName(positionClass)[0]
        console.log(position, this.randomPosition)
        if (position == undefined){
            return true
        } 
    }

    takenRow(){
        row_number = this.getNumber("row")
        row = document.getElementsByClassName(row_number)
        for(let index=0; index<= row.length; index++){
            if(row[index].innderHTML == this.randomNumber){
                return true
            }
        }
    } 

    getNumber(coordinateGroup){
        if(coordinateGroup == "cuadrant"){
            coordinates = this.randomPosition.split(" ")
            let cuadrant_y = coordinates[0]
            let cuadrant_x = coordinates[1]
            return `${cuadrant_y} ${cuadrant_x}`
        }
        if(coordinateGroup == "row"){
            return this.randomPosition.split(" ")[2]
        }
        if(coordinateGroup == "col"){
            return this.randomPosition.split(" ")[3]
        }
    }

    numberedSquare() {
        console.log("test numberedSquare")
        this.testRandomNumber.push(this.randomNumber)
        let square = document.getElementsByClassName(this.randomPosition)[0]
        console.log(square, "test-square")
        square.classList.add("taken")
        square.innerHTML = this.randomNumber
    }   

    generateRandomCuadrantNumber() {
        this.cuadrantY = this.generateRandomNumber(1, 4)
        this.cuadrantX = this.generateRandomNumber(1, 4)
     }

    generateRandomGridNumber() {
        switch(this.cuadrantY){
            case 1:
                this.y = this.generateRandomNumber(1, 3)
                break;
            case 2:
                this.y = this.generateRandomNumber(4, 6)
                break;
            case 3:
                this.y = this.generateRandomNumber(7, 9)
                break;
        }

        switch(this.cuadrantX){
            case 1:
                this.x = this.generateRandomNumber(1, 3)
                break;
            case 2:
                this.x = this.generateRandomNumber(4, 6)
                break;
            case 3:
                this.x = this.generateRandomNumber(7, 9)
                break;
        }
       
        
    }

    generateRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min) + min)
     }
}

export {CreateSudoku, enumareteSquares}
