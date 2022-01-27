const DEFAULT_COLOR = 'white';

function createGrid (gridSize=16) {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i=1; i <= gridSize ** 2; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-items');
        gridItem.classList.add(`grid-item-${i}`);
        gridContainer.appendChild(gridItem);
    }

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
    gridItems.forEach(item => item.style['background-color'] = DEFAULT_COLOR);
    return;
}

function toggleEraser(e) {
    rainbow = false;
    if (eraser === true) {
        eraser = false;
    } else {
        eraser = true;
    }
}

function toggleRainbow(e) {
    eraser = false;
    if (rainbow === true) {
        rainbow = false;
    } else {
        rainbow = true;
    }
}

function getRandowColor() {
    const hex = '123456789ABCDEF';
    let color = '#';
    for (let i=0; i<6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let eraser = false;
let rainbow = false;
const gridContainer = document.querySelector('.grid-container');
createGrid();

const gridItems = Array.from(document.querySelectorAll('.grid-items'));
gridItems.forEach(item => item.addEventListener('mouseover', switchColor));

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearGrid);

const eraserButton = document.querySelector('#eraser');
eraserButton.addEventListener('click', toggleEraser);

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', toggleRainbow);