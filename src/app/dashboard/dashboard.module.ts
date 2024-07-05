import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { AllFeesComponent } from './principal/all-fees/all-fees.component';
import { StudentFeesComponent } from './principal/student-fees/student-fees.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    TeacherComponent,
    StudentComponent,
    AllFeesComponent,
    StudentFeesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
