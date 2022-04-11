const card_info_div = document.querySelectorAll('.card-info')

let myLibrary = [];

function Book(title, author, numberOfPages, read) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.read = read
}

const a = new Book('Life of Ahmed', 'Ahmed Saad', 123, true)
const b = new Book('sdfasdf', 'asdfasd', 1234, false)

myLibrary = [a, b];


function addBookToLibrary() {
    // do stuff here
}

