import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRFoodService {

  apiUrl = "https://foodish-api.herokuapp.com/api/";

  constructor(private _http: HttpClient) { }

  getFood() {
    return this._http.get(this.apiUrl);
  }
}
