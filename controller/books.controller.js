const fs = require('fs');
const path = require('path');

exports.getAllBooks = async (req, res) => {

    try {
        console.log(req.query);
        let booksRaw = fs.readFileSync(path.resolve("../FidZulu-Books-API/assets/books.json").replace(/\\/g, '/'));
        let booksJSON = JSON.parse(booksRaw);
        res.status(200).json(booksJSON);
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: error.message,
        });
    }
};
