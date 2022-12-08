import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent {


  constructor(private api:ApiService)
  {
    api.viewbook().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
data:any=[]
}
