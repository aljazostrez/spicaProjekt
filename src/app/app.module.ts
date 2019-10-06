import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NastavitveComponent } from './nastavitve/nastavitve.component';
import { EmployeesComponent } from './employees/employees.component';
import { PrisotniComponent } from './prisotni/prisotni.component';
import { DodajZaposlenegaComponent } from './dodaj-zaposlenega/dodaj-zaposlenega.component';
import { EmployeeService } from './employee.service';
import { PovezanoComponent } from './povezano/povezano.component';

@NgModule({
  declarations: [
    AppComponent,
    NastavitveComponent,
    EmployeesComponent,
    PrisotniComponent,
    DodajZaposlenegaComponent,
    PovezanoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
