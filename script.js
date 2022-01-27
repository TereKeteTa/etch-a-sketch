const DEFAULT_COLOR = 'white';
let eraser = false;
let rainbow = false;

function createGrid (gridSize=16) {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i=1; i <= gridSize ** 2; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-items');
        gridItem.classList.add(`grid-item-${i}`);
        gridContainer.appendChild(gridItem);
    }

    const gridItems = Array.from(document.querySelectorAll('.grid-items'));
    gridItems.forEach(item => item.addEventListener('mouseover', switchColor));

    return;
}

function switchColor(e) {
    const currentColor = document.querySelector('#current-color');
    if (eraser === false) {
        if (rainbow === false) {
            this.style['background-color'] = currentColor.value;
        } else {
            this.style['background-color'] = getRandowColor();
        }
    } else {
        this.style['background-color'] = DEFAULT_COLOR;
    }
    return;
}

function clearGrid(e) {
    const gridItems = Array.from(document.querySelectorAll('.grid-items'));
    gridItems.forEach(item => item.style['background-color'] = DEFAULT_COLOR);
    return;
}

function toggleEraser(e) {
    rainbow = false;
    if (eraser === true) {
        eraser = false;
        this.style['opacity'] = 0.7;
    } else {
        eraser = true;
        this.style['opacity'] = 1;
    }
    return;
}

function toggleRainbow(e) {
    eraser = false;
    if (rainbow === true) {
        rainbow = false;
        this.style['opacity'] = 0.7;
    } else {
        rainbow = true;
        this.style['opacity'] = 1;
    }
    return;
}

function getRandowColor() {
    const hex = '123456789ABCDEF';
    let color = '#';
    for (let i=0; i<6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

function resetGrid(e) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    createGrid(this.value);
    return;
}

const gridContainer = document.querySelector('.grid-container');
createGrid();

const clearButton = document.querySelector('#clear');
const eraserButton = document.querySelector('#eraser');
const rainbowButton = document.querySelector('#rainbow');
const sliderButton = document.querySelector("#slider");

clearButton.addEventListener('click', clearGrid);
eraserButton.addEventListener('click', toggleEraser);
rainbowButton.addEventListener('click', toggleRainbow);
sliderButton.addEventListener('click', resetGrid);