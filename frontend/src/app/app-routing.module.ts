import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewbookComponent } from './users/addnewbook/addnewbook.component';
import { BooksComponent } from './users/books/books.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'books-list',component:BooksComponent},
  {path:'add-book',component:AddnewbookComponent},
  {path:'edit-book/:id',component:BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
