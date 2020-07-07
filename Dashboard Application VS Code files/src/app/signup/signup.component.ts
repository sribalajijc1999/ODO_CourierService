import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupVariableDeclaration } from '../signup-variable-declaration'
import { DbSignupService } from '../db-signup.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup: SignupVariableDeclaration=new SignupVariableDeclaration("","","");
  message:any;
  register = new FormGroup({
    name: new FormControl(''),
    offId: new FormControl(''),
    pass: new FormControl('')
  });

  valueAssign() {
    this.signup.name = this.register.value.name;
    this.signup.officialId = this.register.value.offId;
    this.signup.password = this.register.value.pass
  }

  getresponse() {
    return this.message;
  }

  validate(response: any) {
    if(response.search("successfully") != -1) {

      console.log(response);

      if(this.signup.officialId.search("wizard") != -1) {
        this.router.navigate(['/admin'],{relativeTo: this.route});
      }      
      else {
        alert("Wrong Crediantials");
      }
    }
    else {
      console.log(response);
    }
  }
  
  
  onSubmit(){
    this.valueAssign();
    let resp=this.service.doRegistration(this.signup);
    resp.subscribe((data)=>{
      this.message=data;
      this.validate(this.message);
    });
    
  }

  constructor(private router: Router,private route: ActivatedRoute, private service: DbSignupService) { }

  ngOnInit() {
  }

}
