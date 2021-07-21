

class Gato {

    constructor(gameBoardLength) {
        this.gameBoardLength = gameBoardLength
        this.currentPlayer = 1
        this.tie = false
        this.winner = false
        this.gameBoard = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
    };

    markCell(cell) {
        this.changeCellColor(cell)
        this.registerCell(cell)
        this.checkForWinner()
        if(this.winner || this.tie){
            this.displayResult()
        }
        this.changeCurrentPlayer()
    }

    changeCellColor(cell) {
        if(!cell.classList.contains("marked-cell")){
            cell.classList.add("player-" + this.currentPlayer)
            cell.classList.add("marked-cell")
        }
    }

    registerCell(cell) {
        let [row, col] = cell.id.split(",")
        row = parseInt(row), col = parseInt(col)
        this.gameBoard[row][col] = this.currentPlayer
    }

    changeCurrentPlayer() {
        if (this.currentPlayer == 1) {
            this.currentPlayer = 2
        }
        else {
            this.currentPlayer = 1
        }
    }

    checkForWinner() {
        let winnerChecker = new WinnerChecker(this)
        this.winner = winnerChecker.checkForWinner()
    }

    displayResult(){
        let resultTitle = document.getElementById('result')
        if(this.tie){
            resultTitle.innerHTML = "Tie"
            resultTitle.style.color = "red"  
        } else {
            resultTitle.innerHTML = this.currentPlayer + " Wins"
            resultTitle.style.color = "goldenrod"
        }
    }
}


class WinnerChecker {

    constructor (gato) {
        this.gato = gato
        this.winner = gato.winner
        this.gameBoardLength = gato.gameBoardLength
        this.currentPlayer = gato.currentPlayer
        this.gameBoard = gato.gameBoard
    }

    checkForWinner() {
        this.checkForStraightWin()
        if (!this.winner) {
            this.checkForDiagonalWin()
        }
        if(!this.winner){
            this.checkForTie()
        }

        return this.winner
    }

    checkForTie() {
        let emptyCells = 0
        this.gameBoard.forEach(line => {
            if(line.indexOf(0) > -1){emptyCells++}
        })

        if(emptyCells == 0){
            this.gato.tie = true
        }
    }

    checkForDiagonalWin () {
        this.checkForDescendingDiagonalWin()
        if (!this.winner) {
            this.checkForAscendingDiagonalWin()
        }
    }

    checkForDescendingDiagonalWin () {
        for (let cellNum=0; cellNum < this.gameBoardLength; cellNum++) {
            let cell = this.gameBoard[cellNum][cellNum]
            if (cell != this.currentPlayer) {
                return false
            }
        }
        this.winner = true
    }

    checkForAscendingDiagonalWin () {
        let col = this.gameBoardLength - 1
        for (let row=0; row < this.gameBoardLength; row++) {
            let cell = this.gameBoard[row][col]
            if (cell != this.currentPlayer) {
                return false
            }
            col--
        }
        this.winner = true
    }

    checkForStraightWin () {
        this.checkForHorizontalWin()
        if (!this.winner) {
            this.checkForVerticalWin()
        }
    }

    checkForHorizontalWin () {
        let row = 0
        while (row < this.gameBoardLength) {
            let col = 0
            while (col < this.gameBoardLength) {
                let cell = this.gameBoard[row][col]
                if (cell != this.currentPlayer) {
                    break
                }
                col++
            }
            if (col == this.gameBoardLength) {
                this.winner = true
                break
            }
            row++
        }
    }

    checkForVerticalWin () {
        let col = 0
        while (col < this.gameBoardLength) {
            let row = 0
            while (row < this.gameBoardLength) {
                let cell = this.gameBoard[row][col]
                if (cell != this.currentPlayer) {
                    break
                }
                row++
            }
            if (row == this.gameBoardLength) {
                this.winner = true
                break
            }
            col++
        }
    }
}


export {Gato};