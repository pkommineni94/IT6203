import { Component, OnInit, Input } from '@angular/core';
import { VacationPackageService } from '../vacationPackage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacation-package',
  templateUrl: './vacation-package.component.html',
  styleUrls: ['./vacation-package.component.css']
})
export class VacationPackageComponent implements OnInit {

  GuestsPlaceHolder : string = 'Enter Number of Guests';
  //from : string = 'Miami';
  //to : string = 'Keywest';
  buttonDisabled = false;
  message :string = '';
  @Input() from: string;
  @Input() to: string;
  
  constructor(private _myService: VacationPackageService, private router: Router) { 
    
  }
  
  onSubmit(){
    console.log("You are searching packages for: " + this.from + "  - To- " + this.to);
    this.findVacationPackages(this.from, this.to);
  }
  ngOnInit(): void {
  }

  findVacationPackages(from : string, to : string)
  {
    this._myService.findVacationPackages(from, to);
    this.router.navigateByUrl('/vacation-packages-list');

  }

}
