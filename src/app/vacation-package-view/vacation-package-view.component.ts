import { Component, OnInit, ViewChild } from '@angular/core';
import { VacationPackageService } from '../vacationPackage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { VacationPackage } from '../vacationPackage';


@Component({
  selector: 'app-vacation-package-view',
  templateUrl: './vacation-package-view.component.html',
  styleUrls: ['./vacation-package-view.component.css']
})
export class VacationPackageViewComponent implements OnInit {
  dataSource: MatTableDataSource<VacationPackage>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'from', 'to'];
  
  public vacationPackages: any = [];
  constructor(private _myService:VacationPackageService){}
  ngOnInit(){
    
    this.getVacationPackages();
  }

  getVacationPackages()
  {
    this._myService.getVacationPackages().subscribe(
      //read data and assign to public variable students
      data => {this.vacationPackages = data;
        this.dataSource = new MatTableDataSource<VacationPackage>(this.vacationPackages);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        }, 0);
      },
      err => console.error(err),
      () => console.log('finished loading'),
      
    );                                             
  }

}
