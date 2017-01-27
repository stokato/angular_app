/**
 * Created by "s.t.o.k.a.t.o" on 26.01.2017.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PonyRacerAppComponent } from './app.component';
import { RacesComponent } from './races.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [ PonyRacerAppComponent, RacesComponent ],
    bootstrap: [ PonyRacerAppComponent ]
})

export class AppModule {

}