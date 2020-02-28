import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from "./services/apixu.service";
/*
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from '@fortawesome/fontawesome-free';*/

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AngularFontAwesomeModule, 
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    //MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
