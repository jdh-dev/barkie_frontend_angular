import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CredentialsFormData } from '../login/CredentialsFormData';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  formData = new CredentialsFormData('', '');

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(registerForm: NgForm) {
    this.authenticationService.register(registerForm.value.username, registerForm.value.password)
      .subscribe((resp : HttpResponse<any>) => {
        if (resp.status == 200) {
          alert("U bent succesvol geregistreerd!");
          this.router.navigate(['login'])
        }
      },
        error => {
          
        });
  }

}
