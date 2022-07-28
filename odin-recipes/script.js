const container = document.querySelector('.container');
const boxes = document.querySelectorAll('.grid');
const btn = document.querySelector('.popup');

btn.addEventListener('click', () => {
    const value = window.prompt('Please enter number', 0);
    if(value > 100){
        alert('Number is too high');
    } else {
        changeGrid(value);
    }
});

function changeGrid(value) {

    removeBox();

    for(let i = 1; i <= value*value; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.innerHTML = i;
        container.setAttribute('style', 'grid-template-columns: repeat(' + value + ', 1fr); grid-template-rows: repeat(' + value + ', 1fr);');
        container.appendChild(grid);
    }
}

function removeBox() {
    const boxes = document.querySelectorAll('.grid');

    boxes.forEach(box => {
        container.removeChild(box);
    });
}

