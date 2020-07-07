import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-officer-profile',
  templateUrl: './branch-officer-profile.component.html',
  styleUrls: ['./branch-officer-profile.component.css']
})
export class BranchOfficerProfileComponent implements OnInit {


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
