import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacationPackageService } from './vacationPackage.service';
import { VacationPackageComponent } from './vacation-package/vacation-package.component';
import { HttpClientModule } from '@angular/common/http';
import { VacationPackageViewComponent } from './vacation-package-view/vacation-package-view.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { VacationPackageReserveComponent } from './vacation-package-reserve/vacation-package-reserve.component';
import { VacationPackageReserveListComponent } from './vacation-package-reserve-list/vacation-package-reserve-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VacationPackageComponent,
    VacationPackageViewComponent,
    VacationPackageReserveComponent,
    VacationPackageReserveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule,
   BrowserAnimationsModule, AngularMaterialModule
  ],
  providers: [VacationPackageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
