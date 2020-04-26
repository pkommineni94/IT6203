import { Component, OnInit, Input } from '@angular/core';
import { hotelsdataService } from '../hotelsdata.service';
import {Router} from '@angular/router';  
import {ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hotels-data-form',
  templateUrl: './hotels-data-form.component.html',
  styleUrls: ['./hotels-data-form.component.css']
})
export class HotelsDataFormComponent implements OnInit {

  @Input() Destination: string;
  @Input() Checkin: Date;
  @Input() Checkout: Date;
  @Input() class: string;
  @Input() Guests: number;

  public mode = 'add'; //default mode
  private id: string; //student ID

  constructor(private _myService: hotelsdataService, private router:Router, public route: ActivatedRoute) { }
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
    console.log("You submitted: " + this.Destination + " " + this.Checkin + " "+this.Checkout+ " "+this.class+" "+this.Guests + " ");
    // this._myService.addHotelsdata(this.Destination,this.Checkin.toDateString(),this.Checkout.toDateString(),this.class,this.Guests);
    console.log(this.mode);
    if(this.mode == 'add')
      this._myService.addHotelsdata(this.Destination ,this.Checkin.toDateString(), this.Checkout.toDateString(), this.class, this.Guests);
    if(this.mode == 'edit')
      this._myService.updateHotel(this.id,this.Destination ,this.Checkin.toDateString(), this.Checkout.toDateString(), this.class, this.Guests);

    this.router.navigate(['/listHotels']);
  }

}
