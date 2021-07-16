function checkForWinner(){
    redCells = document.getElementsByClassName("red")
    let winner = checkForLineWinner()
    if(winner) alertResult(winner)
    if(!winner){
        winner = checkForDiagonalWinner()
       if(winner) alertResult(winner)  
    }
    if(!winner){
        winner = determineGameOver(redCells)
        if(winner) alertResult(winner)
    }
}




function checkForDiagonalWinner(){
    let winner = checkForRightDiagonal()
    if(!winner){
        winner = checkForLeftDiagonal()
    }
    return winner
}


function checkForRightDiagonal(){
    let grid = gridRange(gridSize)
    let y = 0
    let rightRedDiagonal = 0
    let rightBlueDiagonal = 0
    for(let x=grid[0]; x<grid[1]; x += 1){
        y++
        diagonal = document.getElementById(`${x}${y}`)
        if(diagonal.classList.contains('red')){rightRedDiagonal += 1}
        if(diagonal.classList.contains('blue')){rightBlueDiagonal += 1}
    }
    if(rightRedDiagonal == gridSize){

        return "Red"
    } else if(rightBlueDiagonal == gridSize){

        return "Blue"
    }
}

function checkForLeftDiagonal(){
    let grid = gridRange(gridSize)
    let y=0
    let leftRedDiagonal = 0 
    let leftBlueDiagonal = 0
    for(let x=gridSize; x>0; x -= 1){
        y++
        diagonal = document.getElementById(`${x}${y}`)
        if(diagonal.classList.contains('red')){leftRedDiagonal += 1}
        if(diagonal.classList.contains('blue')){leftBlueDiagonal += 1}
    }
    if(leftRedDiagonal == gridSize){

        return "Red"
    } else if(leftBlueDiagonal == gridSize){

        return "Blue"
    }
}


function determineGameOver(playerOneCells){
    let playerOneMoves = playerOneCells.length
    if(gridSize % 2 == 0){
       let  maxMoves = (gridSize * gridSize)/2 + 1
        if(playerOneMoves == maxMoves){

             return "Tie"
        }
    } else{
        let maxMoves = (gridSize * gridSize)/2 + 0.5
        if(playerOneMoves == maxMoves){

           return "Tie"
        }
    }
}


function alertResult(winner){
    if(winner == "Tie"){
        alert("It's a tie") 

        return location.reload()
    }
    alert(winner + " Wins")

    return location.reload()
    
}
