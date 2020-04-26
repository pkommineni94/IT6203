import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  opened = true;
  currentModule = '';
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(route:  ActivatedRoute, private router: Router){
   console.log( 'App -- route.component -- ' +  route);

  }

  ngOnInit() {
    console.log(window.innerWidth)
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }

  navigateComponent(modulename){ 
    this.currentModule = modulename;
    console.log(modulename);
    if(modulename == "vacationpackages")
      this.router.navigate(['/vacation-package-reservations']);
    else if(modulename == "car")
      this.router.navigate(['/carslist']);
    else if(modulename == "hotels")
      this.router.navigate(['/listHotels']);
    else  if(modulename == "flights")
      this.router.navigate(['/bookedFlights']);

    // console.log(modulename);
  }
}
