/**
 * Created by "s.t.o.k.a.t.o" on 26.01.2017.
 */

import { Component } from '@angular/core';


@Component({
    selector: 'ponyracer-app',      // Заменяет этот селектор в html на компонент
                                    // Шаблон
    template: `<h1>PonyRacer</h1>  
               <h2>{{numberOfUsers}} users</h2>
               <h2>Welcome {{user?.name}}</h2>
               <ns-races (newRaceAvaible)="onNewRace()"></ns-races>
               `
})
export class PonyRacerAppComponent {
    numberOfUsers: number = 146;
    user:any = { name: 'Cedric' };

    onNewRace() {

    }
}