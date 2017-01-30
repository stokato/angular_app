/**
 * Created by "s.t.o.k.a.t.o" on 26.01.2017.
 */
"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var race_service_1 = require("./services/race.service");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .then(function (appRef) { return playWithInjector(appRef.injector); });
function playWithInjector(inj) {
    console.log(inj.get(race_service_1.RaceService));
    console.log(inj.get('RaceServiceToken'));
    console.log(inj.get(race_service_1.RaceService) === inj.get(race_service_1.RaceService));
    console.log(inj.get(race_service_1.RaceService) === inj.get('RaceServiceToken'));
}
//# sourceMappingURL=main.js.map