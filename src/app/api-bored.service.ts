import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiBoredService {

  apiUrl = "https://www.boredapi.com/api/activity";

  constructor(private _http: HttpClient) { }

  getUserData() {
    return this._http.get(this.apiUrl);
  }
}
