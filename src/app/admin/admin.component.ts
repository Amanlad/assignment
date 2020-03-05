import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
username: string;
password: number;
msg: string;
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
console.log('API CALL ');




  }

  loginDetails(username: string, password: string){

    var output = this.userService.isAdminRights(username, password);
     if(output === true){
       this.router.navigate(['/dashboard']);
     }
      else{
       this.msg ="UserId and Password Does Not Match";
     }
    
  }
}
