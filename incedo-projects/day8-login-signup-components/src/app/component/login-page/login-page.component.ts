import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SignupUsersList } from 'src/app/model/signup-users-list';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginUser : SignupUsersList[] = []; //for user values
  newLogin = new SignupUsersList('', ''); // dummy data
  isLoggedIn:boolean =false;
  constructor(private _httpService:MyServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  login() {
    console.log(this.newLogin.password + this.newLogin.username)
    this._httpService.getUserLogin().subscribe(data => {
      this.loginUser = data;
      if(this.loginUser.find(x => x.username === this.newLogin.username) != undefined){
        let user = this.loginUser.find(x => x.username === this.newLogin.username);
        if(user?.password != this.newLogin.password){
          alert(`Trying to log in with [${user?.username}]. Password is incorrect`)
          this.newLogin.username = ''
          this.newLogin.password = ''
        }else{
          // alert(`Logged in with [${user?.username}] username`)
          this.isLoggedIn = true;
          this.router.navigate(['/home'])
        }
      }
      else{
        alert(`No data with associated with username ${this.newLogin.username}`)
        this.newLogin.username = ''
        this.newLogin.password = ''
      }
    });
  }
}
