import { Component } from '@angular/core';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent {
  name=""
  titile=""
  doi=""
  mno=""

  issueValues=()=>
  {
    let data:any=
    {
      "name":this.name,"titile":this.titile,"doi":this.doi,"mno":this.mno
    }
    console.log(data)
  }

}
