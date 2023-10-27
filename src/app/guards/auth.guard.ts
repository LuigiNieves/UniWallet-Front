import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

const auth = inject(AuthService);

const router = inject(Router);

export const isLoggedIn: CanActivateFn = (route, state) => {
  if (auth.getAuthToken()) return true;
  router.navigate(['/main']);
  return false;
};

export const isLoggedOut: CanActivateFn = (route, state) => {
  if (!auth.getAuthToken()) return true;
  router.navigate(['/main']);
  return false;
};
