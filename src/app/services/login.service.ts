import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private _router: Router
    ) { }

  url = "https://dev.tuten.cl/TutenREST/rest/user/";
  
  public login(user){
    let headers = new HttpHeaders({'Accept':'application/json','App':'APP_BCK', 'Password': user.pass}); 
    
    const promise = this.http.put(this.url + user.email, {}, {headers: headers}).toPromise();
      return promise
      .then((data)=>{
        localStorage.setItem('data', JSON.stringify(data));
        this._router.navigate(['/bookings'])
      }).catch((error)=>{
        console.log(error);
      });
  }

}
