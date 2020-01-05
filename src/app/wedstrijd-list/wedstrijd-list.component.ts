import { Component, OnInit } from '@angular/core';
import { WedstrijdService } from '../service/wedstrijd.service';
import { HttpResponse } from '@angular/common/http';
import { Wedstrijd } from '../wedstrijd/wedstrijd';
import { Competitie } from '../competitie/competitie';
import { Team } from '../team/team';

@Component({
  selector: 'app-wedstrijd-list',
  templateUrl: './wedstrijd-list.component.html',
  styleUrls: ['./wedstrijd-list.component.css']
})
export class WedstrijdListComponent implements OnInit {

  private wedstrijden : Wedstrijd[] =new Array();

  constructor(private wedstrijdService : WedstrijdService) { }

  private apiAlreadyCalled : boolean = false;

  getWedstrijden() {
    this.wedstrijdService.getWedstrijden()
      .subscribe(data => {
        this.wedstrijden = data;
      });
  }

  getWedstrijdenFromApi() {
    this.apiAlreadyCalled = true;
    this.wedstrijdService.getChampionsLeagueWedstrijdenFromApi()
      .subscribe((resp : HttpResponse<any>) => {
        if (resp.status == 200) {
          let apiData = resp.body.api.fixtures;

          for (let i = 0; i < apiData.length; i++) {
            console.log(apiData[i]);
            // Competitie
            let competitie = new Competitie();
            competitie.id = apiData[i].league_id;
            competitie.naam = apiData[i].league.name;
            
            // Thuis team
            let thuisTeam = new Team();
            thuisTeam.id = apiData[i].homeTeam.team_id;
            thuisTeam.naam = apiData[i].homeTeam.team_name;

            // Uit team
            let uitTeam = new Team();
            uitTeam.id = apiData[i].awayTeam.team_id;
            uitTeam.naam = apiData[i].awayTeam.team_name;

            // Wedstrijd
            let wedstrijd = new Wedstrijd();
            wedstrijd.competitie = competitie;
            wedstrijd.id = apiData[i].fixture_id;
            wedstrijd.beginTijd = apiData[i].event_date;
            wedstrijd.thuisTeam = thuisTeam;
            wedstrijd.uitTeam = uitTeam;
            
            this.wedstrijden.push(wedstrijd);
          }
        }
      }, 
      complete => {
        
      });
  }

  ngOnInit() {
    if (this.apiAlreadyCalled) {
      console.log("CALLED FROM BARKIE DB");
      this.getWedstrijden();
    } else {
      console.log("CALLED FROM API");
      this.getWedstrijdenFromApi();
    }
    
  }

}