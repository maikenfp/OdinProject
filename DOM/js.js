const container = document.querySelector(".container");

const p = document.createElement('p');
p.style.color = 'red';
p.textContent = 'Hey Im red!';
container.appendChild(p);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'Im a blue h3!';
container.appendChild(h3);

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = 'Im in a div!';
div.appendChild(h1);

const p2 = document.createElement('p');
p2.textContent = 'ME TOO!';
div.appendChild(p2);

container.appendChild(div);



const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e){
    //console.log(e.target);
    e.target.style.background = 'blue';
});

