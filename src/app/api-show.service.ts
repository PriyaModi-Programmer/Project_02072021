import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiShowService {

  apiUrl = "https://api.tvmaze.com/search/shows?q=golden%20girls";
  
  constructor(private _http: HttpClient) { }

  getShow() {
    return this._http.get(this.apiUrl);
  }
}
