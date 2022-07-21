const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Books');
const Schema = mongoose.Schema;

var NewUsersSchema = new Schema({
    userId : Number,
    userFirstName : String,
    userLastName : String,
    userEmail : String,
    userPassword : String,
    userConfPassword : String
});

var Userdata = mongoose.model('book', NewUsersSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Userdata;