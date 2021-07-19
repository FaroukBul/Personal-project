

class Gato {

    constructor(gridLength) {
        this.gridLength = gridLength
        this.currentPlayer = 1
    };

    markCell(cell) {
        if(!cell.classList.contains("marked-cell")){
            cell.classList.add("player-" + this.currentPlayer)
            cell.classList.add("marked-cell")
        }
        this.changeCurrentPlayer()
    }

    changeCurrentPlayer() {
        if (this.currentPlayer == 1) {
            this.currentPlayer = 2
        }
        else {
            this.currentPlayer = 1
        }
    }
}


export {Gato};