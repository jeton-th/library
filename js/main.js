let myLibrary = [];

function Book(author, title, numPages) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
}

Book.prototype.read = false;

function addBookToLibrary(author, title, numPages) {
  const newBook = new Book(author, title, numPages);
  myLibrary.push(newBook);
}

function removeBook(book) {
  myLibrary.splice(book, 1);
  render();
}

function render() {
  let list = document.querySelector('.list');
  list.innerHTML = '';
  // const e = myLibrary[myLibrary.length - 1];
  myLibrary.forEach(function(e) {
    var row = document.createElement('div');
    row.classList.add('row');

    let span = document.createElement('span');
    span.innerHTML = e['author'];
    row.appendChild(span);

    span = document.createElement('span');
    span.innerHTML = e['title'];
    row.appendChild(span);

    span = document.createElement('span');
    span.innerHTML = e['numPages'];
    row.appendChild(span);

    span = document.createElement('span');
    span.innerHTML = e['read'];
    row.appendChild(span);

    const index = myLibrary.indexOf(e);

    button = document.createElement('button');
    button.innerHTML = 'Delete';
    button.id = index;
    button.addEventListener('click', function() {
      removeBook(index);
    });
    row.appendChild(button);

    button2 = document.createElement('button');
    if (myLibrary[index].read) {
      button2.innerHTML = 'Read';
    } else {
      button2.innerHTML = 'Not Read';
    }
    button2.id = myLibrary[index];
    button2.addEventListener('click', function() {
      toggleRead(index);
    });
    row.appendChild(button2);
    //add event listener to the button
    list.appendChild(row);
  });
}

function showForm() {
  let form = document.querySelector('.form');
  form.classList.toggle('hidden');
}

function addBook() {
  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const pages = document.querySelector('#pages').value;
  addBookToLibrary(author, title, pages);
  render();
}

function toggleRead(index) {
  myLibrary[index].read = myLibrary[index].read ? false : true;
  render();
}
