import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NastavitveComponent } from './nastavitve/nastavitve.component';
import { EmployeesComponent } from './employees/employees.component';
import { PrisotniComponent } from './prisotni/prisotni.component';
import { DodajZaposlenegaComponent } from './dodaj-zaposlenega/dodaj-zaposlenega.component';


const routes: Routes = [
  { path: 'nastavitve', component: NastavitveComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'prisotni', component: PrisotniComponent },
  { path: 'employees/dodaj', component: DodajZaposlenegaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
