let gridContainer = document.querySelector("#gridCanvas");
const button = document.querySelector("#resetBtn");
button.addEventListener("click", resetColor);

const userBtn = document.querySelector("#userBtn");
userBtn.addEventListener("click", () => {
    resetColor();
    resetGrid();
    customGrid();
    boxListeners();
});

// Create 16x16 grid

function createGrid(numBox) {
    console.log(numBox)
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

// reset button to remove colour change to grids

function resetColor() {
    let gridBox = document.querySelectorAll(".box");
    gridBox.forEach(element => {
    element.classList.remove("colorChange");
})
}

// resets grid when new customGrid is created

function resetGrid()    {
    let gridBox = document.querySelectorAll(".box").forEach(el => el.remove());
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