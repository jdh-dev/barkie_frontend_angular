import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  private url = 'http://localhost:8082/gebruiker';

  constructor(private http : HttpClient) { }

  /**
   * This method returns the Gebruiker object based on id
   */
  getGebruikerInfo() : Observable<any> {
    return this.http.get<any>(this.url + "/fromLoggedInUser");
  }

}
