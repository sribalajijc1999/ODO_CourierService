import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DbSignupService } from '../db-signup.service';

@Component({
  selector: 'app-add-officer',
  templateUrl: './add-officer.component.html',
  styleUrls: ['./add-officer.component.css']
})
export class AddOfficerComponent implements OnInit {

  message: any;
  employee: empDetails = new empDetails();

  add = new FormGroup({
    name: new FormControl(''),
    officialId: new FormControl(''),
    role: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    emailId: new FormControl(''),
    contactNumber: new FormControl('')
  });

  assignValues() {
    this.employee.name = this.add.value.name;
    this.employee.address = this.add.value.address;
    this.employee.city = this.add.value.city;
    this.employee.contactNumber = this.add.value.contactNumber;
    this.employee.emailId = this.add.value.emailId;
    this.employee.officialId = this.add.value.officialId;
    this.employee.password = this.add.value.password;
    this.employee.role = this.add.value.role;
  }

  getName() {
    return this.service.sharedName;
  }

  getResponse() {
    return this.message;
  }

  onSubmit() {
    this.assignValues();
    let resp = this.service.addEmployee(this.employee);
    resp.subscribe((data)=>{
      this.message = data;
    });
  }

  constructor(private service: DbSignupService) { }

  ngOnInit() {
  }

}

export class empDetails {

    name: string;
    officialId: string;
    role: string;
    password: string;
    address: string;
    city: string;
    emailId: string;
    contactNumber: number;
}
