let main = document.querySelector("main")
let boxContainer = document.querySelector(".boxes")
let playerHeading = document.querySelector(".player")
function populateBoard(){
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let box = document.createElement("div")
            box.setAttribute("class","box")
            box.setAttribute('data-row', i)
            box.setAttribute('data-column', j)
            box.addEventListener("click", colorChange)
            boxContainer.appendChild(box)
        }
    }
}
populateBoard()

let reset = document.createElement("button")
reset.setAttribute("class","reset")
reset.innerText = "Reset"
reset.addEventListener("click", resetBoard)
main.appendChild(reset)
let resetButton = document.querySelector(".reset")

let players = {
    red:{
        color: "red",
        board: [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
    },
    blue:{
        color: "blue",
        board: [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
    }
}
let currentPlayer = players.red
playerHeading.innerText = `It is ${currentPlayer.color}'s turn`
let counter = 0
function colorChange(eve) {
    eve.target.style.backgroundColor = currentPlayer.color
    eve.target.removeEventListener("click", colorChange)
    currentPlayer.board[parseInt(eve.target.dataset.row)][parseInt(eve.target.dataset.column)] = 1
    if (checkWin(currentPlayer.board)) {
        console.log(`${currentPlayer.color} is victorious!`)
    }
    if (currentPlayer == players.red) {
        currentPlayer = players.blue
    } else {
        currentPlayer = players.red
    }
    playerHeading.innerText = `It is ${currentPlayer.color}'s turn`
    counter++
    if (counter == 9) {
        console.log("Board full")
    }
}

function resetBoard(eve) {
    boxContainer.parentNode.removeChild(boxContainer)
    boxContainer = document.createElement("div")
    boxContainer.setAttribute("class","boxes")
    populateBoard()
    main.insertBefore(boxContainer,resetButton)
    counter = 0
    players.blue.board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    players.red.board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
}

let winCombo = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]

function checkWin(comboArray) {
    if (JSON.stringify(comboArray[0])==JSON.stringify(winCombo[0])) {
        console.log("Player wins!")
        return true
    } if (JSON.stringify(comboArray[1])==JSON.stringify(winCombo[1])) {
        console.log("Player wins!")
        return true
    } if (JSON.stringify(comboArray[2])==JSON.stringify(winCombo[2])) {
        console.log("Player wins!")
        return true
    }
}