import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class loggedInGuard {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (!localStorage.getItem('user')) {
      // Aquí asumo que guardas un token cuando el usuario está loggeado.
      // return false;
      return true;
    }
    this.router.navigate(['/main']); // Redireccionar a main si está loggeado.
    return false;
  }
}
