import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-branch-officer-dashboard',
  templateUrl: './branch-officer-dashboard.component.html',
  styleUrls: ['./branch-officer-dashboard.component.css']
})
export class BranchOfficerDashboardComponent implements OnInit {

  cost: number;

  calculate = new FormGroup({
    weight: new FormControl(''),
    type: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl('')
  });

  getCost() {
    return this.cost;
  }

  onSubmit() {

    this.cost = 0.5*this.calculate.value.weight;

    if(this.calculate.value.type.toLocaleLowerCase() === "speed")
      this.cost = 5*this.cost;
    else
      this.cost = 2*this.cost;  

    if(this.calculate.value.country.toLocaleLowerCase() != "india")
      this.cost += 5000;
    else if(this.calculate.value.state.toLocaleLowerCase() != "tamil nadu")
      this.cost += 750;
    else if(this.calculate.value.city.toLocaleLowerCase() != "coimbatore")
      this.cost += 200;
  }

  constructor() { }

  ngOnInit() {
  }

}
