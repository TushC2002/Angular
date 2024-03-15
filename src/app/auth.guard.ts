// import { Injectable, inject } from '@angular/core';
// import { Router, CanActivateFn, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// class PermissionsService {

//   constructor(public router: Router) {}

//   login(email: string, password: string): boolean {
//     const users = [
//       { id: 1, name: "Tushar Chaudhari", email: "admin@gmail.com", password: "admin123", role: "Admin" },
//       { id: 2, name: "Tushar Chaudhari", email: "superadmin@gmail.com", password: "superadmin123", role: "Super Admin" }
//     ];

//     const user = users.find(user => user.email === email && user.password === password);

//     if (user) {
//       localStorage.setItem('user', JSON.stringify(user)); 
//       return true;
//     } else {
//       return false;
//     }
//   }

//   logout(): void {
//     localStorage.removeItem('user');
//     this.router.navigate(['/login']);
//   }

//   isAuthenticated(): boolean {
//     return !!localStorage.getItem('user');
//   }

//   getUser(): any {
//     const userStr = localStorage.getItem('user');
//     return userStr ? JSON.parse(userStr) : null;
//   }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     const currentUser = this.getUser();
//     if (currentUser) {
//       // User is logged in, so return true
//       return true;
//     } else {
//       // User is not logged in, redirect to login page with return URL
//       this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//       return false;
//     }
//   }

// }
// export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
//   return inject(PermissionsService).canActivate(route, state);
// }