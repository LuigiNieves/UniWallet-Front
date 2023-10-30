import { Router } from '@angular/router';
import { Inject } from '@angular/core';

const isLogged: () => Promise<Boolean> = async (): Promise<Boolean> => {
  const router: Router = Inject(Router);
  const value = localStorage.getItem('user');

  if (value !== null) return true;
  await router.navigate(['/login']);

  return false;
};

const logOut: () => void = () => localStorage['clearItem']('user');

export { isLogged, logOut };
