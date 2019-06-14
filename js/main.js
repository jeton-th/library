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

function render() {
  let list = document.querySelector(".list");
  myLibrary.forEach(function(e){
    var row = document.createElement("div");    
    row.classList.add('row');

    let span = document.createElement("span");
    span.innerHTML = e['author'];
    row.appendChild(span);

    span = document.createElement("span");
    span.innerHTML = e['title'];
    row.appendChild(span);

    span = document.createElement("span");
    span.innerHTML = e['numPages'];
    row.appendChild(span);

    list.appendChild(row);
  })
}

function addBook() {
  const author = document.querySelector("#author").value;
  const title = document.querySelector("#title").value;
  const pages = document.querySelector("#pages").value;
  addBookToLibrary(author, title, pages);
  render()
}
