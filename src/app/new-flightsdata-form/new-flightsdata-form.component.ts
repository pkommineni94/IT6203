import { Component, OnInit, Input } from '@angular/core';
import { flightsdataService } from '../new-flightsdata-form/flightsdata.service'; 
import {Router} from '@angular/router'; 
import {ActivatedRoute, ParamMap } from '@angular/router'; 

@Component({
  selector: 'app-new-flightsdata-form',
  templateUrl: './new-flightsdata-form.component.html',
  styleUrls: ['./new-flightsdata-form.component.css']
})
export class NewFlightsdataFormComponent implements OnInit {
  @Input() From: string;
  @Input() Towhere: string;
  @Input() Trip: string;
  @Input() Depart: Date;
  @Input() Travelreturn: Date;
  @Input() people: number;

  private mode ='add' ;
  private id : string;
  constructor(private _myService: flightsdataService,private router: Router, public route:ActivatedRoute) { }
  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
       if (paramMap.has('_id'))
         { this.mode = 'edit'; /*request had a parameter _id */ 
           this.id = paramMap.get('_id');}
       else {this.mode = 'add';
           this.id = null; }
     });
  }
  
  onSubmit(){
    console.log("You submitted: " + this.From + " " + this.Towhere+ " "+this.Trip+ " "+ 
    this.Depart +" "+this.Travelreturn +" "+this.people + " ");
    //if(this.mode == 'add')
    this._myService.addFlightsdata(this.From,this.Towhere,this.Trip,this.Depart,this.Travelreturn,this.people);
    //if(this.mode == 'edit')
    // this._myService.updateFlightsdata(this.id,this.From,this.Towhere,this.Trip,this.Depart,this.Travelreturn,this.people);
  }

  

  
}
