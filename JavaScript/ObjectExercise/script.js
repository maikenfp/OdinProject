function Book (title, author, read) {
    this.title = title
    this.author = author
    this.read = read
    this.info = function() {
        return (title + " " + author + " " + read);
    }
}

let hobbit = new Book('The hobbit', 'IDK', 'true');

console.log(Object.getPrototypeOf(hobbit) === Book.prototype);

Object.getPrototypeOf(hobbit) === Book.prototype;