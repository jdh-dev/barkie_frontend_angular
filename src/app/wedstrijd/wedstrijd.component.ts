import { Component, OnInit } from '@angular/core';
import { WedstrijdService } from '../service/wedstrijd.service';
import { Wedstrijd } from './wedstrijd';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wedstrijd',
  templateUrl: './wedstrijd.component.html',
  styleUrls: ['./wedstrijd.component.css']
})
export class WedstrijdComponent implements OnInit {

  private wedstrijd : Observable<Wedstrijd>;

  constructor(private wedstrijdService : WedstrijdService, private route: ActivatedRoute) { }

  ngOnInit() {
    // get the id parameter from the url
    let id = this.route.snapshot.paramMap.get('id');

    this.wedstrijdService.getWedstrijdById(Number(id))
      .subscribe(data => {
        this.wedstrijd = data;
      });
  }

}
