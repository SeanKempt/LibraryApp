let modal = document.getElementById("bookmodal");
let bookbtn = document.getElementById("new-book");
let close = document.getElementsByClassName("close")[0];

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

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  showInfo() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
  }

  //function that creates a card on the page based off an objects properties within the array
  createBookCard() {
    const mainContainer = document.getElementById("main-container");
    const bookCard = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    mainContainer.appendChild(bookCard);
    bookCard.append(title, author, pages, read);
    bookCard.classList.add("book-card");
    title.textContent = this.title;
    author.textContent = this.author;
    pages.textContent = this.pages;
    read.textContent = this.read;
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Yes");

let addBookBtn = document.getElementById("book-submit");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let read = document.getElementById("read");

// Takes user input and store the new book objects into an array
function addBookToLibrary() {
  return library.push(
    new Book(title.value, author.value, Number(pages.value), read.value)
  );
}
addBookBtn.addEventListener("click", function () {
  addBookToLibrary();
  modal.style.display = "none";
  addBookBtn.form.reset();
});

// Write a function that loops through the array and displays each book on the page.
function addBookCard() {
  for (let i = 0; i < library.length; i++) {}
}
