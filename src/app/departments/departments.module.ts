import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { NewDepartmentComponent } from './new-department/new-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';


@NgModule({
  declarations: [
    DepartmentsComponent,
    NewDepartmentComponent,
    EditDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule
  ]
})
export class DepartmentsModule { }
