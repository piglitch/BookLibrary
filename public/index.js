let myLibrary = []

// Constructor
class Book {
  constructor(bookName, btn, bookLink){
    this.bookName = bookName
    this.bookLink = bookLink
    this.btn = btn
  }
}

// Function that adds books
const addBookToLibrary = () => {
    document.getElementById("inputForm").addEventListener("submit", function(event){
    event.preventDefault();       
    
    // Takes input 
    const bname = document.getElementById("name").value;
    const blink = document.getElementById("bookLink").value;
    var readUnread = document.createElement("button");
    readUnread.type = 'button';

    // Makes a new object
    const book = new Book(`${bname}`, readUnread, `${blink}`)
    
    // Pushes into the library
    myLibrary.push(book)
    })};

addBookToLibrary();
    
const displayBooks = () => {
    const listOfBooksElement = document.getElementById("listofBooks");
    const displayedBooks = new Set();
    listOfBooksElement.innerHTML = ""; // Clear the previous content
  
    for (let i = 0; i < myLibrary.length; i++) {
        
      const book = myLibrary[i];

      if (!displayedBooks.has(book.bookName)) {

      // For books  
      const bookElement = document.createElement("ul");
      bookElement.style.display = 'flex'
      bookElement.textContent = book.bookName;
      bookElement.setAttribute('book-name', book.bookName);
      bookElement.classList.add('glow-border');
      listOfBooksElement.style.padding = '5px'
      listOfBooksElement.appendChild(bookElement);

      // Booklink
      bookElement.addEventListener("click", ()=>{
        window.open(`${book.bookLink}`);    
      })

      // Read and Unread button  
      const readUnread = document.createElement("button");
      readUnread.type = 'button';
      readUnread.classList.add('readUnread');
      readUnread.textContent = book.read ? "👁️" : "🙈";
      bookElement.appendChild(readUnread);      
      
      // To toggle between 'Read' and 'Unread'
      readUnread.addEventListener('click', (event) => {
        event.stopPropagation();
        book.read = !book.read;
        readUnread.textContent = book.read ? "👁️" : "🙈";
      })

      // Delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❎"
      bookElement.appendChild(deleteButton);
      deleteButton.setAttribute('book-remove', i)

      // Delete evenListener
      deleteButton.addEventListener("click", (event)=>{
        event.stopPropagation();
        const bookIndex = parseInt(deleteButton.getAttribute('book-remove'));
        if(!isNaN(bookIndex) && bookIndex >= 0 && bookIndex < myLibrary.length){
          myLibrary.splice(bookIndex, 1);
          displayBooks();
        }
      })

      // Add the book to the displayed set
      displayedBooks.add(book.bookName);
      }      
    }
  };
  
  // Function to show books when the "Show Books" button is clicked
  const showBooks = () => {
    displayBooks();
  };
  
  // Initial display of books when the page is loaded
  displayBooks();

  
  
  
  
  


    