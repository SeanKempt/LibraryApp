let modal = document.getElementById("bookmodal");
let bookbtn = document.getElementById("new-book");
let close = document.getElementsByClassName("close")[0];

let addBookBtn = document.getElementById("book-submit");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let read = document.getElementById("read");

bookbtn.addEventListener("click", () => {
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

let library = [
  {
    title: "Harry Potter The Chamber of Secrets",
    author: "J.K. Rowling",
    pages: 251,
    read: "yes",
  },
];

class App {
  constructor() {
    addBookBtn.addEventListener("click", this._newBook.bind(this));
  }

  // Takes user input and store the new book objects into an array
  addBookToLibrary() {
    library.push(
      new Book(title.value, author.value, Number(pages.value), read.value)
    );
  }

  _newBook() {
    this.addBookToLibrary();
    modal.style.display = "none";
    addBookBtn.form.reset();
  }

  // Write a function that loops through the array and displays each book on the page.
  addBookCard() {
    for (let i = 0; i < library.length; i++) {
      createBookCard(library[i]);
    }
  }

  //function that creates a card on the page based off an objects properties within the array
  createBookCard(book) {
    const mainContainer = document.getElementById("main-container");
    const bookCard = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    mainContainer.appendChild(bookCard);
    bookCard.append(title, author, pages, read);
    bookCard.classList.add("book-card");
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;
  }
}

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const app = new App();

//example for adding event handler/listener to classes in OOP for JavaScript
//You have to bind This because this within an event handler is going to point to the HTML element and not the object.
//Event listener Should be declared within the constructor function of a class because the constructor area/scope/context is what loads when a new object is created.
// form.addEventListener("submit", this.function.bind(this));

//notes
//might need to move the createbookcard and the add book card to the Book Class
