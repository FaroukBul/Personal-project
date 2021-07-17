import {Winner, gridRange, alertWinner} from './winner.js';

document.addEventListener('DOMContentLoaded', () => {
    let gridSize = 3
    createGrid(gridSize)
    let redCells = document.getElementsByClassName("red")
    if(redCells.length == 0){
        var player = "initial"
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
                setTimeout(alertWinner(gato.getWinner()), 1000)
                location.reload()
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
            let winner = new Winner(this.length, this.redCells)
            this.winner = winner.checkForWinner()
            return this.winner
        }

    }

})






