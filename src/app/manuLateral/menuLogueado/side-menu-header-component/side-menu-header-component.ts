import { Component } from '@angular/core';
import { environment } from '../../../../environment/environment';

@Component({
  selector: 'side-menu-component',
  imports: [],
  templateUrl: './side-menu-header-component.html',
  styleUrl: './side-menu-header-component.css',
})
export class SideMenuComponent {

     env = environment;
}
