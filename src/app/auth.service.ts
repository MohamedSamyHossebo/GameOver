import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: BehaviorSubject<any> = new BehaviorSubject(null)

  constructor(private _httpClient: HttpClient, private _router: Router) { 
    if(localStorage.getItem('token') !=null){
      this.saveUserData();
    }
  }

  saveUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('token'));
    let decodedToken: any = jwtDecode(encodedToken);
    this.userData.next(decodedToken);
    console.log(this.userData);

  }
  signUp(data: User): Observable<any> {
    return this._httpClient.post('https://route-movies-api.vercel.app/signup', data)
  }
  signIn(data: User): Observable<any> {
    return this._httpClient.post('https://route-movies-api.vercel.app/signin', data)
  }
  logOut() {
    localStorage.removeItem("token");
    this.userData.next(null);
    this._router.navigate(['/login']) 
  }
}
