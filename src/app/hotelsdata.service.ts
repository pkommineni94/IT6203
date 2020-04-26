import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class hotelsdataService {

  postUrl = 'http://localhost:8000/hotelsdata/';
    constructor(private http:HttpClient) {}
  // Uses http.get() to load data 
    getHotelsdata() {
        return this.http.get('http://localhost:8000/hotelsdata');
    }

    addHotelsdata(Destination: string, Checkin: string, Checkout: string, Class: string, Guests: number) {
      console.log('HOTELS-SERVICE-ADD')
        this.http.post(this.postUrl,{ Destination,Checkin,Checkout,Class,Guests })
        .subscribe((responseData) => {
         console.log(responseData);
       }); 
    }
    updateHotel(hotelId: string,Destination: string, Checkin: string, Checkout: string, Class: string, Guests: number) {
      //request path http://localhost:8000/students/5xbd456xx 
      //first and last names will be send as HTTP body parameters 
          this.http.put("http://localhost:8000/hotelsdata/" 
               + hotelId,{ Destination,Checkin,Checkout,Class,Guests  })
            .subscribe(() => {
                console.log('Updated: ' + hotelId);
            });
            // location.reload();
      }
  

    deleteHotel(hotelId: string) {
        this.http.delete("http://localhost:8000/hotelsdata/" + hotelId)
          .subscribe(() => {
              console.log('Deleted: ' + hotelId);
          });
      }
      
    
}




