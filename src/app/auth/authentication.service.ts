import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { Gebruiker } from '../gebruiker/gebruiker';
import { GebruikerService } from '../service/gebruiker.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = 'http://localhost:8082/login';

  constructor(private http : HttpClient, private gebruikerService : GebruikerService) { }

  gebruiker = new Gebruiker();

  authenticate(username: string, password: string) : Observable<HttpResponse<any>> {
    const httpOptions = {
      observe: 'response' as 'response',

      params: new HttpParams()
      .set('username', username)
      .set('password', password)
    };

    return this.http.post<HttpResponse<any>>(this.url, null, httpOptions);
  }

  register(username: string, password: string) : Observable<HttpResponse<any>> {
    const httpOptions = {
      observe: 'response' as 'response'
    };

    return this.http.post<HttpResponse<any>>("http://localhost:8082/gebruiker/create", {username : username, password : password}, httpOptions);
  }

  isUserAdmin() : boolean {
    let token = sessionStorage.getItem('Authorization');
    let decoded = jwt_decode(token);
    return decoded.rol.includes("ROLE_ADMIN");
  }

  isUserLoggedIn() : boolean {
    let token = sessionStorage.getItem('Authorization');
    return !(token === null);
  }

  logOut() {
    sessionStorage.removeItem('Authorization');
  }

}
