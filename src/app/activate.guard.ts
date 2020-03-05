import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from './user.service';
@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(sessionStorage.getItem('username')!= null){
        return true;
      }
     else{
        alert('Please Login First');
       this.router.navigate(['admin']);
       return false;
     }
  }

 
}
