import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in json format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    
    @Injectable()
    
    export class VacationPackageService {    
        constructor(private http:HttpClient) {}
        // Uses http.get() to load data     
        getVacationPackages() {        
            return this.http.get('http://localhost:8000/vacation-package');
        }

        //Uses http.post() to post data     
        findVacationPackages(from: string, to: string) {        
            this.http.post('http://localhost:8000/vacation-package',{ from, to })      
            .subscribe((responseData) => {         
                console.log(responseData);       
            });     
        }

}