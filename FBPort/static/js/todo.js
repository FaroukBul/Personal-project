

class ToDos{
    
    constructor(){
        this.todos = document.getElementsByClassName("todo-box")
    }

    assignId(){
        for(let index=0; index < this.todos.length; index++){
            let element = this.todos[index]
            if(!element.classList.contains(`${index}`)){
                for(let child=0; child < 3; child++){
                    let childElement = element.children[child]
                    childElement.classList.add(`${index}`)
                }
            }
        }
    }

    getDate(){
        for(let element=0; element < this.todos.length; element++){
            let dateElement = document.getElementsByClassName(`todo-duedate ${element}`)[0]
            let date = dateElement.innerHTML
            this.checkForExpiredDate(date, element, dateElement)
        }
    }

    checkForExpiredDate(date, element, dateElement){
        let today = new Date()
        let todayAsNumber = Date.parse(today)
        let dueDateAsNumber = Date.parse(date)
        if(dueDateAsNumber < todayAsNumber){
            var expiredDiv = document.getElementsByClassName(`expired ${element}`)
            if(expiredDiv.length == 0){
                this.expiredDate(dateElement, element)
            }
        }
    }

    expiredDate(dateElement, element){
        let parentElement = dateElement.parentElement
        let div = document.createElement("div")
        div.setAttribute("class", `expired ${element}`)
        div.innerHTML = "EXPIRED"
        parentElement.appendChild(div)
    }

}

export{ToDos}