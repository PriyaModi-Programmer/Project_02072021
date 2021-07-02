import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPublicService {

  apiUrl = "https://api.publicapis.org/entries";
  constructor(private _http: HttpClient) { }

  getAllApi() {
    return this._http.get(this.apiUrl);
  }
}
