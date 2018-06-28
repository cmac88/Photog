import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAll() {
    return this._http.get('/api/users');
  }

  add(data) {
     return this._http.post('/api/users', data);

  }
  getOne(id ) {
    return this._http.get('/api/users/' + id);
  }

  update(id, user) {
    console.log(user);
    return this._http.put('/api/users/' + id, {name: user.name, email: user.email, password: user.password});
  }

  delete(id) {
    return this._http.delete('/api/users/' + id);
  }
}
