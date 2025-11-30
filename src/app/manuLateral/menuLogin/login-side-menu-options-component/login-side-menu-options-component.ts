import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive } from "@angular/router";
import { MenuOption } from '../../../interfaces/optionsMenu';

@Component({
  selector: 'side-menu-options-logueado-component',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './login-side-menu-options-component.html',
  styleUrl: './login-side-menu-options-component.css',
})
export class LoginSideMenuOptionsComponent {

  menuOptions: MenuOption[] = [
    {
      label: 'Olvidé mi clave',
      subLabel: 'Este es el home',
      route: '/dashboard/olvidoClave',
      icon: 'fa-solid fa-chart-line',
    },
    {
      label: 'Olvidé mi correo',
      subLabel: 'Crear hábitos ',
      route: '/dashboard/correoOlvidado',
      icon: 'fa-solid fa-magnifying-glass',
    },
    {
      label: 'Recuperar contraseña',
      subLabel: 'Crear hábitos ',
      route: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass',
    },
  ];
}
