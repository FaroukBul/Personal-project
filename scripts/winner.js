
function gridRange(length){
    return [1, length + 1]
}

function alertWinner(winner){
    if(winner != "Tie"){
        alert(winner + " Wins")
    } else {
        alert("Its a tie")
    }
}


class Winner {

    constructor(length, redCells){
        this.length = length
        this.winner = null
        this.redCells = redCells
    }

    checkForWinner(){
        this.winner = this.checkForLineWinner()
        if(!this.winner){
            this.winner = this.checkForDiagonalWinner()
        }
        if(!this.winner){
            this.winner = "None"
        }

        return this.winner
    }

    checkForDiagonalWinner(){
        let winner = this.checkForRightDiagonal()
        if(!winner){
            winner = this.checkForLeftDiagonal()
        }

        return winner
    }


    checkForRightDiagonal(){
        let grid = gridRange(this.length)
        let y = 0
        let rightRedDiagonal = 0
        let rightBlueDiagonal = 0
        for(let x=grid[0]; x<grid[1]; x += 1){
            y++
            let diagonal = document.getElementById(`${x}${y}`)
            if(diagonal.classList.contains('red')){rightRedDiagonal += 1}
            if(diagonal.classList.contains('blue')){rightBlueDiagonal += 1}
        }
        if(rightRedDiagonal == this.length){

            return "Red"
        } else if(rightBlueDiagonal == this.length){

            return "Blue"
        }
    }

    checkForLeftDiagonal(){
        let grid = gridRange(this.length)
        let y=0
        let leftRedDiagonal = 0 
        let leftBlueDiagonal = 0
        for(let x=gridSize; x>0; x -= 1){
            y++
            let diagonal = document.getElementById(`${x}${y}`)
            if(diagonal.classList.contains('red')){leftRedDiagonal += 1}
            if(diagonal.classList.contains('blue')){leftBlueDiagonal += 1}
        }
        if(leftRedDiagonal == gridSize){

            return "Red"
        } else if(leftBlueDiagonal == gridSize){

            return "Blue"
        }
    }

    determineGameOver(){
        let playerOneMoves = this.redCells.length
        if(this.length % 2 == 0){
        let  maxMoves = (this.length * this.length)/2 + 1
            if(playerOneMoves == maxMoves){

                return "Tie"
            }
        } else{
            let maxMoves = (this.length * this.length)/2 + 0.5
            if(playerOneMoves == maxMoves){

            return "Tie"
            }
        }
    }

    checkForLineWinner(){
        let grid = gridRange(this.length)
        console.log(grid)
        for(let i=grid[0]; i<grid[1]; i++){
            let completeRedRow = 0
            let completeRedColumn = 0
            let completeBlueRow = 0
            let completeBlueColumn = 0
            for(let j=grid[0]; j<grid[1]; j++){
                let rowCell = document.getElementById(`${i}${j}`)
                let columnCell = document.getElementById(`${j}${i}`)
                if(rowCell.classList.contains('red')){completeRedRow += 1}
                if(rowCell.classList.contains('blue')){completeBlueRow += 1}
                if(columnCell.classList.contains('red')){completeRedColumn += 1}
                if(columnCell.classList.contains('blue')){completeBlueColumn += 1}
            }
            if(completeRedRow == this.length || completeRedColumn == this.length){
                return "Red"
            } else if(completeBlueRow == this.length || completeBlueColumn == this.length){
                return "Blue"
                
            }
        }
    }
}

export {Winner, gridRange, alertWinner}
