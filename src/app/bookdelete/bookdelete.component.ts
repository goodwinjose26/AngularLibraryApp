import { Component } from '@angular/core';

@Component({
  selector: 'app-bookdelete',
  templateUrl: './bookdelete.component.html',
  styleUrls: ['./bookdelete.component.css']
})
export class BookdeleteComponent {
  title=""

  deleteValues=()=>
  {
  let data:any=
  {"title":this.title}
  console.log(data)
  }
}
