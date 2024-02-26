import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'student', component: StudentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
