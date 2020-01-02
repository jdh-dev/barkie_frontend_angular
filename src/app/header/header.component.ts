import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  showBigHeader : boolean = true;
  showHeader : boolean = true;
  // showMatchDetail : boolean = true;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private authService: AuthenticationService
    ) {}

  ngOnInit() {
    let pattern = new RegExp('.{1,}\/[0-9]{1,}$');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showBigHeader = event.url !== '/' ? false : true;
        this.showHeader = (event.url === '/login' || event.url === '/register') ? false : true;
        // this.showMatchDetail = event.url !== ('/wedstrijd/' + pattern)  ? false : true;

        // console.log(event.url !== ('/wedstrijd' + pattern));
        // console.log(this.showMatchDetail);
      }
    });
  }

}
