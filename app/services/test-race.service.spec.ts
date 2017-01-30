/**
 * Created by "s.t.o.k.a.t.o" on 30.01.2017.
 */

import {TestRaceService} from "./test.race.service";
import {TestBed, async} from "@angular/core/testing";


// describe('TestRiceService', () => {
//     let service: TestRaceService;
//
//     beforeEach(() => TestBed.configureTestingModule({
//         providers: [TestRaceService]
//     }));
//
//     beforeEach(() => service = TestBed.get(TestRaceService));
//
//     if('should return a promise of 2 races', async(() => {
//             service.list().then(races => {
//                 expect(races.length).toBe(2);
//             });
//         });
//
//
//    // it('should return races when list() is called', () => {
//    //    const raceService = new TestBed.get(TestRaceService);
//    //    expect(raceService.list().length).toBe(2);
//    // });
//
// });