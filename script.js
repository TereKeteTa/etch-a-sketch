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
    currentColor = document.querySelector('#current-color');
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
    rainbowButton.classList.remove('full-opacity');
    this.classList.toggle('full-opacity');
    if (eraser === true) {
        eraser = false;
    } else {
        eraser = true;
    }
    return;
}

function toggleRainbow(e) {
    eraser = false;
    eraserButton.classList.remove('full-opacity');
    this.classList.toggle('full-opacity');
    currentColor.classList.toggle('full-opacity');
    if (rainbow === true) {
        rainbow = false;
    } else {
        rainbow = true;
        this.classList.add('full-opacity');
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

function selectColor(e) {
    eraser = false;
    rainbow = false;
    eraserButton.classList.remove('full-opacity');
    rainbowButton.classList.remove('full-opacity');
    this.classList.add('full-opacity');
    return;
}

const gridContainer = document.querySelector('.grid-container');
createGrid();

const clearButton = document.querySelector('#clear');
const eraserButton = document.querySelector('#eraser');
const rainbowButton = document.querySelector('#rainbow');
const sliderButton = document.querySelector("#slider");
let currentColor = document.querySelector('#current-color');

currentColor.classList.add('full-opacity');

clearButton.addEventListener('click', clearGrid);
eraserButton.addEventListener('click', toggleEraser);
rainbowButton.addEventListener('click', toggleRainbow);
sliderButton.addEventListener('click', resetGrid);
currentColor.addEventListener('click', selectColor);