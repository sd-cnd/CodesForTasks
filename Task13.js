// Task 13: Add the code for getting the book details based on Title (done in Task 4) using Promise callbacks or async-await with Axios.
function getBookDetailsFromTitle(title) {
    let output = [];
    return new Promise((resolve, reject) => {
        for (var isbn in books) {
            let book = books[isbn];
            if (book.title === title) {
                output.push(book);
            }
        }
        if (output.length) {
            resolve(output);
        } else {
            reject("Error in getting book details with title : ")
        }
    })
}

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
    const { title } = req.params;
    getBookDetailsFromTitle(title)
        .then(result => res.send(JSON.stringify(result, null, 4)))
        .catch(error => res.status(500).json({ "message": error + `${title}` }))
});
