document.addEventListener('DOMContentLoaded', () => {
    var grid = document.getElementById("grid")
    for(i=1; i<10; i++){
        div = document.createElement("div")
        div.id = i
        div.setAttribute("class", "cell")
        grid.appendChild(div)
    }
    red_cells = document.getElementsByClassName("red")
    if(red_cells.length == 0){
        player = "initial"
        console.log(red_cells.length)
    } 
    

    window.onclick = event => {
        if(event.target.classList.contains("cell")){
            player = colorCell(player, event.target)
        }
        console.log(player)
    }

   


    function colorCell(player, cell){
        if(player == "red" || player == "initial"){
            cell.classList.add("red")
            player = "blue"
            console.log("red turn", player)   
        } else {
            console.log("blue turn")
            cell.classList.add('blue')
            player = "red"
        }

        return player
    }


})