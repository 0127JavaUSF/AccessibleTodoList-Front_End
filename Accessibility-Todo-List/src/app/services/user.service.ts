import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) {}

  login(user: Object): Observable<Object> {
    // return of({error: "empty"});
    return this.http.post(`${this.baseUrl}/login.app`, user);
  }
}