import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent {


  constructor(private api:ApiService,private router:Router) {}
  booktitle=""
  sdata:any=[]
readValue=()=>
{
  let data =
  {
    "booktitle":this.booktitle
  }
  console.log(data)
  this.api.readValue(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if(response.length==0)
      {
         alert("no data")
      }
      else {

        this.sdata=response

      }
    }
  )
}

deleteBtnClick=(id:any)=>
{
  let data:any={
    "id":id
  }
    this.api.deletestudent(data).subscribe(
      (generated:any)=>
      {
        console.log(generated)
        if(generated.status == "success")
        {
          alert("Book Deleted")
          this.router.navigate(["/view"])
        }
        else{
          alert("error")
        }
      }
    )
    
     
         
}


}
