import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Response} from "@angular/http";
import {Observable} from 'rxjs';

@Injectable()
export class authService {
    readonly rootUrl = 'http://localhost:4200';
    constructor(private http: HttpClient) { }

    //some authentication + login websites/youtube videos I used
    //https://angular-templates.io/tutorials/about/firebase-authentication-with-angular
    //https://www.youtube.com/watch?v=rajjv-0bSps
    
  registerUser(user : User){
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FullName: user.FullName
    }
    return this.http.post(this.rootUrl + '/api/User/Register', body);
  }
  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }

}