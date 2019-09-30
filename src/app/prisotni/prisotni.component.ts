import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-prisotni',
  templateUrl: './prisotni.component.html',
  styleUrls: ['./prisotni.component.css']
})
export class PrisotniComponent implements OnInit {
  
  employees: Employee[];

  constructor(
    private _employeeService: EmployeeService,
    ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    
    // this._employeeService.getEmployees()
    // .subscribe(data => this.employees = data);
  }

  // refresh(): void {
  //   location.reload();
  // }


}
