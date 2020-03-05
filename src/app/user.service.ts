import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  isAdminRights(username: string, password: string): boolean{
    if(username == "admin" && password == "admin123"){
      sessionStorage.setItem('username','admin');
      return true;
    }
    else{
      return false;
    }
  }





  



}
