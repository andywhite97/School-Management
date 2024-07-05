import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email: string = ''
  password: string = ''
  submitted: boolean = false

  login() {
    this.submitted = true

    setTimeout(() => {

      if (this.email == 'principal@acs.com' && this.password == 'test@321') {
        //Redirect to principal portal
        localStorage.setItem('user', 'principal'),
        localStorage.setItem('role', 'principal'),
        this.submitted = false,
        window.location.reload()
      , (err:any) => console.log(err)
      }

      if (this.email == 'lecturer@acs.com' && this.password == 'test@321') {
        //Redirect to lecturer portal
        localStorage.setItem('user', 'lecturer'),
        localStorage.setItem('role', 'lecturer'),
        this.submitted = false,
        window.location.reload()
      , (err:any) => console.log(err)
      }

      if (this.email == 'student@acs.com' && this.password == 'test@321') {
        //Redirect to student portal
        localStorage.setItem('user', 'student'),
        localStorage.setItem('role', 'student'),
        this.submitted = false,
        window.location.reload()
      , (err:any) => console.log(err)
      }

    }, 3000)

  }
}
