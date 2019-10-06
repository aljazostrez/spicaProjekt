import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  @Input() searchByName: string = "";
  @Input() searchBySurname: string = "";

  dataSource = new MatTableDataSource<Employee>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['FirstName', 'LastName', 'Email', 'ReferenceId']

  constructor(
    private employeeService: EmployeeService,
    private router: Router
    ) {}

  ngOnInit() {
    this.employeeService.getEmployees()
        .subscribe(
          data => this.dataSource.data = Object.keys(data).map(key => data[key])
          );
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  dodajZaposlenegaPage(): void {
    this.router.navigate(['employees/dodaj']);
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}