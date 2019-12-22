import { Injectable } from '@angular/core';
import { Wedstrijd } from './wedstrijd';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WedstrijdService {

  private url = 'http://localhost:8082/wedstrijden';

  constructor(private http : HttpClient) { }

  /**
   * This method returns a list of Wedstrijd objects
   */
  getWedstrijden() : Observable<any> {
    return this.http
      .get<Wedstrijd>(this.url);
    // let xhr = new XMLHttpRequest();
    // let wedstrijden : Wedstrijd[];
    //   xhr.onreadystatechange = function() { 
    //       if (this.readyState == 4) {
    //           wedstrijden = JSON.parse(this.responseText);
    //           console.log(wedstrijden);
    //       }
    //   }
    //   xhr.open("GET", "http://localhost:8082/wedstrijden", true);
    //   xhr.send();
    //   return of(wedstrijden);
  }

}
