import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments.component';
import { NewDepartmentComponent } from './new-department/new-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';

const routes: Routes = [
  { path: '', component: DepartmentsComponent },
  { path: 'new', component: NewDepartmentComponent },
  { path: 'edit', component: EditDepartmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
