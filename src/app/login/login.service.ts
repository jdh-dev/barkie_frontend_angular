import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:8082/login';

  constructor(private http : HttpClient) { }

  login(username: string, password: string) : Observable<HttpResponse<any>> {
    const httpOptions = {
      observe: 'response' as 'response',

      params: new HttpParams()
      .set('username', username)
      .set('password', password)
    };

    return this.http.post<HttpResponse<any>>(this.url, null, httpOptions);
  }

}