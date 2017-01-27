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
var core_1 = require("@angular/core");
var PonyRacerAppComponent = (function () {
    function PonyRacerAppComponent() {
        this.numberOfUsers = 146;
        this.user = { name: 'Cedric' };
    }
    PonyRacerAppComponent.prototype.onNewRace = function () {
    };
    return PonyRacerAppComponent;
}());
PonyRacerAppComponent = __decorate([
    core_1.Component({
        selector: 'ponyracer-app',
        // Шаблон
        template: "<h1>PonyRacer</h1>  \n               <h2>{{numberOfUsers}} users</h2>\n               <h2>Welcome {{user?.name}}</h2>\n               <ns-races (newRaceAvaible)=\"onNewRace()\"></ns-races>\n               "
    })
], PonyRacerAppComponent);
exports.PonyRacerAppComponent = PonyRacerAppComponent;
//# sourceMappingURL=app.component.js.map