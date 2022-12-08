import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-booksentry',
  templateUrl: './booksentry.component.html',
  styleUrls: ['./booksentry.component.css']
})
export class BooksentryComponent {
 

  booktitle=""
  author=""
  description=""
  publisher=""
  price=""
  constructor(private api:ApiService) {}

  addbook=()=>
  {
    let data:any={"booktitle":this.booktitle,"author":this.author,"description":this.description,"publisher":this.publisher,"price":this.price}
    console.log(data)
    this.api.addbook(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.status=="success")
        {
          alert("added")
          this.booktitle="",this.author="",this.description="",this.publisher="",this.price=""
        }
        else
        {
          alert("error")
        }
      }
    )
  }

}
