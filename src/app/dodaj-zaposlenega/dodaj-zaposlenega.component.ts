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
    if (!this.ime || !this.priimek || !this.email || !this.maticna) return;
    this.ime = this.ime.trim();
    this.priimek = this.priimek.trim();
    this.email = this.email.trim();
    this.maticna = stringify(+this.maticna.trim());
    let newEmployee: Employee =
    {
      "Id": 0,
      "LastName": this.priimek,
      "FirstName": this.ime,
      "MiddleName": null,
      "City": null,
      "Phone": null,
      "Address": null,
      "State": null,
      "Fax": null,
      "ReferenceId": this.maticna,
      "Birth": "",
      "WorkingSchemeType": null,
      "Occupation": null,
      "Unit3": null,
      "Unit2": null,
      "Unit1": null,
      "Email": this.email,
      "Other": null,
      "MobilePhone": null,
      "OrganizationalUnitId": null,
      "AdditionalField1": null,
      "AdditionalField2": null,
      "AdditionalField3": null,
      "AdditionalField4": null,
      "AdditionalField5": null,
      "AdditionalField6": null,
      "AdditionalField7": null,
      "AdditionalField8": null,
      "AdditionalField9": null,
      "AdditionalField10": null,
      "Active": true,
      "CurrentWorkingSchemeId": null
  }
    this.employeeService.addEmployee(newEmployee).subscribe();
    this.nameOfAdded=this.ime;
  }

  goBack(): void {
    this.location.back();
  }

}
