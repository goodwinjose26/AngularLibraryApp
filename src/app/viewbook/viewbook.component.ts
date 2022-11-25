import { Component } from '@angular/core';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent {
  book:any=[
    {
      "image":"https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/Harry-Potter-and-the-Chamber-of-Secrets-book-cover.jpg",
      "title":"secret of book",
      "price":2000
    },
    {
      "image":"https://book-assets.openroadmedia.com/9781497644984.jpg",
      "title":"alice in wonderland",
      "price":3000
    },
    {
      "image":"https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/Harry-Potter-and-the-Chamber-of-Secrets-book-cover.jpg",
      "title":"Harrypotter",
      "price":4000
    },
    {
      "image":"https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
      "title":"Harper lee",
      "price":1000
    },
    {
      "image":"https://www.rd.com/wp-content/uploads/2019/11/diary-of-a-wimpy-kid-by-jeff-kinney-children-s-book-via-amazon-com-ecomm.jpg?fit=700,700",
      "title":"Diary of a wimper kid",
      "price":2500
    },
    {
      "image":"https://m.media-amazon.com/images/I/41yLFIej6iL._SL240_.jpg",
      "title":"Rings edition3",
      "price":5000
    },
    {
      "image":"https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg",
      "title":"lord of the rings",
      "price":3500
    },
    {
      "image":"https://imgix.ranker.com/user_node_img/111/2204773/original/the-lord-of-the-rings-books-photo-u5?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=125&w=125",
      "title":"LOR 2",
      "price":4500
    }
  ]

}
