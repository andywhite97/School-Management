import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  var user = localStorage.getItem('user')

  if (!user) {
    router.navigate(['/auth/login'])
    return false
  }
  return true;
};
