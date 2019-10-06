import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-nastavitve',
  templateUrl: './nastavitve.component.html',
  styleUrls: ['./nastavitve.component.css']
})
export class NastavitveComponent implements OnInit {

  @Input() url: string;
  @Input() authKey: string;
  showError: boolean;
  public connectedToAPI: boolean;

  constructor(
    private employeeService: EmployeeService,
    ) {
      if (localStorage.token) this.connectedToAPI = true;
      else this.connectedToAPI = false;
    }

  ngOnInit() {}

  checkUrlKey(): void {
    localStorage.clear();
    try {
      this.employeeService.getSession(this.url, this.authKey).subscribe(data => {
            localStorage.setItem("token", JSON.stringify(data));
            this.connectedToAPI = true;
          });
        localStorage.setItem("url", this.url);
        localStorage.setItem("authKey", this.authKey);
    } catch (e) {}
    this.showError = true;
  }

}
