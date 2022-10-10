import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/service/my-service.service';
import { User } from '../../model/user';
@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  usersList : User[] = []; //for user values
  user = new User(0, '', '', '', ''); // dummy data



  constructor(private _httpService:MyServiceService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }


   getAllUsers(){
    this._httpService.getUser() 
          .subscribe(data => {
            this.usersList = data;
            this.usersList.sort((a,b)=> a.id - b.id);
          }); 
  }
  editUser(id:number){
    this._httpService.getUserById(id).subscribe(data => this.user = data);
  }

deleteUser(id:number){
  this._httpService.deleteUser(id).subscribe()
  this.getAllUsers()
}
addNewUser(){
  let userToAdd = new User(this.user.id, this.user.name, this.user.address, this.user.location, this.user.country)
  this._httpService.addUser(userToAdd).subscribe();
  this.getAllUsers();
}


confirmUserEdit(){
  this._httpService.updateUserById(this.user).subscribe();
  this.user = new User(0, '', '', '', '');
  this.getAllUsers();
}

}
