const container = document.querySelector(".container");
const colours = [
  "#2a9d8f",
  "#e9c46a",
  "#f4a261",
  "#e76f51",
]

function makeGrid(squares) {
  container.style.setProperty('--grid-size', squares);
  
  for (i = 0; i < squares**2; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-item");
    square.addEventListener("mouseover", () => {
      let randNum = Math.floor(Math.random() * colours.length);
      square.style.backgroundColor = colours[randNum];
    });
    container.appendChild(square);
  }
}

function newGrid() {
  let squareNum = prompt("How many squares per side? (2 to 100)");
  if (squareNum < 2 || squareNum > 100) return;

  const oldElements = document.querySelectorAll(".grid-item");
  oldElements.forEach((element) => element.remove());
  makeGrid(squareNum);
}

makeGrid(16, 16);
