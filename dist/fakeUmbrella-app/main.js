(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/analytics/analytics.component.ts":
/*!**************************************************!*\
  !*** ./src/app/analytics/analytics.component.ts ***!
  \**************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_weather_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/weather-data.service */ "./src/app/service/weather-data.service.ts");
/* harmony import */ var src_app_service_current_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/current-route.service */ "./src/app/service/current-route.service.ts");





let Boost = __webpack_require__(/*! highcharts/modules/boost */ "./node_modules/highcharts/modules/boost.js");
let noData = __webpack_require__(/*! highcharts/modules/no-data-to-display */ "./node_modules/highcharts/modules/no-data-to-display.js");
let More = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
Boost(highcharts__WEBPACK_IMPORTED_MODULE_1__);
noData(highcharts__WEBPACK_IMPORTED_MODULE_1__);
More(highcharts__WEBPACK_IMPORTED_MODULE_1__);
noData(highcharts__WEBPACK_IMPORTED_MODULE_1__);
class AnalyticsComponent {
    constructor(weatherDataService, currentRouteService) {
        this.weatherDataService = weatherDataService;
        this.currentRouteService = currentRouteService;
        this.displayData = [];
        this.options = {};
        this.currentRoute = 'app-analytics';
    }
    compare(a, b) {
        if (Number(a.numOfEmployees) > Number(b.numOfEmployees)) {
            return -1;
        }
        if (Number(a.numOfEmployees) < Number(b.numOfEmployees)) {
            return 1;
        }
        return 0;
    }
    ngOnInit() {
        this.currentRouteService.setCurrentRoute(this.currentRoute);
        this.custData = this.weatherDataService.getCustomerData();
        this.custData.sort(this.compare);
        this.custData = this.custData.slice(0, 4);
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
                legend: { symbolHeight: '0px' },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: this.displayData.map((obj) => { return obj.name; })
                },
                yAxis: {
                    title: {
                        text: 'Number of Employees'
                    }
                },
                series: [{
                        name: 'Customers',
                        data: this.displayData.map((obj) => {
                            let temp = { y: Number(obj.numOfEmployees), color: ((obj.dates) ? 'green' : 'red') };
                            return temp;
                        })
                    }]
            };
            highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('container', this.options);
        });
    }
}
AnalyticsComponent.ɵfac = function AnalyticsComponent_Factory(t) { return new (t || AnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_weather_data_service__WEBPACK_IMPORTED_MODULE_2__["WeatherDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_current_route_service__WEBPACK_IMPORTED_MODULE_3__["CurrentRouteService"])); };
AnalyticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalyticsComponent, selectors: [["app-analytics"]], decls: 4, vars: 0, consts: [[1, "chart-container"], ["id", "container"]], template: function AnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Top Emloyees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".chart-container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 20px auto;\n}\n.chart-container[_ngcontent-%COMP%]   #container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.chart-container[_ngcontent-%COMP%]   #container[_ngcontent-%COMP%]   .highcharts-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.chart-container[_ngcontent-%COMP%]   #container[_ngcontent-%COMP%]   .highcharts-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hbHl0aWNzL2FuYWx5dGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQUk7RUFDSSxnQkFBQTtBQUVSO0FBRFE7RUFDSSxXQUFBO0FBR1o7QUFGWTtFQUNJLFdBQUE7QUFJaEIiLCJmaWxlIjoic3JjL2FwcC9hbmFseXRpY3MvYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAjY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIC5oaWdoY2hhcnRzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analytics',
                templateUrl: './analytics.component.html',
                styleUrls: ['./analytics.component.scss']
            }]
    }], function () { return [{ type: _service_weather_data_service__WEBPACK_IMPORTED_MODULE_2__["WeatherDataService"] }, { type: src_app_service_current_route_service__WEBPACK_IMPORTED_MODULE_3__["CurrentRouteService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cust_database_cust_database_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cust-database/cust-database.component */ "./src/app/cust-database/cust-database.component.ts");
/* harmony import */ var _rain_schedule_rain_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rain-schedule/rain-schedule.component */ "./src/app/rain-schedule/rain-schedule.component.ts");
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./analytics/analytics.component */ "./src/app/analytics/analytics.component.ts");







const routes = [
    { path: 'app-cust-database', component: _cust_database_cust_database_component__WEBPACK_IMPORTED_MODULE_2__["CustDatabaseComponent"] },
    { path: 'app-rain-schedule', component: _rain_schedule_rain_schedule_component__WEBPACK_IMPORTED_MODULE_3__["RainScheduleComponent"] },
    { path: 'app-analytics', component: _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_4__["AnalyticsComponent"] },
    { path: '**', component: _cust_database_cust_database_component__WEBPACK_IMPORTED_MODULE_2__["CustDatabaseComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_current_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/current-route.service */ "./src/app/service/current-route.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0, a1) { return { "active": a0, "inactive": a1 }; };
class AppComponent {
    constructor(router, currentRouteService, location) {
        this.router = router;
        this.currentRouteService = currentRouteService;
        this.location = location;
        this.title = 'fakeUmbrella-app';
        this.currentRotue = 'app-cust-database';
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.url == '/') {
                    this.location.replaceState('/app-cust-database');
                    this.currentRotue = 'app-cust-database';
                }
                else {
                    this.currentRotue = event.url.slice(1);
                }
            }
        });
    }
    ngOnInit() {
        this.currentRotue = this.currentRouteService.getCurrentRoute();
    }
    setCurrentRoute(routeStr) {
        this.currentRotue = routeStr;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_current_route_service__WEBPACK_IMPORTED_MODULE_2__["CurrentRouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 12, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary"], [1, "navbar-nav"], [1, "nav-item", 3, "ngClass"], ["href", "#", "routerLink", "app-cust-database", 1, "nav-link", 3, "click"], ["href", "#", "routerLink", "app-rain-schedule", 1, "nav-link", 3, "click"], ["href", "#", "routerLink", "app-analytics", 1, "nav-link", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_3_listener() { return ctx.setCurrentRoute("app-cust-database"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Customer Database");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_6_listener() { return ctx.setCurrentRoute("app-rain-schedule"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Rain Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_9_listener() { return ctx.setCurrentRoute("app-analytics"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.currentRotue === "app-cust-database", ctx.currentRotue !== "app-cust-database"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx.currentRotue === "app-rain-schedule", ctx.currentRotue !== "app-rain-schedule"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx.currentRotue === "app-analytics", ctx.currentRotue !== "app-analytics"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".inactive[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 300;\n}\n.inactive[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:hover {\n  font-weight: 500;\n  color: rgba(59, 56, 56, 0.5);\n}\n.active[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUFFUjtBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5hY3RpdmUgPiAubmF2LWxpbmsgIHtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogcmdiYSg1OSwgNTYsIDU2LCAwLjUpOztcclxuICAgICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_service_current_route_service__WEBPACK_IMPORTED_MODULE_2__["CurrentRouteService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cust_database_cust_database_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cust-database/cust-database.component */ "./src/app/cust-database/cust-database.component.ts");
/* harmony import */ var _rain_schedule_rain_schedule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rain-schedule/rain-schedule.component */ "./src/app/rain-schedule/rain-schedule.component.ts");
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./analytics/analytics.component */ "./src/app/analytics/analytics.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _cust_database_cust_database_component__WEBPACK_IMPORTED_MODULE_6__["CustDatabaseComponent"],
        _rain_schedule_rain_schedule_component__WEBPACK_IMPORTED_MODULE_7__["RainScheduleComponent"],
        _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__["AnalyticsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _cust_database_cust_database_component__WEBPACK_IMPORTED_MODULE_6__["CustDatabaseComponent"],
                    _rain_schedule_rain_schedule_component__WEBPACK_IMPORTED_MODULE_7__["RainScheduleComponent"],
                    _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__["AnalyticsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cust-database/cust-database.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cust-database/cust-database.component.ts ***!
  \**********************************************************/
/*! exports provided: CustDatabaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustDatabaseComponent", function() { return CustDatabaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _service_weather_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/weather-data.service */ "./src/app/service/weather-data.service.ts");
/* harmony import */ var src_app_service_current_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/current-route.service */ "./src/app/service/current-route.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function CustDatabaseComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Number of Employees");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustDatabaseComponent_ng_template_5_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustDatabaseComponent_ng_template_5_ng_template_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return rowData_r3.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", rowData_r3.name);
} }
function CustDatabaseComponent_ng_template_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r3.name, " ");
} }
function CustDatabaseComponent_ng_template_5_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustDatabaseComponent_ng_template_5_ng_template_7_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return rowData_r3.contactPerson = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", rowData_r3.contactPerson);
} }
function CustDatabaseComponent_ng_template_5_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r3.contactPerson, " ");
} }
function CustDatabaseComponent_ng_template_5_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustDatabaseComponent_ng_template_5_ng_template_11_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return rowData_r3.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", rowData_r3.phone);
} }
function CustDatabaseComponent_ng_template_5_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r3.phone, " ");
} }
function CustDatabaseComponent_ng_template_5_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustDatabaseComponent_ng_template_5_ng_template_15_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return rowData_r3.location = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", rowData_r3.location);
} }
function CustDatabaseComponent_ng_template_5_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r3.location, " ");
} }
function CustDatabaseComponent_ng_template_5_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustDatabaseComponent_ng_template_5_ng_template_19_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return rowData_r3.numOfEmployees = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", rowData_r3.numOfEmployees);
} }
function CustDatabaseComponent_ng_template_5_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r3.numOfEmployees, " ");
} }
function CustDatabaseComponent_ng_template_5_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustDatabaseComponent_ng_template_5_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.onRowEditInit(rowData_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustDatabaseComponent_ng_template_5_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustDatabaseComponent_ng_template_5_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const rowData_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.onRowEditSave(rowData_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustDatabaseComponent_ng_template_5_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustDatabaseComponent_ng_template_5_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const rowData_r3 = ctx_r51.$implicit; const ri_r5 = ctx_r51.rowIndex; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.onRowEditCancel(rowData_r3, ri_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustDatabaseComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustDatabaseComponent_ng_template_5_ng_template_3_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustDatabaseComponent_ng_template_5_ng_template_4_Template, 1, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustDatabaseComponent_ng_template_5_ng_template_7_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustDatabaseComponent_ng_template_5_ng_template_8_Template, 1, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustDatabaseComponent_ng_template_5_ng_template_11_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CustDatabaseComponent_ng_template_5_ng_template_12_Template, 1, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CustDatabaseComponent_ng_template_5_ng_template_15_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CustDatabaseComponent_ng_template_5_ng_template_16_Template, 1, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CustDatabaseComponent_ng_template_5_ng_template_19_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CustDatabaseComponent_ng_template_5_ng_template_20_Template, 1, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CustDatabaseComponent_ng_template_5_button_22_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CustDatabaseComponent_ng_template_5_button_23_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CustDatabaseComponent_ng_template_5_button_24_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustDatabaseComponent_ng_template_5_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const rowData_r3 = ctx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.onRowDelete(rowData_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r3 = ctx.$implicit;
    const editing_r4 = ctx.editing;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pEditableRow", rowData_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !editing_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", editing_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", editing_r4);
} }
function CustDatabaseComponent_div_8_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustDatabaseComponent_div_8_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Name of contact person is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustDatabaseComponent_div_8_div_18_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustDatabaseComponent_div_8_div_18_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid phone number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustDatabaseComponent_div_8_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustDatabaseComponent_div_8_div_18_small_1_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustDatabaseComponent_div_8_div_18_small_2_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.custForm.controls.phone.errors == null ? null : ctx_r57.custForm.controls.phone.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.custForm.controls.phone.errors == null ? null : ctx_r57.custForm.controls.phone.errors.pattern);
} }
function CustDatabaseComponent_div_8_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Location city name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustDatabaseComponent_div_8_div_28_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Number of employees is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustDatabaseComponent_div_8_div_28_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustDatabaseComponent_div_8_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustDatabaseComponent_div_8_div_28_small_1_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustDatabaseComponent_div_8_div_28_small_2_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r59.custForm.controls.numOfEmployees.errors == null ? null : ctx_r59.custForm.controls.numOfEmployees.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r59.custForm.controls.numOfEmployees.errors == null ? null : ctx_r59.custForm.controls.numOfEmployees.errors.pattern);
} }
function CustDatabaseComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustDatabaseComponent_div_8_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustDatabaseComponent_div_8_div_8_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Person of contact: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustDatabaseComponent_div_8_div_13_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Telephone number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CustDatabaseComponent_div_8_div_18_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Location (City): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CustDatabaseComponent_div_8_div_23_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Number of employees: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CustDatabaseComponent_div_8_div_28_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustDatabaseComponent_div_8_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.showAddForm = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.custForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.custForm.controls.name.invalid && (ctx_r2.custForm.controls.name.dirty || ctx_r2.custForm.controls.name.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.custForm.controls.contactPerson.invalid && (ctx_r2.custForm.controls.contactPerson.dirty || ctx_r2.custForm.controls.contactPerson.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.custForm.controls.phone.invalid && (ctx_r2.custForm.controls.phone.dirty || ctx_r2.custForm.controls.phone.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.custForm.controls.location.errors == null ? null : ctx_r2.custForm.controls.location.errors.required) && (ctx_r2.custForm.controls.location.dirty || ctx_r2.custForm.controls.location.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.custForm.controls.numOfEmployees.invalid && (ctx_r2.custForm.controls.numOfEmployees.dirty || ctx_r2.custForm.controls.numOfEmployees.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.custForm.valid);
} }
class CustDatabaseComponent {
    constructor(weatherDataService, currentRouteService) {
        this.weatherDataService = weatherDataService;
        this.currentRouteService = currentRouteService;
        this.currentRoute = 'app-cust-database';
        this.showAddForm = false;
        this.clonedCusts = [];
        this.custData = [];
    }
    ngOnInit() {
        this.currentRouteService.setCurrentRoute(this.currentRoute);
        this.custData = this.weatherDataService.getCustomerData();
        this.custForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            contactPerson: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]*$")]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]*$")]),
            numOfEmployees: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
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
            };
    }
    showForm() {
        this.showAddForm = true;
    }
    onRowEditInit(cust) {
        this.clonedCusts[cust.id] = Object.assign({}, cust);
    }
    onRowEditSave(cust) {
        delete this.clonedCusts[cust.id];
    }
    onRowEditCancel(cust, index) {
        this.custData[index] = this.clonedCusts[cust.id];
        delete this.clonedCusts[cust.id];
    }
    onRowDelete(cust) {
        let index = this.custData.indexOf(cust);
        this.custData = this.custData.filter((val, i) => i != index);
    }
}
CustDatabaseComponent.ɵfac = function CustDatabaseComponent_Factory(t) { return new (t || CustDatabaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_weather_data_service__WEBPACK_IMPORTED_MODULE_2__["WeatherDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_current_route_service__WEBPACK_IMPORTED_MODULE_3__["CurrentRouteService"])); };
CustDatabaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustDatabaseComponent, selectors: [["app-cust-database"]], decls: 9, vars: 3, consts: [[1, "table-container"], ["dataKey", "id", "editMode", "row", 3, "value", "responsive"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "add-cust-btn", "btn", "btn-primary", 3, "click"], ["class", "center-container", 4, "ngIf"], [3, "pEditableRow"], ["pEditableColumn", ""], ["pTemplate", "input"], ["pTemplate", "output"], [2, "text-align", "center"], ["pButton", "", "type", "button", "pInitEditableRow", "", "class", "ui-button-info p-table-button-icon", 3, "click", 4, "ngIf"], ["pButton", "", "type", "button", "pSaveEditableRow", "", "class", "ui-button-success p-table-button-icon", "style", "margin-right: .5em", 3, "click", 4, "ngIf"], ["pButton", "", "type", "button", "pCancelEditableRow", "", "class", "ui-button-danger p-table-button-icon", 3, "click", 4, "ngIf"], ["pButton", "", "type", "button", "pInitEditableRow", "", 1, "ui-button-info", "p-table-button-icon", 3, "click"], [1, "pi", "pi-trash", 2, "font-size", "1em"], ["pInputText", "", "type", "text", 3, "ngModel", "ngModelChange"], [1, "pi", "pi-pencil", 2, "font-size", "1em"], ["pButton", "", "type", "button", "pSaveEditableRow", "", 1, "ui-button-success", "p-table-button-icon", 2, "margin-right", ".5em", 3, "click"], [1, "pi", "pi-check", 2, "font-size", "1em"], ["pButton", "", "type", "button", "pCancelEditableRow", "", 1, "ui-button-danger", "p-table-button-icon", 3, "click"], [1, "pi", "pi-times", 2, "font-size", "1em"], [1, "center-container"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "name", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "text", "formControlName", "contactPerson", 1, "form-control"], ["type", "text", "formControlName", "phone", 1, "form-control"], ["type", "text", "formControlName", "location", 1, "form-control"], ["type", "text", "formControlName", "numOfEmployees", 1, "form-control"], ["type", "submit", 1, "btn", "btn-light", 3, "disabled"], [1, "btn", "btn-link", 3, "click"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function CustDatabaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustDatabaseComponent_ng_template_4_Template, 15, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustDatabaseComponent_ng_template_5_Template, 28, 4, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustDatabaseComponent_Template_button_click_6_listener() { return ctx.showForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustDatabaseComponent_div_8_Template, 34, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.custData)("responsive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddForm);
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], primeng_table__WEBPACK_IMPORTED_MODULE_4__["EditableRow"], primeng_table__WEBPACK_IMPORTED_MODULE_4__["EditableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_4__["CellEditor"], primeng_table__WEBPACK_IMPORTED_MODULE_4__["InitEditableRow"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], primeng_table__WEBPACK_IMPORTED_MODULE_4__["SaveEditableRow"], primeng_table__WEBPACK_IMPORTED_MODULE_4__["CancelEditableRow"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".center-container[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 20px auto;\n  background: #d3d3d3;\n  padding: 10px;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  width: 90%;\n}\n\n.table-container[_ngcontent-%COMP%]   .add-cust-btn[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.table-container[_ngcontent-%COMP%]   .p-table-button-icon[_ngcontent-%COMP%] {\n  border: none !important;\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdC1kYXRhYmFzZS9jdXN0LWRhdGFiYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFDSTtFQUNJLGdCQUFBO0FBQ1I7O0FBRUk7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9jdXN0LWRhdGFiYXNlL2N1c3QtZGF0YWJhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgLmFkZC1jdXN0LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucC10YWJsZS1idXR0b24taWNvbiB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustDatabaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cust-database',
                templateUrl: './cust-database.component.html',
                styleUrls: ['./cust-database.component.scss']
            }]
    }], function () { return [{ type: _service_weather_data_service__WEBPACK_IMPORTED_MODULE_2__["WeatherDataService"] }, { type: src_app_service_current_route_service__WEBPACK_IMPORTED_MODULE_3__["CurrentRouteService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/rain-schedule/rain-schedule.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/rain-schedule/rain-schedule.component.ts ***!
  \**********************************************************/
/*! exports provided: RainScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RainScheduleComponent", function() { return RainScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_weather_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/weather-data.service */ "./src/app/service/weather-data.service.ts");
/* harmony import */ var src_app_service_current_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/current-route.service */ "./src/app/service/current-route.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");






function RainScheduleComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Rainy days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RainScheduleComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pEditableRow", rowData_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r2.contactPerson, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r2.phone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r2.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r2.dates.join(","), " ");
} }
class RainScheduleComponent {
    constructor(weatherDataService, currentRouteService) {
        this.weatherDataService = weatherDataService;
        this.currentRouteService = currentRouteService;
        this.custData = [];
        this.displayData = [];
        this.cityWithRain = [];
        this.rainyCityChartData = [];
        this.rainDate = {};
        this.currentRoute = 'app-rain-schedule';
    }
    ngOnInit() {
        this.currentRouteService.setCurrentRoute(this.currentRoute);
        this.custData = this.weatherDataService.getCustomerData();
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
RainScheduleComponent.ɵfac = function RainScheduleComponent_Factory(t) { return new (t || RainScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_weather_data_service__WEBPACK_IMPORTED_MODULE_1__["WeatherDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_current_route_service__WEBPACK_IMPORTED_MODULE_2__["CurrentRouteService"])); };
RainScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RainScheduleComponent, selectors: [["app-rain-schedule"]], decls: 6, vars: 2, consts: [[1, "table-container"], ["dataKey", "id", "editMode", "row", 3, "value", "responsive"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "pEditableRow"], ["pEditableColumn", ""]], template: function RainScheduleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Customers having rain in next 5 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RainScheduleComponent_ng_template_4_Template, 11, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RainScheduleComponent_ng_template_5_Template, 11, 6, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayData)("responsive", true);
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_3__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], primeng_table__WEBPACK_IMPORTED_MODULE_3__["EditableRow"], primeng_table__WEBPACK_IMPORTED_MODULE_3__["EditableColumn"]], styles: [".center-container[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 20px auto;\n  background: #d3d3d3;\n  padding: 10px;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFpbi1zY2hlZHVsZS9yYWluLXNjaGVkdWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3JhaW4tc2NoZWR1bGUvcmFpbi1zY2hlZHVsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4udGFibGUtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RainScheduleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rain-schedule',
                templateUrl: './rain-schedule.component.html',
                styleUrls: ['./rain-schedule.component.scss']
            }]
    }], function () { return [{ type: src_app_service_weather_data_service__WEBPACK_IMPORTED_MODULE_1__["WeatherDataService"] }, { type: src_app_service_current_route_service__WEBPACK_IMPORTED_MODULE_2__["CurrentRouteService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/current-route.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/current-route.service.ts ***!
  \**************************************************/
/*! exports provided: CurrentRouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentRouteService", function() { return CurrentRouteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CurrentRouteService {
    constructor() {
        this.currentRoute = 'app-cust-database';
    }
    setCurrentRoute(routeStr) {
        this.currentRoute = routeStr;
    }
    getCurrentRoute() {
        return this.currentRoute;
    }
}
CurrentRouteService.ɵfac = function CurrentRouteService_Factory(t) { return new (t || CurrentRouteService)(); };
CurrentRouteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CurrentRouteService, factory: CurrentRouteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentRouteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/weather-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/weather-data.service.ts ***!
  \*************************************************/
/*! exports provided: WeatherDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDataService", function() { return WeatherDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class WeatherDataService {
    constructor(http) {
        this.http = http;
        this.url = 'data/2.5/forecast?q=';
        //urlEnd = '&appid=b124e62b5d798387f996d6cbdad467cd';
        this.urlEnd = '&appid=107a6c58dda97cfd410e280832acd568';
        this.rainDate = {};
        this.custData = [
            {
                id: 0,
                name: 'test1',
                contactPerson: 'test1',
                phone: '1234567890',
                location: 'Greensboro',
                numOfEmployees: '10'
            },
            {
                id: 1,
                name: 'test2',
                contactPerson: 'test2',
                phone: '1234567890',
                location: 'Virginia',
                numOfEmployees: '100'
            },
            {
                id: 2,
                name: 'test3',
                contactPerson: 'test3',
                phone: '1234567890',
                location: 'Philadelphia',
                numOfEmployees: '70'
            },
            {
                id: 3,
                name: 'test4',
                contactPerson: 'test4',
                phone: '1234567890',
                location: 'Toronto',
                numOfEmployees: '5'
            },
            {
                id: 4,
                name: 'test5',
                contactPerson: 'test5',
                phone: '1234567890',
                location: 'New York',
                numOfEmployees: '120'
            },
            {
                id: 5,
                name: 'test6',
                contactPerson: 'test6',
                phone: '1234567890',
                location: 'Tokyo',
                numOfEmployees: '15'
            },
            {
                id: 6,
                name: 'test7',
                contactPerson: 'test7',
                phone: '1234567890',
                location: 'San Jose',
                numOfEmployees: '250'
            },
            {
                id: 7,
                name: 'test8',
                contactPerson: 'test8',
                phone: '1234567890',
                location: 'Michigan',
                numOfEmployees: '25'
            },
            {
                id: 8,
                name: 'test9',
                contactPerson: 'test9',
                phone: '1234567890',
                location: 'Las Vegas',
                numOfEmployees: '110'
            }
        ];
    }
    getCustomerData() {
        return this.custData;
    }
    getWeatherDataByCity(cityNames) {
        let apiArray = [];
        for (let i = 0; i < cityNames.length; i++) {
            apiArray.push(this.http.get('https://api.openweathermap.org/' + this.url + cityNames[i] + this.urlEnd));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(apiArray);
    }
    getRainyCityData(res) {
        let cityWithRain = [];
        let currentDate = new Date(Date.now());
        let cureentFormatDate = currentDate.toLocaleDateString('en-CA');
        let currentDatePlusFive = new Date();
        currentDatePlusFive.setDate(currentDatePlusFive.getDate() + 5);
        let currentDatePlusFiveFormat = currentDatePlusFive.toLocaleDateString('en-CA');
        for (let counterCity = 0; counterCity <= res.length - 1; counterCity++) {
            let cityDetail = res[counterCity];
            let cityWeatherDetail = cityDetail.list;
            for (let counterCityWeatherDetail = 0; counterCityWeatherDetail <= cityWeatherDetail.length - 1; counterCityWeatherDetail++) {
                let dateFromApi = cityWeatherDetail[counterCityWeatherDetail].dt_txt.split(' ')[0];
                if (Date.parse(dateFromApi) <= Date.parse(currentDatePlusFiveFormat) && Date.parse(dateFromApi) >= Date.parse(cureentFormatDate)) {
                    if (cityWeatherDetail[counterCityWeatherDetail].weather[0].main == 'Rain') {
                        if (this.rainDate[cityDetail.city.name]) {
                            this.rainDate[cityDetail.city.name].push(dateFromApi);
                        }
                        else {
                            this.rainDate[cityDetail.city.name] = [dateFromApi];
                        }
                        cityWithRain.push(cityDetail);
                    }
                }
            }
        }
        return cityWithRain;
    }
    getRainyCityTableData(res, uniqueCityNames, custData) {
        let displayData2 = [];
        let cityWithRain = this.getRainyCityData(res);
        let rainyCityNames = cityWithRain.map((obj) => {
            return obj.city.name;
        });
        rainyCityNames = [...(new Set(rainyCityNames))];
        let intersectionCities = rainyCityNames.filter(e => uniqueCityNames.indexOf(e) !== -1);
        displayData2 = custData.filter((obj) => {
            if (intersectionCities.includes(obj.location)) {
                if (this.rainDate[obj.location]) {
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
        rainyCityNames = [...(new Set(rainyCityNames))];
        displayData = custData.filter((obj) => {
            if (rainyCityNames.includes(obj.location)) {
                if (this.rainDate[obj.location]) {
                    this.rainDate[obj.location] = [...(new Set(this.rainDate[obj.location]))];
                    obj['dates'] = this.rainDate[obj.location];
                }
            }
            return obj;
        });
        return displayData;
    }
}
WeatherDataService.ɵfac = function WeatherDataService_Factory(t) { return new (t || WeatherDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
WeatherDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeatherDataService, factory: WeatherDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gitam\Jyotsna\Angular\fakeUmbrella-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map