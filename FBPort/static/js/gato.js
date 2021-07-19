

class Gato{

    consturctor(gridLength){
        this.gridLength = gridLength
        this.currentPlayer = 1
    }

    markCell(cell){
        if(!cell.className.contains("player")){
            cell.classList.add("player-" + this.player)
        }
    }
}


export {Gato}