/**
 * Created by "s.t.o.k.a.t.o" on 30.01.2017.
 */

import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class RaceService {
    constructor(private apiService: ApiService) {

    }

    list() {
        return this.apiService.get('/races');
    }
}