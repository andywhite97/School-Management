import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes.component';
import { NewClassComponent } from './new-class/new-class.component';
import { EditClassComponent } from './edit-class/edit-class.component';

const routes: Routes = [
  { path: '', component: ClassesComponent },
  { path: 'new', component: NewClassComponent },
  { path: 'edit', component: EditClassComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
