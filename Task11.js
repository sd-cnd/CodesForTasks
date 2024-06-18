// Task 11: Add the code for getting the book details based on ISBN (done in Task 2) using Promise callbacks or async-await with Axios.
function getBookDetailsFromISBN(isbn) {
    let book = books[isbn];
    return new Promise((resolve, reject) => {
        if (book) {
            resolve(book);
        } else {
            reject("Book not found with isbn :");
        }
    });
}

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
    const { isbn } = req.params;
    getBookDetailsFromISBN(isbn)
        .then(book => res.send(JSON.stringify(book, null, 4)),)
        .catch(error => res.status(500).json({ "message": error + `${isbn}` }))
});