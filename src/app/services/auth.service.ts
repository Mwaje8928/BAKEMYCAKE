import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  
  login(adminCode: string) {
    this.isLoggedIn = adminCode === "CAKE123";
  }

  logout() {
    this.isLoggedIn = false;
  }
  constructor() { }
}
