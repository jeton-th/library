const myLibrary = [];

function Book(author, title, numPages) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.read = false;
}

function render() {
  const row = document.querySelector('.row');
  row.classList.add('justify-content-around');
  row.innerHTML = '';

  myLibrary.forEach((book) => {
    const card = document.createElement('div');
    card.classList.add('card', 'col-md-5', 'mb-3');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.innerHTML = book.title;
    cardBody.appendChild(title);

    const author = document.createElement('h4');
    author.classList.add('card-subtitle', 'mb-3');
    author.innerHTML = book.author;
    cardBody.appendChild(author);

    const pages = document.createElement('p');
    pages.innerHTML = `Number of Pages: ${book.numPages}`;
    pages.classList.add('card-text');
    cardBody.appendChild(pages);

    const index = myLibrary.indexOf(book);

    const button = document.createElement('button');
    button.innerHTML = 'Delete';
    button.id = 'delete-book';
    button.classList.add('btn', 'btn-danger');
    button.id = `book-${index}`;
    cardBody.appendChild(button);
    button.addEventListener('click', () => {
      removeBook(index);
    });

    const button2 = document.createElement('button');
    if (myLibrary[index].read) {
      button2.innerHTML = 'Read';
    } else {
      button2.innerHTML = 'Not Read';
    }
    button2.id = myLibrary[index];
    button2.classList.add('btn', 'btn-light', 'float-right');
    button2.addEventListener('click', () => {
      book.toggleRead();
    });
    title.appendChild(button2);
    row.appendChild(card);
  });
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
  render();
};

for (let i = 0; i < 10; i += 1) {
  const book = new Book('Some book title.', 'Unknown Author', 256);
  myLibrary.push(book);
}

function addBookToLibrary(author, title, numPages) {
  const newBook = new Book(author, title, numPages);
  myLibrary.push(newBook);
}

function removeBook(book) {
  myLibrary.splice(book, 1);
  render();
}

document.querySelector('#add-book').addEventListener('click', () => {
  const author = document.querySelector('#author');
  const title = document.querySelector('#title');
  const pages = document.querySelector('#pages');
  addBookToLibrary(author.value, title.value, pages.value);
  author.value = '';
  title.value = '';
  pages.value = '';
  render();
});

render();
