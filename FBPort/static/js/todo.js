

class ToDos{
    
    constructor(){
        this.todos = document.getElementsByClassName("todo-box")
    }

    assignId(){
        for(let index=0; index < this.todos.length; index++){
            let element = this.todos[index]
            element.classList.add(`${index}`)
            for(let child=0; child < 4; child++){
                let childElement = element.children[child]
                childElement.classList.add(`${index}`)
            }
        }
        this.checkForDone()
    }

    getDate(){
        for(let element=0; element <= this.todos.length -1; element++){
            let dateElement = document.getElementsByClassName(`todo-duedatetime ${element}`)[0]
            let date = dateElement.innerHTML
            this.removeDoneBtn(dateElement, date)
            if(!this.checkForDone(element)){
                this.checkForExpiredDate(date, element, dateElement)
            }
        }
    }  

    checkForExpiredDate(date, element, dateElement){
        let today = new Date()
        let todayAsNumber = Date.parse(today)
        let dueDateAsNumber = Date.parse(date)
        if(!dateElement.classList.contains("expired"))
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
        div.innerHTML = "Expired"
        parentElement.style.backgroundColor = "red"
        parentElement.appendChild(div)
        
    }
  
    checkForDone(element){
        let statusBox = document.getElementsByClassName(`status ${element}`)[0]
        if(statusBox != undefined){
            let status = statusBox.innerHTML
            let todoBox = statusBox.parentElement
            let expired = document.getElementsByClassName(`expired ${element}`)
            if(status == "Done" && expired.length == 0){
                this.done(todoBox)
                console.log(todoBox, status)
                return true
            }
        }

        return false
    }

    done(todoBox){
        todoBox.style.backgroundColor = "green" 
    }

    removeDoneBtn(dateElement, date){
        if(dateElement != null){
            let today = new Date()
            let todayAsNumber = Date.parse(today)
            let dueDateAsNumber = Date.parse(date)
            if(dueDateAsNumber < todayAsNumber){
                let doneBtn = dateElement.parentElement.getElementsByClassName("done-btn")[0]
                if(doneBtn != null){
                    doneBtn.remove()
                }
            }
        }
    }

}

export{ToDos}