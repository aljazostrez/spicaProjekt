import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NastavitveComponent } from './nastavitve/nastavitve.component';
import { EmployeesComponent } from './employees/employees.component';
import { PrisotniComponent } from './prisotni/prisotni.component';
import { DodajZaposlenegaComponent } from './dodaj-zaposlenega/dodaj-zaposlenega.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NastavitveComponent,
    EmployeesComponent,
    PrisotniComponent,
    DodajZaposlenegaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
