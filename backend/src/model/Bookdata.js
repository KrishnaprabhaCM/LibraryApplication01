const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Books');
const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    bookId : Number,
    bookName : String,
    authorName : String,
    isbnCode : String,
    description : String,
    price : Number
});

var Booksdata = mongoose.model('book', NewBookSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Booksdata;