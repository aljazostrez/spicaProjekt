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
    private employeeService: EmployeeService
    ) {}

  ngOnInit() {
    this.employeeService.getEmployees()
          .subscribe(
            data => this.employees = Object.keys(data).map(key => data[key])
            );
  }

  refresh(): void {
    location.reload();
  }


}
