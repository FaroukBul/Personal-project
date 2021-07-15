document.addEventListener('DOMContentLoaded', () => {
    let gridSize = 3
    createGrid(gridSize)
    let redCells = document.getElementsByClassName("red")
    if(redCells.length == 0){
        var player = "initial"
    }
    function gridRange(length){
        return [1, length + 1]
    }
    function createGrid(gridSize){
        var gameGrid = document.getElementById("grid")
        let grid = gridRange(gridSize)
        for(let x=grid[0]; x<grid[1]; x++){
            for(let y=grid[0]; y<grid[1]; y++){
                let div = document.createElement("div")
                div.id = `${y}${x}`
                div.setAttribute("class", "cell")
                gameGrid.appendChild(div)
            }
        }
    }


    window.onclick = event => {
        redCells = document.getElementsByClassName("red")
        if(event.target.classList.contains("cell")){
            player = colorCell(player, event.target)
        }
        if(redCells.length > gridSize - 1){
            setTimeout(checkForWinner, 150)
        }
    }

   
    function colorCell(player, cell){
        if(!cell.classList.contains('taken')){
            if((player == "red" || player == "initial")){
                cell.classList.add("red")
                cell.classList.add('taken')
                player = "blue"  
            } else {
                cell.classList.add('blue')
                cell.classList.add('taken')
                player = "red"
            }
        }

        return player
    }


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


    function checkForLineWinner(){
        let grid = gridRange(gridSize)
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
            if(completeRedRow == gridSize || completeRedColumn == gridSize){
            
                return "Red"
            } else if(completeBlueRow == gridSize || completeBlueColumn == gridSize){
    
                return "Blue"
            }
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

    

})

