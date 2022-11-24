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
const myRoute:Routes=[
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"/registration",
    component:RegistrationComponent
  },
  {
    path:"/delete",
    component:BookdeleteComponent
  },
  {
    path:"/search",
    component:BooksearchComponent
  },
  {
    path:"entry",
    component:BooksentryComponent
  },
  {
    path:"/issue",
    component:IssuebookComponent
  },
  {
    path:"/edit",
    component:EditbookComponent
  },
  {
    path:"/view",
    component:ViewbookComponent
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
    IssuebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
