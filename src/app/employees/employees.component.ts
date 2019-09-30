import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  @Input() searchByName = "";
  @Input() searchBySurname = "";

  employees: Employee[];

  constructor(
    private _employeeService: EmployeeService,
    private router: Router
    ) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();

    // this._employeeService.getEmployees()
    // .subscribe(data => this.employees = data);
  }

  dodajZaposlenegaPage(): void {
    this.router.navigate(['employees/dodaj']);
  }

  actionCame(employee: Employee): void {
    let indexValue = this.employees.indexOf(employee);
    this.employees[indexValue].prisoten = true;
  }

  actionLeft(employee: Employee): void {
    let indexValue = this.employees.indexOf(employee);
    this.employees[indexValue].prisoten = false;
  }

  deleteEmployee(employee: Employee): void {
    this.employees = this.employees.filter(object => object !== employee);
    this._employeeService.employees = this.employees.filter(object => object !== employee);
  }

  searchName(): void {
    if (this.searchByName == "") this.ngOnInit();
    else {
      this.ngOnInit();
      this.employees = this.employees.filter(object => object.ime.toLocaleLowerCase().includes(this.searchByName.toLocaleLowerCase()));
    }
  }
  searchSurname() {
    if (this.searchBySurname == "") this.ngOnInit();
    else {
      this.ngOnInit();
      this.employees = this.employees.filter(object => object.priimek.toLocaleLowerCase().includes(this.searchBySurname.toLocaleLowerCase()));
    }
  }

}
