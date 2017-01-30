/**
 * Created by "s.t.o.k.a.t.o" on 26.01.2017.
 */

import { Component } from '@angular/core';
import {RaceService} from "./services/race.service";


@Component({
    selector: 'ponyracer-app',      // Заменяет этот селектор в html на компонент
                                    // Шаблон
    template: `<h1 class="red">PonyRacer</h1>  
               <h2>{{numberOfUsers}} users</h2>
               <h2>Welcome {{user?.name}}</h2>
               <ns-races (newRaceAvaible)="onNewRace()"></ns-races>
               <p>{{list() | json}}</p> 
               <p>Date: {{minuteLast | fromNow}}</p>
               `,             // Используем пайп
    styles: [`.red { color: red; }`]
})
export class PonyRacerAppComponent {
    numberOfUsers: number = 146;
    user:any = { name: 'Cedric' };

    constructor(private  raceService: RaceService) {

    }

    onNewRace() {

    }

    list() {
        return this.raceService.list();
    }

    minuteLast: any = new Date(2012, 0, 1, 0, 0, 0, 0);
}