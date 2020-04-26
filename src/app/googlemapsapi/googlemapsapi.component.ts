import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemapsapi',
  templateUrl: './googlemapsapi.component.html',
  styleUrls: ['./googlemapsapi.component.css']
})
export class GooglemapsapiComponent implements OnInit {
  lat: number = 33.9371;
  lng: number = -84.5197;

  
  constructor() { }

  ngOnInit(): void {
  }

  onChooseLocation(event){
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

}
