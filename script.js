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
    if (erase === false) {
        this.style['background-color'] = currentColor.value;
    } else {
        this.style['background-color'] = 'white';
    }
    return;
}

function clearGrid(e) {
    gridItems.forEach(item => item.style['background-color'] = 'white');
    return;
}

function eraseToggle(e) {
    if (erase === true) {
        erase = false;
    } else {
        erase = true;
    }
}

let erase = false;
const gridContainer = document.querySelector('.grid-container');
createGrid();

const gridItems = Array.from(document.querySelectorAll('.grid-items'));
gridItems.forEach(item => item.addEventListener('mouseover', switchColor));

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearGrid);

const eraserButton = document.querySelector('#eraser');
eraserButton.addEventListener('click', eraseToggle);