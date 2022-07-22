const express = require('express');
const path = require('path');
const mongoDb = require('../database/db');
const bookSchema = require('../backend/src/model/Book');
// const User = require('./src/model/user');
const mongoose = require('mongoose');
const cors = require('cors');
var bodyparser=require('body-parser');
// const { default: mongoose } = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connected succesfully")
},
error=>{
    console.log("Database error:" +error)
})

const bookRoute = require('../backend/src/routes/book.routes');
const app = new express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:false
}));

app.use(cors);
app.use(express.static(path.join(__dirname,'dist/Library')));
app.use('/api',bookRoute)

const port = process.env.port || 8000;
app.listen(port,()=>{
    console.log("Listening on port "+port);
});

app.use((req,res,next)=>{
    next(createError(404));
});

// Base route

app.get('/',(req,res)=>{
    res.send("Invalid Endpoint");
});

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/Library/index.html'));
});

app.use(function(err,req,res,next){
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});




















// const jwt = require('jsonwebtoken')
// var app = new express();
// app.use(cors());
// app.use(bodyparser.json());
// username='admin';
// password='1234';


// function verifyToken(req, res, next) {
//     if(!req.headers.authorization) {
//       return res.status(401).send('Unauthorized request')
//     }
//     let token = req.headers.authorization.split(' ')[1]
//     if(token === 'null') {
//       return res.status(401).send('Unauthorized request')    
//     }
//     let payload = jwt.verify(token, 'secretKey')
//     if(!payload) {
//       return res.status(401).send('Unauthorized request')    
//     }
//     req.userId = payload.subject
//     next()
//   }

// app.post('/insert',verifyToken,function(req,res){
   
//     console.log(req.body);
   
//     var book = {       
//         bookId : req.body.book.bookId,
//         bookName : req.body.book.bookName,
//         authorName : req.body.book.authorName,
//         isbnCode : req.body.book.isbnCode,
//         description : req.body.book.description,
//         price : req.body.book.price
//    }       
//    var book = new BookData(book);
//    book.save();
// });
// app.get('/books',function(req,res){
    
//     BooksData.find()
//                 .then(function(books){
//                     res.send(books);
//                 });
// });
// app.get('/:id',  (req, res) => {
  
//   const id = req.params.id;
//     BookData.findOne({"_id":id})
//     .then((book)=>{
//         res.send(book);
//     });
// })

// app.post('/login', (req, res) => {
//     let userData = req.body
    
      
//         if (!email) {
//           res.status(401).send('Invalid Username')
//         } else 
//         if ( pwd !== userData.pwd) {
//           res.status(401).send('Invalid Password')
//         } else {
//           let payload = {subject: email+pwd}
//           let token = jwt.sign(payload, 'secretKey')
//           res.status(200).send({token})
//         }
      
//     })

//     app.put('/update',(req,res)=>{
//       console.log(req.body)
//       id=req.body._id,
//       bookId= req.body.bookId,
//       bookName = req.body.bookName,
//       authorName = req.body.authorName,
//       isbnCode = req.body.isbnCode,
//       description = req.body.description,
//       price = req.body.price
//      ProductData.findByIdAndUpdate({"_id":id},
//                                   {$set:{"bookId":bookId,
//                                   "bookName":bookName,
//                                   "authorName":authorName,
//                                   "isbnCode":isbnCode,
//                                   "description":description,
//                                   "price":price}})
//      .then(function(){
//          res.send();
//      })
//    })
   
// app.delete('/remove/:id',(req,res)=>{
   
//      id = req.params.id;
//      BookData.findByIdAndDelete({"_id":id})
//      .then(()=>{
//          console.log('success')
//          res.send();
//      })
//    })
     

// app.listen(3000, function(){
//     console.log('listening to port 3000');
// });

