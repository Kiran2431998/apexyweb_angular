import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LocationComponent } from './pages/location/location.component';
import { CoreturmComponent } from './pages/coreturm/coreturm.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AirservicesComponent } from './pages/airservices/airservices.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { TrackingshipmentComponent } from './pages/trackingshipment/trackingshipment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    LocationComponent,
    CoreturmComponent,
    LoginComponent,
    SignupComponent,
    BookingComponent,
    AirservicesComponent,
    BlogsComponent,
    EnquiryComponent,
    TrackingshipmentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
