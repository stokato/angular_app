/**
 * Created by "s.t.o.k.a.t.o" on 30.01.2017.
 *
 * Свой пайп
 */


import { PipeTransform, Pipe } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'fromNow' })
export class FromNowPipe implements PipeTransform {
    transform (value, args) {
        return moment(value).fromNow();
    }
}