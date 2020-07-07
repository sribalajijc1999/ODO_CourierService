import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  choice = 1;

  findCss(value) {
    if(value == this.choice)
      return {
        'nav-link active' : true
      };
    return {
      'nav-link' : true
    };  
  }

  isClick(value) {
    this.choice = value;
  }



  constructor() { }

  ngOnInit() { }


}
