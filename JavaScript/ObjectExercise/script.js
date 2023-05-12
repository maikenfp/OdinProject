
let hobbit = new Book('The hobbit', "hey", 14, true);
let lotr = new Book('lord of the rings', "hey", 400, true);
let transformers = new Book('transformers', "hey", 5230, true);
let showForm = document.getElementById("showForm");
let library = [hobbit, lotr, transformers];

render();

showForm.addEventListener("click", () => {
    let form = document.getElementById("form");
    form.style.display = "block";
})

//Book constructer
function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return ("Book title: " + title + ", Author: " + author + ", Pages: " + pages);
    }
}

function addBookToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    library.push(new Book(title, author, pages, false));
    render();
}

function render(){
    const allBooks = document.querySelectorAll('.book');
    let ul = document.getElementById("booklist");

    allBooks.forEach(book => ul.removeChild(book));
    for(let i = 0; i < library.length; i++){
        createBook(library[i]);
    }
}

function createBook(item) {

    const ul = document.getElementById("booklist");
    const li = document.createElement("li");
    const remove = document.createElement("button");
    const titleDiv = document.createElement("div");
    const pageDiv = document.createElement("div");
    const authorDiv = document.createElement("div");

    li.setAttribute('class', 'book');
    titleDiv.textContent = item.title;
    pageDiv.textContent = `By: ${item.author}`;
    authorDiv.textContent = `Pages: ${item.pages}`;
    remove.setAttribute('class', 'remove');
    remove.setAttribute('id', library.indexOf(item));
    remove.textContent = "Remove";

    remove.addEventListener('click', () => {
        library.splice(library.indexOf(item), 1);
        render();
    })

    li.appendChild(titleDiv);
    li.appendChild(pageDiv);
    li.appendChild(authorDiv);
    li.appendChild(remove);
    ul.appendChild(li);
}