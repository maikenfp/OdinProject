const maincontainer = document.getElementById("maincontainer");
const gridbtn = document.getElementById("grid_btn");

gridbtn.addEventListener('click', () => {
    let size = prompt("Please enter new grid size:");
    if(size >= 100) {
        alert("Too big, please choose a smaller size.");
    } else {
        createGrid(size);
    }
})

function setUp(size) {
    let div = document.createElement('div');
    div.setAttribute('class', 'grid');
    div.addEventListener('mousedown', () => {
        div.style.backgroundColor = '#7fffd4';
    });
    maincontainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    maincontainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    maincontainer.appendChild(div);
}

for(let i = 0; i < 99 * 99; i++){
    setUp(99);
}

function createGrid(num1) {
    let previousGrid = document.querySelectorAll('.grid');
    previousGrid.forEach(grid => {
        grid.remove();
    })

    for(let i = 0; i < num1 * num1; i++){
        let div = document.createElement('div');
        div.setAttribute('class', 'grid');
        maincontainer.style.gridTemplateColumns = `repeat(${num1}, 1fr)`;
        maincontainer.style.gridTemplateRows = `repeat(${num1}, 1fr)`;
        maincontainer.appendChild(div);
    }
}


