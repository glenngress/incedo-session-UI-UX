import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { UserServService } from 'src/app/service/user-serv.service';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.css']
})
export class RequestAccessComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  loginUser : User[] = []; //for user values
  newLogin = new User('', '','','','',''); // dummy data
  
  isLoggedIn:boolean =false;

  constructor(private formBuilder: FormBuilder,private _httpService:UserServService,private router:Router ) { }

  ngOnInit() {
    // this.registerForm = this.formBuilder.group({
    //     userid: ['', Validators.required],
    //     name: ['', Validators.required],
    //     date: ['', Validators.required],
    //     role: ['', [Validators.required, Validators.email]],
    //     password: ['', [Validators.required, Validators.minLength(6)]],
    //     confirmPassword: ['', Validators.required],
  
    // }, {
    //     validator: MustMatch('password', 'confirmPassword')
    // });

}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }


requestSubmit() {
  console.log(this.newLogin.activefrom + "->>>>")
  let addNewSignup = new User(this.newLogin.userid,
    this.newLogin.password,this.newLogin.name,this.newLogin.activefrom,
    this.newLogin.role,this.newLogin.status="requested");

    let time = "" + this.newLogin.activefrom;
    let newtime=time.split("T")[0]
    this.newLogin.activefrom= newtime;
    
    console.log(this.newLogin.activefrom + "->>>>")
    this._httpService.addSignup(addNewSignup).subscribe();
    this.router.navigate(['/'])

  
}

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}
onReset() {
  this.submitted = false;
  this.registerForm.reset();
}

}
