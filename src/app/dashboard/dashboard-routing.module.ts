import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { AllFeesComponent } from './principal/all-fees/all-fees.component';
import { StudentFeesComponent } from './principal/student-fees/student-fees.component';
import { principalGuard } from '../guards/principal.guard';
import { PrincipalModule } from './principal/principal.module';
import { lecturerGuard } from '../guards/lecturer.guard';
import { studentGuard } from '../guards/student.guard'

const routes: Routes = [
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule),
    canActivate: [principalGuard]
  },

  {
    path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule),
    canActivate: [lecturerGuard]
  },

  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
    canActivate: [studentGuard]
  },

  { path: 'principal/fees', component: AllFeesComponent },
  { path: 'principal/fees/student', component: StudentFeesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
