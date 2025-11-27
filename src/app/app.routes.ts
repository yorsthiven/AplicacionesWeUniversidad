import { Routes } from '@angular/router';
import { InicioPageComponent } from './pages/inicio/inicioPageComponent';

export const routes: Routes = [
  {
    path: '',
    component: InicioPageComponent,
  },
  {
    path:'**',
    redirectTo:''
  }
];
