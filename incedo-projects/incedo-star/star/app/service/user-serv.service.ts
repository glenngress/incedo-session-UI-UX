import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Allowance } from '../model/allowance';

@Injectable({
  providedIn: 'root'
})
export class UserServService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
  constructor(private httpClient:HttpClient) { }

  getUser(): Observable<any>{
    let getUserUrl:string = "http://localhost:3002/users";
    return this.httpClient.get(getUserUrl,{headers: this.headers});
  }
  addUser(user:User){
    let getUserUrl:string = "http://localhost:3002/users/create";
    return this.httpClient.post(getUserUrl,user,{headers: this.headers});
  }
  updateUserById(user:User,id:string): Observable<any>  {
    let updateUserUrl:string = "http://localhost:3002/users/update/" + id;
    console.log(JSON.stringify(user) + "" + id +"errors");
    return this.httpClient.put(updateUserUrl,user,{headers: this.headers});

  }
  deleteUser(id:number){
    let getUserUrl:string = "http://localhost:3002/users/delete/" + id;
    return this.httpClient.delete(getUserUrl,{headers: this.headers});
  }
  getUserById(id:number): Observable<any>  {
    let getUserUrl:string = "http://localhost:3002/users/" + id;
    return this.httpClient.get(getUserUrl,{headers: this.headers});
  }
  
  getUserLogin(): Observable<any>{
    let getUserUrl:string = "http://localhost:3002/users";
    return this.httpClient.get(getUserUrl,{headers: this.headers});
  }

  
  getAllowance(): Observable<any>{
    let getAllowanceUrl:string = "http://localhost:3003/allowance";
    return this.httpClient.get(getAllowanceUrl,{headers: this.headers});
  }
  
  addSignup (signup:User){
    let postSignupList:string ="http://localhost:3002/users/create";
    return this.httpClient.post(postSignupList,signup,{headers: this.headers});
  }
}

