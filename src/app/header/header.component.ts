import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  loggedIn: boolean | undefined;

  constructor(private authService: AuthService, private routerService: RouterService) { }

  ngOnInit(): void {
  }
  
  logout() {
    this.authService.logout();
    this.routerService.navigateToLoginView();
  }
}
