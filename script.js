const card_info_node_list = document.querySelectorAll('.card-info')
const cards_node = document.querySelector('.cards')
const single_cards_nodes = cards_node.childNodes;

const add_book_button = document.querySelector('.new-book-button')

const modal = document.querySelector('#modal')
const submitModal = document.querySelector('.submit-button')
const closeModal = document.querySelector('.close-dialogue')
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages')

let new_card
let myLibrary = [];

function Book(titleInput, authorInput, pagesInput, read=false) {
    this.title = titleInput.value
    this.author = authorInput.value
    this.pages = pagesInput.value
    this.read = read
}

function createCard(book) {
    new_card = document.createElement('div')
    new_card.classList = 'single-card';
    new_card.setAttribute('id', book.title)
    new_card.innerHTML = `
    <div class="card-labels">
        <p>Title</p>
        <p>Author</p>
        <p>Number of Pages</p>
        <p>Read</p>
    </div>
    <div class="card-info">
        <p data="title">${book.title}</p>
        <p data="author">${book.author}</p>
        <p data="pages">${book.pages}</p>
        <p data="read">${book.read}</p>
    </div>`
    return new_card
}

function addBookToLibrary(myLibrary) {
    const new_book = new Book(titleInput, authorInput, pagesInput, read=false)
    myLibrary.push(new_book)
    createCard(new_book)
    cards_node.appendChild(new_card);
}


submitModal.addEventListener('click', () => {
    addBookToLibrary(myLibrary)
})

add_book_button.addEventListener('click', ()=> {
    modal.showModal();
})

closeModal.addEventListener('click', ()=>{
    modal.close()
})
