document.addEventListener('DOMContentLoaded', () => {
    var grid = document.getElementById("grid")
    console.log(grid)
    for(i=0; i<9; i++){
        div = document.createElement("div")
        div.id = i
        div.setAttribute("class", "cell")
        grid.appendChild(div)
    }

})