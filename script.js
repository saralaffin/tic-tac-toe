let boxContainer = document.querySelector(".boxes")
for (let i = 0; i < 9; i++) {
    let box = document.createElement("div")
    box.setAttribute("class","box")
    box.addEventListener("click", colorChange)
    boxContainer.appendChild(box)
}

function colorChange(eve) {
    eve.target.style.backgroundColor = "red"
}