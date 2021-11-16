import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = "http://localhost:9990/"
  // private http: HttpClient
  constructor(private http: HttpClient) {}
    signupowner(signupData:any){
      let endPoint = "api/v1/salon"
      return this.http.post(this.baseURL+endPoint,signupData)
    }
    loginowner(loginData:any){
      let endPoint = "api/v1/salon/login"
      return this.http.post(this.baseURL+endPoint,loginData)
    }
    signupcustomer(signupData:any){
      let endPoint = "api/v1/salon"
      return this.http.post(this.baseURL+endPoint,signupData)
    }
    logincustomer(loginData:any){
      let endPoint = "api/v1/salon/login"
      return this.http.post(this.baseURL+endPoint,loginData)
    }
   
}
