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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var race_service_1 = require("./services/race.service");
var PonyRacerAppComponent = (function () {
    function PonyRacerAppComponent(raceService) {
        this.raceService = raceService;
        this.numberOfUsers = 146;
        this.user = { name: 'Cedric' };
        this.minuteLast = new Date(2012, 0, 1, 0, 0, 0, 0);
    }
    PonyRacerAppComponent.prototype.onNewRace = function () {
    };
    PonyRacerAppComponent.prototype.list = function () {
        return this.raceService.list();
    };
    return PonyRacerAppComponent;
}());
PonyRacerAppComponent = __decorate([
    core_1.Component({
        selector: 'ponyracer-app',
        // Шаблон
        template: "<h1 class=\"red\">PonyRacer</h1>  \n               <h2>{{numberOfUsers}} users</h2>\n               <h2>Welcome {{user?.name}}</h2>\n               <ns-races (newRaceAvaible)=\"onNewRace()\"></ns-races>\n               <p>{{list() | json}}</p> \n               <p>Date: {{minuteLast | fromNow}}</p>\n               ",
        styles: [".red { color: red; }"]
    }),
    __metadata("design:paramtypes", [race_service_1.RaceService])
], PonyRacerAppComponent);
exports.PonyRacerAppComponent = PonyRacerAppComponent;
//# sourceMappingURL=app.component.js.map