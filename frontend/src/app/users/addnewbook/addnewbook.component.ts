import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/bookservice.service';

@Component({
  selector: 'app-addnewbook',
  templateUrl: './addnewbook.component.html',
  styleUrls: ['./addnewbook.component.css']
})
export class AddnewbookComponent implements OnInit {

  constructor(private bookService: BookserviceService,private router: Router) { }
  bookItem = {
    bookId : '',
    bookName : '',
    authorName : '',
    isbnCode : '',
    description : '',
    price : ''};

  ngOnInit(): void {
  }

  AddBook()
  {    
    this.bookService.newBook(this.bookItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }

}
