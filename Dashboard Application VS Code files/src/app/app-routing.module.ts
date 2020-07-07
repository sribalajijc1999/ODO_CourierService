import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { BranchOfficerProfileComponent } from './branch-officer-profile/branch-officer-profile.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { IntroComponent } from './intro/intro.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { AddOfficerComponent } from './add-officer/add-officer.component';
import { SignupComponent } from './signup/signup.component';
import { TransportManagerProfileComponent } from './transport-manager-profile/transport-manager-profile.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'admin', component: AdminProfileComponent },
  { path: 'officer', component: BranchOfficerProfileComponent },
  { path: 'signin', component: SigninComponent },     
  { path: 'signup', component: SignupComponent },
  { path: 'manager', component: TransportManagerProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const 
routingComponents =   [
    AdminProfileComponent,
    BranchOfficerProfileComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    IntroComponent,
    SigninComponent,
    HeaderComponent,
    AddOfficerComponent,
    SignupComponent
  ]