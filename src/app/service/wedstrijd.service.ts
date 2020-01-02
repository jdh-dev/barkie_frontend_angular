import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.get<any>(this.url);
  }

  /**
   * This method returns the wedstrijd object based on id
   */
  getWedstrijdById(id : number) : Observable<any> {
    return this.http.get<any>(this.url + "/" + id);
  }

}
