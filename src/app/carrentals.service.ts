// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CarrentalsService {

//   constructor() { }
// }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class CarrentalsService {



  postUrl = 'http://localhost:8000/carrentals/';
  // newCarUrl = 'http://localhost:8000/caradd/';


  constructor(private http: HttpClient) { }

  addRentalCar(carModel: string, carType: string, availabilityStart: string, availabilityEnd: string) {
    // console.log('addRentalCar-- One more time -- success');
    // console.log('availabilityFrom' + availabilityStart);
    // console.log('availabilityEnd' + availabilityEnd);

    this.http.post(this.postUrl,
      { carModel, carType, availabilityStart, availabilityEnd })
      .subscribe((responseData) => {
        console.log('Response Data: ' + JSON.stringify(responseData));
      });
  }

  searchRentalCars(fromLocation: string, toLocation: string) {

    console.log('Success');

    this.http.post(this.postUrl, { fromLocation, toLocation })
      .subscribe((responseData) => {
        console.log('Response Data: ' + JSON.stringify(responseData));
      });
    // location.reload();
  }

  getCarById(searchId: string) {
    console.log('Service -- ID');
    return this.http.get(this.postUrl + searchId);
  }

  getCarRentalsearch() {
    // console.log('Success -- service TS');

    return this.http.get(this.postUrl);

    // console.log('Success');
    // this.http.get(this.postUrl)
    //   .subscribe((responseData) => {
    //     console.log('Response Data: ' + JSON.stringify(responseData));
    //   });
  }


  addStudents(firstName: string, lastName: string) {
    this.http.post(this.postUrl, { firstName, lastName })
      .subscribe((responseData) => {
        console.log('Response Data: ' + responseData);
      });
  }

  deleteStudent(studentId: string) {
    console.log(studentId);
    console.log(this.postUrl + studentId);
    this.http.delete(this.postUrl + studentId)
      .subscribe(() => {
        console.log('Deleted: ' + studentId);
      });
  }

  deleteSearch(searchId: string) {
    console.log('asdf');
    this.http.delete(this.postUrl + searchId)
      .subscribe(() => {
        console.log('Deleted: ' + searchId);
      });
    // location.reload();
    // console.log('Deleted: ' + searchId);
  }



  updateCar(carId: string, carModel: string, carType: string, availabilityStart: string, availabilityEnd: string) {
    // request path http://localhost:8000/students/5xbd456xx
    // first and last names will be send as HTTP body parameters
    this.http.put(this.postUrl + carId, { carModel, carType, availabilityStart, availabilityEnd })
      .subscribe(() => {
        console.log('Updated: ' + carId);
      });
    // location.reload();
  }






}


