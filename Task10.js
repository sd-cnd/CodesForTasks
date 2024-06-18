// Task 10: Add the code for getting the list of books available in the shop (done in Task 1) using Promise callbacks or async-await with Axios.
function getAllBooks() {
    return new Promise((resolve, reject) => {
        // Check if 'books' object is not empty
        if (books && Object.keys(books).length) {
            resolve(books);
        } else {
            reject('Error in getting all the books');
        }
    });
}

// Get the book list available in the shop
public_users.get('/', (req, res) => {
    getAllBooks()
        .then(books => res.status(200).json(books))
        .catch(error => res.status(500).json({ "message": error }))
});