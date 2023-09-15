
const fetchBooksButton = document.getElementById('fetchBooks');
const bookListDiv = document.getElementById('bookList');


fetchBooksButton.addEventListener('click', fetchBooks);


function fetchBooks() {
    const xhr = new XMLHttpRequest();
    

    const apiUrl = './books.json';
    
    xhr.open('GET', apiUrl, true);
    

    xhr.onload = function () {
        if (xhr.status === 200) {

            const booksData = JSON.parse(xhr.responseText);
            

            displayBooks(booksData);
        } else {

            bookListDiv.innerHTML = 'Failed to fetch books.';
        }
    };
    

    xhr.send();
}


function displayBooks(books) {

    let html = '<ul>';
    for (const book of books) {
        html += `<li>${book.title} by ${book.author}</li>`;
    }
    html += '</ul>';
    

    bookListDiv.innerHTML = html;
}
