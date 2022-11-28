import { Component } from '@angular/core';

@Component({
  selector: 'app-booksentry',
  templateUrl: './booksentry.component.html',
  styleUrls: ['./booksentry.component.css']
})
export class BooksentryComponent {
  image=""
  title=""
  price=""
  Author=""
  Description=""
  Publisher=""

  readValues=()=>
  {
    let data:any= {
      "image":this.image,
      "title":this.title,
      "price":this.price,
      "Author":this.Author,
      "Description":this.Description,
      "Publisher":this.Publisher,



    }
    console.log(data)
  }

}
