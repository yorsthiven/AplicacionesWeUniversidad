import { Routes } from '@angular/router';
import { InicioPageComponent } from './pages/inicio/inicioPageComponent';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard'),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login-page/login-page.component'),
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home-page.component/home-page.component'),
      },
      {
        path: 'olvidoClave',
        loadComponent: () => import('./pages/olvido-clave-page-component/olvido-clave-page-component'),
      },
      {
        path: 'lateral',
        loadComponent: () => import('./manuLateral/menu-lateral-component/menu-lateral-component'),
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
