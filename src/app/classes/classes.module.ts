import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from './classes.component';
import { NewClassComponent } from './new-class/new-class.component';
import { EditClassComponent } from './edit-class/edit-class.component';


@NgModule({
  declarations: [
    ClassesComponent,
    NewClassComponent,
    EditClassComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule
  ]
})
export class ClassesModule { }
