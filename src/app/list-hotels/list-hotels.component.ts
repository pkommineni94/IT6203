import { Component, OnInit } from '@angular/core';
import { hotelsdataService } from '../hotelsdata.service';
import {Router} from '@angular/router';  

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.css']
})
export class ListHotelsComponent implements OnInit {

  public hotelsdata;
 
  constructor(private _myService: hotelsdataService, private router:Router) { }
  ngOnInit() {
    this.getHotelsdata();
}

getHotelsdata() {
  this._myService.getHotelsdata().subscribe(
    
     data => { this.hotelsdata = data},
     err => console.error(err),
     () => console.log('finished loading')
   );
 }

 onDelete(hotelId: string) {
  this._myService.deleteHotel(hotelId);
  // this.router.navigate(['/listHotels']);
  location.reload();
}

}
