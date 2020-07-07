import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer-Home';

  choice = 1;

  findCss(value) {
    if(value == this.choice)
      return {
        'active' : true
      }; 
  }

  isClick(value) {
    this.choice = value;
  }



}
