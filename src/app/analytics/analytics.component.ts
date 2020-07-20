import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../service/weather-data.service';
import * as Highcharts from 'highcharts';
import { CurrentRouteService } from 'src/app/service/current-route.service';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit { 
  displayData = [];
  options = {};
  custData;
  custCityNames;
  uniqueCityNames;
  serviceError = false;
  currentRoute = 'app-analytics';

  constructor(private weatherDataService: WeatherDataService, private currentRouteService: CurrentRouteService) { }

  compare( a, b ) {
    if ( Number(a.numOfEmployees) > Number(b.numOfEmployees) ){
      return -1;
    }
    if ( Number(a.numOfEmployees) < Number(b.numOfEmployees) ){
      return 1;
    }
    return 0;
  }
  

  ngOnInit(): void {    
    this.currentRouteService.setCurrentRoute(this.currentRoute); 
    this.custData =  this.weatherDataService.getCustomerData();
    this.custData.sort( this.compare );
    this.custData = this.custData.slice(0, 4)
    this.custCityNames = this.custData.map((obj) => {
      return obj.location;
    });
    let uniqueSet = new Set(this.custCityNames);
    this.uniqueCityNames = [...this.custCityNames];
    this.weatherDataService.getWeatherDataByCity(this.uniqueCityNames).subscribe((res) => {
      this.displayData = this.weatherDataService.getRainyCityChartData(res, this.custData);
      this.options = {
        chart: {
          type: 'column',
          height: 350,
          dataSorting: {
            enabled: true
          },
        },
        lang: {
          noData: 'No data available'
        },
        legend: { symbolHeight: '0px' },
        title: {
          text: ''
        },
        xAxis: {
           categories: this.displayData.map((obj) => { return obj.name})
        },
        yAxis : {
          title : {
            text: 'Number of Employees'
          }
        },
        series:[ {
          name: 'Customers',
          data: this.displayData.map((obj) => { 
            let temp =  { y: Number(obj.numOfEmployees), color: ((obj.dates) ? 'green' : 'red') }; 
            return temp;
          })
        }]
      }
      Highcharts.chart('container', this.options);
    }, error => {
      this.serviceError = true;
    });
  }

}
