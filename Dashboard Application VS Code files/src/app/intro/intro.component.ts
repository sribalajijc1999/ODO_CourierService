import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  trackForm = new FormGroup({
      trackId: new FormControl('')
  });

  onSubmit(){
    let id = this.trackForm.value.trackId;
    if(id.search("cbe") != -1) {
      return "Madurai";
    }
  }

  
  constructor() { }

  ngOnInit() {
  }

}
