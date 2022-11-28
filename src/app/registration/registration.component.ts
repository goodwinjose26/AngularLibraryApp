import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name=""
  adno=""
  address=""
  pincode=""
  dob=""
  email=""
  phno=""
  username=""
  password=""
  cpass=""

  regValues=()=>
  {
    let data:any=
    {
      "name":this.name,"adno":this.adno,"address":this.address,"pincode":this.pincode,"dob":this.dob,"email":this.email,"phno":this.phno,"username":this.username,"password":this.password,"cpass":this.cpass
    }
    console.log(data)
  }

}
