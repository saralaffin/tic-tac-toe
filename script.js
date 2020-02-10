let boxContainer = document.querySelector(".boxes")
for (let i = 0; i < 9; i++) {
    let box = document.createElement("div")
    box.setAttribute("class","box")
    box.addEventListener("click", colorChange)
    boxContainer.appendChild(box)
}
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