import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class loggedOutGuard {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (!localStorage.getItem('user')) {
      // Aquí asumo que guardas un token cuando el usuario está loggeado.
      this.router.navigate(['/login']); // Redireccionar a login si no está loggeado.
      return false;
    }
    return true;
  }
}
