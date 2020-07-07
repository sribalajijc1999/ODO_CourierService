import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport-manager-profile',
  templateUrl: './transport-manager-profile.component.html',
  styleUrls: ['./transport-manager-profile.component.css']
})
export class TransportManagerProfileComponent implements OnInit {



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

  ngOnInit() {
  }

}
