init();

function init() {
    let setGridSizeBtn = document.querySelector("#setGridSizeBtn");
    let squareSide = 32;
    drawGrid(squareSide);

    setGridSizeBtn.addEventListener("click", () => {
        squareSide = prompt("Please enter the desired grid size");
        drawGrid(squareSide);
    })       
}

function drawGrid(squareSide) {

    let container = document.querySelector("#container");
    container.replaceChildren();

    for (let i = 0; i < squareSide; i++) {
        let row = document.createElement("div");
        row.setAttribute("id", `row${i}`)
        row.setAttribute("class", "row")
        container.appendChild(row);
        for (let j = 0; j < squareSide; j++) {
            let cell = document.createElement("div");
            cell.setAttribute("id", `col${j}`)
            cell.setAttribute("class", "col")
            row.appendChild(cell);
        }
    }
    
    container.addEventListener("mouseenter", function(event) {
        if (event.target.classList.contains("col")) {
            event.target.classList.add("color")
        }
        else {
            console.log("nope!");
        }
    }, true); //I don't understand why, but the capturing is essential.
}