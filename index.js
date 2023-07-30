let myLibrary = []

// Constructor
function Book(bookName){
    this.bookName = bookName
    //this.bookLink = bookLink

}

// Function that adds books
const addBookToLibrary = () => {
    document.getElementById("inputForm").addEventListener("submit", function(event){
    event.preventDefault();       
    
    // Takes input 
    const bname = document.getElementById("name").value;
    //const blink = document.getElementById("bookLink").value;

    // Makes a new object
    const book = new Book(`${bname}`)
    
    // Pushes into the library
    myLibrary.push(book.bookName)
    

    console.log(myLibrary);

    

    })};

addBookToLibrary();
    
const displayBooks = () => {
    const listOfBooksElement = document.getElementById("listofBooks");
    const displayedBooks = new Set();
    listOfBooksElement.innerHTML = ""; // Clear the previous content
  
    for (let i = 0; i < myLibrary.length; i++) {
        
      const bookName = myLibrary[i];

      if (!displayedBooks.has(bookName)) {
      const bookElement = document.createElement("li");
      bookElement.textContent = bookName;
      listOfBooksElement.appendChild(bookElement);

      // Add the book to the displayed set
      displayedBooks.add(bookName);
    }
    }
  };
  
  // Function to show books when the "Show Books" button is clicked
  const showBooks = () => {
    displayBooks();
  };
  
  // Initial display of books when the page is loaded
  displayBooks();

  
  
  
  
  


    