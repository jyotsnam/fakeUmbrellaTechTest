import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import { CurrentRouteService } from 'src/app/service/current-route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fakeUmbrella-app';
  currentRotue = 'app-cust-database';

  constructor(public router: Router, private currentRouteService: CurrentRouteService, private location: Location) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd ) {
        if (event.url == '/') {
          this.location.replaceState('/app-cust-database');
          this.currentRotue = 'app-cust-database';
        } else {
          this.currentRotue = event.url.slice(1);    
        }     
      }
  });
   }

  ngOnInit() {
    this.currentRotue = this.currentRouteService.getCurrentRoute();
  }

  setCurrentRoute(routeStr: string) {
    this.currentRotue = routeStr;
  }

}
