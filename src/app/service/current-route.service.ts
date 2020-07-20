import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentRouteService {
  currentRoute = 'app-cust-database';

  constructor() { }

  setCurrentRoute(routeStr) {
    this.currentRoute = routeStr;
  }

  getCurrentRoute() {
    return this.currentRoute;
  }
}
