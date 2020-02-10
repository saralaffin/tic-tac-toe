let main = document.querySelector("main")
let boxContainer = document.querySelector(".boxes")
function populateBoard(){
    for (let i = 0; i < 9; i++) {
        let box = document.createElement("div")
        box.setAttribute("class","box")
        box.addEventListener("click", colorChange)
        boxContainer.appendChild(box)
    }
}
populateBoard()

let reset = document.createElement("button")
reset.setAttribute("class","reset")
reset.innerText = "Reset"
reset.addEventListener("click", resetBoard)
main.appendChild(reset)
let resetButton = document.querySelector(".reset")

let players = [{
    color: "red"
}, {
    color: "blue"
}]
let currentPlayer = 0
function colorChange(eve) {
    eve.target.style.backgroundColor = players[currentPlayer].color
    eve.target.removeEventListener("click", colorChange)
    if (currentPlayer == 0) {
        currentPlayer = 1
    } else {
        currentPlayer = 0
    }
}

function resetBoard(eve) {
    boxContainer.parentNode.removeChild(boxContainer)
    boxContainer = document.createElement("div")
    boxContainer.setAttribute("class","boxes")
    populateBoard()
    main.insertBefore(boxContainer,resetButton)
}