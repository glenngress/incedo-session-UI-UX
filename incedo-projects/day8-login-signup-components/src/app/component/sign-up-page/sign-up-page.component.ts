import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { MyServiceService } from 'src/app/service/my-service.service';
import { SignupUsersList } from 'src/app/model/signup-users-list';
@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  signupList : SignupUsersList[] = []; //for user values
  newSignUp = new SignupUsersList('', ''); // dummy data

  constructor(private _httpService:MyServiceService) { }

  ngOnInit(): void {
  }
  signUp() {
    let addNewSignup = new SignupUsersList(this.newSignUp.username,
    this.newSignUp.password)
    this._httpService.addSignup(addNewSignup).subscribe();
  }
}
