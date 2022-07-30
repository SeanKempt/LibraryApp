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

let library = [];

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

  // Loops through the array and runs createBookCard function on each object(book)
  //If book card exists already for book object in the array skip that object and move to next object
  addBookCard() {
    for (let i = 0; i < library.length; i++) {
      if (!library[i].cardCreated) {
        this.createBookCard(library[i]);
      }
    }
  }

  //pushes user submitted book to array and sets the modal to no longer display, resets the form values and runs addBookCard() method which creates the book cards for the objects in array.
  _newBook() {
    this.addBookToLibrary();
    modal.style.display = "none";
    addBookBtn.form.reset();
    this.addBookCard();
  }

  //function that creates book card elements and appends the elements to the mainContainer element for the provided book argument.
  createBookCard(book) {
    const greeting = document.getElementById("greeting");
    const mainContainer = document.getElementById("main-container");
    const bookCard = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    const btn = document.createElement("button");
    const readBtn = document.createElement("button");
    if (mainContainer.querySelector("#greeting") !== null) {
      mainContainer.removeChild(greeting);
    }
    mainContainer.appendChild(bookCard);
    bookCard.append(title, author, pages, readBtn, btn);
    bookCard.classList.add("book-card");
    readBtn.classList.add("statusButton");
    //Set id value of the read status button to read/unread depending on user submission
    book.read === "Read"
      ? readBtn.setAttribute("id", "read-button")
      : readBtn.setAttribute("id", "notread-button");
    title.textContent = book.title;
    author.textContent = `By: ${book.author}`;
    pages.textContent = `Number of Pages: ${book.pages}`;
    read.textContent = book.read;
    book.cardCreated = true;
    btn.textContent = "Delete";
    readBtn.textContent = book.read;
    btn.addEventListener("click", () => {
      bookCard.remove();
      this._addGreeting();
    });
    //Change status of read property and set style class according to property value.
    readBtn.addEventListener("click", () => {
      if (readBtn.textContent === "Read") {
        readBtn.textContent = "Not Read";
        book.read = "Not Read";
        readBtn.setAttribute("id", "notread-button");
      } else {
        readBtn.textContent = "Read";
        book.read = "Read";
        readBtn.setAttribute("id", "read-button");
      }
    });
  }

  //Create greeting element and set its id to greeting, then check if mainContainer has any children. If it doesn't add the greeting element to mainContainer.
  _addGreeting() {
    const mainContainer = document.getElementById("main-container");
    const greeting = document.createElement("p");
    greeting.setAttribute("id", "greeting");
    greeting.textContent = "Welcome to Library App! Start by adding a book.";
    if (mainContainer.children.length === 0) {
      mainContainer.appendChild(greeting);
    }
  }
}

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.cardCreated = false;
  }
}

const app = new App();

//To set unique Id to each object in the array when its created. If needed this would be added to createBookCard method
// for (let i = 0; i < library.length; i++) {
//   bookCard.dataset.bookIndex = i;
// }
