import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logoutGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  var role = localStorage.getItem('role')
  var user = localStorage.getItem('user')

  if (role && user) {
    localStorage.removeItem('user')
    localStorage.removeItem('role')
    return true
  }
  router.navigate(['/auth/login'])
  return false;
};
