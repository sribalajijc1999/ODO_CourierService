import { Component, OnInit } from '@angular/core';
import { DbSignupService } from '../db-signup.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

  constructor(private service : DbSignupService) { }

  getName() {
    return this.service.sharedName;
  }

  getOffId() {
    return this.service.sharedOffId;
  }


  ngOnInit() {
  }

}
