import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from  './app-routing.module';
import { AppComponent } from './app.component';
//import { SignupComponent } from './signup/signup.component';
import { DbSignupService } from './db-signup.service';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddParcelComponent } from './add-parcel/add-parcel.component';
import { TransportManagerProfileComponent } from './transport-manager-profile/transport-manager-profile.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { BranchOfficerDashboardComponent } from './branch-officer-dashboard/branch-officer-dashboard.component';
import { TransportManagerDashboardComponent } from './transport-manager-dashboard/transport-manager-dashboard.component';
// import { AddOfficerComponent } from './add-officer/add-officer.component';
//import { IntroComponent } from './intro/intro.component';
//import { HeaderComponent } from './header/header.component';
//import { AboutComponent } from './about/about.component';
//import { ServiceComponent } from './service/service.component';
//import { GalleryComponent } from './gallery/gallery.component';
//import { ContactComponent } from './contact/contact.component';
//import { FooterComponent } from './footer/footer.component';
//import { SigninComponent } from './signin/signin.component';
//import { AdminProfileComponent } from './admin-profile/admin-profile.component';
//import { BranchOfficerProfileComponent } from './branch-officer-profile/branch-officer-profile.component';


@NgModule({
  declarations: [
    AppComponent,
//    IntroComponent,
//    HeaderComponent,
//    AboutComponent,
//    ServiceComponent,
//    GalleryComponent,
//    ContactComponent,
//    FooterComponent,
    routingComponents,
DashboardHeaderComponent,
AdminDashboardComponent,
AddParcelComponent,
TransportManagerProfileComponent,
AddVehicleComponent,
BranchOfficerDashboardComponent,
TransportManagerDashboardComponent

// SignupComponent
//    SigninComponent
//    AdminProfileComponent,
//    BranchOfficerProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //OAuthModule.forRoot()
  ],
  providers: [DbSignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
