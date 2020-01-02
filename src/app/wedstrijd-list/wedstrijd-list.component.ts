import { Component, OnInit } from '@angular/core';
import { WedstrijdService } from '../service/wedstrijd.service';

@Component({
  selector: 'app-wedstrijd-list',
  templateUrl: './wedstrijd-list.component.html',
  styleUrls: ['./wedstrijd-list.component.css']
})
export class WedstrijdListComponent implements OnInit {

  private wedstrijden : any

  constructor(private wedstrijdService : WedstrijdService) { }

  getWedstrijden() {
    this.wedstrijdService.getWedstrijden()
      .subscribe(data => {
        this.wedstrijden = data;
      });
  }

  ngOnInit() {
    this.getWedstrijden();
  }

}