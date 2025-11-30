import { Component } from '@angular/core';

import { RouterLink } from "@angular/router";
import { MenuOption } from '../../../interfaces/optionsMenu';

@Component({
  selector: 'side-menu-options-component',
  imports: [RouterLink],
  templateUrl: './side-menu-options-component.html',
  styleUrl: './side-menu-options-component.css',
})
export class SideMenuOptionsComponent {

  menuOptions: MenuOption[] = [
    {
      label: 'Home',
      subLabel: 'Este es el home',
      route: '/dashboard/trending',
      icon: 'fa-solid fa-chart-line',
    },
    {
      label: 'Hábitos',
      subLabel: 'Crear hábitos ',
      route: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass',
    },
  ];
}
