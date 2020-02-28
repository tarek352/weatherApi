import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { 
    
  }
  getWeather(location){
    return this.http.get(
        'http://api.weatherstack.com/current?access_key=789a869a08d5311c77fefec880cb3476&query=' + location
    );
} 
}
