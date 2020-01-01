import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpResponse, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { Gebruiker } from '../gebruiker/gebruiker';

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = 'http://localhost:8082/login';
  private gebruiker : Gebruiker;

  constructor(private http : HttpClient) { }

  authenticate(username: string, password: string) : Observable<HttpResponse<any>> {
    const httpOptions = {
      observe: 'response' as 'response',

      params: new HttpParams()
      .set('username', username)
      .set('password', password)
    };

    return this.http.post<HttpResponse<any>>(this.url, null, httpOptions);
  }

  isUserAdmin() : boolean {
    let token = sessionStorage.getItem('Authorization')
    let decoded = jwt_decode(token);
    return decoded.rol.includes("ROLE_ADMIN");
  }

  isUserLoggedIn() : boolean {
    let token = sessionStorage.getItem('Authorization')
    return !(token === null);
  }

  logOut() {
    sessionStorage.removeItem('Authorization')
  }

}
