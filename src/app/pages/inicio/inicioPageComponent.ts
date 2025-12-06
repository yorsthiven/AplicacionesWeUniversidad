import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'inicio-page',
  imports: [],
  templateUrl: './inicioPageComponent.html',
  styleUrl: './inicioPageComponent.css',
})
export class InicioPageComponent {
  errorMsg = '';

  loginService = inject(LoginService);

  username = signal('');
  password = signal('');
  loading = signal(false);

  // Señales para estado de login
  private validUser = signal('admin');
  private validPass = signal('1234');
  public error = signal(false);

  constructor(private router: Router) {
    this.loginService.logueado.set(false);
    console.log(this.error());
  }

  onLogin(event: Event) {

    event.preventDefault();
    this.loading.set(true);
    this.error.set(false);

    setTimeout(() => {
      this.loading.set(false);
      if (this.username() === this.validUser() && this.password() === this.validPass()) {
        // Aquí puedes redirigir o mostrar el menú lateral
        this.loginService.logueado.set(true);
        this.router.navigate(['/dashboard/home']);
      } else {
        this.loginError();
        this.error.set(true);
        this.loginService.logueado.set(false);
      }
    }, 3000);
  }

  loginError() {
    // alert('Usuario o contraseña incorrectos');
    this.username.set('');
    this.password.set('');
    return this.error();
  }
}
