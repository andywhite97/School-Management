import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from '../logout/logout.component';
import { PassresetComponent } from './passreset/passreset.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { unathedGuard } from '../guards/unathed.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'rest_pass', component: PassresetComponent },
  { path: 'forgot_pass', component: ForgotpassComponent },
  { path: 'locked', component: LockscreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
