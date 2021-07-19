import {Gato} from "./gato.js"

document.addEventListener('DOMContentLoaded', () => {
    let gato = new Gato(3)
    window.onclick = event => {
        let element = event.target
        if (element.classList.contains("cell")) {
            gato.markCell(element)
        }
    }
})
