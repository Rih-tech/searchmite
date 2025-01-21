const books = [
  { title: 'Algorithm Design', shelf: 1, row: 'Left side' },
  { title: 'Applied Thermodynamics', shelf: 2, row: 'Right side' },
  { title: 'Basic Electrical Engineering', shelf: 1, row: 'Middle' },
  { title: 'Civil Engineering Materials', shelf: 3, row: 'Left side' },
  { title: 'Computer Networks', shelf: 1, row: 'Right side' },
  { title: 'Control Systems Engineering', shelf: 2, row: 'Middle' },
  { title: 'Digital Electronics', shelf: 4, row: 'Left side' },
  { title: 'Electrical Machines', shelf: 5, row: 'Right side' },
  { title: 'Engineering Mechanics', shelf: 3, row: 'Middle' },
  { title: 'Fluid Mechanics', shelf: 6, row: 'Left side' },
  { title: 'Heat Transfer', shelf: 2, row: 'Right side' },
  { title: 'Linear Algebra', shelf: 7, row: 'Left side' },
  { title: 'Machine Design', shelf: 1, row: 'Middle' },
  { title: 'Mathematics for Engineers', shelf: 8, row: 'Right side' },
  { title: 'Mechanical Vibrations', shelf: 9, row: 'Left side' },
  { title: 'Microprocessors', shelf: 10, row: 'Middle' },
  { title: 'Networking Fundamentals', shelf: 11, row: 'Left side' },
  { title: 'Power Systems', shelf: 1, row: 'Right side' },
  { title: 'Probability and Statistics', shelf: 12, row: 'Middle' },
  { title: 'Solid Mechanics', shelf: 13, row: 'Left side' },
  { title: 'Structural Analysis', shelf: 14, row: 'Right side' },
  // Add more books up to 100
];

// Sort books alphabetically by title
books.sort((a, b) => a.title.localeCompare(b.title));

// Display books on homepage
function displayBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = ''; // Clear any existing content

  books.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.setAttribute('data-title', book.title);

    bookElement.innerHTML = `
      <h2>${book.title}</h2>
      <p><strong>Shelf:</strong> ${book.shelf}</p>
      <p><strong>Row:</strong> ${book.row}</p>
    `;

    bookList.appendChild(bookElement);
  });
}

// Search functionality
function searchBooks() {
  const input = document.getElementById('searchBar').value.toUpperCase();
  const bookList = document.getElementById('bookList');
  const books = bookList.getElementsByClassName('book');

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const title = book.getAttribute('data-title').toUpperCase();
    
    if (title.indexOf(input) > -1) {
      book.style.display = ''; // Show book if it matches
    } else {
      book.style.display = 'none'; // Hide book if it doesn't match
    }
  }
}

// Initialize page with books
window.onload = displayBooks;