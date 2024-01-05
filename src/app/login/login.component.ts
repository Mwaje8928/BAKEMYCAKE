import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private routerService: RouterService) { }

  adminCode: string = "";
  adminCodeInvalid: boolean = false;

  validateAdminCode() {
    const correctAdminCode = 'CAKE123';

    if (this.adminCode !== correctAdminCode) {
      this.adminCodeInvalid = true;
    } else {
      this.adminCodeInvalid = false;
      this.routerService.navigateToCakeRequestsView();
    }
  }

  ngOnInit(): void {
  }

}
