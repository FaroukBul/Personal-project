/*function enumareteSquares(){
    let big_square_row = 1
    let square_end_row = 1
    for(let row=1; row <= 9; row++) {
        let big_square_col = 1
        let square_end_col = 1
        for(let col=1; col <= 9; col++) {
            let small_square = document.getElementById(`${row}${col}`)
            small_square.className = `cuadrant_y${big_square_row} cuadrant_x${big_square_col} y${row} x${col}`
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


class Sudoku{

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
        for(let index=0; index <= 30; index++){
            let all_taken = document.getElementsByClassName("taken")
            if(all_taken.length <= 30){
                this.randomNumber = this.generateRandomNumber(1, 10)
                this.randomPosition = this.generateRandomPosition()
                if(this.checkForValidPosition()){
                    this.numberedSquare()
                } else index--
            }
        }
    }

    generateRandomPosition(){
        this.generateRandomCuadrantNumber()
        this.generateRandomGridNumber()
        return `cuadrant_y${this.cuadrantY} cuadrant_x${this.cuadrantX} y${this.y} x${this.x}`
    }

    generateRandomCuadrantNumber() {
        this.cuadrantY = this.generateRandomNumber(1, 4)
        this.cuadrantX = this.generateRandomNumber(1, 4)
     }

    generateRandomGridNumber() {
        switch(this.cuadrantY){
            case 1:
                this.y = this.generateRandomNumber(1, 4)
                break;
            case 2:
                this.y = this.generateRandomNumber(4, 7)
                break;
            case 3:
                this.y = this.generateRandomNumber(7, 10)
                break;
        }

        switch(this.cuadrantX){
            case 1:
                this.x = this.generateRandomNumber(1, 4)
                break;
            case 2:
                this.x = this.generateRandomNumber(4, 7)
                break;
            case 3:
                this.x = this.generateRandomNumber(7, 10)
                break;
        }
    }

    generateRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min)) + min
     }


    checkForValidPosition(){
        if(this.checkForEmtpyPosition()){
            if(this.checkForValidCoordinate()){
                return true
            }
        }
    }

    checkForEmtpyPosition(){
        let positionClass = this.randomPosition + "taken"
        let position = document.getElementsByClassName(positionClass)[0]
        if (position == undefined){
            return true
        } 
    }

    checkForValidCoordinate(){
        let classCoordinates = [
            `cuadrant_y${this.cuadrantY}`,
            `cuadrant_x${this.cuadrantX}`,
            `y${this.y}`,
            `x${this.x}`
        ]
        console.log("valid coordinates")
        for(let index=0; index <= 3; index++){
            let positions = document.getElementsByClassName(classCoordinates[index])
            console.log(positions, "repeated")
            for(let square=0; square < positions.length; square++){
                if(positions[square].innerHTML == this.randomNumber){
                    return false
                }
            }  
        }

        return true
    }

    numberedSquare() {
        this.testRandomNumber.push(this.randomNumber)
        let square = document.getElementsByClassName(this.randomPosition)[0]
        square.classList.add("taken")
        square.innerHTML = this.randomNumber
    }   

}