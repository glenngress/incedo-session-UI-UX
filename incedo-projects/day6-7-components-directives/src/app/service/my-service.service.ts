import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';

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
    let getUserUrl:string = "http://localhost:7000/users/list";
    return this.httpClient.get(getUserUrl,{headers: this.headers});
  }
  addUser(user:User){
    let getUserUrl:string = "http://localhost:7000/users/create";
    return this.httpClient.post(getUserUrl,user,{headers: this.headers});
  }
  deleteUser(id:number){
    let getUserUrl:string = "http://localhost:7000/users/delete/" + id;
    return this.httpClient.delete(getUserUrl,{headers: this.headers});
  }
  getUserById(id:number): Observable<any>  {
    let getUserUrl:string = "http://localhost:7000/users/get/" + id;
    return this.httpClient.get(getUserUrl,{headers: this.headers});
  }
  updateUserById(user:User): Observable<any>  {
    let updateUserUrl:string = "http://localhost:7000/users/update/" + user.id;
    return this.httpClient.put(updateUserUrl,user,{headers: this.headers});
  }
}
