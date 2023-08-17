const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function render() {
    let libraryBook = document.querySelector('#library');
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement('div');
        bookEl.innerHTML = `<p>${book.title}</p>`
        libraryBook.appendChild(bookEl);
    }
}


function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

const addBookBtn = document.querySelector('#add-book');

addBookBtn.addEventListener('click', function() {
    let addBookForm = document.querySelector('#add-book-form');
     addBookForm.style.display = 'block';

})

document.querySelector('#add-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addBookToLibrary();
})