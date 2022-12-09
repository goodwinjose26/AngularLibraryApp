import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {

  name=""
  address=""
  email=""
  phno=""
  username=""
  password=""
  cpass=""


  constructor(private api:ApiService) {}

  regValues=()=>
  {
    if(this.password==this.cpass){
      alert("Registered Successfully")
    
    let data:any={"name":this.name,"address":this.address,"email":this.email,"phno":this.phno,"username":this.username,"password":this.password,"cpass":this.cpass}
    console.log(data)
    this.api.regValues(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.status=="success")
        {
          alert("added")
          this.name="",this.address="",this.email="",this.phno="",this.username="",this.password="",this.cpass=""
        }
        else
        {
          alert("error")
        }
      }
    )
    }
    else{
      alert("Password and confirm password not match")
    }
  }

}
