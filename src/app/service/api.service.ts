import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "http://localhost:8090/api/";
  cityName!: string;

  constructor(private http: HttpClient) { }

  setCityName(name: string) {
    this.cityName = name;
  }
  getCityName() {
    return this.cityName;
  }

  getReportByCityName(): Observable<Weather> {
    return this.http.get<Weather>(`${this.baseUrl}weather?city=${this.cityName}`);
  }
}
