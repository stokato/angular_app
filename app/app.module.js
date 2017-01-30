/**
 * Created by "s.t.o.k.a.t.o" on 26.01.2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var IS_PROD = false;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var races_component_1 = require("./races.component");
var ponies_component_1 = require("./ponies.component");
var api_service_1 = require("./services/api.service");
var race_service_1 = require("./services/race.service");
var fake_race_service_1 = require("./services/fake-race.service");
var from_now_pipe_1 = require("./from.now.pipe");
var pony_imputs_1 = require("./pony.imputs");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [
            app_component_1.PonyRacerAppComponent,
            races_component_1.RacesComponent,
            ponies_component_1.PoniesComponent,
            from_now_pipe_1.FromNowPipe,
            pony_imputs_1.PonyComponent,
            pony_imputs_1.PoniesComponentList
        ],
        providers: [
            api_service_1.ApiService,
            // { provide: RaceService, useClass: RaceService },
            // Друкой провайтер этого класса с другим токеном
            { provide: 'RaceServiceToken', useClass: race_service_1.RaceService },
            { provide: race_service_1.RaceService, useClass: fake_race_service_1.FakeRaceService }
        ],
        bootstrap: [app_component_1.PonyRacerAppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map