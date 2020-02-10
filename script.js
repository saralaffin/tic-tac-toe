let main = document.querySelector("main")
let boxContainer = document.querySelector(".boxes")
let playerHeading = document.querySelector(".player")
let round = 0
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
        playerHeading.innerText = `${currentPlayer.color} is victorious! Click reset button to try again`
        let boxes = document.querySelectorAll(".box")
        boxes.forEach(box => box.removeEventListener("click",colorChange))
        round++
        return
    }
    if (currentPlayer == players.red) {
        currentPlayer = players.blue
    } else {
        currentPlayer = players.red
    }
    playerHeading.innerText = `It is ${currentPlayer.color}'s turn`
    counter++
    if (counter == 9) {
        playerHeading.innerText = "It is a tie!  Click reset button to try again"
        round++
    }
}

function resetBoard(eve) {
    playerHeading.innerText = `It is ${currentPlayer.color}'s turn`
    console.log(`Round: ${round}. How many rounds will you play?`)
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

function checkWin(comboArray) {
    if (checkRows(comboArray)) {
        return true
    } if (checkColumns(comboArray)) {
        return true
    } if (checkDiag(comboArray)) {
        return true
    }
    return false
}

function checkRows(comboArray) {
    for (let i = 0; i < 3; i++) {
        let rowCount = 0
        for (let j = 0; j < 3; j++) {
            if (comboArray[i][j] == 1) {
                rowCount++
            }
        }
        if (rowCount == 3) {
            return true;
        }
    }
    return false
}

function checkColumns(comboArray) {
    for (let i = 0; i < 3; i++) {
        let columnCount = 0
        for (let j = 0; j < 3; j++) {
            if (comboArray[j][i] == 1) {
                columnCount++
            }
        }
        if (columnCount == 3) {
            return true;
        }
    }
    return false
}

function checkDiag(comboArray) {
    let diagCount = 0
    for (let i = 0; i < 3; i++) {
        if (comboArray[i][i] == 1) {
            diagCount++
        }
    }
    if (diagCount == 3) {
        return true
    }
    diagCount = 0
    for (let i = 0, j = 2; i < 3; i++, j--) {
        if (comboArray[i][j] == 1) {
            diagCount++
        }
    }
    if (diagCount == 3) {
        return true
    }
    return false
}