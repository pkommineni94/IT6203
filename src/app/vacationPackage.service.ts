import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
//we know that response will be in json format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    
    @Injectable()
    
    export class VacationPackageService {   
        public vacationPackages: any = [];
         
        constructor(private http:HttpClient) {}
        // Uses http.get() to load data     
        getVacationPackages() {        
            this.vacationPackages = this.http.get('http://localhost:8000/vacation-package');
            return this.vacationPackages
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

}