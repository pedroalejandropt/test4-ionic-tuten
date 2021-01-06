import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  url = "https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings";
  
  public fetchBookings(booking){    
    let user = JSON.parse(localStorage.getItem('data'));
    let headers = new HttpHeaders({'Accept':'application/json','App':'APP_BCK', 'Token': user.sessionTokenBck, 'Adminemail': user.email}); 
      
    return this.http.get(this.url + `?current=${booking.current}`, {headers: headers})
  }

}
