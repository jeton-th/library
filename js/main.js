let myLibrary = [];

function Book(author, title, numPages) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.read = false;
}

Book.prototype = {
  toggleRead: function() {
    this.read = !this.read;
    render();
  }
};

for(let i=0; i<10; i++){
  let book = new Book('Some book title.', 'Unknown Author', 256);
  myLibrary.push(book);
}

function addBook() {
  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const pages = document.querySelector('#pages').value;
  addBookToLibrary(author, title, pages);
  render();
}

function addBookToLibrary(author, title, numPages) {
  const newBook = new Book(author, title, numPages);
  myLibrary.push(newBook);
  render();
}

function removeBook(book) {
  myLibrary.splice(book, 1);
  render();
}

function render() {
  let row = document.querySelector('.row');
  row.classList.add('justify-content-around')
  row.innerHTML = '';

  myLibrary.forEach(function(e) {
    var card = document.createElement('div');
    card.classList.add('card', 'col-md-5', 'mb-3', 'bg-primary', 'text-white');

    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    let title = document.createElement('h2');
    title.classList.add('card-title');
    title.innerHTML = e['title'];
    cardBody.appendChild(title);

    let author = document.createElement('h4');
    author.classList.add('card-subtitle','mb-3');
    author.innerHTML = e['author'];
    cardBody.appendChild(author);

    let pages = document.createElement('p');
    pages.innerHTML = 'Number of Pages: ' + e['numPages'];
    pages.classList.add('card-text');
    cardBody.appendChild(pages);

    const index = myLibrary.indexOf(e);

    button = document.createElement('button');
    button.innerHTML = 'Delete';
    button.classList.add('btn','btn-danger');
    button.id = index;
    button.addEventListener('click', function() {
      removeBook(index);
    });
    cardBody.appendChild(button);

    button2 = document.createElement('button');
    if (myLibrary[index].read) {
      button2.innerHTML = 'Read';
    } else {
      button2.innerHTML = 'Not Read';
    }
    button2.id = myLibrary[index];
    button2.classList.add('btn','btn-light','float-right');
    button2.addEventListener('click', function() {
      e.toggleRead();
    });
    title.appendChild(button2);
    row.appendChild(card);
  });
}

render();

// function showForm() {
//   let form = document.querySelector('.form');
//   form.classList.toggle('hidden');
// }