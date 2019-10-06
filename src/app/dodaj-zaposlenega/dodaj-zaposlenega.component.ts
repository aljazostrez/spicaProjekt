import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-dodaj-zaposlenega',
  templateUrl: './dodaj-zaposlenega.component.html',
  styleUrls: ['./dodaj-zaposlenega.component.css']
})
export class DodajZaposlenegaComponent implements OnInit {

  @Input() ime: string;
  @Input() priimek: string;
  @Input() email: string;
  @Input() maticna: string;

  nameOfAdded: string;

  employees: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private location: Location
    ) { }

  ngOnInit() {
    this.employeeService.getEmployees()
        .subscribe(
          data => this.employees = Object.keys(data).map(key => data[key])
          );
  }

  add(): void {
    this.ime = this.ime.trim();
    this.priimek = this.priimek.trim();
    this.email = this.email.trim();
    this.maticna = stringify(+this.maticna.trim());
    if (!this.ime || !this.priimek || !this.email || !this.maticna) return;
    let newEmployee: Employee = {
      "Id": null,
      "LastName": this.priimek,
      "FirstName": this.ime,
      "MiddleName": "",
      "City": "",
      "Phone": "",
      "Address": "",
      "State": "",
      "Fax": "",
      "ReferenceId": this.maticna,
      "Birth": "",
      "WorkingSchemeType": Math.round(Math.random()*100),
      "Occupation": "",
      "Unit3": "",
      "Unit2": "",
      "Unit1": "",
      "Email": this.email,
      "Other": "",
      "MobilePhone": "",
      "OrganizationalUnitId": null,
      "AdditionalField1": "",
      "AdditionalField2": "",
      "AdditionalField3": "",
      "AdditionalField4": "",
      "AdditionalField5": "",
      "AdditionalField6": null,
      "AdditionalField7": null,
      "AdditionalField8": null,
      "AdditionalField9": null,
      "AdditionalField10": null,
      "Active": true,
      "CurrentWorkingSchemeId": 0
    };
    this.employeeService.addEmployee(newEmployee).subscribe();
    this.nameOfAdded=this.ime;
  }

  goBack(): void {
    this.location.back();
  }

}
