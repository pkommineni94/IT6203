import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { VacationPackageService } from '../vacationPackage.service';

@Component({
  selector: 'app-vacation-package-reserve',
  templateUrl: './vacation-package-reserve.component.html',
  styleUrls: ['./vacation-package-reserve.component.css']
})
export class VacationPackageReserveComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetvacationPkgForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  vacationPkgForm: FormGroup;
  PackageCodeArray: any = ['ATLMIA5', 'ATLCHA2', 'MIAKYW3'];
  

  ngOnInit() {
    this.submitVacationPkgForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private myService:VacationPackageService
  ) { }

  /* Reactive reserve vaction pkg form */
  submitVacationPkgForm() {
    this.vacationPkgForm = this.fb.group({
      package_code: ['', [Validators.required]],
      primary_contact_firstName: ['', [Validators.required]],
      primary_contact_lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      number_of_guests: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      gender: ['Male'],
      additional_information: [''],
    })
  }

  /* Date */
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.vacationPkgForm.get('dob').setValue(convertDate, {
      onlyself: true
    })
  }  

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.vacationPkgForm.controls[controlName].hasError(errorName);
  }  

  /* Submit book */
  submitvacationPkgForm() {
    if (this.vacationPkgForm.valid) {

      this.myService.AddVacationPackageReservation(this.vacationPkgForm.value).subscribe(res => {
        let id = res['_id'];
        alert("Vacation Package Reservation was successful. Confirmation# " + id);
        this.router.navigate(['/vacation-package-reservations']);
      }, (err) => {
        console.log(err);
      }
    );
  }
}

}
