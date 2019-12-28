import { Component, OnInit } from '@angular/core';
import { LoginFormData } from './LoginFormData';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData = new LoginFormData('', '');

  headers : any;

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    this.loginService.login(loginForm.value.username, loginForm.value.password)
      .subscribe((resp : HttpResponse<any>) => {
        console.log(resp.headers.getAll('Authorization'));
        console.log(resp);
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
        console.log(this.headers);
        localStorage.setItem("Authorization", resp.headers.get("Authorization"));
      });
  }

}
