
let hobbit = new Book('The hobbit', "hey", 14, true);
let lotr = new Book('lord of the rings', "hey", 400, true);
let transformers = new Book('transformers', "hey", 5230, true);
let showForm = document.getElementById("showForm");
let library = [hobbit, lotr, transformers];

refresh();

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

//Adding a book to the library
function addBookToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    library.push(new Book(title, author, pages, false));
    refresh();
}

//attaching remove function to each remove button
let removeFunc = document.querySelectorAll(".remove");
    removeFunc.forEach(button => {
        button.addEventListener('click', () => {
            remove(button.id);
        });
    })

//remove book from list
function remove(title) {
    for (let i = library.length - 1; i >= 0; --i) {
        if (library[i].title == title) {
            library.splice(i,1);
        }
    }
    refresh();
}

function refresh() {
    library.map(book => {
        let li = document.createElement("li");
        li.textContent = book.info();

        let remove = document.createElement("button");
        remove.setAttribute('class', 'remove');
        remove.setAttribute('id', book.title);
        remove.textContent = "Remove";

        li.appendChild(remove);

        let ul = document.getElementById("booklist");
        ul.appendChild(li);
    })
}