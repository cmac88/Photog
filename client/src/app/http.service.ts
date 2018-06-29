import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getUser(user){
    console.log('service here', user)
    return this._http.get('/api/user/'+ user.name)
  }
}
