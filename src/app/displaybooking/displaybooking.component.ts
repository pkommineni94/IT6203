import { Component, OnInit } from '@angular/core';
import { flightsdataService } from '../new-flightsdata-form/flightsdata.service';  

@Component({
  selector: 'app-displaybooking',
  templateUrl: './displaybooking.component.html',
  styleUrls: ['./displaybooking.component.css']
})
export class DisplaybookingComponent implements OnInit {

  title = 'flightsconnect';
  public flightsdata;
  //initialize the call using StudentService 
  constructor(private _myService: flightsdataService) { }
  ngOnInit() {
    this.getFlightsdata();

}
getFlightsdata() {
  this._myService.getFlightsdata().subscribe(
     //read data and assign to public variable students
     data => { this.flightsdata = data},
     err => console.error(err),
     () => console.log('finished loading')
   );

   
  }

  onDelete(flightdataId: string) {
    this._myService.deleteFlightdata(flightdataId);
  }

 }
