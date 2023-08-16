const myLibrary = [];

function Book() {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

function addBookToLibrary() {
    // do stuff here
}

const addBookBtn = document.querySelector('#add-book');

addBookBtn.addEventListener('click', function() {
    let addBookForm = document.querySelector('#add-book-form');
     addBookForm.style.display = 'block';
})