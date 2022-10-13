import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Route, Router } from '@angular/router';
import { UserServService } from 'src/app/service/user-serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser : User[] = []; //for user values
  newLogin = new User('', '','','','',''); // dummy data
  isLoggedIn:boolean =false;
  constructor(private _httpService:UserServService,private router:Router) { }

  ngOnInit(): void {
    
  }
  login() {
    console.log(this.newLogin.password + this.newLogin.userid)
    this._httpService.getUserLogin().subscribe(data => {
      this.loginUser = data;
      if(this.loginUser.find(x => x.userid === this.newLogin.userid) != undefined){
        let user = this.loginUser.find(x => x.userid === this.newLogin.userid);
        if(user?.password != this.newLogin.password){
          alert(`Trying to log in with [${user?.userid}]. Password is incorrect`)
          this.newLogin.userid = ''
          this.newLogin.password = ''
        }
        if(user?.userid != "admin") {
          this.isLoggedIn = true;
            if(user?.status == "active") {
            this.router.navigate(['/dashboard'])
            }
            else if (user?.status != "active")
            alert(`Trying to log in with without active status`)
        }
        else{
          // alert(`Logged in with [${user?.username}] username`)
          this.isLoggedIn = true;
          this.router.navigate(['/home/admin'])
        }
      }
      else{
        alert(`No data with associated with username ${this.newLogin.userid}`)
        this.newLogin.userid = ''
        this.newLogin.password = ''
      }
    });
    this._httpService.getUserLogin().subscribe(data=> {
      this.loginUser=data;
      console.log(JSON.stringify(this.loginUser));
    }) 
  }
}

