import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import MenuLateralComponent from '../manuLateral/menu-lateral-component/menu-lateral-component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,MenuLateralComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export default class Dashboard {

}
