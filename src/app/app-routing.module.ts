import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AirservicesComponent } from './pages/airservices/airservices.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoreturmComponent } from './pages/coreturm/coreturm.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationComponent } from './pages/location/location.component';
import { LoginComponent } from './pages/login/login.component';
import { ServicesComponent } from './pages/services/services.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TrackingshipmentComponent } from './pages/trackingshipment/trackingshipment.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'location',component:LocationComponent},
  {path:'coreturm',component:CoreturmComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'booking',component:BookingComponent},
  {path:'airservices',component:AirservicesComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'enquiry',component:EnquiryComponent},
  {path:'trackingshipment',component:TrackingshipmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
