import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserServService } from 'src/app/service/user-serv.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  loginUser : User[] = []; //for user values
  newLogin = new User('', '','','','',''); // dummy data

  constructor(private _httpService:UserServService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(){
    this._httpService.getUser() 
          .subscribe(data => {
            this.loginUser = data;
            // this.loginUser.sort((a,b)=> a.id - b.id);
          }); 
  }

  confirmButton (u:string,id:string) {
    console.log(u);
    let userToChange =this.loginUser.find(x=>x.userid==id);
    let time = "" + userToChange?.activefrom
    let newtime=time.split("T")[0]
    userToChange!.activefrom= newtime
    console.log(JSON.stringify(userToChange) + "->>");
    if(u == "requested") {
      console.log("here");
      userToChange!.status="active";
        this._httpService.updateUserById(userToChange!,userToChange!.userid).subscribe();
        console.log(this.loginUser);
        this.getAllUsers();
        this.ngOnInit();
    }
    else {

    }
   
  }

}
