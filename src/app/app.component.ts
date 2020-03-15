import { Component, OnInit } from '@angular/core';
import { VacationPackageService } from './vacationPackage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TravelGuide';

  public vacationPackages;
  constructor(private _myService:VacationPackageService){}
  ngOnInit(){
    this.getVacationPackages();
  }

  getVacationPackages()
  {
    this._myService.getVacationPackages().subscribe(
      //read data and assign to public variable students
      data => {this.vacationPackages = data},
      err => console.error(err),
      () => console.log('finished loading')
    );                                             
  }
}
