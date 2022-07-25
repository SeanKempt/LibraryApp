let library = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.showInfo = function () {
      return `${title} by ${author}, ${pages} pages, ${read}.`;
    };
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
