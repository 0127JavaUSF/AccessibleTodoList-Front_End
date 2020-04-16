import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Observable, of } from 'rxjs';
=======
import { Observable } from 'rxjs';
>>>>>>> 7b13deb2ecc1ad47dc8c412630d825eb941f7d03

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) {}

  login(user: Object): Observable<Object> {
<<<<<<< HEAD
    // return of({error: "empty"});
=======
>>>>>>> 7b13deb2ecc1ad47dc8c412630d825eb941f7d03
    return this.http.post(`${this.baseUrl}/login.app`, user);
  }
}