import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacationPackageViewComponent } from './vacation-package-view/vacation-package-view.component';
import { VacationPackageComponent } from './vacation-package/vacation-package.component';
import { VacationPackageReserveComponent } from './vacation-package-reserve/vacation-package-reserve.component';
import { VacationPackageReserveListComponent } from './vacation-package-reserve-list/vacation-package-reserve-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'vacation-packages-list' },
  { path: 'vacation-packages-list', component: VacationPackageViewComponent },
  { path: 'vacation-packages-find', component: VacationPackageComponent },
  {path: 'vacation-package-reservation', component: VacationPackageReserveComponent },
  {path: 'vacation-package-reservations', component: VacationPackageReserveListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
