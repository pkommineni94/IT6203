import { Component, OnInit, ViewChild } from '@angular/core';
import { VacationPackageService } from '../vacationPackage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { VacationPackageReserve} from '../vacationPackageReserve';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-vacation-package-reserve-list',
  templateUrl: './vacation-package-reserve-list.component.html',
  styleUrls: ['./vacation-package-reserve-list.component.css']
})
export class VacationPackageReserveListComponent implements OnInit {
  dataSource: MatTableDataSource<VacationPackageReserve>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['primary_contact_firstName', 'primary_contact_lastName', 'package_code', 'total_price','id', 'action'];
  
  currentModule = '';
  public vacationPackages: any = [];
  constructor(route:  ActivatedRoute, private _myService:VacationPackageService){
   // console.log( 'route.component' +  route.routeConfig.path);
   console.log( 'route.component' +  route.parent);
   this.currentModule = 'vacationpackages';
  }
  ngOnInit(){
    
    this.getVacationPackages();
  }

  getVacationPackages()
  {
    this._myService.getReservedVacationPackages().subscribe(
      //read data and assign to public variable students
      data => {this.vacationPackages = data;
        this.dataSource = new MatTableDataSource<VacationPackageReserve>(this.vacationPackages);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        }, 0);
      },
      err => console.error(err),
      () => console.log('finished loading'),
      
    );                                             
  }

  onDelete(index: number, e) {
    
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      console.log("deleting reservation: " +e._id);
      this._myService.deleteReservation(e._id);
    }  
  }

}
