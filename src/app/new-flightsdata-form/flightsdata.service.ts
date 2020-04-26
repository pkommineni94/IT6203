import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class flightsdataService {
    
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data 
    getFlightsdata() {
        return this.http.get('http://localhost:8000/flightsdata');
    }
   
    addFlightsdata(From: string, Towhere: string, Trip: string, Depart: Date, Travelreturn: Date,  people: number) {
        this.http.post('http://localhost:8000/flightsdata',{ From,Towhere, Trip, Depart,Travelreturn, people })
      .subscribe((responseData) => {
         console.log(responseData);
       }); 
    }

    updateFlightsdata(flightId: string,From: string, Towhere: string, Trip: string, Depart: Date, Travelreturn: Date, people: number) {
     
      this.http.put("http://localhost:8000/flightsdata/" 
                     + flightId,{ From,Towhere, Trip,Depart,Travelreturn,people})
                  .subscribe(() => {
                      console.log('Updated: ' + flightId);
                    });
                    location.reload();
    }

    
    deleteFlightdata(flightdataId: string) {
        this.http.delete("http://localhost:8000/flightsdata/" + flightdataId)
          .subscribe(() => {
              console.log('Deleted: ' + flightdataId);
          });

          

          
        

        location.reload();
      }


}
