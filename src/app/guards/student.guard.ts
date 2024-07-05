import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const studentGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  var role = localStorage.getItem('role')

  if (role  == 'student') {
    return true
  }
  router.navigate(['/403'])
  return false;
};
