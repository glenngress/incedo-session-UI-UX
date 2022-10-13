import { Component, OnInit } from '@angular/core';
import { Allowance } from 'src/app/model/allowance';
import { UserServService } from 'src/app/service/user-serv.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allow : Allowance[] = []; //for user values
  newAllow = new Allowance('', '',0,0,0,0,0,0,0,); // dummy data

  constructor(private _httpService:UserServService) { }

  ngOnInit(): void {
    this.getAllAllowance()
  }
getAllAllowance(){
  this._httpService.getAllowance() 
          .subscribe(data => {
            this.allow = data;
            // this.loginUser.sort((a,b)=> a.id - b.id);
          }); 
}
}
