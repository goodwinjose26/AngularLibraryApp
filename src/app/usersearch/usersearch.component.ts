import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css']
})
export class UsersearchComponent {


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




}
