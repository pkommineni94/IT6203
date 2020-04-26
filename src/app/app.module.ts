import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacationPackageComponent } from './vacation-package/vacation-package.component';
import { HttpClientModule } from '@angular/common/http';
import { VacationPackageViewComponent } from './vacation-package-view/vacation-package-view.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AgmCoreModule } from '@agm/core';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { VacationPackageReserveComponent } from './vacation-package-reserve/vacation-package-reserve.component';
import { VacationPackageReserveListComponent } from './vacation-package-reserve-list/vacation-package-reserve-list.component';
import { VacationPackageEditComponent } from './vacation-package-edit/vacation-package-edit.component';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { NewCarComponent } from './new-car/new-car.component';
import { ListHotelsComponent } from './list-hotels/list-hotels.component';
import { HotelsDataFormComponent } from './hotels-data-form/hotels-data-form.component';
import { NewFlightsdataFormComponent } from './new-flightsdata-form/new-flightsdata-form.component';
import { DisplaybookingComponent } from './displaybooking/displaybooking.component';



import { CarrentalsService } from './carrentals.service';
import { hotelsdataService } from './hotelsdata.service';  
import { VacationPackageService } from './vacationPackage.service';
import { flightsdataService } from './new-flightsdata-form/flightsdata.service';
import { GooglemapsapiComponent } from './googlemapsapi/googlemapsapi.component';   


@NgModule({
  declarations: [
    AppComponent,
    VacationPackageComponent,
    VacationPackageViewComponent,
    VacationPackageReserveComponent,
    VacationPackageReserveListComponent,
    VacationPackageEditComponent,
    ListCarsComponent,
    NewCarComponent,
    ListHotelsComponent,
    HotelsDataFormComponent,
    NewFlightsdataFormComponent,
    DisplaybookingComponent,
    GooglemapsapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatFormFieldModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmQRPhT80RT67fUSsSr4gwvkjWASX7Kvw'
    })
  ],
  providers: [
    VacationPackageService,
    CarrentalsService,
    hotelsdataService,
    flightsdataService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
