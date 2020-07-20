import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/service/weather-data.service';
import { CurrentRouteService } from 'src/app/service/current-route.service';

@Component({
  selector: 'app-rain-schedule',
  templateUrl: './rain-schedule.component.html',
  styleUrls: ['./rain-schedule.component.scss']
})
export class RainScheduleComponent implements OnInit {
  custData = [];
  displayData = [];
  cityWithRain = [];
  rainyCityChartData=[];
  rainDate = {};
  currentRoute = 'app-rain-schedule';

  constructor(private weatherDataService: WeatherDataService, private currentRouteService: CurrentRouteService) { }

  ngOnInit(): void {
    this.currentRouteService.setCurrentRoute(this.currentRoute);
    this.custData =  this.weatherDataService.getCustomerData();
    let custCityNames = this.custData.map((obj) => {
      return obj.location;
    });
    let uniqueSet = new Set(custCityNames);
    let uniqueCityNames = [...uniqueSet];
    this.weatherDataService.getWeatherDataByCity(uniqueCityNames).subscribe((res) => {
      this.displayData = this.weatherDataService.getRainyCityTableData(res, uniqueCityNames, this.custData);
    //   let currentDate = new Date(Date.now());
    //   let cureentFormatDate = currentDate.toLocaleDateString('en-CA');
    //   let currentDatePlusFive = new Date();
    //   currentDatePlusFive.setDate(currentDatePlusFive.getDate() + 5);
    //   let currentDatePlusFiveFormat = currentDatePlusFive.toLocaleDateString('en-CA');
    //   for (let counterCity = 0; counterCity <= res.length - 1; counterCity++) {
    //     let cityDetail = res[counterCity];
    //     let cityWeatherDetail = cityDetail.list
    //     for (let counterCityWeatherDetail = 0; counterCityWeatherDetail <= cityWeatherDetail.length - 1; counterCityWeatherDetail++) {
    //       let dateFromApi = cityWeatherDetail[counterCityWeatherDetail].dt_txt.split(' ')[0];
    //       if (Date.parse(dateFromApi) <= Date.parse(currentDatePlusFiveFormat) && Date.parse(dateFromApi) >= Date.parse(cureentFormatDate)) {
    //         if (cityWeatherDetail[counterCityWeatherDetail].weather[0].main == 'Rain') {
    //           if(this.rainDate[cityDetail.city.name]) {
    //             this.rainDate[cityDetail.city.name].push(dateFromApi);
    //           } else {
    //             this.rainDate[cityDetail.city.name] = [dateFromApi];
    //           }
              
    //           this.cityWithRain.push(cityDetail);
    //         }
    //       }
    //     }
    //   }
      
    //   let rainyCityNames = this.cityWithRain.map((obj) => {
    //     return obj.city.name;
    //   });

    //   rainyCityNames = [...(new Set(rainyCityNames))]

    //   let intersectionCities = rainyCityNames.filter(e => this.uniqueCityNames.indexOf(e) !== -1);

    //   this.displayData = this.custData.filter((obj) => {
    //     if(intersectionCities.includes(obj.location)) {
    //       if(this.rainDate[obj.location]) {
    //         this.rainDate[obj.location] = [...(new Set(this.rainDate[obj.location]))];
    //         obj['dates'] = this.rainDate[obj.location];
    //         return obj;
    //       }
    //     }
    //   });

    // });

    });
  }

}
