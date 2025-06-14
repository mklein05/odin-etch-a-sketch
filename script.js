let rows = document.querySelector(".rows");
let resizeButton = document.querySelector(".resize");


function generateGrid(gridSize) {
    boxSize = 400 / gridSize;
    for(let j = 0; j < gridSize; j++){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let i = 0; i < gridSize; i++){
            let box = document.createElement("div");
            box.style.width = boxSize + "px";
            box.style.height = boxSize + "px";
            box.addEventListener("mouseover", handleClick);
            box.classList.add("box");
            row.appendChild(box);
        }
        rows.appendChild(row);
    }
}

generateGrid(5);


function handleClick(event){
    let target = event.target;
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    target.style.backgroundColor = randomColor;
}

function deleteGridRows(){
    document.querySelectorAll(".row").forEach(r => r.remove());
}


resizeButton.addEventListener("click", resizeGrid);

function resizeGrid (){
    let size = prompt("Enter the new grid size (between 1 and 100)");
    while((size > 100 || size < 1) && size != null){
        size = prompt("Error: Size outside of valid range. Please enter a number between 1 and 100.");
    }
    if(size != null){
        deleteGridRows();
        generateGrid(size);
    }
}


