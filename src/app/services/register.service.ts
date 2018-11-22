import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  uri = 'http://localhost:4000/register';
  constructor(private http: HttpClient) { }


  addUser(full_name, user_name, password) {
    const obj = {
      full_name: full_name,
      user_name: user_name,
      password: password  
    }

    this.http.post(`${this.uri}/register`, obj)
    .subscribe(res => console.log('success'));
  }
}
