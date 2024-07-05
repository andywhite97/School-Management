import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authedGuard } from './guards/authed.guard';
import { unathedGuard } from './guards/unathed.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NotAllowedComponent } from './errors/not-allowed/not-allowed.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { LogoutComponent } from './logout/logout.component';
import { logoutGuard } from './guards/logout.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [authedGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [unathedGuard]
  },
  {
    path: 'departments',
    loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule),
    canActivate: [authedGuard]
  },
  {
    path: 'classes',
    loadChildren: () => import('./classes/classes.module').then(m => m.ClassesModule),
    canActivate: [authedGuard]
  },
  { path: 'logout', component: LogoutComponent, canActivate: [logoutGuard] },
  { path: '404', component: NotFoundComponent },
  { path: '403', component: NotAllowedComponent },
  { path: '500', component: ServerErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
