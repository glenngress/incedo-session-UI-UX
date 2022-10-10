import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn =false;
  username:string ='';

  constructor() { }
  isAuthenticated() {
    return this.isLoggedIn
  }
}

