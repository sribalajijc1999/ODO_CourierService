import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SigninOfficerDetails } from './signin/signin.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbSignupService {

  sharedName : string;
  sharedOffId : string;


  constructor(private http:HttpClient) { }

  public doRegistration(signup){
    return this.http.post("http://localhost:6123/register",signup,{responseType:'text' as 'json'});
  }

  public addEmployee(empDetails) {
    return this.http.post("http://localhost:6123/addEmployee",empDetails,{responseType: 'text' as 'json'});
  }

  public addParcel(parcelDetails) {
    return this.http.post("http://localhost:6123/addParcel",parcelDetails,{responseType:'text' as 'json'});
  }

  public login(offId: String): Observable<SigninOfficerDetails> {
    return this.http.get<SigninOfficerDetails>("http://localhost:6123/findUser/"+offId,{responseType:'text' as 'json'});
  }

}
