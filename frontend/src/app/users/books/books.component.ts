import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/bookservice.service';
import{ BooksModel } from './books.model';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: BooksModel[] = [];

  constructor(private bookService:BookserviceService) { }

  ngOnInit(): void {
    this.bookService.getBook().subscribe((data)=>
    {
      this.books=JSON.parse(JSON.stringify(data))
    });
  }
 

}
