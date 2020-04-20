import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) {}

  login(user: Object): Observable<Object> {
   // return this.http.post(`${this.baseUrl}/login.app`, user);

   const httpHeaders = new HttpHeaders();
   httpHeaders.set('Content-Type', 'application/json');
   httpHeaders.set('Return-Type', 'application/json');
   const options = {headers: httpHeaders};
   return this.http.post(`${this.baseUrl}/login.app`, user, options);
  }
}
