import { LoginSideMenuOptionsComponent } from './../menuLogin/login-side-menu-options-component/login-side-menu-options-component';
import { environment } from './../../../environment/environment';
import { Component, inject } from '@angular/core';
import { SideMenuComponent } from '../menuLogueado/side-menu-header-component/side-menu-header-component';
import { SideMenuOptionsComponent } from '../menuLogueado/side-menu-options-component/side-menu-options-component';
import { LoginComponent } from '../menuLogin/login-nombre/login-nombre-component.';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'menu-lateral-component',
  imports: [
    SideMenuComponent,
    SideMenuOptionsComponent,
    LoginComponent,
    LoginSideMenuOptionsComponent,
  ],
  templateUrl: './menu-lateral-component.html',
  styleUrl: './menu-lateral-component.css',
})
export default class MenuLateralComponent {
  env = environment;

  loginService = inject(LoginService);
}
