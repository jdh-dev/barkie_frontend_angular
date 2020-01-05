import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { RapidApiAuth } from '../auth/rapid-api-auth';

@Injectable({
  providedIn: 'root'
})
export class WedstrijdService {

  private backendUrl = 'http://localhost:8082/wedstrijd';
  private rapidApiUrl = 'https://api-football-v1.p.rapidapi.com/v2/';
  private apiKey = new RapidApiAuth();

  constructor(private http : HttpClient) { }

  /**
   * This method returns a list of Wedstrijd objects
   */
  getWedstrijden() : Observable<any> {
    return this.http.get<any>(this.backendUrl + "/");
  }

  /**
   * This method returns the wedstrijd object based on id
   */
  getWedstrijdById(id : number) : Observable<any> {
    return this.http.get<any>(this.backendUrl + "/" + id);
  }


  getChampionsLeagueWedstrijdenFromApi() : Observable<any> {
    const httpOptions = {
      observe: 'response' as 'response',

      headers : new HttpHeaders({
        'x-rapidapi-key':  this.apiKey.apiKey
      })
    };

    return this.http.get<any>(this.rapidApiUrl + "/fixtures/league/530/2019-12-11", httpOptions);
  }



}
