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

let library = [];

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
}

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  295,
  "has been read"
);

// Takes user input and store the new book objects into an array. use document.getelementbyid and store values into variables within the function

function addBookToLibrary(book) {}
