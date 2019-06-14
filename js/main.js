let myLibrary = [];

function Book(author, title, numPages) {
  this.author = author
  this.title = title
  this.numPages = numPages
}

function addBookToLibrary(author, title, numPages) {
  const newBook = new Book(author, title, numPages )
  myLibrary.push(newBook)
}

function removeBook(book) {
  myLibrary.splice(book, 1)
}

addBookToLibrary('JK Rowling', 'Harry Potter', 298)
addBookToLibrary('AUTH', 'TITLE', 248)

removeBook(1)

console.log(myLibrary)