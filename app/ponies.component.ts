/**
 * Created by "s.t.o.k.a.t.o" on 30.01.2017.
 */

import { Component } from '@angular/core';
import {JsonPipe} from "@angular/common";

@Component({
    selector: 'ns-ponies',
    providers: [JsonPipe],
    template: `<button (click)="refreshPonies()">Refresh</button>
              <ul>
                <li *ngFor="let pony of ponies; let isEven=even"
                [style.color]="isEven? 'green' : 'black'">{{pony.name}}</li>
              </ul>
              <p>{{poniesAsJson}}</p>
              `
})

export class PoniesComponent {
    ponies: Array<any> = [ { name: 'Rainbow Dash ' }, { name: 'Pinkie Pie' } ];

    refreshPonies() {
        this.ponies= [ { name: 'Fluttershy' }, { name: 'Rarity' } ];
    }

    poniesAsJson: string;

    constructor(jsonPipe: JsonPipe) {
        this.poniesAsJson = jsonPipe.transform(this.ponies);
    }
}

