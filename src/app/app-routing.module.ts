import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustDatabaseComponent } from './cust-database/cust-database.component';
import { RainScheduleComponent } from './rain-schedule/rain-schedule.component';
import { AnalyticsComponent } from './analytics/analytics.component';


const routes: Routes = [
  { path: 'app-cust-database', component: CustDatabaseComponent },
  { path: 'app-rain-schedule', component: RainScheduleComponent },
  { path: 'app-analytics', component: AnalyticsComponent },
  { path: '**', component: CustDatabaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
