/**
 * Created by "s.t.o.k.a.t.o" on 26.01.2017.
 */

const IS_PROD = false;

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PonyRacerAppComponent } from './app.component';
import { RacesComponent } from './races.component';
import { PoniesComponent } from './ponies.component';
import {ApiService} from "./services/api.service";
import {RaceService} from "./services/race.service";
import {FakeRaceService} from "./services/fake-race.service";
import {FromNowPipe} from "./from.now.pipe";
import {PonyComponent, PoniesComponentList} from "./pony.imputs";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        PonyRacerAppComponent,
        RacesComponent,
        PoniesComponent,
        FromNowPipe,
        PonyComponent,
        PoniesComponentList
    ],
    providers: [
      ApiService,
        // { provide: RaceService, useClass: RaceService },
        // Друкой провайтер этого класса с другим токеном
        { provide: 'RaceServiceToken', useClass: RaceService },
        { provide: RaceService, useClass: FakeRaceService }
        // другой вариант
        // { provide: RaceService,
        //     useFactory: (apiService) => IS_PROD ? new RaceService(apiService)
        //         : new FakeRaceService(),
        //     deps: [ApiService]
        // },
        // // И еще один вариант
        // { provide: 'IS_PROD', useValue: true },
        // { provide: RaceService,
        //     useFactory: (IS_PROD, apiService) => IS_PROD? new RaceService(apiService) :
        //                     new FakeRaceService(),
        //     deps: ['IS_PROD', ApiService]}
    ],
    bootstrap: [ PonyRacerAppComponent ]
})

export class AppModule {

}