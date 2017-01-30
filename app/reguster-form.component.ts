/**
 * Created by "s.t.o.k.a.t.o" on 30.01.2017.
 */

import { Component } from '@angular/core';

@Component({
    selector: 'ns-register',
    templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {
    user = new User();

    register(user) {
        console.log(this.user);
    }
}

class User {
    username: string;
    password: string;
}