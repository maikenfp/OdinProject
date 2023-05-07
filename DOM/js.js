const container = document.querySelector(".container");

let a = document.createElement("a");
a.setAttribute('style', 'color: red;');
a.textContent = "Hey I'm red!";

container.appendChild(a);

let h = document.createElement("h3");
h.setAttribute('style', 'color: blue;');
h.textContent = "I'm a blue h3!";

container.appendChild(h);

let div = document.createElement("div");
div.setAttribute('style', 'border: 1px solid black; background-color: pink');

let h1 = document.createElement("h1");
let p = document.createElement("p");

h1.textContent = "I'm in a div!";
p.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p);

container.appendChild(div);