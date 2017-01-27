/**
 * Created by "s.t.o.k.a.t.o" on 27.01.2017.
 */

import { Component } from '@angular/core';

@Component({
    selector: 'ns-races',
    template: `<div *ngIf="races.length > 0"> <h2>Races</h2> </div> 
    <ul>
      <li *ngFor="let race of races">{{race.name}}</li>
    </ul>
    <button (click)="refreshRaces()">Refresh the races list</button>
    <p>{{races.length}} races</p>
`
})
export class RacesComponent {
    races: any = [];

    refreshRaces() {
        this.races = [ { name: 'London'}, { name: 'Lyon' } ];
    }
}