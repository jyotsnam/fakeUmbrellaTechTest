import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  url = 'data/2.5/forecast?q=';
  //urlEnd = '&appid=b124e62b5d798387f996d6cbdad467cd';
  urlEnd = '&appid=107a6c58dda97cfd410e280832acd568';
  rainDate = {};
  custData = [
    {
      id: 0,
      name: 'test1',
      contactPerson: 'test1',
      phone: '6472141234',
      location: 'Greensboro',
      numOfEmployees: '10'
    },
    {
      id: 1,
      name: 'test2',
      contactPerson: 'test2',
      phone: '6472141234',
      location: 'Virginia',
      numOfEmployees: '100'
    },
    {
      id: 2,
      name: 'test3',
      contactPerson: 'test3',
      phone: '6472141234',
      location: 'Philadelphia',
      numOfEmployees: '70'
    },
    {
      id: 3,
      name: 'test4',
      contactPerson: 'test4',
      phone: '6472141234',
      location: 'Toronto',
      numOfEmployees: '5'
    },
    {
      id: 4,
      name: 'test5',
      contactPerson: 'test5',
      phone: '6472141234',
      location: 'New York',
      numOfEmployees: '120'
    },
    {
      id: 5,
      name: 'test6',
      contactPerson: 'test6',
      phone: '6472141234',
      location: 'Tokyo',
      numOfEmployees: '15'
    },
    {
      id: 6,
      name: 'test7',
      contactPerson: 'test7',
      phone: '6472141234',
      location: 'San Jose',
      numOfEmployees: '250'
    },
    {
      id: 7,
      name: 'test8',
      contactPerson: 'test8',
      phone: '6472141234',
      location: 'Michigan',
      numOfEmployees: '25'
    },
    {
      id: 8,
      name: 'test9',
      contactPerson: 'test9',
      phone: '6472141234',
      location: 'Las Vegas',
      numOfEmployees: '110'
    }
  ]
  
  constructor(private http: HttpClient) { }

  getCustomerData() {
    return this.custData;
  }

  setCustomerData(data) {
    this.custData = data;
  }

  public getWeatherDataByCity(cityNames): Observable<any[]> {
    let apiArray = [];
    for(let i=0; i < cityNames.length; i++) {
      apiArray.push(this.http.get('https://api.openweathermap.org/'+this.url+cityNames[i]+this.urlEnd));
    }
    return forkJoin(apiArray);
  }

  public getRainyCityData(res) {
    let cityWithRain = [];
    let currentDate = new Date(Date.now());
      let cureentFormatDate = currentDate.toLocaleDateString('en-CA');
      let currentDatePlusFive = new Date();
      currentDatePlusFive.setDate(currentDatePlusFive.getDate() + 5);
      let currentDatePlusFiveFormat = currentDatePlusFive.toLocaleDateString('en-CA');
      for (let counterCity = 0; counterCity <= res.length - 1; counterCity++) {
        let cityDetail = res[counterCity];
        let cityWeatherDetail = cityDetail.list
        for (let counterCityWeatherDetail = 0; counterCityWeatherDetail <= cityWeatherDetail.length - 1; counterCityWeatherDetail++) {
          let dateFromApi = cityWeatherDetail[counterCityWeatherDetail].dt_txt.split(' ')[0];
          if (Date.parse(dateFromApi) <= Date.parse(currentDatePlusFiveFormat) && Date.parse(dateFromApi) >= Date.parse(cureentFormatDate)) {
            if (cityWeatherDetail[counterCityWeatherDetail].weather[0].main == 'Rain') {
              if(this.rainDate[cityDetail.city.name]) {
                this.rainDate[cityDetail.city.name].push(dateFromApi);
              } else {
                this.rainDate[cityDetail.city.name] = [dateFromApi];
              }
              
              cityWithRain.push(cityDetail);
            }
          }
        }
      }
      return cityWithRain;
  }
  
  public getRainyCityTableData(res, uniqueCityNames, custData) {
      let displayData2 = [];
      let cityWithRain = this.getRainyCityData(res);

      let rainyCityNames = cityWithRain.map((obj) => {
        return obj.city.name;
      });

      rainyCityNames = [...(new Set(rainyCityNames))]

      let intersectionCities = rainyCityNames.filter(e => uniqueCityNames.indexOf(e) !== -1);

      displayData2 = custData.filter((obj) => {
        if(intersectionCities.includes(obj.location)) {
          if(this.rainDate[obj.location]) {
            this.rainDate[obj.location] = [...(new Set(this.rainDate[obj.location]))];
            obj['dates'] = this.rainDate[obj.location];
            return obj;
          }
        }
      });

      return displayData2;
  }

  getRainyCityChartData(res, custData) {
    let displayData = [];
    let cityWithRain = this.getRainyCityData(res);

    let rainyCityNames = cityWithRain.map((obj) => {
      return obj.city.name;
    });

    rainyCityNames = [...(new Set(rainyCityNames))]

    displayData = custData.filter((obj) => {
      if(rainyCityNames.includes(obj.location)) {
        if(this.rainDate[obj.location]) {
          this.rainDate[obj.location] = [...(new Set(this.rainDate[obj.location]))];
          obj['dates'] = this.rainDate[obj.location];
        }
      }
      return obj;
    });

    return displayData;
  }
}
