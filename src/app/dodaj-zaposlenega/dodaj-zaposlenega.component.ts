import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-dodaj-zaposlenega',
  templateUrl: './dodaj-zaposlenega.component.html',
  styleUrls: ['./dodaj-zaposlenega.component.css']
})
export class DodajZaposlenegaComponent implements OnInit {

  @Input() ime: string;
  @Input() priimek: string;
  @Input() email: string;
  @Input() maticna: number;

  nameOfAdded: string;
  employeeAlreadyExist: boolean = false;

  employees: Employee[];

  constructor(
    private _employeeService: EmployeeService,
    // private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    // this._employeeService.getEmployees()
    // .subscribe(data => this.employees = data);
  }

  add(): void {
    this.ime = this.ime.trim();
    this.priimek = this.priimek.trim();
    this.email = this.email.trim();
    this.maticna = +this.maticna;
    if (!this.ime || !this.priimek || !this.email || !this.maticna) return;
    let newEmployee: Employee = {
      ime: this.ime,
      priimek: this.priimek,
      email: this.email,
      maticna: this.maticna,
      prisoten: false
    };
    try {
      for (let employee of this.employees) {
        if (employee.maticna == newEmployee.maticna) {
          this.employeeAlreadyExist=true;
          this.nameOfAdded = null;
        }
      };
      if (!this.employeeAlreadyExist) {
        this._employeeService.addEmployee(newEmployee);
        this.nameOfAdded=this.ime;
        this.employeeAlreadyExist=false;
      }

      // this._employeeService.addEmployee(newEmployee)
      //   .subscribe(object => this.employees.push(object));
    }
    catch {
      this.nameOfAdded = null;
      this.employeeAlreadyExist=false;
    };
  }

  goBack(): void {
    this.location.back();
  }

}
