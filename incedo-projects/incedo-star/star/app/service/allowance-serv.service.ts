import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Allowance } from '../model/allowance';
@Injectable({
  providedIn: 'root'
})
export class UserServService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
  constructor(private httpClient:HttpClient) { }

  getAllowance(): Observable<any>{
    let getAllowanceUrl:string = "http://localhost:3003/allowance";
    return this.httpClient.get(getAllowanceUrl,{headers: this.headers});
  }
  
}

