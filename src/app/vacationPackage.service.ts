import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { VacationPackageReserve } from './vacationPackageReserve';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
//we know that response will be in json format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    
    @Injectable()
    
    export class VacationPackageService {
        headers = new HttpHeaders().set('Content-Type', 'application/json');
      
 
        public vacationPackages: any = [];
         
        constructor(private http:HttpClient) {}
        // Uses http.get() to load data     
        getReservedVacationPackages() {        
            this.vacationPackages = this.http.get('http://localhost:8000/vacation-package-reservations');
            return this.vacationPackages
        }

        // Get student
        getReservedVacationPackage(reservationId: string): Observable<any> {
            let API_URL = "http://localhost:8000/vacation-package-reservations/"+ reservationId;
            return this.http.get(API_URL, { headers: this.headers })
            .pipe(
                map((res: Response) => {
                return res || {}
                }),
                catchError(this.errorMgmt)
            )
        }

        // Update student
        UpdateVacationPackageReservation(reservationId: string, data: VacationPackageReserve): Observable<any> {
            let API_URL = "http://localhost:8000/update-vacation-package-reservation/" + reservationId;
            return this.http.put(API_URL, data, { headers: this.headers })
            .pipe(
                catchError(this.errorMgmt)
            )
        }

        deleteReservation(reservationId: string) {  
            console.log("making api call for deleting reservation: " +reservationId);  
            this.http.delete("http://localhost:8000/vacation-package-reservation/" + reservationId)      
            .subscribe(() => {          
                console.log('Deleted: ' + reservationId);      
            });
            location.reload();
        }

        

        // Uses http.get() to load data     
        getVacationPackages() {        
            this.vacationPackages = this.http.get('http://localhost:8000/vacation-package');
            return this.vacationPackages
        }

        // Add a reservation
        AddVacationPackageReservation(data: VacationPackageReserve): Observable<any> {
            console.log("TEST");
            return this.http.post('http://localhost:8000/vacation-package-reservation', data)
              .pipe(
                catchError(this.errorMgmt)
              )
          }

        //Uses http.post() to post data     
        findVacationPackages(from: string, to: string) {        
            this.http.post('http://localhost:8000/vacation-package',{ from, to })      
            .subscribe((responseData) => { 
                this.vacationPackages = responseData;        
                console.log(responseData); 
                if(Object.keys(responseData).length > 0)
                {
                    var pkgs = JSON.stringify(responseData);
                    var msg = "Package found: " + "id: " + pkgs + "\n" + "Click OK and view complete list of packages."
                    alert(msg)

                }
                else{
                    console.log("Package Not found. " + "Click OK and view complete list of packages.");
                    alert("Package Not found" + "<br>" + "Click OK and view complete list of packages.");
                }
                
            });     
        }

        // Error handling 
        errorMgmt(error: HttpErrorResponse) {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
            } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            console.log(errorMessage);
            return throwError(errorMessage);
        }


}