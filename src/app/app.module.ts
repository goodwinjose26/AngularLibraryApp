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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
