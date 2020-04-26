import { Component, OnInit } from '@angular/core';
import { CarrentalsService } from '../carrentals.service';


export interface CarSearch {
  carmodel: string;
  cartype: string;
  fromdate: string;
  todate: string;
}

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  public carsdata = null;

  constructor(private carService: CarrentalsService) { }

  ngOnInit(): void {
    this.getCarssdata();
  }

  getCarssdata() {
    this.carsdata = null;
    // console.log('Success -- Component TS');

    this.carService.getCarRentalsearch().subscribe(
      // read data and assign to public variable students
      data => {
        this.carsdata = data;
        // console.log(data);
      },
      err => console.error(err),
      () => console.log('finished loading')
    );

  }

  onDelete(searchId: string) {
    this.carService.deleteSearch(searchId);
    location.reload();
  }

}
