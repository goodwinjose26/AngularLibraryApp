import { Component } from '@angular/core';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent {
  title=""

  editBook=()=>
  {
    let data:any={
      "title":this.title
    }
    console.log(data)
  }
}
