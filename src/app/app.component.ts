import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {title:'Neet Tree',
      imageUrl:'assets/tree.jpeg',
      username:'nature',
      content:'I saw thi tree today'
    },
    {title:'Snowy  Mountain',
    imageUrl:'assets/mountain.jpeg',
    username:'hiking person',
    content:'Beautiful view of same mountain'
  },
  {title:'MOuntain Biking',
  imageUrl:'assets/biking.jpeg',
  username:'biking1222',
  content:'Action shot of me riding my bike'
}


  ]
}
