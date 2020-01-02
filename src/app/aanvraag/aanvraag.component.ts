import { Component, OnInit } from '@angular/core';
import { AanvraagService } from '../service/aanvraag.service';
import { NgForm } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { Aanvraag } from './aanvraag';


export class AanvraagFormData {

  constructor(public bedrag: number) {
    
  }
}

@Component({
  selector: 'app-aanvraag',
  templateUrl: './aanvraag.component.html',
  styleUrls: ['./aanvraag.component.css']
})

export class AanvraagComponent implements OnInit {

  constructor(private aanvraagService : AanvraagService) { }

  formData = new AanvraagFormData(0);

  ngOnInit() {
  }

  onSubmit(aanvraagForm: NgForm) {
    let aanvraag = new Aanvraag();
    aanvraag.bedrag = aanvraagForm.value.bedrag;
    this.aanvraagService.addAanvraag(aanvraag)
      .subscribe((resp : HttpResponse<any>) => {
        if (resp.status == 200) {
          alert("U heeft " + aanvraagForm.value.bedrag + " aangevraagd");
        }
      },
        error => {
          
        });
  }

}
