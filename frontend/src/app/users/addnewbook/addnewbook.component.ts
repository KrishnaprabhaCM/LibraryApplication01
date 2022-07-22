import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/bookservice.service';

@Component({
  selector: 'app-addnewbook',
  templateUrl: './addnewbook.component.html',
  styleUrls: ['./addnewbook.component.css']
})
export class AddnewbookComponent implements OnInit {
  bookForm : FormGroup;
  constructor(private formBuilder:FormBuilder, 
    private router:Router, 
    private ngZone:NgZone,
    private crudService:BookserviceService) { 
      this.bookForm = this.formBuilder.group({
        bookName : [''],
        authorName : [''],
        isbnCode : [''],
        description : [''],
        price : ['']});
    
     }
  
  ngOnInit(): void {
  }
  onSubmit():any
  {
    // this.crudService.AddBook(this.bookForm.value).subscribe(()=>{
    //   console.log("Data added successfully");
    //   this.ngZone.run(()=>this.router.navigateByUrl('/books-list'))
    // });

    this.crudService.AddBook(this.bookForm.value);
    console.log("Book added successfully");    
    this.ngZone.run(()=>this.router.navigateByUrl('/books-list'))

 }
}
