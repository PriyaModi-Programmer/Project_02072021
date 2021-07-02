import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDomainService {

  apiUrl = "https://restcountries.eu/rest/v2/all";
  constructor(private _http: HttpClient) { }

  getDomains() {
    return this._http.get(this.apiUrl);
  }
}
