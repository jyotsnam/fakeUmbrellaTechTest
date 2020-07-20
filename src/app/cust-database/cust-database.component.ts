import { Component, OnInit, Directive, AfterViewInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WeatherDataService } from '../service/weather-data.service';
import { CurrentRouteService } from 'src/app/service/current-route.service';

@Component({
  selector: 'app-cust-database',
  templateUrl: './cust-database.component.html',
  styleUrls: ['./cust-database.component.scss']
})
export class CustDatabaseComponent implements OnInit {
  custForm;
  currentRoute = 'app-cust-database';
  showAddForm: boolean = false;
  clonedCusts = [];
  custData = [];

  constructor(private weatherDataService: WeatherDataService, private currentRouteService: CurrentRouteService) { }

  ngOnInit(): void {
    this.currentRouteService.setCurrentRoute(this.currentRoute);
    this.custData =  this.weatherDataService.getCustomerData();
    this.custForm = new FormGroup({
      name: new FormControl('', Validators.required),
      contactPerson: new FormControl('', Validators.required),
      phone: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]{10}$")]),
      location: new FormControl('', [Validators.required]),
      numOfEmployees: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
    });
  }

  onSubmit() {
    this.showAddForm = false;
    console.log(this.custForm);
    this.custData[this.custData.length] =
      {
        id: this.custData.length,
        name: this.custForm.value.name,
        contactPerson: this.custForm.value.contactPerson,
        phone: this.custForm.value.phone,
        location: this.custForm.value.location,
        numOfEmployees: this.custForm.value.numOfEmployees
      }
  }

  showForm() {
    this.custForm.reset();
    this.showAddForm = true;
  }

  onRowEditInit(cust) {
    this.clonedCusts[cust.id] = { ...cust };
  }

  onRowEditSave(cust) {
    delete this.clonedCusts[cust.id];
    this.weatherDataService.setCustomerData(this.custData);
  }

  onRowEditCancel(cust, index) {
    this.custData[index] = this.clonedCusts[cust.id];
    delete this.clonedCusts[cust.id];
  }

  onRowDelete(cust) {
    let index = this.custData.indexOf(cust);
    this.custData = this.custData.filter((val, i) => i != index);
    this.weatherDataService.setCustomerData(this.custData);
  }

}
