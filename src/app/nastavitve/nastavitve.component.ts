import { Component, OnInit, Input } from '@angular/core';
// import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-nastavitve',
  templateUrl: './nastavitve.component.html',
  styleUrls: ['./nastavitve.component.css']
})
export class NastavitveComponent implements OnInit {

  @Input() url: string;
  @Input() key: string;
  authorisation: boolean;

  constructor(
    // private _employeeService: EmployeeService
    ) {  }

  ngOnInit() {
  }

  checkUrlKey(): void {
    // this._employeeService._url = this.url;
    // this._employeeService._authKey = this.key;
    
    // if token then true else false (not done)
    if (this.url && this.key) this.authorisation=true;
    else this.authorisation=false;
  }

}
