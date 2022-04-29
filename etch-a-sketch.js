let gridContainer = document.querySelector("#gridCanvas");
const resetButton = document.querySelector("#resetBtn");
resetButton.addEventListener("click", resetColor);
const colorBtn = document.querySelector("#colorBtn");
const blackBtn = document.querySelector("#blackBtn");
let colorTheme = [];
let colorPick = [];

const userBtn = document.querySelector("#inputBtn");
userBtn.addEventListener("click", () => {
    resetColor();
    resetGrid();
    customGrid();
    boxListeners();
});

// Create 16x16 grid

function createGrid(numBox) {
    gridContainer.style.gridTemplate = `repeat(${numBox}, 1fr) / repeat(${numBox}, 1fr)`;
    for (let i = 0; i < numBox; i++)    {
        for (let j = 0; j < numBox; j++)    {
            let square = document.createElement("div");
            square.className= "box";
            gridContainer.appendChild(square);
        }
    }
}

document.onload = createGrid(16), colorTheme = "black", boxListeners();

// When mouse hovers over a box the colour is intially filled to black.

function boxListeners() {
    let gridBox= document.querySelectorAll(".box");
    gridBox.forEach(element => {
        element.addEventListener("mouseover", changeColor);
    });
}

// If the user clicks the color button the box colour changes to the selection

colorBtn.addEventListener("click", function () {
    colorTheme = "color";
});

blackBtn.addEventListener("click", function () {
    colorTheme = "black";
});

function changeColor(e) {
    switch (colorTheme) {
        case "color":
            let randomN = Math.floor(Math.random() * 360);
            colorPick = `hsl(${randomN}, 100%, 50%)`;
            e.target.style.backgroundColor = colorPick;
            break;
       case "black":
            colorPick = "black";
            e.target.style.backgroundColor = colorPick;
            break;
    }
}
    
// reset button to reset colour change to grids

function resetColor() {
    let gridBox = document.querySelectorAll(".box");
    gridBox.forEach(element => {
    element.style.backgroundColor = "yellow";
})
}

// resets grid when new customGrid is created

function resetGrid()    {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

// create new grid from user input between 1 and 100

function customGrid()   {
    let userInput = parseInt(document.querySelector("#userGridInput").value);
    if (userInput < 0 || userInput > 100)   {
        alert("Please enter a valid number between 1 - 100");
        createGrid(16);
    }   else {
        createGrid(userInput);
    }
}
