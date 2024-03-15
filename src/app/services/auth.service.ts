import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(public router: Router) {}

  login(email: string, password: string): boolean {
    const users = [
      { id: 1, name: "Tushar Chaudhari", email: "admin@gmail.com", password: "admin123", role: "Admin" },
      { id: 2, name: "Tushar Chaudhari", email: "superadmin@gmail.com", password: "superadmin123", role: "Super Admin" }
    ];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user)); 
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  getUser(): any {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.getUser();
    if (currentUser) {
      return true;
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////