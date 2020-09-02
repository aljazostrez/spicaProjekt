import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    public http: HttpClient
    ) {}
  
  getSession(url: string, key: string): Observable<any> {
    let body = {
      "Username": "Timeapi",
      "Password": "timeapi",
      "Sid": ""
    };
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': key
      })
    }
    return this.http.post(`${url}/Session/GetSession`, body, httpOptions);
  }

  getEmployees(): Observable<any> {
    let url = localStorage.getItem("url");
    let key = localStorage.getItem("authKey");
    let token = JSON.parse(localStorage.getItem("token")).Token;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${key}:${token}`
      })
    }
    return this.http.get(`${url}/employee`, httpOptions);
  }

  addEmployee(employee: Employee): Observable<any> {
    let url = localStorage.getItem("url");
    let key = localStorage.getItem("authKey");
    let token = JSON.parse(localStorage.getItem("token")).Token;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${key}:${token}`
      })
    }
    return this.http.put(`${url}/employee`, employee, httpOptions);
  }

}
