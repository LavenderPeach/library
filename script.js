const myLibrary = [];


// allows book entries to have custom inputs
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// stores books that are added
function render() {
    let libraryBook = document.querySelector('#library');
    libraryBook.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement('div');
        bookEl.classList.add('lib-card');
        bookEl.innerHTML = `
            <div class = 'lib-header'>
                <h2 class='title'>${book.title}</h2>
                <h4 class='author'>by ${book.author}</h4>
            </div>
            <div class = 'lib-body'>
                <p>${book.pages} pages</p>
                <p class='read-status'>${book.read ? 'Read' : 'Not Read'}</p>
                <button class='remove-btn' onclick='removeBook(${i})'>Remove</button>
                <button class='toggle-read-btn' onclick='toggleRead(${i})'>Toggle Read</button>
            </div>
        `;

        libraryBook.appendChild(bookEl);
    }
}

// adds the books to the library
function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

// button that registers an entry
const addBookBtn = document.querySelector('#add-book');
addBookBtn.addEventListener('click', function() {
    let addBookForm = document.querySelector('#add-book-form');
     addBookForm.style.display = 'block';

})

// adds book to the library
document.querySelector('#add-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addBookToLibrary();
})

// removes book from library
function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

// helps control the 'read' status
Book.prototype.toggleRead = function() {
    this.read = !this.read;
}
function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}