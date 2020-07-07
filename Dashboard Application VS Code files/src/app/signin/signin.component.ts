import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DbSignupService } from "../db-signup.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  login = new FormGroup({
    offId: new FormControl(''),
    pass: new FormControl('')
  });

  message: any;
  officer: SigninOfficerDetails = {
    id: 0,
    name: "",
    officialId: "",
    password: ""
  };

  onSubmit() {
    let id = this.login.value.offId;
    let password = this.login.value.pass;
    let resp = this.service.login(id);
    resp.subscribe((data)=>{
      this.message = data;
      const dataval = JSON.parse(this.message.toString());
      if(password == dataval[0].password) {

        if(id.search("wizard") != -1) {
          this.router.navigate(['/admin'],{relativeTo: this.route});
        }
        else if(id.search("manager") != -1) {
          this.router.navigate(['/officer'],{relativeTo: this.route});
        }
        else {
          alert("Wrong Crediantials");
        }
      }
      else {
        alert("Wrong Password");
      }
      this.officer.id = dataval[0].id;
      this.officer.name = dataval[0].name;
      this.officer.officialId = dataval[0].officialId;
      this.officer.password = dataval[0].password;

      this.service.sharedName = dataval[0].name;
      this.service.sharedOffId = dataval[0].officialId;
    });
  }

  constructor(private router: Router,private route: ActivatedRoute,private service: DbSignupService) { }

  ngOnInit() {
  }

}

export interface SigninOfficerDetails {
  id: number;
  name: string;
  officialId: string;
  password: string;
}
