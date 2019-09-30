import { Injectable } from '@angular/core';
import { Employee } from './employee';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees = [
    { "ime": "Lionel", "priimek": "Messi", "email":"lionel.messi@gmail.com", "maticna": 6151392158976, "prisoten": true },
    { "ime": "Cristiano", "priimek": "Ronaldo", "email":"cristiano.ronaldo@gmail.com", "maticna": 2833296532826, "prisoten": true },
    { "ime": "Virgil", "priimek": "van Dijk", "email":"virgil.van.dijk@gmail.com", "maticna": 6317382349790, "prisoten": false },
    { "ime": "Marc-Andre", "priimek": "ter Stegen", "email":"mark.ter.stegen@gmail.com", "maticna": 2459985334841, "prisoten": true },
    { "ime": "Neymar", "priimek": "Junior", "email":"neymar@gmail.com", "maticna": 1536966146644, "prisoten": false },
    { "ime": "Josip", "priimek": "Iličić", "email":"jojo@gmail.com", "maticna": 7311884734659, "prisoten": true },
    { "ime": "Luka", "priimek": "Modrić", "email":"luka.modric@gmail.com", "maticna": 3175853360587, "prisoten": false }
];

  // url: string;
  // public _authKey: string;

  // httpOptions = {
  // };


  constructor(
    // private http: HttpClient
    ) { }

  getEmployees() {
    return this.employees;
    // return this.http.get(this._url);
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    // return this.http.post<Employee>(this._url, employee, this.httpOptions);
  }

  // deleteEmployee(employee: Employee) {
  //   this.employees.filter(zaposlen => zaposlen != employee);
  // }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // };

}
