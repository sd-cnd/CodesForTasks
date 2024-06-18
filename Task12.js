// Task 12: Add the code for getting the book details based on Author (done in Task 3) using Promise callbacks or async-await with Axios.
function getBookDetailsFromAuthor(author) {
    let output = [];
    return new Promise((resolve, reject) => {
        for (var isbn in books) {
            let book = books[isbn];
            if (book.author === author) {
                output.push(book);
            }
        }
        if (output.length) {
            resolve(output);
        } else {
            reject("Error in getting book details with author : ")
        }

    })
}

// Get book details based on author
public_users.get('/author/:author', function (req, res) {
    const { author } = req.params;
    getBookDetailsFromAuthor(author)
        .then(result => res.send(JSON.stringify(result, null, 4)))
        .catch(error => res.status(500).json({ "message": error + `${author}` }))
});