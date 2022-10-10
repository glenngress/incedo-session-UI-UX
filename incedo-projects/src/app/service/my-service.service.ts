import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { SignupUsersList } from '../model/signup-users-list';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
  constructor(private httpClient:HttpClient) { }
  //
  // get method implementation()
  //
  getUser(): Observable<any>{
    let getUserUrl:string = "http://localhost:3001/users/list";
    return this.httpClient.get(getUserUrl,{headers: this.headers});
  }
  addUser(user:User){
    let getUserUrl:string = "http://localhost:3001/users/create";
    return this.httpClient.post(getUserUrl,user,{headers: this.headers});
  }
  deleteUser(id:number){
    let getUserUrl:string = "http://localhost:3001/users/delete/" + id;
    return this.httpClient.delete(getUserUrl,{headers: this.headers});
  }
  getUserById(id:number): Observable<any>  {
    let getUserUrl:string = "http://localhost:3001/users/get/" + id;
    return this.httpClient.get(getUserUrl,{headers: this.headers});
  }
  updateUserById(user:User): Observable<any>  {
    let updateUserUrl:string = "http://localhost:3001/users/update/" + user.id;
    return this.httpClient.put(updateUserUrl,user,{headers: this.headers});
  }
  addSignup (signup:SignupUsersList){
    let postSignupList:string ="http://localhost:3001/signup/create";
    return this.httpClient.post(postSignupList,signup,{headers: this.headers});
  }
  getUserLogin(): Observable<any>{
    let getUserUrl:string = "http://localhost:3001/signup";
    return this.httpClient.get(getUserUrl,{headers: this.headers});
  }
}
