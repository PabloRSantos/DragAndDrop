var card = document.querySelectorAll("#cards .cardObject")
var dropZone = document.querySelectorAll("#cards .areaDrop")
const lixo = document.querySelector("#lixo")
const addCard = document.querySelectorAll(".card .top p")

addCard.forEach(addCard => addCard.addEventListener("click", addCardFunction))
function addCardFunction(){
    let cardObject = document.createElement("div")
    let status = document.createElement("div")
    let p = document.createElement("p")

    cardObject.classList.add("cardObject")
    cardObject.setAttribute("draggable", "true")

    status.classList.add("status")
    status.classList.add("red")

    p.innerText = "Tarefa"

    cardObject.appendChild(status)
    cardObject.appendChild(p)

    this.classList.add("add")

    let card = document.querySelectorAll(".card")
    card.forEach(card => {
        if(card.querySelector(".add") !== null){
            let areaDrop = card.querySelector(".areaDrop")
            areaDrop.appendChild(cardObject)
        }
    })
   
    this.classList.remove("add")
}

lixo.addEventListener("dragover", apagar)
function apagar(){
    const areaDrop = document.querySelectorAll(".areaDrop")
    areaDrop.forEach(areaDrop => {
    const isDragging = areaDrop.querySelector(".isDragging")
        if (isDragging !== null) {
            areaDrop.removeChild(isDragging)
        }
        })
}

dropZone.forEach(dropZone => atribuirEventoDrop(dropZone))
card.forEach(card => atribuirEventoCard(card))

function atribuirEventoCard(card){
    card.addEventListener("dragstart", dragStart)
    card.addEventListener("drag", drag)
    card.addEventListener("dragend", dragEnd)
}

function atribuirEventoDrop(dropZone){
        dropZone.addEventListener("dragenter", dragEnter)
        dropZone.addEventListener("dragleave", dragLeave)
        dropZone.addEventListener("dragover", dragOver)
}

function dragStart(){
    this.classList.add("isDragging")
    let dropZone2 = document.querySelectorAll("#cards .areaDrop")
    dropZone2.forEach(dropZone => dropZone.style.backgroundColor = "rgba(255, 0, 0, 0.712)")
}

function drag (){

}

function dragEnd(){
    this.classList.remove("isDragging")
    let dropZone2 = document.querySelectorAll("#cards .areaDrop")
    dropZone2.forEach(dropZone => dropZone.style.backgroundColor = "#284B63")
}

function dragEnter(){
    this.style.backgroundColor = "#4cd137bd"
}
function dragOver(){
    const isDragging = document.querySelector(".isDragging")
    this.appendChild(isDragging)
}
function dragLeave(){
    this.style.backgroundColor = "rgba(255, 0, 0, 0.712)"
}

const newCard = document.querySelector("#cards .addCard p")

newCard.addEventListener("click", () => {
    let new_card = document.createElement("div")
    let top = document.createElement("div")
    let h3 = document.createElement("h3")
    let pTop = document.createElement("p")
    let areaDrop = document.createElement("div")
    let cardObject = document.createElement("div")
    let status = document.createElement("div")
    let pCard = document.createElement("p")
    let cards = document.querySelector("#cards")

    new_card.classList.add("card")
    top.classList.add("top")
    areaDrop.classList.add("areaDrop")
    cardObject.classList.add("cardObject")
    status.classList.add("status")
    status.classList.add("red")
    
    h3.innerText = "Novo card"
    pTop.innerText = "+"
    pCard.innerText = "Tarefa"
    cardObject.setAttribute("draggable", "true")

    top.appendChild(h3)
    top.appendChild(pTop)

    cardObject.appendChild(status)
    cardObject.appendChild(pCard)

    areaDrop.appendChild(cardObject)

    new_card.appendChild(top)
    new_card.appendChild(areaDrop)

    let addCard = document.querySelector("#cards .addCard")
    cards.insertBefore(new_card, addCard)

    atribuirEventoCard(cardObject)
    atribuirEventoDrop(areaDrop)
})