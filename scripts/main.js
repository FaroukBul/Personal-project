
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
            let gato = new Gato(gridSize, event.target, player, redCells)
            player = gato.colorCell()
            if(redCells.length > gridSize - 1){
                alertWinner(gato.checkForLineWinner())
                setTimeout(alertWinner(gato.checkForLineWinner()), 150)
            }
        }
    }

    class Gato {
        constructor(length, cell, player, redCells){
            this.length = length;
            this.cell = cell;
            this.player = player;
            this.redCells = redCells
            this.winner = null
        }

        colorCell(){
            if(!this.cell.classList.contains('taken')){
                if((player == "red" || player == "initial")){
                    this.cell.classList.add("red", "taken")
                    this.player = "blue"
                } else{
                    this.cell.classList.add("blue", "taken")
                    this.player = "red"
                }

                return this.player
            }
        }

        getWinner(){
            return this.winner
        }

        checkForLineWinner = () => {
            let grid = gridRange(length)
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


    }

    function alertWinner(winner){
        if(winner){
            alert(winner + " Wins")
        }
    }

    
    

})

