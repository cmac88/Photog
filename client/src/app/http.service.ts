import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getUser(name) {
    console.log('service here', name);
    return this._http.get('/api/user/' + name);
  }
}
