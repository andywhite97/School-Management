import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const unathedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  var user = localStorage.getItem('user')
  var role = localStorage.getItem('role')

  if (user) {
    if (role == 'principal') {
      router.navigate(['/dashboard/principal'])
    }
    if (role == 'lecturer') {
      router.navigate(['/dashboard/teacher'])
    }
    if (role == 'student') {
      router.navigate(['/dashboard/student'])
    }
    return false
  }
  return true;
};
