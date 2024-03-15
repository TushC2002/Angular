import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(public router: Router) {}

  login() {
    const users = [
      { id: 1, name: "Tushar Chaudhari", email: "admin@gmail.com", password: "admin123", role: "Admin" },
      { id: 2, name: "Tushar Chaudhari", email: "superadmin@gmail.com", password: "superadmin123", role: "Super Admin" }
    ];

    const user = users.find(user => user.email === this.email && user.password === this.password);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user)); 
      this.router.navigate(['/home']);
    } else {
      alert("Invalid email or password");
    }
  }
}