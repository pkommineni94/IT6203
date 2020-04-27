import { Component, OnInit, Input } from '@angular/core';
import { CarrentalsService } from '../carrentals.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {
  carmodel: string;
  cartype: string;
  availabilityStart: Date;
  availabilityEnd: Date;
  title: string;
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carService: CarrentalsService) {
    this.title = 'Add New Car';
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = 'Update Car';
    }
    console.log(this.id);

  }

  ngOnInit(): void {
  }

  onSubmit(cardata) {
    // console.log(cardata);
    // console.log('You submitted: ' + this.carmodel + ' ' + this.cartype + this.availabilityStart + ' ' + this.availabilityEnd);
    // this.myService.addStudents(this.firstname, this.lastname);
    if (this.id) {
      console.log(this.id);
      this.carService.updateCar(this.id, this.carmodel, this.cartype,
        this.availabilityStart.toDateString(), this.availabilityEnd.toDateString());

    } else {
      this.carService.addRentalCar(this.carmodel, this.cartype, this.availabilityStart.toDateString(), this.availabilityEnd.toDateString());
    }
    this.router.navigate(['/carslist/']); 
  }

}
