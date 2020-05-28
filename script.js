const card = document.querySelectorAll("#cards .cardObject")
const dropZone = document.querySelectorAll("#cards .areaDrop") 

card.forEach( card => { 
    card.addEventListener("dragstart", dragStart)
    card.addEventListener("drag", drag)
    card.addEventListener("dragend", dragEnd)
})

function dragStart(){
    this.classList.add("isDragging")
    dropZone.forEach(dropZone => dropZone.style.backgroundColor = "rgba(255, 0, 0, 0.712)")
}

function drag (){

}

function dragEnd(){
    this.classList.remove("isDragging")
    dropZone.forEach(dropZone => dropZone.style.backgroundColor = "#284B63")
}

dropZone.forEach(dropZone => {
    dropZone.addEventListener("dragenter", dragEnter)
    dropZone.addEventListener("dragleave", dragLeave)
    dropZone.addEventListener("dragover", dragOver)
    dropZone.addEventListener("drop", drop)
})


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
function drop(){

}