/**
 * Created by "s.t.o.k.a.t.o" on 30.01.2017.
 */

import {Input, Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'ns-pony',
    template: `<div (click)="selectPony()">{{pony.name}}</div>`
})
export class PonyComponent {
    @Input() pony: Pony;

    @Output() ponySelected = new EventEmitter<Pony>();
    // @Output('ponySelected') emitter = new EventEmitter<Pony>();

    selectPony() {
        this.ponySelected.emit(this.pony);
    }
}

@Component({
    selector: 'ns-ponies',
    template: `<div>
               <h2>Ponies</h2>
               <ns-pony *ngFor="let currentPony of ponies" [pony]="currentPony"
               (ponySelected)="betOnPony($event)"></ns-pony>
               </div>`
})
export class PoniesComponentList {
    ponies: Array<Pony> = [
        { id: 1, name: 'Rainbow Dash' },
        { id: 2, name: 'Pinkie Pie' }
    ];

    betOnPony(pony) {
        console.log(pony);
    }
}


class Pony {
    id: number;
    name: string;
}