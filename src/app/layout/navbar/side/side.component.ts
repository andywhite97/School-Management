import { Component } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html'
})
export class SideComponent {

  role = localStorage.getItem('role')

}
