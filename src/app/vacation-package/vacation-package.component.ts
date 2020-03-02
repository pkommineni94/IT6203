import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacation-package',
  templateUrl: './vacation-package.component.html',
  styleUrls: ['./vacation-package.component.css']
})
export class VacationPackageComponent implements OnInit {

  GuestsPlaceHolder : string = 'Enter Number of Guests';
  source : string = 'ATL';
  destination : string = 'NYC';
  buttonDisabled = false;
  message :string = '';
  findPackagesBtnClicked(){
       this.message = "Finding Vacation Package for " + this.source + " to " + this.destination;
       alert(this.message);
  }
  constructor(){}
  ngOnInit(){}

}
