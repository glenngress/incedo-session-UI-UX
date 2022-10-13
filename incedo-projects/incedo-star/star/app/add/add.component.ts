import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Route, Router } from '@angular/router';
import { UserServService } from '../service/user-serv.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  loginUser : User[] = []; //for user values
  newLogin = new User('', '','','','',''); // dummy data
  isLoggedIn:boolean =false;
  constructor(private _httpService:UserServService,private router:Router) { }

  ngOnInit(): void {
  }

  addSubmit() {
    console.log(this.newLogin.activefrom + "->>>>")
      
    let addNewSignup = new User(this.newLogin.userid,
      this.newLogin.password="1234",this.newLogin.name,this.newLogin.activefrom="2022-10-13",
      this.newLogin.role,this.newLogin.status="active");
      
      
      console.log(this.newLogin.activefrom + "->>>>")
      this._httpService.addSignup(addNewSignup).subscribe();
      this.router.navigate(['/home/admin'])
  
    
  }

}
