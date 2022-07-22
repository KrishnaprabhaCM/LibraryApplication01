const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Books');
const Schema = mongoose.Schema;

let Book = new Schema({
    bookName : String,
    authorName : String,
    isbnCode : String,
    description : String,
    price : Number
},
{
    collection:'books'
}
);

// var Booksdata = mongoose.model('book', NewBookSchema);                        //UserData is the model and NewBookData is the schema

module.exports = mongoose.model('Book',Book);