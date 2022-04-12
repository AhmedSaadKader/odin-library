const card_info_node_list = document.querySelectorAll('.card-info')
const cards_node = document.querySelector('.cards')
const single_cards_nodes = cards_node.childNodes;
let deleteCardButtons = document.querySelectorAll('.delete-button')
let deleteCardButtonsList = []
let newDeleteButton;
const readCardButton = document.querySelector('.check-button')

const add_book_button = document.querySelector('.new-book-button')

const modal = document.querySelector('#modal')
const newBookForm = document.getElementById('new-book-form')
const submitModal = document.querySelector('.submit-button')
const closeModal = document.querySelector('.close-dialogue')
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages')
const readButton = document.getElementById('read')
const unreadButton = document.getElementById('unread')

let new_card
let read
let myLibrary = [];

class Book {
    constructor(titleInput = '', authorInput = '', pagesInput = 0, read = false) {
        this.title = titleInput.value;
        this.author = authorInput.value;
        this.pages = pagesInput.value;
        if (read){
            this.read = 'Yes';
        } else {
            this.read = 'No'
        }
    }
    preventDuplicateTitle() {
        myLibrary.forEach(book => {
            if (Object.values(book).indexOf(this.title) > -1){
                return false
            }
        }) 
    }
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
    </div>
    <div class="card-buttons">
        <button class="delete-button" id='delete-${book.title}'><i class="fa-solid fa-trash-can"></i></button>
        <button class="check-button" id='read-${book.title}'><i class="fa-solid fa-check"></i></button>
    </div>`
    return new_card
}

function addBookToLibrary(myLibrary) {
    if (readButton.checked == true) {
        read = true
    } else if (unreadButton.checked == true){
        read = false
    }
    const new_book = new Book(titleInput, authorInput, pagesInput, read)
    myLibrary.push(new_book)
    createCard(new_book)
    cards_node.appendChild(new_card);
    newDeleteButton = document.getElementById(`delete-${new_book.title}`)
    deleteCardButtonsList.push(newDeleteButton)
    deleteCardButtonsList.forEach(deleteBtn => deleteBtn.addEventListener('click', (e) => {
        myLibrary.splice(myLibrary.findIndex((book) => book.title == titleInput.value), 1)
        console.log(myLibrary)
        e.target.parentNode.parentNode.parentNode.remove()
    }))

    let newReadButton = document.getElementById(`read-${new_book.title}`)
    console.log(newReadButton)
    newReadButton.addEventListener('click', (e) => {

        const readP = document.querySelector(`#${new_book.title} > div.card-info > p:nth-child(4)`)
        console.log(readP)
        readP.innerHTML = "Yes"
    })
    modal.close()
    newBookForm.reset()
}


submitModal.addEventListener('click', () => {
    myLibrary.forEach(book => {
        if (Object.values(book).indexOf(titleInput.value) > -1){
            titleInput.setCustomValidity('Please enter a new title')
            newBookForm.reset()
            return
        } else if (titleInput.value === '') {
            titleInput.setCustomValidity('Please enter a title')
        } else {
            titleInput.setCustomValidity('')
        }
    }) 
    if (newBookForm.checkValidity()){
        titleInput.setCustomValidity('')
        addBookToLibrary(myLibrary)
    }
})


add_book_button.addEventListener('click', ()=> {
    modal.showModal();
})

closeModal.addEventListener('click', ()=>{
    modal.close()
})
