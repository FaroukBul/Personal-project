document.addEventListener('DOMContentLoaded', () => {
    var gameGrid = document.getElementById("grid")
    let gridSize = 3
    createGrid()
    redCells = document.getElementsByClassName("red")
    if(redCells.length == 0){
        player = "initial"
        console.log(redCells.length)
    }
    function gridRange(length){
        return [1, length + 1]
    }
    function createGrid(){
        grid = gridRange(gridSize)
        for(x=grid[0]; x<grid[1]; x++){
            for(y=grid[0]; y<grid[1]; y++){
                div = document.createElement("div")
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
                console.log(player)
            }
        }

        return player
    }


    function checkForWinner(){
        redCells = document.getElementsByClassName("red")
        blueCells = document.getElementsByClassName("blue")
        checkForLineWinner()
        checkForDiagonalWinner()
        determineGameOver(redCells)
        return winner
    }


    function checkForLineWinner(){
        grid = gridRange(gridSize)
        for(i=grid[0]; i<grid[1]; i++){
            completeRedRow = 0
            completeRedColumn = 0
            completeBlueRow = 0
            completeBlueColumn = 0
            for(j=grid[0]; j<grid[1]; j++){
                rowCell = document.getElementById(`${i}${j}`)
                columnCell = document.getElementById(`${j}${i}`)
                if(rowCell.classList.contains('red')){completeRedRow += 1}
                if(rowCell.classList.contains('blue')){completeBlueRow += 1}
                if(columnCell.classList.contains('red')){completeRedColumn += 1}
                if(columnCell.classList.contains('blue')){completeBlueColumn += 1}
            }
            if(completeRedRow == gridSize || completeRedColumn == gridSize){
                alertResult("Red")
            } else if(completeBlueRow == gridSize || completeBlueColumn == gridSize){
                alertResult("Blue")
            } 
        }

    }

    function checkForDiagonalWinner(){
        if(!checkForRightDiagonal()){
            checkForLeftDiagonal()
        }
    }


    function checkForRightDiagonal(){
        grid = gridRange(gridSize)
        let y = 0
        rightRedDiagonal = 0
        rightBlueDiagonal = 0
        for(x=grid[0]; x<grid[1]; x += 1){
            y++
            diagonal = document.getElementById(`${x}${y}`)
            if(diagonal.classList.contains('red')){rightRedDiagonal += 1}
            if(diagonal.classList.contains('blue')){rightBlueDiagonal += 1}
        }
        if(rightRedDiagonal == gridSize){
            return alertResult("Red")
        } else if(rightBlueDiagonal == gridSize){
            return alertResult("Blue")
        }

        return null
    }

    function checkForLeftDiagonal(){
        grid = gridRange(gridSize)
        y=0
        leftRedDiagonal = 0
        leftBlueDiagonal = 0
        for(x=gridSize; x>0; x -= 1){
            y++
            diagonal = document.getElementById(`${x}${y}`)
            console.log(diagonal, x, y, "hello")
            if(diagonal.classList.contains('red')){leftRedDiagonal += 1}
            if(diagonal.classList.contains('blue')){leftBlueDiagonal += 1}
        }
        if(leftRedDiagonal == gridSize){
            return alertResult("Red")
        } else if(leftBlueDiagonal == gridSize){
            return alertResult("Blue")
        }
    }


    function determineGameOver(playerOneCells){
        playerOneMoves = playerOneCells.length
        if(gridSize % 2 == 0){
            maxMoves = (gridSize * gridSize)/2 + 1
            if(playerOneMoves == maxMoves){
                 return alertResult()
            }
        } else{
            maxMoves = (gridSize * gridSize)/2 + 0.5
            if(playerOneMoves == maxMoves){
               return alertResult()
            }
        }
        return null
    }


    function alertResult(winner){
        if(winner){
            alert(winner + " Wins") 
            return location.reload()
        } else{
            alert("It's a tie")
            return location.reload()
        }
    }

    

})

