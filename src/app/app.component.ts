import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'School Management';
  authed: boolean = false

  constructor(
    router: Router
  ) {
    router.events.subscribe(e => {
      if(e instanceof NavigationStart) {
        this.onActivate()
      }
    })
  }


  authenticated() {
    var role = localStorage.getItem('role')

    if (role == 'principal') {

    }

    if (role == 'lecturer') {

    }

    if (role == 'student') {

    }
  }

  onActivate() {
    var user = localStorage.getItem('user')

    if (user) {
      this.authed = true
    }
  }
}
