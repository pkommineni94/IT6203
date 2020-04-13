import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { VacationPackageService } from '../vacationPackage.service';

@Component({
  selector: 'app-vacation-package-edit',
  templateUrl: './vacation-package-edit.component.html',
  styleUrls: ['./vacation-package-edit.component.css']
})

export class VacationPackageEditComponent implements OnInit {
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
    this.updateVacationPkgForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute,
    private ngZone: NgZone,
    private myService:VacationPackageService
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.myService.getReservedVacationPackage(id).subscribe(data => {
      this.PackageCodeArray = ['ATLMIA5', 'ATLCHA2', 'MIAKYW3'];
      this.vacationPkgForm = this.fb.group({
        package_code: [data.package_code, [Validators.required]],
        primary_contact_firstName: [data.primary_contact_firstName, [Validators.required]],
        primary_contact_lastName: [data.primary_contact_lastName, [Validators.required]],
        phone: [data.phone, [Validators.required]],
        email: [data.email, [Validators.required]],
        number_of_guests: [data.number_of_guests, [Validators.required]],
        dob: [data.dob, [Validators.required]],
        gender: [data.gender],
        additional_information: [''],
      })  
    })    
  }


  /* Reactive reserve vaction pkg form */
  updateVacationPkgForm() {
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

 
  /* Update vacation pkg reservation */
  updatevacationPkgForm() {
    console.log(this.myNgForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.myService.UpdateVacationPackageReservation(id, this.myNgForm.value).subscribe( res => {
        this.router.navigate(['/vacation-package-reservations']);
      });
    }
  }

}


  