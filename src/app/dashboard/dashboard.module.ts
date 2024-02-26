import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    TeacherComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
