import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'inicio-page',
  imports: [RouterLink],
  templateUrl: './inicioPageComponent.html',
  styleUrl: './inicioPageComponent.css',
})
export class InicioPageComponent {
  errorMsg = '';

  loginService = inject(LoginService);

  username = signal('');
  password = signal('');

  // Señales para estado de login
  private validUser = signal('admin');
  private validPass = signal('1234');
  private error = signal(false);

  constructor(private router: Router) {
    this.loginService.logueado.set(false);
  }

  onSearch(query: string) {
    this.username.set(query);
  }

  onSearch2(query: string) {
    this.password.set(query);
  }

  ruta = signal('');

  onLogin(event: Event) {
    event.preventDefault();
    if (this.username() === this.validUser() && this.password() === this.validPass()) {
      this.error.set(false);
      // Aquí puedes redirigir o mostrar el menú lateral
      // this.ruta.set('/dashboard/home');
      this.loginService.logueado.set(true);
      this.router.navigate(['/dashboard/home']);
    } else {
      this.error.set(true);
      this.loginService.logueado.set(false);
    }
  }

  loginError() {
    // return this.error();
  }
}
