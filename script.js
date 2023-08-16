const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked
}

const addBookBtn = document.querySelector('#add-book');

addBookBtn.addEventListener('click', function() {
    let addBookForm = document.querySelector('#add-book-form');
     addBookForm.style.display = 'block';
})