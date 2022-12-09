import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { BooksentryComponent } from './booksentry/booksentry.component';
import { BookdeleteComponent } from './bookdelete/bookdelete.component';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { EditbookComponent } from './editbook/editbook.component';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { UserviewComponent } from './userview/userview.component';
const myRoute:Routes=[
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"registration",
    component:RegistrationComponent
  },
  {
    path:"delete",
    component:BookdeleteComponent
  },
  {
    path:"search",
    component:BooksearchComponent
  },
  {
    path:"entry",
    component:BooksentryComponent
  },

  {
    path:"view",
    component:ViewbookComponent
  },
  {
    path:"userlogin",
    component:UserloginComponent
  },
  {
    path:"userregistration",
    component:UserregistrationComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ViewbookComponent,
    BooksentryComponent,
    BookdeleteComponent,
    BooksearchComponent,
    EditbookComponent,
    IssuebookComponent,
    NavbarComponent,
    UserloginComponent,
    UserregistrationComponent,
    Navbar2Component,
    UserviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
