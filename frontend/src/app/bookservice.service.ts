import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Book } from './service/book';
import { catchError, map, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  REST_API:string = "http://localhost:8000/api";
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');
  constructor(private httpClient:HttpClient) { }

  // Add books

  AddBook(data:Book):Observable<any>{
    let API_URL = `${this.REST_API}/add-book`;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
  }
  

  // Get all books

  getBooks()
  {
    return this.httpClient.get(`${this.REST_API}`);
  }

  // Get single book

  getBook(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/read-book/${id}`;
    return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError)
    )
  }

  // Update books

  updateBook(id:any,data:any):Observable<any>{
    let API_URL = `${this.REST_API}/update-book/${id}`;
    return this.httpClient.put(API_URL,data,{headers:this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
  }

  // Delete book

  deleteBook(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/delete-book/${id}`;
    return this.httpClient.delete(API_URL,{headers:this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
  }

  // Error

  handleError(error:HttpErrorResponse)
  {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent)
    {
      // handle client erorr
      errorMessage = error.error.message;
    }
    else
    {
      // Handle server error
       errorMessage = `Error Code : ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }











  // getBook()
  // {
  //   return this.http.get("http://localhost:3000/books")
  // }
  // newBook(item:any)
  // {
  //   return this.http.post("http://localhost:3000/insert",{"book":item})
  //   .subscribe(data =>{console.log(data)})
  // }
}
