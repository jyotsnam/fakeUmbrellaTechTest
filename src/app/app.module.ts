import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustDatabaseComponent } from './cust-database/cust-database.component';
import { RainScheduleComponent } from './rain-schedule/rain-schedule.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    CustDatabaseComponent,
    RainScheduleComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
