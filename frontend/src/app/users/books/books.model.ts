export class BooksModel{
    constructor(
        public bookId : Number,
        public bookName : String,
        public authorName : String,
        public isbnCode : String,
        public description : String,
        public price : Number
    ){}
}