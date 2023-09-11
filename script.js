const addButton = document.querySelector('#add');
const modal = document.querySelector('dialog');
const bookGrid = document.querySelector('#book-grid');
const cancelBtn = document.querySelector('#cancel');

cancelBtn.addEventListener('click',()=>{
  modal.close();
  //RESET USER INPUT
  bookTitle.value = '';
  bookAuthor.value ='';
  bookPages.value = '';
  bookRead.checked=false;
})

addButton.addEventListener('click',() => {
    modal.showModal();
})

const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookPages = document.querySelector('#book-pages');

const bookRead = document.querySelector('#read');

const submitBtn = document.querySelector('#submit');

//SUBMIT NEW BOOK
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(bookTitle.value && bookAuthor.value && bookPages.value) {
      let newBook = new Book(bookTitle.value,bookAuthor.value,bookPages.value,bookRead.checked);
      addBookToLibrary(newBook);
      modal.close();
      console.log(bookRead.checked);

      //RESET USER INPUT
      bookTitle.value = '';
      bookAuthor.value ='';
      bookPages.value = '';
      bookRead.checked=false;
    }
})

const myLibrary = [];

function Book(title,author,pages,read) {
  this.title=title;
  this.author = author;
  this.pages =pages;
  this.read=read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(myLibrary);
    let isRead = book.read? 'Read' : 'Not read';
    let isReadClass= book.read? 'read' : 'not-read';
  let bookElement = document.createElement('div');
  bookElement.setAttribute('class','book');
  bookElement.innerHTML =`
    <h3 class="boTitle">${book.title}</h2>
    <div class="book-content">
        <p class="b Author">${book.author}</p>
        <p class="b Pages">${book.pages} pages</p>
        <div onclick=statusToggle(this) class="b isRead ${isReadClass}"><p>${isRead}</p></div>
    </div>
  `
  bookGrid.appendChild(bookElement);
}
  //SET UP TOGGLE FOR READ DIV
function statusToggle(element) {
  if (element.classList.contains('read')) {
      console.log(element.textContent)
      element.classList.remove('read');
      element.classList.add('not-read');
      element.textContent = 'Not read'
  }

  else if (element.classList.contains('not-read')) {
    element.classList.remove('not-read');
    element.classList.add('read');
    element.textContent = 'Read';
  }
}
