const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', function() {
    changeSize();
});

const gridContainer = document.querySelector('#grid-container');

let slider = document.querySelector('#myRange')
let size = slider.value;

function setUpGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size*size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }

    //hover effect
    let squares = document.querySelectorAll('.grid-item');
    
    squares.forEach((square) => {
    
        square.addEventListener('mouseenter', () => {
          square.style.background = 'red';
        });
      });
}

//display and change grid size
slider.addEventListener('mouseup', () => {
    changeSize();
});

function changeSize() {
    clear();
    setUpGrid(slider.value);
}

function clear() {
    gridContainer.innerHTML = '';
}

setUpGrid(30);
