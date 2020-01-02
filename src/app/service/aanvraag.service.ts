import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpResponse, HttpClient } from '@angular/common/http';
import { Aanvraag } from '../aanvraag/aanvraag';

@Injectable({
  providedIn: 'root'
})
export class AanvraagService {

  private url = 'http://localhost:8082/aanvraag';

  constructor(private http : HttpClient) { }

  addAanvraag(aanvraag: Aanvraag) : Observable<HttpResponse<any>> {
    const httpOptions = {
      observe: 'response' as 'response'
  };

    return this.http.post<HttpResponse<any>>((this.url + "/"), aanvraag, httpOptions);
  }
  
}
