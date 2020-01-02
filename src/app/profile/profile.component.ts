import { Component, OnInit } from '@angular/core';
import { Aanvraag } from '../aanvraag/aanvraag';
import { AanvraagService } from '../service/aanvraag.service';
import { GebruikerService } from '../service/gebruiker.service';

import { NgForm } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { Gebruiker } from '../gebruiker/gebruiker';
import { AuthenticationService } from '../auth/authentication.service';

export class AanvraagFormData {
  constructor(public bedrag: number) {}
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService : AuthenticationService, private aanvraagService : AanvraagService, private gebruikerService : GebruikerService) { }

  formData = new AanvraagFormData(0);

  aanvragen : Aanvraag[];

  gebruiker = new Gebruiker();

  ngOnInit() {
    this.gebruikerService.getGebruikerInfo()
      .subscribe(data => {
        console.log(data);
        this.gebruiker = data;
      });

    this.aanvraagService.getAllAanvragenOfUser()
      .subscribe(data => {
        console.log(data);
        this.aanvragen = data;
      });
  }

  onSubmitAanvraag(aanvraagForm: NgForm) {
    let aanvraag = new Aanvraag();
    aanvraag.bedrag = aanvraagForm.value.bedrag;
    this.aanvraagService.addAanvraag(aanvraag)
      .subscribe((resp : HttpResponse<any>) => {
        if (resp.status == 200) {
          alert("U heeft " + aanvraagForm.value.bedrag + " aangevraagd");
          location.reload();
        }
      },
        error => {
          
        });
  }


}
