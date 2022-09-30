import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private apiKey: string = '';

  constructor( private authHttp: HttpClient ) { }

  public getWeatherData(url: string) {
    // return this.authHttp.get();

    // http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={this.apiKey}


  }


}

