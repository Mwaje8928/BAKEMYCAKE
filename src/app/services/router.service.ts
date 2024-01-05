import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  navigateToLandingView() {
    this.router.navigate([""]);
  }
  navigateToCakeRequestsView() {
    this.router.navigate(["cake-requests"]);
  }

  navigateToLoginView() {
    this.router.navigate(["login"]);
}
}
