import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username=""
  password=""

  loginValues=()=>
  {
    let data:any=
    {
      "username":this.username,"password":this.password
    }
    console.log(data)

    if (this.username=="admin" && this.password=="1234") {
      alert("valid login")
      
    } else {
      alert("invalid credentials")
      
    }
  }

}
