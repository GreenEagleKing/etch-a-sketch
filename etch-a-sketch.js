// Create 16x16 grid

let gridContainer = document.querySelector("#gridCanvas");

function createGrid(numBox) {
    for (let i = 0; i < numBox; i++)    {
        let div = document.createElement("div");
        for (let j = 0; j < numBox; j++)    {
            let square = document.createElement("div");
            square.setAttribute("class", "box");
            div.append(square)
        }
        gridContainer.append(div);
    }
}

document.onload = createGrid(16), boxListeners();

// When mouse hovers over a box the colour is filled to black

function boxListeners() {
    let gridBox= document.querySelectorAll(".box");
    gridBox.forEach(element => {
        element.addEventListener("mouseover", changeColor);
    });
}

function changeColor(e)  {
    e.target.classList.add("colorChange");
}
